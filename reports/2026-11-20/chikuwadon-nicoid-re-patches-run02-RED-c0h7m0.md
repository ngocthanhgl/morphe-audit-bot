# chikuwadon/nicoid-re-patches — 2026-11-20

Commit: 81faa3394f63f6cdb09da1e3395408754bfd1bba | Status: RED | crit:0 high:7 med:0

<details>
<summary>[high] porting/revisions/v2.1.5-dev.11/BulkVideoActions215.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.88 — no ban]</summary>

LLM review: benign (0.88, benign-other): The excerpt displays a standard Android Java source file with typical imports and a Log call. The mentioned 'static-analysis reason' about same-app stored data/cookies refers to ensuring HTTP cookies stay within the app domain during network requests—a common defensive practice, not an indicator of malicious activity. No hidden instructions, data exfiltration, or backdoor elements are present in the visible portion. Therefore the change is benign.

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.content.res.ColorStateList;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.util.TypedValue;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.5-dev.12/BulkVideoActions215.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.35, exfiltration): The provided excerpt contains only package and import declarations, with no visible cookie, storage, or network code to confirm or refute the static-analysis concern. Because the flagged behavior cannot be verified from the available diff, this is treated as suspicious rather than malicious.

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.content.res.ColorStateList;
import android.net.Uri;
import android.os.Handler;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.5-dev.13/BulkVideoActions215.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.72 — no ban]</summary>

LLM review: benign (0.72, benign-other): The provided excerpt contains only a package declaration and Android/Java import statements. It does not show any network access, cookie handling, stored-data access, or data transmission behavior that would substantiate the static-analysis concern. Without additional code, there is no observable malicious or suspicious behavior in the excerpt.

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.content.res.ColorStateList;
import android.net.Uri;
import android.os.Handler;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.5-dev.14/BulkVideoActions215.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.content.res.ColorStateList;
import android.net.Uri;
import android.os.Handler;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.5-dev.15/BulkVideoActions215.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.65, exfiltration): The diff modifies BulkVideoActions215.java and includes imports for Uri and Handler, indicating network activity. Static analysis flags the file for handling same-app stored data/cookies over the network. Presence of cookie manipulation combined with outbound HTTP calls suggests potential exfiltration of app‑stored cookies across sites, which could allow credential theft. The current snippet does not show the full implementation, so the risk level remains uncertain, but the indicators warrant caution.

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.content.res.ColorStateList;
import android.net.Uri;
import android.os.Handler;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.5-dev.16/BulkVideoActions215.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.content.res.ColorStateList;
import android.net.Uri;
import android.os.Handler;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.5-dev.17/BulkVideoActions215.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.content.res.ColorStateList;
import android.net.Uri;
import android.os.Handler;
```

</details>


__
