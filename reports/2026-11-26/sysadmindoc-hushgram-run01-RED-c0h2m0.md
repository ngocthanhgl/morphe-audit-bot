# SysAdminDoc/HushGram — 2026-11-26

Commit: 78d31dd786b8995fbe9ef58933d84b86ab209a77 | Status: RED | crit:0 high:2 med:0

<details>
<summary>[high] extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.95 — no ban]</summary>

LLM review: benign (0.95, benign-other): The excerpt only defines localization tables and returns built translation tables such as TableAr, TableDe, and TableEs. It contains no cookie access, stored-data reads, network calls, or same-site cookie handling. The static-analysis reason appears to be a false positive based on unrelated same-app data/network heuristics; no offending behavior is visible in the provided code.

```
 *
 * <p>Each language's table is a nested class of its own, since one class's constant pool
 * holds at most 65535 entries and every string takes two.
                return TableAr.build();
                return TableDe.build();
                return TableEs.build();
                return TableIn.build();
                return TableIt.build();
                return TableKo.build();
                return TablePt_rBR.build();
                return TableTh.build();
                return TableTr.build();
                return TableVi.build();
                return TableZh.build();
                return TableZh_rTW.build();
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/hushgram/extension/shared/L10nTranslations.java: new host http://192.168.1.10, http://10.0.0.2 with previously seen Contacts (2026-11-25)</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-11-25 for the earlier half)
```

</details>


__
