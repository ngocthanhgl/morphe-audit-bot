# SysAdminDoc/HushTelegram — 2026-11-08

Commit: 57341b8b31a789da562ed8496adc6c24eb36ef8e | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] extensions/telegram/src/main/java/app/hushtelegram/extension/telegram/misc/FolderIconData.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 HushTelegram contributors
 * https://github.com/SysAdminDoc/HushTelegram
 *
 * Icon path data from https://github.com/phosphor-icons/core (MIT, copyright 2023 Phosphor Icons).
 */
package app.hushtelegram.extension.telegram.misc;

/**
 * Folder icons from Phosphor Icons (https://github.com/phosphor-icons/core), MIT licensed, copyright 2023 Phosphor
 * Icons, in three weights. Each is the path data of the icon's 256 by 256 drawing, filled. Generated
 * from the upstream SVG files; see provenance.json.
 */
final class FolderIconData {
    private FolderIconData() {}
```

</details>

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    compileOnly("com.github.MorpheApp:ARSCLib:675bed2de3")
    testImplementation("com.github.MorpheApp:ARSCLib:675bed2de3")

```

</details>


__
