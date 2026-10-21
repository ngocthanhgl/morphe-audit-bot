# SysAdminDoc/HushFacebook — 2026-10-21

Commit: 6c698c6612b70035171e26f3832f3321955afc38 | Status: RED | crit:0 high:3 med:0

<details>
<summary>[high] extensions/facebook/src/main/java/app/morphe/extension/facebook/ads/GameBridge.java — WebView JS bridge with network sink: evaluateJavascript</summary>

LLM review: suspicious (0.65, exfiltration): The excerpt only shows imports for a WebView JavaScript bridge and does not include the evaluateJavascript implementation. The static-analysis flag identifies a WebView JS bridge with a network sink via evaluateJavascript, which could be abused for data exfiltration, but the actual offending behavior is not visible in the provided diff. The finding is therefore suspicious and requires further code review.

```
/*
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.extension.facebook.ads;

import android.os.Handler;
import android.os.Looper;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import androidx.annotation.Nullable;

import org.json.JSONObject;

```

</details>

<details>
<summary>[high] extensions/facebook/src/main/java/app/morphe/extension/facebook/ads/GameBridge.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.7, exfiltration): The static-analysis reason cites reflection-hidden behavior with a network sink, which is a concerning pattern that may indicate hidden or abusive runtime behavior. However, the provided excerpt only shows initial imports and not the reflective or network-facing implementation, so the exact malicious lines cannot be fully confirmed from the given data.

```
/*
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.extension.facebook.ads;

import android.os.Handler;
import android.os.Looper;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import androidx.annotation.Nullable;

import org.json.JSONObject;

```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/morphe/patches/facebook/ads/games/GameAdAnchors.kt — WebView JS bridge with network sink: addJavascriptInterface</summary>

LLM review: suspicious (0.7, exfiltration): The flagged diff concerns a WebView addJavascriptInterface bridge that routes game bridge calls through GameBridge.wrap, which the static analyzer describes as a network sink. This may create an unintended JavaScript-to-native data path, but the excerpt does not show the full implementation or its destination, so the behavior is not conclusively malicious.

```
import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.util.proxy.mutableTypes.MutableClass
import app.morphe.patcher.util.proxy.mutableTypes.MutableMethod.Companion.toMutable
import com.android.tools.smali.dexlib2.builder.MutableMethodImplementation
import com.android.tools.smali.dexlib2.immutable.ImmutableMethod
import com.android.tools.smali.dexlib2.immutable.ImmutableMethodParameter
 *
 * That bridge only serves games opened in their own screen. Most games now run inside Facebook's
 * main screen from code Facebook downloads after install, which brings its own bridge the patch
 * can't reach (#168). Both register their bridge on a WebView extending the same base class, the
 * one the bridge's constructor is handed (its one parameter, in the constructor holding the name
 * "QuicksilverAndroid" the bridge is registered under). That base extends WebView directly and
 * doesn't override addJavascriptInterface, so the patch gives it one that hands each bridge to
 * GameBridge.wrap first, which puts a game bridge behind one of Hushfacebook's own.
/** The name a game's SDK finds the bridge under, as GameBridge.NAME holds it. */
```

</details>


__
