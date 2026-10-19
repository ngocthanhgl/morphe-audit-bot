# SysAdminDoc/HushFacebook — 2026-10-19

Commit: 0d33a90194d00d4ed49c5bc7474ddf950a7f1ca1 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] extensions/facebook/src/main/java/app/morphe/extension/facebook/menu/MenuTiles.java — new non-allowlisted URL or IP</summary>

```
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.LinkedHashMap;
import java.util.Map;
 * {@code fb://marketplace_tab} and for {@code https://www.facebook.com/marketplace/}. A link to a
 * route that opens many screens keys by the screen it names instead. A key the list doesn't know
 * is carried like any other, so a newer Facebook's tile survives a settings file.
 *
 * <p>The hook writes down each tile the Menu shows, by key and by the name Facebook gives it, so
 * the list offers this person's own tiles in Facebook's words. Before the Menu has been opened
 * the list offers the catalog.
    /** At most this many tiles are written down, about a full Menu twice over. */
    static final int SEEN_LIMIT = 48;

    /** A written-down name is cut to this many chars. */
```

</details>


__
