# ihatenodejs/aidans-patches — 2026-10-13

Commit: f00a377baee4a233c3e2a9de3a870be5b0b24fa0 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/aidan/patches/sidelineswap/features/RemoveInviteFriendsPatch.kt — new non-allowlisted URL or IP</summary>

```
package app.aidan.patches.sidelineswap.features

import app.aidan.patches.shared.compositeFeaturePatch
import app.aidan.patches.sidelineswap.shared.COMPATIBILITY_SIDELINESWAP
import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patcher.patch.PatchException
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import org.w3c.dom.Element

private const val ANDROID_NS = "http://schemas.android.com/apk/res/android"
private const val ACCOUNT_DETAILS_LAYOUT = "res/layout/fragment_account_details.xml"
private const val BADGE_RED_LAYOUT = "res/layout/badge_red.xml"

```

</details>


__
