# ryykitty/twitch-patched — 2026-10-31

Commit: 9d1e76433704e62e7e751c35fcc39e9d7b0c5f2b | Status: RED | crit:0 high:1 med:0

<details>
<summary>[high] patches/src/main/kotlin/dev/twitchpatches/patches/twitch/emotes/ReactNativeEmotesPatch.kt — typosquat of allowlisted domain: https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic)</summary>

LLM review: suspicious (0.72, supply-chain): The patch references an allowlisted domain (static-cdn.jtvnw.net) in a requireNestedContract call, which is unusual for a legitimate emotes patch. The repeated domain mentions across multiple lines suggest possible data exfiltration or supply-chain tampering where the patch may be redirecting emotes assets through a third-party CDN. However, without full context of the surrounding code and the rest of the diff, this alone does not meet the 0.85 confidence threshold for a malicious verdict. It warrants further investigation as suspicious.

```
        val image = exports.resolve("EmotePart", setOf("emoteId", "forceStatic", "emoteAnimationsEnabled", "onPress"))
        exports.requireNestedContract("EmotePart", setOf("src", "style", "testID", "chat-emote-wrapper-",
            "https://static-cdn.jtvnw.net/emoticons/v2/"))
        get(RN_ASSET).appendText("\n" + renderEmoteInput(bundle))

```

</details>


__
