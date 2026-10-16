# ajstrick81/morphe-androidtv-patches — 2026-10-16

Commit: c4ebffd65d8c019e39bc29953d66f4468de47f63 | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[medium] patches/src/main/kotlin/ajstrick81/morphe/patches/f1tv/shared/Constants.kt — new non-allowlisted URL or IP</summary>

```
package ajstrick81.morphe.patches.f1tv.shared

import app.morphe.patcher.patch.AppTarget
import app.morphe.patcher.patch.Compatibility

object Constants {
    val COMPATIBILITY = Compatibility(
        name = "F1 TV Android TV",
        packageName = "com.formulaone.production",
        appIconColor = 0xE10600, // F1 red
        // AppTarget must equal the APK versionName verbatim (Morphe rule).
        targets = listOf(AppTarget("3.0.49.4-SP166.4.1-release-R54.2-tv")),
    )
}

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/ajstrick81/morphe/patches/f1tv/uhd/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
package ajstrick81.morphe.patches.f1tv.uhd

import app.morphe.patcher.Fingerprint

// ─────────────────────────────────────────────────────────────────────────────
// Fingerprints for F1 TV Android TV (com.formulaone.production) 3.0.49.4
//
// 4K/UHD is gated entirely CLIENT-SIDE: the app probes local capabilities and
// reports the result to F1's backend (via the x-f1-device-info header and the
// Tiledmedia ClearVR SDK capability protobuf), and the backend then decides
// which manifest to serve — SDR is hard-capped at 1620p; the 2160p tier only
// lives in the HDR (HLG) manifest. Every target below is verified in baksmali
// of the shipped dex set for this exact version (signatures matched 1:1 with
// the reference project Alexvbp/f1tv-4k-patch, which targets F1 TV 3.0.49.x).
//
```

</details>


__
