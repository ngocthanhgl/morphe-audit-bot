# BlazeFTL/FTL-Patches — 2026-10-25

Commit: f07a997e0706647986a675f1eb7fdee342999309 | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] extensions/mobilism/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
import com.android.build.api.dsl.ApplicationExtension

dependencies {
    compileOnly(libs.morphe.extensions.library)
    compileOnly(libs.annotation)
    compileOnly("androidx.preference:preference:1.2.1")
}

configure<ApplicationExtension> {
    defaultConfig {
        minSdk = 26
    }
    buildTypes {
        getByName("debug") {
            isMinifyEnabled = true
```

</details>


__
