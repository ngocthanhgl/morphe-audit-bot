import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { loadConfig, scanDiff, renderRepoReport, updateSignalsAndCrossCheck } from "./scanner.mjs";

const today = new Date().toISOString().slice(0, 10);
const targets = JSON.parse(readFileSync("targets.json", "utf8"));
const cfg = loadConfig("config/allowlist.json");
const state = existsSync("state.json") ? JSON.parse(readFileSync("state.json", "utf8") || "{}") : {};
let signals = existsSync("signals.json") ? JSON.parse(readFileSync("signals.json", "utf8") || "{}") : {};
if (!existsSync("work")) mkdirSync("work");

const rows = [];
for (const t of targets) {
  const dir = "work/" + t.name;
  try {
    if (!existsSync(dir)) {
      execSync("git clone --depth 100 https://github.com/" + t.repo + ".git " + dir, { stdio: "inherit" });
    } else {
      execSync("git -C " + dir + " fetch --depth 100 origin", { stdio: "inherit" });
      execSync("git -C " + dir + " reset --hard origin/HEAD", { stdio: "inherit" });
    }
    const head = execSync("git -C " + dir + " rev-parse HEAD", { encoding: "utf8" }).trim();
    const old = state[t.name];
    let diff = "";
    if (old) {
      try {
        diff = execSync("git -C " + dir + " diff " + old + ".." + head + " --", { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
      } catch { diff = ""; }
    }
    let findings = [];
    if (diff) {
      findings = scanDiff(diff, cfg);
      const cross = updateSignalsAndCrossCheck(t.name, diff, cfg, signals, today);
      signals = cross.store;
      findings = findings.concat(cross.findings);
    }
    let note = old ? "" : " (baseline: first scan, diff unavailable — run again after next window for diff-only results)";
    const reportDir = "reports/" + today;
    if (!existsSync(reportDir)) mkdirSync(reportDir, { recursive: true });
    writeFileSync(reportDir + "/" + t.name + ".md", renderRepoReport(t.repo, head, findings, today) + "\n_" + note + "_\n");
    state[t.name] = head;
    const crit = findings.filter((f) => f.severity === "critical").length;
    const high = findings.filter((f) => f.severity === "high").length;
    const med = findings.filter((f) => f.severity === "medium").length;
    rows.push({ name: t.name, repo: t.repo, sha: head.slice(0, 7), status: crit > 0 ? "CRIT" : high > 0 ? "RED" : med > 0 ? "WARN" : "OK", crit, high, med, crits: findings.filter((f) => f.severity === "critical") });
  } catch (e) {
    rows.push({ name: t.name, repo: t.repo, sha: "error", status: "ERROR", crit: 0, high: 0, med: 0, crits: [] });
  }
}
writeFileSync("state.json", JSON.stringify(state, null, 2) + "\n");
writeFileSync("signals.json", JSON.stringify(signals, null, 2) + "\n");
const totalCrit = rows.reduce((n, r) => n + (r.crit || 0), 0);
writeFileSync("crit-alert.txt", String(totalCrit) + "\n");
let readme = "# Morphe patches audit\n\nScans every 4h (`0 */4 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d).\n\n## :warning: Critical findings\n\n";
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
  readme += "| " + r.name + " | " + today + " | " + r.sha + " | " + r.status + " | " + (r.crit || 0) + " | " + r.high + " | " + r.med + " | reports/" + today + "/" + r.name + ".md |\n";
}
readme += "\n## Secrets policy\n\nNever paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only.\n";
writeFileSync("README.md", readme);
console.log("done " + rows.filter((r) => r.status !== "ERROR").length + "/" + rows.length);
