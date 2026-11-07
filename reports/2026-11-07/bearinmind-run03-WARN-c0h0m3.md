# bearinmindcat/morphe-patches — 2026-11-07

Commit: 657f7bf21c265bf701e03336c69ae4dce504b808 | Status: WARN | crit:0 high:0 med:3

<details>
<summary>[info] docs/icons/coloros-camera.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/coloros-documents.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/lg-gallery.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-capture.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/colorosdocuments/src/main/java/com/oplus/inner/mediatek/telephony/MtkSmsMessageWrapper.java — SMS reading capability added: SmsMessage</summary>

```
package com.oplus.inner.mediatek.telephony;

/** Generated stand-in (.github/scripts/coloros-standins): names and signatures OnePlus Documents uses, answering "absent" off ColorOS (no OPPO code). */
public class MtkSmsMessageWrapper {
    public static int[] calculateLength(java.lang.CharSequence p0, boolean p1) {
        return new int[0];
    }
    public java.lang.String getDestinationAddress() {
        return "";
    }
    public java.lang.String getDisplayMessageBody() {
        return "";
    }
    public java.lang.String getDisplayOriginatingAddress() {
        return "";
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsunglauncher/SamsungLauncherConstants.kt — new non-allowlisted URL or IP</summary>

```
     * One UI Home is a single APK from the Galaxy Store. Pinned to the versions tested (R8 renames its classes every
     * build): 18.0.07.59, the newest that runs on Android 15, and 16.0.09.35, the newest for Android 13 and 14 (newest
     * first: the version check suggests the first one a phone can run).
            AppTarget(version = "16.0.09.35", minSdk = 33, description = "needs Android 13 or newer"),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsunglauncher/misc/EnableNonOneUiPatch.kt — new non-allowlisted URL or IP</summary>

```
import org.ungoogled.patches.samsunglauncher.v16.HIDDEN_CONSTRUCTORS as V16_HIDDEN_CONSTRUCTORS
import org.ungoogled.patches.samsunglauncher.v16.HIDDEN_MEMBERS as V16_HIDDEN_MEMBERS
import org.ungoogled.patches.samsunglauncher.v16.HIDDEN_SUPERCLASSES as V16_HIDDEN_SUPERCLASSES
import org.ungoogled.patches.shared.redirectNewerJavaCalls
/**
 * 16.0.09.35 is the Android 13 build (One UI 6/7's home screen): its lists are generated against Android 13, 15, 16 and
 * 17 (v16/SamsungLauncher16Members.kt), and a few of its own classes have an older shape.
 */
private fun isAndroid13Build(version: String?) = version?.startsWith("16.") == true

/** The wallpaper picture, refused to an installed app (see Wallpapers): Home Up's backups read it. */
private val WALLPAPER_CALLS = mapOf(
    "Landroid/app/WallpaperManager;->getDrawable()Landroid/graphics/drawable/Drawable;" to
        "$EXT/Wallpapers;->getDrawable(Landroid/app/WallpaperManager;)Landroid/graphics/drawable/Drawable;",
)
```

</details>


__
