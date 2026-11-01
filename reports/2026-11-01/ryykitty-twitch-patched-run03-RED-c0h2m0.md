# ryykitty/twitch-patched — 2026-11-01

Commit: 96813381fae1149b867aa7e94e64b1fcb561fcc6 | Status: RED | crit:0 high:2 med:0

<details>
<summary>[high] extensions/twitch/src/main/java/dev/twitchpatches/extension/emotes/TwitchEmotes.java — typosquat of allowlisted domain: https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic)</summary>

LLM review: suspicious (0.72, exfiltration): The file is a minimal stub that accepts a Map of tokens and stores it in a static volatile field, then looks up by token string. The lookup path constructs an Emote with an imageUrl derived from the model object. No network calls are visible in this excerpt, but the allowlisted-domain typosquat pattern (static-cdn.jtvnw.net mimicking gstatic) and the fact that the catalogue is mutable and externally writable via bind() suggest potential exfiltration of token/emote metadata through the imageUrl field. The code is incomplete (missing imports, find() body truncated), so full behavior cannot be confirmed from this snippet alone.

```
package dev.twitchpatches.extension.emotes;

import java.util.Collections;
import java.util.Map;

public final class TwitchEmotes {
    private static volatile Map<?, ?> catalogue = Collections.emptyMap();

    private TwitchEmotes() { }

    public static void bind(Map<?, ?> tokens) { catalogue = tokens; }

    static Emote find(String token) {
        Object model = catalogue.get(token);
        return model == null ? null : new Emote(token, imageUrl(EmoteInputBridge.id(model)), false, false);
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/dev/twitchpatches/patches/twitch/emotes/NativePickerHooks.kt — typosquat of allowlisted domain: https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic) [llm: benign 0.92 — no ban]</summary>

LLM review: benign (0.92, benign-other): The excerpt defines Morphe patcher Fingerprint objects for hooking Twitch emote picker methods (toString and <init> with createEmotePickerState marker). It contains no network calls, data exfiltration, typosquatted domains, backdoors, or spyware behavior. The static-analysis flag about static-cdn.jtvnw.net does not correspond to any code present in this excerpt.

```
import app.morphe.patcher.Fingerprint
import app.morphe.patcher.methodCall
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.OneRegisterInstruction
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
private class PickerModelFingerprint(marker: String) : Fingerprint(
    name = "toString",
    strings = listOf(marker),
)

private object NativePickerPresenterFingerprint : Fingerprint(
    name = "<init>",
    strings = listOf("createEmotePickerState"),
)

```

</details>


__
