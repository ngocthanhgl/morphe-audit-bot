# Forsigh/waze-patches — 2026-10-20

Commit: b10ea03219914263cb89a4986558543844a62dcc | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/io/github/forsigh/waze/AaSmootherMapPatch.kt — new non-allowlisted URL or IP</summary>

```
 *  - 5.25.90.900 renamed the update-rate switch to `GPS_ALIGN_AAP_AND_DEVICE_UPDATE_RATE`
 *    (read in `com.waze.location.af`) and 5.26.0.0 keeps the new name; both are recorded, and the
 *    emitter skips whichever the build does not declare.
 * All of them are server-controlled; which side of each switch a given device gets is why one
            "CONFIG_VALUE_GPS_ALIGN_AAP_AND_DEVICE_UPDATE_RATE",

```

</details>


__
