# crimera/piko — 2026-11-10

Commit: 297519632c897d19e9f0df0c39e5b315d1a7390b | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] extensions/all/change-version-code/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
extension {
    name = "extensions/all/versioncode/change-version-code.mpe"
}

android {
    namespace = "app.morphe.extension"
    compileSdk = 36

    defaultConfig {
        minSdk = 26
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
```

</details>


__
