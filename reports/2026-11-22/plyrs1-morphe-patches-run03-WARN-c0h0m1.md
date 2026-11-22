# Plyrs1/morphe-patches — 2026-11-22

Commit: 93bcb078004e076dd46cf16fa9dededc85a71468 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/plyrs1/patches/com_gajihub_app/DisableRemoteUpdatesPatch.kt — new non-allowlisted URL or IP</summary>

```
package app.plyrs1.patches.com_gajihub_app

import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import app.plyrs1.patches.shared.Constants.COMPATIBILITY_GAJIHUB
import org.w3c.dom.Element

/**
 * Resource modifications for Disable Remote Updates:
 * - Rewrites CodePushServerUrl in res/values/strings.xml to loopback
 * - Clears CodePushDeploymentKey in res/values/strings.xml
 */
private val disableRemoteUpdatesResourcePatch = resourcePatch(
    name = null,
```

</details>


__
