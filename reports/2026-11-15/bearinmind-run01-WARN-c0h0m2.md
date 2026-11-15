# bearinmindcat/morphe-patches — 2026-11-15

Commit: b71fa2024dafe40dccaa98de14b35b1532c7541a | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[info] docs/icons/sboard.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungphotoeditor/SamsungPhotoEditorConstants.kt — new non-allowlisted URL or IP</summary>

```
     * Photo Editor is a single APK from the Galaxy Store. Pinned to the versions tested (R8 renames its classes every
     * build): 3.9.04.6, the newest that runs on Android 15 (3.9.09 needs Android 16), and 3.4.14.63, the newest for
     * Android 13 and 14 (newest first: the version check suggests the first one a phone can run).
            AppTarget(version = "3.4.14.63", minSdk = 33, description = "needs Android 13 or newer"),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungphotoeditor/misc/EnableNonOneUiPatch.kt — new non-allowlisted URL or IP</summary>

```
import org.ungoogled.patches.samsung.galaxyStoreChecksPatch
        // Measured: 3.9.04.6 186 calls and 45 field accesses, 3.4.14.63 93 and 20.
        if (calls < 60) throw PatchException("only $calls One UI calls found")
    }
}

private const val ANDROID_14 = "Lorg/ungoogled/samsungphotoeditor/Android14;"

/**
 * Android 14 methods Photo Editor 3.4.14.63 (Android 13 and up) calls without checking the version: Ultra HDR
 * (gainmaps, the display's HDR/SDR ratio). On Android 13 opening a photo died on Display.isHdrSdrRatioAvailable().
 * Found with api-versions.xml (since > 33) over the app's dex; calls on gainmaps themselves need none (no gainmap
 * exists below Android 14).
 */
private val ANDROID_14_CALLS = listOf(
```

</details>


__
