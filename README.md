# Morphe patches audit

Scans every 4h (`0 */4 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d).

## :warning: Critical findings

No critical findings in this window.

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-12 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-12/morphe-patches.md |
| bearinmind | 2026-10-12 | fd2d053 | OK | 0 | 0 | 0 | reports/2026-10-12/bearinmind.md |
| d0nj | 2026-10-12 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-12/d0nj.md |
| piko | 2026-10-12 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-12/piko.md |
| piko-ig-lite | 2026-10-12 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-12/piko-ig-lite.md |
| piko-newx | 2026-10-12 | 6c3b0b8 | OK | 0 | 0 | 0 | reports/2026-10-12/piko-newx.md |
| gboard | 2026-10-12 | 6f8064a | OK | 0 | 0 | 0 | reports/2026-10-12/gboard.md |
| hush-messenger | 2026-10-12 | 2065322 | OK | 0 | 0 | 0 | reports/2026-10-12/hush-messenger.md |
| hush-facebook | 2026-10-12 | 64f5040 | OK | 0 | 0 | 0 | reports/2026-10-12/hush-facebook.md |
| zeldris | 2026-10-12 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-12/zeldris.md |
| adobo | 2026-10-12 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-12/adobo.md |
| doom | 2026-10-12 | e3bb3af | OK | 0 | 0 | 0 | reports/2026-10-12/doom.md |

## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only.
