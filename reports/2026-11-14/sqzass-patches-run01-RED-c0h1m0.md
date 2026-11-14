# sqzass/patches — 2026-11-14

Commit: ce8d598868761f168affb484d93934e60294a651 | Status: RED | crit:0 high:1 med:0

<details>
<summary>[info] patches-bundle.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

        name = "Lustx Patches"
        description = "Lustx Patches, by sqzass"
        source = "git@github.com:sqzass/lustx-patches.git"
        contact = "333@qrypty.com"
        website = "https://github.com/sqzass/lustx-patches"
        license = "GNU General Public License v3.0, with additional GPL section 7 requirements"
// Resolve local composite build projects (smali, patcher) to jars for compilation,
// same as the runtime classpath. Otherwise, both the classes directory and the jar
// are passed to D8 by buildAndroid, and it fails with "Classpath type already present".
configurations.compileClasspath {
    attributes {
        attribute(LibraryElements.LIBRARY_ELEMENTS_ATTRIBUTE, objects.named(LibraryElements.JAR))
    }
```

</details>

<details>
<summary>[high] settings.gradle.kts — new external build URL (supply chain): https://jitpack.io</summary>

LLM review: suspicious (0.62, supply-chain): The patch introduces a new remote Maven repository (https://jitpack.io) into the build's repository list. JitPack resolves and builds arbitrary Git tags/commits on demand, so artifacts fetched from it are not pinned, reproducible, or signed by a trusted registry; this widens the build's trust boundary and is a recognized supply-chain injection vector (a compromised upstream repo or a re-pointed tag yields code execution in the build). However, JitPack is also extremely common in legitimate Android projects, and the excerpt alone shows no accompanying suspicious dependency coordinates, no obfuscated/eval-style logic, no network exfiltration, and no credential misuse — the GitHubPackages credentials block is standard for private Maven registries. Because the change is a trust-boundary expansion without clear malicious intent or a concrete malicious artifact, this is suspicious rather than malicious. Recommend verifying: which dependencies resolve from jitpack, whether versions are pinned to commit hashes, and whether jitpack is actually needed.

```
rootProject.name = "inepts-patches"

pluginManagement {
    repositories {
        mavenLocal()
        gradlePluginPortal()
        google()
        maven {
            name = "GitHubPackages"
            url = uri("https://maven.pkg.github.com/MorpheApp/registry")
            credentials {
                username = providers.gradleProperty("gpr.user").getOrElse(System.getenv("GITHUB_ACTOR"))
                password = providers.gradleProperty("gpr.key").getOrElse(System.getenv("GITHUB_TOKEN"))
            }
        }
```

</details>


__
