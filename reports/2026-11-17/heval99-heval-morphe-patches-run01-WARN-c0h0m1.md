# heval99/Heval-Morphe-Patches — 2026-11-17

Commit: 67f77eccc454708c93ba7fba19be2c6709089069 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] extensions/sofascore/src/main/java/app/template/extension/sofascore/ShareLinkCleaner.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.sofascore;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Pure text logic of "Clean shared links" (no Android classes, so JVM unit tests cover it). The app
 * appends a tracking short link ({@code https://app.sofascore.com/nixz/<id>}) to shared images; it
 * is replaced by the plain site address. Every other text and link, including the fantasy invite
 * link ({@code https://www.sofascore.com/fantasy/competition/...}), is returned untouched.
 */
public final class ShareLinkCleaner {

    /** The plain address that replaces a tracking short link. */
    static final String PLAIN_LINK = "https://www.sofascore.com";
```

</details>


__
