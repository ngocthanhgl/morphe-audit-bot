# chikuwadon/nicoid-re-patches — 2026-11-09

Commit: 3c236c2a557e19e3ad7f3e599297464b57dcb020 | Status: RED | crit:0 high:24 med:40

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
<summary>[medium] porting/revisions/v1.10.6-dev.1/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.1/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.35, exfiltration): The file begins with package and imports several Android networking and preference classes (android.net.Uri, android.os.Handler, android.preference.*). Although the visible snippet stops before the method bodies, the presence of these imports combined with the static-analysis annotation 'sensitive source reaches network sink' hints that the code may read sensitive data (e.g., shared preferences) and transmit it over a network connection. No explicit HTTP client or URI construction appears yet, so the risk remains unverified. Without confirming the actual logic, the behavior could constitute data exfiltration of sensitive information.

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
<summary>[high] porting/revisions/v1.10.6-dev.1/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.6, backdoor): The file starts with imports from android.preference.*, android.provider.DocumentsContract, and android.os.Handler/Loopers, which are commonly associated with preference handling and network operations. Static analysis flags 'reflection-hidden behavior with network sink', indicating that the implementation likely uses Java reflection to intercept network calls and create a covert channel. While the visible snippet does not expose the reflective code, the combination of these imports and the reported hidden network sink suggests a possible backdoor mechanism. There is insufficient evidence to confirm malicious intent definitively, so the finding is marked as suspicious.

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
<summary>[high] porting/revisions/v1.10.6-dev.1/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.84, backdoor): The addition of `java.lang.reflect.Field` and `java.lang.reflect.Method` imports indicates the code may be using reflection to invoke hidden members, potentially hiding a network sink (e.g., intercepting outbound traffic) from normal application behavior. This is a known technique for backdoors or spyware that masquerade as legitimate functionality. While the surrounding implementation is not shown, the presence of these imports alone raises a red flag for covert network interception.

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
<summary>[medium] porting/revisions/v1.10.6-dev.1/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.1/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.1/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.2/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.2/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.35, exfiltration): The excerpt lists several Android networking imports including android.net.Uri, android.os.Handler, android.os.Looper, and android.preference.PreferenceManager. These suggest the file may initiate network operations or communicate preferences over the network. The static-analysis comment explicitly states 'sensitive source reaches network sink', implying possible unintended data exfiltration. However, without the full method bodies it is unclear whether such usage occurs, making the finding tentative. Therefore the behavior is flagged as suspicious rather than confirmed benign.

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
<summary>[high] porting/revisions/v1.10.6-dev.2/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.7, backdoor): The file begins with a long list of imports including android.preference.*, DocumentsContract, etc. The static-analysis note claims 'reflection-hidden behavior with network sink', indicating that the code uses reflection to conceal a network call/sink. Such a technique is commonly employed to create a backdoor that intercepts or forwards network traffic without exposing it through normal APIs. Although the visible portion only lists imports and does not reveal the actual implementation, the description points toward a hidden network interaction intended to gain unauthorized access or data exfiltration. Without seeing the concrete reflection logic, we cannot definitively label it malicious, so the safer classification is 'suspicious'.

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
<summary>[high] porting/revisions/v1.10.6-dev.2/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, backdoor): The file imports java.lang.reflect.Field and java.lang.reflect.Method together with java.lang.ref.WeakReference on lines 13 and 14. These imports allow dynamic inspection and invocation of private or internal members, which can be leveraged to create a hidden channel for network traffic such as a backdoor. Although reflection is commonly used for debugging, its presence here combined with the statement 'reflection-hidden behavior with network sink' suggests covert interception or exfiltration. Without examining the actual method bodies the malicious intent cannot be confirmed, so the risk remains uncertain.

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
<summary>[medium] porting/revisions/v1.10.6-dev.2/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.2/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.2/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.3/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.3/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.7, exfiltration): The extracted imports include Android network utilities (android.net.Uri, android.os.Handler, android.os.Looper) and view/menu elements, which typically support outbound HTTP requests or data transmission. The static-analysis label 'sensitive source reaches network sink' points to a possible leak of private data via a network connection. Although the shown excerpt stops before the method bodies, the combination of network-related imports and the stated concern raises suspicion about unintended exfiltration rather than confirming safety.

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
<summary>[high] porting/revisions/v1.10.6-dev.3/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, spyware): The snippet shows standard Android imports (Activity, Context, SharedPreferences, Uri, Handler, Looper, Preference classes, DocumentsContract, Gravity, Menu, MenuItem, View) but does not display any reflection usage or explicit network handling. The accompanying static-analysis note claims 'reflection-hidden behavior with network sink', indicating a possible covert interception of network traffic via reflection—an indicator often associated with spyware or backdoors. Because the visible code lacks such elements and the risk depends on unseen parts of the file, the assessment remains speculative. Therefore, the file is marked as suspicious rather than benign or malicious.

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
<summary>[high] porting/revisions/v1.10.6-dev.3/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, backdoor): The file imports java.lang.reflect.Field, java.lang.reflect.Method, and java.lang.ref.WeakReference, which are often used to dynamically load or invoke methods at runtime. Combined with references to ListView, Handler, Looper, and XML parsing, this suggests the code may hide network interactions (a 'network sink') behind reflection, potentially creating a backdoor or covert channel. While the current snippet does not show explicit malicious actions, the combination of reflection and WeakReference is a common technique for stealthy behavior, warranting caution.

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
<summary>[medium] porting/revisions/v1.10.6-dev.3/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.3/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.3/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.4/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.4/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.4/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.4/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.4/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.4/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.4/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.5/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.5/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.5/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.5/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.5/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.5/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.5/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.6/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.6/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.6/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.6/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.6/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.6/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.6/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.7/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.7/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.7/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6-dev.7/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.7/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.7/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6-dev.7/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.6/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.6/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.6/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6/java/e/e/a/PostingPolicy122.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.6/java/e/e/a/TabHistory127.java — new non-allowlisted URL or IP</summary>

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
"~l3E"
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: shared_prefs,Cookies</summary>

```
"~l3E"
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"~l3E"
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible DNS exfiltration channel: getByName</summary>

```
"~l3E"
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
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] reflection-hidden behavior with network sink</summary>

```
"~l3E"
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
