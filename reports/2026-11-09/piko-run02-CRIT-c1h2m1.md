# crimera/piko — 2026-11-09

Commit: 995b96fc608cc8accfccfb20b8930069c09c6564 | Status: CRIT | crit:1 high:2 med:1

<details>
<summary>[high] extensions/instagram/src/main/java/app/morphe/extension/instagram/patches/dm/DeletedMessagesActivity.java — sensitive data handoff to explicit external package [llm: benign 0.92 — no ban]</summary>

LLM review: benign (0.92, benign-other): The displayed import statements are all standard Android SDK classes (e.g., Application, Intent, Toast, Build, etc.). None reference an external or third‑party package, and there is no indication in the excerpt that sensitive data is being handed off to an external entity. The comment about 'sensitive data handoff to explicit external package' appears to be a misinterpretation; the actual code does not perform such a transfer.

```
import android.app.Application;
import android.content.Intent;
import android.content.res.TypedArray;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.view.KeyEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.Toast;
import android.os.Build;
import android.window.OnBackInvokedDispatcher;
import androidx.annotation.RequiresApi;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
```

</details>

<details>
<summary>[medium] extensions/instagram/src/main/java/app/morphe/extension/instagram/patches/download/MediaPicture.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright (C) 2026 piko <https://github.com/crimera/piko>
 *
 * See the included NOTICE file for GPLv3 §7(b) terms that apply to this code.
 */

package app.morphe.extension.instagram.patches.download;

import android.graphics.BitmapFactory;

import org.json.JSONObject;
import org.json.JSONTokener;

import java.io.InputStream;
import java.net.HttpURLConnection;
```

</details>

<details>
<summary>[critical] extensions/instagram/src/main/java/app/morphe/extension/instagram/patches/instants/InstantsVaultActivity.java — possible keystroke capture with network exfil: TextWatcher</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.RippleDrawable;
import android.text.format.DateFormat;
import android.view.accessibility.AccessibilityNodeInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.os.Build;
import android.window.OnBackInvokedDispatcher;
import androidx.annotation.RequiresApi;
import java.time.ZoneId;
import java.util.HashMap;
```

</details>

<details>
<summary>[high] extensions/instagram/src/main/java/app/morphe/extension/instagram/patches/instants/InstantsVaultActivity.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.35, exfiltration): The file name 'InstantsVaultActivity' suggests handling of secret 'instant' messages and a vault, which often stores credentials. Imports include network-oriented classes such as OnBackInvokedDispatcher, Build, and various drawables, indicating possible outbound communication. Although the visible imports stop before any network call, the combination of a vault-like activity and these imports raises concerns about exfiltrating sensitive data to external endpoints. Without seeing the method bodies, we cannot confirm malicious intent, so the risk remains high enough to warrant further review.

```
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.RippleDrawable;
import android.text.format.DateFormat;
import android.view.accessibility.AccessibilityNodeInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.os.Build;
import android.window.OnBackInvokedDispatcher;
import androidx.annotation.RequiresApi;
import java.time.ZoneId;
import java.util.HashMap;
```

</details>


__
