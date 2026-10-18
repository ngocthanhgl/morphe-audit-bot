# chikuwadon/nicoid-re-patches — 2026-10-18

Commit: 3a91ab4f9ca6f99ab5e0af62108a86bfbdd88fc3 | Status: CRIT | crit:8 high:6 med:1

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
<summary>[info] porting/helpers-v1.9.3.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] possible keystroke capture with network exfil: TextWatcher</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  ID: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments. 
 comments; target 
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  ID: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments. 
 comments; target 
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] sensitive source reaches network sink</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  ID: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments. 
 comments; target 
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] possible DNS exfiltration channel: getByName</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  ID: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments. 
 comments; target 
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] reflection-hidden behavior with network sink</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  ID: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments. 
 comments; target 
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/method-delta.dex — [binary strings] same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
  IP
 #nicoid #
 + URL
 / vv.isPlaying()
 / vv.pause();
 / vv.start();
 HTTP/1.1
 [no signature]
 [signed]
 bytes=
& http://flapi.nicovideo.jp/api/getflv/
 https://nico.ms/
 mode:
 orientation:
C"js-initial-watch-data" data-api-data="([^"]+?)" data-environment="
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/method-delta.dex — [binary strings] sensitive source reaches network sink</summary>

```
  IP
 #nicoid #
 + URL
 / vv.isPlaying()
 / vv.pause();
 / vv.start();
 HTTP/1.1
 [no signature]
 [signed]
 bytes=
& http://flapi.nicovideo.jp/api/getflv/
 https://nico.ms/
 mode:
 orientation:
C"js-initial-watch-data" data-api-data="([^"]+?)" data-environment="
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/helpers.mpe — [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/helpers.mpe (2026-10-15 then 2026-10-18): exfiltration (0.4)</summary>

```
No executable code is visible in the provided excerpt; it appears to be a log/crash dump containing HTTP response headers and client/comment strings that could support a keystroke-capture/exfiltration hypothesis, but there is no confirmed malicious implementation or network call. Static analysis flags this as suspicious rather than malicious.
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/helpers.mpe — [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/helpers.mpe (2026-10-15 then 2026-10-18): exfiltration (0.7)</summary>

```
The excerpt contains HTTP header fragments (e.g., 'client=', 'comments. comments; target ') and cookie-related fields ('ID:', 'at'), indicating possible manipulation of stored cookies or network requests. This aligns with the static analysis flag about same-app stored data/cookies being sent over the network, raising concerns about potential cross‑site data leakage or exfiltration. However, the snippets alone do not reveal executable malicious logic, so the verdict is suspicious rather than mali
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/helpers.mpe — [llm-reviewer xingchen-agi/xing4.0-29b-a4b:free] malicious (0.9, exfiltration): helpers.mpe:10,helpers.mpe:11,helpers.mpe:12,helpers.mpe:13,helpers.mpe:14,helpers.mpe:15,helpers.mpe:16,helpers.mpe:17,helpers.mpe:18,helpers.mpe:19,helpers.mpe:20</summary>

```
The code constructs HTTP response headers (Accept-Ranges, Connection, Content-Length, Content-Type) and includes binary-looking strings such as '(100%)', 'bytes', 'client=', and 'comments. comments; target'. This pattern suggests the code is building a payload that sends sensitive client information and comments to a remote network sink, consistent with data exfiltration. Static analysis flags sensitive source reaching network sink.
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/helpers.mpe — [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/helpers.mpe (2026-10-15 then 2026-10-18): exfiltration (0.72)</summary>

```
The excerpt shows a DNS resolution call (getByName) paired with suspicious tokens such as 'comments.target' and 'client=', which are typical indicators of DNS-based exfiltration rather than legitimate host resolution. Without the full diff, this is insufficient to reach malicious confidence, so it is classified as suspicious.
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/helpers.mpe — [llm-reviewer xingchen-agi/xing4.0-29b-a4b:free] malicious (0.9, exfiltration): patches/src/main/resources/nicoid/helpers.mpe:3,patches/src/main/resources/nicoid/helpers.mpe:4,patches/src/main/resources/nicoid/helpers.mpe:12,patches/src/main/resources/nicoid/helpers.mpe:13,patches/src/main/resources/nicoid/helpers.mpe:14,patches/src/main/resources/nicoid/helpers.mpe:15,patches/src/main/resources/nicoid/helpers.mpe:16</summary>

```
The excerpt contains HTTP response headers and client/response-byte logging strings ('client=', 'Response bytes', 'comments; target'), consistent with a network sink. Combined with reflection-hidden behavior and binary strings, this indicates hidden exfiltration rather than normal functionality.
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/method-delta.dex — [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/method-delta.dex (2026-10-16 then 2026-10-18): exfiltration (0.65)</summary>

```
The code contains regex patterns for extracting sensitive data (js-initial-watch-data, data-api-data, data-environment) from HTML attributes, which could be used for data mining or exfiltration. The lack of signature verification ([no signature]) is a security concern. However, the URLs referenced are legitimate Niconico domains (flapi.nicovideo.jp, nico.ms), suggesting the code may be handling standard web interactions rather than clearly malicious behavior. The combination of data extraction a
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/method-delta.dex — [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/method-delta.dex (2026-10-16 then 2026-10-18): exfiltration (0.72)</summary>

```
The code extracts API data (including potentially sensitive tokens) from niconico HTML via regex on data-api-data attribute, then sends it to external servers (flapi.nicovideo.jp, nico.ms). A hardcoded IP is also present as a network sink. While this may be legitimate scraping functionality for a niconico client, the combination of sensitive source extraction reaching a network sink with no apparent signature verification warrants suspicion. The regex pattern captures API data that could contain
```

</details>


__
