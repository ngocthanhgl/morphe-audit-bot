# mich111discord/MightyMichs-Patches — 2026-11-13

Commit: e084d33302f9fe20746ef1b7fccc2435842fff03 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/mightymich/morphe/patches/com.whatsapp/KeepDeletedMessages.kt — new non-allowlisted URL or IP</summary>

```
import com.android.tools.smali.dexlib2.AccessFlags
 * Keep "Delete for everyone" messages visible locally on WhatsApp 2.26.43.x.
 *
 * Strategy (obfuscated class names — anchor on retained source-file / log strings):
 *  1. No-op StandardRevokePreProcessor / RevokePreProcessor / RevokeEditProcessor
 *     entry methods that apply incoming revokes (return-void).
 *  2. Force isRevokeMessage / isRevoked / messageIsRevoke ()Z → false so UI rows
 *     keep original text instead of the deleted placeholder.
 *  3. Soft-success — partial apply still installs; full wipe needs server-side data.
 *
 * Verified string anchors on 2.26.43.76.
    description = "Show messages that were deleted for everyone. Client-side only; " +
        "already-wiped history cannot be restored.",
        description = "Reserved for future UI tinting of kept-deleted rows.",

```

</details>


__
