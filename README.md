# Morphe patches audit

Scans every 4h (`0 */4 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json.

## :octagonal_sign: Blacklisted — permanently untrusted

Once a target produces a critical finding it stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`.

No blacklisted targets.

## :warning: Critical findings

No critical findings in this window.

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-13 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-13/morphe-patches.md |
| bearinmind | 2026-10-13 | ba25e7b | OK | 0 | 0 | 0 | reports/2026-10-13/bearinmind.md |
| d0nj | 2026-10-13 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-13/d0nj.md |
| piko | 2026-10-13 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-13/piko.md |
| piko-ig-lite | 2026-10-13 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-13/piko-ig-lite.md |
| piko-newx | 2026-10-13 | 6c3b0b8 | OK | 0 | 0 | 0 | reports/2026-10-13/piko-newx.md |
| gboard | 2026-10-13 | 6f8064a | OK | 0 | 0 | 0 | reports/2026-10-13/gboard.md |
| hush-messenger | 2026-10-13 | 7452327 | OK | 0 | 0 | 0 | reports/2026-10-13/hush-messenger.md |
| hush-facebook | 2026-10-13 | b06d2aa | WARN | 0 | 0 | 1 | reports/2026-10-13/hush-facebook.md |
| zeldris | 2026-10-13 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-13/zeldris.md |
| adobo | 2026-10-13 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-13/adobo.md |
| doom | 2026-10-13 | e3bb3af | OK | 0 | 0 | 0 | reports/2026-10-13/doom.md |

## Review queue (needs human)

LLM-suspect items below the auto-ban bar. Confirm in code, then ban by editing `blacklist.json` or dismiss by deleting the entry from `review-queue.json`.

Queue empty.


## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret), `LLM_MODEL` / `LLM_FALLBACKS` (repo variables) and `LLM_MONTHLY_BUDGET_USD` (default 5) from the environment; without them the LLM layer is skipped silently.
