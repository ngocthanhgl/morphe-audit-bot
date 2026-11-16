# bearinmindcat/morphe-patches — 2026-11-16

Commit: 1df254204b2ce5c1ac1c6ac73ee94c5ed5defb44 | Status: WARN | crit:0 high:0 med:5

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungcalculator/SamsungCalculatorConstants.kt — new non-allowlisted URL or IP</summary>

```
     * Samsung Calculator is a single APK from the Galaxy Store. Pinned to 12.4.00.13 (12.5 needs Android 16): R8
     * renames its classes every build. It asks for Android 15; the patch lets it run on Android 13 too.
            AppTarget(version = "12.4.00.13", minSdk = 33, description = "needs Android 13 or newer"),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungeditorlite/SamsungEditorLiteConstants.kt — new non-allowlisted URL or IP</summary>

```
     * Editor Lite (formerly Video Trimmer) is a single APK. Pinned to 4.0.85.20 (4.0.90 needs Android 16): R8 renames
     * its classes every build. It asks for Android 14; the patch lets it run on Android 13 too.
            AppTarget(version = "4.0.85.20", minSdk = 33, description = "needs Android 13 or newer"),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungmyfiles/SamsungMyFilesConstants.kt — new non-allowlisted URL or IP</summary>

```
     * My Files is a single APK from the Galaxy Store. Pinned to 15.2.03.2 (15.4 and later need Android 16): R8 renames
     * its classes every build. It asks for Android 14; the patch lets it run on Android 13 too.
            AppTarget(version = "15.2.03.2", minSdk = 33, description = "needs Android 13 or newer"),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungphone/SamsungPhoneConstants.kt — new non-allowlisted URL or IP</summary>

```
     * Samsung Phone is a single APK from the Galaxy Store. Pinned to 16.3.52.1: R8 renames its classes every build. It
     * asks for Android 15; the patch lets it run on Android 13 too.
            AppTarget(version = "16.3.52.1", minSdk = 33, description = "needs Android 13 or newer"),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungsoundassistant/SamsungSoundAssistantConstants.kt — new non-allowlisted URL or IP</summary>

```
     * Sound Assistant is a single APK from the Galaxy Store. Pinned to 8.1.00.6 (8.2 needs Android 16): R8 renames
     * its classes every build. It asks for Android 15; the patch lets it run on Android 13 too.
            AppTarget(version = "8.1.00.6", minSdk = 33, description = "needs Android 13 or newer"),

```

</details>


__
