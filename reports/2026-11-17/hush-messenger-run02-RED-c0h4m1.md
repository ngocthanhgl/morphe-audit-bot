# SysAdminDoc/HushMessenger — 2026-11-17

Commit: 229a3994457c84dff85fe13d111370f7ed7041cc | Status: RED | crit:0 high:4 med:1

<details>
<summary>[medium] extensions/messenger/src/main/java/app/hushmessenger/extension/LinkPlayer.java — new non-allowlisted URL or IP</summary>

```
package app.hushmessenger.extension;

import android.content.Context;
import android.net.Uri;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.regex.Pattern;

/**
 * Reads a tapped link and says whether it is a video page one of the four platforms will play on its own, and if it is,
 * which page to load (#188). Nothing here fetches a stream or reads a page: each platform publishes an embed of its
 * own, meant to be put in a frame by anyone, and that embed is all Hush loads. A link that doesn't match one of the
 * shapes below is never touched, so Messenger opens it the way it always did.
 *
```

</details>

<details>
<summary>[high] extensions/messenger/src/main/java/app/hushmessenger/extension/LinkPlayerSheet.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.25, benign-other): The provided excerpt contains only the package declaration and Android framework imports (Activity, Dialog, Canvas, Paint, Path, Drawable, GradientDrawable). No cookie access, network call, WebView, or data-sharing code is visible, so the static-analysis flag ('same-app stored data/cookies with network') cannot be confirmed or refuted from this snippet. No prompt-injection content was observed in the excerpt, and none was acted upon. Insufficient evidence to declare benign or malicious; the full diff (especially any CookieManager, WebView, HttpURLConnection/OkHttp, or Intent-URL handling in LinkPlayerSheet) is required for a definitive verdict.

```
package app.hushmessenger.extension;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PixelFormat;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
```

</details>

<details>
<summary>[high] extensions/messenger/src/main/java/app/hushmessenger/extension/LinkPlayerSheet.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package app.hushmessenger.extension;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PixelFormat;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
```

</details>

<details>
<summary>[high] extensions/messenger/src/main/java/app/hushmessenger/extension/LinkPlayerSheet.java — WebView JS bridge with network sink: evaluateJavascript [llm: benign 0.2 — no ban]</summary>

LLM review: benign (0.2, benign-other): The provided excerpt contains only the package declaration and standard Android imports (app, graphics, drawable). No executable code, no WebView setup, no evaluateJavascript call, and no network sink is visible in the supplied lines, so there is no behavioral evidence of exfiltration, backdoor, or spyware in what can actually be inspected. The excerpt also contains no prompt-injection attempts (no comments or strings attempting to override instructions). The static-analysis flag references an evaluateJavascript sink that is not present in the visible portion of the file; confidence is low because the diff is truncated, and a full review of the file body (especially any addJavascriptInterface, WebViewClient, or evaluateJavascript usage and the origin of the JavaScript/URL strings) is required before a stronger verdict can be made.

```
package app.hushmessenger.extension;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PixelFormat;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
```

</details>

<details>
<summary>[high] extensions/messenger/src/main/java/app/hushmessenger/extension/MessageLogAttachment.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.45, exfiltration): The provided excerpt contains only the package declaration and import list; no method bodies, reflection targets, or sink call sites are visible, so no definitive malicious behavior can be confirmed. However, the import set combines java.lang.reflect.Field (line 8) with java.net.HttpURLConnection and java.net.URL (lines 9-10), plus ByteArrayOutputStream/InputStream (lines 4, 7) and WeakHashMap/Map (lines 14-15) — a pattern consistent with the static-analysis flag of reflection-hidden behavior feeding a network sink (e.g., accessing a hidden field to harvest data and POSTing it out). This is suggestive but not proof; the class name 'MessageLogAttachment' could also plausibly cover legitimate attachment-upload logic using reflection for compatibility. No prompt-injection text was observed in the excerpt, and none of the imports alone constitute an offending line. Per the rules, malicious requires >=0.85 confidence and exact offending lines, which cannot be established from imports alone; therefore the correct disposition is suspicious pending review of the full diff (especially any Field.get/set on non-public SDK fields, URL.openConnection() usage, and byte-array writes to the output stream).

```
package app.hushmessenger.extension;

import android.content.Context;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.WeakHashMap;
```

</details>


__
