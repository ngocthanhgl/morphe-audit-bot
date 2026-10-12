import { findingsForFile } from "./scanner.mjs";

export function extractStrings(buf, minLen = 4) {
  const out = [];
  let cur = "";
  const flush = () => {
    if (cur.length >= minLen) out.push(cur);
    cur = "";
  };
  for (let i = 0; i < buf.length; i++) {
    const b = buf[i];
    if (b >= 0x20 && b <= 0x7e) cur += String.fromCharCode(b);
    else flush();
  }
  flush();
  let cur16 = "";
  const flush16 = () => {
    if (cur16.length >= minLen) out.push(cur16);
    cur16 = "";
  };
  for (let i = 0; i + 1 < buf.length; i += 2) {
    const lo = buf[i], hi = buf[i + 1];
    if (hi === 0 && lo >= 0x20 && lo <= 0x7e) cur16 += String.fromCharCode(lo);
    else flush16();
  }
  flush16();
  return [...new Set(out)];
}

export function shannonEntropy(buf) {
  if (buf.length === 0) return 0;
  const freq = new Array(256).fill(0);
  for (const b of buf) freq[b]++;
  let h = 0;
  for (const f of freq) {
    if (f === 0) continue;
    const p = f / buf.length;
    h -= p * Math.log2(p);
  }
  return h;
}

export function analyzeBlob(path, buf, cfg) {
  const findings = [];
  const text = extractStrings(buf).join("\n");
  for (const f of findingsForFile(path, text, cfg)) {
    findings.push({ ...f, reason: "[binary strings] " + f.reason });
  }
  if (buf.length >= 512 && shannonEntropy(buf) > 7.2) {
    findings.push({
      severity: "medium",
      file: path,
      reason: "high-entropy blob (packed or encrypted?) — treat as unreviewable",
      excerpt: "(entropy " + shannonEntropy(buf).toFixed(2) + " bits/byte over " + buf.length + " bytes)",
    });
  }
  return findings;
}
