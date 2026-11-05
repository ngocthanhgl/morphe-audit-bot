# bearinmindcat/morphe-patches — 2026-11-05

Commit: 977d710187d9ae6b6f66127a4ce0814111214d6b | Status: RED | crit:0 high:1 med:3

<details>
<summary>[info] docs/icons/honor-weather.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/icons/samsung-phone.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/honorweather/src/main/java/org/ungoogled/honorweather/Accu.java — new non-allowlisted URL or IP</summary>

```
package org.ungoogled.honorweather;

import android.content.Context;
import android.net.Uri;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
```

</details>

<details>
<summary>[high] extensions/samsungphone/src/main/java/org/ungoogled/samsungphone/Calls.java — sensitive data handoff to explicit external package</summary>

LLM review: suspicious (0.4, exfiltration): Only imports are visible in the excerpt, showing Intent, ComponentName, and Uri capability consistent with the static-analysis flag for an explicit external handoff, but no actual intent construction, data payload, or target package is shown. Insufficient evidence to confirm exfiltration or malicious behavior, so suspicious rather than malicious per rules.

```
package org.ungoogled.samsungphone;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.os.Bundle;
import android.telecom.TelecomManager;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.widget.Toast;
```

</details>

<details>
<summary>[medium] patches/src/main/resources/samsunggallery/lib/arm64-v8a/libgalleryocr.so — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/resources/samsunggallery/lib/arm64-v8a/libgalleryocr.so — [binary strings, unverified] new non-allowlisted URL or IP</summary>

```
"Android"
"r27c"
"12479018"
"__cxa_finalize"
"__cxa_atexit"
"__register_atfork"
"Java_org_ungoogled_samsunggallery_ocr_Ncnn_open"
"__android_log_print"
"Java_org_ungoogled_samsunggallery_ocr_Ncnn_close"
"Java_org_ungoogled_samsunggallery_ocr_Ncnn_detect"
"free"
"Java_org_ungoogled_samsunggallery_ocr_Ncnn_recognize"
"setenv"
"fopen"
"feof"
```

</details>


__
