# heval99/Heval-Morphe-Patches — 2026-10-17

Commit: f98277588c5d3a719b1f8c8951deddd78be0c58c | Status: RED | crit:0 high:2 med:2

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/guardian/misc/telemetry/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.guardian.misc.telemetry

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.StringComparisonType
import app.morphe.patcher.fieldAccess
import app.morphe.patcher.methodCall
import app.morphe.patcher.string
import com.android.tools.smali.dexlib2.AccessFlags

internal const val OBJECT = "Ljava/lang/Object;"
internal const val STRING = "Ljava/lang/String;"
internal const val SWITCH_KEY = "Lcom/guardian/util/switches/RemoteSwitches\$Companion\$Key;"

// Firebase Analytics keeps its class name; R8 renames its members (6.238: b(Z) is
// setAnalyticsCollectionEnabled, a(Bundle, String) is logEvent with the name second).
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/shared/Constants.kt — new non-allowlisted URL or IP</summary>

```
    //     check-cast to BottomBarView (kept) collapses the bar with fewer than two tabs (see below).
    // 2026-10-16 (#61, 26.40.5; smoke test + CLI decompile check with the reporter's 14 patches, all
    //   Applied; not runtime-tested, because the Calls screen needs SMS registration): Hide Messages tab
    //   no longer sets the bar GONE. TruecallerInit is edge to edge and only the bar (Material
    //   BottomNavigationView inset listener, bottom padding += nav bar inset) pads for the navigation
    //   bar; the coordinator with the Calls pill and FAB ends at the bar's top (barrier), so a GONE
    //   bar put them behind 3-button navigation. The helper keeps the bar VISIBLE, sets its children
    //   (the tab menu) GONE and its minimum height to 0, saved in a new public Integer field on
    //   BottomBarView (morpheSavedMinHeight) and restored when two or more tabs come back.
    // Written 2026-10-15/16 against com.guardian 6.238.23405 (versionCode 23405), the STABLE
    // build: an owner-supplied APKCube bundle merged into one APK. The bundle's base.apk is signed
    // by Guardian (CN=Android, O=Guardian News and Media, SHA-256 4965429e...9e7d) with a Play
    // stamp; the merged APK's own signature no longer verifies (expected after the merge). No
    // packer, PairIP or app signature check. R8 renames the app's own classes in this build
    // (com.guardian.* and com.theguardian.* included), so every anchor is a string, a kept
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/kotlin/app/template/patches/shared/Constants.kt: new host https://ophan.theguardian.com with previously seen CallLog, Contacts, WebView (2026-10-16)</summary>

```
(see report of 2026-10-16 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/kotlin/app/template/patches/shared/Constants.kt: previously seen host http://4.2.31.1 (2026-10-16) with new WebView</summary>

```
(see report of 2026-10-16 for the earlier half)
```

</details>


__
