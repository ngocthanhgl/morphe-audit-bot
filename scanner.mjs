import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

export function loadConfig(path = "config/allowlist.json") {
  return JSON.parse(readFileSync(path, "utf8"));
}

const SCAN_EXT = [".kt", ".xml", ".gradle.kts", ".mpe", ".java", ".js", ".ts"];

export function isScannableFile(name) {
  return SCAN_EXT.some((e) => name.endsWith(e));
}

export function isTestPath(name) {
  const n = String(name);
  return /(^|\/)(test|tests|androidTest|__tests__)\//.test(n) ||
    /^tools\//.test(n) ||
    /(^|\/)verification-probe\//.test(n) ||
    /(^|\/)[^/]*Test\.(kt|java|js|ts|mjs)$/.test(n) ||
    /(^|\/)Test[^/]*\.(kt|java|js|ts|mjs)$/.test(n);
}

function stripComments(text) {
  const source = String(text);
  let out = "";
  let quote = "";
  let lineComment = false;
  let blockComment = false;
  let xmlComment = false;
  for (let i = 0; i < source.length; i++) {
    const c = source[i], next = source[i + 1], third = source[i + 2];
    if (lineComment) {
      if (c === "\n") { lineComment = false; out += c; }
      else out += " ";
    } else if (blockComment || xmlComment) {
      if ((blockComment && c === "*" && next === "/") || (xmlComment && source.slice(i, i + 3) === "-->")) {
        const length = blockComment ? 2 : 3;
        out += " ".repeat(length);
        i += length - 1;
        blockComment = false;
        xmlComment = false;
      } else {
        out += c === "\n" ? "\n" : " ";
      }
    } else if (quote) {
      out += c;
      if (c === "\\" && i + 1 < source.length) out += source[++i];
      else if (quote === '"' && c === '"' && next === '"' && third === '"') {
        out += '""';
        i += 2;
        quote = "";
      } else if (c === quote) quote = "";
    } else if (c === "/" && next === "/") {
      out += "  ";
      i++;
      lineComment = true;
    } else if (c === "/" && next === "*") {
      out += "  ";
      i++;
      blockComment = true;
    } else if (c === "<" && source.slice(i, i + 4) === "<!--") {
      out += "    ";
      i += 3;
      xmlComment = true;
    } else {
      out += c;
      if (c === '"' && next === '"' && third === '"') {
        out += '""';
        i += 2;
        quote = '"';
      } else if (c === '"' || c === "'" || c === "`") quote = c;
    }
  }
  return out;
}

function hasAny(text, list) {
  return list.filter((k) => text.includes(k));
}

function sourceHits(text, sources) {
  const scrubbed = String(text).replace(/Location(?:OnScreen|InWindow)/g, "");
  return hasAny(scrubbed, sources);
}

function isVersionQuadHost(host) {
  const parts = String(host).split(".");
  return parts.length === 4 && parts.every((p) => /^\d{1,2}$/.test(p));
}

function isGeoUrl(url, geoHosts) {
  const h = hostOf(String(url).replace(/%2e/gi, "."));
  const list = geoHosts || [];
  return list.some((e) => { const d = String(e).toLowerCase(); return h === d || h.endsWith("." + d); });
}

const VERSION_LINE = /version|versioncode|versionname|targetsdk|minsdk|compilesdk|apptarget/i;

function validOctets(ip) {
  return ip.split(".").every((o) => /^\d{1,3}$/.test(o) && Number(o) <= 255);
}

function routableIp(ip) {
  const first = Number(ip.split(".")[0]);
  return first >= 1 && first <= 223 && first !== 127;
}

function validHost(host) {
  const h = String(host);
  return h.includes(".") && /^[A-Za-z0-9]([A-Za-z0-9.-]{0,250}[A-Za-z0-9])?$/.test(h);
}

