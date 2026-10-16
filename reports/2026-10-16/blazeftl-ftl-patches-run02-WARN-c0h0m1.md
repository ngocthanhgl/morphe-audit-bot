# BlazeFTL/FTL-Patches — 2026-10-16

Commit: 651547049ae40221396b03bbc50b2583323e4726 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/ftl/patches/MxPlayerAD/BoostSplashScreenPatch.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.patcher.InstructionLocation.MatchAfterWithin
import app.morphe.patcher.MethodCallFilter
import app.morphe.patcher.extensions.InstructionExtensions.addInstructionsWithLabels
import app.morphe.patcher.patch.resourcePatch
import app.morphe.patcher.string
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
 * though patching b() to always return true already makes this site compute the same
 * q0 value (false, welcome ad flow off) on its own.
private object EntryRouteFingerprint : Fingerprint(
    definingClass = ACTIVITY_WELCOME_MX_CLASS,
    returnType = "V",
    parameters = emptyList(),
    filters = listOf(
        methodCall(
```

</details>


__
