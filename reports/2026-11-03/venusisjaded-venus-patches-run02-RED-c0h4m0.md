# VenusIsJaded/Venus-Patches — 2026-11-03

Commit: 987b7a22d96d41a0ba80c060b485291e1c7bcc4b | Status: RED | crit:0 high:4 med:0

<details>
<summary>[high] extensions/media/src/main/kotlin/app/venus/media/BackgroundMedia.kt — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.72, exfiltration): The file imports numerous Android system classes (BroadcastReceiver, NotificationManager, PendingIntent, RemoteAction, PictureInPictureParams) and is named BackgroundMedia.kt. While the imports alone do not prove malicious behavior, the combination of network-relevant APIs with a background media processing context is consistent with a potential data exfiltration sink or covert channel. The excerpt provided does not contain executable code, so no specific line can be cited as evidence; however, the static-analysis flag and the file's role in media processing warrant further investigation for hidden reflection or network sink behavior.

```
package app.venus.media

import android.app.Activity
import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.PictureInPictureParams
import android.app.RemoteAction
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.pm.PackageManager
import android.graphics.Bitmap
```

</details>

<details>
<summary>[high] patches/src/main/resources/venus/bootstrap.js — sensitive source reaches network sink</summary>

LLM review: suspicious (0.82, exfiltration): The excerpt shows a function call selectModules() with a large list of numeric module IDs being passed as arguments. This is a classic pattern for dynamic module loading where the set of modules loaded at runtime is controlled by feature flags (features.voice, features.anonFiles, etc.). The presence of many conditional branches selecting different module sets based on feature flags indicates that the application's behavior and capabilities are being dynamically configured by external input. While this could be legitimate code for a feature-rich client, the combination of numerous feature-gated module selections, especially with overlapping IDs across features, suggests a sophisticated payload delivery mechanism where specific modules are loaded based on enabled features. This pattern is consistent with code designed to load hidden or obfuscated functionality based on runtime conditions, which warrants further investigation as it could be used to exfiltrate data through selectively loaded modules or to establish a backdoor.

```
    // Inspected Metro IDs for the SHA-256-pinned 351.11 bundle; never scan or eagerly require modules.
    selectModules([17, 19, 120, 1164, 2132, 11084, 15602, 15733]);
    if (features.voice) selectModules([1297, 8023, 8026]);
    if (features.anonFiles) selectModules([8026, 8056]);
    if (features.copyBios) targetModules[10940] = 1;
    if (features.cleanChannels) selectModules([2068, 5521, 5512, 7635]);
    if (features.favouriteAnything) selectModules([13989, 10035, 10038]);
    if (features.freeNitro) selectModules([1392, 2068, 6243, 6286, 4864, 15066, 7323, 7445]);
    if (features.noTyping) targetModules[12849] = 1;
    if (features.fakeDeafen) selectModules([14755, 18341]);
    if (features.quickDelete) selectModules([5400, 1128]);
    if (features.noDelete) selectModules([584, 5532, 5534, 1392, 2068, 7445, 8013, 9978, 11114]);
    if (features.jumpToTop) selectModules([12920, 12921, 12922, 9683, 7445, 5532]);
    if (features.hiddenChannels) selectModules([1087, 1098, 1114, 2068, 2119, 4843, 7517, 4845, 5521, 7445, 584, 1392, 17357, 8495, 6291, 6362, 14975, 7748, 14788, 17190, 8727]);
    if (features.pastelize) selectModules([8013, 1266, 2128]);
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: new host https://discord.gg, https://cdn.discordapp.com, https://media.discordapp.net, https://discord.com with previously seen Location, Clipboard, getSerial, getAccounts, Socket (2026-10-31)</summary>

LLM review: suspicious (0.72, exfiltration): The flagged file cross-window is referenced but no direct line evidence is provided for the offending lines. The exfil indicators (new Discord hosts combined with previously observed sensitive APIs like Location, Clipboard, getSerial, getAccounts, Socket) strongly suggest cross-window data leakage, but without exact line numbers in the diff we cannot meet the 0.85 confidence threshold required for a malicious verdict. This is best classified as suspicious exfiltration behavior. The report references an earlier half from 2026-10-31, indicating this is part of a recurring pattern rather than a one-off injection.

```
(see report of 2026-10-31 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com, https://plugins-list.pages.dev, https://media.discordapp.net, https://discord.gg, https://codeberg.org, https://fixembed.app, https://g.tenor.com, https://fxmas.to, https://discord.com, https://api.spotify.com (2026-10-31) with new Location, Clipboard, Socket</summary>

LLM review: suspicious (0.62, exfiltration): The static-analysis reason flags cross-window exfiltration behavior, but the evidence is limited to a single file path and line range without specific code references. The listed external hosts (discordapp.com, plugins-list.pages.dev, etc.) are common CDN/asset hosts that could legitimately serve web resources, and the 'new Location, Clipboard, Socket' additions suggest new data-handling capabilities rather than confirmed malicious intent. Without direct code evidence of actual exfiltration vectors (e.g., unsanctioned network calls, clipboard writes, socket connections), this remains suspicious but not definitively malicious. Per the rules, when unsure, choose suspicious rather than malicious.

```
(see report of 2026-10-31 for the earlier half)
```

</details>


__
