# chikuwadon/nicoid-re-patches — 2026-11-08

Commit: 4b3a1aaa5d725395464a7bdefc5fda827880fe8a | Status: RED | crit:0 high:18 med:26

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
<summary>[medium] porting/revisions/v1.10.5-dev.1/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.text.InputType;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.1/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.65, exfiltration): The file begins with several imports including android.net.Uri, android.os.Handler, Looper, and android.preference.*. These are typically associated with network operations and preference handling. The static-analysis reason cited ('sensitive source reaches network sink') suggests the code may expose sensitive data by sending it through a network sink. While the displayed snippet only lists imports, the combination of network-related imports and the reported risk points to a potential unintended outbound communication channel that could leak private information. Without examining the method implementations, it remains unclear whether such a sink is actually used, making the behavior uncertain but warranting caution.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.1/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, backdoor): The file starts with package e.e.a and imports android.preference.*, android.provider.DocumentsContract, android.os.Handler, and Looper. These imports are typically used for custom preference handling and document processing, and together with a comment mentioning 'reflection-hidden behavior with network sink' suggest an attempt to hide network traffic via reflection. Such patterns are common in backdoors rather than ordinary utility code. Lacking visibility into the method implementations, the risk remains unverified, so the assessment is classified as suspicious rather than definitively malicious.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.1/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.65, backdoor): The file imports java.lang.reflect.Field and Method, giving access to dynamic method inspection. The static-analysis annotation explicitly mentions 'reflection-hidden behavior with network sink', indicating that the new code uses reflection to conceal a network-related action—typical of a backdoor that intercepts or sends data without the caller knowing. Although the surrounding logic is not fully visible, the combination of reflection imports and the reported hidden network sink raises a strong suspicion of an undisclosed backdoor rather than benign functionality.

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.widget.ListView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.xmlpull.v1.XmlPullParser;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.1/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.net.URI;
import java.util.Locale;
import java.util.regex.Pattern;

/** Strictly parse NicoNico URLs pasted from a browser; never dereference their host. */
public final class PlaylistUrlParser {
    private static final Pattern VIDEO = Pattern.compile("(?:sm|nm|so|ss)?[0-9]+");
    private PlaylistUrlParser() {}

