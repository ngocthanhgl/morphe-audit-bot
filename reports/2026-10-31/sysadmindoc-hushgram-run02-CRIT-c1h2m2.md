# SysAdminDoc/HushGram — 2026-10-31

Commit: 49da7e9da62c925739f2db5aa3d298f22dfb009a | Status: CRIT | crit:1 high:2 med:2

<details>
<summary>[medium] extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/HushgramPreferenceFragment.java — new non-allowlisted URL or IP</summary>

```
import app.hushgram.extension.instagram.feed.AmbientSpeed;
import app.hushgram.extension.instagram.feed.AmbientSpread;
import app.hushgram.extension.instagram.misc.AppProxy;
import app.hushgram.extension.instagram.download.ViewingHistory;
    static final String VIEWING_HISTORY_ROW = "hushgram_viewing_history_row";
    static final String CLEAR_VIEWING_HISTORY = "hushgram_clear_viewing_history";
                    belongs |= family == PatchFamily.AMBIENT_LIGHT && (Settings.AMBIENT_LIGHT_SPREAD.key.equals(key)
                            || Settings.AMBIENT_LIGHT_SPEED.key.equals(key));
                            || Settings.BURN_IN_WAIT.key.equals(key) || Settings.BURN_IN_STAY_DIM.key.equals(key)
                            || Settings.START_REEL_CLEAR_MODE.key.equals(key));
                    belongs |= family == PatchFamily.REEL_SCROLLING && (Settings.SCROLL_BREAK.key.equals(key)
                            || Settings.REEL_CAP_COUNT.key.equals(key) || Settings.REEL_CAP_BREAK.key.equals(key));
                    belongs |= family == PatchFamily.REEL_DOWNLOAD && Settings.TEXT_BUTTON_ON_REELS.key.equals(key);
                    belongs |= family == PatchFamily.VIDEO_DOWNLOAD && (Settings.VIEWING_HISTORY.key.equals(key)
                            || VIEWING_HISTORY_ROW.equals(key) || CLEAR_VIEWING_HISTORY.equals(key));
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java — new non-allowlisted URL or IP</summary>

```
        Map<String, String> table = new HashMap<>(2748);
        fillDe22(table);
        table.put("%1$d minutes in the background",
                "%1$d Minuten im Hintergrund");
        table.put("%1$d reels",
                "%1$d Reels");
    }

    private static void fillDe1(Map<String, String> table) {
        table.put("A story you tap in the stories row opens with a slower zoom that doesn't bounce, and closes the same way.",
                "Eine Story, die du in der Story-Leiste antippst, \u00f6ffnet sich mit einem langsameren Zoom ohne Nachfedern und schlie\u00dft sich genauso.");
    }

    private static void fillDe2(Map<String, String> table) {
        table.put("After the reels you pick below, swiping in Reels stops until Instagram has been in the background for the time you pick. A reel you open from a message or a post still plays.",
```

</details>

<details>
<summary>[critical] cross-window — theft primitive completed across windows in extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/HushgramPreferenceFragment.java: previously seen TextWatcher (2026-10-31) with new network use</summary>

LLM review: suspicious (0.72, exfiltration): The diff introduces a new TextWatcher that monitors UI input fields (likely Instagram settings like username/password) and triggers network requests — a classic theft primitive pattern. While the code appears to be a preference-fragment UI hook rather than direct exfiltration, the combination of cross-window text observation with new outbound network calls is consistent with credential harvesting or data exfiltration via UI interaction. This warrants suspicion but lacks the 0.85 confidence threshold for a malicious verdict given the indirect nature of the evidence.

```
(see report of 2026-10-31 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/instagram/src/main/java/app/hushgram/extension/instagram/settings/HushgramPreferenceFragment.java: new host http://192.168.1.10, http://10.0.0.2 with previously seen Location (2026-10-31)</summary>

LLM review: suspicious (0.3, exfiltration): No actual code diff or excerpt was provided, only a static-analysis claim about connections to private IP addresses (192.168.1.10, 10.0.0.2). Without reviewing the code behavior, I cannot confirm exfiltration or identify exact offending lines. Per policy, when unsure, the verdict is suspicious rather than malicious.

```
(see report of 2026-10-31 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java: new host http://192.168.1.10, http://10.0.0.2 with previously seen Contacts (2026-10-31)</summary>

LLM review: suspicious (0.5, exfiltration): No actual patch diff or code changes were provided; only an untrusted static-analysis summary referencing L10nTranslations.java, new hosts http://192.168.1.10 and http://10.0.0.2, and Contacts. The summary cannot be treated as verified code behavior, and no exact offending lines are visible to confirm exfiltration. Per policy, when unsure, choose suspicious rather than malicious.

```
(see report of 2026-10-31 for the earlier half)
```

</details>


__
