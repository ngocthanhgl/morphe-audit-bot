# bearinmindcat/morphe-patches — 2026-10-12

Commit: fd2d053c56e2012be2462a2d85e7ab1a0e837190 | Status: RED | high:1 med:1

<details>
<summary>[high] extensions/extension/src/main/java/org/ungoogled/ui/WazeAlerts.java — sensitive source reaches network sink</summary>

```
package org.ungoogled.ui;

import android.app.Activity;
import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/org/ungoogled/ui/WazeAlerts.java — dangerous permission plus network sink in same file</summary>

```
package org.ungoogled.ui;

import android.app.Activity;
import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
```

</details>


__
