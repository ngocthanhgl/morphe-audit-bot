# SysAdminDoc/HushGram — 2026-11-10

Commit: 06e3e2858fe5bad8a9836ef5d7777169dedd2536 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java — new non-allowlisted URL or IP</summary>

```
    static final String[] LANGUAGES = {"de", "es", "in", "it", "ko", "pt-rbr", "th", "tr", "vi", "zh-rtw"};
            case "th":
                return buildTh();
        Map<String, String> table = new HashMap<>(3534);
        fillDe29(table);
        table.put("A profile you open from a reel stays on the tab you're on, with the tab bar under it. Back goes back to the reel.",
                "Ein Profil, das du aus einem Reel \u00f6ffnest, bleibt auf deinem aktuellen Tab, mit der Tab-Leiste darunter. Zur\u00fcck f\u00fchrt wieder zum Reel.");
        table.put("A rounded bar split by a tall handle.",
                "Eine abgerundete Leiste, die von einem hohen Griff geteilt wird.");
        table.put("A swipe right on Home opens %1$s. The + button still opens the camera.",
                "Wischen nach rechts auf der Startseite \u00f6ffnet %1$s. Die +-Taste \u00f6ffnet weiterhin die Kamera.");
        table.put("A thicker rounded bar with no handle.",
                "Eine dickere, abgerundete Leiste ohne Griff.");
        table.put("A thin line with no handle that grows while you drag it. On feed videos it sits on the bottom edge.",
                "Eine d\u00fcnne Linie ohne Griff, die beim Ziehen dicker wird. Bei Feed-Videos liegt sie am unteren Rand.");
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java: new host http://10.0.0.2, http://192.168.1.10 with previously seen Contacts (2026-11-09)</summary>

LLM review: suspicious (0.68, exfiltration): The static‑analysis report flags cross‑window exfiltration: it adds new hosts http://10.0.0.2 and http://192.168.1.10 and references previously seen Contacts. Modifying the new host field in a shared extension library can cause the extension to initiate outbound network calls to those IPs, potentially leaking local contact data across separate processes/windows. Although the exact line numbers are not visible in the truncated excerpt, the reported behavior directly ties the change to cross‑window data transfer, indicating a possible backdoor/exfil channel. Hence the finding is suspicious rather than definitively malicious.

```
(see report of 2026-11-09 for the earlier half)
```

</details>


__
