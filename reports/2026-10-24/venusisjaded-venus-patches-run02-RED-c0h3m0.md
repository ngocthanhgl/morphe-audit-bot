# VenusIsJaded/Venus-Patches — 2026-10-24

Commit: 63b6329176558c2c18ac6e60ff5042960a85473b | Status: RED | crit:0 high:3 med:0

<details>
<summary>[high] patches/src/main/resources/venus/bootstrap.js — sensitive source reaches network sink</summary>

LLM review: suspicious (0.6, exfiltration): The excerpt shows feature-gated Metro module selection and direct target module assignments. The static-analysis signal suggests sensitive source may reach a network sink, but the provided code does not explicitly show a network call or confirmed malicious behavior. This warrants further review.

```
    // Inspected Metro IDs for the SHA-256-pinned 350.8 bundle; never scan or eagerly require modules.
    // indexed read is ~3x cheaper than Set.has on Hermes. 120 is RN's initializer.
    selectModules([17, 19, 120, 1162, 2129, 10664, 14839, 14971]);
    if (features.voice) selectModules([1295, 7752, 7755]);
    if (features.copyBios) targetModules[10615] = 1;
    if (features.dashless) selectModules([2065, 5421, 5412, 7365]);
    if (features.favouriteAnything) selectModules([13066, 9732, 9735]);
    if (features.freeNitro) selectModules([1390, 2065, 5987, 6030, 4769, 14299, 7047, 7174]);
    if (features.noTyping) targetModules[11668] = 1;
    if (features.quickDelete) selectModules([5300, 1126]);
    if (features.noDelete) selectModules([584, 5432, 5434, 1390, 2065, 7174, 7742]);
    if (features.jumpToTop) selectModules([11968, 11969, 11970, 9379, 7174, 5432]);
    if (features.hiddenChannels) selectModules([1085, 1096, 1112, 2065, 2116, 4748, 7246, 4750, 5421, 7174, 584, 1390, 16671, 8218]);
    if (features.pastelize) selectModules([7742, 1264, 2125]);
    if (features.platformIndicators) selectModules([5108, 5112, 1390, 2065, 10533, 10229, 12862, 16475, 8792, 14419, 13156]);
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://cdn.discordapp.com, https://discord.gg, https://fixembed.app, https://g.tenor.com with previously seen Location, Clipboard, Socket (2026-10-21)</summary>

LLM review: suspicious (0.8, exfiltration): The static-analysis excerpt reports completed cross-window exfiltration using newly observed hosts and previously seen Location, Clipboard, and Socket access. The available evidence does not include exact line numbers, so the finding is not fully verifiable as malicious under the stated criteria and is flagged as suspicious pending review.

```
(see report of 2026-10-21 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com, https://plugins-list.pages.dev, https://media.discordapp.net, https://discord.gg, https://codeberg.org (2026-10-21) with new Location, Clipboard, Socket</summary>

LLM review: suspicious (0.7, exfiltration): The static-analysis hint reports cross-window exfiltration involving Location, Clipboard, and Socket after previously observed hosts. The excerpt does not include the actual changed lines, so the exact payload cannot be fully verified; the behavior pattern is suspicious and warrants further review.

```
(see report of 2026-10-21 for the earlier half)
```

</details>


__
