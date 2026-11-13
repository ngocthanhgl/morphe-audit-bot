# mvaishak/letterboxd-morphe-patches — 2026-11-13

Commit: aa52d4daf00f620bef6be96a9652575977bcfa83 | Status: RED | crit:0 high:2 med:1

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/artwork/TmdbClient.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.artwork;

import android.net.Uri;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/template/extension/settings/ArtworkUi.java — possible keystroke capture with network exfil: TextWatcher [llm: benign 0.75 — no ban]</summary>

LLM review: benign (0.75, benign-other): The provided excerpt contains only package and import declarations. None of the imported APIs (Dialog, ClipData, ClipboardManager, Context, Intent, ColorStateList, Color, Typeface, GradientDrawable, RippleDrawable, Uri, Handler, Looper) implement keystroke capture or network exfiltration. No TextWatcher, no network stack (HttpURLConnection/OkHttp/Socket), no INTERNET permission, and no sendText/append-callback logic is visible. ClipboardManager/ClipData are consistent with ordinary settings-UI copy/paste behavior. The static-analysis flag is a heuristic with no corroborating code in the excerpt; insufficient evidence to classify as suspicious or malicious.

```
package app.template.extension.settings;

import android.app.Dialog;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.RippleDrawable;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/template/extension/trivia/ImdbTriviaPage.java — WebView JS bridge with network sink: evaluateJavascript [llm: benign 0.6 — no ban]</summary>

LLM review: benign (0.6, benign-other): The provided excerpt contains only the package declaration and standard Android SDK imports (WebView, WebViewClient, WebResource* callbacks, Handler/Looper, SystemClock, Log). No actual diff hunks, evaluateJavascript call site, URL construction, or data-flow to a network sink is visible, so there is no concrete evidence of exfiltration or a backdoor. The imports are consistent with an ordinary WebViewClient that injects/evaluates JS on an IMDb trivia page (a common pattern in app patch modules). The static-analysis flag is a heuristic (WebView + JS bridge); without visible offending lines, a malicious verdict is not supportable. Confidence is moderate because the full method bodies were not included in the excerpt.

```
package app.template.extension.trivia;

import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;

```

</details>

<details>
<summary>[info] patches/src/main/resources/artwork/tmdb.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
