# mich111discord/MightyMichs-Patches — 2026-11-27

Commit: e271dc8b953dc44be612b74f58a7355d4290c212 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/mightymich/morphe/patches/com.whatsapp/KeepDeletedMessages.kt — new non-allowlisted URL or IP [llm: benign 0.72 — no ban]</summary>

LLM review: benign (0.72, benign-other): The visible code is a smali-level bytecode patch that intercepts WhatsApp's local revoke handling so 'Delete for everyone' messages remain in the local database. Its imports contain no networking classes, and the excerpt shows no URL, IP, socket, HTTP client, or exfiltration sink. The 'new non-allowlisted URL or IP' static-analysis trigger is not corroborated by anything in the provided excerpt — it most plausibly corresponds to a documentation/comment link or a string not shown here. The behavior is a local UI/data-retention modification, which is a user-facing mod rather than covert data theft or a backdoor. Confidence is held below 0.85 because the diff excerpt is truncated and the flagged URL/IP cannot be directly inspected; if the full diff shows that URL being fetched, contacted, or used to download/execute payloads, the verdict should be re-evaluated as suspicious or malicious.

```
import app.morphe.patcher.patch.PatchException
import app.morphe.patcher.patch.bytecodePatch
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.FieldReference
import java.util.logging.Logger
 * Keep "Delete for everyone" messages visible locally on WhatsApp 2.26.43.x - 2.26.46.x.
 *
 * How WhatsApp applies a revoke:
 *  - `RevokeEditProcessor` (obfuscated) receives an `FMessageRevoked` message and calls
 *    the edit/revoke store's static apply method.
 *  - That store method finds the original message row, rewrites/clears it and inserts the
 *    revoke bookkeeping. This is what makes the message disappear for the recipient.
 *
 * The previous implementation blindly prepended `return-void`/`return v0` to *every*
```

</details>


__
