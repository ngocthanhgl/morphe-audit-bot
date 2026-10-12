# SysAdminDoc/HushMessenger — 2026-10-12

Commit: bc43cc2a2a060908d383ba6f1b9e30fa21010709 | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[info] assets/settings-app-dark.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/settings-app-light.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/settings-dark.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/settings-light.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] concepts/settings/2026-10-12/app-target.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] concepts/settings/2026-10-12/controls-target.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] concepts/settings/2026-10-12/restart-target.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/messenger/src/main/java/app/hushmessenger/extension/SettingsDialog.java — new non-allowlisted URL or IP</summary>

```
package app.hushmessenger.extension;

import android.app.Activity;
import android.app.Dialog;
import android.os.Build;
import android.view.DisplayCutout;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
```

</details>

<details>
<summary>[medium] extensions/messenger/src/main/java/app/hushmessenger/extension/SettingsUi.java — new non-allowlisted URL or IP</summary>

```
import android.widget.EditText;
    final int track, thumb, ripple, infoSurface, infoBorder, selectedText, error, selection;
        background = light ? 0xfffaf7f9 : 0xff000000;
        surface = light ? 0xffffffff : 0xff121419;
        text = light ? 0xff211b23 : 0xfff4f1f3;
        muted = light ? 0xff645966 : 0xffaeb3bf;
        accent = light ? 0xff9e3157 : 0xfff3a6b8;
        line = light ? 0xffded6dd : 0xff303640;
        outline = light ? 0xff8b7c89 : 0xff657080;
        track = light ? 0xffd9d0d8 : 0xff2b3039;
        ripple = light ? 0x229e3157 : 0x33f3a6b8;
        infoSurface = light ? 0xfff2ebf0 : 0xff1b1f26;
        infoBorder = light ? 0xffe4d9e1 : 0xff292f39;
        error = light ? 0xffb3261e : 0xffffb4ab;
        selection = (accent & 0x00ffffff) | 0x55000000;
```

</details>


__
