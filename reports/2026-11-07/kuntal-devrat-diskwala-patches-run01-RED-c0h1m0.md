# kuntal-devrat/diskwala-patches — 2026-11-07

Commit: 133d55f099e3561ec7165f280f0b0f9f884752bf | Status: RED | crit:0 high:1 med:0

<details>
<summary>[high] settings.gradle.kts — new external build URL (supply chain): https://jitpack.io</summary>

LLM review: suspicious (0.6, supply-chain): Excerpt adds two new external Maven repositories, a raw.githubusercontent.com mirror and jitpack.io, and removes an authenticated registry. This expands supply-chain trust to unverified third-party artifact sources, but the excerpt shows no exfiltration, backdoor, or spyware code, so malicious is not established.

```
dependencyResolutionManagement {
    repositories {
        // Mirror of the Morphe registry artifacts, auth-free via raw.githubusercontent.
        maven { url = uri("https://raw.githubusercontent.com/kuntal-devrat/registry/main") }
        mavenLocal()
        mavenCentral()
        google()
        maven { url = uri("https://jitpack.io") }
    }
}

// The Morphe plugin adds GitHub Packages as an authenticated registry. Public
// raw.githubusercontent mirror above serves the same artifacts without
// credentials, so remove the authenticated repository to avoid 401 failures.
gradle.settingsEvaluated {
```

</details>


__
