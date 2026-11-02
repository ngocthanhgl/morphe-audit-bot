# bearinmindcat/morphe-patches — 2026-11-02

Commit: c198178c51ae9ff097e123112ce3b1afd5eed31c | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[info] docs/icons/lg-health.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/lg-quickmemo.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/pdfcraft.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/redmagic-game-space.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/redmagicgamespace/RedMagicGameSpaceConstants.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.redmagicgamespace

import app.morphe.patcher.patch.ApkFileType
import app.morphe.patcher.patch.AppTarget
import app.morphe.patcher.patch.Compatibility

object RedMagicGameSpaceConstants {
    /**
     * RedMagic Game Space is a single APK, a system app of RedMagic OS 10 (Android 15), taken from RedMagic 9 Pro's
     * global firmware (REDMAGICOS10.0.7MR1_GB). Pinned to the version tested.
     */
    val COMPATIBILITY_REDMAGIC_GAME_SPACE = Compatibility(
        name = "RedMagic Game Space",
        packageName = "cn.nubia.gamelauncher",
        apkFileType = ApkFileType.APK,
```

</details>


__
