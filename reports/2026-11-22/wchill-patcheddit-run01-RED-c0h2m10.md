# wchill/patcheddit — 2026-11-22

Commit: 982428f4189a3af54c27d16f9bee3a5601531ca1 | Status: RED | crit:0 high:2 med:10

<details>
<summary>[info] extensions/boost/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    compileOnly(libs.androidx.preference.boost)
    compileOnly(libs.okhttp.boost)
    testImplementation(libs.okhttp.boost)

```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/media/InlineMedia.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.boost.media;

import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextUtils;
import android.text.style.URLSpan;
```

</details>

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/utils/ImageSearchMenu.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.boost.utils;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
```

</details>

<details>
<summary>[info] extensions/boost/stub/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    compileOnly(libs.okhttp.boost)

```

</details>

<details>
<summary>[medium] extensions/redditisfun/src/main/java/app/morphe/extension/redditisfun/media/InlineMedia.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.redditisfun.media;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.Build;
```

</details>

<details>
<summary>[high] extensions/redditisfun/src/main/java/app/morphe/extension/redditisfun/media/MediaLoader.java — sensitive source reaches network sink [llm: benign 0.75 — no ban]</summary>

LLM review: benign (0.75, benign-other): The provided excerpt contains only the package declaration and standard Android graphics/context imports. No sensitive data source, network sink, or data-flow behavior is shown, so the static-analysis reason is not supported by the visible code.

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.redditisfun.media;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.ImageDecoder;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
```

</details>

<details>
<summary>[medium] extensions/relay/src/main/java/app/morphe/extension/relay/media/InlineMedia.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.relay.media;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import android.text.Layout;
```

</details>

<details>
<summary>[medium] extensions/relay/src/main/java/app/morphe/extension/relay/media/MediaLinks.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.relay.media;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Locale;

public final class MediaLinks {
```

</details>

<details>
<summary>[high] extensions/relay/src/main/java/app/morphe/extension/relay/media/MediaViewer.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.3, benign-other): The supplied excerpt contains only the copyright header, package declaration, and import statements (android.util.Log, java.io stream classes, java.net.InetAddress). No actual code is visible, so the static-analysis claim that a sensitive source reaches a network sink cannot be verified or refuted. Imports alone are not evidence of malicious behavior, and no prompt-injection content was observed in the excerpt. Per policy, when unsure I choose suspicious rather than malicious; a full diff of MediaViewer.java is required for a definitive verdict.

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.relay.media;

import android.util.Log;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.InetAddress;
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/fixes/links/RelativeMarkdownLinks.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.shared.fixes.links;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayDeque;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/fixes/media/CommentVideoLinks.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.shared.fixes.media;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.regex.Matcher;
```

</details>

<details>
<summary>[info] extensions/youtube/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
dependencies {
    implementation(libs.youtube.player) {
        isTransitive = false
    }
    implementation(kotlin("stdlib"))
    compileOnly(libs.annotation)
    testImplementation("junit:junit:4.13.2")
}

```

</details>

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
val youtubePlayerResources by configurations.creating
    youtubePlayerResources(variantOf(libs.youtube.player) { artifactType("aar") }) {
        isTransitive = false
    }
    implementation(libs.morphe.patches.library) {
        // The library still requests the older smali hash, which Gradle sorts above the patcher's.
        exclude(group = "com.github.MorpheApp.smali", module = "smali")
    }
val prepareYoutubePlayerResources by tasks.registering(Sync::class) {
    from({ zipTree(youtubePlayerResources.singleFile) }) {
        include("res/raw/ayp_youtube_player.html")
        eachFile {
            path = "youtube/raw/patcheddit_youtube_player.html"
        }
        includeEmptyDirs = false
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/reddit/customclients/boostforreddit/fix/video/FixCommentVideoLinksPatch.kt — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.patches.reddit.customclients.boostforreddit.fix.video

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.patch.mutableClassDefBy
import app.morphe.patches.reddit.customclients.AppCompatibility
import app.morphe.patches.reddit.customclients.COMMENT_VIDEO_LINKS
import app.morphe.patches.reddit.customclients.ExtensionPatches
import app.morphe.patches.reddit.customclients.fixCommentVideoLinksPatch
import app.morphe.patches.reddit.customclients.wrapMorpheHook
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/reddit/customclients/joey/fix/video/FixCommentVideoLinksPatch.kt — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.patches.reddit.customclients.joey.fix.video

import app.morphe.patcher.Fingerprint
import app.morphe.patches.reddit.customclients.AppCompatibility
import app.morphe.patches.reddit.customclients.COMMENT_VIDEO_LINKS
import app.morphe.patches.reddit.customclients.ExtensionPatches
import app.morphe.patches.reddit.customclients.fixCommentVideoLinksPatch
import app.morphe.patches.reddit.customclients.wrapMorpheHook

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/reddit/customclients/sync/syncforreddit/fix/links/FixRelativeMarkdownLinksPatch.kt — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.patches.reddit.customclients.sync.syncforreddit.fix.links

import app.morphe.patcher.patch.classDefForEach
import app.morphe.patcher.patch.mutableClassDefBy
import app.morphe.patches.reddit.customclients.AppCompatibility
import app.morphe.patches.reddit.customclients.ExtensionPatches
import app.morphe.patches.reddit.customclients.RELATIVE_MARKDOWN_LINKS
import app.morphe.patches.reddit.customclients.fixRelativeMarkdownLinksPatch
import app.morphe.patches.reddit.customclients.wrapMorpheHook
```

</details>

<details>
<summary>[info] test/device/media/inline-animation.gif — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] test/device/media/inline-animation.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] test/device/media/inline-audio.m4a — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] test/device/media/inline-video.mp4 — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] test/device/media/inline-video.ts — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
