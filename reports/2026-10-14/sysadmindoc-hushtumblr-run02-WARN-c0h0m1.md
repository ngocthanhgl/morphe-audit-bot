# SysAdminDoc/HushTumblr — 2026-10-14

Commit: 997141db9369564e0f7a6bbb589b326f9143e2ca | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/HideNoteCountsPatch.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.patches.tumblr.misc.extension.returnEarlyWhen
import com.android.tools.smali.dexlib2.iface.instruction.ReferenceInstruction
import com.android.tools.smali.dexlib2.iface.reference.TypeReference
internal const val NOTES_TAB_COUNTS_HOOK = "$POST_FOOTER->hideNotesTabCounts()Z"

/** The three tabs of a post's notes screen, by the fragments Tumblr makes for them, kept by name in 46.5.0.109. */
internal val NOTES_TAB_FRAGMENTS = listOf(
    "Lcom/tumblr/notes/view/replies/PostNotesRepliesFragment;",
    "Lcom/tumblr/notes/view/reblogs/PostNotesReblogsFragment;",
    "Lcom/tumblr/notes/view/likes/PostNotesLikesFragment;",
)
 * The notes screen's comment, reblog and like tabs each show a count too, which go blank the way
 * Tumblr leaves a count it doesn't have yet ([resolveNotesTabCount]), read each time the tabs are
 * drawn.
        " included, and the counts off the top of a post's notes and its tabs. The buttons stay and still work. Starts off." +
```

</details>


__
