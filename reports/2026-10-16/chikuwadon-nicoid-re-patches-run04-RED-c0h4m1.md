# chikuwadon/nicoid-re-patches — 2026-10-16

Commit: 7f836e5cf66d5f89df286d2225d2f94a5b0ca05e | Status: RED | crit:0 high:4 med:1

<details>
<summary>[high] extensions/extension/src/main/java/e/e/a/RankingPager196.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.92 — no ban]</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.net.Uri;
import android.os.Handler;
import android.widget.Toast;
import org.json.*;
import java.util.*;
import java.util.concurrent.*;

/** Incremental exact-tag filtering, preserving the official interleaved rank order. */
public final class RankingPager196 {
    static final Map<Object, Session> SESSIONS = Collections.synchronizedMap(new WeakHashMap<Object, Session>());
    static final ExecutorService TAGS = Executors.newFixedThreadPool(4, r -> {Thread t=new Thread(r,"nicoid-ranking-tags");t.setDaemon(true);return t;});
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] porting/helpers-v1.9.2.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] porting/revisions/v1.9.2-dev.6/src/e/e/a/RankingPager196.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.6 — no ban]</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.net.Uri;
import android.os.Handler;
import android.widget.Toast;
import org.json.*;
import java.util.*;
import java.util.concurrent.*;

/** Incremental exact-tag filtering, preserving the official interleaved rank order. */
public final class RankingPager196 {
    static final Map<Object, Session> SESSIONS = Collections.synchronizedMap(new WeakHashMap<Object, Session>());
    static final ExecutorService TAGS = Executors.newFixedThreadPool(4, r -> {Thread t=new Thread(r,"nicoid-ranking-tags");t.setDaemon(true);return t;});
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/method-delta.dex — [binary strings] same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.72 — no ban]</summary>

```
  IP
 #nicoid #
 + URL
 / vv.isPlaying()
 / vv.pause();
 / vv.start();
 HTTP/1.1
 [no signature]
 [signed]
 bytes=
& http://flapi.nicovideo.jp/api/getflv/
 https://nico.ms/
 mode:
 orientation:
C"js-initial-watch-data" data-api-data="([^"]+?)" data-environment="
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/method-delta.dex — [binary strings] sensitive source reaches network sink</summary>

```
  IP
 #nicoid #
 + URL
 / vv.isPlaying()
 / vv.pause();
 / vv.start();
 HTTP/1.1
 [no signature]
 [signed]
 bytes=
& http://flapi.nicovideo.jp/api/getflv/
 https://nico.ms/
 mode:
 orientation:
C"js-initial-watch-data" data-api-data="([^"]+?)" data-environment="
```

</details>


__
