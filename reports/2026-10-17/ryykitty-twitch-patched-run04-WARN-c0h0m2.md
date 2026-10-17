# ryykitty/twitch-patched — 2026-10-17

Commit: 11d5b953e6fa3dbddb345bf5e397896e64ca6ef3 | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[medium] patches/src/main/kotlin/dev/twitchpatches/patches/twitch/ui/UiSettingsAssets.kt — new non-allowlisted URL or IP</summary>

```
package dev.twitchpatches.patches.twitch.ui

import app.morphe.patcher.patch.resourcePatch
import dev.twitchpatches.patches.twitch.shared.RN_ASSET
import dev.twitchpatches.patches.twitch.shared.assetSource
import dev.twitchpatches.patches.twitch.shared.reactNativeAssetsPatch
import dev.twitchpatches.patches.twitch.shared.hermes.HermesBundle
import dev.twitchpatches.patches.twitch.shared.hermes.MetroExports
import dev.twitchpatches.patches.twitch.shared.hermes.dependencyModule
import dev.twitchpatches.patches.twitch.shared.uniqueHook
import dev.twitchpatches.patches.twitch.shared.parseResourceXml
import org.w3c.dom.Element

internal val uiSettingsAssetsPatch = resourcePatch {
    dependsOn(reactNativeAssetsPatch)
```

</details>

<details>
<summary>[medium] scripts/verification/ChatUiProbe.java — new non-allowlisted URL or IP</summary>

```
import android.content.Context;
import android.graphics.Color;
import android.os.Looper;
import android.text.SpannableString;
import android.text.Spanned;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.TextView;
import dev.twitchpatches.extension.emotes.ReplayEmoteTouch;
import dev.twitchpatches.extension.settings.SettingsWindow;

public final class ChatUiProbe {
    public static void main(String[] args) {
```

</details>


__
