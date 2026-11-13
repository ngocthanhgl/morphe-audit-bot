# bearinmindcat/morphe-patches — 2026-11-13

Commit: 5f79152d69a62c26178525282aaf0dbb96820f4e | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[info] docs/icons/samsung-editor-lite.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-finder.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungeditorlite/misc/EnableNonOneUiPatch.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.samsungeditorlite.misc

import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import org.ungoogled.patches.samsung.redirectCalls
import org.ungoogled.patches.samsung.redirectOneUiMembers
import org.ungoogled.patches.samsung.redirectSystemServices
import org.ungoogled.patches.samsungeditorlite.SamsungEditorLiteConstants.COMPATIBILITY_SAMSUNG_EDITOR_LITE
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.StringReference
import org.w3c.dom.Element

internal const val SAMSUNG_EDITOR_LITE_EXTENSION = "extensions/samsungeditorlite.mpe"
```

</details>


__
