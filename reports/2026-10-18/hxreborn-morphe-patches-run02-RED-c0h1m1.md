# hxreborn/morphe-patches — 2026-10-18

Commit: efd375dbd0aa2868f35c421b00374c145608b162 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[info] .github/assets/icons/acalendar.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/botim.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/calcnote.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/castlefortv.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/cubasisle3.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/lingodeer.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/magicearth.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/moonreader.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/musicolet.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/periodcalendar.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/poe.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/privacynotes.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/quickcursor.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/udictionary.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/hxreborn/extension/privacynotes/ProUnlock.java — WebView JS bridge with network sink: evaluateJavascript</summary>

```
/*
 * Copyright (C) 2026 hxreborn
 * SPDX-License-Identifier: GPL-3.0-only
 */
package app.hxreborn.extension.privacynotes;

import android.webkit.WebView;
import app.morphe.extension.shared.Logger;

import app.hxreborn.extension.WebAssets;

@SuppressWarnings("unused")
public final class ProUnlock {

    private ProUnlock() {
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/shared/compat/AppCompatibilities.kt — new non-allowlisted URL or IP</summary>

```
    val ACALENDAR = Compatibility(
        name = "aCalendar",
        packageName = "org.withouthat.acalendar",
        apkFileType = ApkFileType.APK,
        appIconColor = 0x0277BD,
        signatures = setOf(
            "6e3434746912534281a97d9db0c05d02b7c87b9c4486aa534658bd42fda43a1d",
        ),
        targets = listOf(AppTarget(version = "2.9.5", versionCode = 2009500, minSdk = 21)),
    )

            AppTarget(version = "26.41.07", versionCode = 2090264107, minSdk = 28),
        targets = listOf(AppTarget(version = "1.3.33", versionCode = 5163, minSdk = 26)),
    val BOTIM = Compatibility(
        name = "botim",
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libNvEffectSdkCore-6c96d2a52b68bcf3.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libNvEffectSdkCore-f1c365b0ecf68078.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-lib_musicolet-893e644f498b1f23.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libbenchmarksuite-acd0586d57ff1a9d.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libdevcheck-f1fe8c4e2f198a11.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libmediapipe_tasks_vision_jni-847f01f28ced7bd7.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libmp3lamest-7359fbec9834a70b.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libonnxruntime-07b3d5a7c4b65668.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-librealmc-86737bfc8cbc5859.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-librenderscript-toolkit-d0cb2f926530650d.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libskegn-a2f61dfbe366c5eb.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/pairip/delta-arm64-v8a-libvulkan_info-99665ece72eda319.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
