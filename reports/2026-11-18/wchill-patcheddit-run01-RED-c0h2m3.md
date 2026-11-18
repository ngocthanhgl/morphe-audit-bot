# wchill/patcheddit — 2026-11-18

Commit: d9aed3f1c6a187044ecc6754c42d7b0b01d11785 | Status: RED | crit:0 high:2 med:3

<details>
<summary>[medium] extensions/boost/src/main/java/app/morphe/extension/boost/http/arcticshift/ArcticShiftSettings.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.boost.http.arcticshift;

import java.net.URI;
import java.net.URISyntaxException;

import app.morphe.extension.shared.Utils;
import app.morphe.extension.shared.settings.PatchSettings;
import okhttp3.HttpUrl;

```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/settings/MorpheAboutDialog.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 wchill.
 *
 * See the included NOTICE file for GPLv3 section 7 terms.
 */

package app.morphe.extension.shared.settings;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.TypedArray;
```

</details>

<details>
<summary>[high] patches/build.gradle.kts — new external build URL (supply chain): https://publicsuffix.org [llm: benign 0.78 — no ban]</summary>

LLM review: benign (0.78, benign-other): The excerpt contains only standard Gradle logic that collects releaseRuntimeClasspath artifacts from :extensions:* subprojects and sorts them by component display name. No network fetch, exec, or dynamic code evaluation is present. The flagged URL https://publicsuffix.org is a well-known legitimate public service (the Public Suffix List, operated under Mozilla), not a code-hosting or artifact repository, so a reference to it in a build script is typically documentation/comment metadata rather than a supply-chain payload. The scanner's 'new external build URL' heuristic appears to be a false positive here; no offending lines demonstrating malicious behavior are visible in the provided excerpt.

```
import groovy.json.JsonOutput
import org.gradle.api.artifacts.component.ModuleComponentIdentifier
import java.util.zip.ZipInputStream

val bundledExtensionLibraries = provider {
    rootProject.subprojects.filter { it.path.startsWith(":extensions:") && !it.path.endsWith(":stub") }
        .flatMap { project ->
            project.configurations.findByName("releaseRuntimeClasspath")
                ?.incoming?.artifactView {
                    componentFilter { it is ModuleComponentIdentifier }
                }?.artifacts?.artifacts.orEmpty()
        }
        .map { (it.id.componentIdentifier as ModuleComponentIdentifier) to it.file }
        .distinctBy { it.first.displayName }
        .sortedBy { it.first.displayName }
```

</details>

<details>
<summary>[medium] patches/src/main/resources/boost/xml/morphe_boost_undelete_options.xml — new non-allowlisted URL or IP</summary>

```
<?xml version="1.0" encoding="utf-8"?>
<PreferenceCategory xmlns:android="http://schemas.android.com/apk/res/android">
    <app.morphe.extension.boost.http.arcticshift.ArcticShiftBaseUrlPreference
        android:key="morphe_boost_arctic_shift_base_url"
        android:title="Arctic Shift API base URL"
        android:dialogTitle="Arctic Shift API base URL"
        android:dialogMessage="Enter the API base URL of a compatible Arctic Shift server, including its API path (usually /api/). Leave empty to use https://arctic-shift.photon-reddit.com/api/."
        android:inputType="textUri"
        android:defaultValue="" />
</PreferenceCategory>

```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/build.gradle.kts: new host https://publicsuffix.org with previously seen OkHttp (2026-11-17)</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-11-17 for the earlier half)
```

</details>


__
