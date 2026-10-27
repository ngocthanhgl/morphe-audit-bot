# VenusIsJaded/Venus-Patches — 2026-10-27

Commit: ade5ae67b394af7f7e836e671eb3a66e6a6fa9ae | Status: RED | crit:0 high:2 med:1

<details>
<summary>[medium] patches/src/main/resources/venus/bootstrap.js — new non-allowlisted URL or IP</summary>

```
    if (features.cleanChannels) selectModules([2065, 5421, 5412, 7365]);
    if (features.materialYou) selectModules([589, 590, 591, 1205, 4831, 11191]);
    if (features.hideBlocked) selectModules([4760, 5432, 7308, 11624]);
    if (features.bulkDelete) selectModules([584, 1085, 1390, 2065, 2116, 4750, 5432, 7174, 7742, 9675, 10368, 10694]);
    if (features.experiments) selectModules([584, 1390, 1401]);
    const revision = "1.19.0";
        badges:false, badgesGameTime:true, badgesUniqueGames:true, badgesCycleMinutes:15, badgesGamesAtOnce:2, systemFont:false, systemFontSource:"phone",
        hideGift:false, hideQuestDock:false, hideButtons:false, hideButtonsQuests:true, hideButtonsShop:true, hideButtonsNitro:true, hideButtonsApps:true, hideButtonsPolls:false, hideButtonsPhotos:false, systemEmoji:false, systemEmojiSource:"phone", gestures:false, gestureOwn:"edit", gestureTripleDelete:true, hideCall:false,
        accountSwitcher:false, accountSwitcherYouBar:true, appIcons:false, nitroThemes:false, customThemes:false, customThemesBackground:true, materialYou:false, materialYouColor:"wallpaper", materialYouTint:"balanced",
        fixEmbeds:false, fixEmbedsSites:"", fixEmbedsClean:true, fixEmbedsDark:true, tenorGifs:false, tenorGifsSource:"both", hideBlocked:false, hideBlockedBlocked:true, hideBlockedIgnored:true, hideBlockedReplies:false, bulkDelete:false, bulkDeleteConfirm:true, bulkDeleteIncludeCached:true, experiments:false, noHandsfree:false, cleanChannels:false, cleanChannelsEmoji:true, cleanChannelsSymbols:true, cleanChannelsFonts:true, language:"auto" };
            badges: false, badgesGameTime: true, badgesUniqueGames: true, badgesCycleMinutes: 15, badgesGamesAtOnce: 2, systemFont: false, systemFontSource: "phone",
            hideGift: false, hideQuestDock: false, hideButtons: false, hideButtonsQuests: true, hideButtonsShop: true, hideButtonsNitro: true, hideButtonsApps: true, hideButtonsPolls: false, hideButtonsPhotos: false, systemEmoji: false, systemEmojiSource: "phone", gestures: false, gestureOwn: "edit", gestureTripleDelete: true, hideCall: false,
            accountSwitcher: false, accountSwitcherYouBar: true, appIcons: false, nitroThemes: false, customThemes: false, customThemesBackground: true, materialYou: false, materialYouColor: "wallpaper", materialYouTint: "balanced",
            fixEmbeds: false, fixEmbedsSites: "", fixEmbedsClean: true, fixEmbedsDark: true, tenorGifs: false, tenorGifsSource: "both", hideBlocked: false, hideBlockedBlocked: true, hideBlockedIgnored: true, hideBlockedReplies: false, bulkDelete: false, bulkDeleteConfirm: true, bulkDeleteIncludeCached: true, experiments: false, noHandsfree: false, cleanChannels: false, cleanChannelsEmoji: true, cleanChannelsSymbols: true, cleanChannelsFonts: true, language: "auto"
    // Where Use your phone's font / emojis get their look: the phone's own, or a font file you imported.
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://fixembed.app, https://fxmas.to with previously seen Location, Clipboard, Socket (2026-10-24)</summary>

LLM review: suspicious (0.72, exfiltration): The diff introduces two new external hosts (fixembed.app, fxmas.to) alongside previously observed exfil vectors (Location, Clipboard, Socket). This pattern of adding new C2/data-collection endpoints to an existing exfiltration channel is consistent with an attacker extending their data-stealing infrastructure. However, the evidence is circumstantial — no direct code snippet is shown, only a summary referencing prior activity on 2026-10-24. Without seeing the actual code lines, I cannot confirm malicious intent with the required 0.85 confidence for a malicious verdict. The behavior pattern is strongly suspicious of exfiltration infrastructure expansion.

```
(see report of 2026-10-24 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com, https://plugins-list.pages.dev, https://media.discordapp.net, https://discord.gg, https://codeberg.org, https://fixembed.app, https://g.tenor.com (2026-10-24) with new Clipboard, getSerial</summary>

LLM review: suspicious (0.78, exfiltration): The static-analysis report flags completed cross-window exfiltration and newly observed Clipboard/getSerial-related behavior, which indicates a possible data-theft concern. The excerpt does not include the exact source lines, so the precise offending code cannot be fully verified.

```
(see report of 2026-10-24 for the earlier half)
```

</details>


__
