# Triage 2026-10-12 — gboard + hush-messenger (HEAD tree, depth-1 clone, no secret used)

## jasonwu1994/Gboard-patches
- Secrets: none found (AKIA / ghp_ / xoxb / private key).
- URLs outside allowlist: api.openai.com, api.ipify.org, timeapi.io, duckduckgo/bing (search lenses), 192.168.1.23 (test fixture only).
- Verdict on api.openai.com: user-facing EXAMPLE snippet in GboardTopRowSwipeSettingsFeature.java (~line 813), placeholder REPLACE_WITH_OPENAI_API_KEY with guard that throws until the user sets their own key. Opt-in, not silent exfil. Rule added: REPLACE_WITH_ placeholder suppresses host-only medium.
- ipify/timeapi: same example-snippet family (current-IP, UK-time). Same verdict.
- 192.168.1.23: only in WebClipboardTileControllerTest fixtures. Benign.
- Status: OK with notes. Real signal starts on next diff-window scan.

## SysAdminDoc/HushMessenger
- Secrets: none found.
- github.com.evil: negative test in UpdateCheckTest.java:97 (expects empty page). Good practice, not a finding.
- Rest: schemas, ko-fi (donation), api.github.com (update check). Benign.
- Status: OK.
