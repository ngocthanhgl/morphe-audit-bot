# Alastor-Kaneki/Morphe-Patches — 2026-10-15

Commit: 709948a8f7a60e6758a6bd5a1f1ff24e058f7c2c | Status: RED | crit:0 high:2 med:3

<details>
<summary>[high] extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditCurrentPost.java — reflection-hidden behavior with network sink</summary>

```
package dev.alastorkaneki.morphe.extension.reddit;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayDeque;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditGalleryActivity.java — new non-allowlisted URL or IP</summary>

```
package dev.alastorkaneki.morphe.extension.reddit;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditGalleryOverlayController.java — new non-allowlisted URL or IP</summary>

```
package dev.alastorkaneki.morphe.extension.reddit;

import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.RippleDrawable;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditGalleryResolver.java — new non-allowlisted URL or IP</summary>

```
package dev.alastorkaneki.morphe.extension.reddit;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditShareLink.java — sensitive source reaches network sink [llm: benign 0.95 — no ban]</summary>

```
package dev.alastorkaneki.morphe.extension.reddit;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/** Detect Reddit's /r/community/s/TOKEN native share links, then safely follow redirects. */
public final class RedditShareLink {
    private static final Pattern SHORT_SHARE = Pattern.compile(
        "(?i)(?:https?://)?(?:(?:www|m|old|sh)\\.)?reddit\\.com/" +
        "r/[a-z0-9_]+/s/[a-z0-9_-]{4,60}(?:[/?#][^\\s]*)?"
    );
```

</details>


__
