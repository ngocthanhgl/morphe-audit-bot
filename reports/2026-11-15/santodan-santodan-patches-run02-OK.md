# Santodan/santodan-patches — 2026-11-15

Commit: 0348872b6ddf619cda04d8c2615433a514ff6e1a | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] extensions/nuvio-metadata-addon/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
extension { name = "extensions/nuvio-metadata-addon.mpe" }
android { namespace = "software.santodan.extension.nuviometadata" }
dependencies {
    compileOnly(project(":nuvio-contracts"))
    compileOnly("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.2")
}

```

</details>


__
