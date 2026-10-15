# VenusIsJaded/Venus-Patches — 2026-10-15

Commit: 15d8675975c2543ff168f414bb9167b9583d2d48 | Status: RED | crit:0 high:1 med:0

<details>
<summary>[high] patches/src/main/resources/venus/bootstrap.js — sensitive source reaches network sink</summary>

```
    if (features.quests) selectModules([585, 7120, 13174]);
    if (features.userNotif) selectModules([585, 1378, 2051, 2073, 4482, 4877, 13174]);
    if (features.accountSwitcher) selectModules([1378, 11800, 11801, 11802, 16032]);
    if (features.appIcons) selectModules([1378, 4491, 8621, 13528, 15065, 15066, 16750, 17096]);
    const revision = "1.12.0";
        translate:false, translateTarget:"discord", translateMode:"auto", translateNote:true, translateOriginal:false,
        userNotif:false, userNotifFriends:true, userNotifStatus:true, userNotifMessages:true, userNotifTyping:true, userNotifPush:false,
        accountSwitcher:false, accountSwitcherYouBar:true, appIcons:false, language:"auto" };
        const extra = {};
        if (features.reviewDB && reviewToken && reviewAccount) extra.reviewAuth = {account:reviewAccount, token:reviewToken};
        if (features.userNotif && userNotif.ids.size) extra.userNotifIds = Array.from(userNotif.ids);
        return JSON.stringify(Object.keys(extra).length ? Object.assign({}, settings, extra) : settings);
        if (features.userNotif && key === "userNotifPush" && value && status.storage !== "loading" && status.storage !== "waiting") later(() => userNotifRequestPermissions(false), 0);
        if (features.userNotif && featureFor(key) === "userNotif") userNotifSync();
        if (features.accountSwitcher && featureFor(key) === "accountSwitcher") accountSwitcherSync();
```

</details>


__
