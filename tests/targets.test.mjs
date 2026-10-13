import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { hostFor, cloneUrl, deriveName, validateTargets, prunableReports } from "../targets.mjs";

describe("targets: clone URLs", () => {
  it("builds public github clone url", () => {
    assert.equal(cloneUrl({ name: "x", repo: "o/r", source: "github" }, ""), "https://github.com/o/r.git");
  });
  it("embeds token for github authed clone", () => {
    assert.equal(cloneUrl({ name: "x", repo: "o/r", source: "github" }, "TOK"), "https://x-access-token:TOK@github.com/o/r.git");
  });
  it("builds public gitlab clone url", () => {
    assert.equal(cloneUrl({ name: "x", repo: "o/r", source: "gitlab" }, ""), "https://gitlab.com/o/r.git");
  });
  it("embeds token for gitlab authed clone", () => {
    assert.equal(cloneUrl({ name: "x", repo: "o/r", source: "gitlab" }, "TOK"), "https://oauth2:TOK@gitlab.com/o/r.git");
  });
  it("defaults missing source to github", () => {
    assert.equal(cloneUrl({ name: "x", repo: "o/r" }, ""), "https://github.com/o/r.git");
  });
  it("throws on unknown source", () => {
    assert.throws(() => cloneUrl({ name: "x", repo: "o/r", source: "bitbucket" }, ""));
  });
  it("hostFor maps known sources, null otherwise", () => {
    assert.equal(hostFor("github"), "github.com");
    assert.equal(hostFor("gitlab"), "gitlab.com");
    assert.equal(hostFor(undefined), "github.com");
    assert.equal(hostFor("nope"), null);
  });
});

describe("targets: names and validation", () => {
  it("derives bot-safe lowercase names", () => {
    assert.equal(deriveName("Owner/Repo.Name_X"), "owner-repo.name_x");
  });
  it("accepts a clean list", () => {
    assert.deepEqual(validateTargets([{ name: "a", repo: "o/r", source: "github" }]), []);
  });
  it("rejects bad repo format", () => {
    assert.equal(validateTargets([{ name: "a", repo: "not a repo!", source: "github" }]).length, 1);
  });
  it("rejects unknown source", () => {
    assert.equal(validateTargets([{ name: "a", repo: "o/r", source: "nope" }]).length, 1);
  });
  it("rejects duplicate names case-insensitively", () => {
    const errs = validateTargets([{ name: "Ab", repo: "o/r", source: "github" }, { name: "ab", repo: "o/s", source: "github" }]);
    assert.ok(errs.some((e) => e.includes("duplicate name")));
  });
  it("rejects duplicate repos case-insensitively", () => {
    const errs = validateTargets([{ name: "a", repo: "O/R", source: "github" }, { name: "b", repo: "o/r", source: "github" }]);
    assert.ok(errs.some((e) => e.includes("duplicate repo")));
  });
  it("the committed targets.json is valid", () => {
    const arr = JSON.parse(readFileSync(new URL("../targets.json", import.meta.url), "utf8"));
    assert.ok(arr.length >= 200, "expected the full bundle fleet, got " + arr.length);
    assert.deepEqual(validateTargets(arr), []);
  });
});

describe("targets: report pruning", () => {
  const day = "2026-10-13";
  it("prunes only old OK reports", () => {
    const entries = [
      { path: "reports/2026-08-01/x-run01-OK.md", date: "2026-08-01", status: "OK" },
      { path: "reports/2026-10-10/x-run02-OK.md", date: "2026-10-10", status: "OK" },
      { path: "reports/2026-08-01/y-run01-WARN.md", date: "2026-08-01", status: "WARN" },
      { path: "reports/2026-08-01/z-run01-RED.md", date: "2026-08-01", status: "RED" },
    ];
    assert.deepEqual(prunableReports(entries, day, 30), ["reports/2026-08-01/x-run01-OK.md"]);
  });
  it("keeps malformed entries instead of deleting blindly", () => {
    assert.deepEqual(prunableReports([{ path: "reports/x.md", date: "", status: "" }], day, 30), []);
  });
});
