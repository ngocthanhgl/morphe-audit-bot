# AmpleReVanced/revanced-patches — 2026-10-23

Commit: a37261b029dc8d9ca54a9c8bf48a36ffa48e55be | Status: RED | crit:0 high:2 med:1

<details>
<summary>[info] extensions/navermap/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
dependencies {
    compileOnly(libs.annotation)
}

android {
    compileSdk = 36

    defaultConfig {
        minSdk = 29
    }
}

```

</details>

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    implementation(kotlin("metadata-jvm"))

```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/revanced/patches/kakaotalk/misc/packagename/Fingerprints.kt — sensitive source reaches network sink</summary>

LLM review: suspicious (0.72, exfiltration): The fingerprint targets `getApplicationContext()` and then performs a `SPUT_OBJECT` into a field of type Context, which is a common pattern for intercepting context-dependent data (e.g., tokens, session data, or runtime state). While this could be legitimate reflection-based patching, the combination of targeting application-level context fields with network-relevant sinks warrants suspicion. The snippet is truncated, so the full fingerprint logic is unknown, but the pattern of capturing context objects at the application level is consistent with exfiltration or spyware behavior in reverse engineering contexts.

```
import app.morphe.patcher.InstructionLocation.MatchAfterImmediately
import app.morphe.patcher.fieldAccess
import app.morphe.patcher.opcode
import app.morphe.patcher.string
)

internal object EmoticonDecryptContextFingerprint : Fingerprint(
    name = "<clinit>",
    filters = listOf(
        methodCall("Landroid/content/Context;->getApplicationContext()Landroid/content/Context;"),
        opcode(Opcode.MOVE_RESULT_OBJECT, location = MatchAfterImmediately()),
        fieldAccess(
            type = "Landroid/content/Context;",
            opcode = Opcode.SPUT_OBJECT,
            location = MatchAfterImmediately(),
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/revanced/patches/kakaotalk/misc/packagename/Fingerprints.kt — sensitive data handoff to explicit external package</summary>

LLM review: unreviewed (reviewer request failed; no automatic ban)

```
import app.morphe.patcher.InstructionLocation.MatchAfterImmediately
import app.morphe.patcher.fieldAccess
import app.morphe.patcher.opcode
import app.morphe.patcher.string
)

internal object EmoticonDecryptContextFingerprint : Fingerprint(
    name = "<clinit>",
    filters = listOf(
        methodCall("Landroid/content/Context;->getApplicationContext()Landroid/content/Context;"),
        opcode(Opcode.MOVE_RESULT_OBJECT, location = MatchAfterImmediately()),
        fieldAccess(
            type = "Landroid/content/Context;",
            opcode = Opcode.SPUT_OBJECT,
            location = MatchAfterImmediately(),
```

</details>

<details>
<summary>[medium] patches/src/main/resources/starnote/lib/arm64-v8a/libstarnote-patch.so — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
