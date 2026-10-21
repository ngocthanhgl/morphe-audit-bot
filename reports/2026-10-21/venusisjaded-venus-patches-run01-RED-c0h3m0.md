# VenusIsJaded/Venus-Patches — 2026-10-21

Commit: 7cd8ea91272e15c18cdb8704118e2ca6cb5f6d40 | Status: RED | crit:0 high:3 med:0

<details>
<summary>[high] patches/src/main/resources/venus/bootstrap.js — sensitive source reaches network sink [llm: benign 0.98 — no ban]</summary>

LLM review: benign (0.98, benign-other): The excerpt only initializes a fixed table of numeric Metro module IDs and conditionally enables additional module IDs based on feature flags. It does not collect sensitive data, serialize or encode source data, invoke a network API, or transmit information. The reported source-to-network flow is not present in the shown code; these lines are consistent with a local module-selection optimization.

```
    // Metro IDs Venus wraps, as a dense table: decorateDefine checks it for all ~17.7k modules at startup, and an
    // indexed read is ~3x cheaper than Set.has on Hermes (tests/bench/define_wrapper.js). 120 is RN's initializer.
    // IDs past the end read as undefined, so a module added in a later bundle is simply left alone.
    const targetModules = new Uint8Array(32768);
    function selectModules(ids) { for (let i = 0; i < ids.length; i++) targetModules[ids[i]] = 1; }
    selectModules([17, 19, 120, 1162, 2116, 11129, 14409, 14500]);
    if (features.picker) targetModules[414] = 1;
    if (features.copyBios) targetModules[10987] = 1;
    if (features.noTyping) targetModules[11604] = 1;
    if (features.readAll) targetModules[16232] = 1;
    if (features.systemEmoji) targetModules[6625] = 1;
    if (features.hideCall) targetModules[12956] = 1;
    if (features.youBarSettings) targetModules[16335] = 1;
    if (features.iconPacks) selectModules([81, 84, 328, 1193, 4579, 4593, 9758]);
    if (features.serverInfo) selectModules([1377, 16226]);
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://cdn.discordapp.com, https://discord.gg, https://codeberg.org with previously seen Location, Clipboard, Socket (2026-10-18)</summary>

LLM review: suspicious (0.76, exfiltration): The report identifies newly introduced external origins (cdn.discordapp.com, discord.gg, and codeberg.org) in a file associated with cross-window access to Location, Clipboard, and Socket APIs, creating a plausible path for sensitive data to leave the application. However, the supplied excerpt omits the implementation and exact line numbers, so it does not establish what data is read, how it is encoded or transmitted, or whether the hosts are merely legitimate asset/update endpoints. The evidence therefore warrants suspicion but is insufficient for a malicious verdict.

```
(see report of 2026-10-18 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com, https://plugins-list.pages.dev, https://media.discordapp.net (2026-10-18) with new Location, Clipboard, Socket</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-10-18 for the earlier half)
```

</details>


__
