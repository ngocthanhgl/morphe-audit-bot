# SysAdminDoc/HushTumblr — 2026-11-05

Commit: 7d5c69e2a1b6c277d6d08d98897ffee06e0ed737 | Status: WARN | crit:0 high:0 med:6

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/timeline/TimelineListHookPatch.kt — new non-allowlisted URL or IP</summary>

```
 * The query that opens one post by itself (`PostPermalinkTimelineFragment`'s in Tumblr 47.0.0.108),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/AppFontPatch.kt — new non-allowlisted URL or IP</summary>

```
 * AndroidX's ResourcesCompat (`onh` in 47.0.0.108) loads every font resource through one method, View
 * font. Tumblr's font picker (`z79` in 47.0.0.108) answers two fonts with Roboto by family name and
 * The dashboard's view provider (`zr0` in 47.0.0.108) inflates its first rows on a background thread

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/DarkBackgroundPatch.kt — new non-allowlisted URL or IP</summary>

```
 * customize screens and that comparison read the getters straight. In 47.0.0.108 those are `a03.s`,
 * `a03.z` and `a03.n`, found from `a03.l` (2026-11-05).
 * real, so a header Tumblr writes out keeps its color. In 47.0.0.108 those are
 * `HubContainerFragment.L5`, which paints the page's bars, and `HubTimelineFragment`'s `p9` and
 * `getBackgroundColor` (2026-11-05).

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/HideFollowButtonPatch.kt — new non-allowlisted URL or IP</summary>

```
 * when the header should offer Follow. In 47.0.0.108 that's `z3h.u`, called from `z3h.Q`; the
 * header's other user of the button, `z3h.P`, only ever hides it. Found by reading Tumblr
 * 47.0.0.108 (2026-11-05).

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/LineBetweenPostsPatch.kt — new non-allowlisted URL or IP</summary>

```
 * Tumblr's timeline spacing (`mxl` in 47.0.0.108) is the one list decoration that leaves a gap above

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/ShareVideoLinksPatch.kt — new non-allowlisted URL or IP</summary>

```
 * A video in a post (`dmm.f` in 47.0.0.108) gets a player built in its container, from details that
 * carry the video's address, and timeline controls (`myl`) whose long press calls back into the
 * binder, where Tumblr's callback is empty (46.9's was too). The container and the address go to the extension right

```

</details>


__
