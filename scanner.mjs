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

function hexToDotted(h) {
  const n = parseInt(h, 16);
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
}

function findNewHosts(text, allowDomains) {
  const src = String(text).replace(/%2e/gi, ".");
  const out = new Set();
  const re = /https?:\/\/([A-Za-z0-9.-]+)/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const host = m[1].toLowerCase();
    if (!allowDomains.some((d) => host === d || host.endsWith("." + d))) out.add(m[0]);
  }
  const patterns = [
    /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g,
    /\b(?:0[xX][0-9a-fA-F]{1,2}\.){3}0[xX][0-9a-fA-F]{1,2}\b/g,
    /\b0[0-7]{2,3}(?:\.0[0-7]{2,3}){3}\b/g,
  ];
  for (const r of patterns) {
    let hit;
    while ((hit = r.exec(src)) !== null) out.add("http://" + hit[0]);
  }
  const hexFull = /\b0[xX]([0-9a-fA-F]{8})\b/g;
  while ((m = hexFull.exec(src)) !== null) out.add("http://" + hexToDotted(m[1]));
  return [...out];
}

function hostOf(url) {
  const m = /^https?:\/\/([^/:]+)/i.exec(url);
  return m ? m[1].toLowerCase() : "";
}

function isRiskyUrl(url, riskyInfra) {
  const u = url.toLowerCase();
  const host = hostOf(url);
  return riskyInfra.some((r) => {
    const e = r.toLowerCase();
    if (e.includes("/")) return u.includes(e);
    return host === e || host.endsWith("." + e);
  });
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

function typoKeywords(cfg) {
  const keys = new Set();
  for (const d of cfg.domains) {
    for (const label of d.toLowerCase().split(".")) {
      if (label.length >= 5) keys.add(label);
    }
  }
  return [...keys];
}

export function findTyposquat(urls, cfg) {
  const out = [];
  for (const url of urls) {
    const host = hostOf(url).replace(/[^a-z0-9]/g, "");
    for (const k of typoKeywords(cfg)) {
      if (host.includes(k)) continue;
      for (let len = Math.max(4, k.length - 2); len <= k.length + 2; len++) {
        for (let i = 0; i + len <= host.length; i++) {
          const w = host.slice(i, i + len);
          const d = levenshtein(w, k);
          if (d >= 1 && d <= 2) {
            out.push({ url, keyword: k });
            i = host.length;
            break;
          }
        }
      }
    }
  }
  return out;
}

function normalizeText(text) {
  let t = String(text).replace(/%2e/gi, ".");
  for (let i = 0; i < 5; i++) {
    const next = t.replace(/"([^"\n]*)"\s*\+\s*"([^"\n]*)"/g, '"$1$2"');
    if (next === t) break;
    t = next;
  }
  const defs = {};
  const defRe = /\bval\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*"([^"\n]{4,})"/g;
  let m;
  while ((m = defRe.exec(t)) !== null) {
    if (/(:\/\/|\.[a-z]{2,}|\\x[0-9a-fA-F]{2})/.test(m[2])) defs[m[1]] = m[2];
  }
  for (const [k, v] of Object.entries(defs)) {
    t = t.replace(new RegExp("\\b" + k + "\\b", "g"), '"' + v + '"');
  }
  return t;
}

function decodeBlobs(text) {
  const chunks = [];
  const b64re = /[A-Za-z0-9+/]{40,}={0,2}/g;
  let m;
  while ((m = b64re.exec(text)) !== null) {
    try {
      const dec = Buffer.from(m[0], "base64").toString("utf8");
      if (/^[\x20-\x7e\t\r\n]{8,}$/.test(dec) && /[.:/]/.test(dec)) chunks.push(dec);
    } catch { /* not decodable, ignore */ }
  }
  const hexre = /(\\x[0-9a-fA-F]{2}){8,}/g;
  while ((m = hexre.exec(text)) !== null) {
    const dec = m[0].split("\\x").slice(1).map((h) => String.fromCharCode(parseInt(h, 16))).join("");
    if (/^[\x20-\x7e\t\r\n]{8,}$/.test(dec)) chunks.push(dec);
  }
  return chunks.join("\n");
}

