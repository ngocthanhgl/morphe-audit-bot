# heval99/Heval-Morphe-Patches — 2026-10-19

Commit: a4506115f3bd698a0f76b18ce310f31e3e19fedf | Status: CRIT | crit:2 high:3 med:8

<details>
<summary>[medium] extensions/firefoxfocus/src/main/java/app/template/extension/firefoxfocus/AddonsManager.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.firefoxfocus;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Application;
import android.app.Dialog;
import android.content.Context;
import android.util.Log;
import android.widget.Button;

import org.mozilla.geckoview.WebExtension;
import org.mozilla.geckoview.WebExtensionController;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/bleacherreport/ads/DisableAdsPatch.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.bleacherreport.ads

import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.util.returnEarly
import app.template.patches.bleacherreport.shared.insns
import app.template.patches.bleacherreport.shared.methodRef
import app.template.patches.bleacherreport.shared.resultFailureCall
import app.template.patches.bleacherreport.shared.returnUnit
import app.template.patches.bleacherreport.shared.single
import app.template.patches.bleacherreport.shared.shortCircuitLaunchTask
import app.template.patches.bleacherreport.shared.smali
import app.template.patches.bleacherreport.shared.stringRef
import app.template.patches.shared.Constants.COMPATIBILITY_BLEACHER_REPORT
import app.template.patches.shared.addInstructionsChecked
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/bleacherreport/ads/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.bleacherreport.ads

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.StringComparisonType
import app.morphe.patcher.string
import com.android.tools.smali.dexlib2.AccessFlags

