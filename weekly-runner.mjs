import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { renderRepoReport, updateBlacklist } from "./scanner.mjs";
import { cloneUrl, prunableReports } from "./targets.mjs";
import { mapSemgrep } from "./semgrep.mjs";
import { buildReviewPrompt, callReviewer, reviewerDecision, escalateVerdict, clearStrikes, queueReviewerError, readSpend, recordSpend } from "./llm-review.mjs";

const LLM_KEY = process.env.LLM_API_KEY || "";
const LLM_MODEL = process.env.LLM_MODEL || "";
const LLM_FALLBACKS = (process.env.LLM_FALLBACKS || "").split(",").map((s) => s.trim()).filter(Boolean);
const LLM_BUDGET = parseFloat(process.env.LLM_MONTHLY_BUDGET_USD || "5");
const LLM_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
function currentMonth() { return new Date().toISOString().slice(0, 7); }

const SCAN_TOKEN = process.env.SCAN_TOKEN || "";
const today = new Date().toISOString().slice(0, 10);
const targets = JSON.parse(readFileSync("targets.json", "utf8"));
if (!existsSync("work-weekly")) mkdirSync("work-weekly");

let reviewQueue = existsSync("review-queue.json") ? JSON.parse(readFileSync("review-queue.json", "utf8") || "{}") : {};
if (!reviewQueue.items) reviewQueue.items = {};
let blacklist = existsSync("blacklist.json") ? JSON.parse(readFileSync("blacklist.json", "utf8") || "{}") : {};
const summary = [];
for (const t of targets) {
  const dir = "work-weekly/" + t.name;
  try {
    if (!existsSync(dir)) {
      execSync("git clone --depth 400 " + cloneUrl(t, SCAN_TOKEN) + " " + dir, { stdio: "inherit" });
    } else {
      execSync("git -C " + dir + " fetch --depth 400 origin", { stdio: "inherit" });
      execSync("git -C " + dir + " reset --hard origin/HEAD", { stdio: "inherit" });
    }
    const head = execSync("git -C " + dir + " rev-parse HEAD", { encoding: "utf8" }).trim();
    let findings = [];
    try {
      execSync("semgrep --version", { stdio: "ignore" });
      const sgFile = "work-weekly/sg-" + t.name + ".json";
      execSync("semgrep scan --config semgrep/ --json -o " + sgFile + " --include='*.kt' --include='*.java' " + dir + " || true", { stdio: "ignore" });
      if (existsSync(sgFile)) findings = mapSemgrep(readFileSync(sgFile, "utf8"));
    } catch { /* semgrep failed: report empty */ }
    const detHigh = findings.some((f) => f.severity === "high");
    if (LLM_KEY && LLM_MODEL && detHigh && !readSpend("llm-spend.json", currentMonth(), LLM_BUDGET).overBudget) {
      for (const rt of findings.filter((f) => f.severity === "high").slice(0, 2)) {
        try {
          const prompt = buildReviewPrompt({ repo: t.repo, file: rt.file, reason: rt.reason, excerpt: rt.excerpt, history: "weekly full-tree scan" });
          const r = await callReviewer({ endpoint: LLM_ENDPOINT, apiKey: LLM_KEY, model: LLM_MODEL, fallbacks: LLM_FALLBACKS, prompt });
          recordSpend("llm-spend.json", r.cost || 0, currentMonth());
          const action = reviewerDecision({ verdict: r.verdict, detHigh: true });
          if (action === "ban") {
            findings.push({ severity: "critical", llm: "confirmed", file: rt.file, reason: "[llm-reviewer " + r.model + "] malicious (" + r.verdict.confidence + ", " + r.verdict.category + "): " + r.verdict.evidence.join(","), excerpt: String(r.verdict.reasoning).slice(0, 500) });
          } else if (action === "queue") {
            const esc = escalateVerdict({ queue: reviewQueue, today, target: t.name, file: rt.file, verdict: r.verdict });
            if (esc.action === "ban") {
              findings.push({ severity: "critical", llm: "confirmed", file: rt.file, reason: "[repeat-offender " + r.model + "] " + esc.reason + ": " + r.verdict.category + " (" + r.verdict.confidence + ")", excerpt: String(r.verdict.reasoning).slice(0, 500) });
            } else {
              const key = today + "|" + t.name + "|" + rt.file + "|" + r.verdict.verdict;
              reviewQueue.items[key] = { date: today, target: t.name, repo: t.repo, file: rt.file, verdict: r.verdict.verdict, confidence: r.verdict.confidence, category: r.verdict.category, evidence: r.verdict.evidence, reasoning: String(r.verdict.reasoning).slice(0, 300), source: "weekly" };
            }
          } else {
            clearStrikes(reviewQueue, t.name, rt.file);
          }
        } catch (e) {
          rt.llm = "pending";
          queueReviewerError({ queue: reviewQueue, today, target: t.name, repo: t.repo, file: rt.file, reason: rt.reason, error: e, source: "weekly" });
        }
      }
    }
    const reportDir = "reports/weekly/" + today;
    if (!existsSync(reportDir)) mkdirSync(reportDir, { recursive: true });
    const reportRel = reportDir + "/" + t.name + ".md";
    writeFileSync(reportRel, renderRepoReport(t.repo, head, findings, today) + "\n_weekly full-tree Semgrep scan_\n");
    blacklist = updateBlacklist(t.name, t.repo, head, findings, blacklist, today, reportRel).blacklist;
    const high = findings.filter((f) => f.severity === "high").length;
    const crit = findings.filter((f) => f.severity === "critical").length;
    summary.push({ name: t.name, sha: head.slice(0, 7), crit, high, total: findings.length });
  } catch (e) {
    summary.push({ name: t.name, sha: "error", crit: 0, high: 0, total: 0 });
  }
}
writeFileSync("review-queue.json", JSON.stringify(reviewQueue, null, 2) + "\n");
writeFileSync("blacklist.json", JSON.stringify(blacklist, null, 2) + "\n");
if (!existsSync("llm-spend.json")) writeFileSync("llm-spend.json", JSON.stringify({ month: currentMonth(), total: 0 }, null, 2) + "\n");
let md = "# Weekly deep scan — " + today + "\n\nFull-tree Semgrep over all targets (dormant-code hunt). Deterministic rule engine stays diff-only in the 4h workflow.\n\n| target | commit | crit | high | total |\n|---|---|---|---|---|\n";
for (const s of summary) md += "| " + s.name + " | " + s.sha + " | " + s.crit + " | " + s.high + " | " + s.total + " |\n";
writeFileSync("reports/weekly/" + today + "/summary.md", md);
// Prune OK-only 4h reports older than 30 days (findings reports stay forever).
try {
  const entries = [];
  for (const d of readdirSync("reports", { withFileTypes: true })) {
    if (!d.isDirectory() || d.name === "weekly" || !/^\d{4}-\d{2}-\d{2}$/.test(d.name)) continue;
    for (const f of readdirSync("reports/" + d.name)) {
      const m = f.match(/-run\d+-([A-Z]+)(-|_|\.)/);
      entries.push({ path: "reports/" + d.name + "/" + f, date: d.name, status: m ? m[1] : "" });
    }
  }
  const gone = prunableReports(entries, today, 30);
  for (const p of gone) { try { rmSync(p); } catch { /* already gone */ } }
  console.log("pruned " + gone.length + " old OK reports");
} catch { /* reports dir absent: nothing to prune */ }
console.log("weekly done " + summary.length + " targets");
