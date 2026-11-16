# chikuwadon/nicoid-re-patches — 2026-11-16

Commit: b4464c9faa55445c25bd37891b182d1c75eb7f16 | Status: RED | crit:0 high:1 med:9

<details>
<summary>[info] patches/src/main/resources/nicoid/helpers.mpe — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] settings.gradle.kts — new external build URL (supply chain): http://2.0.6.1</summary>

LLM review: unreviewed (per-scan review cap reached)

```
    id("app.morphe.patches") version "2.1.1"
// Apply dependency security upgrades to all project and plugin classpaths,
// not only the settings script and the :patches project. The Gradle graph
// submission resolves extension and tooling configurations independently.
val securityBuildDeps = mapOf(
    "org.bouncycastle:bcprov-jdk18on" to "1.87",
    "org.bouncycastle:bcpkix-jdk18on" to "1.87",
    "org.bouncycastle:bcutil-jdk18on" to "1.87",
    "com.google.guava:guava" to "33.8.0-jre",
    "org.apache.commons:commons-lang3" to "3.22.0",
    "org.apache.httpcomponents:httpclient" to "4.5.14",
    "org.bitbucket.b_c:jose4j" to "0.9.7",
    "org.jdom:jdom2" to "2.0.6.1"
)
gradle.beforeProject {
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible keystroke capture with network exfil: TextWatcher</summary>

```
"p 3&"
"p 4&"
"p 5&"
"p 6&"
"p 7&"
"p 8&"
"p 9&"
"p :&"
"p ;&"
"p <&"
"p =&"
"p >&"
"p ?&"
"p @&"
"p A&"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: shared_prefs,Cookies</summary>

```
"p 3&"
"p 4&"
"p 5&"
"p 6&"
"p 7&"
"p 8&"
"p 9&"
"p :&"
"p ;&"
"p <&"
"p =&"
"p >&"
"p ?&"
"p @&"
"p A&"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"p 3&"
"p 4&"
"p 5&"
"p 6&"
"p 7&"
"p 8&"
"p 9&"
"p :&"
"p ;&"
"p <&"
"p =&"
"p >&"
"p ?&"
"p @&"
"p A&"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] dangerous permission plus network sink in same file</summary>

```
"p 3&"
"p 4&"
"p 5&"
"p 6&"
"p 7&"
"p 8&"
"p 9&"
"p :&"
"p ;&"
"p <&"
"p =&"
"p >&"
"p ?&"
"p @&"
"p A&"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible DNS exfiltration channel: getByName,getAllByName</summary>

```
"p 3&"
"p 4&"
"p 5&"
"p 6&"
"p 7&"
"p 8&"
"p 9&"
"p :&"
"p ;&"
"p <&"
"p =&"
"p >&"
"p ?&"
"p @&"
"p A&"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] reflection-hidden behavior with network sink</summary>

```
"p 3&"
"p 4&"
"p 5&"
"p 6&"
"p 7&"
"p 8&"
"p 9&"
"p :&"
"p ;&"
"p <&"
"p =&"
"p >&"
"p ?&"
"p @&"
"p A&"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
"  IP"
" #nicoid #"
" + URL"
" / vv.isPlaying()"
" / vv.pause();"
" / vv.start();"
" HTTP/1.1"
" [no signature]"
" [signed]"
" bytes="
"& http://flapi.nicovideo.jp/api/getflv/"
" https://nico.ms/"
" mode:"
" orientation:"
"C\"js-initial-watch-data\" data-api-data=\"([^\"]+?)\" data-environment=\""
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"  IP"
" #nicoid #"
" + URL"
" / vv.isPlaying()"
" / vv.pause();"
" / vv.start();"
" HTTP/1.1"
" [no signature]"
" [signed]"
" bytes="
"& http://flapi.nicovideo.jp/api/getflv/"
" https://nico.ms/"
" mode:"
" orientation:"
"C\"js-initial-watch-data\" data-api-data=\"([^\"]+?)\" data-environment=\""
```

</details>


__
