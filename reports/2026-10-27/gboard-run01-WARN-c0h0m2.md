# jasonwu1994/Gboard-patches — 2026-10-27

Commit: 2eb71854accc7e906d3e4f5495b2a54ed1e2af47 | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[medium] extensions/extension/src/main/java/dev/jason/gboardpatches/extension/advancedvoice/GboardAdvancedVoiceSettingsFeature.java — new non-allowlisted URL or IP</summary>

```
            "https://www.apkmirror.com/apk/google-inc/gboard/gboard-the-google-keyboard-18-5-4-993608717-release/gboard-the-google-keyboard-18-5-4-993608717-release-arm64-v8a-2-android-apk-download/";
    private final String modesTitle;
    private final String modesSummary;
        modesTitle = GboardSettingsText.get(context,
                R.string.gboard_patches_advanced_voice_modes_title);
        modesSummary = GboardSettingsText.get(context,
                R.string.gboard_patches_advanced_voice_modes_summary);
                    value -> saveEnabled(host, context, value))
                    .setRestartRequired(GboardAdvancedVoiceSettings.PREF_KEY_ENABLED));
                    value -> saveZhTwPunctuationEnabled(context, value))
                    .setRestartRequired(
                            GboardAdvancedVoiceSettings.PREF_KEY_ZH_TW_PUNCTUATION_ENABLED));
            informationRows.add(new GboardPatchesSettingsContract.DetailRow(
                    modesTitle,
                    modesSummary,
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/dev/jason/gboardpatches/extension/settings/GboardPatchesIcons.java — new non-allowlisted URL or IP</summary>

```
package dev.jason.gboardpatches.extension.settings;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PixelFormat;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;

public final class GboardPatchesIcons {
    public static final int NONE = 0;
    public static final int BACKUP = 1;
```

</details>


__
