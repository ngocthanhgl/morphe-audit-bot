# SysAdminDoc/HushFacebook — 2026-10-12

Commit: 59d9ea5be3fdf6cb984b153fdb9cad9b7fd4bb31 | Status: CRIT | crit:1 high:2 med:3

<details>
<summary>[medium] extensions/facebook/src/test/java/app/morphe/extension/facebook/settings/ScreenLogTest.java — new non-allowlisted URL or IP</summary>

```
import static org.junit.Assert.assertFalse;
import app.morphe.extension.shared.diagnostics.DiagnosticRedactor;
    /**
     * An app link's ids never reach the report: the redaction cuts only ids of fifteen digits or
     * more, and an older account's or a Page's id is shorter, so "profile/1234567890" would have
     * said whose profile was opened in a report pasted on GitHub.
     */
    @Test
    public void anAppLinksIdsAreWrittenAsHashes() {
        assertEquals("X profile/#", ScreenLog.describe("X", null, Uri.parse("fb://profile/1234567890")));
        assertEquals("X group/#/permalink/#",
                ScreenLog.describe("X", null, Uri.parse("fb://group/123456789/permalink/98765")));
        assertEquals("X page/#", ScreenLog.describe("X", null, Uri.parse("FB://page/u2b3x9")));
        assertEquals("X messenger/share", ScreenLog.describe("X", null, Uri.parse("fb-messenger://messenger/share")));
        for (String line : new String[]{ScreenLog.describe("X", null, Uri.parse("fb://profile/4")),
```

</details>

<details>
<summary>[medium] extensions/facebook/src/test/java/app/morphe/extension/shared/diagnostics/DiagnosticRedactorTest.java — new non-allowlisted URL or IP</summary>

```
    /**
     * The other Meta sites Facebook opens in its browser, as the screen list writes them: a path
     * there is a handle or a short id, which the handle and id rules don't catch after a slash.
     */
    @Test public void anotherMetaSitesAddressGoesWholeToo() {
        assertEquals("[host omitted] [host omitted] [host omitted]", DiagnosticRedactor.redact(
                "m.me/1234567890 www.instagram.com/janedoe www.threads.net/@janedoe"));
        assertEquals("[host omitted] and [host omitted]",
                DiagnosticRedactor.redact("threads.com/@jane.doe and wa.whatsapp.com/send"));
        String[] apps = {"app: com.instagram.android 400.0.0.1", "com.whatsapp.w4b", "com.instagram.barcelona"};
        for (String line : apps) assertEquals(line, DiagnosticRedactor.redact(line));
    }


```

</details>

<details>
<summary>[medium] patches/src/test/kotlin/app/morphe/patches/facebook/coexist/AppLabelTest.kt — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Hushfacebook contributors
 * https://github.com/SysAdminDoc/Hushfacebook
 */
package app.morphe.patches.facebook.coexist

import app.morphe.patcher.patch.PatchException
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Assert.assertThrows
import org.junit.Test
import org.w3c.dom.Document
import org.w3c.dom.Element
import javax.xml.parsers.DocumentBuilderFactory

```

</details>

<details>
<summary>[critical] cross-window — theft primitive completed across windows: previously seen TextWatcher (2026-10-12) with new network use</summary>

```
(see report of 2026-10-12 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows: new host https://www., http://400.0.0.1, http://schemas.android.com with previously seen Clipboard, getPrimaryClip, ClipboardManager (2026-10-12)</summary>

```
(see report of 2026-10-12 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows: previously seen host http://72.80.85.83, http://34.0.0.0, http://255.16.21.29, http://255.34.44.58, https://man7.org, https://first.fbcdn.net, https://second.fbcdn.net, https://example.com, http://10.9.8.7, https://private.example, https://www.facebook.com (2026-10-12) with new Location, Intent</summary>

```
(see report of 2026-10-12 for the earlier half)
```

</details>


__
