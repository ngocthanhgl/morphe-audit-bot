# RikoDEV/morphed-pl — 2026-11-10

Commit: 5d82a3883c91ae02c93c672f34ab06771e40082a | Status: RED | crit:0 high:1 med:0

<details>
<summary>[high] patches/src/main/kotlin/app/polishapps/patches/lidl/theme/DarkModePatch.kt — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package app.polishapps.patches.lidl.theme

import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.extensions.InstructionExtensions.instructions
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.ResourcePatchContext
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.util.cloneMutable
import app.morphe.patcher.patch.resourcePatch
import app.polishapps.patches.inpost.shared.createsInstanceOf
import app.polishapps.patches.inpost.shared.findClasses
import app.polishapps.patches.inpost.shared.findMethods
import app.polishapps.patches.inpost.shared.mutableMethod
import app.polishapps.patches.inpost.shared.parameterTypeNames
import app.polishapps.patches.inpost.shared.singleMethod
```

</details>


__
