# SysAdminDoc/HushTelegram — 2026-11-18

Commit: 9f45798aee16fd3cceda6acd7c4717e17de108af | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/telegram/misc/apps/NewChatsBlockSupport.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.util.writesReaching
 * (13.2), the full form handed no callback, so every write of its callback register that can reach
 * it is a `const/4 #0` and nothing reaches it from the method's start. Telegram's builds null that
 * register once. Plus Messenger 13.2.2.1 nulls it on each of the two ways into a member's watch (a
 * chat read from storage first, and one already loaded), with its own `const/4 #0` on each, so it
 * reads as the same plain watch.
    val writes = flow.writesReaching(at, this[at].namedRegisters().last())
    return writes.isNotEmpty() && writes.all { write -> write >= 0 && this[write].let {
        it.opcode == Opcode.CONST_4 && (it as NarrowLiteralInstruction).narrowLiteral == 0
    } }
    // A member's way watches the chat the plain way, so the branch is still the one it was. Plus
    // Messenger's straight run ends in a goto back into the tail it shares with a visitor's way.

```

</details>


__
