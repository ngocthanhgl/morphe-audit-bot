# wchill/patcheddit — 2026-10-30

Commit: 747209b1303a41a1591c0fdd905f4cce7e1086cf | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] extensions/relay/build.gradle.kts — new external dependency added — verify coordinates</summary>

LLM review: suspicious (0.5, supply-chain): The patch adds a new external compileOnly dependency `libs.morphe.extensions.library`. The version-catalog coordinates are not visible in this excerpt, so the artifact cannot be verified as legitimate from the diff alone. No runtime malicious behavior (exfiltration, backdoor, spyware) is present in the build file itself, but an unverified external dependency represents a potential supply-chain risk. Per the uncertainty rule, this is classified as suspicious rather than malicious.

```
dependencies {
    compileOnly(libs.morphe.extensions.library)
    compileOnly(project(":extensions:shared:library"))
    compileOnly(project(":extensions:relay:stub"))
    compileOnly(libs.annotation)
    compileOnly(libs.okhttp)
}

```

</details>

<details>
<summary>[info] extensions/relay/stub/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
plugins {
    alias(libs.plugins.android.library)
}

android {
    namespace = "app.morphe.extension"
    compileSdk = 34

    defaultConfig {
        minSdk = 24
    }

    compileOptions {
        isCoreLibraryDesugaringEnabled = true
        sourceCompatibility = JavaVersion.VERSION_17
```

</details>


__