    public static String videoId(String supplied) {
        if (supplied == null) return null;
        String value = supplied.trim();
        if (VIDEO.matcher(value).matches()) return value;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.1/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

/** Limit posting to the known current endpoint and emit credential-free diagnostics. */
public final class PostingPolicy122 {
    public static final String POST_SERVER = "https://public.nvcomment.nicovideo.jp";
    private PostingPolicy122() { }

    public static String postServer(String supplied) throws IOException {
        if (supplied == null || supplied.length() == 0) return POST_SERVER;
        if (!supplied.matches("https://(?:(?:public\\.)?nvcomment|nv-comment)\\.nicovideo\\.jp/?"))
            throw new IOException("Unsupported comment server");
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.2/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.text.InputType;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.2/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.7, exfiltration): The file is flagged for a 'sensitive source reaching a network sink'. While the visible imports (Uri, Handler, Looper, Preference, etc.) appear standard, the presence of android.net.Uri and the static-analysis warning suggests potential outbound data transmission. The excerpt does not show explicit network client code, but the combination of sensitive imports and the network-sink concern raises suspicion that the file may initiate a network request or otherwise leak data. Further review is required to confirm malicious intent.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.2/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.2/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.82, backdoor): The file imports java.lang.reflect.Field and java.lang.reflect.Method along with network-related packages. Reflection allows dynamic access to private members, which could be leveraged to hide or manipulate network-sink behavior—potentially creating a backdoor that intercepts or alters network traffic. While reflection alone is not inherently malicious, its inclusion in a code change focused on network components raises concerns about covert communication channels. Absent explicit confirmation of malicious actions, the presence of these imports makes the change suspicious.

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.widget.ListView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.xmlpull.v1.XmlPullParser;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.2/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.net.URI;
import java.util.Locale;
import java.util.regex.Pattern;

/** Strictly parse NicoNico URLs pasted from a browser; never dereference their host. */
public final class PlaylistUrlParser {
    private static final Pattern VIDEO = Pattern.compile("(?:sm|nm|so|ss)?[0-9]+");
    private PlaylistUrlParser() {}

    public static String videoId(String supplied) {
        if (supplied == null) return null;
        String value = supplied.trim();
        if (VIDEO.matcher(value).matches()) return value;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.2/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

/** Limit posting to the known current endpoint and emit credential-free diagnostics. */
public final class PostingPolicy122 {
    public static final String POST_SERVER = "https://public.nvcomment.nicovideo.jp";
    private PostingPolicy122() { }

    public static String postServer(String supplied) throws IOException {
        if (supplied == null || supplied.length() == 0) return POST_SERVER;
        if (!supplied.matches("https://(?:(?:public\\.)?nvcomment|nv-comment)\\.nicovideo\\.jp/?"))
            throw new IOException("Unsupported comment server");
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.3/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.text.InputType;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.3/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.6, benign-other): The excerpt shows imports including android.net.Uri, android.os.Handler, android.os.Looper, android.preference.* and android.provider.DocumentsContract. These are typically involved in network operations and document uploads, which could represent a path where sensitive data is sent to an external endpoint. However, without seeing the method bodies or how these imports are used, there is no definitive evidence of malicious activity such as exfiltration or backdoors. The presence of network-related classes raises a suspicion of unintended outbound communication, so the finding is marked as suspicious rather than confirmed malicious.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.3/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.6, backdoor): The file imports extensive Android networking and preference APIs, yet the static‑analysis reason cites 'reflection‑hidden behavior with network sink'. In the displayed portion there is no obvious reflection or outbound HTTP/S calls, suggesting a hidden mechanism that intercepts or forwards data. Such a pattern aligns with a backdoor that silently creates a network channel for data exfiltration. Absent clear safety guards, the risk remains non‑trivial, so the code warrants further inspection before merging.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.3/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.65, backdoor): The file imports java.lang.reflect.Field and java.lang.reflect.Method along with xml parsing utilities, indicating the use of reflection to access hidden internal members. The accompanying comment references a 'network sink' and hidden behavior, which is a common technique for establishing a backdoor that silently intercepts or injects network traffic. Although no explicit malicious commands are present, the combination of reflection-based access and network involvement raises significant suspicion of a covert backdoor rather than benign functionality.

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.widget.ListView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.xmlpull.v1.XmlPullParser;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.3/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.net.URI;
import java.util.Locale;
import java.util.regex.Pattern;

/** Strictly parse NicoNico URLs pasted from a browser; never dereference their host. */
public final class PlaylistUrlParser {
    private static final Pattern VIDEO = Pattern.compile("(?:sm|nm|so|ss)?[0-9]+");
    private PlaylistUrlParser() {}

    public static String videoId(String supplied) {
        if (supplied == null) return null;
        String value = supplied.trim();
        if (VIDEO.matcher(value).matches()) return value;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.3/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

/** Limit posting to the known current endpoint and emit credential-free diagnostics. */
public final class PostingPolicy122 {
    public static final String POST_SERVER = "https://public.nvcomment.nicovideo.jp";
    private PostingPolicy122() { }

    public static String postServer(String supplied) throws IOException {
        if (supplied == null || supplied.length() == 0) return POST_SERVER;
        if (!supplied.matches("https://(?:(?:public\\.)?nvcomment|nv-comment)\\.nicovideo\\.jp/?"))
            throw new IOException("Unsupported comment server");
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.4/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.text.InputType;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.4/java/e/e/a/Dev116.java — sensitive source reaches network sink [llm: benign 0.95 — no ban]</summary>

LLM review: benign (0.95, benign-other): The extracted portion of Dev116.java consists solely of standard Android imports (Activity, Context, SharedPreferences, Uri, Handler, Looper, Preference classes, DocumentsContract, Gravity, Menu, MenuItem, View). No code is present that initiates outbound network calls or handles sensitive data transmission beyond typical UI/document handling. The cited static-analysis reason ('sensitive source reaches network sink') describes a legitimate data flow rather than an attack vector. Therefore, the file appears benign.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.4/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.78, backdoor): The file begins with imports for Context, SharedPreferences, Uri, Handler, Looper, Preference-related classes, DocumentsContract, Gravity, Menu, and View. These are typically used for local UI and preference handling, but combined with the static-analysis note "reflection-hidden behavior with network sink" it suggests the implementation employs reflection to conceal network activity. Using reflection to create a hidden network sink is a known technique for establishing a backdoor or covert data exfiltration channel. Although the visible imports are benign, the described hidden behavior raises concerns about undisclosed network communication intended to steal or transmit data.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.4/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.78, backdoor): The file imports java.lang.reflect.Field and java.lang.reflect.Method together with java.lang.ref.WeakReference, indicating the use of reflection to access private or hidden members. The accompanying comment mentions 'reflection-hidden behavior with network sink', suggesting an attempt to conceal a network communication channel via reflection—a classic technique for a backdoor or hidden telemetry sink. While not definitively malicious, the pattern raises concerns about undisclosed network interception.

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.widget.ListView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.xmlpull.v1.XmlPullParser;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.4/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.net.URI;
import java.util.Locale;
import java.util.regex.Pattern;

/** Strictly parse NicoNico URLs pasted from a browser; never dereference their host. */
public final class PlaylistUrlParser {
    private static final Pattern VIDEO = Pattern.compile("(?:sm|nm|so|ss)?[0-9]+");
    private PlaylistUrlParser() {}

    public static String videoId(String supplied) {
        if (supplied == null) return null;
        String value = supplied.trim();
        if (VIDEO.matcher(value).matches()) return value;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.4/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

/** Limit posting to the known current endpoint and emit credential-free diagnostics. */
public final class PostingPolicy122 {
    public static final String POST_SERVER = "https://public.nvcomment.nicovideo.jp";
    private PostingPolicy122() { }

    public static String postServer(String supplied) throws IOException {
        if (supplied == null || supplied.length() == 0) return POST_SERVER;
        if (!supplied.matches("https://(?:(?:public\\.)?nvcomment|nv-comment)\\.nicovideo\\.jp/?"))
            throw new IOException("Unsupported comment server");
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.5/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.text.InputType;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.5/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.5/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5-dev.5/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.widget.ListView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.xmlpull.v1.XmlPullParser;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.5/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.net.URI;
import java.util.Locale;
import java.util.regex.Pattern;

/** Strictly parse NicoNico URLs pasted from a browser; never dereference their host. */
public final class PlaylistUrlParser {
    private static final Pattern VIDEO = Pattern.compile("(?:sm|nm|so|ss)?[0-9]+");
    private PlaylistUrlParser() {}

    public static String videoId(String supplied) {
        if (supplied == null) return null;
        String value = supplied.trim();
        if (VIDEO.matcher(value).matches()) return value;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5-dev.5/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

/** Limit posting to the known current endpoint and emit credential-free diagnostics. */
public final class PostingPolicy122 {
    public static final String POST_SERVER = "https://public.nvcomment.nicovideo.jp";
    private PostingPolicy122() { }

    public static String postServer(String supplied) throws IOException {
        if (supplied == null || supplied.length() == 0) return POST_SERVER;
        if (!supplied.matches("https://(?:(?:public\\.)?nvcomment|nv-comment)\\.nicovideo\\.jp/?"))
            throw new IOException("Unsupported comment server");
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.text.InputType;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.5/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.widget.ListView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.xmlpull.v1.XmlPullParser;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.net.URI;
import java.util.Locale;
import java.util.regex.Pattern;

/** Strictly parse NicoNico URLs pasted from a browser; never dereference their host. */
public final class PlaylistUrlParser {
    private static final Pattern VIDEO = Pattern.compile("(?:sm|nm|so|ss)?[0-9]+");
    private PlaylistUrlParser() {}

    public static String videoId(String supplied) {
        if (supplied == null) return null;
        String value = supplied.trim();
        if (VIDEO.matcher(value).matches()) return value;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.5/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

/** Limit posting to the known current endpoint and emit credential-free diagnostics. */
public final class PostingPolicy122 {
    public static final String POST_SERVER = "https://public.nvcomment.nicovideo.jp";
    private PostingPolicy122() { }

    public static String postServer(String supplied) throws IOException {
        if (supplied == null || supplied.length() == 0) return POST_SERVER;
        if (!supplied.matches("https://(?:(?:public\\.)?nvcomment|nv-comment)\\.nicovideo\\.jp/?"))
            throw new IOException("Unsupported comment server");
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible keystroke capture with network exfil: TextWatcher</summary>

```
"Last Java crash (retained across restart):"
"Largest files (only parent category, type, size):"
"Total scanned: "
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: shared_prefs,Cookies</summary>

```
"Last Java crash (retained across restart):"
"Largest files (only parent category, type, size):"
"Total scanned: "
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"Last Java crash (retained across restart):"
"Largest files (only parent category, type, size):"
"Total scanned: "
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible DNS exfiltration channel: getByName</summary>

```
"Last Java crash (retained across restart):"
"Largest files (only parent category, type, size):"
"Total scanned: "
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] reflection-hidden behavior with network sink</summary>

```
"Last Java crash (retained across restart):"
"Largest files (only parent category, type, size):"
"Total scanned: "
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
