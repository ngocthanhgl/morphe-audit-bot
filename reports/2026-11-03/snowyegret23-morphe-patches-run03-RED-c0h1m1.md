# snowyegret23/morphe-patches — 2026-11-03

Commit: 201c0ef82da42e47728dfb69d548e9a457a28c54 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/chzzk/src/main/java/app/s/chzzk/extension/LocalFollowing.java — new non-allowlisted URL or IP</summary>

```
package app.s.chzzk.extension;

import android.app.Activity;
import android.app.Application;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.job.JobInfo;
import android.app.job.JobScheduler;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/s/chzzk/chat/FollowingNetworkHooks.kt — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.35, exfiltration): Excerpt contains only patcher and smali imports with no visible network or cookie handling code to verify the same-site claim. No exfiltration, backdoor, or spyware behavior is shown, but the flagged cookie-plus-network pattern cannot be confirmed benign from the truncated excerpt, so suspicious rather than malicious.

```
package app.s.chzzk.chat

import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.extensions.InstructionExtensions.addInstructionsWithLabels
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patcher.util.proxy.mutableTypes.MutableMethod
import app.morphe.patcher.util.smali.ExternalLabel
import app.s.chzzk.common.utils.getReference
import app.s.chzzk.common.utils.parameterTypeNames
import app.s.chzzk.common.utils.smaliReference
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.Opcode
import com.android.tools.smali.dexlib2.iface.reference.FieldReference
import com.android.tools.smali.dexlib2.immutable.ImmutableMethod
import com.android.tools.smali.dexlib2.immutable.ImmutableMethodImplementation
```

</details>


__
