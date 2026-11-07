# wchill/patcheddit — 2026-11-07

Commit: 9be6296f47d0d51ca411e151eef7662fdccd0dc6 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/settings/OAuthSettings.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.shared.settings;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Base64;

import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/morphe/extension/shared/fixes/login/ModifyWebViewPatch.java: previously seen host http://147.0.0.0 (2026-10-31) with new loadUrl</summary>

LLM review: unreviewed (per-scan review cap reached)

```
(see report of 2026-10-31 for the earlier half)
```

</details>


__
