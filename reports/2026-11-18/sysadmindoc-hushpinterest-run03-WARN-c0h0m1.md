# SysAdminDoc/HushPinterest — 2026-11-18

Commit: 6d0d1908d0d302c35e539f70441d97950768e832 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/settings/ReportProblemForm.java — new non-allowlisted URL or IP</summary>

```
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import java.util.LinkedHashSet;
import java.util.Set;
            context.startActivity(browserIntent(context, issueUrl(screen)));

    /**
     * GitHub's own app takes github.com links, shows its template list and drops every filled-in
     * value, so the report is aimed at a browser.
     */
    static Intent browserIntent(Context context, String url) {
        PackageManager packages = context.getPackageManager();
        // A neutral address finds the browsers, not the app that claims github.com.
        Intent probe = new Intent(Intent.ACTION_VIEW, Uri.parse("https://example.com/"))
                .addCategory(Intent.CATEGORY_BROWSABLE);
```

</details>


__
