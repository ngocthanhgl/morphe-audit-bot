# ihatenodejs/aidans-patches — 2026-11-20

Commit: 38779a3896535e923f44bf3cf2030cf348f543b1 | Status: RED | crit:0 high:4 med:4

<details>
<summary>[info] extensions/extension/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    testBuildType = "release"
    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    buildFeatures {
        aidl = true
    }
    testOptions {
        unitTests.isReturnDefaultValues = true
    }
}

```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/aidan/extension/adobescan/OfficeDocumentWriter.java — new non-allowlisted URL or IP</summary>

```
package app.aidan.extension.adobescan;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public final class OfficeDocumentWriter {

    private OfficeDocumentWriter() {}

    public static String escapeXml(final String s) {
        if (s == null) return "";
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/aidan/extension/fizz/VersionBridge.java — new non-allowlisted URL or IP</summary>

```
package app.aidan.extension.fizz;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.atomic.AtomicBoolean;
import org.json.JSONObject;

public final class VersionBridge {
    private static final String TAG = "FizzVersionBridge";

```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/aidan/extension/nhl/adblock/AdBlockBridge.java — WebView JS bridge with network sink: evaluateJavascript</summary>

LLM review: suspicious (0.35, exfiltration): The provided excerpt contains only import declarations (Uri, Handler/Looper, Base64, Log, WebView/WebResourceRequest/WebResourceResponse, ByteArrayInputStream, etc.) and no method bodies, so the flagged evaluateJavascript sink and any data flow into it cannot be inspected. The combination of a WebView JS bridge, Base64, and a network/JS sink is consistent with both a legitimate ad-block interceptor (returning empty WebResourceResponse bodies) and with potential JS-based exfiltration, so the code is not verifiable as benign from this excerpt. Per policy, no malicious verdict is issued without visible offending lines; manual review of the full diff (especially any evaluateJavascript call arguments and their data sources) is required.

```
package app.aidan.extension.nhl.adblock;

import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.util.Base64;
import android.util.Log;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/aidan/extension/nhl/adblock/RuleRepository.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.55, exfiltration): The excerpt only shows imports for SharedPreferences and file I/O; no network sink or data flow is visible, so the static-analysis claim cannot be confirmed. The presence of sensitive storage access plus the flagged reason warrants suspicion but not a malicious verdict.

```
package app.aidan.extension.nhl.adblock;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/aidan/extension/nhl/adblock/RuleRepository.java — possible DNS exfiltration channel: getByName</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package app.aidan.extension.nhl.adblock;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
```

</details>

<details>
<summary>[medium] scripts/dependencies/deps.test.ts — new non-allowlisted URL or IP</summary>

```
import { describe, expect, test } from 'bun:test';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { applyApprovedProposal } from './apply';
import {
  collectInventory,
  extractKtlintVersion,
  parseBunLock,
  parseBunLockPackages,
  parsePythonRequirement,
} from './inventory';
import {
  type DependencyItem,
  type DependencyPolicy,
```

</details>

<details>
<summary>[high] scripts/dependencies/sources.ts — typosquat of allowlisted domain: https://static.rust-lang.org (~gstatic), https://static.rust-lang.org (~gstatic), https://static.rust-lang.org (~gstatic)</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { semver } from 'bun';
import type { DependencyItem } from './model';
export type FetchFn = (url: string, init?: RequestInit) => Promise<Response>;

export interface SourceResolverOptions {
  fetch?: FetchFn;
  githubToken?: string;
  githubActor?: string;
  npmRegistry?: string;
}

export function compareSemver(vA: string, vB: string): number {
```

</details>

<details>
<summary>[medium] scripts/sync-fizz-version.ts — new non-allowlisted URL or IP</summary>

```
#!/usr/bin/env bun
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const VERSION_BRIDGE_PATH = resolve(
  import.meta.dir,
  '../extensions/extension/src/main/java/app/aidan/extension/fizz/VersionBridge.java',
);

interface VersionResponse {
  packageName?: string;
  versionName?: string;
  versionCode?: number | string;
  updatedAt?: string;
}
```

</details>

<details>
<summary>[info] site/public/icons/com.adobe.reader.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/icons/com.avinside.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/icons/com.creditkarma.mobile.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/icons/com.eab.se.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/icons/com.eumlab.android.prometronome.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/icons/com.groundspeak.geocaching.intro.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/icons/com.nhl.gc1112.free.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/icons/com.sidelineswap.android.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
