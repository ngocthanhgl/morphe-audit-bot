# icysymmetra/tiktok-patches-for-morphe — 2026-11-10

Commit: 9fbe1bb26edd16f6c1048482631bd7cc9ff9298e | Status: RED | crit:0 high:9 med:15

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/DownloadDetails.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.download;

import android.content.Context;
import android.net.Uri;
import android.os.Build;
import app.morphe.extension.shared.Logger;
import app.morphe.extension.tiktok.blockauthor.Reflect;
import java.io.File;
import java.io.FileOutputStream;
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/ExternalDownloader.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.download;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;

import app.morphe.extension.shared.Logger;
import androidx.annotation.Nullable;

```

</details>

<details>
<summary>[high] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/MediaTransport.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.download;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
```

</details>

<details>
<summary>[high] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/MediaTransport.java — possible DNS exfiltration channel: getAllByName</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.download;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/interaction/GestureActions.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.interaction;

import android.app.Activity;
import android.content.Context;
import android.graphics.Rect;
import android.os.SystemClock;
import android.text.TextUtils;
import android.view.MotionEvent;
import android.view.View;
```

</details>

<details>
<summary>[high] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/privacy/BrowserPrivacyGuard.java — WebView JS bridge with network sink: addJavascriptInterface</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 */
package app.morphe.extension.tiktok.privacy;

import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.webkit.WebBackForwardList;
import android.webkit.WebHistoryItem;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
```

</details>

<details>
<summary>[high] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/privacy/DevicePrivacyGuard.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 */
package app.morphe.extension.tiktok.privacy;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.ContentResolver;
import android.net.NetworkCapabilities;

