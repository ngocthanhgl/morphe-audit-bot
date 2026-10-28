# bearinmindcat/morphe-patches — 2026-10-28

Commit: 5fb861e829f9fec1956dbdb62da562ffc2b087f9 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[info] docs/icons/samsung-sound-assistant.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] extensions/waze/src/main/java/org/ungoogled/waze/Flock.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.6, exfiltration): The static-analysis reason indicates that sensitive source may reach a network sink, but the provided excerpt only shows imports and not the actual sink or data flow. This is insufficient to confirm malicious behavior, so the finding should be treated as suspicious pending further review.

```
package org.ungoogled.waze;

import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
```

</details>

<details>
<summary>[medium] extensions/waze/src/main/java/org/ungoogled/waze/Flock.java — dangerous permission plus network sink in same file</summary>

```
package org.ungoogled.waze;

import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
```

</details>


__
