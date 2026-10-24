# Santodan/santodan-patches — 2026-10-24

Commit: c083eac72d05dbc6b6975d1472cbb9cbef98fde6 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/santodan/patches/NuvioStartupResources.kt — new non-allowlisted URL or IP</summary>

```
package santodan.patches

import app.morphe.patcher.patch.resourcePatch
import org.w3c.dom.Document
import org.w3c.dom.Element
import software.santodan.nuvio.NuvioNative

/** Original beta.8 resource 0x7f08011f is stored as res/0n.xml. */
val nuvioStartupResourcesPatch = resourcePatch(default = false) {
    execute {
        document("AndroidManifest.xml").use {
            check(it.documentElement.getAttribute("android:versionName") == NuvioNative.VERSION)
            configureNuvioStartupManifest(it)
        }
        document("res/0n.xml").use { addNuvioLaunchLogo(it) }
```

</details>


__
