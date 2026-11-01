# bearinmindcat/morphe-patches — 2026-11-01

Commit: bd522fe2ac9397c8af5931be3816e74534d61b4e | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[info] docs/icons/honor-calculator.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-calendar.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-clock.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-compass.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-files.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-notes.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-recorder.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-video-player.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/honorrecorder/misc/EnableNonMagicOsPatch.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.honorrecorder.misc

import app.morphe.patcher.extensions.InstructionExtensions.addInstruction
import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.extensions.InstructionExtensions.replaceInstruction
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import org.ungoogled.patches.honor.followMagicDayNight
import org.ungoogled.patches.honor.redirectMagicFrameworkLookups
import org.ungoogled.patches.honor.replaceMagicFrameworkIds
import org.ungoogled.patches.honor.replaceMagicFrameworkReferences
import org.ungoogled.patches.honor.replaceMagicIconDrawables
import org.ungoogled.patches.honor.replaceMagicInterpolators
import org.ungoogled.patches.honorrecorder.HonorRecorderConstants.COMPATIBILITY_HONOR_RECORDER
```

</details>


__
