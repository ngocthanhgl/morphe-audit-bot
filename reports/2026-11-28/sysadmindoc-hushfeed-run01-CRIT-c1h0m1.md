# SysAdminDoc/hushfeed — 2026-11-28

Commit: 8a41d7790352279864681c06f27e89b32d86595c | Status: CRIT | crit:1 high:0 med:1

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/interaction/BioMentions.java — new non-allowlisted URL or IP</summary>

```
import android.content.ActivityNotFoundException;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.text.style.ReplacementSpan;
import androidx.annotation.NonNull;
import java.util.Collections;
import java.util.Locale;
import app.morphe.extension.shared.Utils;
import app.morphe.extension.tiktok.settings.L10n;
 *
 * <p>Another app's username named in a bio ("IG: nasa", "snap @nasa") becomes a pill in that
 * app's color under Links to other apps in bios (#549). Its tap hands the account's public web
 * address to Android as an ordinary link, so that app or the browser opens it; nothing is fetched
```

</details>

<details>
<summary>[critical] cross-window — theft primitive completed across windows in extensions/tiktok/src/main/java/app/morphe/extension/tiktok/interaction/BioMentions.java: previously seen TextWatcher (2026-11-27) with new network use</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-11-27 for the earlier half)
```

</details>


__
