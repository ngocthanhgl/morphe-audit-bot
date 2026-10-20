# Forsigh/waze-patches — 2026-10-20

Commit: ab262cf27e172c7388bb8f706f6d8913aad2da52 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/io/github/forsigh/waze/SpeedometerScalePatch.kt — new non-allowlisted URL or IP [llm: benign 0.88 — no ban]</summary>

```
package io.github.forsigh.waze

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.stringOption
import io.github.forsigh.waze.WazeConstants.COMPATIBILITY_WAZE

/**
 * Bigger speedometer and speed-limit sign (opt-in, default off).
 *
 * The speedometer cluster is inflated from `res/layout/speedometer.xml`: a 110dp FrameLayout holding
 * the coloured ring, the speed number (26dp), the unit (12dp), and - as its own child - the limit
 * sign (40dp text in a wrap_content FrameLayout). Sizes are hardcoded dp, so there is no scale value
 * to turn; this patch scales the views at runtime instead.
```

</details>


__
