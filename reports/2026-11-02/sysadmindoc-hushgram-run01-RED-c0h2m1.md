# SysAdminDoc/HushGram — 2026-11-02

Commit: 6e668f592fec9cd75fd281f606cc078c6ff15b29 | Status: RED | crit:0 high:2 med:1

<details>
<summary>[high] extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/ViewingHistoryPage.java — possible keystroke capture with network exfil: TextWatcher [llm: benign 0.95 — no ban]</summary>

LLM review: benign (0.95, benign-other): The visible excerpt contains only a copyright header, package declaration, and standard Android framework imports (Activity, Dialog, Context, Intent, ColorStateList, Color, Typeface, ColorDrawable). No TextWatcher, keystroke capture, network exfiltration, or other suspicious behavior is present in the provided code.

```
/*
 * Copyright 2026 HushGram contributors
 * https://github.com/SysAdminDoc/HushGram
 */
package app.hushgram.extension.instagram.settings;

import android.app.Activity;
import android.app.Dialog;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.ColorDrawable;
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java — new non-allowlisted URL or IP</summary>

```
    static final String[] LANGUAGES = {"de", "es", "in", "it", "ko", "pt-rbr", "tr", "vi", "zh-rtw"};
            case "vi":
                return buildVi();
        Map<String, String> table = new HashMap<>(2846);
        table.put("%1$s followed you again, %2$s",
                "%1$s folgt dir wieder, %2$s");
        table.put("%1$s started following you, %2$s",
                "%1$s folgt dir jetzt, %2$s");
        table.put("%1$s unfollowed you, %2$s",
                "%1$s folgt dir nicht mehr, %2$s");
    }

    private static void fillDe1(Map<String, String> table) {
        table.put("A story keeps playing while you pinch to zoom it. Hold it still first and it stays paused while you zoom.",
                "Eine Story l\u00e4uft weiter, w\u00e4hrend du sie mit zwei Fingern zoomst. Halte sie vorher gedr\u00fcckt, bleibt sie beim Zoomen pausiert.");
```

</details>

<details>
<summary>[info] patches/src/main/resources/app/morphe/patches/instagram/misc/icon/gradient.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/app/morphe/patches/instagram/misc/icon/retro.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java: new host http://192.168.1.10, http://10.0.0.2 with previously seen Contacts (2026-11-01)</summary>

LLM review: suspicious (0.62, exfiltration): The flagged file L10nTranslations.java is a localization resource file — it maps UI strings to locale keys, not network endpoints. However, the static-analysis report claims it contains hardcoded hosts (http://192.168.1.10, http://10.0.0.2) associated with exfiltration of 'Contacts' data. This is a category mismatch: a translation file would not normally contain live hostnames, and the pattern of 'new host + previously seen data type' matches known exfiltration signatures rather than benign localization data. The report may be conflating a translation key with an embedded endpoint, or the file may have been tampered with. Given the mismatch between expected file role and suspicious content, I rate this as suspicious rather than malicious, since the evidence is circumstantial and the file's normal function does not obviously support the claim.

```
(see report of 2026-11-01 for the earlier half)
```

</details>


__
