# hxreborn/morphe-patches — 2026-10-19

Commit: 4d54bff9e880e027533e771c9967bc1424933d0f | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[info] .github/assets/icons/joyn-austria.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/opal.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] .github/assets/icons/serializd.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/shared/compat/AppCompatibilities.kt — new non-allowlisted URL or IP</summary>

```
        targets = listOf(
            AppTarget(version = "2026.08.1041", versionCode = 26081041, minSdk = 21),
            AppTarget(version = "2026.09.1051", versionCode = 26091051, minSdk = 32),
        ),
    val JOYN_AT = Compatibility(
        name = "Joyn Austria",
        packageName = "at.zappn",
        apkFileType = ApkFileType.APKS,
        appIconColor = 0x000F15,
        signatures = setOf("8827dfbc7a7acf9ff37cfc7b6c1e544f80dc1fb8a235a8ca8174b08028e5d089"),
        targets = listOf(AppTarget(version = "6.9.0-AOS-JOYN_AT-2212264", versionCode = 2212264, minSdk = 24)),
    )

            AppTarget(version = "7.1.26.38.B4684D03.6207A61BA", versionCode = 2026141716, minSdk = 32),
            AppTarget(version = "4.0.03.0918.03", versionCode = 50020129, minSdk = 29),
```

</details>


__
