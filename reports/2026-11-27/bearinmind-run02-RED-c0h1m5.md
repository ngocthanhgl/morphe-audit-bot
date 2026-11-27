# bearinmindcat/morphe-patches — 2026-11-27

Commit: 952c35e20e6f6bba4c829955799b6a36d3043dcb | Status: RED | crit:0 high:1 med:5

<details>
<summary>[info] docs/icons/pixel-launcher.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/samsungnotes/src/main/java/org/ungoogled/samsungnotes/account/SamsungAuth.java — new non-allowlisted URL or IP</summary>

```
import android.content.Context;
import java.util.Locale;
 *
 * <p>What happens is logged under the tag "UA" (`adb logcat -s UA`), never a token itself.
    /** `setprop log.tag.USamsungAccount DEBUG` turns on the test hooks. */
    private static final String LOG = "UA";
    /** Where Samsung's own web-account client (Samsung Internet without the account app) renews its tokens. */
    static final String DEFAULT_AUTH_SERVER = "https://us-auth2.samsungosp.com";
    /** A token Notes calls expired this soon after it was issued is a repeated request, not an expired token. */
    private static final long JUST_RENEWED_MS = 30_000L;
    /** Trying Samsung's web sign-in quietly again (its own session) at most this often after it did not work. */
    private static final long QUIET_RETRY_MS = 6 * 3_600_000L;
    private static final long QUIET_SOON_MS = 10 * 60_000L;
    private static final Object RENEWAL = new Object();
    static void log(String message) {
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/honorclock/misc/EnableNonMagicOsPatch.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.patcher.extensions.InstructionExtensions.addInstructionsWithLabels
import app.morphe.patcher.util.smali.ExternalLabel
import com.android.tools.smali.dexlib2.iface.reference.FieldReference
/** DownloadChineseRecessHelper's two downloads: the switch's (b) and the weekly update's (c). */
private val HOLIDAY_DOWNLOAD_STRINGS = listOf(
    "download chinese recess start",
    "[downloadHolidayInfo] download chinese recess failed, result is empty",
)

/**
 * The alarm editor's "Working days (skip holidays)" switch downloaded China's statutory holidays from Honor's server
 * (configserver-drcn.platform.hihonorcloud.com, phone model in a header) on every ROM, as soon as it was turned on and
 * without a word about Honor; Clock only uses that data on a Chinese ROM (see Holidays). Both downloads now first ask
 * Holidays.allowed (a Chinese ROM and the user's yes), and the switch's call goes through Holidays.download, which asks.
 * Returns the downloads gated and the switch calls moved.
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsunglauncher/SamsungLauncherConstants.kt — new non-allowlisted URL or IP</summary>

```
     * build): 18.0.07.59, the newest that runs on Android 15, 16.0.09.35, the newest for Android 13 and 14, and
     * 15.1.03.75, One UI 6.1.1's (search bar at the top; also Android 13 and 14). Newest first: the version check
     * suggests the first one a phone can run.
            AppTarget(version = "15.1.03.75", minSdk = 33, description = "needs Android 13 or newer"),

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/org/ungoogled/patches/samsunglauncher/misc/EnableNonOneUiPatch.kt — new non-allowlisted URL or IP</summary>

```
import org.ungoogled.patches.samsunglauncher.v151.HIDDEN_CONSTRUCTORS as V151_HIDDEN_CONSTRUCTORS
import org.ungoogled.patches.samsunglauncher.v151.HIDDEN_MEMBERS as V151_HIDDEN_MEMBERS
import org.ungoogled.patches.samsunglauncher.v151.HIDDEN_SUPERCLASSES as V151_HIDDEN_SUPERCLASSES
 * 16.0.09.35 and 15.1.03.75 are the Android 13 builds (One UI 6/7's and One UI 6.1.1's home screens): their lists are
 * generated against Android 13, 15, 16 and 17 (v16/SamsungLauncher16Members.kt, v151/SamsungLauncher151Members.kt),
 * and a few of their own classes have an older shape.
private fun isAndroid13Build(version: String?) = version?.startsWith("16.") == true || isOneUi61Build(version)

/** 15.1.03.75, One UI 6.1.1's home screen: older still than 16.0 in a few places (see the hooks below). */
private fun isOneUi61Build(version: String?) = version?.startsWith("15.") == true
        // Measured against 18.0.07.59: 9 files; 16.0.09.35: 10; 15.1.03.75: 10.
        // Measured against 18.0.07.59: 314 calls, 81 field accesses; 16.0.09.35: 217 calls, 67 field accesses;
        // 15.1.03.75: 378 calls, 77 field accesses.
        val version = packageMetadata.versionName
        val android13Build = isAndroid13Build(version)
```

</details>

<details>
<summary>[medium] cross-window — dangerous permission plus network sink split across windows in extensions/extension/src/main/java/org/ungoogled/ui/SpeedCameras.java (earlier half in 2026-11-16)</summary>

```
(see report of 2026-11-16 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/samsungnotes/src/main/java/org/ungoogled/samsungnotes/account/SamsungAuth.java: new host https://us-auth2.samsungosp.com with previously seen HttpURLConnection, openConnection (2026-11-16)</summary>

LLM review: suspicious (0.55, exfiltration): The provided excerpt contains no actual diff or offending lines, only a static-analysis summary referencing an earlier report. A new Samsung authentication host used with HttpURLConnection/openConnection could be legitimate account authentication, but the claimed cross-window exfiltration cannot be verified from the available data. Therefore suspicious rather than malicious.

```
(see report of 2026-11-16 for the earlier half)
```

</details>


__
