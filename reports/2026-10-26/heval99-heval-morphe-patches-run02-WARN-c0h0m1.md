# heval99/Heval-Morphe-Patches — 2026-10-26

Commit: 55b8cf0051851ed5c31a16e4b88ccf1d4d9b463b | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/guardian/misc/telemetry/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
    strings = listOf(string("Ophan submission failed", StringComparisonType.CONTAINS)),
    strings = listOf(string("FirebaseCrashlytics component is not present.", StringComparisonType.CONTAINS)),
    strings = listOf(
        string("https://mobile-events.guardianapis.com/notification/received?platform=android", StringComparisonType.CONTAINS),
    ),

```

</details>


__
