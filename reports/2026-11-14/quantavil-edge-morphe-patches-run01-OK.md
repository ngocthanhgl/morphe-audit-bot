# quantavil/edge-morphe-patches — 2026-11-14

Commit: 2478c9c41a9dc84f3544934213e03eb818681e7b | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates [llm: benign 0.85 — no ban]</summary>

LLM review: benign (0.85, benign-other): The change is a standard Gradle build-script pattern. `compileOnly(libs.gson)` adds Gson only at compile time and does not package it into the APK, which matches the stated intent. A dedicated `patchListGeneratorClasspath` configuration is created and used solely to assemble the classpath of a build-time task (`generatePatchesList`); a custom configuration is not wired into the app runtime and cannot leak into the APK. `libs.gson` is a conventional version-catalog alias for Google's Gson, with no obfuscated coordinates, unusual repository, or suspicious version visible. No network, file I/O, or data-handling behavior is introduced. The comment is a normal technical note and contains no instruction directed at the reviewer. No malicious or supply-chain behavior is evident.

```
// Separate configuration so gson is available at runtime for the
// generatePatchesList task but never bundled into the APK.
val patchListGeneratorClasspath = configurations.create("patchListGeneratorClasspath")

    compileOnly(libs.gson)
    patchListGeneratorClasspath(libs.gson)
        classpath = sourceSets["main"].runtimeClasspath + patchListGeneratorClasspath

```

</details>


__
