# SysAdminDoc/HushMessenger — 2026-10-12

Commit: 37ac6df6c02733c7771662d16774dc502d8354ff | Status: CRIT | crit:1 high:2 med:2

<details>
<summary>[info] assets/settings-app-dark.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/settings-app-light.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/settings-dark.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] assets/settings-light.png — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/messenger/src/main/java/app/hushmessenger/extension/FontFile.java — new non-allowlisted URL or IP</summary>

```
    private static final int HEAD = 0x68656164;
    private static final int HHEA = 0x68686561;
    private static final int OS2 = 0x4F532F32;

    /** #48: the picked font's size in percent, and how far its text sits lower in the line, in percent of that size. */
    static final String ADJUSTED = NAME + "-adjusted";
    /** A copy still being written. Another process only removes one this old, so it never pulls one out from under a writer. */
    static final String SIZING = NAME + "-sizing";
    static final long SIZING_STALE_MS = 10 * 60_000L;
    static final int SCALE_LEAST = 70, SCALE_MOST = 160, SCALE_STEP = 5;
    static final int SHIFT_MOST = 20, SHIFT_STEP = 2;
    /**
     * A copy of [source] drawn at [scale] percent of the size Messenger asks for, with its text [shift] percent of that size
     * lower in the line (higher when negative). Null when the copy can't be made, so the picked file is used as it is. The
     * name carries the choices and the source's time and length, so a new pick or choice never reuses an old copy, and
```

</details>

<details>
<summary>[medium] extensions/messenger/src/test/java/app/hushmessenger/extension/TextStyleTest.java — new non-allowlisted URL or IP</summary>

```
import android.view.View;
import android.widget.EditText;
import org.robolectric.shadows.ShadowToast;
    private java.util.concurrent.Executor realWork;
        Settings.hookErrors.clear();
        TextStyleActivity.entries = null;
        realWork = TextStyleActivity.work;
    /** A failed-start case hands HostScreens this test's app, so later tests mustn't start settings against it. */
    @org.junit.After public void forgetApplication() {
        TextStyleActivity.work = realWork;
        HostScreens.applicationCreated(null);
        Settings.initialize(app);
    }

    @Test public void keycapEmojiStayWhole() {
```

</details>

<details>
<summary>[critical] cross-window — theft primitive completed across windows: previously seen TextWatcher (2026-10-12) with new network use</summary>

```
(see report of 2026-10-12 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows: new host http://104.101.97.100, http://104.104.101.97, http://79.83.47.50, http://127.11.0.66 with previously seen Location (2026-10-12)</summary>

```
(see report of 2026-10-12 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows: previously seen host http://255.0.0.0, http://255.250.247.249, http://255.255.255.255, http://255.18.20.25, http://255.33.27.35, http://255.244.241.243, http://255.100.89.102, http://255.174.179.191, http://255.158.49.87, http://255.243.166.184, http://255.222.214.221, http://255.48.54.64, http://255.139.124.137, http://255.101.112.128, http://255.217.208.216, http://255.43.48.57, http://34.158.49.87, http://51.243.166.184, http://255.242.235.240, http://255.27.31.38, http://255.228.217.225, http://255.41.47.57, http://255.179.38.30, http://255.255.180.171, http://0.255.255.255, http://85.0.0.0 (2026-10-12) with new Intent</summary>

```
(see report of 2026-10-12 for the earlier half)
```

</details>


__
