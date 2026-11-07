# chikuwadon/nicoid-re-patches — 2026-11-07

Commit: 50f445f0e945e870e0051dd3ab9476f24b4485b2 | Status: RED | crit:0 high:30 med:27

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
<summary>[info] porting/compat/validated.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.3-dev.1/java/e/e/a/Dev113.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.4, benign-other): Provided excerpt shows only imports for Activity, dialogs, widgets, JSON and XmlPullParser with no reflection, network sink, or exfiltration code visible; flagged behavior cannot be verified from truncated excerpt, so malicious verdict is not warranted.

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
import org.xmlpull.v1.XmlPullParser;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.3-dev.1/java/e/e/a/Dev116.java — sensitive source reaches network sink [llm: benign 0.9 — no ban]</summary>

LLM review: benign (0.9, benign-other): The excerpt shows only standard Android imports (Activity, Context, SharedPreferences, Uri, Handler, Looper, Preference, DocumentsContract, Gravity, Menu, MenuItem, View). These are typical for a preference‑related utility class. No network request, outbound URI usage, or data exfiltration logic is visible in the displayed portion. Although the static‑analysis reason mentions 'sensitive source reaches network sink', the code snippet does not implement such behavior. Therefore the file appears benign and unrelated to covert communication.

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
<summary>[high] porting/revisions/v1.10.3-dev.1/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, backdoor): The imports include android.net.Uri, android.os.Handler, and android.os.Looper, indicating network-related components. The static-analysis note claims 'reflection-hidden behavior with network sink', implying that reflection is used to conceal a network sink that could intercept or send data. This pattern—hidden network communication via reflection—is typical of a backdoor rather than legitimate code, so the change warrants further scrutiny before deployment.

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
<summary>[medium] porting/revisions/v1.10.3-dev.1/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.2/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.2/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.55, exfiltration): The imported classes `android.net.Uri` and `android.provider.DocumentsContract` suggest the file may handle URI construction or document retrieval, which can lead to outbound network communication. Static analysis flags 'sensitive source reaches network sink', implying possible data exfiltration. However, without seeing the body of the class, it is unclear whether these imports are used to send external data. The presence of network-related imports raises suspicion but does not definitively prove malicious behavior.

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
<summary>[high] porting/revisions/v1.10.3-dev.2/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.65, backdoor): The excerpt begins with several imports that include network‑related classes such as android.net.Uri and also os/handler/looper components, while the reported static‑analysis reason explicitly mentions "reflection-hidden behavior with network sink". Using reflection to mask outbound network calls is a classic technique for establishing a hidden backdoor or data‑exfiltration channel. Although the complete source isn’t shown, the presence of these imports together with the claim of concealed network traffic points toward a covert mechanism rather than benign functionality. Therefore the change warrants further inspection before merging.

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
<summary>[high] porting/revisions/v1.10.3-dev.2/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.45, exfiltration): Only imports excerpt provided; reflection (Field/Method) and network/parsing imports are present but no actual sink, payload, or exfiltration code is visible to confirm malicious behavior. Insufficient evidence for malicious verdict.

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
<summary>[medium] porting/revisions/v1.10.3-dev.2/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.3/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.3/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.35, exfiltration): Provided excerpt shows only package declaration and imports, with no visible sensitive source, network sink, or data flow to verify the static-analysis flag. Insufficient evidence for a malicious verdict, so marked suspicious pending full code review.

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
<summary>[high] porting/revisions/v1.10.3-dev.3/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.4, exfiltration): Excerpt contains only package and imports with no visible reflection or network sink code; insufficient evidence to confirm malicious behavior, but static-analysis flag cannot be cleared from provided excerpt alone.

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
<summary>[high] porting/revisions/v1.10.3-dev.3/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.45, exfiltration): Excerpt shows only imports, including java.lang.reflect.Field and Method, with no visible reflective invocation or network sink to confirm malicious behavior. Static analysis flags reflection-hidden behavior with a network sink, which cannot be verified from the excerpt alone, so malicious is not justified but suspicious is warranted pending full diff review.

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
<summary>[medium] porting/revisions/v1.10.3-dev.3/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.4/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.4/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.35, exfiltration): Static analysis flags sensitive source reaching network sink, but provided excerpt contains only package and import declarations with no source, sink, or data flow visible. Insufficient evidence to confirm exfiltration or rule it out, so suspicious rather than malicious or benign.

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
<summary>[high] porting/revisions/v1.10.3-dev.4/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, backdoor): The extracted imports include network-related classes (android.net.Uri, android.os.Handler, android.os.Looper) together with preference APIs. The accompanying static-analysis note explicitly states 'reflection-hidden behavior with network sink'. Combining hidden-reflection access to a network sink with network-handling imports is a common indicator of a backdoor or stealthy exfiltration channel. Although the visible code does not fully expose the hidden mechanism, the mismatch between imported functionality and the described hidden behavior raises significant concern.

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
<summary>[high] porting/revisions/v1.10.3-dev.4/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.4, exfiltration): Only import excerpt provided; java.lang.reflect Field/Method imports are present alongside a flagged network sink, but no actual reflection invocation or network exfiltration code is visible to confirm malicious behavior. Insufficient evidence for a malicious verdict, so suspicious pending full diff review.

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
<summary>[medium] porting/revisions/v1.10.3-dev.4/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.5/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.5/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.5/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.5/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.5/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.6/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.6/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.6/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.6/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.6/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.7/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.7/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.7/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.3-dev.7/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.3-dev.7/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.3/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.3/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.3/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.3/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.3/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.4-dev.1/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.4-dev.1/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.4-dev.1/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.4-dev.1/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.4-dev.1/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
<summary>[medium] porting/revisions/v1.10.4/java/e/e/a/Dev113.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] porting/revisions/v1.10.4/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

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
<summary>[high] porting/revisions/v1.10.4/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

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
<summary>[high] porting/revisions/v1.10.4/java/e/e/a/Dev120.java — reflection-hidden behavior with network sink</summary>

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
<summary>[medium] porting/revisions/v1.10.4/java/e/e/a/PlaylistUrlParser.java — new non-allowlisted URL or IP</summary>

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
