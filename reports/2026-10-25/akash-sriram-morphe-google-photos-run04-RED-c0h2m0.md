# Akash-Sriram/morphe-google-photos — 2026-10-25

Commit: 81de08195f3ebb7893990b5835f3dd1cd2d7eeba | Status: RED | crit:0 high:2 med:0

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/LocalCreationDownloader.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.6, exfiltration): The excerpt shows account, reflection, and state-map handling but no explicit network sink or sensitive-source flow. The static-analysis flag suggests possible sensitive source reaching a network sink, but the provided lines are insufficient to confirm malicious intent or identify exact offending behavior.

```
import android.accounts.Account;
import android.accounts.AccountManager;
import android.accounts.AccountManagerFuture;
import android.graphics.Bitmap;
import android.os.Bundle;
import java.lang.reflect.Constructor;
import java.util.Iterator;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
    private static final Map<String, Object> sIdMediaMap = new ConcurrentHashMap<>();
    private static final Map<String, String> sIdCardMap = new ConcurrentHashMap<>();
    private static final Map<Object, String> sWsfCardMap = new ConcurrentHashMap<>();
    private static final Map<String, Object> sCardWsfMap = new ConcurrentHashMap<>();
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/LocalCreationDownloader.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.7, exfiltration): The excerpt shows reflection-related imports and account/network-related types alongside several ID maps. The static-analysis reason mentions reflection-hidden behavior with a network sink, which is a potential concern for obscured network activity or data handling, but the available context is insufficient to conclusively confirm malicious intent.

```
import android.accounts.Account;
import android.accounts.AccountManager;
import android.accounts.AccountManagerFuture;
import android.graphics.Bitmap;
import android.os.Bundle;
import java.lang.reflect.Constructor;
import java.util.Iterator;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
    private static final Map<String, Object> sIdMediaMap = new ConcurrentHashMap<>();
    private static final Map<String, String> sIdCardMap = new ConcurrentHashMap<>();
    private static final Map<Object, String> sWsfCardMap = new ConcurrentHashMap<>();
    private static final Map<String, Object> sCardWsfMap = new ConcurrentHashMap<>();
```

</details>


__
