export function mapSemgrep(jsonText) {
  let doc;
  try {
    doc = JSON.parse(String(jsonText));
  } catch {
    return [];
  }
  const results = Array.isArray(doc.results) ? doc.results : [];
  const out = [];
  for (const r of results) {
    const sev = r.extra && r.extra.severity === "ERROR" ? "high" : "medium";
    const trace = r.extra && Array.isArray(r.extra.dataflow_trace)
      ? r.extra.dataflow_trace
          .map((t) => (t.location ? t.location.path + ":" + (t.location.lines ? t.location.lines.begin : "?") : ""))
          .filter(Boolean)
          .slice(0, 5)
          .join(" -> ")
      : "";
    const excerpt = String((r.extra && r.extra.lines) || "").slice(0, 500) + (trace ? "\ntaint: " + trace : "");
    out.push({
      severity: sev,
      file: String(r.path || "unknown") + ":" + (r.start && r.start.line ? r.start.line : "?"),
      reason: "[semgrep " + String(r.check_id || "rule") + "] " + String((r.extra && r.extra.message) || ""),
      excerpt,
    });
  }
  return out;
}
