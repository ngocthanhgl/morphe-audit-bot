# Forsigh/waze-patches — 2026-10-13

Commit: 95ba31a728adc8c73bfe42e979e03f9691eda2cb | Status: WARN | crit:0 high:0 med:6

<details>
<summary>[medium] patches/src/main/kotlin/io/github/forsigh/waze/AddAudioPartnersPatch.kt — new non-allowlisted URL or IP</summary>

```
package io.github.forsigh.waze

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.methodCall
import app.morphe.patcher.patch.booleanOption
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.stringOption
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import io.github.forsigh.waze.WazeConstants.COMPATIBILITY_WAZE

/**
 * Add your own media apps as Waze audio partners.
 *
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/io/github/forsigh/waze/MapThemePatch.kt — new non-allowlisted URL or IP</summary>

```
package io.github.forsigh.waze

import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.rawResourcePatch
import app.morphe.patcher.patch.stringOption
import io.github.forsigh.waze.WazeConstants.COMPATIBILITY_WAZE
import java.util.Properties

/**
 * Map theme: recolour Waze's own map skin, at patch time, with no runtime code.
 *
 * HOW WAZE SKINS WORK (measured on 5.25.0.1): the map is drawn from compiled Lua skin descriptions in
 * the base APK - `assets/res/skins/default/skin_values.<mode>.lua` for `day` and `night`, plus an
 * `editor` pair for the map editor, and an `experiment/` copy of each. Two things control what you see:
 *
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/io/github/forsigh/waze/MediaPartnerAvailabilityPatch.kt — new non-allowlisted URL or IP</summary>

```
package io.github.forsigh.waze

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.extensions.InstructionExtensions.replaceInstruction
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.StringReference
import io.github.forsigh.waze.WazeConstants.COMPATIBILITY_WAZE

/**
 * Let Waze treat any installed partner as available, not only apps that implement Waze's SDK.
 *
 * WHY THIS EXISTS (measured on 5.25.0.1): `com/waze/sdk/au;->g(Context)` is the availability check
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/io/github/forsigh/waze/OledDarkModePatch.kt — new non-allowlisted URL or IP</summary>

```
package io.github.forsigh.waze

import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.rawResourcePatch
import io.github.forsigh.waze.WazeConstants.COMPATIBILITY_WAZE
import kotlin.math.roundToInt

/**
 * OLED dark mode: the night map's background becomes true black and the roads get slightly brighter, so
 * an OLED screen's dark pixels are actually off. A plain, patch-time resource edit - select it in Morphe
 * and the skin descriptions inside the APK change; leave it unticked and they stay stock. No injected
 * code, no runtime switch, no companion app.
 *
 * MEASURED ON 5.25.0.1: the night map is drawn from `assets/res/skins/default/skin_values.night.lua`
 * (with `editor.night` and `experiment/` siblings). Two details matter:
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/io/github/forsigh/waze/UnlockMoodsPatch.kt — new non-allowlisted URL or IP</summary>

```
package io.github.forsigh.waze

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
import io.github.forsigh.waze.WazeConstants.COMPATIBILITY_WAZE

/**
 * Unlock the driver-mood picker.
 *
 * WHAT WAZE GATES (measured on 5.25.0.1, `com/waze/MoodManager`):
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/io/github/forsigh/waze/WazeConstants.kt — new non-allowlisted URL or IP</summary>

```
            // still exist in its dex. Without this entry Morphe skips all 17 patches silently there.
            // Third confirmed target (versionCode 1030737, released 2026-10-11). Verified the same way
            // as the second: the bundle applies WITHOUT -f ("Applying 17 patches", zero skips), every
            // anchored method is instruction-identical to 5.25.0.1 (getters 57/33/7, no invalid
            // branches), all 34 referenced CONFIG_VALUE_* keys exist in its dex, and the full .apkm
            // patches end to end into one signed merged APK.
            AppTarget(version = "5.25.4.900"),

```

</details>

<details>
<summary>[info] store/buy-me-a-coffee.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
