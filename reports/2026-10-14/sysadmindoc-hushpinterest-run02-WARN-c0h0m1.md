# SysAdminDoc/HushPinterest — 2026-10-14

Commit: e9832c739ab67de74350990a49922cf0d1c809a0 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[info] assets/screenshots/settings-home.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/actions/PinManifest.java — new non-allowlisted URL or IP</summary>

```
import android.app.AlertDialog;
import app.hushpinterest.extension.pinterest.settings.HushDialogs;
 * Save list: the pins a batch chooser holds, written to a file picked through Android's file
 * picker, as a bookmarks file browsers and bookmark apps import or as a JSON list. Each pin is
 * its id, its pin address, its title when it has one, and the source link Pinterest supplied in
 * its {@code link} field when that link can be kept exactly as given. Nothing is fetched to fill
 * it in, and it holds no account, cookie or media address. It's separate from the settings file
 * and the diagnostic report.

    /** The file a list is saved as, in the order the choice offers them. */
    enum Format {
        /** A Netscape bookmarks file: every pin a bookmark, its source link in the description. */
        BOOKMARKS("text/html", ".html"),
        JSON(MIME_TYPE, ".json");

```

</details>


__
