# Morphe patches audit

Scans every 4h (`0 */4 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json. v7: every critical/high goes through the LLM judge; bans only on LLM confirmation.

## :octagonal_sign: Blacklisted — permanently untrusted

Once the LLM confirms a malicious finding the target stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`. Deterministic findings without confirmation never ban.

No blacklisted targets.

## :warning: Critical findings

No critical findings in this window.

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-13 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-13/morphe-patches-run02-OK.md |
| bearinmind | 2026-10-13 | ba25e7b | OK | 0 | 0 | 0 | reports/2026-10-13/bearinmind-run02-OK.md |
| d0nj | 2026-10-13 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-13/d0nj-run02-OK.md |
| piko | 2026-10-13 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-13/piko-run02-OK.md |
| piko-ig-lite | 2026-10-13 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-13/piko-ig-lite-run02-OK.md |
| piko-newx | 2026-10-13 | 6c3b0b8 | OK | 0 | 0 | 0 | reports/2026-10-13/piko-newx-run02-OK.md |
| gboard | 2026-10-13 | 6f8064a | OK | 0 | 0 | 0 | reports/2026-10-13/gboard-run02-OK.md |
| hush-messenger | 2026-10-13 | ee20c42 | OK | 0 | 0 | 0 | reports/2026-10-13/hush-messenger-run02-OK.md |
| hush-facebook | 2026-10-13 | b06d2aa | OK | 0 | 0 | 0 | reports/2026-10-13/hush-facebook-run02-OK.md |
| zeldris | 2026-10-13 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-13/zeldris-run02-OK.md |
| adobo | 2026-10-13 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-13/adobo-run02-OK.md |
| doom | 2026-10-13 | e3bb3af | OK | 0 | 0 | 0 | reports/2026-10-13/doom-run02-OK.md |

## Review queue (needs human)

LLM-suspect items below the confirmation bar, plus pending items awaiting a usable verdict — no ban until the judge confirms. Confirm in code, then ban by editing `blacklist.json` or dismiss by deleting the entry from `review-queue.json`.

Queue empty.


## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret), `LLM_MODEL` / `LLM_FALLBACKS` (repo variables) and `LLM_MONTHLY_BUDGET_USD` (default 5) from the environment; without them the LLM layer is skipped silently.
