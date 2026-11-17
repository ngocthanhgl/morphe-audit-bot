# wchill/patcheddit — 2026-11-17

Commit: 3f9efb03df50327f08afe4bed5387e52389861ac | Status: RED | crit:0 high:1 med:3

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/utils/SettingsUtils.java — new non-allowlisted URL or IP</summary>

```
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.Predicate;
import app.morphe.extension.shared.settings.PatchSettings;
    private static final Map<Integer, ArchiveService> archiveServices = constructArchiveServiceMap(
            List.of(
                new ArchiveService("https://web.archive.org/web/", "Wayback Machine", "morphe_boost_archive_wayback"),
                new ArchiveService("https://archive.is/", "Archive.is", "morphe_boost_archive_archive_is"),
                new ArchiveService("https://wallhop.io/", "Wallhop", "morphe_boost_archive_wallhop"),
                new ArchiveService("https://smry.ai/", "smry.ai", "morphe_boost_archive_smry"),
                new ArchiveService("https://www.removepaywall.com/search?url=", "RemovePaywall", "morphe_boost_archive_removepaywall"),
                new ArchiveService("https://freedium-mirror.cfd/", "Freedium", "morphe_boost_archive_freedium"),
                new ArchiveService("https://unwall.app/", "Unwall", "morphe_boost_archive_unwall")
            ), 101);
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/fixes/api/FailedGalleryMetadataPatch.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 * https://github.com/wchill/patcheddit
 *
 * Copyright 2026 vonwerderc.
 * Copyright 2026 Apollo-Reborn contributors.
 *
 * Adapted from https://github.com/wchill/patcheddit/pull/142.
 * Gallery repair approach: https://github.com/Apollo-Reborn/Apollo-Reborn/pull/1589.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.shared.fixes.api;

```

</details>

<details>
<summary>[medium] patches/src/main/resources/boost/xml/morphe_boost_archive_options.xml — new non-allowlisted URL or IP</summary>

```
<?xml version="1.0" encoding="utf-8"?>
<PreferenceCategory xmlns:android="http://schemas.android.com/apk/res/android">
    <CheckBoxPreference
        android:key="morphe_boost_archive_strip_query_parameters"
        android:title="Strip query parameters from archive links"
        android:summary="Remove query and tracking parameters before opening an archive service."
        android:defaultValue="true" />
    <CheckBoxPreference
        android:key="morphe_boost_archive_wayback"
        android:title="Wayback Machine"
        android:summary="https://web.archive.org/"
        android:defaultValue="true" />
    <CheckBoxPreference
        android:key="morphe_boost_archive_archive_is"
        android:title="Archive.is"
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/morphe/extension/shared/fixes/login/ModifyWebViewPatch.java: previously seen host http://147.0.0.0 (2026-11-15) with new loadUrl</summary>

LLM review: suspicious (0.25, exfiltration): No actual patch diff or source code was provided in this task — only a summary string asserting that 'exfil completed across windows' involving host http://147.0.0.0 and a new loadUrl call in ModifyWebViewPatch.java, plus a pointer to a prior report I do not have. Per the audit rules, I must judge only observable code behavior, and there is no code here to observe. The exfiltration claim is therefore unverified and could itself be an injected assertion. I cannot assign a malicious verdict (which requires >=0.85 confidence and exact offending lines), so I rate this suspicious with low confidence and request the full diff and the 2026-11-15 report before any verdict is finalized.

```
(see report of 2026-11-15 for the earlier half)
```

</details>


__
