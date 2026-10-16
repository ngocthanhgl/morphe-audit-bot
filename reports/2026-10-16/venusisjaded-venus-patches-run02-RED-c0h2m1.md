# VenusIsJaded/Venus-Patches — 2026-10-16

Commit: ff755ab67629f3475b956fda7bb7e5835ca7888f | Status: RED | crit:0 high:2 med:1

<details>
<summary>[medium] patches/src/main/resources/venus/bootstrap.js — anonymizer/risky-infra URL: https://plugins-list.pages.dev</summary>

```
    if (features.dashless) selectModules([2051, 4990, 5314, 7099]);
    if (features.jumpToTop) selectModules([11642, 11643, 11644, 8838, 6880, 5057]);
    if (features.quests) selectModules([585, 7120, 7179, 13174, 13212]);
    if (features.gestures) selectModules([7414, 9652, 11105, 11666, 1378, 10905]);
    if (features.userNotif) selectModules([585, 1378, 2051, 2073, 4482, 4877, 7179, 13174, 13212]);
    if (features.customThemes) selectModules([590, 592, 1194, 4551, 9542]);
    if (features.messageHighlight) selectModules([585, 1378, 5057, 7378]);
    const revision = "1.13.0";
        accountSwitcher:false, accountSwitcherYouBar:true, appIcons:false, customThemes:false, customThemesBackground:true,
        messageHighlight:false, messageHighlightThickness:2, messageHighlightPingColor:"default", messageHighlightDeletedColor:"default", language:"auto" };
    // Left bar thickness multiplier (1x = 2dp default, 2x = 4dp, 3x = 6dp, 4x = 8dp) and highlight color presets (#60).
    const HIGHLIGHT_THICKNESSES = [1, 2, 3, 4];
    const HIGHLIGHT_COLOR_MAP = {default:"", yellow:"#f0b232", blurple:"#5865f2", green:"#23a55a", cyan:"#00a8fc", pink:"#eb459e", purple:"#9b59b6", orange:"#e67e22", red:"#f23f43"};
    function isHighlightColor(value) {
        return typeof value === "string" && (owns(HIGHLIGHT_COLOR_MAP, value) || /^#[0-9a-fA-F]{6}$/.test(value.trim()));
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://cdn.discordapp.com, https://plugins-list.pages.dev with previously seen Location, Socket (2026-10-15)</summary>

```
(see report of 2026-10-15 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com (2026-10-15) with new Clipboard</summary>

```
(see report of 2026-10-15 for the earlier half)
```

</details>


__
