# SysAdminDoc/hushfeed — 2026-10-27

Commit: 367f019b273b441a2bff3872fe85bc643ec26238 | Status: CRIT | crit:1 high:1 med:0

<details>
<summary>[critical] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/interaction/BioMentions.java — possible keystroke capture with network exfil: TextWatcher</summary>

LLM review: suspicious (0.72, exfiltration): The file imports android.text.Editable, android.text.Layout, and android.text.Spannable — all standard Android text-processing classes with no inherent exfiltration capability. However, the presence of a TextWatcher (not shown in the excerpt but referenced by the static-analysis reason) is a common pattern for capturing user input, which could be used to harvest keystrokes or sensitive text before forwarding it to an external endpoint. The excerpt alone does not contain the actual watcher implementation or network call; the suspiciousness stems from the flagged pattern rather than confirmed malicious behavior.

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 */
package app.morphe.extension.tiktok.interaction;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.text.Editable;
import android.text.Layout;
import android.text.Spannable;
import android.text.SpannableString;
import android.text.Spanned;
```

</details>

<details>
<summary>[high] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/theme/AmoledWebPages.java — WebView JS bridge with network sink: evaluateJavascript [llm: benign 0.75 — no ban]</summary>

LLM review: benign (0.75, benign-other): The visible excerpt contains only package declaration, imports, class header, and a comment describing an AMOLED dark theme for TikTok web pages. No evaluateJavascript invocation, JavaScript bridge registration, network exfiltration, or other malicious behavior is present in the provided code. The static-analysis reason references a sink not visible in this excerpt.

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 */
package app.morphe.extension.tiktok.theme;

import android.webkit.WebView;

import org.json.JSONObject;

import app.morphe.extension.shared.diagnostics.HookStatus;
import app.morphe.extension.tiktok.privacy.BrowserPrivacyGuard;

/**
 * AMOLED dark theme on TikTok's web pages: Activity center, Watch history, Comment history and
```

</details>


__