import app.morphe.extension.shared.Logger;
import app.morphe.extension.shared.Utils;
import app.morphe.extension.shared.settings.EarlySwitch;
import app.morphe.extension.tiktok.settings.Settings;
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsAz.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The az table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsAz {
    private L10nTranslationsAz() {
    }
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsDe.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The de table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsDe {
    private L10nTranslationsDe() {
    }
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsEs.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The es table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsEs {
    private L10nTranslationsEs() {
    }
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsIn.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The in table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsIn {
    private L10nTranslationsIn() {
    }
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsIt.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The it table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsIt {
    private L10nTranslationsIt() {
    }
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsPt_rBR.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The pt-rBR table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsPt_rBR {
    private L10nTranslationsPt_rBR() {
    }
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsRu.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The ru table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsRu {
    private L10nTranslationsRu() {
    }
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsTr.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The tr table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsTr {
    private L10nTranslationsTr() {
    }
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/L10nTranslationsZh_Hans.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings;

import java.util.HashMap;
import java.util.Map;

/** The zh-Hans table of {@link L10nTranslations}, generated by scripts/gen-l10n.py. Do not edit by hand. */
final class L10nTranslationsZh_Hans {
    private L10nTranslationsZh_Hans() {
    }
```

</details>

<details>
<summary>[high] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/preference/LicenseNotice.java — typosquat of allowlisted domain: https://gitlab.com (~github)</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 *
 * Built on icysymmetra/tiktok-patches-for-morphe (GPL-3.0).
 */
package app.morphe.extension.tiktok.settings.preference;

/**
 * The repository's NOTICE file, as text the payload can show.
 *
 * <p>Morphe's Section 7b asks that derivative works carry its notice and provide it to the
 * person using the software. A patched APK cannot read a file out of the repository, so the
 * text is carried here and shown by the Licences row under About.
 *
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/preference/TikTokPreferenceFragment.java — new non-allowlisted URL or IP</summary>

```
 * Mirror, since GitHub blocks the original: https://gitlab.com/ReVanced/revanced-patches/-/blob/main/extensions/tiktok/src/main/java/app/revanced/extension/tiktok/settings/preference/TikTokPreferenceFragment.java
import app.morphe.extension.tiktok.playback.FeedMute;
import app.morphe.extension.tiktok.settings.L10n;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.preference.PreferenceGroup;
import android.view.inputmethod.InputMethodManager;
import java.util.ArrayList;
import java.util.List;

import app.morphe.extension.shared.settings.HushfeedPause;
import app.morphe.extension.tiktok.blockauthor.BlockAuthorOverlay;
```

</details>

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/settings/preference/categories/SimSpoofPreferenceCategory.java — new non-allowlisted URL or IP</summary>

```
 * Mirror, since GitHub blocks the original: https://gitlab.com/ReVanced/revanced-patches/-/blob/main/extensions/tiktok/src/main/java/app/revanced/extension/tiktok/settings/preference/categories/SimSpoofPreferenceCategory.java
import app.morphe.extension.tiktok.network.NetworkProxy;
import app.morphe.extension.tiktok.settings.preference.ChoicePreference;
import app.morphe.extension.tiktok.settings.preference.SectionHeadingPreference;
import app.morphe.extension.tiktok.spoof.sim.SpoofSimPatch;
import app.morphe.extension.tiktok.spoof.region.RegionSpoof;
import app.morphe.extension.tiktok.settings.L10n;
        setTitle("Region");
    }

    /** Whether this page has anything on it. The row into it asks the same question. */
    public static boolean isAvailable() {
        return SettingsStatus.simSpoofEnabled
                || SettingsStatus.regionSpoofEnabled
                || SettingsStatus.networkProxyEnabled;
```

</details>

<details>
<summary>[high] gradle/verification-metadata.xml — typosquat of allowlisted domain: https://schema.gradle.org (~schemas), https://schema.gradle.org (~schemas), https://schema.gradle.org (~schemas), https://schema.gradle.org (~schemas)</summary>

LLM review: unreviewed (per-scan review cap reached)

```
<?xml version='1.0' encoding='UTF-8'?>
<verification-metadata xmlns="https://schema.gradle.org/dependency-verification" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://schema.gradle.org/dependency-verification https://schema.gradle.org/dependency-verification/dependency-verification-1.4.xsd">
   <configuration>
      <verify-metadata>true</verify-metadata>
      <verify-signatures>false</verify-signatures>
   </configuration>
   <components>
      <component group="androidx.annotation" name="annotation" version="1.10.0">
         <artifact name="annotation-1.10.0.module">
            <sha256 value="5b2d4387f384e5913a4aec979a20ece13bb5ce992bc90a962dea1feea7fa89e9" origin="Generated by Gradle" />
         </artifact>
      </component>
      <component group="androidx.annotation" name="annotation-jvm" version="1.10.0">
         <artifact name="annotation-jvm-1.10.0.jar">
            <sha256 value="ddd072ddbb553178e205517ce777b2f05aa9e412982d9ecb4eedc74f1212f697" origin="Generated by Gradle" />
```

</details>

<details>
<summary>[high] patches/build.gradle.kts — new external build URL (supply chain): http://apache.org</summary>

LLM review: unreviewed (per-scan review cap reached)

```
import java.io.ByteArrayOutputStream
import java.io.File
import java.nio.file.Files
import java.security.MessageDigest
import java.util.Properties
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicReference
import java.util.jar.Manifest
import java.util.zip.CRC32
import java.util.zip.ZipEntry
import java.util.zip.ZipFile
import java.util.zip.ZipOutputStream
import javax.xml.parsers.DocumentBuilderFactory
import org.gradle.api.internal.tasks.testing.filter.DefaultTestFilter

```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/morphe/patches/tiktok/privacy/BrowserPrivacyGuardPatch.kt — WebView JS bridge with network sink: addJavascriptInterface</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 */
package app.morphe.patches.tiktok.privacy

import app.morphe.util.addInstruction
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patcher.patch.bytecodePatch
import app.morphe.patches.shared.compat.AppCompatibilities
import app.morphe.patches.tiktok.misc.extension.sharedExtensionPatch
import app.morphe.patches.tiktok.misc.settings.SettingsStatusLoadFingerprint
import app.morphe.patches.tiktok.misc.settings.settingsPatch
import app.morphe.patcher.util.findMutableMethodOf
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/morphe/patches/tiktok/privacy/Fingerprints.kt — WebView JS bridge with network sink: addJavascriptInterface</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Hushfeed contributors
 * https://github.com/SysAdminDoc/hushfeed
 */
package app.morphe.patches.tiktok.privacy

import app.morphe.patcher.Fingerprint
import app.morphe.patcher.methodCall
import app.morphe.patcher.StringComparisonType
import app.morphe.patcher.string
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.FieldReference
import com.android.tools.smali.dexlib2.iface.reference.MethodReference
```

</details>

<details>
<summary>[medium] patches/src/test/resources/fixtures/concatenated.dex — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
