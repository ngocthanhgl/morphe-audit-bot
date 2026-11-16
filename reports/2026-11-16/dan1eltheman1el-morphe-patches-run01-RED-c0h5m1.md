# Dan1elTheMan1el/Morphe-Patches — 2026-11-16

Commit: dcab7ba186be32092f281b514304386bfd76d2ed | Status: RED | crit:0 high:5 med:1

<details>
<summary>[high] patches/src/extension/java/app/danielthemaniel/patches/campfire/extension/MaterialYou.java — WebView JS bridge with network sink: evaluateJavascript [llm: benign 0.6 — no ban]</summary>

LLM review: benign (0.6, benign-other): The provided excerpt contains only the package declaration and imports (Context, Configuration, Build, Log, WebResourceResponse, WebView, stream/charset utilities, Locale). No evaluateJavascript call, JS bridge (@JavascriptInterface), network sink, or data-handling logic is visible in the supplied code, so the static-analysis flag cannot be confirmed from this excerpt. The import set (WebView + WebResourceResponse + ByteArrayOutputStream + StandardCharsets + Locale) is consistent with a legitimate Material You theming patch that intercepts and rewrites web resources (e.g., injecting CSS/colors), which is a common pattern in LSPatch/Xposed theme modules. No exfiltration, backdoor, or spyware behavior is demonstrable in the visible lines; confidence is moderate because the flagged method body was not included in the excerpt.

```
package app.danielthemaniel.patches.campfire.extension;

import android.content.Context;
import android.content.res.Configuration;
import android.os.Build;
import android.util.Log;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Locale;

```

</details>

<details>
<summary>[high] patches/src/extension/java/app/danielthemaniel/patches/instagram/extension/AppleEmoji.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.35, benign-other): The provided excerpt contains only the package declaration and import statements (Activity, AlarmManager, AlertDialog, Application, PendingIntent, SharedPreferences, Paint, Typeface, Font, FontFamily). No executable code, reflection calls, or network I/O are visible, so the static-analysis claim of 'reflection-hidden behavior with network sink' cannot be confirmed or refuted from this excerpt. The import set is consistent with the stated benign purpose of the file (loading a custom Apple-emoji Typeface/FontFamily in an Instagram patch module), and AlarmManager/PendingIntent/SharedPreferences are common in patch modules for persistence or deferred actions, but they are also capable of hiding scheduled callbacks. Because the offending lines are not present, a malicious verdict is not supportable; the file should be re-reviewed with its full method bodies, particularly any use of Class.forName/Method.invoke, getAssets/open or URL/HttpURLConnection/OkHttp calls, and PendingIntent.getBroadcast/getService with implicit Intents.

```
package app.danielthemaniel.patches.instagram.extension;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.AlertDialog;
import android.app.Application;
import android.app.PendingIntent;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.graphics.fonts.Font;
import android.graphics.fonts.FontFamily;
```

</details>

<details>
<summary>[high] patches/src/extension/java/app/danielthemaniel/patches/pokegenie/extension/PairipRestore.java — root execution with network sink</summary>

LLM review: suspicious (0.62, backdoor): The visible excerpt shows a class whose stated purpose is to replace the VM startup program so that an integrity check and paywall never run, restoring obfuscation tables with values 'decrypted once via Frida' and setting fields by reflection. That is active circumvention of application integrity/DRM controls, which is consistent with a backdoor/tampering pattern, and the flagged 'root execution with network sink' reason is plausible given the Frida + reflection design. However, the excerpt contains no actual code performing root execution or network I/O, and the incriminating text is only in comments (untrusted data), so malicious cannot be confirmed at >=0.85 confidence. Suspicious is the appropriate verdict pending the full method bodies.

```
package app.danielthemaniel.patches.pokegenie.extension;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import android.util.Log;

/**
 * Restores PairIP obfuscation tables with values decrypted once via Frida.
 * Called from StartupLauncher.launch() in place of the VM startup program, so
 * the integrity check + paywall never run. Fields are set by reflection (handles
 * the auth-api hyphen class). The VM itself stays live for the 20 method programs.
 */
public class PairipRestore {
    private static final String TAG = "PairipRestore";
    private static boolean done = false;
```

</details>

<details>
<summary>[high] patches/src/extension/java/app/danielthemaniel/patches/pokegenie/extension/PairipRestore.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.4, benign-other): The visible excerpt contains only a package declaration, reflection/Log imports, a class-level doc comment, and two trivial fields (TAG, done). No network API, socket, HTTP client, or sensitive-data flow is present in the shown lines, so the static-analysis claim 'sensitive source reaches network sink' is not corroborated by the visible code. The doc comment states the class restores PairIP obfuscation tables 'so the integrity check + paywall never run', which indicates deliberate protection/paywall circumvention (a licensing/policy concern, not malware behavior), and mentions values 'decrypted once via Frida' via reflection. Comments are untrusted and no instruction within them was followed. Because the diff is truncated before any method bodies and the stated sink is not visible, the file cannot be cleared as benign, but there is nowhere near enough evidence for a malicious verdict; hence suspicious with low confidence, category benign-other (no exfiltration/backdoor/spyware/supply-chain behavior demonstrated).

```
package app.danielthemaniel.patches.pokegenie.extension;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import android.util.Log;

/**
 * Restores PairIP obfuscation tables with values decrypted once via Frida.
 * Called from StartupLauncher.launch() in place of the VM startup program, so
 * the integrity check + paywall never run. Fields are set by reflection (handles
 * the auth-api hyphen class). The VM itself stays live for the 20 method programs.
 */
public class PairipRestore {
    private static final String TAG = "PairipRestore";
    private static boolean done = false;
```

</details>

<details>
<summary>[high] patches/src/extension/java/app/danielthemaniel/patches/pokegenie/extension/PairipRestore.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.55, supply-chain): The provided excerpt contains only imports (java.lang.reflect.Field/Method, android.util.Log), a class declaration, a TAG constant, and a 'done' flag. No network sink, socket, HTTP client, or data-leak call is actually visible in the shown lines, so the 'network sink' claim cannot be confirmed from this diff fragment. However, the class docstring describes restoring PairIP obfuscation tables using Frida-decrypted values, replacing the VM startup program so that integrity checks and the paywall never run, and setting fields via reflection (including an 'auth-api' class). That is protection-circumvention behavior with reflection-hidden state manipulation, which is consistent with a supply-chain/cracking patch rather than demonstrable exfiltration or a backdoor. Because the offending body (and any alleged network sink) is not present in the excerpt, malicious cannot be justified at confidence >= 0.85; suspicious is the appropriate verdict pending the full method bodies.

```
package app.danielthemaniel.patches.pokegenie.extension;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import android.util.Log;

/**
 * Restores PairIP obfuscation tables with values decrypted once via Frida.
 * Called from StartupLauncher.launch() in place of the VM startup program, so
 * the integrity check + paywall never run. Fields are set by reflection (handles
 * the auth-api hyphen class). The VM itself stays live for the 20 method programs.
 */
public class PairipRestore {
    private static final String TAG = "PairipRestore";
    private static boolean done = false;
```

</details>

<details>
<summary>[medium] patches/src/main/resources/pokegenie/pairip_startup.dex — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