export function analyzeAdded(added, cfg) {
  const normalized = normalizeText(added);
  const decoded = decodeBlobs(normalized);
  const enriched = normalized + "\n" + decoded;
  const plainHosts = findNewHosts(added, cfg.domains);
  const enrichedHosts = findNewHosts(enriched, cfg.domains);
  const obHosts = enrichedHosts.filter((h) => !plainHosts.includes(h));
  const testSecrets = (t) => cfg.secretPatterns.filter((p) => new RegExp(p).test(t));
  const plainSecrets = testSecrets(added);
  const obSecrets = testSecrets(enriched).filter((s) => !plainSecrets.includes(s));
  const riskyHosts = enrichedHosts.filter((h) => isRiskyUrl(h, cfg.riskyInfra || []));
  const typo = findTyposquat(enrichedHosts, cfg);
  const intIp = /\b\d{9,10}\b/.test(normalized)
    ? (normalized.match(/\b\d{9,10}\b/g) || []).filter((n) => Number(n) <= 4294967295)
    : [];
  return {
    hosts: plainHosts.filter((h) => !riskyHosts.includes(h)),
    riskyHosts,
    typo,
    obHosts,
    obSecrets,
    intIp,
    perms: hasAny(normalized, cfg.dangerousPermissions),
    src: hasAny(normalized, cfg.sources),
    sink: hasAny(normalized, cfg.sinks),
    secrets: plainSecrets,
    pin: hasAny(normalized, cfg.pinning),
    prx: hasAny(normalized, cfg.proxyNet),
    prem: hasAny(normalized, cfg.premiumOnly),
    sms: hasAny(normalized, cfg.smsPatterns || []),
    spy: hasAny(normalized, cfg.spyServices || []),
    keylog: hasAny(normalized, cfg.keylog || []),
    staged: hasAny(normalized, cfg.stagedExec || []),
    bridge: hasAny(normalized, cfg.webBridge || []),
    dns: hasAny(normalized, cfg.dnsApi || []),
    dnsEnc: hasAny(normalized, cfg.dnsEnc || []),
    root: hasAny(normalized, cfg.rootExec || []),
    handoff: hasAny(normalized, cfg.handoff || []),
    media: hasAny(normalized, cfg.mediaSpy || []),
    reflect: hasAny(normalized, cfg.reflection || []),
  };
}

export function parseDiff(diffText) {
  const files = [];
  let cur = null;
  for (const line of diffText.split("\n")) {
    if (line.startsWith("diff --git")) {
      const m = / b\/(.+)$/.exec(line);
      cur = { file: m ? m[1] : "unknown", added: "" };
      files.push(cur);
    } else if (/^Binary files \S+ and b\/(.+) differ$/.test(line)) {
      const m = /^Binary files \S+ and b\/(.+) differ$/.exec(line);
      files.push({ file: m ? m[1] : "unknown", added: "", binary: true });
      cur = null;
    } else if (cur && line.startsWith("+") && !line.startsWith("+++")) {
      cur.added += line.slice(1) + "\n";
    }
  }
  return files.filter((f) => f.binary || f.added.trim().length > 0);
}

