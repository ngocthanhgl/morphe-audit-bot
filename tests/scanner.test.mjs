import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { scanDiff } from "../scanner.mjs";
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
