import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { extractStrings, shannonEntropy, analyzeBlob } from "../binary.mjs";
import { loadConfig } from "../scanner.mjs";

const cfg = loadConfig("config/allowlist.json");
const EVIL = "https://evil.example.evil123/x";

function bufWith(content) {
  const pad = Buffer.alloc(32, 0);
  return Buffer.concat([pad, Buffer.from(content, "latin1"), pad]);
}

describe("binary forensics", () => {
  it("extracts ascii strings embedded in null padding", () => {
    const s = extractStrings(bufWith(EVIL));
    assert.ok(s.some((x) => x.includes("evil.example.evil123")));
  });
  it("extracts utf16le strings", () => {
    const u16 = Buffer.from(EVIL, "utf16le");
    const s = extractStrings(Buffer.concat([Buffer.alloc(16, 0), u16, Buffer.alloc(16, 0)]));
    assert.ok(s.some((x) => x.includes("evil.example.evil123")));
  });
  it("computes zero entropy for uniform bytes", () => {
    assert.equal(shannonEntropy(Buffer.alloc(1024, 0)), 0);
  });
  it("flags high-entropy blobs as possibly packed", () => {
    const randomish = Buffer.from(Array.from({ length: 2048 }, (_, i) => (i * 2654435761) % 256));
    const f = analyzeBlob("lib/arm64/libx.so", randomish, cfg);
    assert.ok(f.some((x) => /packed|entropy/i.test(x.reason)));
  });
  it("does not flag plain-text blobs as packed", () => {
    const f = analyzeBlob("lib/arm64/libx.so", bufWith("hello world patch notes v1"), cfg);
    assert.equal(f.filter((x) => /packed|entropy/i.test(x.reason)).length, 0);
  });
  it("runs string content through the rule engine (evil url)", () => {
    const f = analyzeBlob("lib/arm64/libx.so", bufWith(EVIL), cfg);
    assert.ok(f.some((x) => x.severity === "medium" && /non-allowlisted/.test(x.reason)));
  });
  it("runs string content through the rule engine (embedded secret)", () => {
    const f = analyzeBlob("lib/arm64/libx.so", bufWith("AKIAIOSFODNN7EXAMPLE"), cfg);
    assert.ok(f.some((x) => x.severity === "high"));
  });
});
