# chikuwadon/nicoid-re-patches — 2026-11-27

Commit: af55e3003c97b30d0a36e383c3642c7797bf94f6 | Status: RED | crit:0 high:6 med:0

<details>
<summary>[high] porting/revisions/v2.2.0-recovery/bridge/original-dev110/LegacyOkHttpPrune262.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.55, exfiltration): The provided excerpt contains only package and import declarations; no cookie storage, network, or same-site logic is visible. The static-analysis concern about same-app cookies with network cannot be confirmed from this excerpt, so the code is not malicious on the shown evidence but remains unverified.

```
package app.nicoid.patches;
import java.io.*;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.logging.Logger;
import com.android.tools.smali.dexlib2.iface.*;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedClassDef;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedDexFile;
import com.android.tools.smali.dexlib2.iface.instruction.*;
import com.android.tools.smali.dexlib2.iface.debug.*;
import com.android.tools.smali.dexlib2.iface.reference.*;
import com.android.tools.smali.dexlib2.formatter.DexFormatter;
import com.android.tools.smali.dexlib2.immutable.*;
import com.android.tools.smali.dexlib2.immutable.instruction.*;
```

</details>

<details>
<summary>[high] porting/revisions/v2.2.0-recovery/bridge/original-dev110/LegacyOkHttpPrune262.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.35, exfiltration): The provided excerpt contains only package/import declarations and no visible network sink or sensitive-data flow. The static-analysis flag is not substantiated by the shown code, so malicious cannot be established; suspicious is appropriate pending the full diff.

```
package app.nicoid.patches;
import java.io.*;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.logging.Logger;
import com.android.tools.smali.dexlib2.iface.*;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedClassDef;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedDexFile;
import com.android.tools.smali.dexlib2.iface.instruction.*;
import com.android.tools.smali.dexlib2.iface.debug.*;
import com.android.tools.smali.dexlib2.iface.reference.*;
import com.android.tools.smali.dexlib2.formatter.DexFormatter;
import com.android.tools.smali.dexlib2.immutable.*;
import com.android.tools.smali.dexlib2.immutable.instruction.*;
```

</details>

<details>
<summary>[high] porting/revisions/v2.2.0-recovery/bridge/original-dev110/LegacyOkHttpPrune262.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.55, benign-other): The provided excerpt contains only package and import declarations. No reflection, network sink, exfiltration, or other malicious behavior is visible in the shown lines. The static-analysis reason is not substantiated by the excerpt, and the filename suggests a patch/pruning utility. Because the excerpt is incomplete, hidden behavior cannot be fully ruled out, so the verdict is suspicious rather than malicious.

```
package app.nicoid.patches;
import java.io.*;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.logging.Logger;
import com.android.tools.smali.dexlib2.iface.*;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedClassDef;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedDexFile;
import com.android.tools.smali.dexlib2.iface.instruction.*;
import com.android.tools.smali.dexlib2.iface.debug.*;
import com.android.tools.smali.dexlib2.iface.reference.*;
import com.android.tools.smali.dexlib2.formatter.DexFormatter;
import com.android.tools.smali.dexlib2.immutable.*;
import com.android.tools.smali.dexlib2.immutable.instruction.*;
```

</details>

<details>
<summary>[info] porting/revisions/v2.2.0-recovery/metadata/nicoid/resources.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] porting/revisions/v2.2.0-recovery/source/java/app/nicoid/patches/LegacyOkHttpPrune262.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package app.nicoid.patches;
import java.io.*;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.logging.Logger;
import com.android.tools.smali.dexlib2.iface.*;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedClassDef;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedDexFile;
import com.android.tools.smali.dexlib2.iface.instruction.*;
import com.android.tools.smali.dexlib2.iface.debug.*;
import com.android.tools.smali.dexlib2.iface.reference.*;
import com.android.tools.smali.dexlib2.formatter.DexFormatter;
import com.android.tools.smali.dexlib2.immutable.*;
import com.android.tools.smali.dexlib2.immutable.instruction.*;
```

</details>

<details>
<summary>[high] porting/revisions/v2.2.0-recovery/source/java/app/nicoid/patches/LegacyOkHttpPrune262.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.55, exfiltration): The provided excerpt contains only package declaration and import statements (java.io, MessageDigest, logging, and smali dexlib2 bytecode-manipulation libraries). No actual method bodies, network calls (e.g., HttpURLConnection, OkHttp, Socket), or data-flow from a sensitive source to a network sink are visible in the excerpt. The static-analysis flag ('sensitive source reaches network sink') cannot be confirmed or refuted from imports alone. The class name 'LegacyOkHttpPrune262' and dexlib2 imports suggest a legitimate DEX/bytecode patching utility that removes OkHttp references, which would not inherently exfiltrate data. However, because the actual logic is not shown and the flag indicates a potential data-flow concern, this cannot be cleared as benign without reviewing the full method implementations. Recommend obtaining the complete file body to verify whether sensitive data is actually transmitted over the network.

```
package app.nicoid.patches;
import java.io.*;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.logging.Logger;
import com.android.tools.smali.dexlib2.iface.*;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedClassDef;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedDexFile;
import com.android.tools.smali.dexlib2.iface.instruction.*;
import com.android.tools.smali.dexlib2.iface.debug.*;
import com.android.tools.smali.dexlib2.iface.reference.*;
import com.android.tools.smali.dexlib2.formatter.DexFormatter;
import com.android.tools.smali.dexlib2.immutable.*;
import com.android.tools.smali.dexlib2.immutable.instruction.*;
```

</details>

<details>
<summary>[high] porting/revisions/v2.2.0-recovery/source/java/app/nicoid/patches/LegacyOkHttpPrune262.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.55, benign-other): The provided excerpt contains only package and import declarations; no reflection, network sink, or other executable behavior is visible. The static-analysis reason is not substantiated by the excerpt, but the full file/diff is unavailable, so I cannot conclusively clear it.

```
package app.nicoid.patches;
import java.io.*;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.logging.Logger;
import com.android.tools.smali.dexlib2.iface.*;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedClassDef;
import com.android.tools.smali.dexlib2.dexbacked.DexBackedDexFile;
import com.android.tools.smali.dexlib2.iface.instruction.*;
import com.android.tools.smali.dexlib2.iface.debug.*;
import com.android.tools.smali.dexlib2.iface.reference.*;
import com.android.tools.smali.dexlib2.formatter.DexFormatter;
import com.android.tools.smali.dexlib2.immutable.*;
import com.android.tools.smali.dexlib2.immutable.instruction.*;
```

</details>


__
