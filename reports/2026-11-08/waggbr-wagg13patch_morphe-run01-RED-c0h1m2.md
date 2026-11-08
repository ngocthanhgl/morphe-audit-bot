# WaggBR/Wagg13Patch_Morphe — 2026-11-08

Commit: 9f4b51f538ec6bd7e02bf0aa38a9f26d6ac6b6bc | Status: RED | crit:0 high:1 med:2

<details>
<summary>[medium] extensions/extension/src/main/java/app/morphe/extension/Tinder/TinderTelegramRow.java — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.tinder.patches;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.TextView;

/**
 * Adds the Telegram row to Tinder's Legal settings section, directly below the
 * Terms of Service row.
 *
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/morphe/extension/instants/InstantsSaveImage.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.75, backdoor): The diff modifies InstantsSaveImage.java to use reflection to hide network-related behavior (e.g., saving images to a remote sink) while preserving existing method signatures. Imports of Handler, Looper, MediaStore, and Toast alongside a comment mentioning 'reflection-hidden behavior with network sink' indicate an attempt to create a covert channel for data exfiltration or remote control. Without seeing the full implementation, the pattern matches known backdoor techniques rather than benign functionality.

```
package app.morphe.extension.instants;

import android.app.Activity;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.provider.MediaStore;
import android.util.Log;
import android.widget.Toast;

import java.io.InputStream;
```

</details>

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    // ARSCLib for resource handling; the patches library provides helpers/addResources.
    compileOnly("com.github.REAndroid:ARSCLib:a28c6fb2a7")
    implementation(libs.morphe.patches.library)

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/Instaprime/Custumer/instaprimeabout.kt — new non-allowlisted URL or IP</summary>

```
package app.morphe.patches.instaprime.premium

import app.morphe.patcher.extensions.InstructionExtensions.addInstructionsWithLabels
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.util.proxy.mutableTypes.MutableMethod
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.builder.MutableMethodImplementation
import com.android.tools.smali.dexlib2.immutable.ImmutableMethod
import com.android.tools.smali.dexlib2.immutable.ImmutableMethodParameter

private const val CATEGORY = "Lcom/primemods/ui/preferences/base/BasePreferenceCategory;"
private const val INFO_PREF_NAME = "com.primemods.ui.preferences.base.BaseInfoPreference"
private const val BASE_PREF_NAME = "com.primemods.ui.preferences.base.BasePreference"

// ---- textos novos ----
```

</details>

<details>
<summary>[info] patches/src/main/resources/instagram/icon/drawable-nodpi/rex_clean_launcher_bg.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
