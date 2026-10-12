import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { mapSemgrep } from "../semgrep.mjs";

const FIXTURE = JSON.stringify({
  results: [
    {
      check_id: "morphe.taint-device-to-net",
      path: "patches/Sync.kt",
      start: { line: 41 },
      extra: {
        message: "device identifier flows to network sink",
        severity: "ERROR",
        lines: "client.newCall(req(id)).execute()",
      },
    },
    {
      check_id: "morphe.custom-crypto-xor",
      path: "patches/Obf.kt",
      start: { line: 7 },
      extra: {
        message: "custom xor loop over bytes (possible hidden payload)",
        severity: "WARNING",
        lines: "out[i] = data[i] xor key[i % key.size]",
      },
    },
  ],
  errors: [],
});

describe("semgrep mapper", () => {
  it("maps ERROR taint hits to high with rule id", () => {
    const f = mapSemgrep(FIXTURE);
    assert.equal(f.length, 2);
    assert.equal(f[0].severity, "high");
    assert.match(f[0].file, /Sync\.kt:41/);
    assert.match(f[0].reason, /taint-device-to-net/);
  });
  it("maps WARNING search hits to medium", () => {
    const f = mapSemgrep(FIXTURE);
    assert.equal(f[1].severity, "medium");
    assert.match(f[1].reason, /custom-crypto-xor/);
  });
  it("returns empty for empty results and tolerates garbage", () => {
    assert.deepEqual(mapSemgrep(JSON.stringify({ results: [] })), []);
    assert.deepEqual(mapSemgrep("not json"), []);
    assert.deepEqual(mapSemgrep(JSON.stringify({}), ), []);
  });
});
