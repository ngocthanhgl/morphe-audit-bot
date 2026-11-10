# chikuwadon/nicoid-re-patches — 2026-11-10

Commit: dc19a9c75848d7edd8d04060b9d045d107f1093a | Status: RED | crit:0 high:45 med:83

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
<summary>[medium] porting/revisions/v1.11.1-dev.1/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.1/java/e/e/a/Dev116.java — sensitive source reaches network sink [llm: benign 0.97 — no ban]</summary>

LLM review: benign (0.97, benign-other): The excerpt shows only standard Android import statements (Activity, Context, SharedPreferences, Uri, Handler, Looper, Preference classes, DocumentsContract, Gravity, Menu, MenuItem, View). No network-sending logic, external URLs, or suspicious code is present in the shown portion. The mentioned 'static-analysis reason' about a sensitive source reaching a network sink describes a potential concern but does not provide concrete malicious code here; without further inspection it appears to be a false alarm or unrelated commentary. Hence the file itself is benign.

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
<summary>[high] porting/revisions/v1.11.1-dev.1/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.82, backdoor): The file begins with imports from android.preference.* and android.app.Activity along with DocumentsContract and Gravity, indicating handling of shared preferences and document uploads. The comment in the diff explicitly flags 'reflection-hidden behavior with network sink'. Using reflection to hide a network callback that forwards data to an external server is a common technique for creating a hidden backdoor or data exfiltration channel. Such hidden network sinks are typically used to capture outbound traffic without the application's awareness, fitting the definition of a backdoor. While the visible code does not show the reflection usage directly, the combination of imports and the stated static-analysis reason strongly suggests an intentional covert network communication mechanism.

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
<summary>[high] porting/revisions/v1.11.1-dev.1/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, backdoor): The file imports java.lang.reflect.Field and java.lang.reflect.Method alongside standard Android and JSON packages. Using reflection to discover or invoke hidden fields/methods can enable the code to intercept or send data through a network sink without following normal API paths. Combined with ListView, InputStream, and XML parsing, this pattern indicates an attempt to establish a covert communication channel—i.e., a backdoor. While reflection is sometimes legitimate for introspection, the context here strongly suggests hidden behavior for exfiltration or unauthorized network interaction.

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
<summary>[medium] porting/revisions/v1.11.1-dev.1/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.1/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.1/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.1/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.10/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.10/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.7, exfiltration): The file starts with a large block of Android networking and preference imports (android.net.Uri, DocumentsContract, SharedPreferences, Preference*, etc.) which are typically used for interacting with external services or persisting user data. The static-analysis annotation 'sensitive source reaches network sink' flags the possibility that sensitive data is being read or written to a remote destination. While the visible imports alone do not prove active exfiltration, their presence together with the warning indicates a latent risk of transmitting private information. Without examining the method bodies, we cannot confirm malicious intent, so the situation remains uncertain—hence classified as suspicious rather than confirmed malicious.

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
<summary>[high] porting/revisions/v1.11.1-dev.10/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.65, exfiltration): The diff excerpt does not include the implementation, but the static-analysis flag reports reflection-hidden behavior with a network sink. This pattern can suggest hidden network activity or data transmission, but without the actual reflection and network code the behavior cannot be confirmed as malicious.

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
<summary>[high] porting/revisions/v1.11.1-dev.10/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.6, exfiltration): The excerpt shows reflection-related imports, including java.lang.reflect.Field and java.lang.reflect.Method, and the static-analysis reason mentions reflection-hidden behavior with a network sink. This is concerning, but the provided diff excerpt does not include the actual reflective logic or network sink implementation, so the behavior cannot be fully confirmed as malicious. The uncertainty warrants a suspicious verdict.

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
<summary>[medium] porting/revisions/v1.11.1-dev.10/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.10/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.10/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.10/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.11/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.11/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.78, exfiltration): The file begins with standard Android imports including android.net.Uri and android.provider.DocumentsContract, which are typically used for URI handling and document contracts that may involve network access. The static-analysis annotation notes 'sensitive source reaches network sink', hinting at potential leakage of sensitive data via a network endpoint. While the visible portion only lists imports and does not show concrete network calls, the combination of relevant imports and the stated analysis reason raises concern about unintended outbound communication of sensitive information. Without additional code inspection, we cannot definitively confirm malicious behavior, so the risk remains suspicious.

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
<summary>[high] porting/revisions/v1.11.1-dev.11/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.65, backdoor): The excerpt lists imports for Activity, Context, SharedPreferences, Uri, Handler, Looper, Preference classes, DocumentsContract, Gravity, Menu, MenuItem, and View. Together these suggest network (Uri, Handler, Looper) and preference handling capabilities. The static-analysis reason cites 'reflection-hidden behavior with network sink', which commonly describes a technique where reflection is used to hide a network sink—i.e., a backdoor channel. Although the provided snippet does not display the actual reflection invocations or the network request logic, the combination of imports and the reported hidden network behavior raises concern about undisclosed remote communication. Therefore the risk appears suspicious but lacks definitive proof, resulting in moderate confidence.

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
<summary>[high] porting/revisions/v1.11.1-dev.11/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.78, backdoor): The file imports java.lang.reflect.Field, java.lang.reflect.Method, and java.lang.ref.WeakReference. Using reflection to dynamically invoke network-sink methods without proper authorization is a classic technique for hiding a backdoor or intercepting network traffic. While reflection is a legitimate feature, its presence together with WeakReference strongly suggests an intent to create a stealthy channel for unauthorized actions, making the behavior suspicious rather than benign.

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
<summary>[medium] porting/revisions/v1.11.1-dev.11/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.11/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.11/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.11/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.12/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.12/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.12/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.12/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.12/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.12/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.12/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.12/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.13/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.13/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.13/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.13/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.13/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.13/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.13/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.13/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.14/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.14/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.14/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.14/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.14/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.14/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.14/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.14/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.2/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.2/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.2/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.2/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.2/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.2/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.2/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.2/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.3/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.3/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.3/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.3/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.3/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.3/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.3/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.3/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.4/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.4/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.4/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.4/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.4/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.4/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.4/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.4/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.5/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.5/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.5/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.5/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.5/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.5/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.5/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.5/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.6/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.6/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.6/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.6/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.6/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.6/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.6/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.6/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.7/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.7/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.7/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.7/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.7/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.7/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.7/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.7/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.8/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.8/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.8/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.8/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.8/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.8/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.8/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.8/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.9/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.9/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.9/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1-dev.9/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.9/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1-dev.9/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.9/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1-dev.9/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.1/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.1/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.1/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.11.1/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.1/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

/**
 * Restore the canonical account watch-history endpoint when a tab was saved
 * from an Activity without an Intent data URI. This is deliberately limited
 * to the account-history type: other list URLs must never be rewritten.
 */
public final class TabHistory127 {
    public static final String ACCOUNT_HISTORY =
            "https://nvapi.nicovideo.jp/v2/users/me/watch/history?selectContentType=long&limit=100";

    private TabHistory127() { }

    public static String url(int type, String savedUrl) {
        if (type == 4 && (savedUrl == null || savedUrl.trim().isEmpty()))
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
"\\X4K"
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"\\X4K"
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
```

</details>


__
