# ihatenodejs/aidans-patches — 2026-11-24

Commit: 1d314726a2a4e86d3b826441f2341c42949cee46 | Status: WARN | crit:0 high:0 med:15

<details>
<summary>[info] docs/benchmarks/apk-lab/charts/wall-ratio.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/benchmarks/apk-lab/charts/wall-time.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/aidan/patches/sezzle/ads/HideBannerAdsPatch.kt — new non-allowlisted URL or IP</summary>

```
private const val SELECTOR_PROPERTY_OFFSET = 0x16
private const val SELECTOR_SCAN_LIMIT = 4096

/**
 * Finds the memoized selector wrapper that returns [propertyName] and forces it to
 * return `false`.
 *
 * The wrapper shape is `GetParentEnvironment; ...; GetById r1, r1, ..., property;
 * Ret r1`, so the property lookup uniquely identifies the 30-byte function.
 */
private fun HermesBundleEditor.forceSelectorFalse(propertyName: String) {
    val propertyId = findStringId(propertyName)
        ?: throw PatchException("String '$propertyName' not found")
    require(propertyId <= 0xFFFF) { "String '$propertyName' id does not fit GetById" }

```

</details>

<details>
<summary>[medium] scripts/generate-patches-readme.ts — new non-allowlisted URL or IP</summary>

```
import * as fs from 'node:fs';
import * as path from 'node:path';
import {
  format as prettierFormat,
  resolveConfig as resolvePrettierConfig,
} from 'prettier';

// Match Python's Unicode whitespace set, including NEL and separator controls,
// but not JavaScript-only BOM whitespace.
const PYTHON_WHITESPACE =
  '[\\u0009-\\u000d\\u001c-\\u0020\\u0085\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]';
export const START_MARKER_PATTERN = new RegExp(
  `<!-- PATCHES_START(?:${PYTHON_WHITESPACE}+EXPANDED)?${PYTHON_WHITESPACE}*-->`,
  'g',
);
```

</details>

<details>
<summary>[medium] scripts/hooks.test.ts — new non-allowlisted URL or IP</summary>

```
import { afterEach, describe, expect, test } from 'bun:test';
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import {
  HYGIENE_EXCLUDE_PATTERN,
  STAGE_AUDITS,
  STAGE_CHECKS,
  findCaseConflicts,
  findMergeConflictLines,
  hasTrailingWhitespace,
  needsEndOfFileFix,
  runHook,
  validateToml,
```

</details>

<details>
<summary>[medium] scripts/install-hooks.test.ts — new non-allowlisted URL or IP</summary>

```
import { afterEach, describe, expect, test } from 'bun:test';
import { spawnSync } from 'node:child_process';
import type { SpawnSyncReturns } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { renderWrapper } from './install-hooks';

const INSTALLER = path.join(import.meta.dir, 'install-hooks.ts');
const PRECOMMIT_ID = '138fd403232d2ddd5efb44317e38bf03';
const sandboxes: string[] = [];
const GIT_ENV: Record<string, string | undefined> = {
  ...process.env,
  GIT_CONFIG_GLOBAL: '/dev/null',
  GIT_CONFIG_NOSYSTEM: '1',
```

</details>

<details>
<summary>[medium] scripts/install-hooks.ts — new non-allowlisted URL or IP</summary>

```
#!/usr/bin/env bun
import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

export const HOOK_STAGES = ['pre-commit', 'pre-push'] as const;
export type HookStage = (typeof HOOK_STAGES)[number];

const MANAGED_MARKER = '# aidans-patches-managed-hook: 1';
const MANAGED_PREFIX = `#!/bin/sh\n${MANAGED_MARKER}\n`;

