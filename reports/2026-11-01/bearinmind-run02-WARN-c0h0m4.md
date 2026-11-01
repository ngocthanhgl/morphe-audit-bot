# bearinmindcat/morphe-patches — 2026-11-01

Commit: 69c281498d6e37e56ddecf2a7ba1552439ced8f0 | Status: WARN | crit:0 high:0 med:4

<details>
<summary>[info] docs/icons/nothing-gallery.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/nothing-recorder.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-calendar.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-compass.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-gallery-editor.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-gallery.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-notes.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-recorder.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-scanner.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-screen-recorder.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xiaomi-weather.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/xiaomigallery/XiaomiGalleryConstants.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.xiaomigallery

import app.morphe.patcher.patch.ApkFileType
import app.morphe.patcher.patch.AppTarget
import app.morphe.patcher.patch.Compatibility

object XiaomiGalleryConstants {
    /** Xiaomi Gallery (Global) is a single APK. Pinned to the version tested: R8 renames its classes every build. */
    val COMPATIBILITY_XIAOMI_GALLERY = Compatibility(
        name = "Xiaomi Gallery",
        packageName = "com.miui.gallery",
        apkFileType = ApkFileType.APK,
        appIconColor = 0x7683FF,
        targets = listOf(
            AppTarget(version = "4.3.1.15-global"),
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/xiaomigalleryeditor/XiaomiGalleryEditorConstants.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.xiaomigalleryeditor

import app.morphe.patcher.patch.ApkFileType
import app.morphe.patcher.patch.AppTarget
import app.morphe.patcher.patch.Compatibility

object XiaomiGalleryEditorConstants {
    /** Xiaomi Gallery Editor (Global) is a single APK. Pinned to the version tested: R8 renames its classes every build. */
    val COMPATIBILITY_XIAOMI_GALLERY_EDITOR = Compatibility(
        name = "Xiaomi Gallery Editor",
        packageName = "com.miui.mediaeditor",
        apkFileType = ApkFileType.APK,
        appIconColor = 0x7683FF,
        targets = listOf(
            AppTarget(version = "2.10.40.4.8-global"),
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/xiaomiscreenrecorder/XiaomiScreenRecorderConstants.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.xiaomiscreenrecorder

import app.morphe.patcher.patch.ApkFileType
import app.morphe.patcher.patch.AppTarget
import app.morphe.patcher.patch.Compatibility

object XiaomiScreenRecorderConstants {
    /** Xiaomi Screen Recorder is a single APK. Pinned to the version tested: R8 renames its classes every build. */
    val COMPATIBILITY_XIAOMI_SCREEN_RECORDER = Compatibility(
        name = "Xiaomi Screen Recorder",
        packageName = "com.miui.screenrecorder",
        apkFileType = ApkFileType.APK,
        appIconColor = 0xFF5A36,
        targets = listOf(
            AppTarget(version = "4.16.2.9.1"),
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/xiaomiweather/XiaomiWeatherConstants.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.xiaomiweather

import app.morphe.patcher.patch.ApkFileType
import app.morphe.patcher.patch.AppTarget
import app.morphe.patcher.patch.Compatibility

object XiaomiWeatherConstants {
    /**
     * Xiaomi Weather (Global) is a single APK. Pinned to the version tested: R8 renames its classes every build. The
     * newer 17.1 builds are HyperOS-only shells whose code lives in the system, so there is nothing to patch there.
     */
    val COMPATIBILITY_XIAOMI_WEATHER = Compatibility(
        name = "Xiaomi Weather",
        packageName = "com.miui.weather2",
        apkFileType = ApkFileType.APK,
```

</details>


__
