# heval99/Heval-Morphe-Patches — 2026-10-16

Commit: 9903919829b5eec38df620ea713ad242f3eebb55 | Status: RED | crit:0 high:2 med:0

<details>
<summary>[high] patches/src/main/kotlin/app/template/patches/shared/Constants.kt — sensitive source reaches network sink [llm: benign 0.7 — no ban]</summary>

```
    // Verified 2026-10-14 against 26.41.0 (versionCode 51589, APKPure XAPK merged, arm64; the
    // owner keeps only the latest verified version). Enable Premium+ now finds both parsers by
    // shape (static (String) -> Entitlement/Tier on the enum's companion, reading its Unknown
    // fallback) instead of the R8 names `$a`/`a`; the entitlement enums are unchanged. 26.41.0 adds
    // the Datadog SDK (RUM, crash/ANR, network tracing): the new Disable Datadog telemetry makes
    // the app's DatadogRumStartDecision function (kept return type + SkipReason.FLAG_DISABLED
    // branch) always return Skip(FLAG_DISABLED), so the SDK core is never initialized.
    // MyFitnessPalSmokeTest passes.
    // Emulator 2026-10-14 (26.41.0, logged out): no crash. The app never logs Datadog start-up, so the
    // Datadog skip is verified in bytecode only.
        targets = listOf(AppTarget(version = "26.41.0", versionCode = 51589))
    // 2026-10-14: Disable ads also neutralises the other MobileAds statics (rule 9).
    // 2026-10-14: Disable ads also neutralises the other MobileAds statics (rule 9).
    // 2026-10-14: updated to 10.3.1 (versionCode 2226, single APK, signer CN=Sebastian/O=Cloeme
    // as on 10.3); anchors unchanged: AdsRemovalSettings.areAdsDisabled()Z keeps its name, body and
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/kotlin/app/template/patches/shared/Constants.kt: new host http://4.2.31.1 with previously seen CallLog, WebView (2026-10-14)</summary>

```
(see report of 2026-10-14 for the earlier half)
```

</details>


__
