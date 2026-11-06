# bearinmindcat/morphe-patches — 2026-11-06

Commit: 033ec3fb6666f9d8950275009477f7d5664e8f6f | Status: RED | crit:0 high:8 med:6

<details>
<summary>[info] docs/icons/coloros-contacts.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/gmail.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-screen-recorder.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/nothing-screenshot.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-email.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-good-lock.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-home-up.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-screen-recorder.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-wonderland.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/sony-album.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/xperia-home.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/samsunggallery/src/main/java/org/ungoogled/samsunggallery/search/SearchModel.java — decimal-encoded IP literal with network context: 1129465685</summary>

```
package org.ungoogled.samsunggallery.search;

import android.content.Context;
import android.util.Log;

import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.RandomAccessFile;
import java.net.HttpURLConnection;
import java.net.URL;
```

</details>

<details>
<summary>[medium] extensions/samsunggoodlock/src/main/java/org/ungoogled/samsunggoodlock/Store.java — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.samsunggoodlock;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.widget.Toast;

/**
 * Where a module comes from off One UI. Good Lock installs modules from the Galaxy Store, which other phones do not
 * have, and a module straight from Samsung would not run there anyway: it is opened on APKMirror instead, to be patched
 * with Morphe like Good Lock itself. With the Galaxy Store installed Good Lock keeps its own way.
 */
public final class Store {
```

</details>

<details>
<summary>[high] extensions/samsungnotes/src/main/java/org/ungoogled/samsungnotes/account/SamsungAccount.java — sensitive data handoff to explicit external package</summary>

LLM review: suspicious (0.4, exfiltration): Excerpt is truncated after imports; no Intent construction, extras, destination package, or data payload is visible to verify the flagged sensitive data handoff. Imports of Intent, ComponentName, and PackageManager are consistent with an explicit external package handoff but insufficient to prove malicious exfiltration, so suspicious rather than malicious.

```
package org.ungoogled.samsungnotes.account;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.PackageManager;
import android.os.IBinder;
import android.util.Log;

/**
```

</details>

<details>
<summary>[medium] extensions/samsungnotes/src/main/java/org/ungoogled/samsungnotes/account/SamsungAuth.java — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.samsungnotes.account;

import android.net.Uri;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
```

</details>

<details>
<summary>[high] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/CloudImportActivity.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.65, exfiltration): Excerpt shows code reading debug.umicloud.base via getprop and using it as the importer base URL, with no log.tag gate visible in code itself - only claimed in comments, which are untrusted. If set via privileged setprop/adb or intent extra, same-app cookies/authenticated MiCloud requests could be redirected to an arbitrary http host, enabling exfiltration. No hardcoded remote endpoint or obfuscation is shown and setting the property requires shell/adb privilege, so evidence is insufficient for malicious, but a credentialed-traffic debug redirect is suspicious.

```
     * Tests point the importer at a local copy of the site: `adb shell setprop log.tag.UMiCloud DEBUG`, then either
     * `adb shell setprop debug.umicloud.base http://10.0.2.2:PORT` or start this screen with `--es debug_base ...` (it is
     * not exported, so only adb as root can). Without the log.tag property both are ignored.
        if (extra == null) extra = property("debug.umicloud.base");
    /** A system property (read with getprop, no hidden API), or null when unset. */
    private static String property(String name) {
        try {
            Process p = new ProcessBuilder("getprop", name).redirectErrorStream(true).start();
            String value = new String(MiCloudApi.readAll(p.getInputStream(), 4096), java.nio.charset.StandardCharsets.UTF_8).trim();
            p.destroy();
            return value.isEmpty() ? null : value;
        } catch (Exception e) {
            return null;
        }
    }
```

</details>

<details>
<summary>[high] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/CloudImportActivity.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.6, backdoor): Excerpt shows a debug base-URL override from intent extra or getprop debug.umicloud.base that can redirect MiCloud import traffic, a sensitive source, to an arbitrary http server. Comments claim it is gated by log.tag.UMiCloud and the activity is not exported, but the excerpt does not show enforcement of the log.tag check before use, so gating cannot be verified from the supplied code. No evidence of remote exploitation without local adb/root access, so not malicious, but the unverified debug redirect is a suspicious backdoor surface.

```
     * Tests point the importer at a local copy of the site: `adb shell setprop log.tag.UMiCloud DEBUG`, then either
     * `adb shell setprop debug.umicloud.base http://10.0.2.2:PORT` or start this screen with `--es debug_base ...` (it is
     * not exported, so only adb as root can). Without the log.tag property both are ignored.
        if (extra == null) extra = property("debug.umicloud.base");
    /** A system property (read with getprop, no hidden API), or null when unset. */
    private static String property(String name) {
        try {
            Process p = new ProcessBuilder("getprop", name).redirectErrorStream(true).start();
            String value = new String(MiCloudApi.readAll(p.getInputStream(), 4096), java.nio.charset.StandardCharsets.UTF_8).trim();
            p.destroy();
            return value.isEmpty() ? null : value;
        } catch (Exception e) {
            return null;
        }
    }
```

</details>

<details>
<summary>[high] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/MiCloudApi.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.45, exfiltration): Excerpt defines i.mi.com and debug loopback host patterns but does not show where they are enforced before cookie-bearing network requests, nor any build/debug guard for DEBUG_HOST. Cannot verify same-site cookie handling from partial excerpt alone, so suspicious rather than benign or malicious.

```
import java.util.regex.Pattern;
    /** Tag of the one-line traces a reporter's log needs (host, step, status; never cookies or note text). */
    static final String TRACE = "UA";
    /** Xiaomi Cloud's notes site: i.mi.com and every regional host (us., de., sg., ru., in., ...). */
    static final Pattern NOTES_HOST = Pattern.compile("(?i)^(?:[a-z0-9-]+\\.)*i\\.mi\\.com$");
    /** Debug-only stand-ins for that family (a local copy of the site on the emulator's host). */
    private static final Pattern DEBUG_HOST = Pattern.compile("^(?:10\\.0\\.2\\.2|127\\.0\\.0\\.1|localhost)$");

