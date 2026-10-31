# SysAdminDoc/hushfeed — 2026-10-31

Commit: a3a2794ad886ee26fe47bf177a4a600ac3be7a46 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[info] extensions/tiktok/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    implementation(libs.jump3r)

```

</details>

<details>
<summary>[high] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/comment/StickerCreator.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.72, exfiltration): The file imports ImageDecoder and BitmapFactory alongside standard Android graphics APIs, but the excerpt is truncated. Reflection-based or network-sink behavior cannot be confirmed from this snippet alone. The presence of a third-party extension package under a suspicious repo name (hushfeed) warrants caution, but without full code context I cannot meet the 0.85 confidence threshold for a malicious verdict. Suspicious classification is appropriate.

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 */
package app.morphe.extension.tiktok.comment;

import android.app.Activity;
import android.app.Fragment;
import android.content.ContentResolver;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.ImageDecoder;
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/preference/LicenseNotice.java — new non-allowlisted URL or IP</summary>

```
            "Morphe, which hard forked ReVanced. A few build files, among them the list of\n" +
            "supported TikTok builds and the patch list generator, reached\n" +
            "tiktok-patches-for-morphe from De-Vanced, which is licensed under the GNU\n" +
            "General Public License v3.0 too. The notices below are reproduced from those\n" +
            "  De-Vanced               https://github.com/RookieEnough/De-Vanced\n" +
            "SPDX-License-Identifier: Unicode-3.0\n" +
            "\n" +
            "jump3r (LAME)\n" +
            "\n" +
            "Copyright The LAME project, Ken Handel, Vadym Vikulin and Hanns Holger Rutz\n" +
            "Source: https://git.iem.at/sciss/jump3r (also https://central.sonatype.com/artifact/de.sciss/jump3r/1.0.5)\n" +
            "GNU LESSER GENERAL PUBLIC LICENSE, Version 2.1 or later\n" +
            "https://www.gnu.org/licenses/lgpl-2.1.txt\n" +
            "\n" +
            "The MP3 choice under Sound format uses jump3r 1.0.5, a Java port of the LAME MP3\n" +
```

</details>


__
