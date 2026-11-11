# SysAdminDoc/HushGram — 2026-11-11

Commit: 85d94ad29ef3d63f29a2a9140b1a581d816f8dfc | Status: CRIT | crit:1 high:1 med:0

<details>
<summary>[critical] extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/SavedProfilesPage.java — possible keystroke capture with network exfil: TextWatcher</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

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
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Typeface;
```

</details>

<details>
<summary>[high] extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/SavedProfilesPage.java — sensitive data handoff to explicit external package</summary>

LLM review: suspicious (0.7, exfiltration): The file begins with standard Android imports and then declares its own package. The accompanying static‑analysis note states the purpose is a 'sensitive data handoff to an explicit external package.' Forwarding user profile data to an external package is a classic pattern for exfiltrating private information outside the application. While the visible imports are core Android classes, the described cross‑package data transfer implies the code may be sending saved profiles to an unrelated service, potentially exposing credentials or personal data. Without the full implementation it cannot be confirmed, but the risk remains significant enough to warrant further review.

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
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Typeface;
```

</details>


__
