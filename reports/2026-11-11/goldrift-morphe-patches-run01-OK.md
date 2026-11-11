# GoldRift/morphe-patches — 2026-11-11

Commit: 16f0959f17abe8660754c9feb45239268a63178a | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates [llm: benign 0.78 — no ban]</summary>

LLM review: benign (0.78, benign-other): The snippet defines a classpath variable and implements 'libs.morphe.patches.library', which adds Morphe's shared patches to the project. This is a standard dependency declaration for applying patches. No external network requests, no obfuscation, and no commands to ignore prior instructions appear. The remark about verifying coordinates is a static-analysis note, not a directive altering behavior. Hence the change appears benign.

```
val patchListGeneratorClasspath = configurations.create("patchListGeneratorClasspath")

    // Morphe's shared patches, bundled into this .mpp (extension DEX included).
    implementation(libs.morphe.patches.library)
}

```

</details>


__
