# bearinmindcat/morphe-patches — 2026-11-06

Commit: 38302ea2199a71c8f43c9e2b82b21b48fbea3115 | Status: RED | crit:0 high:4 med:4

<details>
<summary>[info] docs/icons/coloros-launcher.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/honor-home.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/nothing-launcher.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/oneplus-launcher.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-health.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-one-ui-home.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/onepluslauncher/src/main/java/com/oplus/inner/mediatek/telephony/MtkSmsMessageWrapper.java — SMS reading capability added: SmsMessage</summary>

```
package com.oplus.inner.mediatek.telephony;

/** Generated stand-in (.github/scripts/coloros-standins): names and signatures OnePlus Launcher uses, answering "absent" off ColorOS (no OPPO code). */
public class MtkSmsMessageWrapper {
    public static int[] calculateLength(java.lang.CharSequence p0, boolean p1) {
        return new int[0];
    }
    public java.lang.String getDestinationAddress() {
        return "";
    }
    public java.lang.String getDisplayMessageBody() {
        return "";
    }
    public java.lang.String getDisplayOriginatingAddress() {
        return "";
```

</details>

<details>
<summary>[high] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/CloudImportActivity.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.35, benign-other): Excerpt contains only package and imports with no cookie or network usage visible; cannot verify same-site handling or exfiltration from provided data, so insufficient to declare benign.

```
package org.ungoogled.xiaominotes.micloud;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.format.DateFormat;
import android.util.Log;
import android.util.TypedValue;
```

</details>

<details>
<summary>[high] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/CloudImportActivity.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.5, exfiltration): Excerpt contains only package and imports with no visible network sink, sensitive source, or data flow; insufficient evidence to confirm benign behavior or malicious exfiltration, so flagged static-analysis concern remains unresolved.

```
package org.ungoogled.xiaominotes.micloud;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.format.DateFormat;
import android.util.Log;
import android.util.TypedValue;
```

</details>

<details>
<summary>[medium] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/CloudImporter.java — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.xiaominotes.micloud;

import android.content.Context;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
```

</details>

<details>
<summary>[high] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/MiCloudApi.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.8 — no ban]</summary>

LLM review: benign (0.8, benign-other): Excerpt shows only standard imports including CookieManager for MiCloud API authentication; no code sending cookies or stored data to an unrelated third-party endpoint is present. Same-site cookie use is expected for this MiCloud client.

```
package org.ungoogled.xiaominotes.micloud;

import android.net.Uri;
import android.util.Log;
import android.webkit.CookieManager;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
```

</details>

<details>
<summary>[high] extensions/xiaominotes/src/main/java/org/ungoogled/xiaominotes/micloud/MiCloudApi.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.4, exfiltration): Only package and import declarations are shown in the excerpt; no sensitive source, network sink, or data flow code is visible to verify behavior. Static analysis flagged sensitive source reaching a network sink, but the provided excerpt is insufficient to confirm exfiltration or benign functionality, so suspicious rather than malicious.

```
package org.ungoogled.xiaominotes.micloud;

import android.net.Uri;
import android.util.Log;
import android.webkit.CookieManager;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungcalendar/SamsungCalendarConstants.kt — new non-allowlisted URL or IP</summary>

```
     * Samsung Calendar is a single APK from the Galaxy Store. Pinned to versions measured: R8 renames its classes every
     * build. 12.8 needs Android 15, 12.5.06.5 (issue #92) Android 13.
            AppTarget(version = "12.8.01.0", minSdk = 35),
            AppTarget(version = "12.5.06.5", minSdk = 33),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsungkeyboard/SamsungKeyboardConstants.kt — new non-allowlisted URL or IP</summary>

```
     * sharing the user id android.uid.honeyboard. Pinned to measured versions: 5.9.40.75 from the user's Galaxy Z
     * Flip7, the rest from APKMirror ("Samsung Keyboard", samsung-honey-board). Samsung ships two builds under one
     * version name (versionCode ...300 / ...400); R8 renames classes in every build.
            AppTarget(version = "5.9.40.48"),
            AppTarget(version = "5.9.40.12"),
            AppTarget(version = "5.9.40.11"),
            AppTarget(version = "5.9.40.6"),
            AppTarget(version = "5.9.30.97"),
            AppTarget(version = "5.9.30.95"),
            AppTarget(version = "5.9.30.90"),

```

</details>


__
