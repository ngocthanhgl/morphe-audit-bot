# sqzass/patches — 2026-11-05

Commit: 558952a37990d9494d86134649e343557c5bd146 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/sqzass/patches/shared/Constants.kt — new non-allowlisted URL or IP</summary>

```
package app.sqzass.patches.shared

import app.morphe.patcher.patch.ApkFileType
import app.morphe.patcher.patch.AppTarget
import app.morphe.patcher.patch.Compatibility
import app.morphe.patcher.patch.SupportedAbi

object Constants {

val AAAD_COMPATIBILITY = Compatibility(
        name = "AAAD",
        packageName = "sksa.aa.customapps",
        apkFileType = ApkFileType.APK,
        appIconColor = 0x1A73E8,
        targets = listOf(
```

</details>


__
