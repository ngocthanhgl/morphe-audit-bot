# SysAdminDoc/HushGram — 2026-11-13

Commit: c37b2288471c5d66eefec0dbcc8b98c0645dcdb3 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java — new non-allowlisted URL or IP</summary>

```
    static final String[] LANGUAGES = {"de", "es", "in", "it", "ko", "pt-rbr", "th", "tr", "vi", "zh", "zh-rtw"};
            case "zh":
                return buildZh();
        Map<String, String> table = new HashMap<>(3874);
        table.put("A reel you open from a post on Home, a suggested reels row or a message plays on its own. Swiping, pulling down and auto scroll won't move on to another reel, so it plays again when it ends. The Reels tab scrolls as usual. With Swipe through a chat's reels on, a chat's reels still swipe.",
                "Ein Reel, das du \u00fcber einen Beitrag auf der Startseite, eine Reihe vorgeschlagener Reels oder eine Nachricht \u00f6ffnest, l\u00e4uft f\u00fcr sich allein. Wischen, Herunterziehen und automatisches Scrollen wechseln nicht zu einem anderen Reel, also spielt es am Ende noch einmal. Der Reels-Tab scrollt wie gewohnt. Wenn Durch die Reels eines Chats wischen an ist, lassen sich die Reels eines Chats weiter wischen.");
        table.put("A white bar and handle, as they've always been.",
                "Eine wei\u00dfe Leiste mit wei\u00dfem Regler, wie bisher.");
        table.put("Adds the Friends tab to the top of the Reels tab if your account never got it. What's in it still comes from Instagram, so it can be empty. Hide the Friends tab wins.",
                "F\u00fcgt den Freunde-Tab oben im Reels-Tab hinzu, falls dein Konto ihn nie bekommen hat. Der Inhalt kommt weiter von Instagram und kann leer sein. \u201eFreunde-Tab ausblenden\u201c hat Vorrang.");
        table.put("Asks before a pull down or another tap on its tab refreshes Home, Reels or another list. Cancel keeps what's on screen.",
                "Fragt nach, bevor das Herunterziehen oder ein erneutes Tippen auf den Tab die Startseite, Reels oder eine andere Liste aktualisiert. Mit \u201eAbbrechen\u201c bleibt, was auf dem Bildschirm ist.");
        table.put("Bigger seek bar on reels",
                "Gr\u00f6\u00dfere Suchleiste bei Reels");
        table.put("Clear search",
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java: new host http://192.168.1.10, http://10.0.0.2 with previously seen Contacts (2026-11-12)</summary>

LLM review: suspicious (0.15, benign-other): No actual patch diff or source code was provided in this review window; only an untrusted static-analysis summary string and a pointer to a prior report. The claimed findings (new hosts 192.168.1.10 / 10.0.0.2, Contacts data, exfiltration across windows) are metadata, not code, and cannot be verified or refuted without the diff. Per policy I do not treat report text as evidence and I do not fabricate line numbers or code behavior. Verdict is 'suspicious' with low confidence solely because the claim is unverified; re-run the review with the full diff for L10nTranslations.java and the referenced prior-window report to reach a defensible benign/malicious determination.

```
(see report of 2026-11-12 for the earlier half)
```

</details>


__
