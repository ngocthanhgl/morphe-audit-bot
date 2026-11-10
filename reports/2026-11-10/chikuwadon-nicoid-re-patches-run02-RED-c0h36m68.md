# chikuwadon/nicoid-re-patches — 2026-11-10

Commit: 491c6b9f501cb97057495f9b619fca522332f11f | Status: RED | crit:0 high:36 med:68

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
<summary>[medium] porting/revisions/v1.10.7-dev.10/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.10/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.6, exfiltration): The file imports several network‑related classes (android.net.Uri, android.os.Handler, android.os.Looper) together with shared‑preferences and preference utilities, and references android.provider.DocumentsContract, which can expose data to other apps over the network. Although the shown snippet does not display an explicit outbound HTTP call, the combination of sensitive storage components and document contracts raises the possibility that the code intends to send or retrieve sensitive information to a remote sink. Without concrete evidence of a network request, the behavior remains unverified, leading to a cautious 'suspicious' classification.

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
<summary>[high] porting/revisions/v1.10.7-dev.10/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.55, backdoor): The excerpt shows imports for Activity, Context, SharedPreferences, Uri, Handler, Looper, Preference classes, DocumentsContract, Gravity, Menu, MenuItem, View. While these are common Android APIs, the combination with 'reflection-hidden behavior' and 'network sink' suggests the file may use reflection to intercept network calls and send data elsewhere. No visible malicious logic is shown, but the naming convention (Dev116) and the imported networking/threading utilities raise concerns about hidden backdoors. Confidence is moderate because the full source was not provided to confirm actual reflective interception.

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
<summary>[high] porting/revisions/v1.10.7-dev.10/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.7, backdoor): The file imports java.lang.reflect.Field and java.lang.reflect.Method together with network-related classes such as ListView, Handler, Looper, and JsonParsers. These imports indicate the use of reflection to dynamically invoke internal methods, which can be employed to hide or tamper with network sink behavior—an indicator of a backdoor or stealthy spy component rather than normal refactoring.

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
<summary>[medium] porting/revisions/v1.10.7-dev.10/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.10/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.10/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.10/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.11/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.11/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.55, exfiltration): The file starts with imports such as android.net.Uri, android.os.Handler, Looper, Preference-related classes, and DocumentsContract, which are commonly used for network document retrieval or URI-based requests. The static-analysis annotation notes 'sensitive source reaches network sink', indicating that sensitive data intended to originate from a trusted source may be transmitted to an external network endpoint. Although the visible code does not show the exact method calls, these imports together with the stated purpose suggest a possible unintended exfiltration channel. Hence the risk is suspicious rather than definitively benign or malicious.

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
<summary>[high] porting/revisions/v1.10.7-dev.11/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.7, backdoor): The file imports Android networking (Uri, Handler, Looper), preferences, and view components. The static-analysis note explicitly mentions 'reflection-hidden behavior with network sink', suggesting the code uses reflection to conceal its actions and includes a network sink—patterns commonly associated with a covert backdoor or spyware that intercepts or manipulates network traffic. While the listed imports alone are benign, the described hidden behavior points toward undisclosed network activity.

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
<summary>[high] porting/revisions/v1.10.7-dev.11/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.78, backdoor): The file imports java.lang.reflect.Field and java.lang.reflect.Method together with java.lang.ref.WeakReference. These imports indicate the use of reflection to dynamically locate and invoke hidden fields or methods, a technique frequently employed to create a hidden backdoor or intercept network traffic behind normal application flow. Although the surrounding code is not displayed here, the presence of such reflective introspection strongly suggests an attempt to hide a network sink or other covert behavior, making the change suspicious rather than benign. Without explicit confirmation of the reflection invocations, the risk remains elevated but not definitively malicious.

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
<summary>[medium] porting/revisions/v1.10.7-dev.11/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.11/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.11/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.11/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.12/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.12/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.65, exfiltration): The diff adds imports for android.net.Uri and android.os.Handler, which are typically used to construct and send URIs or perform network requests. The static‑analysis comment flags 'sensitive source reaches network sink', indicating that the patched code intends to route private data through these network‑related APIs. Although the visible snippet does not show the actual request logic, the combination of network‑oriented imports and the reported risk points toward a potential data‑exfiltration vector rather than benign development.

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
<summary>[high] porting/revisions/v1.10.7-dev.12/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.6, backdoor): The file's summary mentions 'reflection-hidden behavior with network sink' and imports such as android.net.Uri and PreferenceManager, indicating a possible hidden network call executed through reflection. While the displayed imports alone don't reveal explicit network logic, the combination of reflection and a network URI strongly suggests a stealthy backdoor that silently forwards data over the network. Without seeing the implementation details, the risk remains elevated.

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
<summary>[high] porting/revisions/v1.10.7-dev.12/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, backdoor): The file imports java.lang.reflect.Field, java.lang.reflect.Method, WeakReference, and InputStream. These are commonly used to dynamically invoke internal classes or intercept network traffic, effectively hiding a network sink behind reflection. Such practices are typical of backdoors or covert channels designed to exfiltrate data or persist undetected. While the visible snippet does not reveal the exact usage, the presence of reflection and related utilities strongly suggests hidden behavior intended to conceal network activity.

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
<summary>[medium] porting/revisions/v1.10.7-dev.12/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.12/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.12/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.12/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.13/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.13/java/e/e/a/Dev116.java — sensitive source reaches network sink [llm: benign 0.92 — no ban]</summary>

LLM review: benign (0.92, benign-other): The excerpt displays only standard Android package and import statements; there are no network calls, external URLs, or hidden directives. Although the static-analysis note mentions a 'sensitive source reaching a network sink', no such behavior is evident in the visible code. Therefore the change appears to be a routine refactoring of imports rather than an exfiltration or backdoor implementation.

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
<summary>[high] porting/revisions/v1.10.7-dev.13/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.13/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.13/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.13/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.13/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.13/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.14/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.14/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.14/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.14/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.14/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.14/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.14/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.14/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.15/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.15/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.15/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.15/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.15/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.15/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.15/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.15/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.16/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.16/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.16/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.16/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.16/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.16/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.16/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.16/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.17/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.17/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.17/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.17/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.17/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.17/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.17/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.17/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.18/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.18/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.18/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.18/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.18/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.18/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.18/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.18/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.19/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.19/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.19/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.19/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.19/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.19/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.19/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.19/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.9/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.9/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.9/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.7-dev.9/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.9/java/e/e/a/Dev132.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ClipData;
import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.preference.MultiSelectListPreference;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceGroup;
import android.preference.PreferenceManager;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.7-dev.9/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.9/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.7-dev.9/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.0/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.11.0/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.11.0/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.11.0/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.11.0/java/e/e/a/Dev138.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.0/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.0/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.11.0/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
