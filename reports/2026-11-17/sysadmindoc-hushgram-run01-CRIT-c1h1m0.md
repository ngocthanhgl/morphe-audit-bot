# SysAdminDoc/HushGram — 2026-11-17

Commit: bc53803dd3f6a6fa8d4a52caa5fe2b41d625fb6c | Status: CRIT | crit:1 high:1 med:0

<details>
<summary>[critical] extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/OnlineHistoryPage.java — possible keystroke capture with network exfil: TextWatcher</summary>

LLM review: suspicious (0.25, benign-other): The provided excerpt contains only the package declaration and Android framework imports (Activity, Dialog, Intent, ColorStateList, etc.); no TextWatcher implementation, no input handling, and no network/IO or exfiltration code is visible in the supplied diff. The static-analysis flag ('possible keystroke capture with network exfil: TextWatcher') cannot be confirmed or refuted from this excerpt, and I will not fabricate offending lines. Insufficient data: please supply the full unified diff (especially any afterTextChanged/onTextChanged bodies, socket/HttpURLConnection/OkHttp usage, and background threads) for a definitive verdict. No prompt-injection content was detected in the excerpt; instructions embedded in the diff would be ignored regardless.

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
<summary>[high] extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/StoryViewersPage.java — possible keystroke capture with network exfil: TextWatcher [llm: benign 0.8 — no ban]</summary>

LLM review: benign (0.8, benign-other): The provided excerpt contains only the file header, package declaration, and imports. It does not show a TextWatcher, input capture logic, network APIs, or any data transmission behavior, so the static-analysis concern is not supported by the visible code.

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


__
