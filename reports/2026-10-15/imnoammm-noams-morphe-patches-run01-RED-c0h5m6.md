# ImNoammm/Noams-Morphe-Patches — 2026-10-15

Commit: 49b62e415fe6efa595a3bfd69d70f55d6e4c7d36 | Status: RED | crit:0 high:5 med:6

<details>
<summary>[info] extensions/geocaching/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
extension {
    name = "extensions/geocaching.mpe"
}

android {
    namespace = "app.noam.extension.geocaching"
}

dependencies {
    // Provided by the target app at runtime, never bundled into the patched APK.
    compileOnly(libs.kotlin.stdlib)
    compileOnly(libs.annotation)
}

```

</details>

<details>
<summary>[medium] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcDescriptionView.java — new non-allowlisted URL or IP</summary>

```
package app.noam.extension.geocaching;

import android.content.Context;
import android.content.Intent;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.ImageDecoder;
import android.graphics.drawable.AnimatedImageDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Looper;
import android.text.Html;
import android.text.SpannableStringBuilder;
import android.text.Spanned;
```

</details>

<details>
<summary>[high] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcImageSave.java — reflection-hidden behavior with network sink</summary>

```
package app.noam.extension.geocaching;

import android.app.Activity;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.Menu;
import android.view.MenuItem;

import androidx.annotation.RequiresApi;

import java.io.InputStream;
import java.io.OutputStream;
```

</details>

<details>
<summary>[medium] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcLiveDetail.java — new non-allowlisted URL or IP</summary>

```
package app.noam.extension.geocaching;

import org.json.JSONObject;

import java.lang.reflect.Constructor;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Cache details from the cache's geocaching.com page. The page patterns are c:geo's
 * (connector/gc/GCConstants.java).
 */
public final class GcLiveDetail {
    private static final String PKG = "com.groundspeak.geocaching.intro.network.api.geocaches";

```

</details>

<details>
<summary>[medium] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcLiveSearch.java — new non-allowlisted URL or IP</summary>

```
package app.noam.extension.geocaching;

import org.json.JSONArray;
import org.json.JSONObject;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/** Map search through geocaching.com's own web search (/api/proxy/web/search/v2), the one c:geo uses. */
public final class GcLiveSearch {
    private static final String PKG = "com.groundspeak.geocaching.intro.network.api.geocaches";

```

</details>

<details>
<summary>[high] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcLiveSession.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
package app.noam.extension.geocaching;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.SharedPreferences;
import android.text.InputType;
import android.widget.EditText;
import android.widget.LinearLayout;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
```

</details>

<details>
<summary>[high] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcLiveSession.java — sensitive source reaches network sink</summary>

```
package app.noam.extension.geocaching;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.SharedPreferences;
import android.text.InputType;
import android.widget.EditText;
import android.widget.LinearLayout;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
```

</details>

<details>
<summary>[high] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcLiveSession.java — reflection-hidden behavior with network sink</summary>

```
package app.noam.extension.geocaching;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.SharedPreferences;
import android.text.InputType;
import android.widget.EditText;
import android.widget.LinearLayout;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
```

</details>

<details>
<summary>[medium] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcMapStyles.java — new non-allowlisted URL or IP</summary>

```
package app.noam.extension.geocaching;

import android.content.Context;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileOutputStream;
import java.nio.charset.StandardCharsets;

/**
 * Map layers for the app's own map type picker, all keyless: the Geocaching map for Trails, and
 * raster tiles for Street, Satellite, Terrain and Hybrid. The raster styles borrow the Geocaching
 * font source so cache markers and cluster counts draw the same on every layer.
```

</details>

<details>
<summary>[medium] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcOfflineStore.java — new non-allowlisted URL or IP</summary>

```
package app.noam.extension.geocaching;


import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileOutputStream;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
```

</details>

<details>
<summary>[high] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcUserStats.java — reflection-hidden behavior with network sink</summary>

```
package app.noam.extension.geocaching;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
```

</details>

<details>
<summary>[medium] extensions/geocaching/src/main/java/app/noam/extension/geocaching/GcWebDialog.java — decimal-encoded IP literal with network context: 4281019179, 4281019179</summary>

```
package app.noam.extension.geocaching;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.view.Gravity;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
```

</details>


__
