# SysAdminDoc/HushGram — 2026-11-23

Commit: c124fbe09ed7e1e422c4f3fdc70fc47c8032a90a | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java — new non-allowlisted URL or IP</summary>

```
    static final String[] LANGUAGES = {"ar", "de", "es", "in", "it", "ko", "pt-rbr", "th", "tr", "vi", "zh", "zh-rtw"};
            case "ar":
                return buildAr();
    private static Map<String, String> buildAr() {
        Map<String, String> table = new HashMap<>(4696);
        fillAr0(table);
        fillAr1(table);
        fillAr2(table);
        fillAr3(table);
        fillAr4(table);
        fillAr5(table);
        fillAr6(table);
        fillAr7(table);
        fillAr8(table);
        fillAr9(table);
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java: new host http://192.168.1.10, http://10.0.0.2 with previously seen Contacts (2026-11-23)</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-11-23 for the earlier half)
```

</details>


__
