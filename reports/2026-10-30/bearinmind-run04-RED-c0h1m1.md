# bearinmindcat/morphe-patches — 2026-10-30

Commit: 32e42e0f757581147307af27196e3aca517d0570 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[info] docs/icons/pdfcraft.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] extensions/waze/src/main/java/org/ungoogled/waze/OsmCameras.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

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
<summary>[medium] extensions/waze/src/main/java/org/ungoogled/waze/OsmCameras.java — dangerous permission plus network sink in same file</summary>

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
