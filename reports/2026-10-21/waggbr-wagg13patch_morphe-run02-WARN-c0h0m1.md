# WaggBR/Wagg13Patch_Morphe — 2026-10-21

Commit: c4845792304d04f813c1e5053490de1306471144 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/NotificationsSimulator/NotificationsSimulatorPatch.kt — new non-allowlisted URL or IP</summary>

```
package app.morphe.patches.notificationssimulator


import app.morphe.patcher.patch.resourcePatch
import java.io.File

private const val PACKAGE_NAME = "com.xinesoft.notifications"
private const val TARGET_VERSION = "1.11.1"
private const val TELEGRAM_URL = "https://t.me/wagg13mods"
private const val CHANNEL_LABEL = "Channel Wagg13 Mods"

/** Localiza o bundle principal (o hash no nome muda a cada versão do app). */
private fun findBundle(assetsDir: File): File =
    assetsDir.listFiles { f -> f.isFile && f.name.startsWith("index-") && f.name.endsWith(".js") }
        ?.maxByOrNull { it.length() }
```

</details>


__
