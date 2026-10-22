# heval99/Heval-Morphe-Patches — 2026-10-22

Commit: 71622e3d305c120a4e4e886b572e7670e0a3cd03 | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[medium] extensions/shazam/src/main/java/app/template/extension/shazam/SpotifyBrowserLoginPatch.java — new non-allowlisted URL or IP</summary>

```
package app.template.extension.shazam;

import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;

import java.lang.ref.WeakReference;
import java.util.List;
import java.util.Locale;

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/template/patches/pimusicplayer/premium/EnablePremiumPatch.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.patcher.extensions.InstructionExtensions.getInstruction
import app.morphe.patcher.extensions.InstructionExtensions.instructions
import app.morphe.patcher.extensions.InstructionExtensions.replaceInstruction
import app.template.patches.shared.addInstructionChecked
import app.template.patches.shared.addInstructionsChecked
import app.template.patches.shared.requireNoBranchTargetAt
import com.android.tools.smali.dexlib2.iface.instruction.Instruction
import com.android.tools.smali.dexlib2.iface.instruction.OneRegisterInstruction
 * Premium (ad-free) state is a static boolean flag in an R8-obfuscated holder class (`v7/g` on
 * 3.2.0.0) next to the list of owned background-pack ids (`X`, filled with "1".."5" by the
 * all-packs purchase): `a()` returns list-size == 5 (all background packs owned), `b()` returns
 * flag && a() (the combo pack), and 32 reads in 25 classes use the flag field directly; those
 * reads are the real gates. The flag has two writers: the cold-start prefs loader (called from
 * MyApplication.onCreate) stores the "isAdFree" preference into it, and the setter `c(Z)` used by
 * the remove_ads / combo purchases, the rewarded temporary ad-free grant and the temp-ad-free
```

</details>


__