// AdConfigInteractorImpl.getFeaturesAdConfig(List, Continuation) (11.12.0.33: interactor.ads.impl.b.a):
// the ad unit config for each ad feature (feed, splash, banners ...), read by every ad placement.
internal object AdConfigFingerprint : Fingerprint(
    returnType = "Ljava/lang/Object;",
    filters = listOf(
        string("getFeaturesAdConfig() ", StringComparisonType.STARTS_WITH),
        string("Returning hardcoded ad config", StringComparisonType.STARTS_WITH),
    ),
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/bleacherreport/betting/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.bleacherreport.betting

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.StringComparisonType
import app.morphe.patcher.string
import com.android.tools.smali.dexlib2.AccessFlags

// StatsItemType names (an enum: Enum.name() is backed by its <clinit> strings, which R8 keeps)
// for the game page's betting and odds blocks.
internal val BETTING_STATS_ITEMS = listOf(
    "StatsBetting",
    "StatsLiveOdds",
    "StatsOdds",
    "StatsMoneyline",
    "StatsTotalPoints",
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/bleacherreport/betting/HideBettingContentPatch.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.bleacherreport.betting

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.extensions.InstructionExtensions.getInstruction
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.util.smali.ExternalLabel
import app.template.patches.bleacherreport.shared.fieldRef
import app.template.patches.bleacherreport.shared.insns
import app.template.patches.bleacherreport.shared.isStatic
import app.template.patches.bleacherreport.shared.returnNull
import app.template.patches.bleacherreport.shared.single
import app.template.patches.bleacherreport.shared.smali
import app.template.patches.bleacherreport.shared.stringRef
import app.template.patches.shared.Constants.COMPATIBILITY_BLEACHER_REPORT
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/bleacherreport/misc/telemetry/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.bleacherreport.misc.telemetry

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.StringComparisonType
import app.morphe.patcher.string

// comScore keeps its public API names.
internal const val COMSCORE_ANALYTICS = "Lcom/comscore/Analytics;"

// Branch's PrefHelper key for "tracking disabled" (TrackingController). Branch keeps its
// preference keys; the readers (11.12.0.33: io.branch.referral.d.<init>, the lifecycle callback
// io.branch.referral.e and BranchUniversalObject.generateShortUrl in io.branch.indexing.a) are
// renamed.
internal const val BRANCH_TRACKING_STATE = "bnc_tracking_state"

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/bleacherreport/shared/BleacherReportBytecode.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.bleacherreport.shared

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.Match
import app.morphe.patcher.StringComparisonType
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.string
import app.morphe.patcher.util.proxy.mutableTypes.MutableMethod
import app.template.patches.shared.addInstructionsChecked
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.Method
import com.android.tools.smali.dexlib2.iface.instruction.Instruction
import com.android.tools.smali.dexlib2.iface.instruction.OneRegisterInstruction
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/template/patches/shared/Constants.kt — sensitive source reaches network sink [llm: benign 0.95 — no ban]</summary>

```
import app.morphe.patcher.patch.SupportedAbi
            // 2026-10-17: updated to version 26.10.05 (versionCode 261005002; signer CN=Sofa Score,
            // cert SHA-256 ecd3a2c9...9f841, SHA-1 unchanged). Every existing anchor stayed unique;
            // only R8 names moved. 26.09.28 was dropped (latest verified version only). Changes:
            //   - Shared GmsCore support: ensurePlayServicesAvailable is a(Context)V here (R8 dropped
            //     the version parameter), so the old (Context, int) fingerprint never matched; it now
            //     matches (Context), (Context, int) and (int, Context) and fails when missed.
            //   - New "Hide betting content" (off by default, like Flashscore's), anchored on
            //     preference keys plus shape: the static (Context, SharedPreferences)Z odds decision
            //     ("PREF_PROVIDER_ODDS_ENABLE"; 11 methods hold the key, only this one has the
            //     shape) -> false; EventHeadFlags getAdditionalOdds /
            //     getAdditionalOddsComparison / getRecommendedPrematchOdds (kept model) -> false; the
            //     static (Context)String Bet365 open-account link (URL prefix) -> null (both callers
            //     null-check); the static (Context)Z "PREF_PROMOTIONS_ENABLE" -> false; the static
            //     (Context)Z "ODDS_PROVIDERS_DISABLED" -> true (hides the dead odds settings row).
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/sofascore/betting/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.sofascore.betting

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.StringComparisonType
import app.morphe.patcher.string
import com.android.tools.smali.dexlib2.AccessFlags

// The odds helpers live in R8-renamed static utility classes, so they are found by the
// preference key they read plus their shape. Each key is also read or written by other methods
// (settings screen, listeners, analytics); their signatures differ, which keeps these unique.

internal const val CONTEXT = "Landroid/content/Context;"
internal const val EVENT_HEAD_FLAGS = "Lcom/sofascore/model/mvvm/model/EventHeadFlags;"

// static boolean(Context, SharedPreferences): the app-wide "show odds" decision. Reads the
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/kotlin/app/template/patches/shared/Constants.kt: new host http://11.12.0.33 with previously seen CallLog, Contacts, WebView (2026-10-17)</summary>

```
(see report of 2026-10-17 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/kotlin/app/template/patches/shared/Constants.kt: previously seen host http://4.2.31.1, https://ophan.theguardian.com (2026-10-17) with new Contacts, WebView</summary>

```
(see report of 2026-10-17 for the earlier half)
```

</details>

<details>
<summary>[critical] cross-window — [repeat-offender minimax/minimax-m3.1-flash:free] repeat non-benign verdict for heval99-heval-morphe-patches/cross-window (2026-10-16 then 2026-10-19): exfiltration (0.78)</summary>

```
Introducing a new cleartext HTTP host in the same change window as a reported completed exfiltration involving CallLog, Contacts, and WebView data is strongly suspicious. However, the supplied excerpt only references an unavailable earlier report and provides neither line numbers nor the code that sends or packages this data, so malicious behavior cannot be established with the required confidence from the available evidence.
```

</details>

<details>
<summary>[critical] cross-window — [repeat-offender minimax/minimax-m3.1-flash:free] repeat non-benign verdict for heval99-heval-morphe-patches/cross-window (2026-10-16 then 2026-10-19): exfiltration (0.74)</summary>

```
The static-analysis report identifies a cross-window exfiltration pattern involving a hard-coded plaintext IP endpoint (http://4.2.31.1), an external HTTPS host, and newly introduced Contacts/WebView functionality. These are unusual indicators for a shared constants file and justify suspicion. However, the actual diff and exact offending source lines were not supplied, so the data flow and malicious intent cannot be independently verified; malicious classification is therefore not warranted.
```

</details>


__
