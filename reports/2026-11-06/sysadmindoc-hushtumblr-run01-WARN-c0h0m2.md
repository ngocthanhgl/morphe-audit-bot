# SysAdminDoc/HushTumblr — 2026-11-06

Commit: 6ec6222109f908f2c2f05fbf130b48c54c580775 | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/HideHashtagsPatch.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.patches.tumblr.lookup.fieldRef
import app.morphe.patches.tumblr.misc.extension.freeLocalsAt
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.iface.instruction.TwoRegisterInstruction
internal const val TV_MORE_HOOK = "$POST_PARTS->tvMore(Landroid/view/View;Ljava/lang/CharSequence;)V"
private const val TEXT_VIEW = "Landroid/widget/TextView;"
private const val SET_TEXT = "$TEXT_VIEW->setText(Ljava/lang/CharSequence;)V"

 * Right after it writes that line, `PostParts.tvMore` gets the card's "... more" label and the line,
 * since Tumblr only hides the line when it's empty and would leave the label there alone.
        // The label's hook comes later in the method, so it goes in first and the split keeps its index.
        tvTags.method.addInstructions(
            tvTags.moreAt,
            """
                iget-object v${tvTags.scratch}, v${tvTags.self}, ${tvTags.more}
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/HideSaveButtonPatch.kt — new non-allowlisted URL or IP</summary>

```
 * `POST_STASH` flag is on (`oji.f`), so with the flag off the hook is never asked. 47.0.0.108's
 * check (`t4k.f`) also wants `POST_STASH_WRITE` and a published post; with both flags forced on in
 * Tumblr's saved feature config the button shows, and the hook takes it out with no gap (emulator,
 * 2026-11-05). Community posts' own footer has no Save button. Found by reading Tumblr 46.5.0.109
 * (2026-10-11).

```

</details>


__
