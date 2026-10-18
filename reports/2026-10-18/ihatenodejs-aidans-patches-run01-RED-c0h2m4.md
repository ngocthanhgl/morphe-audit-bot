# ihatenodejs/aidans-patches — 2026-10-18

Commit: 8b39fb6f61c08cf7add06801ea883e46c9510520 | Status: RED | crit:0 high:2 med:4

<details>
<summary>[high] extensions/extension/src/main/java/app/aidan/extension/geocaching/GeocacheEnrichmentBridge.java — sensitive source reaches network sink</summary>

```
package app.aidan.extension.geocaching;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.webkit.CookieManager;
import android.util.Log;
import android.content.Context;
import android.content.res.Configuration;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.view.View;
import android.widget.TextView;
import java.io.BufferedReader;
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/aidan/extension/geocaching/GeocacheEnrichmentBridge.java — reflection-hidden behavior with network sink</summary>

```
package app.aidan.extension.geocaching;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.webkit.CookieManager;
import android.util.Log;
import android.content.Context;
import android.content.res.Configuration;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.view.View;
import android.widget.TextView;
import java.io.BufferedReader;
```

</details>

<details>
<summary>[info] site/public/feature-previews/grinning-facebook.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/feature-previews/grinning-google.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/feature-previews/grinning-ios.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/feature-previews/grinning-twemoji.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/feature-previews/sidelineswap.webp — binary asset added/changed — cannot review textually</summary>

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
<summary>[info] site/public/icons/com.nhl.gc1112.free.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/pixel-10-frame.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] site/src/data/status-client.ts — new non-allowlisted URL or IP</summary>

```
import type {
  CompatibilityRecord,
  OutstandingCompatibilityRequest,
} from './types';

export interface PlayMediaAsset {
  sourceUrl: string;
  fallbackPath?: string | null;
  width?: number | null;
  height?: number | null;
  alt?: string | null;
}

export interface PlayReview {
  author: string;
```

</details>

<details>
<summary>[medium] site/src/pages/sitemap.xml.ts — new non-allowlisted URL or IP</summary>

```
import type { APIRoute } from 'astro';
import { getApps } from '../data/repo';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site || new URL('https://patch.p0ntus.com');
  const routes = [
    { path: '/', changefreq: 'daily', priority: '1.0' },
    { path: '/apps', changefreq: 'weekly', priority: '0.9' },
    ...getApps().map((app) => ({
      path: `/apps/${app.id}`,
      changefreq: 'weekly',
      priority: '0.8',
    })),
```

</details>

<details>
<summary>[medium] worker/src/index.ts — new non-allowlisted URL or IP</summary>

```
  PlayMediaAsset,
  PlayMetadataSubmission,
  PlayStoreMetadata,
  PlayVersionSource,
import { buildMediaAsset } from './scraper';
import { mirrorAssetsBatch } from './media-mirror';
        playMetadata: null,
  let mirroredMediaCount = 0;
  const MAX_MEDIA_PER_INVOCATION = 24;
    if (scraped.rawError) {
      console.error(
        `Scrape failed for ${app.packageName}: ${scraped.rawError}`,
      );
    }
    let playVersionCode: number | null = priorRecord?.playVersionCode ?? null;
```

</details>

<details>
<summary>[medium] worker/src/media-mirror.ts — new non-allowlisted URL or IP</summary>

```
import type { PlayMediaAsset } from './types';
import { ALLOWED_MEDIA_HOST } from './scraper';

export async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function getFileExtensionFromContentType(contentType: string): string {
  const ct = contentType.toLowerCase().split(';')[0].trim();
  switch (ct) {
    case 'image/png':
      return 'png';
```

</details>


__
