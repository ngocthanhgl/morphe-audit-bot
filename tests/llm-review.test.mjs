import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  buildReviewPrompt,
  callReviewer,
  parseVerdict,
  reviewerDecision,
  adjudicateFinding,
  queueReviewerError,
  readSpend,
  recordSpend,
} from "../llm-review.mjs";

const GOOD = {
  verdict: "malicious",
  confidence: 0.92,
  category: "exfiltration",
  evidence: ["patches/Sms.kt:12"],
  reasoning: "reads SMS then posts to unknown host",
};

function stubFetch(handler) {
  return async (url, opts) => handler(url, JSON.parse(opts.body));
}

describe("llm reviewer", () => {
  it("declares the diff untrusted and demands JSON evidence", () => {
    const p = buildReviewPrompt({ repo: "o/r", file: "a.kt", reason: "r", excerpt: "x" });
    assert.match(p.system, /untrusted/i);
    assert.match(p.system, /JSON/i);
    assert.match(p.system, /evidence/i);
  });
  it("posts OpenAI-compatible shape and returns parsed verdict plus cost", async () => {
    const seen = {};
    const fetchImpl = stubFetch((url, body) => {
      seen.url = url;
      seen.body = body;
      return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: JSON.stringify(GOOD) } }], usage: { cost: 0.002 } }) };
    });
    const r = await callReviewer({ endpoint: "https://openrouter.ai/api/v1/chat/completions", apiKey: "k", model: "m", prompt: { system: "s", user: "u" }, fetchImpl });
    assert.match(seen.url, /chat\/completions/);
    assert.equal(seen.body.model, "m");
    assert.equal(seen.body.temperature, 0);
    assert.deepEqual(r.verdict, GOOD);
    assert.equal(r.cost, 0.002);
  });
  it("falls back to the next model on rate limit", async () => {
    const used = [];
    const fetchImpl = stubFetch((url, body) => {
      used.push(body.model);
      if (used.length === 1) return { ok: false, status: 429, json: async () => ({}) };
      return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: JSON.stringify(GOOD) } }], usage: {} }) };
    });
    const r = await callReviewer({ endpoint: "https://e", apiKey: "k", model: "m1", fallbacks: ["m2"], prompt: { system: "s", user: "u" }, fetchImpl });
    assert.deepEqual(used, ["m1", "m2"]);
    assert.equal(r.model, "m2");
  });
  it("rejects verdicts without evidence or with bad confidence", () => {
    assert.equal(parseVerdict({ ...GOOD, evidence: [] }), null);
    assert.equal(parseVerdict({ ...GOOD, confidence: 9 }), null);
    assert.equal(parseVerdict({ ...GOOD, verdict: "maybe" }), null);
    assert.equal(parseVerdict("garbage"), null);
  });
  it("accepts a well-formed verdict", () => {
    assert.deepEqual(parseVerdict(GOOD), GOOD);
  });
  it("gates bans: only high-confidence malicious plus deterministic high", () => {
    assert.equal(reviewerDecision({ verdict: { ...GOOD }, detHigh: true }), "ban");
    assert.equal(reviewerDecision({ verdict: { ...GOOD }, detHigh: false }), "queue");
    assert.equal(reviewerDecision({ verdict: { ...GOOD, confidence: 0.5 }, detHigh: true }), "queue");
    assert.equal(reviewerDecision({ verdict: { ...GOOD, verdict: "suspicious" }, detHigh: true }), "queue");
    assert.equal(reviewerDecision({ verdict: { ...GOOD, verdict: "benign" }, detHigh: true }), "ignore");
    assert.equal(reviewerDecision({ verdict: null, detHigh: true }), "ignore");
  });
  it("adjudicates findings: ban only on confirmation, overrule on benign, pending on failure", () => {
    const f = { severity: "critical", file: "x", reason: "y", excerpt: "" };
    assert.equal(adjudicateFinding({ finding: f, verdict: { ...GOOD }, detHigh: true }).action, "ban");
    assert.equal(adjudicateFinding({ finding: f, verdict: { ...GOOD, confidence: 0.5 }, detHigh: true }).action, "queue");
    assert.equal(adjudicateFinding({ finding: f, verdict: { ...GOOD, verdict: "suspicious" }, detHigh: true }).action, "queue");
    assert.equal(adjudicateFinding({ finding: f, verdict: { ...GOOD, verdict: "benign" }, detHigh: true }).action, "overrule");
    assert.equal(adjudicateFinding({ finding: f, verdict: null, detHigh: true }).action, "pending");
  });
  it("tracks spend and enforces the budget cap", () => {
    const f = join(tmpdir(), "spend-test-" + process.pid + "-" + Date.now() + ".json");
    assert.equal(readSpend(f, "2026-10").total, 0);
    recordSpend(f, 0.01, "2026-10");
    recordSpend(f, 0.02, "2026-10");
    const s = readSpend(f, "2026-10");
    assert.ok(Math.abs(s.total - 0.03) < 1e-9);
    assert.equal(s.overBudget, false);
    assert.equal(readSpend(f, "2026-10", 0.02).overBudget, true);
  });
  it("tries the next model when the first is retired (404)", async () => {
    const used = [];
    const fetchImpl = stubFetch((url, body) => {
      used.push(body.model);
      if (used.length === 1) return { ok: false, status: 404, json: async () => ({ error: { message: "No endpoints found for stale-model" } }) };
      return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: JSON.stringify(GOOD) } }], usage: {} }) };
    });
    const r = await callReviewer({ endpoint: "https://e", apiKey: "k", model: "stale-model", fallbacks: ["fresh-model"], prompt: { system: "s", user: "u" }, fetchImpl });
    assert.deepEqual(used, ["stale-model", "fresh-model"]);
    assert.equal(r.model, "fresh-model");
  });
  it("retries without schema when the model rejects structured output", async () => {
    const bodies = [];
    const fetchImpl = stubFetch((url, body) => {
      bodies.push(body);
      if (bodies.length === 1) return { ok: false, status: 400, json: async () => ({ error: { message: "response_format json_schema is not supported" } }) };
      return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: JSON.stringify(GOOD) } }], usage: {} }) };
    });
    const r = await callReviewer({ endpoint: "https://e", apiKey: "k", model: "m1", fallbacks: [], prompt: { system: "s", user: "u" }, fetchImpl });
    assert.equal(bodies.length, 2);
    assert.ok(!("response_format" in bodies[1]));
    assert.equal(r.model, "m1");
  });
  it("records reviewer failures with the error text for diagnosis", () => {
    const queue = { items: {} };
    const key = queueReviewerError({ queue, today: "2026-10-14", target: "t", repo: "o/r", file: "a.kt", reason: "src+sink", error: new Error("reviewer HTTP 404 for ghost-model"), source: "4h" });
    const e = queue.items[key];
    assert.equal(e.category, "reviewer-error");
    assert.match(e.reasoning, /404/);
    assert.match(e.reasoning, /ghost-model/);
  });
});
