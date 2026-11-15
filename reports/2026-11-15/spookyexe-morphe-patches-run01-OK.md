# spookyexe/morphe-patches — 2026-11-15

Commit: 78b7358cf4b63b37f5fe45bee91540265d177032 | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] extensions/extension/build.gradle.kts — new external dependency added — verify coordinates [llm: benign 0.85 — no ban]</summary>

LLM review: benign (0.85, benign-other): The diff adds a single dependency: org.lsposed.hiddenapibypass:hiddenapibypass:4.3. These coordinates match the official, open-source HiddenApiBypass library published by the LSPosed project (used to relax Android's hidden-API restriction checks), and version 4.3 is a real published release. The repository (morphe-patches) is an Android patching/modular project where such a dependency is contextually expected. No prompt-injection text, no obfuscated strings, no network/exfiltration calls, and no behavioral changes appear in the excerpt — only a standard Gradle dependency declaration. Coordinates verified as legitimate; no malicious behavior identifiable from this diff.

```
    lint {
            abortOnError = false
            checkReleaseBuilds = false
    }
}

dependencies {
    implementation("org.lsposed.hiddenapibypass:hiddenapibypass:4.3")

```

</details>


__
