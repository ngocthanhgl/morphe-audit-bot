import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { scanDiff, updateSignalsAndCrossCheck } from "../scanner.mjs";
import { readFileSync } from "node:fs";

const cfg = JSON.parse(readFileSync("config/allowlist.json", "utf8"));

function diffFor(file, addedLines) {
  const body = addedLines.map((l) => "+" + l).join("\n");
  return "diff --git a/" + file + " b/" + file + "\n+++ b/" + file + "\n" + body + "\n";
}

describe("audit rules", () => {
  it("ignores premium-unlock-only patches", () => {
    const d = diffFor("patches/Unlock.kt", ["returnEarly(true)", "val isPremium = true"]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("flags sensitive source reaching network sink as high", () => {
    const d = diffFor("patches/Sync.kt", ["val id = getDeviceId()", "OkHttp.newCall(url).execute()"]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags unknown exfil host as medium", () => {
    const d = diffFor("patches/Ping.kt", ["val u = \"https://evil.example.evil123/ping\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "medium");
  });
  it("ignores allowlisted google/youtube hosts", () => {
    const d = diffFor("patches/Api.kt", ["val u = \"https://www.googleapis.com/youtube/v3/captions\""]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("flags embedded secrets as high", () => {
    const d = diffFor("patches/Key.kt", ["val k = \"AKIAIOSFODNN7EXAMPLE\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags dangerous manifest permission as high", () => {
    const d = diffFor("app/AndroidManifest.xml", ["<uses-permission android:name=\"android.permission.READ_SMS\"/>"]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
});
  it("ignores user-configured example snippets with placeholder keys", () => {
    const d = diffFor("patches/JsExamples.kt", [
      "const apiKey = \"REPLACE_WITH_OPENAI_API_KEY\";",
      "url: \"https://api.openai.com/v1/responses\",",
    ]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });

describe("v2 smart rules", () => {
  const EVIL = "https://evil.example.evil123/submit";
  it("flags base64-hidden exfil host as high", () => {
    const b64 = Buffer.from(EVIL, "utf8").toString("base64");
    assert.ok(b64.length >= 40);
    const d = diffFor("patches/Sync.kt", ["val d = \"" + b64 + "\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags hex-escaped URL as high", () => {
    const hex = EVIL.split("").map((c) => "\\x" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("");
    const d = diffFor("patches/Sync.kt", ["val d = \"" + hex + "\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags string-concat split URL as high", () => {
    const d = diffFor("patches/Sync.kt", ["val u = \"https://evil\" + \".example.evil123/submit\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags hex-dotted and integer-encoded IPs as suspicious", () => {
    const d = diffFor("patches/Net.kt", ["val a = \"0xC0.0xA8.0x1.0x17\"", "val b = \"0xC0A80114\""]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "medium"));
  });
  it("treats decimal-integer IP as suspicious only with network context", () => {
    const ipInt = String(((192 * 256 + 168) * 256 + 1) * 256 + 20);
    assert.equal(ipInt.length, 10);
    const clean = diffFor("patches/V.kt", ["val versionCode = " + ipInt]);
    assert.equal(scanDiff(clean, cfg).length, 0);
    const netty = diffFor("patches/Net.kt", ["val ip = " + ipInt, "OkHttp.newCall(url).execute()"]);
    assert.ok(netty && scanDiff(netty, cfg).length > 0);
  });
  it("flags ngrok-style infra host as medium alone", () => {
    const d = diffFor("patches/Tunnel.kt", ["val u = \"https://abc123.ngrok-free.app/hook\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "medium");
  });
  it("escalates risky-infra host to high when combined with a source", () => {
    const d = diffFor("patches/Tunnel.kt", [
      "val u = \"https://abc123.ngrok-free.app/hook\"",
      "val id = getDeviceId()",
      "OkHttp.newCall(url).execute()",
    ]);
    assert.ok(scanDiff(d, cfg).some((x) => x.severity === "high"));
  });
  it("flags added native binary as medium and .mpe blob as info", () => {
    const so = "diff --git a/lib/arm64-v8a/x.so b/lib/arm64-v8a/x.so\nBinary files a/lib/arm64-v8a/x.so and b/lib/arm64-v8a/x.so differ\n";
    const fso = scanDiff(so, cfg);
    assert.equal(fso.length, 1);
    assert.equal(fso[0].severity, "medium");
    const mpe = "diff --git a/ext/feat.mpe b/ext/feat.mpe\nBinary files a/ext/feat.mpe and b/ext/feat.mpe differ\n";
    const fmpe = scanDiff(mpe, cfg);
    assert.equal(fmpe.length, 1);
    assert.equal(fmpe[0].severity, "info");
  });
  it("cross-window: stored host plus new source/sink flags high", () => {
    const store = { repos: { demo: { hosts: [{ v: EVIL, d: "2026-10-01" }], sources: [], sinks: [], perms: [], pinning: [], updated: "2026-10-01" } } };
    const d = diffFor("patches/Sync.kt", ["val id = getDeviceId()", "OkHttp.newCall(url).execute()"]);
    const r = updateSignalsAndCrossCheck("demo", d, cfg, store, "2026-10-12");
    assert.ok(r.findings.some((x) => x.severity === "high" && /across windows/.test(x.reason)));
  });
  it("cross-window: new unknown host plus stored source flags high", () => {
    const store = { repos: { demo: { hosts: [], sources: [{ v: "getDeviceId", d: "2026-10-01" }], sinks: [], perms: [], pinning: [], updated: "2026-10-01" } } };
    const d = diffFor("patches/Ping.kt", ["val u = \"" + EVIL + "\""]);
    const r = updateSignalsAndCrossCheck("demo", d, cfg, store, "2026-10-12");
    assert.ok(r.findings.some((x) => x.severity === "high" && /across windows/.test(x.reason)));
  });
});
