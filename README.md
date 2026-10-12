# Morphe patches audit

Scans every 4h (`0 */4 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan.

## :octagonal_sign: Blacklisted — permanently untrusted

Once a target produces a critical finding it stays here forever. Clean later pushes never clear it; removal requires a manual edit of `blacklist.json`.

| :octagonal_sign: | target | since | reason | evidence |
|---|---|---|---|---|
| :octagonal_sign: | hush-messenger (SysAdminDoc/HushMessenger) | 2026-10-12 | theft primitive completed across windows: previously seen TextWatcher (2026-10-12) with new network use | reports/2026-10-12/hush-messenger.md |
| :octagonal_sign: | hush-facebook (SysAdminDoc/HushFacebook) | 2026-10-12 | theft primitive completed across windows: previously seen TextWatcher (2026-10-12) with new network use | reports/2026-10-12/hush-facebook.md |

## :warning: Critical findings

| :warning: | target | file | reason | report |
|---|---|---|---|---|
| :warning: | hush-messenger | cross-window | theft primitive completed across windows: previously seen TextWatcher (2026-10-12) with new network use | reports/2026-10-12/hush-messenger.md |
| :warning: | hush-facebook | cross-window | theft primitive completed across windows: previously seen TextWatcher (2026-10-12) with new network use | reports/2026-10-12/hush-facebook.md |

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-12 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-12/morphe-patches.md |
| bearinmind | 2026-10-12 | ba25e7b | WARN | 0 | 0 | 1 | reports/2026-10-12/bearinmind.md |
| d0nj | 2026-10-12 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-12/d0nj.md |
| piko | 2026-10-12 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-12/piko.md |
| piko-ig-lite | 2026-10-12 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-12/piko-ig-lite.md |
| piko-newx | 2026-10-12 | 6c3b0b8 | OK | 0 | 0 | 0 | reports/2026-10-12/piko-newx.md |
| gboard | 2026-10-12 | 6f8064a | OK | 0 | 0 | 0 | reports/2026-10-12/gboard.md |
| hush-messenger | 2026-10-12 | 37ac6df | BANNED | 1 | 2 | 2 | reports/2026-10-12/hush-messenger.md |
| hush-facebook | 2026-10-12 | 59d9ea5 | BANNED | 1 | 2 | 3 | reports/2026-10-12/hush-facebook.md |
| zeldris | 2026-10-12 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-12/zeldris.md |
| adobo | 2026-10-12 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-12/adobo.md |
| doom | 2026-10-12 | e3bb3af | OK | 0 | 0 | 0 | reports/2026-10-12/doom.md |

## Review queue (needs human)

LLM-suspect items below the auto-ban bar. Confirm in code, then ban by editing `blacklist.json` or dismiss by deleting the entry from `review-queue.json`.

Queue empty.


## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret), `LLM_MODEL` / `LLM_FALLBACKS` (repo variables) and `LLM_MONTHLY_BUDGET_USD` (default 5) from the environment; without them the LLM layer is skipped silently.
