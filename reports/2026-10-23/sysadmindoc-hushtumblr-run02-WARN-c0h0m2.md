# SysAdminDoc/HushTumblr — 2026-10-23

Commit: fe1add72a5e35acbbf5b30c789e7b2e4580bae1b | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/misc/settings/SettingsHubRow.kt — new non-allowlisted URL or IP</summary>

```
        // Patcher 2.0 decodes only the files a patch asks for.
        decode(SETTINGS_ROW_STRINGS)
 * its row from a field. Found by reading Tumblr 46.5.0.109 (2026-10-11). In 46.8.1.100 the key
 * is private and the lambda, outside the screen's package, reaches it through a synthetic
 * accessor, so the key hook follows that accessor to its one caller (2026-10-22).
    var keyTarget: Method = keyFunction
    var keyCaller = hub.filter { method -> method.instructionList().any { it.methodRef()?.sameAs(keyTarget) == true } }
    // 46.8.1.100 makes the key private: a one-register synthetic accessor in the screen's package
    // forwards to it, so the row and its key share v0 there. A lambda outside the package calls
    // that accessor with them apart, so the hook goes in the accessor's one caller instead.
    if (keyCaller.forwardsTo(keyFunction)) {
        keyTarget = keyCaller
        val callers = mutableListOf<Method>()
        classDefForEach { owner ->
            owner.methods.filterTo(callers) { method -> method.instructionList().any { it.methodRef()?.sameAs(keyTarget) == true } }
```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tumblr/ui/HideCommunitiesTabPatch.kt — new non-allowlisted URL or IP</summary>

```
 * runs the one method that decides the tab's button. Tumblr 46.5.0.109's layout showed the button
 * unless that method hid it, so it stayed on the bar with nothing behind it (2026-10-13); 46.8.1.100
 * starts it gone, and hiding it after the controller runs holds for both (2026-10-22). Off, the
 * flag also leaves the tab's badge unread while the unread counts are still written to it.

```

</details>


__