export function findingsForFile(file, added, cfg) {
  const findings = [];
  const crit = (reason) => findings.push({ severity: "critical", file, reason, excerpt });
  const excerpt = added.split("\n").slice(0, 15).join("\n");
  const a = analyzeAdded(added, cfg);
  const hasPlaceholderKey = added.includes("REPLACE_WITH_");
  const net = a.sink.length > 0 || a.hosts.length > 0 || a.riskyHosts.length > 0 || a.obHosts.length > 0;
  const hasHost = a.hosts.length > 0 || a.riskyHosts.length > 0 || a.obHosts.length > 0;
  const isGradle = /\.gradle(\.kts)?$/.test(file);
  const isPremiumOnly = a.prem.length > 0 && a.hosts.length === 0 && a.riskyHosts.length === 0 &&
    a.obHosts.length === 0 && a.perms.length === 0 && a.src.length === 0 &&
    a.secrets.length === 0 && a.obSecrets.length === 0 && a.intIp.length === 0 &&
    a.sms.length === 0 && a.spy.length === 0 && a.keylog.length === 0 && a.staged.length === 0 &&
    a.bridge.length === 0 && a.dns.length === 0 && a.root.length === 0 && a.media.length === 0 &&
    a.reflect.length === 0 && a.typo.length === 0;
  if (isPremiumOnly) return findings;
  if (isGradle) {
    const gh = findNewHosts(added, cfg.domains);
    if (gh.length > 0) {
      findings.push({ severity: "high", file, reason: "new external build URL (supply chain): " + gh.join(", "), excerpt });
    } else if (/^\s*(implementation|api|compileOnly)\s*\(/m.test(added)) {
      findings.push({ severity: "info", file, reason: "new external dependency added — verify coordinates", excerpt });
    }
    return findings;
  }
  if (a.sms.length > 0) {
    if (net) crit("SMS/OTP interception with network exfil: " + a.sms.join(","));
    else findings.push({ severity: "medium", file, reason: "SMS reading capability added: " + a.sms.join(","), excerpt });
  }
  if (a.spy.length > 0) {
    if (hasHost) crit("notification/accessibility capture with external host: " + a.spy.join(","));
    else if (a.sink.length > 0) findings.push({ severity: "high", file, reason: "notification/accessibility capture with network sink", excerpt });
  }
  if (a.keylog.length > 0 && net) {
    crit("possible keystroke capture with network exfil: " + a.keylog.join(","));
  }
  if (a.staged.length > 0) {
    if (hasHost) crit("runtime code download and execution (dropper): " + a.staged.join(","));
    else if (a.sink.length > 0) findings.push({ severity: "high", file, reason: "dynamic code loading with network sink", excerpt });
  }
  const pkgPath = /\/data\/data\/[a-zA-Z0-9_.]+\.[a-zA-Z]+/.test(added);
  const appDb = hasAny(added, ["shared_prefs", "Cookies", "webview.db"]);
  if ((pkgPath || appDb.length > 0) && net) {
    crit("cross-app private data access with network: " + (pkgPath ? "other-package path" : appDb.join(",")));
  }
  if (a.root.length > 0) {
    if (pkgPath || appDb.length > 0) crit("root execution against app-private data: " + a.root.join(","));
    else if (a.sink.length > 0) findings.push({ severity: "high", file, reason: "root execution with network sink", excerpt });
  }
  if (added.includes("createPackageContext") && a.sink.length > 0 && findings.length === 0) {
    findings.push({ severity: "high", file, reason: "data handoff to external package context with network sink", excerpt });
  }
  if (a.secrets.length > 0) {
    findings.push({ severity: "high", file, reason: "embedded secret pattern: " + a.secrets.join(", "), excerpt });
  }
  if (a.obSecrets.length > 0 || a.obHosts.length > 0) {
    const what = [...a.obHosts, ...a.obSecrets.map((s) => "secret:" + s)].join(", ");
    findings.push({ severity: "high", file, reason: "obfuscated network indicator (base64/hex/split string): " + what, excerpt });
  }
  if (a.src.length > 0 && a.sink.length > 0) {
    findings.push({ severity: "high", file, reason: "sensitive source reaches network sink", excerpt });
  }
  if (a.pin.length > 0 && (a.prx.length > 0 || a.hosts.length > 0 || a.riskyHosts.length > 0 || a.obHosts.length > 0)) {
    findings.push({ severity: "high", file, reason: "cert-pinning bypass combined with proxy or unknown host", excerpt });
  }
  if (a.perms.length > 0 && file.includes("AndroidManifest")) {
    findings.push({ severity: "high", file, reason: "dangerous permission added by patch: " + a.perms.join(","), excerpt });
  } else if (a.perms.length > 0 && a.sink.length > 0) {
    findings.push({ severity: "medium", file, reason: "dangerous permission plus network sink in same file", excerpt });
  }
  if (a.bridge.length > 0 && a.sink.length > 0) {
    findings.push({ severity: "high", file, reason: "WebView JS bridge with network sink: " + a.bridge.join(","), excerpt });
  }
  if (a.dns.length > 0 && (a.dnsEnc.length > 0 || a.src.length > 0)) {
    findings.push({ severity: "high", file, reason: "possible DNS exfiltration channel: " + a.dns.join(","), excerpt });
  }
  if (a.media.length > 0 && a.sink.length > 0) {
    findings.push({ severity: "high", file, reason: "screen/mic capture with network sink: " + a.media.join(","), excerpt });
  }
  if (a.reflect.length > 0 && a.sink.length > 0) {
    findings.push({ severity: "high", file, reason: "reflection-hidden behavior with network sink", excerpt });
  }
  if (added.includes("setPackage(") && a.src.length > 0) {
    findings.push({ severity: "high", file, reason: "sensitive data handoff to explicit external package", excerpt });
  }
  if (a.typo.length > 0) {
    findings.push({ severity: "high", file, reason: "typosquat of allowlisted domain: " + a.typo.map((t) => t.url + " (~" + t.keyword + ")").join(", "), excerpt });
  }
  if (a.intIp.length > 0 && (a.sink.length > 0 || a.prx.length > 0) && findings.length === 0) {
    findings.push({ severity: "medium", file, reason: "decimal-encoded IP literal with network context: " + a.intIp.join(", "), excerpt });
  }
  if (a.riskyHosts.length > 0) {
    if (findings.length > 0) {
      findings.push({ severity: "high", file, reason: "risky-infra host combined with other signals: " + a.riskyHosts.join(", "), excerpt });
    } else {
      findings.push({ severity: "medium", file, reason: "anonymizer/risky-infra URL: " + a.riskyHosts.join(", "), excerpt });
    }
  } else if (a.hosts.length > 0 && findings.length === 0 && !hasPlaceholderKey) {
    findings.push({ severity: "medium", file, reason: "new non-allowlisted URL or IP", excerpt });
  }
  return findings;
}

const NATIVE_BIN = [".so", ".dex", ".apk", ".jar", ".aar", ".node", ".o", ".a"];

export function scanDiff(diffText, cfg) {
  const out = [];
  for (const entry of parseDiff(diffText)) {
    if (entry.binary) {
      const native = NATIVE_BIN.some((e) => entry.file.toLowerCase().endsWith(e));
      out.push({
        severity: native ? "medium" : "info",
        file: entry.file,
        reason: native
          ? "native binary added/changed — cannot review textually"
          : "binary asset added/changed — cannot review textually",
        excerpt: "(binary diff)",
      });
      continue;
    }
    if (!isScannableFile(entry.file)) continue;
    for (const f of findingsForFile(entry.file, entry.added, cfg)) out.push(f);
  }
  return out;
}

export function extractSignals(diffText, cfg) {
  const sig = { hosts: [], sources: [], sinks: [], perms: [], pinning: [], sms: [], spy: [], keylog: [], staged: [] };
  for (const entry of parseDiff(diffText)) {
    if (entry.binary || !isScannableFile(entry.file)) continue;
    const a = analyzeAdded(entry.added, cfg);
    for (const h of [...a.hosts, ...a.riskyHosts, ...a.obHosts]) {
      if (!sig.hosts.includes(h)) sig.hosts.push(h);
    }
    for (const s of a.src) if (!sig.sources.includes(s)) sig.sources.push(s);
    for (const s of a.sink) if (!sig.sinks.includes(s)) sig.sinks.push(s);
    for (const p of a.perms) if (!sig.perms.includes(p)) sig.perms.push(p);
    for (const p of a.pin) if (!sig.pinning.includes(p)) sig.pinning.push(p);
    for (const s of a.sms) if (!sig.sms.includes(s)) sig.sms.push(s);
    for (const s of a.spy) if (!sig.spy.includes(s)) sig.spy.push(s);
    for (const s of a.keylog) if (!sig.keylog.includes(s)) sig.keylog.push(s);
    for (const s of a.staged) if (!sig.staged.includes(s)) sig.staged.push(s);
  }
  return sig;
}

function mergeEntries(prev, curValues, today) {
  const seen = new Set(prev.map((e) => e.v));
  const merged = [...prev];
  for (const v of curValues) {
    if (!seen.has(v)) {
      seen.add(v);
      merged.push({ v, d: today });
    }
  }
  const cutoff = new Date(today).getTime() - 45 * 864e5;
  return merged.filter((e) => new Date(e.d).getTime() >= cutoff).slice(-50);
}

export function updateSignalsAndCrossCheck(name, diffText, cfg, store, today) {
  const all = store && store.repos ? store.repos : {};
  const blank = { hosts: [], sources: [], sinks: [], perms: [], pinning: [], sms: [], spy: [], keylog: [], staged: [], updated: today };
  const prev = all[name] || blank;
  const cur = extractSignals(diffText, cfg);
  const findings = [];
  const prevTerms = [...prev.sources.map((s) => s.v), ...prev.sinks.map((s) => s.v)];
  const prevSpyTerms = [...(prev.sms || []).map((s) => s.v), ...(prev.spy || []).map((s) => s.v), ...(prev.keylog || []).map((s) => s.v), ...(prev.staged || []).map((s) => s.v)];
  const curSpyTerms = [...cur.sms, ...cur.spy, ...cur.keylog, ...cur.staged];
  if (prevSpyTerms.length > 0 && (cur.hosts.length > 0 || cur.sinks.length > 0)) {
    findings.push({
      severity: "critical", file: "cross-window",
      reason: "theft primitive completed across windows: previously seen " + prevSpyTerms.join(", ") + " (" + prev.updated + ") with new network use",
      excerpt: "(see report of " + prev.updated + " for the earlier half)",
    });
  }
  if (curSpyTerms.length > 0 && (prev.hosts.length > 0 || prev.sinks.length > 0)) {
    findings.push({
      severity: "critical", file: "cross-window",
      reason: "theft primitive completed across windows: new " + curSpyTerms.join(", ") + " with previously seen network (" + prev.updated + ")",
      excerpt: "(see report of " + prev.updated + " for the earlier half)",
    });
  }
  if (cur.hosts.length > 0 && prevTerms.length > 0) {
    findings.push({
      severity: "high", file: "cross-window",
      reason: "exfil completed across windows: new host " + cur.hosts.join(", ") + " with previously seen " + prevTerms.join(", ") + " (" + prev.updated + ")",
      excerpt: "(see report of " + prev.updated + " for the earlier half)",
    });
  }
  if ((cur.sources.length > 0 || cur.sinks.length > 0) && prev.hosts.length > 0) {
    findings.push({
      severity: "high", file: "cross-window",
      reason: "exfil completed across windows: previously seen host " + prev.hosts.map((h) => h.v).join(", ") + " (" + prev.updated + ") with new " + [...cur.sources, ...cur.sinks].join(", "),
      excerpt: "(see report of " + prev.updated + " for the earlier half)",
    });
  }
  if ((cur.pinning.length > 0 && prev.hosts.length > 0) || (prev.pinning.length > 0 && cur.hosts.length > 0)) {
    findings.push({
      severity: "high", file: "cross-window",
      reason: "pinning bypass plus unknown host split across windows (earlier half in " + prev.updated + ")",
      excerpt: "(see report of " + prev.updated + " for the earlier half)",
    });
  }
  if ((cur.perms.length > 0 && prev.sinks.length > 0) || (prev.perms.length > 0 && cur.sinks.length > 0)) {
    findings.push({
      severity: "medium", file: "cross-window",
      reason: "dangerous permission plus network sink split across windows (earlier half in " + prev.updated + ")",
      excerpt: "(see report of " + prev.updated + " for the earlier half)",
    });
  }
  const merged = {
    hosts: mergeEntries(prev.hosts || [], cur.hosts, today),
    sources: mergeEntries(prev.sources || [], cur.sources, today),
    sinks: mergeEntries(prev.sinks || [], cur.sinks, today),
    perms: mergeEntries(prev.perms || [], cur.perms, today),
    pinning: mergeEntries(prev.pinning || [], cur.pinning, today),
    sms: mergeEntries(prev.sms || [], cur.sms, today),
    spy: mergeEntries(prev.spy || [], cur.spy, today),
    keylog: mergeEntries(prev.keylog || [], cur.keylog, today),
    staged: mergeEntries(prev.staged || [], cur.staged, today),
    updated: today,
  };
  return { findings, store: { repos: { ...all, [name]: merged } } };
}

export function updateBlacklist(name, repo, sha, findings, blacklist, today) {
  const list = blacklist && blacklist.repos ? { ...blacklist.repos } : {};
  if (list[name]) return { blacklist: { repos: list }, banned: true, entry: list[name] };
  const crits = findings.filter((f) => f.severity === "critical");
  if (crits.length === 0) return { blacklist: { repos: list }, banned: false, entry: null };
  const entry = {
    repo,
    since: today,
    sha: String(sha).slice(0, 12),
    reason: crits[0].reason,
    report: "reports/" + today + "/" + name + ".md",
  };
  list[name] = entry;
  return { blacklist: { repos: list }, banned: true, entry };
}

export function renderRepoReport(repo, sha, findings, date) {
  const crit = findings.filter((f) => f.severity === "critical").length;
  const high = findings.filter((f) => f.severity === "high").length;
  const med = findings.filter((f) => f.severity === "medium").length;
  const status = crit > 0 ? "CRIT" : high > 0 ? "RED" : med > 0 ? "WARN" : "OK";
  let md = "# " + repo + " — " + date + "\n\nCommit: " + sha + " | Status: " + status + " | crit:" + crit + " high:" + high + " med:" + med + "\n\n";
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
  console.log(JSON.stringify({ repo, sha, crit: findings.filter((f) => f.severity === "critical").length, high: findings.filter((f) => f.severity === "high").length, med: findings.filter((f) => f.severity === "medium").length }));
}
