# SysAdminDoc/HushTumblr — 2026-10-13

Commit: efd37879773a55c66cb43bb31dc869ae92f34c8f | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[info] assets/settings-preview.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/hushtumblr/extension/shared/settings/preference/ReportProblem.java — new non-allowlisted URL or IP</summary>

```
/*
 * Forked from https://github.com/SysAdminDoc/HushPinterest at 44fb933 (GPL-3.0),
 * modified for HushTumblr (Tumblr), 2026.
 *
 * Copyright 2026 HushPinterest contributors
 * https://github.com/SysAdminDoc/HushPinterest
 *
 * Built on SysAdminDoc/hushfeed (GPL-3.0).
 */
package app.hushtumblr.extension.shared.settings.preference;

import android.os.Build;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/misc/settings/LogoLongPress.kt — new non-allowlisted URL or IP</summary>

```
/*
 * Written for HushTumblr (Tumblr), 2026, after the settings logo long press in
 * https://github.com/SysAdminDoc/HushPinterest (GPL-3.0), itself after
 * https://github.com/SysAdminDoc/Hushfacebook (GPL-3.0).
 *
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.patches.tumblr.misc.settings

import app.morphe.patcher.extensions.InstructionExtensions.addInstruction
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patches.tumblr.lookup.instructionList
import app.morphe.patches.tumblr.lookup.methodRef
import app.morphe.patches.tumblr.lookup.mutableOf
```

</details>


__
