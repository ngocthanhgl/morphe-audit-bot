import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { loadConfig, scanDiff, renderRepoReport, updateSignalsAndCrossCheck, updateBlacklist, applyPardons, reportFilename, nextRunSeq } from "./scanner.mjs";
import { analyzeBlob } from "./binary.mjs";
import { mapSemgrep } from "./semgrep.mjs";
import { buildReviewPrompt, callReviewer, reviewerDecision, adjudicateFinding, readSpend, recordSpend } from "./llm-review.mjs";

import { cloneUrl } from "./targets.mjs";

const LLM_KEY = process.env.LLM_API_KEY || "";
const SCAN_TOKEN = process.env.SCAN_TOKEN || "";
const LLM_MODEL = process.env.LLM_MODEL || "";
const LLM_FALLBACKS = (process.env.LLM_FALLBACKS || "").split(",").map((s) => s.trim()).filter(Boolean);
const LLM_BUDGET = parseFloat(process.env.LLM_MONTHLY_BUDGET_USD || "5");
const LLM_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const LLM_MAX_REVIEWS = 12;
let llmReviewsUsed = 0;
function currentMonth() { return new Date().toISOString().slice(0, 7); }
function llmAllowed() {
  return LLM_KEY && LLM_MODEL && llmReviewsUsed < LLM_MAX_REVIEWS && !readSpend("llm-spend.json", currentMonth(), LLM_BUDGET).overBudget;
}

const today = new Date().toISOString().slice(0, 10);
const targets = JSON.parse(readFileSync("targets.json", "utf8"));
const cfg = loadConfig("config/allowlist.json");
const state = existsSync("state.json") ? JSON.parse(readFileSync("state.json", "utf8") || "{}") : {};
let signals = existsSync("signals.json") ? JSON.parse(readFileSync("signals.json", "utf8") || "{}") : {};
let blacklist = existsSync("blacklist.json") ? JSON.parse(readFileSync("blacklist.json", "utf8") || "{}") : {};
const pardons = existsSync("config/pardons.json") ? JSON.parse(readFileSync("config/pardons.json", "utf8") || "{}") : {};
{
  const p = applyPardons(blacklist, pardons);
  blacklist = p.blacklist;
  for (const n of p.freed) console.log("PARDONED " + n + ": " + (pardons.reason || "manual pardon"));
}
let reviewQueue = existsSync("review-queue.json") ? JSON.parse(readFileSync("review-queue.json", "utf8") || "{}") : {};
if (!reviewQueue.items) reviewQueue.items = {};
if (!existsSync("work")) mkdirSync("work");

