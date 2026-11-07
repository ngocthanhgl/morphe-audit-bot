# bearinmindcat/morphe-patches — 2026-11-07

Commit: 119155e3a491bc9dc13ee54498c4e7cd26e2d3a4 | Status: CRIT | crit:1 high:0 med:0

<details>
<summary>[info] docs/icons/samsung-one-hand-operation.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/sony-music.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xperia-keyboard.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[critical] patches/src/main/kotlin/org/ungoogled/patches/samsungonehand/misc/EnableNonOneUiPatch.kt — notification/accessibility capture with external host: AccessibilityService</summary>

LLM review: suspicious (0.3, spyware): Excerpt contains only package and patcher imports with no AccessibilityService, notification capture, or external host code visible; insufficient evidence to confirm the static-analysis flag or to meet malicious threshold, so marked suspicious pending full diff review.

```
package org.ungoogled.patches.samsungonehand.misc

import app.morphe.patcher.extensions.InstructionExtensions.addInstruction
import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.extensions.InstructionExtensions.addInstructionsWithLabels
import app.morphe.patcher.extensions.InstructionExtensions.getInstruction
import app.morphe.patcher.extensions.InstructionExtensions.replaceInstruction
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import app.morphe.patcher.util.smali.ExternalLabel
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.FiveRegisterInstruction
import com.android.tools.smali.dexlib2.iface.instruction.OneRegisterInstruction
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
```

</details>


__
