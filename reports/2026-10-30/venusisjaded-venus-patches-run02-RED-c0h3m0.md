# VenusIsJaded/Venus-Patches — 2026-10-30

Commit: 68d0af9a3d844116678507f7ccf52c7ca84023eb | Status: RED | crit:0 high:3 med:0

<details>
<summary>[high] patches/src/main/resources/venus/bootstrap.js — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
    if (features.anonFiles) selectModules([7755, 7784]);
    if (features.hiddenChannels) selectModules([1085, 1096, 1112, 2065, 2116, 4748, 7246, 4750, 5421, 7174, 584, 1390, 16671, 8218, 6035, 6078, 14193, 7477, 14008, 16501, 8449]);
    if (features.userNotif) selectModules([584, 1390, 2065, 2087, 2116, 2125, 4760, 5108, 7012, 9699, 13933, 13968]);
    if (features.customThemes) selectModules([589, 590, 591, 1205, 4831, 4839, 11191, 10368]);
    if (features.materialYou) selectModules([589, 590, 591, 1205, 4831, 4839, 11191]);
    if (features.iconPacks) selectModules([81, 84, 328, 1205, 4817, 4831, 4839, 11191]);
    if (features.serverEdit) selectModules([1415, 2087, 16748, 8633, 8634, 18285]);
    if (features.hideBlocked) selectModules([584, 2065, 2116, 4760, 5432, 7015, 7308, 11624]);
    if (features.staffTag) targetModules[7742] = 1;
    if (features.fullImages) selectModules([1415, 1496, 8388]);
    if (features.alwaysTrust) selectModules([8260, 8488]);
    if (features.noConfirmPin) selectModules([5300, 1126]);
    if (features.clickableMentions) selectModules([1390, 2065, 2116, 11953]);
    if (features.removedAlerts) selectModules([584, 1390, 6098, 7018, 8633, 9699, 13933, 13968]);
    if (features.hideAnything) selectModules([13092, 14973, 14974, 9115, 10028, 15371, 15465, 11935, 11942, 11946, 11956, 11957, 12854, 13425, 14827, 16467, 14279, 8525, 8775, 10533, 11997, 14206, 14212, 14143, 14216, 12364, 12365, 13418, 10614, 6882, 13402, 13181, 16466, 16575, 12208, 11864, 10515, 17567, 16074, 16577, 17499, 17487, 10748]);
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://discord.com, https://cdn.discordapp.com with previously seen Location, Clipboard, getSerial, Socket (2026-10-27)</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-10-27 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com, https://plugins-list.pages.dev, https://media.discordapp.net, https://discord.gg, https://codeberg.org, https://fixembed.app, https://g.tenor.com, https://fxmas.to (2026-10-27) with new Clipboard, Socket</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-10-27 for the earlier half)
```

</details>


__
