# byehi98/okish-morphe-patches — 2026-11-10

Commit: a949204e9050cc9e4f03aad29c252f83e5ef2d44 | Status: RED | crit:0 high:2 med:1

<details>
<summary>[info] extensions/offtheroad/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
dependencies {
    compileOnly(libs.annotation)
}

```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/minutestilldawn/patches/pairip/PoolValues1102.kt — root execution with network sink</summary>

LLM review: suspicious (0.75, backdoor): The file is marked 'GENERATED FILE — do not edit by hand' and references an external 'PairipBypassPatch', suggesting it was created to bypass a feature rather than fix a vulnerability. Its purpose is to supply static string pools for ObFS, but the surrounding comments mention a 'network sink' and fields that would require a PairIP VM that cannot run on a re-signed build—indicating an attempt to hide runtime behavior or enable remote execution. Although no explicit network calls appear in the snippet, the description of a 'root execution with network sink' flags potential covert communication channels. These elements together raise concerns about a backdoor or hidden payload.

```
package app.minutestilldawn.patches.pairip

/**
 * PairIP static string pool values for 20 Minutes Till Dawn 8.7 (1102).
 *
 * GENERATED FILE — do not edit by hand. See [PairipBypassPatch] for why every
 * value is needed and `analysis/minutestilldawn/poolmap/README.md` for how the maps are produced.
 *
 * Each entry is a pool class (`Lowner;`) mapped to `field name -> string value`.
 * The patch writes the value into the field; fields absent from this map are
 * blanked, because the PairIP VM that would have filled them cannot run on a
 * re-signed build.
 */
internal val POOL_VALUES_1102: Map<String, Map<String, String>> = mapOf(
    "Landroid/support/v4/app/ys/ObFS;" to mapOf(
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/minutestilldawn/patches/pairip/PoolValues1104.kt — sensitive source reaches network sink</summary>

LLM review: suspicious (0.7, exfiltration): The file is marked as a GENERATED FILE and explicitly states not to edit it by hand. It defines POOL_VALUES_1104, a map linking pool classes to string values, and includes an opaque token 'VPRvqXHQtJD'. The surrounding comments claim a 'sensitive source reaches network sink', implying that writing these values may cause data to leave the device. Such characteristics point toward a potential supply-chain or exfiltration vector rather than a benign configuration change.

```
package app.minutestilldawn.patches.pairip

/**
 * PairIP static string pool values for 20 Minutes Till Dawn 8.7 (1104).
 *
 * GENERATED FILE — do not edit by hand. See [PairipBypassPatch] for why every
 * value is needed and `analysis/minutestilldawn/poolmap/README.md` for how the maps are produced.
 *
 * Each entry is a pool class (`Lowner;`) mapped to `field name -> string value`.
 * The patch writes the value into the field; fields absent from this map are
 * blanked, because the PairIP VM that would have filled them cannot run on a
 * re-signed build.
 */
internal val POOL_VALUES_1104: Map<String, Map<String, String>> = mapOf(
    "La/fw/VPRvqXHQtJD;" to mapOf(
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/minutestilldawn/patches/pairip/PoolValues1105.kt — new non-allowlisted URL or IP</summary>

```
package app.minutestilldawn.patches.pairip

/**
 * PairIP static string pool values for 20 Minutes Till Dawn 8.7 (1105).
 *
 * GENERATED FILE — do not edit by hand. See [PairipBypassPatch] for why every
 * value is needed and `analysis/minutestilldawn/poolmap/README.md` for how the maps are produced.
 *
 * Each entry is a pool class (`Lowner;`) mapped to `field name -> string value`.
 * The patch writes the value into the field; fields absent from this map are
 * blanked, because the PairIP VM that would have filled them cannot run on a
 * re-signed build.
 */
internal val POOL_VALUES_1105: Map<String, Map<String, String>> = mapOf(
    "Landroidx/core/transition/nW/suOnHQPNBDQFhf;" to mapOf(
```

</details>


__
