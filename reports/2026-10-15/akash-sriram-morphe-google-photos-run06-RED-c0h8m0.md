# Akash-Sriram/morphe-google-photos — 2026-10-15

Commit: d5203d95b5ef3d478486bb15af768f20200ddb49 | Status: RED | crit:0 high:8 med:0

<details>
<summary>[high] extensions/shared/library/src/main/assets/toolkit/google_photos_toolkit.user.js — sensitive source reaches network sink [llm: benign 0.9 — no ban]</summary>

```
// ==UserScript==
// @name        Google Photos Toolkit
// @description Bulk organize your media
// @version     3.3.0
// @author      xob0t
// @homepageURL https://github.com/xob0t/Google-Photos-Toolkit#readme
// @supportURL  https://github.com/xob0t/Google-Photos-Toolkit/discussions
// @match       *://photos.google.com/*
// @license     MIT
// @namespace   https://github.com/xob0t/Google-Photos-Toolkit
// @icon        https://raw.githubusercontent.com/xob0t/Google-Photos-Toolkit/main/media/icon.png
// @downloadURL https://github.com/xob0t/Google-Photos-Toolkit/releases/latest/download/google_photos_toolkit.user.js
// @run-at      body
// @grant       GM_registerMenuCommand
// @grant       unsafeWindow
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java — possible keystroke capture with network exfil: TextWatcher [llm: benign 0.95 — no ban]</summary>

```
package app.morphe.extension.shared.patches.toolkit;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.app.TimePickerDialog;
import java.util.Calendar;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java — sensitive source reaches network sink</summary>

```
package app.morphe.extension.shared.patches.toolkit;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.app.TimePickerDialog;
import java.util.Calendar;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java — reflection-hidden behavior with network sink</summary>

```
package app.morphe.extension.shared.patches.toolkit;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.app.TimePickerDialog;
import java.util.Calendar;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/StorageScanner.java — sensitive data handoff to explicit external package [llm: benign 0.55 — no ban]</summary>

```
package app.morphe.extension.shared.patches.toolkit;

import android.app.Activity;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
package app.morphe.extension.shared.patches.toolkit;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java — sensitive source reaches network sink</summary>

```
package app.morphe.extension.shared.patches.toolkit;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java — WebView JS bridge with network sink: evaluateJavascript</summary>

```
package app.morphe.extension.shared.patches.toolkit;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
```

</details>


__
