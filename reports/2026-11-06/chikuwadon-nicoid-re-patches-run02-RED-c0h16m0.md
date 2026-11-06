# chikuwadon/nicoid-re-patches — 2026-11-06

Commit: 22d6f3db7dbc83e3d14a5ee54e107a8cf54be29c | Status: RED | crit:0 high:16 med:0

<details>
<summary>[high] porting/revisions/v1.10.2-dev.10/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.5, exfiltration): Excerpt shows only imports with no visible network sink or sensitive source use; insufficient code is provided to confirm or rule out the static-analysis flag, so behavior cannot be verified as benign.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.10/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.11/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.11/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.5, exfiltration): Excerpt contains only package/import declarations with no visible reflection or network sink code; static-analysis flag cannot be verified or cleared from provided content, so behavior remains unconfirmed.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.5/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.5, exfiltration): Excerpt contains only package and import declarations with no visible network sink, sensitive source usage, or data flow; insufficient evidence to confirm exfiltration or benign behavior, so flagged static-analysis concern cannot be verified from provided content.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.5/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.4, benign-other): Excerpt contains only package and Android UI/preference imports; no reflection, network sink, or exfiltration behavior is visible in the provided lines, so malicious behavior cannot be confirmed from this excerpt alone.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.6/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.4, exfiltration): Provided excerpt shows only imports and no visible network sink or sensitive source flow, so the static-analysis flag cannot be verified from the excerpt. Insufficient evidence for a malicious verdict, but uncertainty warrants suspicious rather than benign.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.6/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.45, exfiltration): Provided excerpt shows only imports including DocumentsContract, Uri, and SharedPreferences, with no visible reflection or network sink code to verify the static-analysis flag. Insufficient evidence to confirm malicious behavior, so verdict is suspicious rather than malicious.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.7/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.5, exfiltration): Excerpt contains only package and import declarations with no visible sensitive source, network sink, or data flow; the static-analysis claim cannot be verified from the provided lines, so neither benign nor malicious can be confirmed.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.7/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.4, benign-other): Excerpt shows only package and Android preference/UI imports with no visible reflection, network sink, or exfiltration code; insufficient evidence to confirm malicious behavior, but flagged static-analysis reason cannot be verified from provided excerpt.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.8/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.5, exfiltration): Excerpt shows only package and imports, including Uri, SharedPreferences and PreferenceManager, with no visible network sink or source-to-sink flow to verify the static-analysis flag. Insufficient evidence for a malicious verdict, so marked suspicious pending the full diff.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.8/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.4, benign-other): Only package/import excerpt provided; no reflection or network sink code is visible to confirm or refute the static-analysis flag, so behavior cannot be verified as benign from this excerpt alone.

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.9/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2-dev.9/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2/java/e/e/a/Dev116.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.2/java/e/e/a/Dev116.java — reflection-hidden behavior with network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
package e.e.a;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceManager;
import android.provider.DocumentsContract;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
```

</details>


__
