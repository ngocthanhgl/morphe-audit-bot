# chikuwadon/nicoid-re-patches — 2026-11-04

Commit: 17e37df5096efa3e23b3db949d530ce6ae81c9fd | Status: WARN | crit:0 high:0 med:9

<details>
<summary>[info] patches/src/main/resources/nicoid/helpers.mpe — binary asset added/changed — cannot review textually</summary>

LLM review: suspicious (0.6, supply-chain): Binary asset added/changed with no textual diff to audit; opaque .mpe payload in patch resources cannot be verified and presents supply-chain risk, but no specific malicious behavior is observable to justify a malicious verdict.

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
<summary>[medium] porting/revisions/v1.10.1/pom.xml — new non-allowlisted URL or IP</summary>

```
<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>
  <groupId>app.nicoid</groupId>
  <artifactId>release-payload-tools</artifactId>
  <version>1.10.1</version>
  <dependencies>
    <dependency><groupId>org.smali</groupId><artifactId>smali</artifactId><version>2.5.2</version></dependency>
    <dependency><groupId>org.smali</groupId><artifactId>baksmali</artifactId><version>2.5.2</version></dependency>
  </dependencies>
</project>

```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible keystroke capture with network exfil: TextWatcher</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (#RRGGBB)"
" (100%)"
" (API "
" / 100"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (#RRGGBB)"
" (100%)"
" (API "
" / 100"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (#RRGGBB)"
" (100%)"
" (API "
" / 100"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible DNS exfiltration channel: getByName</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (#RRGGBB)"
" (100%)"
" (API "
" / 100"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] reflection-hidden behavior with network sink</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (#RRGGBB)"
" (100%)"
" (API "
" / 100"
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
