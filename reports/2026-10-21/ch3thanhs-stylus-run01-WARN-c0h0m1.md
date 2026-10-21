# ch3thanhs/stylus — 2026-10-21

Commit: a714364e491bcb9f3ee9f15198054c4cb15dd203 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/stylus/patches/wimt/font/CustomFontPatch.kt — new non-allowlisted URL or IP</summary>

```
package app.stylus.patches.wimt.font

import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import app.morphe.patcher.patch.stringOption
import app.stylus.patches.wimt.shared.Constants.COMPATIBILITY_WIMT
import com.android.tools.smali.dexlib2.Opcode
import java.io.File

private const val CUSTOM_FONT_RESOURCE_NAME = "custom_ui_font"
private const val GM3_FONT_FEATURE_SETTINGS_RESOURCE = "gm3_font_feature_settings"

private val allowedFontExtensions = setOf("ttf", "otf")
```

</details>


__