const rows = [];
for (const t of targets) {
  const prior = blacklist.repos && blacklist.repos[t.name];
  if (prior) {
    rows.push({ name: t.name, repo: t.repo, sha: (state[t.name] || prior.sha || "-").slice(0, 7), status: "BANNED", crit: 0, high: 0, med: 0, crits: [], report: prior.report });
    continue;
  }
  const dir = "work/" + t.name;
  try {
    if (!existsSync(dir)) {
      execSync("git clone --depth 100 " + cloneUrl(t, SCAN_TOKEN) + " " + dir, { stdio: "inherit" });
    } else {
      try { execSync("git -C " + dir + " remote set-url origin " + cloneUrl(t, SCAN_TOKEN), { stdio: "ignore" }); } catch { /* keep existing remote */ }
      execSync("git -C " + dir + " fetch --depth 100 origin", { stdio: "inherit" });
      execSync("git -C " + dir + " reset --hard origin/HEAD", { stdio: "inherit" });
    }
    const head = execSync("git -C " + dir + " rev-parse HEAD", { encoding: "utf8" }).trim();
    const old = state[t.name];
    let diff = "";
    let shallow = false;
    if (old) {
      try {
        diff = execSync("git -C " + dir + " diff " + old + ".." + head + " --", { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
      } catch {
        try {
          execSync("git -C " + dir + " fetch --deepen=500 origin", { stdio: "ignore" });
          diff = execSync("git -C " + dir + " diff " + old + ".." + head + " --", { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
        } catch { shallow = true; }
      }
    }
    if (shallow) {
      const reportDir = "reports/" + today;
      if (!existsSync(reportDir)) mkdirSync(reportDir, { recursive: true });
      const seq = nextRunSeq(existsSync(reportDir) ? readdirSync(reportDir) : [], t.name);
      const reportRel = reportDir + "/" + reportFilename(t.name, today, seq, "OK", { crit: 0, high: 0, med: 0 });
      writeFileSync(reportRel, renderRepoReport(t.repo, head, [], today) + "\n_history too shallow for diff " + String(old).slice(0, 7) + ".." + head.slice(0, 7) + " even after deepen — skipped honestly, will retry next window (state not advanced)_\n");
      rows.push({ name: t.name, repo: t.repo, sha: head.slice(0, 7), status: "SHALLOW", crit: 0, high: 0, med: 0, crits: [], report: reportRel });
      continue;
    }
    let findings = [];
    if (diff) {
      findings = scanDiff(diff, cfg);
      const cross = updateSignalsAndCrossCheck(t.name, diff, cfg, signals, today);
      signals = cross.store;
      findings = findings.concat(cross.findings);
      try {
        const names = execSync("git -C " + dir + " diff " + old + ".." + head + " --name-only --diff-filter=AM", { encoding: "utf8" }).split("\n").map((s) => s.trim()).filter((f) => /\.(so|dex|apk|mpe)$/.test(f)).slice(0, 5);
        for (const p of names) {
          try {
            const blob = execSync("git -C " + dir + " show " + head + ":" + p, { maxBuffer: 32 * 1024 * 1024 });
            if (blob.length <= 32 * 1024 * 1024) findings = findings.concat(analyzeBlob(p, blob, cfg));
          } catch { /* unreadable blob: skip */ }
        }
      } catch { /* name listing failed: skip binary layer */ }
      if (/(^|\n)\+\+\+ b\/.*\.(kt|java)\n/.test(diff)) {
        try {
          execSync("semgrep --version", { stdio: "ignore" });
          const sgFile = "work/sg-" + t.name + ".json";
          execSync("semgrep scan --config semgrep/ --json -o " + sgFile + " --baseline-commit " + old + " --include='*.kt' --include='*.java' " + dir + " || true", { stdio: "ignore" });
          if (existsSync(sgFile)) findings = findings.concat(mapSemgrep(readFileSync(sgFile, "utf8")));
        } catch { /* semgrep absent or failed: skip */ }
      }
      let freshAuthor = false;
      try {
        const win = execSync("git -C " + dir + " log " + old + ".." + head + " --format=%ae", { encoding: "utf8" }).split("\n").map((s) => s.trim()).filter(Boolean);
        const hist = new Set(execSync("git -C " + dir + " log " + old + " --format=%ae", { encoding: "utf8" }).split("\n").map((s) => s.trim()).filter(Boolean));
        freshAuthor = win.some((a) => !hist.has(a));
      } catch { freshAuthor = false; }
      const detHigh = findings.some((f) => f.severity === "high" || f.severity === "critical");
      const reviewTargets = findings
        .filter((f) => f.severity === "high" || f.severity === "critical")
        .sort((a, b) => (a.severity === b.severity ? 0 : a.severity === "critical" ? -1 : 1));
      if (freshAuthor && findings.length > 0 && reviewTargets.length === 0 && findings[0]) reviewTargets.push(findings[0]);
      for (const rt of reviewTargets) {
        if (!llmAllowed()) {
          rt.llm = "unreviewed";
          rt.reason += " [llm: unreviewed — review cap or budget reached, no ban]";
          continue;
        }
        try {
          const prompt = buildReviewPrompt({ repo: t.repo, file: rt.file, reason: rt.reason, excerpt: rt.excerpt });
          const r = await callReviewer({ endpoint: LLM_ENDPOINT, apiKey: LLM_KEY, model: LLM_MODEL, fallbacks: LLM_FALLBACKS, prompt });
          recordSpend("llm-spend.json", r.cost || 0, currentMonth());
          llmReviewsUsed++;
          const adj = adjudicateFinding({ finding: rt, verdict: r.verdict, detHigh });
          if (adj.action === "ban") {
            rt.llm = "confirmed";
            findings.push({ severity: "critical", llm: "confirmed", file: rt.file, reason: "[llm-reviewer " + r.model + "] malicious (" + r.verdict.confidence + ", " + r.verdict.category + "): " + r.verdict.evidence.join(","), excerpt: String(r.verdict.reasoning).slice(0, 500) });
          } else if (adj.action === "queue") {
            rt.llm = "queued";
            const key = today + "|" + t.name + "|" + rt.file + "|" + r.verdict.verdict;
            reviewQueue.items[key] = { date: today, target: t.name, repo: t.repo, file: rt.file, verdict: r.verdict.verdict, confidence: r.verdict.confidence, category: r.verdict.category, evidence: r.verdict.evidence, reasoning: String(r.verdict.reasoning).slice(0, 300), source: "4h" };
          } else if (adj.action === "overrule") {
            rt.llm = "overruled";
            if (rt.severity === "critical") rt.severity = "high";
            rt.reason += " [llm: benign " + r.verdict.confidence + " — no ban]";
          } else {
            rt.llm = "pending";
            const key = today + "|" + t.name + "|" + rt.file + "|pending";
            reviewQueue.items[key] = { date: today, target: t.name, repo: t.repo, file: rt.file, verdict: "pending", confidence: 0, category: "unreviewed", evidence: [rt.reason], reasoning: "reviewer produced no usable verdict", source: "4h" };
          }
        } catch {
          rt.llm = "pending";
          const key = today + "|" + t.name + "|" + rt.file + "|pending";
          reviewQueue.items[key] = { date: today, target: t.name, repo: t.repo, file: rt.file, verdict: "pending", confidence: 0, category: "reviewer-error", evidence: [rt.reason], reasoning: "reviewer call failed; deterministic finding stands without ban", source: "4h" };
        }
      }
    }
    let note = old ? "" : " (baseline: first scan, diff unavailable — run again after next window for diff-only results)";
    const reportDir = "reports/" + today;
    if (!existsSync(reportDir)) mkdirSync(reportDir, { recursive: true });
    state[t.name] = head;
    const crit = findings.filter((f) => f.severity === "critical").length;
    const high = findings.filter((f) => f.severity === "high").length;
    const med = findings.filter((f) => f.severity === "medium").length;
    const sev = crit > 0 ? "CRIT" : high > 0 ? "RED" : med > 0 ? "WARN" : "OK";
    const seq = nextRunSeq(existsSync(reportDir) ? readdirSync(reportDir) : [], t.name);
    const reportRel = reportDir + "/" + reportFilename(t.name, today, seq, sev, { crit, high, med });
    writeFileSync(reportRel, renderRepoReport(t.repo, head, findings, today) + "\n_" + note + "_\n");
    const bl = updateBlacklist(t.name, t.repo, head, findings, blacklist, today, reportRel);
    blacklist = bl.blacklist;
    const banned = bl.banned;
    rows.push({ name: t.name, repo: t.repo, sha: head.slice(0, 7), status: banned ? "BANNED" : sev, crit, high, med, crits: findings.filter((f) => f.severity === "critical"), report: reportRel });
  } catch (e) {
    rows.push({ name: t.name, repo: t.repo, sha: "error", status: "ERROR", crit: 0, high: 0, med: 0, crits: [] });
  }
}
writeFileSync("state.json", JSON.stringify(state, null, 2) + "\n");
writeFileSync("signals.json", JSON.stringify(signals, null, 2) + "\n");
writeFileSync("blacklist.json", JSON.stringify(blacklist, null, 2) + "\n");
const queueItems = Object.values(reviewQueue.items || {}).sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 20);
reviewQueue.items = Object.fromEntries(queueItems.map((q) => [q.date + "|" + q.target + "|" + q.file + "|" + q.verdict, q]));
writeFileSync("review-queue.json", JSON.stringify(reviewQueue, null, 2) + "\n");
if (!existsSync("llm-spend.json")) writeFileSync("llm-spend.json", JSON.stringify({ month: currentMonth(), total: 0 }, null, 2) + "\n");
const totalCrit = rows.reduce((n, r) => n + (r.crit || 0), 0);
writeFileSync("crit-alert.txt", String(totalCrit) + "\n");
let readme = "# Morphe patches audit\n\nScans 4x daily (`0 0,6,12,18 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json. v7: every critical/high goes through the LLM judge; bans only on LLM confirmation.\n\n## :octagonal_sign: Blacklisted — permanently untrusted\n\nOnce the LLM confirms a malicious finding the target stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`. Deterministic findings without confirmation never ban.\n\n";
const banned = Object.entries((blacklist.repos || {}));
if (banned.length === 0) {
  readme += "No blacklisted targets.\n\n";
} else {
  readme += "| :octagonal_sign: | target | since | reason | evidence |\n|---|---|---|---|---|\n";
  for (const [bname, e] of banned) {
    readme += "| :octagonal_sign: | " + bname + " (" + e.repo + ") | " + e.since + " | " + e.reason + " | " + e.report + " |\n";
  }
  readme += "\n";
}
readme += "## :warning: Critical findings\n\n";
if (totalCrit === 0) {
  readme += "No critical findings in this window.\n\n";
} else {
  readme += "| :warning: | target | file | reason | report |\n|---|---|---|---|---|\n";
  for (const r of rows) {
    for (const c of r.crits || []) {
      readme += "| :warning: | " + r.name + " | " + c.file + " | " + c.reason + " | reports/" + today + "/" + r.name + ".md |\n";
    }
  }
  readme += "\n";
}
readme += "| target | scan | commit | status | crit | high | med | report |\n|---|---|---|---|---|---|---|---|\n";
for (const r of rows) {
  readme += "| " + r.name + " | " + today + " | " + r.sha + " | " + r.status + " | " + (r.crit || 0) + " | " + r.high + " | " + r.med + " | " + (r.report || ("reports/" + today + "/" + r.name + ".md")) + " |\n";
}
readme += "\n## Review queue (needs human)\n\nLLM-suspect items below the confirmation bar, plus pending items awaiting a usable verdict — no ban until the judge confirms. Confirm in code, then ban by editing `blacklist.json` or dismiss by deleting the entry from `review-queue.json`.\n\n";
if (queueItems.length === 0) {
  readme += "Queue empty.\n\n";
} else {
  readme += "| date | target | file | verdict | conf | evidence |\n|---|---|---|---|---|---|\n";
  for (const q of queueItems) {
    readme += "| " + q.date + " | " + q.target + " | " + q.file + " | " + q.verdict + " | " + q.confidence + " | " + (q.evidence || []).join(",") + " |\n";
  }
  readme += "\n";
}
readme += "\n## Secrets policy\n\nNever paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret), `LLM_MODEL` / `LLM_FALLBACKS` (repo variables) and `LLM_MONTHLY_BUDGET_USD` (default 5) from the environment; without them the LLM layer is skipped silently.\n";
writeFileSync("README.md", readme);
console.log("done " + rows.filter((r) => r.status !== "ERROR").length + "/" + rows.length);
