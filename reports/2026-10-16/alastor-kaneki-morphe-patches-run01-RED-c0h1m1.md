# Alastor-Kaneki/Morphe-Patches — 2026-10-16

Commit: b99843d5145c4ac8b8e3cf17d807dc8df5b96c9d | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditGalleryOverlayController.java — new non-allowlisted URL or IP</summary>

```
import java.lang.ref.WeakReference;
    private static final String CONTEXT_TAG = "morphe.reddit.gallery.originals.nativecontext";
    private static volatile WeakReference<Activity> foreground = new WeakReference<>(null);
        foreground = new WeakReference<>(activity);
            String eventPost = RedditNativeOverflowContext.recentPostId();
            RedditCurrentPost.Match current = eventPost != null ?
                    new RedditCurrentPost.Match(eventPost, "Reddit's native overflow-menu event") :
                    RedditCurrentPost.detect(activity);
    /** Contextual native action shown only after Reddit opens a specific post's menu.
     * It is a separate Android view, not a modification of the original
     * proprietary action-sheet rows. It may be covered by modal menus.
     */
    static void showNativeContextAction(String postId) {
        Activity activity = foreground.get();
        if (activity == null || activity instanceof RedditGalleryActivity ||
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditGalleryOverlayController.java: new host https://www.reddit.com with previously seen Clipboard, ClipboardManager (2026-10-15)</summary>

```
(see report of 2026-10-15 for the earlier half)
```

</details>


__
