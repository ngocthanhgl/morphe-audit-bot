# Santodan/santodan-patches — 2026-10-15

Commit: 97d421527bda931054597649652ef3a7c7510526 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/santodan/patches/FirstDescendantVisibilityPatch.kt — new non-allowlisted URL or IP</summary>

```
package santodan.patches

import app.morphe.patcher.patch.resourcePatch
import org.w3c.dom.Document
import org.w3c.dom.Element

internal const val TFD_VISIBILITY_NAME = "TFD Companion - Remove illegal apps detection"
private const val ANDROID_NS = "http://schemas.android.com/apk/res/android"
private val broadActions = setOf("android.intent.action.MAIN", "android.intent.action.VIEW")

/** Restrict package enumeration inputs without changing the native security engine. */
@Suppress("unused")
val firstDescendantVisibilityPatch = resourcePatch(
    name = TFD_VISIBILITY_NAME,
    description = "Removes broad MAIN/VIEW package queries while preserving specific app integrations. " +
```

</details>


__
