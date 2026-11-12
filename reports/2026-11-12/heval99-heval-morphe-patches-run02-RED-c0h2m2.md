# heval99/Heval-Morphe-Patches — 2026-11-12

Commit: 151a0c5cc1ac6a7cd3458a2415694415efbd08d9 | Status: RED | crit:0 high:2 med:2

<details>
<summary>[high] patches/src/main/kotlin/app/template/patches/berlingske/ads/DisableAdsPatch.kt — WebView JS bridge with network sink: addJavascriptInterface [llm: benign 0.78 — no ban]</summary>

LLM review: benign (0.78, benign-other): The visible excerpt contains only package and import declarations for an ad-disabling patch. No WebView JavaScript bridge, network sink, data collection, or dynamic code execution is present in the shown code. The static-analysis flag appears to refer to target-app patching or a non-executable string rather than malicious behavior in this patch.

```
package app.template.patches.berlingske.ads

import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.util.proxy.mutableTypes.MutableMethod.Companion.toMutable
import app.template.patches.shared.Constants.COMPATIBILITY_BERLINGSKE
import app.template.patches.shared.Constants.COMPATIBILITY_BT
import app.template.patches.shared.addInstructionsWithLabelsChecked
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.builder.MutableMethodImplementation
import com.android.tools.smali.dexlib2.iface.ClassDef
import com.android.tools.smali.dexlib2.iface.Method
import com.android.tools.smali.dexlib2.iface.instruction.FiveRegisterInstruction
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/template/patches/jyllandsposten/ads/DisableAdsPatch.kt — WebView JS bridge with network sink: addJavascriptInterface</summary>

LLM review: suspicious (0.35, benign-other): The provided excerpt contains only package and import declarations. It does not show an addJavascriptInterface call, WebView JavaScript bridge, network sink, or any data-handling behavior. The static-analysis reason cannot be confirmed from the shown code, and the patch name suggests ad disabling rather than exfiltration, but the missing implementation prevents a benign conclusion.

```
package app.template.patches.jyllandsposten.ads

import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.extensions.InstructionExtensions.instructions
import app.template.patches.shared.Constants.COMPATIBILITY_JYLLANDSPOSTEN
import app.template.patches.shared.addInstructionsAtControlFlowLabelChecked
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.ClassDef
import com.android.tools.smali.dexlib2.iface.Method
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.FieldReference
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
import com.android.tools.smali.dexlib2.iface.reference.TypeReference

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/jyllandsposten/misc/telemetry/DisableTelemetryPatch.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.jyllandsposten.misc.telemetry

import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.util.returnEarly
import app.template.patches.shared.Constants.COMPATIBILITY_JYLLANDSPOSTEN
import app.template.patches.shared.misc.telemetry.forceFirebaseManifestSwitches
import app.template.patches.shared.telemetry.disableGemiusAudience
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
import com.android.tools.smali.dexlib2.iface.reference.TypeReference

// The JPPol Snowplow tracker is built for this endpoint; the wrapper class is R8-renamed, the
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/shared/misc/dns/DnsFilter.kt — new non-allowlisted URL or IP</summary>

```
/** The options every "DNS filter" patch registers, read once its execute block runs. */
    private val customUrlOption: Option<String>,
    /**
     * The resolver URL, validated again so a bad value can never reach a const-string. A filled-in
     * custom resolver replaces the choice of the list (2026-11-09: Manager's list only offers the
     * presets, so your own address, for example NextDNS, goes in its own field).
     */
        get() {
            val custom = customUrlOption.value?.trim()
            if (!custom.isNullOrEmpty()) {
                return custom.takeIf(::isValidDohUrl)
                    ?: throw PatchException("Custom DNS-over-HTTPS resolver is not a valid https URL: $custom")
            }
            return urlOption.value?.takeIf(::isValidDohUrl)
                ?: throw PatchException("DNS-over-HTTPS resolver URL is not a valid https URL: ${urlOption.value}")
```

</details>


__