// pre-commit identifies its generated wrappers by one of these hashes. Keep
// the list in sync with pre_commit/commands/install_uninstall.py.
const PRECOMMIT_WRAPPER_HASHES: Record<string, true> = {
  '138fd403232d2ddd5efb44317e38bf03': true,
```

</details>

<details>
<summary>[info] site/public/icons/com.adobe.reader.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] site/public/icons/com.aftership.AfterShip.png — binary asset added/changed — cannot review textually</summary>

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
<summary>[info] tools/asset-prep/tests/fixtures/baseline/image/expected.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/baseline/image/expected.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/baseline/image/source.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/font/fmt14.bin — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/font/tiny-bad-table-offset.ttf — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/font/tiny-expected.ttf — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/font/tiny-input.ttf — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/font/tiny-short-cblc.ttf — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/font/tiny-short-cmap.ttf — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/font/tiny-short-head.ttf — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/font/tiny-truncated.ttf — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/candidates/com.example.alpha.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/candidates/com.example.beta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/candidates/com.example.epsilon.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/candidates/com.example.eta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/candidates/com.example.gamma.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/candidates/com.example.theta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/candidates/com.example.zeta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/epsilon-compression-variant.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/download-missing/com.example.alpha.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/download-missing/com.example.beta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/download-missing/com.example.epsilon.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/download-missing/com.example.eta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/download-missing/com.example.gamma.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/sync-all/com.example.alpha.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/sync-all/com.example.beta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/sync-all/com.example.epsilon.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/sync-all/com.example.eta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/expected/python-icons/sync-all/com.example.gamma.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/sources/alpha.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/sources/beta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/sources/delta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/sources/epsilon.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/sources/eta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/sources/gamma.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/sources/theta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icon-sync/sources/zeta.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/grayscale-alpha-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/grayscale-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/jpeg-cmyk.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/jpeg-exif-orientation.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/jpeg-grayscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/jpeg-rgb-opaque.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/palette-trns-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-128-exact-hidden-rgb.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-16bit-grayscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-anisotropic-tall.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-anisotropic-wide.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-exif-orientation.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-icc-profile.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-odd-upscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-one-axis-width-downscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-one-axis-width-upscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-tiny-1x1.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/png-tiny-nonsquare.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/rgb-downscale-png.rgba.zlib — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/rgb-opaque-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/rgba-hard-edges-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/rgba-opaque-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/rgba-partial-alpha-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/rgba-zero-alpha-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/webp-lossy-rgb.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/webp-lossy-rgba.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/webp-rgb-lossless.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/decoded/webp-rgba-lossless.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/grayscale-alpha-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/grayscale-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/jpeg-cmyk.jpg — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/jpeg-exif-orientation.jpg — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/jpeg-grayscale.jpg — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/jpeg-rgb-opaque.jpg — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/jpeg-truncated.jpg — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/palette-trns-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-128-exact-hidden-rgb.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-16bit-grayscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-anisotropic-tall.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-anisotropic-wide.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-exif-orientation.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-icc-profile.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-odd-upscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-one-axis-width-downscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-one-axis-width-upscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-tiny-1x1.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-tiny-nonsquare.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/png-truncated.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/rgb-downscale-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/rgb-opaque-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/rgba-hard-edges-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/rgba-opaque-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/rgba-partial-alpha-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/rgba-zero-alpha-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/webp-lossy-rgb.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/webp-lossy-rgba.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/webp-rgb-lossless.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/inputs/webp-rgba-lossless.webp — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/grayscale-alpha-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/grayscale-alpha-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/grayscale-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/grayscale-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/jpeg-cmyk.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/jpeg-cmyk.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/jpeg-exif-orientation.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/jpeg-exif-orientation.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/jpeg-grayscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/jpeg-grayscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/jpeg-rgb-opaque.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/jpeg-rgb-opaque.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/palette-trns-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/palette-trns-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-128-exact-hidden-rgb.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-128-exact-hidden-rgb.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-16bit-grayscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-16bit-grayscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-anisotropic-tall.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-anisotropic-tall.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-anisotropic-wide.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-anisotropic-wide.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-exif-orientation.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-exif-orientation.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-icc-profile.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-icc-profile.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-odd-upscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-odd-upscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-one-axis-width-downscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-one-axis-width-downscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-one-axis-width-upscale.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-one-axis-width-upscale.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-tiny-1x1.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-tiny-1x1.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-tiny-nonsquare.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/png-tiny-nonsquare.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgb-downscale-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgb-downscale-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgb-opaque-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgb-opaque-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgba-hard-edges-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgba-hard-edges-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgba-opaque-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgba-opaque-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgba-partial-alpha-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgba-partial-alpha-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgba-zero-alpha-png.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/rgba-zero-alpha-png.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/webp-lossy-rgb.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/webp-lossy-rgb.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/webp-lossy-rgba.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/webp-lossy-rgba.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/webp-rgb-lossless.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/webp-rgb-lossless.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/webp-rgba-lossless.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] tools/asset-prep/tests/fixtures/icons/reference/webp-rgba-lossless.rgba — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/aars/cache-only.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/aars/empty.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/aars/no-assets.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/aars/standard-bzip2.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/aars/standard-lzma.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/aars/standard.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/aars/version-one.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/gradle-home/caches/modules-2/files-2.1/com.tom-roush/pdfbox-android/1.0.0/aaaaaaaa/pdfbox-android-1.0.0.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/gradle-home/caches/modules-2/files-2.1/com.tom-roush/pdfbox-android/2.0.0/bbbbbbbb/pdfbox-android-2.0.0.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] tools/asset-prep/tests/fixtures/pdfbox/gradle-home/single/caches/modules-2/files-2.1/com.tom-roush/pdfbox-android/2.0.27.0/cccccccc/pdfbox-android-2.0.27.0.aar — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