function findNewHosts(text, allowDomains) {
  const src = String(text).replace(/%2e/gi, ".");
  const out = new Set();
  const re = /https?:\/\/([A-Za-z0-9.-]+)/g;
  let m;
  const skippedQuads = new Set();
  while ((m = re.exec(src)) !== null) {
    const raw = m[0].replace(/[.,;:!?)\]]+$/, "");
    const host = hostOf(raw).toLowerCase();
    if (!host || !validHost(host)) continue;
    const after = src[m.index + m[0].length] || "";
    if (isVersionQuadHost(host) && after !== "/") { skippedQuads.add(host); continue; }
    if (!allowDomains.some((d) => host === d || host.endsWith("." + d))) out.add(raw);
  }
  const dotted = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;
  for (const line of src.split("\n")) {
    const scope = VERSION_LINE.test(line)
      ? line.replace(/(["'])\d+\.\d+\.\d+(?:\.\d+)?\1/g, "")
      : line;
    let hit;
    while ((hit = dotted.exec(scope)) !== null) {
      if (skippedQuads.has(hit[0])) continue;
      if (validOctets(hit[0]) && routableIp(hit[0])) out.add("http://" + hit[0]);
    }
    dotted.lastIndex = 0;
  }
  const structured = [
    /\b(?:0[xX][0-9a-fA-F]{1,2}\.){3}0[xX][0-9a-fA-F]{1,2}\b/g,
    /\b0[0-7]{2,3}(?:\.0[0-7]{2,3}){3}\b/g,
  ];
  for (const r of structured) {
    let hit;
    while ((hit = r.exec(src)) !== null) {
      const ip = hit[0].split(".").map((o) => (/^0[xX]/i.test(o) ? parseInt(o, 16) : parseInt(o, 8))).join(".");
      if (validOctets(ip) && routableIp(ip)) out.add("http://" + ip);
    }
  }
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
  const code = stripComments(added);
  const normalized = normalizeText(code);
  const decoded = decodeBlobs(normalized);
  const enriched = normalized + "\n" + decoded;
  const plainHosts = findNewHosts(code, cfg.domains);
  const enrichedHosts = findNewHosts(enriched, cfg.domains);
  const obHosts = enrichedHosts.filter((h) => !plainHosts.includes(h));
  const testSecrets = (t) => cfg.secretPatterns.filter((p) => new RegExp(p).test(t));
  const plainSecrets = testSecrets(code);
  const obSecrets = testSecrets(enriched).filter((s) => !plainSecrets.includes(s));
  const riskyHosts = enrichedHosts.filter((h) => isRiskyUrl(h, cfg.riskyInfra || []));
  const typo = findTyposquat(enrichedHosts, cfg);
  const decIp = (normalized.match(/\b\d{9,10}\b/g) || []).filter((n) => Number(n) <= 4294967295);
  const hexIp = (normalized.match(/\b0[xX][0-9a-fA-F]{8}\b/g) || []).map((h) => String(parseInt(h, 16)));
  const intIp = [...decIp, ...hexIp];
  return {
    hosts: plainHosts.filter((h) => !riskyHosts.includes(h)),
    riskyHosts,
    typo,
    obHosts,
    obSecrets,
    intIp,
    perms: hasAny(normalized, cfg.dangerousPermissions),
    src: sourceHits(normalized, cfg.sources),
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

const IP_CONVERT = ["InetAddress", "getByName", "getAllByName", ">>>", "& 0xFF", "& 0xff", " and 0x"];

function hasIpConversion(text) {
  const t = String(text);
  if (hasAny(t, IP_CONVERT).length > 0) return true;
  return /(^|[^A-Za-z0-9_])(shr|ushr)([^A-Za-z0-9_]|$)/.test(t);
}

function geoOnly(a, cfg) {
  const allHosts = [...a.hosts, ...a.riskyHosts, ...a.obHosts];
  if (a.src.length === 0 || !a.src.every((s) => /location/i.test(s))) return false;
  if (allHosts.length === 0 || !allHosts.every((h) => isGeoUrl(h, cfg.geoHosts))) return false;
  return a.sms.length === 0 && a.spy.length === 0 && a.keylog.length === 0 && a.staged.length === 0 &&
    a.secrets.length === 0 && a.obSecrets.length === 0 && a.typo.length === 0 && a.pin.length === 0 &&
    a.prx.length === 0 && a.perms.length === 0 && a.bridge.length === 0 && a.dns.length === 0 &&
    a.root.length === 0 && a.media.length === 0 && a.reflect.length === 0 && a.handoff.length === 0 &&
    a.intIp.length === 0;
}

export function findingsForFile(file, added, cfg) {
  const findings = [];
  const crit = (reason) => findings.push({ severity: "critical", file, reason, excerpt });
  const excerpt = added.split("\n").slice(0, 15).join("\n");
  const code = stripComments(added);
  const a = analyzeAdded(code, cfg);
  const hasPlaceholderKey = code.includes("REPLACE_WITH_");
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
    const gh = findNewHosts(code, cfg.domains);
    if (gh.length > 0) {
      findings.push({ severity: "high", file, reason: "new external build URL (supply chain): " + gh.join(", "), excerpt });
    } else {
      const depLines = code.split("\n").filter((l) => /^\s*(implementation|api|compileOnly)\s*\(/.test(l));
      const external = depLines.filter((l) => !/\(\s*(project\s*\(|files\s*\(|fileTree\s*\()/i.test(l));
      if (external.length > 0) {
        findings.push({ severity: "info", file, reason: "new external dependency added — verify coordinates", excerpt });
      }
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
  const pkgPath = /\/data\/data\/[a-zA-Z0-9_.]+\.[a-zA-Z]+/.test(code);
  const appDb = hasAny(code, ["shared_prefs", "Cookies", "webview.db"]);
  if (pkgPath && net) {
    crit("cross-app private data access with network: other-package path");
  } else if (appDb.length > 0 && net) {
    findings.push({ severity: "high", file, reason: "same-app stored data/cookies with network — verify same-site: " + appDb.join(","), excerpt });
  }
  if (a.root.length > 0) {
    if (pkgPath || appDb.length > 0) crit("root execution against app-private data: " + a.root.join(","));
    else if (a.sink.length > 0) findings.push({ severity: "high", file, reason: "root execution with network sink", excerpt });
  }
  if (code.includes("createPackageContext") && a.sink.length > 0 && findings.length === 0) {
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
    if (geoOnly(a, cfg)) {
      const allHosts = [...a.hosts, ...a.riskyHosts, ...a.obHosts];
      findings.push({ severity: "medium", file, reason: "location use with map/geocode API (downgraded): " + allHosts.join(", "), excerpt });
    } else {
      findings.push({ severity: "high", file, reason: "sensitive source reaches network sink", excerpt });
    }
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
  if (a.intIp.length > 0 && (a.sink.length > 0 || a.prx.length > 0) && findings.length === 0 && hasIpConversion(code)) {
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
      if (/(^|\/)gradle\/wrapper\//.test(entry.file)) continue;
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
    if (!isScannableFile(entry.file) || isTestPath(entry.file)) continue;
    for (const f of findingsForFile(entry.file, entry.added, cfg)) out.push(f);
  }
  return out;
}

const SIG_KEYS = ["hosts", "sources", "sinks", "perms", "pinning", "sms", "spy", "keylog", "staged"];

function blankFileSig() {
  return { hosts: [], sources: [], sinks: [], perms: [], pinning: [], sms: [], spy: [], keylog: [], staged: [] };
}

export function extractSignals(diffText, cfg) {
  const files = {};
  for (const entry of parseDiff(diffText)) {
    if (entry.binary || !isScannableFile(entry.file) || isTestPath(entry.file)) continue;
    const a = analyzeAdded(entry.added, cfg);
    const f = (files[entry.file] ||= blankFileSig());
    const push = (arr, vals) => { for (const v of vals) if (!arr.includes(v)) arr.push(v); };
    push(f.hosts, [...a.hosts, ...a.riskyHosts, ...a.obHosts]);
    push(f.sources, a.src);
    push(f.sinks, a.sink);
    push(f.perms, a.perms);
    push(f.pinning, a.pin);
    push(f.sms, a.sms);
    push(f.spy, a.spy);
    push(f.keylog, a.keylog);
    push(f.staged, a.staged);
  }
  return { files };
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
  const rawPrev = all[name] || {};
  const prevFiles = rawPrev.files || {};
  const prevUpdated = rawPrev.updated || today;
  const cur = extractSignals(diffText, cfg);
  const findings = [];
  const nextFiles = {};
  for (const [p, pf] of Object.entries(prevFiles)) {
    nextFiles[p] = mergeFileSig(pf, blankFileSig(), today);
  }
  for (const [path, curFile] of Object.entries(cur.files)) {
    const pf = prevFiles[path] || blankFileSig();
    const prevTerms = [...(pf.sources || []).map((s) => s.v), ...(pf.sinks || []).map((s) => s.v)];
    const prevSpyTerms = [...(pf.sms || []).map((s) => s.v), ...(pf.spy || []).map((s) => s.v), ...(pf.keylog || []).map((s) => s.v), ...(pf.staged || []).map((s) => s.v)];
    const curSpyTerms = [...curFile.sms, ...curFile.spy, ...curFile.keylog, ...curFile.staged];
    const xw = "(see report of " + prevUpdated + " for the earlier half)";
    if (prevSpyTerms.length > 0 && (curFile.hosts.length > 0 || curFile.sinks.length > 0)) {
      findings.push({
        severity: "critical", file: "cross-window",
        reason: "theft primitive completed across windows in " + path + ": previously seen " + prevSpyTerms.join(", ") + " (" + prevUpdated + ") with new network use",
        excerpt: xw,
      });
    }
    if (curSpyTerms.length > 0 && ((pf.hosts || []).length > 0 || (pf.sinks || []).length > 0)) {
      findings.push({
        severity: "critical", file: "cross-window",
        reason: "theft primitive completed across windows in " + path + ": new " + curSpyTerms.join(", ") + " with previously seen network (" + prevUpdated + ")",
        excerpt: xw,
      });
    }
    if (curFile.hosts.length > 0 && prevTerms.length > 0) {
      const geoXw = prevTerms.every((t) => /location/i.test(t)) && curFile.hosts.every((h) => isGeoUrl(h, cfg.geoHosts));
      findings.push({
        severity: geoXw ? "medium" : "high", file: "cross-window",
        reason: (geoXw ? "location-to-map/API use split across windows in " : "exfil completed across windows in ") + path + ": new host " + curFile.hosts.join(", ") + " with previously seen " + prevTerms.join(", ") + " (" + prevUpdated + ")",
        excerpt: xw,
      });
    }
    if ((curFile.sources.length > 0 || curFile.sinks.length > 0) && (pf.hosts || []).length > 0) {
      const newTerms = [...curFile.sources, ...curFile.sinks];
      const geoXw = newTerms.length > 0 && newTerms.every((t) => /location/i.test(t)) &&
        (pf.hosts || []).every((h) => isGeoUrl(h.v, cfg.geoHosts));
      findings.push({
        severity: geoXw ? "medium" : "high", file: "cross-window",
        reason: (geoXw ? "location-to-map/API use split across windows in " : "exfil completed across windows in ") + path + ": previously seen host " + (pf.hosts || []).map((h) => h.v).join(", ") + " (" + prevUpdated + ") with new " + newTerms.join(", "),
        excerpt: xw,
      });
    }
    if ((curFile.pinning.length > 0 && (pf.hosts || []).length > 0) || ((pf.pinning || []).length > 0 && curFile.hosts.length > 0)) {
      findings.push({
        severity: "high", file: "cross-window",
        reason: "pinning bypass plus unknown host split across windows in " + path + " (earlier half in " + prevUpdated + ")",
        excerpt: xw,
      });
    }
    if ((curFile.perms.length > 0 && (pf.sinks || []).length > 0) || ((pf.perms || []).length > 0 && curFile.sinks.length > 0)) {
      findings.push({
        severity: "medium", file: "cross-window",
        reason: "dangerous permission plus network sink split across windows in " + path + " (earlier half in " + prevUpdated + ")",
        excerpt: xw,
      });
    }
    nextFiles[path] = mergeFileSig(pf, curFile, today);
  }
  return { findings, store: { repos: { ...all, [name]: { files: nextFiles, updated: today } } } };
}

function mergeFileSig(prev, curValues, today) {
  const merged = {};
  for (const k of SIG_KEYS) {
    merged[k] = mergeEntries((prev && prev[k]) || [], curValues[k] || [], today);
  }
  return merged;
}

export function applyPardons(blacklist, pardons) {
  const list = blacklist && blacklist.repos ? { ...blacklist.repos } : {};
  const freed = [];
  for (const n of (pardons && pardons.pardoned) || []) {
    if (list[n]) {
      delete list[n];
      freed.push(n);
    }
  }
  return { blacklist: { repos: list }, freed };
}

export function updateBlacklist(name, repo, sha, findings, blacklist, today, report) {
  const list = blacklist && blacklist.repos ? { ...blacklist.repos } : {};
  if (list[name]) return { blacklist: { repos: list }, banned: true, entry: list[name] };
  const confirmed = findings.filter((f) => f.severity === "critical" && f.llm === "confirmed");
  if (confirmed.length === 0) return { blacklist: { repos: list }, banned: false, entry: null };
  const entry = {
    repo,
    since: today,
    sha: String(sha).slice(0, 12),
    reason: confirmed[0].reason,
    report: report || ("reports/" + today + "/" + name + ".md"),
  };
  list[name] = entry;
  return { blacklist: { repos: list }, banned: true, entry };
}

export function reportFilename(name, date, seq, status, counts) {
  const safe = String(name).replace(/[^A-Za-z0-9.-]+/g, "_");
  const n = String(seq).padStart(2, "0");
  const c = counts && (counts.crit + counts.high + counts.med) > 0
    ? `-c${counts.crit}h${counts.high}m${counts.med}` : "";
  return `${safe}-run${n}-${status}${c}.md`;
}

export function nextRunSeq(existingFiles, name) {
  const esc = String(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("^" + esc + "-run(\\d+)-");
  let max = 0;
  for (const f of existingFiles || []) {
    const m = re.exec(String(f).split("/").pop());
    if (m) max = Math.max(max, Number(m[1]));
  }
  return max + 1;
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
