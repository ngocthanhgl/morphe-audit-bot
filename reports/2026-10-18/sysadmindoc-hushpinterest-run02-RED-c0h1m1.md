# SysAdminDoc/HushPinterest — 2026-10-18

Commit: ba6b8f3382ba6680dc18086799310b6915c6631c | Status: RED | crit:0 high:1 med:1

<details>
<summary>[high] extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/actions/CopyImage.java — sensitive source reaches network sink</summary>

```
/*
 * Original HushPinterest implementation, 2026.
 * Copyright 2026 HushPinterest contributors
 * https://github.com/SysAdminDoc/HushPinterest
 * SPDX-License-Identifier: GPL-3.0-only
 */
package app.hushpinterest.extension.pinterest.actions;

import android.content.ClipData;
import android.content.ClipDescription;
import android.content.ClipboardManager;
import android.content.Context;
import android.net.Uri;
import android.os.Build;

```

</details>

<details>
<summary>[medium] extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/settings/HushPinterestPreferenceFragment.java — new non-allowlisted URL or IP</summary>

```
    /** Pinterest's Gen AI interests page: `homefeed/edit/gen_ai_topics` opens the tuner on that tab (14.41.0). */
    static final String GEN_AI_INTERESTS_URL = "https://www.pinterest.com/homefeed/edit/gen_ai_topics";
                // Its own switch on the same list hook, so a build where that hook didn't go in has no row for it.
                if (PatchFamily.Capability.FEED_AI_PINS.installed()) {
                    feed.addPreference(mark(toggle(context, Settings.HIDE_AI_SELF_DESCRIBED, L10n.t("Hide pins that say they're AI"),
                            L10n.t("Removes pins without the label whose title or description calls them AI art, "
                                + "or that come from an AI image site. It goes by their words, so some still show.")),
                            SettingsIcons.BLOCK));
                }
                // Pinterest's Gen AI interests cut AI pins where they're picked, before any list reaches the hook.
                feed.addPreference(mark(pinterestAiSetting(context), SettingsIcons.OPENING));
            patchToggle(feed, context, build, PatchFamily.FILTER_FEED, Settings.HIDE_VIDEO_PINS,
                    L10n.t("Hide video pins"), L10n.t("Removes pins that play a video from your home feed, search, "
                        + "related pins and boards. Photos and GIFs stay."), SettingsIcons.BLOCK);
            // A list rather than a switch, on Filter feed's hook: no row where that capability didn't go in.
```

</details>


__
