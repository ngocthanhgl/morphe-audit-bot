# SysAdminDoc/HushTumblr — 2026-11-01

Commit: 9f1065e09cd54b5f4ef29a883830cc995ec60360 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/timeline/TimelineListHookPatch.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.patches.tumblr.lookup.hasShape
import app.morphe.patches.tumblr.lookup.instructionList
import app.morphe.patches.tumblr.lookup.mutableOf
import app.morphe.patches.tumblr.lookup.only
import app.morphe.patches.tumblr.lookup.requireShape
internal const val DIRECT_POST_HOOK = "$EXTENSION_PACKAGE/timeline/DirectPosts;->opening(Ljava/lang/String;)V"
private const val TUMBLR_SERVICE = "Lcom/tumblr/rumblr/TumblrService;"
internal const val POST_PERMALINK = "$TUMBLR_SERVICE->postPermalink(Ljava/lang/String;Ljava/lang/String;)Lretrofit2/Call;"
 *
 * A link or a notification opens one post through one query, and a filtered post left that page
 * empty, so the query tells the extension which post it's asking for, see [resolveDirectPost].
        val directPost = resolveDirectPost()
        directPost.query.addInstructions(
            directPost.ask,
            "invoke-static/range { v${directPost.id} .. v${directPost.id} }, $DIRECT_POST_HOOK",
```

</details>


__
