# VipinVIP/railone-patches — 2026-10-18

Commit: ea245d439c1435a47449675a04c91423f4453234 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/railone/patches/MonochromeIconPatch.kt — new non-allowlisted URL or IP</summary>

```
package app.railone.patches

import app.morphe.patcher.patch.resourcePatch
import app.railone.patches.shared.Constants.COMPATIBILITY_RAILONE
import org.w3c.dom.Element

private const val ANDROID_NAMESPACE = "http://schemas.android.com/apk/res/android"

/** The mipmap the launcher tints. Shipped by this patch, one file per density. */
private const val MONOCHROME_RESOURCE = "ic_launcher_monochrome"

/** Density buckets the app already uses for its own launcher icons. */
private val LAUNCHER_DENSITIES = listOf("mdpi", "hdpi", "xhdpi", "xxhdpi", "xxxhdpi")

/**
```

</details>

<details>
<summary>[info] patches/src/main/resources/monochrome/ic_launcher_monochrome_hdpi.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/monochrome/ic_launcher_monochrome_mdpi.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/monochrome/ic_launcher_monochrome_xhdpi.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/monochrome/ic_launcher_monochrome_xxhdpi.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/monochrome/ic_launcher_monochrome_xxxhdpi.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
