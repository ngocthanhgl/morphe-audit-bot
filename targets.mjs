// Fleet helpers: multi-forge clone URLs, target validation, report pruning.
// Pure functions (testable); runners import cloneUrl/validateTargets/prunableReports.

export function hostFor(source) {
  if (!source || source === "github") return "github.com";
  if (source === "gitlab") return "gitlab.com";
  return null;
}

export function cloneUrl(t, token) {
  const host = hostFor(t.source);
  if (!host) throw new Error("unknown source for target " + t.name + ": " + t.source);
  const path = t.repo + ".git";
  if (!token) return "https://" + host + "/" + path;
  const user = host === "gitlab.com" ? "oauth2" : "x-access-token";
  return "https://" + user + ":" + token + "@" + host + "/" + path;
}

export function deriveName(repo) {
  return String(repo).replace("/", "-").toLowerCase();
}

const REPO_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

export function validateTargets(arr) {
  const errs = [];
  const names = new Set();
  const repos = new Set();
  for (const t of arr) {
    if (!t || typeof t.name !== "string" || !t.name) { errs.push("entry missing name"); continue; }
    if (!REPO_RE.test(String(t.repo || ""))) { errs.push(t.name + ": bad repo format " + t.repo); continue; }
    if (hostFor(t.source) === null) { errs.push(t.name + ": unknown source " + t.source); continue; }
    const n = t.name.toLowerCase();
    if (names.has(n)) errs.push("duplicate name: " + t.name);
    names.add(n);
    const r = String(t.repo).toLowerCase();
    if (repos.has(r)) errs.push("duplicate repo: " + t.repo);
    repos.add(r);
  }
  return errs;
}

// entries: [{path, date: "YYYY-MM-DD", status}]. Prune OK-only reports older than keepDays.
export function prunableReports(entries, todayISO, keepDays) {
  const out = [];
  const today = Date.parse(todayISO + "T00:00:00Z");
  if (Number.isNaN(today)) return out;
  for (const e of entries) {
    if (!e || e.status !== "OK") continue;
    const d = Date.parse((e.date || "") + "T00:00:00Z");
    if (Number.isNaN(d)) continue;
    if ((today - d) / 86400000 > keepDays) out.push(e.path);
  }
  return out;
}
