# jasonwu1994/Gboard-patches — 2026-10-31

Commit: 54a0eefc8b12e5577d2c9e2c74e6f13a907e57a5 | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] extensions/extension/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
        minSdk = 26

    lint {
        abortOnError = true
        checkReleaseBuilds = false
        checkOnly += "NewApi"
    }
    compileOnly("androidx.annotation:annotation:1.9.1")
tasks.named("syncExtension") {
    dependsOn("lintDebug")
}


```

</details>


__
