# JacksonJones2003/immersive-keyboard-patches — 2026-10-31

Commit: 544496bf35d0d24c3464e6a1d19bc9ae9f845744 | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] extensions/extension/build.gradle.kts — new external dependency added — verify coordinates [llm: benign 0.9 — no ban]</summary>

LLM review: benign (0.9, benign-other): The patch adds two Shizuku dependencies (dev.rikka.shizuku:api:13.1.5 and dev.rikka.shizuku:provider:13.1.5) to an Android Gradle module. Shizuku is a known open-source framework for adb/root-assisted privileged API access. No exfiltration, backdoor, spyware, or malicious code behavior is present in the excerpt. The dependency coordinates appear legitimate and match the official Shizuku group ID; no typosquatting or suspicious redirects are evident. Classified as benign-other (dependency addition only).

```

    defaultConfig {
        // Shizuku's minimum. Gboard itself needs a much newer Android than this.
        minSdk = 24
    }
}

dependencies {
    implementation("dev.rikka.shizuku:api:13.1.5")
    implementation("dev.rikka.shizuku:provider:13.1.5")

```

</details>


__
