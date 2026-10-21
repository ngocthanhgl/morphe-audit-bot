# Santodan/santodan-patches — 2026-10-21

Commit: 8c399726b7748671291495513c4980daf46ce88f | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/nuvio-introdb/src/main/java/software/santodan/extension/nuviointro/IntroDbClient.java — new non-allowlisted URL or IP</summary>

```
package software.santodan.extension.nuviointro;

import java.io.OutputStream;
import java.io.InputStream;
import java.io.ByteArrayOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.CancellationException;
import java.util.function.BooleanSupplier;
import java.util.function.Consumer;

/** One bounded request, without automatic retries or credential-bearing redirects. */
public final class IntroDbClient {
    public static final class Result {
```

</details>

<details>
<summary>[high] extensions/nuvio-introdb/src/main/java/software/santodan/extension/nuviointro/NuvioIntroDb.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.6, exfiltration): The component imports weak-reference, outbound HTTP, and concurrency utilities, consistent with background network activity, while the supplied static-analysis finding reports a reflection-obscured network sink. This combination warrants suspicion. However, the excerpt shows no reflective invocation, endpoint, request body, sensitive-data source, or actual network call, so malicious exfiltration cannot be established from the visible code; these imports could also support legitimate functionality.

```
package software.santodan.extension.nuviointro;

import android.app.Activity;
import android.app.Application;
import android.content.SharedPreferences;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import java.lang.ref.WeakReference;
import java.net.HttpURLConnection;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicBoolean;

/** Native Compose UI. Credentials live in Settings; playback only captures and submits. */
public final class NuvioIntroDb {
```

</details>


__
