# K8R8TO/kizu-morphe-patches — 2026-10-18

Commit: ee06cf127b942c0b16d22a8dc6471f99e60dd764 | Status: RED | crit:0 high:3 med:6

<details>
<summary>[medium] extensions/extension/src/main/java/app/morphe/extension/settings/UyuSettingsFragment.java — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.settings;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.preference.Preference;
import android.preference.PreferenceFragment;
import android.preference.PreferenceGroup;
import android.preference.PreferenceScreen;
import android.preference.SwitchPreference;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/morphe/extension/twitch/emotes/EmotePickerImages.java — typosquat of allowlisted domain: https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic)</summary>

```
package app.morphe.extension.twitch.emotes;

import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewTreeObserver;
import android.widget.ImageView;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.WeakHashMap;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/morphe/extension/twitch/emotes/EmotePickerRuntime.java — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.twitch.emotes;

import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public final class EmotePickerRuntime {
    private static final String PREFIX = "twitchpatches-picker:";
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/morphe/extension/twitch/emotes/EmoteProviderIcons.java — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.twitch.emotes;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.PixelFormat;
import android.graphics.drawable.Drawable;
import android.os.Handler;
import android.os.Looper;
import android.widget.ImageView;
import java.util.WeakHashMap;

final class EmoteProviderIcons {
    private static final String[] NAMES = {"bttv", "7tv", "ffz"};
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/morphe/extension/twitch/emotes/NativeEmoteCatalog.java — typosquat of allowlisted domain: https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic) [llm: benign 0.72 — no ban]</summary>

```
package app.morphe.extension.twitch.emotes;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import java.io.File;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;

```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/io/github/bakwudo/uyu/extension/settings/UyuSettingsFragment.java — new non-allowlisted URL or IP</summary>

```
package io.github.bakwudo.uyu.extension.settings;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.preference.Preference;
import android.preference.PreferenceFragment;
import android.preference.PreferenceGroup;
import android.preference.PreferenceScreen;
import android.preference.SwitchPreference;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/io/github/bakwudo/uyu/patches/twitch/emotes/EmotePreviewPatch.kt — new non-allowlisted URL or IP</summary>

```
package io.github.bakwudo.uyu.patches.twitch.emotes

import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.patch.resourcePatch
import app.morphe.patcher.util.proxy.mutableTypes.MutableMethod.Companion.toMutable
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.builder.MutableMethodImplementation
import com.android.tools.smali.dexlib2.immutable.ImmutableMethod
import com.android.tools.smali.dexlib2.immutable.ImmutableMethodParameter
import io.github.bakwudo.uyu.patches.twitch.shared.Constants.COMPATIBILITY_TWITCH
import io.github.bakwudo.uyu.patches.twitch.shared.sharedExtensionPatch
import io.github.bakwudo.uyu.patches.twitch.shared.references
import io.github.bakwudo.uyu.patches.twitch.shared.isInstance
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/io/github/bakwudo/uyu/patches/twitch/emotes/NativePickerHooks.kt — typosquat of allowlisted domain: https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic)</summary>

```
package io.github.bakwudo.uyu.patches.twitch.emotes

import app.morphe.patcher.patch.BytecodePatchContext
import com.android.tools.smali.dexlib2.iface.ClassDef
import com.android.tools.smali.dexlib2.iface.Method
import com.android.tools.smali.dexlib2.iface.reference.FieldReference
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.instruction.OneRegisterInstruction
import com.android.tools.smali.dexlib2.iface.reference.TypeReference
import com.android.tools.smali.dexlib2.Opcode
import io.github.bakwudo.uyu.patches.twitch.shared.*

internal const val CHANNEL_ID = "Ltv/twitch/android/models/Tuid;"
internal const val PICKER_RUNTIME = "Lapp/morphe/extension/twitch/emotes/EmotePickerRuntime;"
```

</details>

<details>
<summary>[medium] twitch-build/UyuSettingsFragment.java — new non-allowlisted URL or IP</summary>

```
package io.github.bakwudo.uyu.extension.settings;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.preference.Preference;
import android.preference.PreferenceFragment;
import android.preference.PreferenceGroup;
import android.preference.PreferenceScreen;
import android.preference.SwitchPreference;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
```

</details>


__
