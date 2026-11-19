# chikuwadon/nicoid-re-patches — 2026-11-19

Commit: cf014eeb103de9451c1aae7a7ce2c6cf8fda71fd | Status: RED | crit:0 high:47 med:0

<details>
<summary>[high] porting/revisions/v2.1.1-dev.3/AmbientPanelGlow213.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.35, benign-other): The excerpt contains only the package declaration and imports (android.graphics.*, android.os.SystemClock, android.view.*, android.widget.ImageView, java.lang.ref.WeakReference). No reflection APIs, Class.forName, dynamic proxies, sockets, HTTP clients, or other network sinks are visible in the provided lines; the import set is consistent with a benign UI glow/drawable helper. The static-analysis claim of 'reflection-hidden behavior with network sink' cannot be corroborated from the visible code, and the full method bodies were not supplied, so the finding is inconclusive rather than confirmed malicious. Recommend reviewing the complete diff before escalation.

```
package e.e.a;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.LayerDrawable;
import android.os.SystemClock;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import java.lang.ref.WeakReference;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.4/AmbientBackplate214.java — sensitive source reaches network sink [llm: benign 0.82 — no ban]</summary>

LLM review: benign (0.82, benign-other): The provided excerpt contains only a package declaration and Android graphics/view-related imports. It shows no sensitive data source, network API, socket, HTTP client, or data flow to a network sink, so the static-analysis reason is not supported by the shown code.

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.ComposeShader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.os.SystemClock;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.4/AmbientBackplate214.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.3, exfiltration): The provided excerpt contains only the package declaration and standard Android graphics/drawable imports (Canvas, Paint, LinearGradient, ComposeShader, LayerDrawable, etc.). No reflection calls, no network APIs, and no data-handling code are visible in the excerpt, so the static-analysis claim of 'reflection-hidden behavior with network sink' cannot be confirmed or refuted from the visible lines. Because the flagged behavior is not observable in the supplied diff portion, this cannot be judged benign or malicious; a full-file review is required. Per policy, uncertainty resolves to suspicious rather than malicious.

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.ComposeShader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.os.SystemClock;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.5/AmbientBackplate214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Bitmap;
import android.graphics.drawable.GradientDrawable;
import android.content.res.ColorStateList;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.os.SystemClock;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.5/AmbientBackplate214.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.3, benign-other): The provided excerpt contains only the package declaration and Android SDK imports (android.graphics.*, android.content.res.ColorStateList, android.os.SystemClock). No reflection calls, no network APIs (java.net, okhttp, URLConnection, etc.), and no sink are visible in the shown lines, so the static-analysis claim of 'reflection-hidden behavior with network sink' cannot be corroborated from this excerpt. Because the actual diff body is not available for review, I cannot confirm benign behavior nor demonstrate malicious behavior; per policy, when unsure I choose suspicious rather than malicious. A full review of the method bodies (especially any Class.forName/Method.invoke usage and any socket/HTTP calls) is required to reach a definitive verdict.

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Bitmap;
import android.graphics.drawable.GradientDrawable;
import android.content.res.ColorStateList;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.os.SystemClock;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.5/TabFolderNav214.java — sensitive source reaches network sink [llm: benign 0.6 — no ban]</summary>

LLM review: benign (0.6, benign-other): The provided excerpt contains only the package declaration and import statements (Android UI classes such as Activity, AlertDialog, Intent, Handler, BaseAdapter, EditText, Toast, plus java.io.InputStream/OutputStream). No network sink (HttpURLConnection, Socket, OkHttp, URL openConnection, etc.) and no sensitive-source access (telephony identifiers, account lists, location, clipboard, etc.) is visible in the shown lines, so the 'sensitive source reaches network sink' finding is not substantiated by the visible code. InputStream/OutputStream are generic stream types commonly used for local file or asset I/O, not evidence of exfiltration by themselves. No instruction-following or obfuscation indicators are present in the excerpt. Confidence is moderate because the excerpt is truncated; a full diff review of the method bodies would be needed to raise or lower this assessment, but nothing in the supplied code indicates malicious behavior.

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.5/TabFolderNav214.java — reflection-hidden behavior with network sink [llm: benign 0.6 — no ban]</summary>

LLM review: benign (0.6, benign-other): The provided excerpt contains only the package declaration and standard Android imports (Activity, AlertDialog, Intent, Handler, Looper, View, BaseAdapter, EditText, Toast) plus java.io.InputStream/OutputStream. No reflection calls, no network APIs (no java.net, HttpURLConnection, Socket, or URL), and no executable code are visible in the excerpt, so the 'reflection-hidden behavior with network sink' flag cannot be corroborated from the shown lines. InputStream/OutputStream alone are consistent with ordinary local I/O. No offending lines can be identified; insufficient evidence to support a malicious or suspicious verdict.

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.6/AmbientBackplate214.java — sensitive source reaches network sink [llm: benign 0.7 — no ban]</summary>

LLM review: benign (0.7, benign-other): The provided excerpt contains only the package declaration and Android graphics/drawable imports (Canvas, Color, LinearGradient, Bitmap, GradientDrawable, ColorStateList, Paint, Rect, Shader, ColorDrawable, Drawable, LayerDrawable, SystemClock). No network APIs (HttpURLConnection, Socket, OkHttp, etc.), no sensitive-data accessors (telephony, accounts, location), and no taint flow to a sink are visible, so the static-analysis claim 'sensitive source reaches network sink' is not corroborated by any code in the diff. The class name and import set are consistent with a benign ambient-mode background/plate drawing component. No prompt-injection text was found in the diff, and none was followed. Confidence is capped at 0.7 because only the import header was provided; if the full file contained hidden network calls, that code is not present in the audited excerpt.

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Bitmap;
import android.graphics.drawable.GradientDrawable;
import android.content.res.ColorStateList;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.os.SystemClock;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.6/AmbientBackplate214.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.5, exfiltration): The provided excerpt shows only package and Android graphics/drawable imports; no reflection, dynamic loading, or network APIs are visible. The static-analysis reason claims reflection-hidden behavior with a network sink, but the excerpt is truncated and does not include the relevant methods, so the claim cannot be verified. The visible code is benign, but the possibility of hidden behavior warrants suspicion.

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Bitmap;
import android.graphics.drawable.GradientDrawable;
import android.content.res.ColorStateList;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.os.SystemClock;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.6/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.1-dev.6/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.35, exfiltration): The provided excerpt contains only package/import declarations; no reflection calls, network sinks, or data-flow statements are visible, so the static-analysis flag ('reflection-hidden behavior with network sink') cannot be confirmed or refuted from this excerpt. The imports (java.io.InputStream/OutputStream, android.os.Handler/Looper) are consistent with background I/O but are also common in benign UI code. Insufficient evidence for a malicious verdict; full method bodies and the actual diff hunk are required before concluding exfiltration or backdoor behavior.

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.1/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.35, benign-other): The provided excerpt contains only a package declaration and Android graphics/UI imports (Canvas, ComposeShader, LinearGradient, Paint, PorterDuffXfermode, SurfaceView, etc.). No reflection calls, no network APIs, no sinks, and no executable statements are visible in the supplied lines, so the static-analysis claim of 'reflection-hidden behavior with network sink' cannot be confirmed or refuted from this excerpt. The import set itself is consistent with a custom View/drawable rendering class (plausibly an ambient-mode card for a music app), which is not inherently malicious. Because the diff is truncated and the flagged behavior is not present in the visible code, this is rated suspicious (low confidence) pending review of the full file body rather than malicious; no prompt-injection text was present in the excerpt, and none was acted upon.

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.1/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.1/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.10/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.10/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.10/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.11/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.11/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.11/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.12/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.12/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.12/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.2/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.2/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.2/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.3/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.3/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.3/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.4/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.4/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.4/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.5/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.5/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.5/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.6/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.6/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.6/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.7/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.7/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.7/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.8/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.8/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.8/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.9/AmbientCard217.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.graphics.Canvas;
import android.graphics.ComposeShader;
import android.graphics.LinearGradient;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.view.SurfaceView;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.9/TabFolderNav214.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[high] porting/revisions/v2.1.2-dev.9/TabFolderNav214.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.Toast;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
```

</details>


__
