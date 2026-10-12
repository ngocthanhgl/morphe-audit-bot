# Morphe patches audit

Scans every 4h (`0 */4 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design.

| target | scan | commit | status | high | med | report |
|---|---|---|---|---|---|---|
| triage | 2026-10-12 | — | OK | 0 | 0 | reports/2026-10-12/triage-gboard-hush.md |

Targets: see targets.json (12 repos, Nai skipped per owner request).

## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and reference it via `secrets.SCAN_TOKEN` only.
