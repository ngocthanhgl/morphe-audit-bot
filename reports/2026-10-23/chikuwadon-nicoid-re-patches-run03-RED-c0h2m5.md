# chikuwadon/nicoid-re-patches — 2026-10-23

Commit: 2c0cd4035f71393f65aca82941849c4ab2c9c6d5 | Status: RED | crit:0 high:2 med:5

<details>
<summary>[high] extensions/extension/src/main/java/e/e/a/PlaybackRequest217.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer request failed; no automatic ban)

```
package e.e.a;

import java.io.*;
import java.net.*;
import java.lang.reflect.*;
import java.nio.charset.StandardCharsets;

/** Keep playback API connections scoped to the request, including failure and redirects. */
public final class PlaybackRequest217 {
    private static final int LIMIT=32*1024*1024;
    private PlaybackRequest217(){}
    private static void validate(URL url)throws IOException {
        String host=url.getHost().toLowerCase(java.util.Locale.ROOT);
        if(!"https".equals(url.getProtocol())||url.getUserInfo()!=null||
            !(host.equals("nicovideo.jp")||host.endsWith(".nicovideo.jp")))
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/e/e/a/PlaybackRequest217.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.82, exfiltration): The validate() method restricts connections to only nicovideo.jp domains, which is a narrow network sink. Combined with reflection usage (line 9) and the static LIMIT constant (line 13), this pattern suggests behavior that could be used to exfiltrate data through a controlled network channel while hiding its origin via domain restriction and reflection-based obfuscation. The code is incomplete in the excerpt so full malicious intent cannot be confirmed, but the combination is suspicious.

```
package e.e.a;

import java.io.*;
import java.net.*;
import java.lang.reflect.*;
import java.nio.charset.StandardCharsets;

/** Keep playback API connections scoped to the request, including failure and redirects. */
public final class PlaybackRequest217 {
    private static final int LIMIT=32*1024*1024;
    private PlaybackRequest217(){}
    private static void validate(URL url)throws IOException {
        String host=url.getHost().toLowerCase(java.util.Locale.ROOT);
        if(!"https".equals(url.getProtocol())||url.getUserInfo()!=null||
            !(host.equals("nicovideo.jp")||host.endsWith(".nicovideo.jp")))
```

</details>

<details>
<summary>[info] patches/src/main/resources/nicoid/helpers.mpe — binary asset added/changed — cannot review textually</summary>

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
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible keystroke capture with network exfil: TextWatcher</summary>

```
"&9)U."
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
" (100%)"
" Response"
" anchor="
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
"&9)U."
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
" (100%)"
" Response"
" anchor="
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"&9)U."
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
" (100%)"
" Response"
" anchor="
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible DNS exfiltration channel: getByName</summary>

```
"&9)U."
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
" (100%)"
" Response"
" anchor="
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] reflection-hidden behavior with network sink</summary>

```
"&9)U."
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
" (100%)"
" Response"
" anchor="
```

</details>


__
