import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

export function loadConfig(path = "config/allowlist.json") {
  return JSON.parse(readFileSync(path, "utf8"));
}

const SCAN_EXT = [".kt", ".xml", ".gradle.kts", ".mpe", ".java", ".js", ".ts"];

export function isScannableFile(name) {
  return SCAN_EXT.some((e) => name.endsWith(e));
}

function hasAny(text, list) {
  return list.filter((k) => text.includes(k));
}

function findNewHosts(text, allowDomains) {
  const out = new Set();
  const re = /https?:\/\/([A-Za-z0-9.-]+)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const host = m[1].toLowerCase();
    if (!allowDomains.some((d) => host === d || host.endsWith("." + d))) out.add(m[0]);
  }
  const ipRe = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;
  let ip;
  while ((ip = ipRe.exec(text)) !== null) out.add("http://" + ip[0]);
  return [...out];
}

export function parseDiff(diffText) {
  const files = [];
  let cur = null;
  for (const line of diffText.split("\n")) {
    if (line.startsWith("diff --git")) {
      const m = / b\/(.+)$/.exec(line);
      cur = { file: m ? m[1] : "unknown", added: "" };
      files.push(cur);
    } else if (cur && line.startsWith("+") && !line.startsWith("+++")) {
      cur.added += line.slice(1) + "\n";
    }
  }
  return files.filter((f) => f.added.trim().length > 0);
}

export function findingsForFile(file, added, cfg) {
  const findings = [];
  const excerpt = added.split("\n").slice(0, 15).join("\n");
  const prem = hasAny(added, cfg.premiumOnly);
  const suspiciousHosts = findNewHosts(added, cfg.domains);
  const perms = hasAny(added, cfg.dangerousPermissions);
  const src = hasAny(added, cfg.sources);
  const sink = hasAny(added, cfg.sinks);
  const secrets = cfg.secretPatterns.filter((p) => new RegExp(p).test(added));
  const pin = hasAny(added, cfg.pinning);
  const prx = hasAny(added, cfg.proxyNet);
  const isPremiumOnly = prem.length > 0 && suspiciousHosts.length === 0 && perms.length === 0 && src.length === 0 && secrets.length === 0;
  if (isPremiumOnly) return findings;
  if (secrets.length > 0) {
    findings.push({ severity: "high", file, reason: "embedded secret pattern: " + secrets.join(", "), excerpt });
  }
  if (src.length > 0 && sink.length > 0) {
    findings.push({ severity: "high", file, reason: "sensitive source reaches network sink", excerpt });
  }
  if (pin.length > 0 && (prx.length > 0 || suspiciousHosts.length > 0)) {
    findings.push({ severity: "high", file, reason: "cert-pinning bypass combined with proxy or unknown host", excerpt });
  }
  if (perms.length > 0 && file.includes("AndroidManifest")) {
    findings.push({ severity: "high", file, reason: "dangerous permission added by patch: " + perms.join(","), excerpt });
  } else if (perms.length > 0 && sink.length > 0) {
    findings.push({ severity: "medium", file, reason: "dangerous permission plus network sink in same file", excerpt });
  }
  if (suspiciousHosts.length > 0 && findings.length === 0) {
    findings.push({ severity: "medium", file, reason: "new non-allowlisted URL or IP", excerpt });
  }
  return findings;
}

export function scanDiff(diffText, cfg) {
  const out = [];
  for (const { file, added } of parseDiff(diffText)) {
    if (!isScannableFile(file)) continue;
    for (const f of findingsForFile(file, added, cfg)) out.push(f);
  }
  return out;
}

export function renderRepoReport(repo, sha, findings, date) {
  const high = findings.filter((f) => f.severity === "high").length;
  const med = findings.filter((f) => f.severity === "medium").length;
  const status = high > 0 ? "RED" : med > 0 ? "WARN" : "OK";
  let md = "# " + repo + " — " + date + "\n\nCommit: " + sha + " | Status: " + status + " | high:" + high + " med:" + med + "\n\n";
  if (findings.length === 0) { md += "No suspicious changes in this window.\n"; return md; }
  for (const f of findings) {
    md += "<details>\n<summary>[" + f.severity + "] " + f.file + " — " + f.reason + "</summary>\n\n```\n" + f.excerpt + "\n```\n\n</details>\n\n";
  }
  return md;
}

if (process.argv.includes("--diff")) {
  const gi = (k) => process.argv[process.argv.indexOf(k) + 1] || "";
  const cfg = loadConfig(process.env.CFG || "config/allowlist.json");
  const diff = readFileSync(gi("--diff"), "utf8");
  const findings = scanDiff(diff, cfg);
  const date = gi("--date") || new Date().toISOString().slice(0, 10);
  const repo = gi("--repo") || "unknown";
  const sha = gi("--sha") || "unknown";
  const dir = "reports/" + date;
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(dir + "/" + repo.replace(/[^A-Za-z0-9.-]+/g, "_") + ".md", renderRepoReport(repo, sha, findings, date));
  console.log(JSON.stringify({ repo, sha, high: findings.filter((f) => f.severity === "high").length, med: findings.filter((f) => f.severity === "medium").length }));
}
