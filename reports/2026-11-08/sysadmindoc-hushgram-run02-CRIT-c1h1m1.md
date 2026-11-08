# SysAdminDoc/HushGram — 2026-11-08

Commit: b340b1989587d60cbe7deb67ddfdc0214d3d1bee | Status: CRIT | crit:1 high:1 med:1

<details>
<summary>[medium] extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/ViewingHistoryPage.java — new non-allowlisted URL or IP</summary>

```
import android.graphics.Bitmap;
import android.util.LruCache;
import android.view.Menu;
import android.widget.ImageView;
import android.widget.PopupMenu;
    /** The settings row the page opened from, which the settings lock goes by. */
    private final Preference origin;
        origin = row;
        list.setOnItemLongClickListener((parent, view, position, id) -> {
            options(view, rows.get(position));
            return true;
        });
    /** Where the person who posted [row] is, for a post or a reel. Null for a profile or a story, whose tap already goes there. */
    @Nullable
    static Uri profileLink(ViewingHistory.Row row) {
```

</details>

<details>
<summary>[info] patches/src/main/resources/app/morphe/patches/instagram/misc/icon/retro.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[critical] cross-window — theft primitive completed across windows in extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/ViewingHistoryPage.java: previously seen TextWatcher (2026-11-08) with new network use</summary>

LLM review: suspicious (0.7, exfiltration): The excerpt flags 'cross-window' and mentions a previously seen TextWatcher with new network use in ViewingHistoryPage.java. This pattern is commonly associated with attempting to steal or transmit Instagram viewing history across windows/processes via network calls. While the diff lacks full context and precise line numbers, the described behavior aligns with data exfiltration rather than benign functionality. Hence, classified as suspicious rather than confirmed malicious.

```
(see report of 2026-11-08 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/ViewingHistoryPage.java: previously seen host https://www.instagram.com (2026-11-08) with new Clipboard</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-11-08 for the earlier half)
```

</details>


__
