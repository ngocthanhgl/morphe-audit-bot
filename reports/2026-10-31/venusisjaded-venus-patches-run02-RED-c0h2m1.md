# VenusIsJaded/Venus-Patches — 2026-10-31

Commit: cf932ffa02dd948bed3c7191ca0dc8c575fc390b | Status: RED | crit:0 high:2 med:1

<details>
<summary>[medium] patches/src/main/resources/venus/bootstrap.js — new non-allowlisted URL or IP</summary>

```
    if (features.listenAlong) selectModules([13162]);
        fixEmbeds:false, fixEmbedsSites:"", fixEmbedsClean:true, fixEmbedsDark:true, fixEmbedsStyle:"full", fixEmbedsTranslate:"off", fixEmbedsLanguage:"en", tenorGifs:false, tenorGifsSource:"both", hideBlocked:false, hideBlockedBlocked:true, hideBlockedIgnored:true, hideBlockedReplies:false, hideBlockedCloseDms:false, bulkDelete:false, bulkDeleteConfirm:true, bulkDeleteIncludeCached:true, experiments:false, noHandsfree:false, voiceOptions:false, voiceOptionsVolume:false, voiceOptionsVolumeLevel:50, voiceOptionsOutput:"default", voiceOptionsJoinSound:true, voiceOptionsLeaveSound:true, voiceOptionsSoundVolume:100, voiceOptionsExit:false, voiceOptionsExitSound:"", cleanChannels:false, cleanChannelsEmoji:true, cleanChannelsSymbols:true, cleanChannelsFonts:true, cleanChannelsSpaces:false, anonFiles:false, staffTag:false, staffTagOwner:true, staffTagAdmin:true, staffTagManager:true, staffTagMod:true, staffTagCrown:true, removedAlerts:false, removedAlertsFriends:true, removedAlertsServers:true, removedAlertsClosed:true, removedAlertsPush:false, fullImages:false, fullImagesChat:true, fullImagesViewer:true, fullImagesGifs:false, fullImagesAvatars:true, alwaysTrust:false, alwaysTrustLinks:true, alwaysTrustFiles:true, noConfirmPin:false, clickableMentions:false, hideAnything:false, hideAnythingSpots:"", listenAlong:false, listenAlongOffset:0, language:"auto", hiddenFeatures:"" };
            fixEmbeds: false, fixEmbedsSites: "", fixEmbedsClean: true, fixEmbedsDark: true, fixEmbedsStyle: "full", fixEmbedsTranslate: "off", fixEmbedsLanguage: "en", tenorGifs: false, tenorGifsSource: "both", hideBlocked: false, hideBlockedBlocked: true, hideBlockedIgnored: true, hideBlockedReplies: false, hideBlockedCloseDms: false, bulkDelete: false, bulkDeleteConfirm: true, bulkDeleteIncludeCached: true, experiments: false, noHandsfree: false, voiceOptions: false, voiceOptionsVolume: false, voiceOptionsVolumeLevel: 50, voiceOptionsOutput: "default", voiceOptionsJoinSound: true, voiceOptionsLeaveSound: true, voiceOptionsSoundVolume: 100, voiceOptionsExit: false, voiceOptionsExitSound: "", cleanChannels: false, cleanChannelsEmoji: true, cleanChannelsSymbols: true, cleanChannelsFonts: true, cleanChannelsSpaces: false, anonFiles: false, staffTag: false, staffTagOwner: true, staffTagAdmin: true, staffTagManager: true, staffTagMod: true, staffTagCrown: true, removedAlerts: false, removedAlertsFriends: true, removedAlertsServers: true, removedAlertsClosed: true, removedAlertsPush: false, fullImages: false, fullImagesChat: true, fullImagesViewer: true, fullImagesGifs: false, fullImagesAvatars: true, alwaysTrust: false, alwaysTrustLinks: true, alwaysTrustFiles: true, noConfirmPin: false, clickableMentions: false, hideAnything: false, hideAnythingSpots: "", listenAlong: false, listenAlongOffset: 0, language: "auto", hiddenFeatures: ""
    function listenAlongOffsetValue(value) { const n = Math.round(Number(value)); return Number.isFinite(n) ? Math.max(-10, Math.min(10, n)) : 0; }
        if (key === "listenAlongOffset") return listenAlongOffsetValue(value);
        if (key === "listenAlongOffset") {
            if (typeof value !== "number" || !Number.isFinite(value)) return false;
            const level = listenAlongOffsetValue(value);
            if (settings[key] === level && status.storage !== "loading" && status.storage !== "waiting") return true;
            settings[key] = level; dirty.add(key); save(); notify(key); return true;
        }
        return featureTable[key] = key === "reviewWarning" ? "reviewDB" : key === "emojis" || key === "stickers" || key === "hyperlinks" ? "freeNitro" : key === "noDeleteSave" || key === "noDeleteLimit" || key === "noDeleteEdits" || key === "noDeleteColor" || key === "noDeleteBrightness" ? "noDelete" : /^pi[A-Z]/.test(key) ? "platformIndicators" : key === "pastelAll" || key === "pastelContent" ? "pastelize" : key === "readAllMode" ? "readAll" : /^quests[A-Z]/.test(key) ? "quests" : /^badges[A-Z]/.test(key) ? "badges" : /^gesture[A-Z]/.test(key) ? "gestures" : /^translate[A-Z]/.test(key) ? "translate" : /^removedAlerts[A-Z]/.test(key) ? "removedAlerts" : /^userNotif[A-Z]/.test(key) ? "userNotif" : /^accountSwitcher[A-Z]/.test(key) ? "accountSwitcher" : /^hiddenChannels[A-Z]/.test(key) ? "hiddenChannels" : /^customThemes[A-Z]/.test(key) ? "customThemes" : /^materialYou[A-Z]/.test(key) ? "materialYou" : /^iconPacks[A-Z]/.test(key) ? "iconPacks" : /^messageHighlight[A-Z]/.test(key) ? "messageHighlight" : /^serverInfo[A-Z]/.test(key) ? "serverInfo" : /^fixEmbeds[A-Z]/.test(key) ? "fixEmbeds" : /^tenorGifs[A-Z]/.test(key) ? "tenorGifs" : /^hideBlocked[A-Z]/.test(key) ? "hideBlocked" : /^bulkDelete[A-Z]/.test(key) ? "bulkDelete" : key === "systemFontSource" ? "systemFont" : key === "systemEmojiSource" ? "systemEmoji" : /^cleanChannels[A-Z]/.test(key) ? "cleanChannels" : /^voiceOptions[A-Z]/.test(key) ? "voiceOptions" : /^anonFiles[A-Z]/.test(key) ? "anonFiles" : /^staffTag[A-Z]/.test(key) ? "staffTag" : /^fullImages[A-Z]/.test(key) ? "fullImages" : /^alwaysTrust[A-Z]/.test(key) ? "alwaysTrust" : /^hideAnything[A-Z]/.test(key) ? "hideAnything" : /^listenAlong[A-Z]/.test(key) ? "listenAlong" : key;
        customThemes:[15652, "EyeDropperIcon"], iconPacks:[11063, "ImageSparkleIcon"], messageHighlight:[16947, "PaintbrushThinIcon"], serverInfo:[5046, "CircleInformationIcon"], serverEdit:[9720, "PencilIcon"], fixEmbeds:[12910, "EmbedIcon"], tenorGifs:[9748, "GifIcon"], nitroThemes:[17143, "SparklesIcon"], materialYou:[15560, "PaintPaletteIcon"], hideBlocked:[17072, "ChatShieldIcon"], bulkDelete:[6868, "CircleCheckIcon"], experiments:[15894, "BeakerIcon"], cleanChannels:[12605, "MagicWandIcon"], noHandsfree:[12271, "HeadphonesIcon"], voiceOptions:[8224, "VoiceNormalIcon"], staffTag:[10262, "CrownIcon"], removedAlerts:[5036, "UserMinusIcon"], hideAnything:[10260, "XLargeIcon"], fullImages:[11587, "ImagesIcon"], alwaysTrust:[10410, "ShieldIcon"], noConfirmPin:[10334, "PinIcon"], clickableMentions:[8213, "AtIcon"], listenAlong:[12271, "HeadphonesIcon"]};
        listenAlong:["Listen along", "Spotify", "Music", "Friends", "Profile", "Sync"],
        const iconFor = key => { if (key === "listenAlong" && typeof ListenAlongRowIcon === "function") return ListenAlongRowIcon; const found = FEATURE_ICONS[key]; return found ? venusIcon(found[0], found[1], icon) : icon; };
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://api.spotify.com with previously seen Location, Clipboard, getSerial, Socket (2026-10-30)</summary>

LLM review: suspicious (0.5, exfiltration): No actual code diff was provided, only a static-analysis summary flagging potential exfiltration to https://api.spotify.com involving Location, Clipboard, getSerial, and Socket APIs. Without the diff content, exact offending lines cannot be identified, so the malicious threshold cannot be met. The flagged behavior warrants manual inspection.

```
(see report of 2026-10-30 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com, https://plugins-list.pages.dev, https://media.discordapp.net, https://discord.gg, https://codeberg.org, https://fixembed.app, https://g.tenor.com, https://fxmas.to, https://discord.com (2026-10-30) with new getAccounts</summary>

LLM review: suspicious (0.72, exfiltration): The static-analysis reason flags cross-window exfiltration via bootstrap.js with a previously seen host list and a new getAccounts call, but the excerpt provided is truncated and does not show the actual offending code lines. Without the exact line numbers of the suspicious network calls or getAccounts usage, confidence is below the 0.85 threshold required for a malicious verdict. The evidence entry is speculative since the line reference is inferred from the truncated excerpt rather than confirmed from the file. This warrants further investigation as suspicious exfiltration behavior but cannot be confirmed as malicious from the given data alone.

```
(see report of 2026-10-30 for the earlier half)
```

</details>


__
