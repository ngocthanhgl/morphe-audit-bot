# ajstrick81/morphe-androidtv-patches — 2026-10-29

Commit: 10bf0c94d93d8bb92ab0efe4cee2826d92f589bb | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/extension/src/main/java/ajstrick81/morphe/extension/pluto/ads/PlutoV17ManifestProbe.java — new non-allowlisted URL or IP</summary>

```
package ajstrick81.morphe.extension.pluto.ads;

import android.util.Log;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/ajstrick81/morphe/extension/twitchatv/ads/TwitchAtvWebViewHelper.java — WebView JS bridge with network sink: evaluateJavascript</summary>

LLM review: suspicious (0.45, benign-other): The provided excerpt only shows Android imports and a playback-speed comment, without the actual WebView JS bridge or evaluateJavascript implementation. The static-analysis note flags a possible network sink, but the visible diff is insufficient to confirm unsafe behavior. The case is suspicious pending review of the full code.

```
import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.view.ActionMode;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.SearchEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.view.accessibility.AccessibilityEvent;
import java.lang.ref.WeakReference;
    // ── playback-speed control (opt-in via TwitchSpeedTogglePatch) ────────────
```

</details>


__
