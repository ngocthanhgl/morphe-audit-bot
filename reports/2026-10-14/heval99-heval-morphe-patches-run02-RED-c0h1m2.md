# heval99/Heval-Morphe-Patches — 2026-10-14

Commit: ae0f5f1eb0e923cbed447823b63ecf56b9cfc5c5 | Status: RED | crit:0 high:1 med:2

<details>
<summary>[info] extensions/smartwod/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
extension {
    name = "extensions/smartwod.mpe"
}

android {
    namespace = "app.template.extension"
}

dependencies {
    // React Native bridge API stubs. compileOnly: the real classes come from the target app,
    // so the .mpe ships only the extension class.
    compileOnly(project(":extensions:smartwod:stub"))
}

// Pure-Java extension. AGP's built-in Kotlin adds kotlin-stdlib by default, which would grow the
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/template/patches/shared/Constants.kt — sensitive source reaches network sink</summary>

```
    private const val FLASHSCORE_SOURCE_NOTE = "Download the .apks from apkcube.com"

    // 2026-10-12 APK-finder audit: only distributed as a split bundle (APKMirror BUNDLE /
    // APKPure-Uptodown XAPK), so apkFileType is APKM; any "universal APK" note below is outdated.
        apkFileType = ApkFileType.APKM, // Preferred or recommended file type.
            // History (26.07.27 to 26.09.14 were supported until 2026-10-12, see the last note):
            // builds traced to push delivery itself (issue #25); "GmsCore support" and
            // "Spoof signature" (added 2026-10-12) cover that.
            // 2026-10-12, 26.09.28 (still the latest on APKMirror): added "GmsCore support"
            // (shared builder, off by default; FCM push via FCMListenerService and Google login
            // via androidx.credentials GetGoogleIdOption, launch activity main.start.StartActivity;
            // here R8 inlined isGooglePlayServicesAvailable into GoogleApiAvailabilityLight.b, so
            // the shared fingerprint now anchors on its signature warning) and "Spoof signature"
            // (CN=Sofa Score cert, SHA-1 e235776b...4d23, from the APKMirror base APK; Firebase
            // checks it, issues #24/#25). Block marketing notifications now also no-ops every
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/shared/misc/gms/ChangePackageName.kt — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches
 *
 * Original code hard forked from:
 * https://github.com/ReVanced/revanced-patches/blob/724e6d61b2ecd868c1a9a37d465a688e83a74799/patches/src/main/kotlin/app/revanced/patches/all/misc/packagename/ChangePackageNamePatch.kt
 *
 * File-Specific License Notice (GPLv3 Section 7 Terms)
 *
 * This file is part of the Morphe project and is licensed under
 * the GNU General Public License version 3 (GPLv3), with the Additional
 * Terms under Section 7 described in the LICENSE file.
 *
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/shared/misc/gms/GmsCorePackageQueries.kt — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches-library/pull/63
 *
 * File-Specific License Notice (GPLv3 Section 7 Terms)
 *
 * This file is part of the Morphe project and is licensed under
 * the GNU General Public License version 3 (GPLv3), with the Additional
 * Terms under Section 7 described in the LICENSE file.
 *
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * Section 7b: Notice Preservation
 * -------------------------------
 * This entire comment block must be preserved in all copies,
```

</details>


__
