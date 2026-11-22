# mvaishak/letterboxd-morphe-patches — 2026-11-22

Commit: abade00ac9c8aea52425739fd4b7e11ef1164c38 | Status: WARN | crit:0 high:0 med:7

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/alerts/ReleaseAlerts.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.alerts;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.util.Log;
import android.util.LruCache;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/settings/ExternalRatingsUi.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.settings;

import android.content.Intent;
import android.net.Uri;
import android.text.InputType;
import android.view.View;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;

import app.template.extension.ui.ThemedDialogPanel;
import app.template.extension.watch.ExternalRatings;

/** Setup and source choices share the film dialogs' active surface and accent. */
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/watch/ExternalRatings.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.watch;

import android.content.Context;
import android.util.AtomicFile;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.KeyStore;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/watch/JustWatch.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.watch;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.net.Uri;
import android.net.Network;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.util.LruCache;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/watch/WatchAlerts.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.watch;

import android.Manifest;
import android.app.Activity;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.job.JobInfo;
import android.app.job.JobScheduler;
import android.content.ComponentName;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.Intent;
import android.content.SharedPreferences;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/watch/WatchScreen.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.watch;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/letterboxd/RatingLogos.kt — new non-allowlisted URL or IP</summary>

```
package app.template.patches.letterboxd

// Brand glyphs from Simple Icons (CC0).
internal val ratingLogos = mapOf(
"imdb" to """<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="24dp" android:height="24dp" android:viewportWidth="24" android:viewportHeight="24"><path android:fillColor="#F5C518" android:pathData="M22.3781 0H1.6218C.7411.0583.0587.7437.0018 1.5953l-.001 20.783c.0585.8761.7125 1.543 1.5559 1.6191A.337.337 0 0 0 1.6016 24h20.7971a.4579.4579 0 0 0 .0437-.002c.8727-.0768 1.5568-.8271 1.5568-1.7085V1.7098c0-.8914-.696-1.6416-1.584-1.7078A.3294.3294 0 0 0 22.3781 0zm0 .496a1.2144 1.2144 0 0 1 1.1252 1.2139v20.5797c0 .6377-.4875 1.1602-1.1045 1.2145H1.6016c-.5967-.0543-1.0645-.5297-1.1053-1.1258V1.6284C.5371 1.0185 1.0184.5364 1.6217.496h20.7564zM4.7954 8.2603v7.3636H2.8899V8.2603h1.9055zm6.5367 0v7.3636H9.6707v-4.9704l-.6711 4.9704H7.813l-.6986-4.8618-.0066 4.8618h-1.668V8.2603h2.468c.0748.4476.1492.9694.2307 1.5734l.2712 1.8713.4407-3.4447h2.4817zm2.9772 1.3289c.0742.0404.122.108.1417.2034.0279.0953.0345.3118.0345.6442v2.8548c0 .4881-.0345.7867-.0955.8954-.0609.1152-.2304.1695-.5018.1695V9.5211c.204 0 .3457.0205.4211.0681zm-.0211 6.0347c.4543 0 .8006-.0265 1.0245-.0742.2304-.0477.4204-.1357.5694-.2648.1556-.1218.2642-.298.3251-.5219.0611-.2238.1021-.6648.1021-1.3224v-2.5832c0-.6986-.0271-1.1668-.0742-1.4039-.041-.237-.1431-.4543-.3126-.6437-.1695-.1973-.4198-.3324-.7456-.421-.3191-.0808-.8542-.1285-1.7694-.1285h-1.4244v7.3636h2.3051zm5.14-1.7827c0 .3523-.0199.5762-.0544.6708-.033.0947-.1894.1424-.3046.1424-.1086 0-.19-.0477-.2238-.1351-.041-.0887-.0609-.2986-.0609-.6238v-1.9469c0-.3324.0199-.5423.0543-.6237.0338-.0808.1086-.122.2171-.122.1153 0 .2709.0412.3114.1425.041.0947.0609.2986.0609.6032v1.8926zm-2.4747-5.5809v7.3636h1.7157l.1152-.4675c.1556.1894.3251.3324.5152.4271.1828.0881.4608.1357.678.1357.3047 0 .5629-.0748.7802-.237.2165-.1562.3589-.3462.4198-.5628.0543-.2173.0887-.543.0887-.9841v-2.0675c0-.4409-.0139-.7324-.0344-.8681-.0199-.1357-.0742-.2781-.1695-.4204-.1021-.1425-.2437-.251-.4272-.3325-.1834-.0742-.3999-.1152-.6576-.1152-.2172 0-.4952.0477-.6846.1285-.1835.0887-.353.2238-.5086.4007V8.2603h-1.8309z" /></vector>""",
"tomatoes" to """<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="24dp" android:height="24dp" android:viewportWidth="32" android:viewportHeight="32"><path android:fillColor="#FA320A" android:pathData="M16,8C3,3 0,15 4,24C8,33 26,33 29,23C33,12 25,4 16,8Z"/><path android:fillColor="#32A343" android:pathData="M15,10L6,7L13,6L11,1L17,5L23,2L21,7L28,8L20,11L18,15L15,11L9,13Z"/></vector>""",
// Popcorn bucket for the Rotten Tomatoes audience score; distinct from the critic tomato.
"popcorn" to """<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp" android:height="24dp" android:viewportWidth="32" android:viewportHeight="32">
    <path android:fillColor="#FFE59A" android:pathData="M5,13C2,8 6,5 10,7C9,1 17,0 19,5C24,1 29,6 26,10C31,11 28,17 24,16L7,17Z" />
    <path android:fillColor="#FFFFFF" android:pathData="M5,13L27,13L24,30L8,30Z" />
    <path android:fillColor="#FA320A" android:pathData="M5,13L10,13L12,30L8,30ZM14,13L18,13L18,30L14,30ZM22,13L27,13L24,30L20,30Z" />
    <path android:fillColor="#FA320A" android:pathData="M5,13L27,13L27,15L5,15Z" />
</vector>""",
"metacritic" to """<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="24dp" android:height="24dp" android:viewportWidth="24" android:viewportHeight="24"><path android:fillColor="#FFCC33" android:pathData="M11.99 0A12 12 0 1 0 24 12v-.014A12 12 0 0 0 11.99 0Zm-.055 2.564a9.399 9.399 0 0 1 9.407 9.389v.01a9.399 9.399 0 1 1-9.408-9.399Zm-1.61 17.198 2.046-2.046-3.94-3.94c-.165-.166-.345-.373-.442-.608-.221-.47-.318-1.203.221-1.742.664-.664 1.548-.387 2.406.47l3.788 3.788 2.046-2.046-3.954-3.954a2.48 2.48 0 0 1-.456-.622c-.263-.539-.25-1.216.235-1.7.677-.678 1.562-.429 2.544.553l3.677 3.677 2.046-2.046-3.982-3.982c-2.018-2.018-3.912-1.949-5.212-.65-.498.499-.802 1.024-.954 1.618a4.026 4.026 0 0 0-.055 1.686l-.027.028c-.996-.414-2.13-.166-3 .705-1.162 1.161-1.12 2.392-.982 3.11l-.042.043-1.009-.816-1.77 1.77a64.1 64.1 0 0 1 2.213 2.1z" /></vector>""",
```

</details>


__
