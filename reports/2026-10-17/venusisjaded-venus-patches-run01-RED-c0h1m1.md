# VenusIsJaded/Venus-Patches — 2026-10-17

Commit: 88a54b133ac20267af81d3a04a4d19c2f84d883e | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] patches/src/main/resources/venus/bootstrap.js — new non-allowlisted URL or IP</summary>

```
    if (features.hiddenChannels) selectModules([1086, 1097, 1113, 2051, 2102, 4470, 6952, 4472, 4990, 6880, 585, 1378, 15859, 5410]);
    const revision = "1.14.0";
        jumpToTop: false, hiddenChannels: false, hiddenChannelsMenu: true, pastelize:false, pastelAll:false, pastelContent:false, platformIndicators:false, piDmHeader:true, piUserList:true, piProfile:true, piHideMobile:true, reviewDB:false, reviewWarning:true, readAll:false, readAllMode:"guilds",
    const featureFor = key => key === "reviewWarning" ? "reviewDB" : key === "emojis" || key === "stickers" || key === "hyperlinks" ? "freeNitro" : key === "noDeleteSave" || key === "noDeleteLimit" || key === "noDeleteEdits" ? "noDelete" : /^pi[A-Z]/.test(key) ? "platformIndicators" : key === "pastelAll" || key === "pastelContent" ? "pastelize" : key === "readAllMode" ? "readAll" : /^quests[A-Z]/.test(key) ? "quests" : /^gesture[A-Z]/.test(key) ? "gestures" : /^translate[A-Z]/.test(key) ? "translate" : /^userNotif[A-Z]/.test(key) ? "userNotif" : /^accountSwitcher[A-Z]/.test(key) ? "accountSwitcher" : /^hiddenChannels[A-Z]/.test(key) ? "hiddenChannels" : /^customThemes[A-Z]/.test(key) ? "customThemes" : /^messageHighlight[A-Z]/.test(key) ? "messageHighlight" : key;
        // The nodes above stay for Discord's settings search; the page itself is the designed About page.
        next.VENUS_GENERAL.screen.getComponent = () => AboutSettings;
        featureGroups = groups.keys = {messages:[], sending:[], people:[], servers:[], appearance:[], quests:[]};
            groups.keys[group].push(key);
            groups.keys[group].push(key);
             section("Link style", [option("hyperlinks", "Short links", "In chat it looks the same either way. Short links only change what's copied or quoted.", "VENUS_FREENITRO")])]}));
        withOptions("servers", "hiddenChannels", "VENUS_HIDDENCHANNELS", "Show hidden channels", "Channels you can't open appear with a lock. Only their name and dates show, not messages.", "Hidden channels", HiddenChannelsSettings);
        // "5 of 26 on", right on the entry, so you see at a glance what Venus is doing before opening it.
        next[P].useDescription = function () {
            useSettings();
            const keys = Object.keys(FEATURE_ICONS).filter(key => features[key]);
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://cdn.discordapp.com, https://media.discordapp.net with previously seen Location, Clipboard, Socket (2026-10-16)</summary>

```
(see report of 2026-10-16 for the earlier half)
```

</details>


__
