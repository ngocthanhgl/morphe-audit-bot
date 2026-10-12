# SysAdminDoc/HushFacebook — 2026-10-12

Commit: 0620806ea0fff283da476571090cab98942c8684 | Status: WARN | crit:0 high:0 med:8

<details>
<summary>[info] assets/marketplace-active.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/marketplace-off.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/settings-downloads.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/settings-overview.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/facebook/src/main/java/app/morphe/extension/facebook/notifications/PushStateStore.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.extension.facebook.notifications;

import android.os.SystemClock;
import android.util.AtomicFile;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
```

</details>

<details>
<summary>[medium] extensions/facebook/src/main/java/app/morphe/extension/facebook/settings/DialogChoices.java — new non-allowlisted URL or IP</summary>

```
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.RippleDrawable;
            choice.setTextColor(ScreenColors.dimmedWhenDisabled(colors.title));
            GradientDrawable surface = new GradientDrawable();
            surface.setCornerRadius(Math.round(4 * density));
            surface.setColor(new ColorStateList(new int[][]{{android.R.attr.state_checked}, {}},
                    new int[]{(colors.accent & 0xFFFFFF) | 0x22000000, Color.TRANSPARENT}));
            surface.setStroke(Math.round(2 * density), ScreenColors.focusStroke(colors.heading, Color.TRANSPARENT));
            choice.setBackground(new RippleDrawable(ColorStateList.valueOf(ScreenColors.half(colors.accent)),
                    surface, null));

```

</details>

<details>
<summary>[medium] extensions/facebook/src/main/java/app/morphe/extension/facebook/settings/ScreenColors.java — new non-allowlisted URL or IP</summary>

```
        dialog = 0xFF10151D;
        card = 0xFF10151D;
        outline = 0xFF222C3A;
            title.setTypeface(Typeface.create("sans-serif-medium", Typeface.NORMAL));
            summary.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
            thumb.setCornerRadius(dp(row, 4));
            track.setCornerRadius(dp(row, 6));
        surface.setStroke(dp(row, 1), focusStroke(heading, outline));
        Drawable inset = new InsetDrawable(surface, dp(row, 18), first ? dp(row, 4) : -dp(row, 1),
                dp(row, 18), last ? dp(row, 4) : 0);
        int vertical = preference.getIcon() == null ? 18 : 14;
        row.setPaddingRelative(dp(row, 34), dp(row, vertical + (first ? 4 : 0)),
                dp(row, 34), dp(row, vertical + (last ? 4 : 0)));
        row.setPaddingRelative(dp(row, 22), dp(row, 22), dp(row, 22), dp(row, 10));
        int height = row.getResources().getConfiguration().screenHeightDp;
```

</details>

<details>
<summary>[medium] extensions/facebook/src/test/java/app/morphe/extension/facebook/download/CodecProcess.java — new non-allowlisted URL or IP</summary>

```
import java.io.OutputStream;
import java.util.concurrent.atomic.AtomicBoolean;
    private boolean ready, groupGone, closed;
            if (owned.posix != null) owned.pid = Integer.parseInt(read(owned.control.resolve("ready")).trim());
            int child = posix.waitpid(-pid, status, 1); // WNOHANG. The live guard is outside this group.
    /** Linux adopts the guard too if its launcher was killed; it moved outside the tool group. */
    private boolean reapGuard() throws IOException {
        if (subreaper == null) return true;
        int child = posix.waitpid(pid, new IntByReference(), 1);
        if (child == pid) return true;
        if (child == 0) return false;
        int error = Native.getLastError();
        if (error == ECHILD) return true; // A live launcher reaps its own guard.
        if (error == 4) return false;
        throw nativeFailure("reap codec group guard", error);
```

</details>

<details>
<summary>[medium] extensions/facebook/src/test/java/app/morphe/extension/facebook/download/MediaSaveAdmissionTest.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.extension.facebook.download;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThrows;
import static org.junit.Assert.assertTrue;

import android.content.Context;

```

</details>

<details>
<summary>[medium] extensions/facebook/src/test/java/app/morphe/extension/facebook/download/ReelSidebarDiagnosticsTest.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.extension.facebook.download;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.robolectric.Shadows.shadowOf;

import android.os.Looper;
import android.os.SystemClock;
import android.view.View;
import android.widget.FrameLayout;
```

</details>

<details>
<summary>[medium] extensions/facebook/src/test/java/app/morphe/extension/facebook/settings/SourcesEditorTest.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.extension.facebook.settings;

import android.app.Activity;
import android.app.AlertDialog;
import android.view.View;
import android.view.ViewParent;
import android.view.inputmethod.EditorInfo;
import android.widget.ScrollView;

import app.morphe.extension.facebook.feed.PostSources;
import app.morphe.extension.shared.SettingsContextRule;
```

</details>

<details>
<summary>[medium] extensions/facebook/src/test/java/app/morphe/extension/shared/settings/preference/ExportDiagnosticReportPreferenceTest.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.extension.shared.settings.preference;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.provider.MediaStore;
```

</details>


__
