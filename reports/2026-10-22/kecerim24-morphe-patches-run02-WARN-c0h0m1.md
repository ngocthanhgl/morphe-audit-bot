# Kecerim24/morphe-patches — 2026-10-22

Commit: 1466819da8bbf9e4378a9f724cd421da6723108f | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/kecerim24/patches/nowplaying/Fingerprints.kt — new non-allowlisted URL or IP</summary>

LLM review: suspicious (0.6, benign-other): The excerpt shows a package allowlist for Now Playing music services, which is not inherently malicious. However, the static-analysis reason cites a new non-allowlisted URL or IP, and the provided excerpt does not include that code, so the concern could not be fully verified.

```
package app.kecerim24.patches.nowplaying

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.InstructionLocation.MatchAfterImmediately
import app.morphe.patcher.methodCall
import app.morphe.patcher.opcode
import app.morphe.patcher.string
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.Opcode

/**
 * Static initializer of the object holding the music services Now Playing integrates with:
 *
 * ```
 * val SUPPORTED_PACKAGES = listOf("com.apple.android.music", ..., "deezer.android.app")
```

</details>


__
