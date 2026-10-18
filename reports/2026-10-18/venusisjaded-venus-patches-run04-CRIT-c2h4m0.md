# VenusIsJaded/Venus-Patches — 2026-10-18

Commit: cde24fdf431e77a2c36bd1f8cab2e0c426395849 | Status: CRIT | crit:2 high:4 med:0

<details>
<summary>[high] patches/src/main/resources/venus/bootstrap.js — sensitive source reaches network sink [llm: benign 0.92 — no ban]</summary>

```
    // Inspected Metro IDs for the SHA-256-pinned 349.9 bundle; never scan or eagerly require modules.
    const targetModules = new Set([17, 19, 1162, 11129, 14409, 14500]);
    if (features.voice) selectModules([1282, 7268, 7243]);
    if (features.copyBios) selectModules([10987]);
    if (features.dashless) selectModules([2051, 5043, 5796, 7166]);
    if (features.favouriteAnything) selectModules([12767, 10090, 10093]);
    if (features.freeNitro) selectModules([1377, 2051, 5638, 5687, 4528, 13797, 6840, 6965]);
    if (features.noTyping) selectModules([11604]);
    if (features.quickDelete) selectModules([5708, 1126]);
    if (features.noDelete) selectModules([584, 5110, 5112, 1377, 2051, 6965, 7591]);
    if (features.jumpToTop) selectModules([11896, 11897, 11898, 9064, 6965, 5110]);
    if (features.hiddenChannels) selectModules([1085, 1096, 1112, 2051, 2103, 4507, 7039, 4509, 5043, 6965, 584, 1377, 16157, 5879]);
    if (features.pastelize) selectModules([7591, 1251, 2112]);
    if (features.platformIndicators) selectModules([4930, 4908, 1377, 2051, 10843, 10602, 13107, 15962, 9334, 13920, 12849]);
    if (features.reviewDB) selectModules([12872, 13790, 14259, 8716, 6074, 6698, 1377, 584]);
```

</details>

<details>
<summary>[high] patches/src/main/resources/venus/bootstrap.js — risky-infra host combined with other signals: https://plugins-list.pages.dev</summary>

```
    // Inspected Metro IDs for the SHA-256-pinned 349.9 bundle; never scan or eagerly require modules.
    const targetModules = new Set([17, 19, 1162, 11129, 14409, 14500]);
    if (features.voice) selectModules([1282, 7268, 7243]);
    if (features.copyBios) selectModules([10987]);
    if (features.dashless) selectModules([2051, 5043, 5796, 7166]);
    if (features.favouriteAnything) selectModules([12767, 10090, 10093]);
    if (features.freeNitro) selectModules([1377, 2051, 5638, 5687, 4528, 13797, 6840, 6965]);
    if (features.noTyping) selectModules([11604]);
    if (features.quickDelete) selectModules([5708, 1126]);
    if (features.noDelete) selectModules([584, 5110, 5112, 1377, 2051, 6965, 7591]);
    if (features.jumpToTop) selectModules([11896, 11897, 11898, 9064, 6965, 5110]);
    if (features.hiddenChannels) selectModules([1085, 1096, 1112, 2051, 2103, 4507, 7039, 4509, 5043, 6965, 584, 1377, 16157, 5879]);
    if (features.pastelize) selectModules([7591, 1251, 2112]);
    if (features.platformIndicators) selectModules([4930, 4908, 1377, 2051, 10843, 10602, 13107, 15962, 9334, 13920, 12849]);
    if (features.reviewDB) selectModules([12872, 13790, 14259, 8716, 6074, 6698, 1377, 584]);
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://plugins-list.pages.dev with previously seen Location, Clipboard, Socket (2026-10-17)</summary>

```
(see report of 2026-10-17 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com, https://plugins-list.pages.dev, https://media.discordapp.net (2026-10-17) with new Location, Clipboard, Socket</summary>

```
(see report of 2026-10-17 for the earlier half)
```

</details>

<details>
<summary>[critical] cross-window — [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for venusisjaded-venus-patches/cross-window (2026-10-17 then 2026-10-18): exfiltration (0.72)</summary>

```
The static analysis flags a new external host (plugins-list.pages.dev) appearing alongside previously observed exfiltration vectors (Location, Clipboard, Socket). This pattern strongly suggests a new exfiltration channel or data-collection endpoint is being introduced, likely for cross-window data leakage. However, the evidence is indirect — it points to a single line referencing the new host rather than explicit malicious code, and without full file context I cannot confirm the exact mechanism.
```

</details>

<details>
<summary>[critical] cross-window — [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for venusisjaded-venus-patches/cross-window (2026-10-17 then 2026-10-18): exfiltration (0.72)</summary>

```
The diff references a prior exfil report from 2026-10-17 involving the same hosts (cdn.discordapp.com, plugins-list.pages.dev, media.discordapp.net) and the same vectors (Location, Clipboard, Socket). The presence of 'new Location, Clipboard, Socket' alongside these known-attatchment hosts strongly suggests continued or expanded data exfiltration across windows. However, this is a single-line reference/report excerpt rather than direct code evidence, so confidence is moderate rather than high. T
```

</details>


__
