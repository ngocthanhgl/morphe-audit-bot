# kondratjev/morphe-patches — 2026-11-13

Commit: b45a6bc114db41c65e8caa6c4afd39a78d30b843 | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/fatsecret/misc/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
 * Matches `BaseActivity.L3(boolean)` — the method that shows the
 * (Was `G3` in 11.8.2.1; R8 renamed it in 11.10.0.3, same logic.)
    name = "L3",

```

</details>

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/fatsecret/premium/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
 * Matches `InvalidSubscriptionDialog$a.a(i0, ln/a)` — shows the
 * (Was `jn/a` in 11.8.2.1; R8 renamed the arg class in 11.10.0.3,
 * same show-dialog body.)
    parameters = listOf("Landroidx/fragment/app/i0;", "Lln/a;"),

```

</details>


__
