# chikuwadon/nicoid-re-patches — 2026-10-22

Commit: 90617bff3e30f99a7febfaf4a12cc047a428e281 | Status: WARN | crit:0 high:0 med:9

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
<summary>[medium] porting/maintenance196/e/e/a/SeriesMetadata215.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import android.net.Uri;import android.text.Html;import org.json.*;import java.io.*;import java.net.*;import java.util.*;import java.util.regex.*;
/** Series-only V4 metadata. Never changes playback data or access-right keys. */
public final class SeriesMetadata215 {
 static final Pattern META=Pattern.compile("<meta\\b[^>]*\\bname=[\"']server-response[\"'][^>]*\\bcontent=\"([^\"]*)\"",Pattern.CASE_INSENSITIVE);
 static final Map<String,Entry> CACHE=new LinkedHashMap<String,Entry>();
 static final class Entry {final JSONObject data;final long at=android.os.SystemClock.elapsedRealtime();Entry(JSONObject d){data=d;}}
 static final class Expired extends IOException {}
 static JSONObject cached(String id){synchronized(CACHE){Entry e=CACHE.get(id);return e!=null&&android.os.SystemClock.elapsedRealtime()-e.at<60000?e.data:null;}}
 static String transfer(String url,String body,NetworkTask task)throws Exception {
  HttpURLConnection c=(HttpURLConnection)new URL(url).openConnection();if(!task.bind(c))throw new InterruptedIOException();
  try{c.setRequestMethod(body==null?"GET":"POST");c.setConnectTimeout(10000);c.setReadTimeout(10000);c.setInstanceFollowRedirects(false);WatchRequestHeaders.apply(c,url);c.setRequestProperty("User-Agent","Mozilla/5.0");
   c.setRequestProperty("X-Frontend-Id","6");c.setRequestProperty("X-Frontend-Version","0");c.setRequestProperty("X-Request-With","https://www.nicovideo.jp");c.setRequestProperty("Origin","https://www.nicovideo.jp");c.setRequestProperty("Cookie",VideoDetails.cookie());
   if(body!=null){byte[] b=body.getBytes("UTF-8");c.setDoOutput(true);c.setRequestProperty("Content-Type","application/json");c.setFixedLengthStreamingMode(b.length);try(OutputStream out=c.getOutputStream()){out.write(b);}}
   int status=c.getResponseCode();InputStream stream=status>=200&&status<300?c.getInputStream():c.getErrorStream();ByteArrayOutputStream bytes=new ByteArrayOutputStream();
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
" (100%)"
" Response"
" anchor="
" applied="
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
" (100%)"
" Response"
" anchor="
" applied="
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
" (100%)"
" Response"
" anchor="
" applied="
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
" (100%)"
" Response"
" anchor="
" applied="
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
" (100%)"
" Response"
" anchor="
" applied="
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
