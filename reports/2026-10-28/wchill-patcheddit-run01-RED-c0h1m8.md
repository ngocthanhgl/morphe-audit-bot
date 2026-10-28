# wchill/patcheddit — 2026-10-28

Commit: 1b001bd5245232bac322248890480d31aeaa682b | Status: RED | crit:0 high:1 med:8

<details>
<summary>[info] extensions/boost/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
plugins {
    alias(libs.plugins.ksp)
}

dependencies {
    compileOnly("androidx.preference:preference:1.2.0")
    implementation(libs.morphe.extensions.library)
    compileOnly(libs.bundles.boost)
    compileOnly(project(":extensions:boost:stub"))
    compileOnly(libs.annotation)
    compileOnly("com.squareup.okhttp3:okhttp:5.0.0-alpha.8")
    implementation(libs.jackson.databind.boost)
    implementation(libs.room.runtime)
    ksp(libs.room.compiler)
    coreLibraryDesugaring(libs.desugar.jdk.libs)
```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/FixSLinksPatch.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 * https://github.com/wchill/patcheddit
 * Modifications Copyright 2026 brealorg.
 * Adapted from https://github.com/brealorg/breal-morphe-patches (82d70f7).
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.boost;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/gifsearch/GifUrlInsertion.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 brealorg.
 * Adapted from https://github.com/brealorg/breal-morphe-patches (82d70f7).
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.boost.gifsearch;

import android.app.AlertDialog;
import android.content.Context;
import android.text.InputType;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/http/arcticshift/ArcticShift.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 * https://github.com/wchill/patcheddit
 *
 * See the included NOTICE file for GPLv3 §7(b) and §7(c) terms that apply to this code.
 * Modifications Copyright 2026 brealorg.
 * Adapted from https://github.com/brealorg/breal-morphe-patches (0226c2e).
 * Modified for Breal issue #219: bounded calls and failure cooldown (2026-10-12).
 */

package app.morphe.extension.boost.http.arcticshift;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/http/reddit/GlideRedditMediaWayback.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 * https://github.com/wchill/patcheddit
 *
 * See the included NOTICE file for GPLv3 §7(b) and §7(c) terms that apply to this code.
 * Modifications Copyright 2026 brealorg.
 * Adapted from https://github.com/brealorg/breal-morphe-patches (0226c2e).
 */

package app.morphe.extension.boost.http.reddit;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.util.Locale;

```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/http/wayback/WaybackMachine.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 * https://github.com/wchill/patcheddit
 *
 * See the included NOTICE file for GPLv3 §7(b) and §7(c) terms that apply to this code.
 * Modifications Copyright 2026 brealorg.
 * Adapted from https://github.com/brealorg/breal-morphe-patches (0226c2e).
 */

package app.morphe.extension.boost.http.wayback;

import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;
import java.util.Locale;
```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/oauth/OAuthTokenValidator.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.boost.oauth;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;

import java.io.IOException;
import java.io.InterruptedIOException;
```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/upload/ImgBbUploader.java — new non-allowlisted URL or IP</summary>

```
/*
 * Modifications Copyright 2026 brealorg.
 *
 * See the included NOTICE file for GPLv3 §7(b) and §7(c) terms that apply to this code.
 * Adapted from https://github.com/brealorg/breal-morphe-patches (82d70f7).
 */
package app.morphe.extension.boost.upload;

import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;

import com.rubenmayayo.reddit.models.imgur.Upload;

```

</details>

<details>
<summary>[info] extensions/boost/stub/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
dependencies {
    compileOnly(libs.bundles.boost)
    compileOnly(libs.okhttp)
}


```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/fixes/login/ModifyWebViewPatch.java — WebView JS bridge with network sink: evaluateJavascript</summary>

LLM review: suspicious (0.7, exfiltration): The excerpt shows WebView settings enabling JavaScript and setting a custom user agent before loadUrl. The static analyzer flagged a WebView JS bridge with a network sink via evaluateJavascript, which could indicate a potential exfiltration path, but the actual evaluateJavascript call is not visible in the excerpt, so the risk is not fully confirmed.

```
@SuppressWarnings("unused")
        if (url.contains("reddit.com/login") || url.contains("reddit.com/api/v1/authorize")) {
            WebSettings webSettings = webView.getSettings();
            webSettings.setUserAgentString(
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) " +
                            "Chrome/147.0.0.0 Mobile Safari/537.36"
            );
            webSettings.setJavaScriptEnabled(true);
        }
        webView.loadUrl(url, additionalHeaders);
    }

    public static void loadUrl(WebView webView, String url) {
        loadUrl(webView, url, Map.of());
    }
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/reddit/customclients/boostforreddit/http/archive/AddArchiveLinksPatch.kt — new non-allowlisted URL or IP</summary>

```
 * Modifications Copyright 2026 brealorg.
 * Adapted from https://github.com/brealorg/breal-morphe-patches (0226c2e).
import app.morphe.patches.reddit.customclients.boostforreddit.bindings.BoostApi

import app.morphe.patches.reddit.customclients.AppCompatibility
import app.morphe.patches.reddit.customclients.ExtensionPatches
import app.morphe.patches.all.misc.PatchCategory
import app.morphe.patches.reddit.customclients.boostforreddit.wrapHook
import app.morphe.util.getReference
import app.morphe.util.indexOfFirstInstructionOrThrow
import com.android.tools.smali.dexlib2.iface.instruction.FiveRegisterInstruction
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
internal val SETTINGS_UTILS_EXTENSION_CLASS_DESCRIPTOR = "Lapp/morphe/extension/boost/utils/SettingsUtils;"
    name = "Add archive links to context menu",
    description = "Adds 'Open with Wayback Machine' and 'Open with Archive.is' to the link context menu.",
```

</details>


__
