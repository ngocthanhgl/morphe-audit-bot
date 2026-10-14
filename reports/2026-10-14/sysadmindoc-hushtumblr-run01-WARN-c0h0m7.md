# SysAdminDoc/HushTumblr — 2026-10-14

Commit: 590b5edbb9193a8ea43c0d5724e3f77550abfc43 | Status: WARN | crit:0 high:0 med:7

<details>
<summary>[medium] extensions/tumblr/src/main/java/app/hushtumblr/extension/tumblr/settings/NativeControls.java — new non-allowlisted URL or IP</summary>

```
 * <p>Every path here was walked in Tumblr 46.5.0.109 and each step's string name read from that
 * build. Tumblr's server sends the labels of most switches on its Preferences screen (Best stuff
 * first, Hide timestamps, Suggested posts), so the build has no string for them: those rows stop at
 * the section heading the switch sits under, which the build does name. A path nobody has checked
 * would send people the wrong way, so a new row waits for its walk.
        // The gear on the account tab opens SettingsHubActivity, titled by settings_hub_title, and
        // its Preferences row opens SettingsPreferencesActivity.
        Step settings = new Step("settings_hub_title", "Settings");
        Step preferences = new Step("settings_hub_row_preferences", "Preferences");
        return Collections.unmodifiableList(Arrays.asList(
                new Control(L10n.t("Dashboard order and suggestions"),
                        L10n.t("Whether Following puts the best posts first, and which suggested posts Tumblr adds "
                            + "to your dashboard."),
                        settings, preferences, new Step("settings_preferences_section_content", "Content")),
                new Control(L10n.t("Autoplay"),
```

</details>

<details>
<summary>[medium] extensions/tumblr/src/main/java/app/hushtumblr/extension/tumblr/settings/SetupGuidancePreference.java — new non-allowlisted URL or IP</summary>

```
    /** Tumblr's article on resetting a password through its reset page. */
    private static final String PASSWORD_HELP = "https://help.tumblr.com/knowledge-base/resetting-your-password/";
    /** Tumblr's article on requesting an account's personal data, which it takes on its website only. */
    private static final String DATA_HELP = "https://help.tumblr.com/knowledge-base/manage-account-and-privacy-data/";
            paragraph(L10n.t(getContext(), "Tumblr's data export is separate from Export settings. To get a copy of your personal data, sign in on Tumblr's website with the account you're already using and ask for it in Settings, under Privacy. Tumblr's apps can't make that request. Exporting a blog's posts is a different Tumblr feature with its own help article."));

```

</details>

<details>
<summary>[medium] extensions/tumblr/src/main/java/app/hushtumblr/extension/tumblr/timeline/PageSource.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 HushTumblr contributors
 * https://github.com/SysAdminDoc/HushTumblr
 * SPDX-License-Identifier: GPL-3.0-only
 */
package app.hushtumblr.extension.tumblr.timeline;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

/**
 * Which of Tumblr's responses the page being filtered was parsed for, read off the call stack.
 *
```

</details>

<details>
<summary>[medium] extensions/tumblr/src/main/java/app/hushtumblr/extension/tumblr/timeline/TimelinePaging.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 HushTumblr contributors
 * https://github.com/SysAdminDoc/HushTumblr
 * SPDX-License-Identifier: GPL-3.0-only
 */
package app.hushtumblr.extension.tumblr.timeline;

import androidx.annotation.Nullable;

import java.util.Map;
import java.util.WeakHashMap;

import app.hushtumblr.extension.shared.Utils;
import app.hushtumblr.extension.shared.diagnostics.HookStatus;
import app.hushtumblr.extension.shared.settings.Setting;
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/timeline/TimelinePagingPatch.kt — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 HushTumblr contributors
 * https://github.com/SysAdminDoc/HushTumblr
 * SPDX-License-Identifier: GPL-3.0-only
 */
package app.morphe.patches.tumblr.timeline

import app.morphe.patcher.extensions.InstructionExtensions.addInstructionsWithLabels
import app.morphe.patcher.extensions.InstructionExtensions.getInstruction
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patcher.util.proxy.mutableTypes.MutableMethod
import app.morphe.patcher.util.smali.ExternalLabel
import app.morphe.patches.tumblr.lookup.fieldRef
import app.morphe.patches.tumblr.lookup.hasShape
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/DarkBackgroundPatch.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.patcher.StringComparisonType
import app.morphe.patches.tumblr.lookup.sameAs
import app.morphe.patches.tumblr.lookup.strings
import app.morphe.patches.tumblr.misc.extension.patchLog
import com.android.tools.smali.dexlib2.iface.instruction.OffsetInstruction
import com.android.tools.smali.dexlib2.iface.instruction.RegisterRangeInstruction
import com.android.tools.smali.dexlib2.iface.instruction.WideLiteralInstruction
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
internal const val DESIGN_PAGE_HOOK = "$DARK_BACKGROUND->designPage(J)J"
internal const val DESIGN_PANEL_HOOK = "$DARK_BACKGROUND->designPanel(J)J"
/**
 * The design system's surfaces, which Tumblr's newer layouts read in place of the palette attributes
 * above, that take the color. The Dark palette gives the first four one gray, `ds_colorGray95`
 * (#0d0d0d): the screen behind a design system page, the container behind content, and the side and
 * top menus. The last is the redesigned post card, the next gray up (`ds_colorGray90`, #1a1a1a). It
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/HideCommunitiesTabPatch.kt — new non-allowlisted URL or IP</summary>

```
 * Turns on the bottom bar hook's Communities switch and the extension's claim on
 * COMMUNITIES_TOOLTIPS. Once the bar is built, `BottomBarTabs` sets the Communities tab's button
 * GONE, and the feature switch hook answers off for the flag the post editor reads before it shows
 * its Communities tips.
 *
 * The tab stays in Tumblr's list, and its own flag, COMMUNITIES_TAB_BAR_ITEM, stays Tumblr's. With
 * that flag off RootActivity leaves the tab out of its list, and the bar's controller then never
 * runs the one method that decides the tab's button: the layout shows the button unless that
 * method hides it, so it stays on the bar with nothing behind it, and the tab's badge is never
 * looked up while the unread counts are still written to it. Found by reading Tumblr 46.5.0.109
 * (2026-10-13).
    dependsOn(settingsPatch, tumblrExtensionPatch, featureSwitchHookPatch, bottomBarTabsHookPatch)
        requireStatusMethod("communitiesTabButton")
        enableCapability("communitiesTabButton")

```

</details>


__
