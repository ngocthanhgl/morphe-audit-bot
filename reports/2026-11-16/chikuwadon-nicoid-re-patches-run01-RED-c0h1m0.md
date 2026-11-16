# chikuwadon/nicoid-re-patches — 2026-11-16

Commit: 21d771c1b48b1ca261fddee7f13ed3fe8d4d4a26 | Status: RED | crit:0 high:1 med:0

<details>
<summary>[high] settings.gradle.kts — new external build URL (supply chain): http://2.0.6.1 [llm: benign 0.9 — no ban]</summary>

LLM review: benign (0.9, benign-other): The static-analysis trigger 'http://2.0.6.1' is a false positive: the token '2.0.6.1' is the version component of the Maven coordinate org.jdom:jdom2:2.0.6.1, not a URL. No scheme, host, or network fetch appears anywhere in the excerpt; all entries are standard Maven coordinates inside a buildscript dependency constraints block. The surrounding comments describe legitimate dependency-alignment/version-pinning intent (Bouncy Castle, Guava, commons-lang3, httpclient, jose4j, jdom2), and jdom2 2.0.6.1 is a real published release. No prompt-injection text or behavioral redirection is present in the diff; comments are consistent with the code's actual effect (constraining transitive buildscript versions rather than adding new APIs).

```
        // Latest stable Android Gradle plugin compatible with Gradle 9.9.1.
        classpath("com.android.tools.build:gradle:9.5.1")

        // Security updates for AGP / Morphe buildscript transitive dependencies.
        // Constrain resolved versions instead of adding unused buildscript APIs.
        // Keep Bouncy Castle provider, PKIX and utility modules aligned.
        constraints {
            classpath("org.bouncycastle:bcprov-jdk18on:1.87")
            classpath("org.bouncycastle:bcpkix-jdk18on:1.87")
            classpath("org.bouncycastle:bcutil-jdk18on:1.87")
            classpath("com.google.guava:guava:33.8.0-jre")
            classpath("org.apache.commons:commons-lang3:3.22.0")
            classpath("org.apache.httpcomponents:httpclient:4.5.14")
            classpath("org.bitbucket.b_c:jose4j:0.9.7")
            classpath("org.jdom:jdom2:2.0.6.1")
```

</details>


__
