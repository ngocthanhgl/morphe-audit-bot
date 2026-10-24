# heval99/Heval-Morphe-Patches — 2026-10-24

Commit: 825a06de384936a2c82c92fb0799bc288f867200 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/guardian/misc/telemetry/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
// The endpoint is matched as a URL prefix (STARTS_WITH), so a longer path or query still matches
// under patcher 2.0, which compares raw `strings` with the whole constant. The failure message is
// a whole constant (GuardianSmokeTest finds it by equality) and stays in `strings`, which also
// keeps the two anchors order-free.
    strings = listOf("Ophan submission failed"),
    filters = listOf(string("https://ophan.theguardian.com/mob", StringComparisonType.STARTS_WITH)),

```

</details>


__
