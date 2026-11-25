# SysAdminDoc/HushTumblr — 2026-11-25

Commit: 604e06bc0b1bdfd43d49fd22377615e182b62cbc | Status: WARN | crit:0 high:0 med:14

<details>
<summary>[medium] extensions/tumblr/src/main/java/app/hushtumblr/extension/tumblr/timeline/DashboardPosts.java — new non-allowlisted URL or IP</summary>

```
import android.os.Bundle;

 * Hide liked posts, Hide your own reblogs, Hide reblogs of your posts and Hide followed blogs in
 * For you, which take posts out of the dashboard and nowhere else. Tumblr reads a dashboard page,
 * a post you open, a review queue and a Blaze list from the same response, so parsing can't tell
 * them apart. Instead the wrapper
 *
 * <p>A followed blog's post is one Tumblr sent with {@code followed} set ({@link HushPaidPost}),
 * the flag its Follow button starts from. Hide followed blogs in For you takes those out of the
 * For you tab alone, which {@link #onForYou} tells from the tab's own arguments. Following, Your
 * tags and every other tab keep them. A blog followed while its post is on screen stays until a
 * later page brings it again.
    /** Tumblr sent the post as one from a blog the signed-in account follows. */
    static final int FOLLOWED = 4;

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/timeline/CollapseLongPostsPatch.kt — new non-allowlisted URL or IP</summary>

```
// Tumblr 47.3.0.110's names: the class that lists a post's rows for the timeline, the post as it
internal const val POST_COMPOSER = "Llkf;"
internal const val COMPOSED_POST = "Ldm2;"
internal const val BLOCK_ROW = "Lnj2;"
internal const val TIMELINE_SCREEN = "Lzvl;"
 * Tumblr lists the rows it draws for a post in the timeline (`lkf.h` in 47.3.0.110). When the
 * rows drawn before them and reading that index from a list it built with the post (`dm2`'s trail
 * builds it instead ([collapseLongTrailEntries]), before `dm2` or this list reads it.
        " Turn it on in Tumblr settings > HushTumblr > Posts, where the cut can be as short as about 5 lines or as long as two screens.",
        it.name == "h" && it.hasShape(listOf("Lf3g;", "I"), LIST) && !it.isStatic()
            call.definingClass == COMPOSED_POST && call.name == "f" && call.hasShape(emptyList(), LIST)

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/timeline/PostBridgePatch.kt — new non-allowlisted URL or IP</summary>

```
 * 47.0.0.108 (2026-11-06). In 47.3.0.110 Post's liked is `A1()`.
 * Tumblr 47.0.0.108 (2026-11-18). In 47.3.0.110 Post's community is `W0()`.
 * else writes, read as stored. Found by reading Tumblr 47.0.0.108 (2026-11-13). In 47.3.0.110
 * Post's reblogged_from_name is `I0()` and reblogged_root_name `M0()`, ShortBlogInfo's name `j()`,
 * and UserInfo's blogs `k`.

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/timeline/TimelineListHookPatch.kt — new non-allowlisted URL or IP</summary>

```
 * The query that opens one post by itself (`PostPermalinkTimelineFragment`'s in Tumblr 47.3.0.110),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/AppFontPatch.kt — new non-allowlisted URL or IP</summary>

```
 * AndroidX's ResourcesCompat (`uoh` in 47.3.0.110) loads every font resource through one method, View
 * font. Tumblr's font picker (`s79` in 47.3.0.110) answers two fonts with Roboto by family name and
 * The dashboard's view provider (`as0` in 47.3.0.110) inflates its first rows on a background thread

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/DarkBackgroundPatch.kt — new non-allowlisted URL or IP</summary>

```
 * real, so a header Tumblr writes out keeps its color. In 47.3.0.110 those are
 * `HubContainerFragment.L5`, which paints the page's bars, and `HubTimelineFragment`'s `q9` and

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/FitFullScreenVideosPatch.kt — new non-allowlisted URL or IP</summary>

```
 * Tumblr's full-screen player page (`com.tumblr.videohub.b$c` in 47.3.0.110) compares each video's
 * use ExoPlayer's fixed-height mode (`ng8.i` calls `PlayerView.D(2)`), which cuts the sides off any

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/HideBlazePromptsPatch.kt — new non-allowlisted URL or IP</summary>

```
 * reading Tumblr 47.3.0.110 (2026-11-13).
 * when this build doesn't show them the way 47.3.0.110 does.
 * return. In 47.3.0.110 that's `f3g.J()`, asked by the post header's menu (`PostCardHeader.H2`) and
 * the notes screen's (`mmh.y`). The other readers of the label draw the flame and the blog
 * answer. The hook goes in front of that test. In 47.3.0.110 that's `com.tumblr.sharing.d.S6()`.
 * [COMMUNITY_PROMOTE]. In 47.3.0.110 that's `h1g$a.invokeSuspend`, the only caller of `nl4.a`.

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/HideTumblrMartPatch.kt — new non-allowlisted URL or IP</summary>

```
 * notifications, the only instance method taking (ImageView, ImageView, ...) and returning void in
 * the one class whose methods load [DIAMOND_CLICKED]. Tumblr 47.3.0.110 gives it a plain ImageView
 * for the diamond, where 47.0.0.108 gave it Fresco's SimpleDraweeView. `StoreButtons.hideDiamond` goes
                method.parameterTypes[0].toString() == IMAGE_VIEW && method.parameterTypes[1].toString() == IMAGE_VIEW &&

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/LineBetweenPostsPatch.kt — new non-allowlisted URL or IP</summary>

```
 * Tumblr's timeline spacing (`c0m` in 47.3.0.110) is the one list decoration that leaves a gap above
 * there doesn't divide two posts (#15). The spacing's getItemOffsets (`c0m.d`) reads the timeline
 * item above a row and the row's own (`m4a.G0`) to pick the gap's size (`b0m.b`); the extension gets
 * the row first and then both items' payloads (`b5k.l`), and the draw says which row it's on before

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/ShareVideoLinksPatch.kt — new non-allowlisted URL or IP</summary>

```
 * A video in a post (`pom.f` in 47.3.0.110) gets a player built in its container, from details that
 * carry the video's address, and timeline controls (`c1m`) whose long press calls back into the

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/SharperImagesPatch.kt — new non-allowlisted URL or IP</summary>

```
 * Tumblr picks which copy of an image to load (`x3f.f` in 47.3.0.110) from the sizes the post

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/TagBlogSearchPatch.kt — new non-allowlisted URL or IP</summary>

```
 * blog that posted the post (Tumblr's `ze1.D()` for a post card, an empty blog for anything
 * built from a navigation state and a blog. Found by reading Tumblr 47.3.0.110 (2026-11-13), where
 * it is `t$b`, the question `jv2.j` and the emptiness test `BlogInfo.F0`.

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/TapToPlayFeedVideosPatch.kt — new non-allowlisted URL or IP</summary>

```
 * Tumblr's video overlay (`c1m` in 47.3.0.110) sends a tap anywhere on a feed video to its callback,
 * and the feed's callback (`pom$b`) opens the full-screen player, even over a stopped video showing

```

</details>


__