    /** A failure the screen can explain: which host, which step, what the site answered. */
    static class Failure extends IOException {
        final String host, step;

        Failure(String host, String step, String message) {
            this.host = host;
            this.step = step;
```

</details>

<details>
<summary>[high] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/MiCloudApi.java — sensitive source reaches network sink [llm: benign 0.75 — no ban]</summary>

LLM review: benign (0.75, benign-other): Excerpt shows a strict host allowlist for i.mi.com regional hosts and loopback debug hosts, and a trace tag explicitly intended to log only host/step/status without cookies or note text. No sensitive source, network sink, or exfiltration behavior is visible in the provided excerpt.

```
import java.util.regex.Pattern;
    /** Tag of the one-line traces a reporter's log needs (host, step, status; never cookies or note text). */
    static final String TRACE = "UA";
    /** Xiaomi Cloud's notes site: i.mi.com and every regional host (us., de., sg., ru., in., ...). */
    static final Pattern NOTES_HOST = Pattern.compile("(?i)^(?:[a-z0-9-]+\\.)*i\\.mi\\.com$");
    /** Debug-only stand-ins for that family (a local copy of the site on the emulator's host). */
    private static final Pattern DEBUG_HOST = Pattern.compile("^(?:10\\.0\\.2\\.2|127\\.0\\.0\\.1|localhost)$");

    /** A failure the screen can explain: which host, which step, what the site answered. */
    static class Failure extends IOException {
        final String host, step;

        Failure(String host, String step, String message) {
            this.host = host;
            this.step = step;
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/org/ungoogled/patches/coloroscontacts/misc/ChangePackageNamePatch.kt — sensitive data handoff to explicit external package</summary>

LLM review: suspicious (0.35, exfiltration): Excerpt contains only package and imports with no visible data handoff, external package reference, or exfiltration logic; flagged behavior cannot be verified from provided lines, so malicious cannot be established and benign cannot be confirmed.

```
package org.ungoogled.patches.coloroscontacts.misc

import app.morphe.patcher.extensions.InstructionExtensions.replaceInstruction
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import app.morphe.patcher.patch.stringOption
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.Method
import com.android.tools.smali.dexlib2.iface.instruction.FiveRegisterInstruction
import com.android.tools.smali.dexlib2.iface.instruction.Instruction
import com.android.tools.smali.dexlib2.iface.instruction.OneRegisterInstruction
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/gmail/GmailRemoveTelemetryPatch.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.gmail

import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.extensions.InstructionExtensions.replaceInstruction
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.OneRegisterInstruction
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.FieldReference
import org.ungoogled.patches.gmail.GmailConstants.COMPATIBILITY_GMAIL
import org.ungoogled.patches.gmail.GmailConstants.GMAIL_EXTENSION
import org.w3c.dom.Element
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/honorscreenrecorder/misc/EnableNonMagicOsPatch.kt — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.patches.honorscreenrecorder.misc

import app.morphe.patcher.extensions.InstructionExtensions.addInstruction
import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.extensions.InstructionExtensions.addInstructionsWithLabels
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import app.morphe.patcher.util.smali.ExternalLabel
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.Method
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
import com.android.tools.smali.dexlib2.iface.reference.StringReference
import com.android.tools.smali.dexlib2.iface.reference.TypeReference
```

</details>

<details>
<summary>[medium] patches/src/main/resources/samsunggallery/lib/arm64-v8a/libgallerynn.so — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/samsunggallery/search/labels.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/samsunggallery/search/vision.recipe — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/CloudImportActivity.java: new host https://i.mi.com with previously seen getCookie, CookieManager, WebView, loadUrl (2026-11-06)</summary>

LLM review: suspicious (0.6, exfiltration): Excerpt missing; static analysis reports getCookie/CookieManager/WebView/loadUrl combined with new host https://i.mi.com, indicating possible cookie exfiltration across windows, but without diff lines cannot confirm malicious behavior.

```
(see report of 2026-11-06 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/CloudImportActivity.java: previously seen host https://i.mi.com, https://account.xiaomi.com (2026-11-06) with new CookieManager, WebView, loadUrl</summary>

LLM review: suspicious (0.45, exfiltration): No diff excerpt provided to verify cross-window exfiltration; summary only shows WebView/CookieManager/loadUrl to official Xiaomi hosts i.mi.com and account.xiaomi.com, which is consistent with MiCloud import authentication, but the flagged cross-window flow cannot be confirmed or cleared from the incomplete data.

```
(see report of 2026-11-06 for the earlier half)
```

</details>


__
