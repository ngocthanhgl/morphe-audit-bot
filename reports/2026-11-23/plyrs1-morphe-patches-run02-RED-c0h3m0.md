# Plyrs1/morphe-patches — 2026-11-23

Commit: 88448995bb1d3cc14f7c5f04884960322d6ebe05 | Status: RED | crit:0 high:3 med:0

<details>
<summary>[high] extensions/extension/src/main/java/app/plyrs1/extension/TrackingControlHelper.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.55, exfiltration): The excerpt only shows imports, including Location/LocationManager and OutputStream, which could support sensitive data handling and output, but no network sink or data flow is visible. The static-analysis reason claims a sensitive source reaches a network sink, but the provided code does not demonstrate it. Without the full method bodies, malicious intent cannot be confirmed; suspicious pending full diff review.

```
package app.plyrs1.extension;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.location.Location;
import android.location.LocationManager;
import android.os.Build;
import android.util.Log;

import java.io.OutputStream;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/plyrs1/extension/TrackingControlHelper.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.55, spyware): The provided excerpt contains only the package declaration and imports, so no executable behavior can be confirmed. However, the import set is consistent with the static-analysis flag: android.location.Location and android.location.LocationManager (location collection), java.io.OutputStream (a raw sink that could be a network socket stream), plus Notification/PendingIntent/BroadcastReceiver machinery that could be used to persist or trigger hidden behavior, and the class name 'TrackingControlHelper' itself implies tracking functionality. Because the actual method bodies, any reflection calls, and the destination of the OutputStream are not visible in the excerpt, there is no concrete offending line to cite and confidence is below the malicious threshold. Recommend a full-file review focusing on: (1) any Class.forName/Method.invoke reflection that hides API calls, (2) where the OutputStream is obtained (Socket/HttpURLConnection vs. local file), and (3) whether LocationManager updates are read and written out. Verdict set to suspicious rather than malicious due to insufficient evidence.

```
package app.plyrs1.extension;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.location.Location;
import android.location.LocationManager;
import android.os.Build;
import android.util.Log;

import java.io.OutputStream;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/plyrs1/extension/TrackingControlHelper.java — sensitive data handoff to explicit external package</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package app.plyrs1.extension;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.location.Location;
import android.location.LocationManager;
import android.os.Build;
import android.util.Log;

import java.io.OutputStream;
```

</details>


__
