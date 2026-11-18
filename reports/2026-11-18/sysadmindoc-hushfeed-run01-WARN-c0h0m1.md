# SysAdminDoc/hushfeed — 2026-11-18

Commit: 2f5886013929f8bae775ceb8b50f2d4401ddc430 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tiktok/privacy/Fingerprints.kt — new non-allowlisted URL or IP</summary>

```
internal const val LOCATION_API_HOST = "https://location.tiktokv.com"

/**
 * The loads of TikTok's own location API host (#379): the Retrofit service built on it and the
 * backend caller that turns it into the v6 URL it asks. Two on 47.8.3.
 */
internal object LocationApiHostFingerprint : Fingerprint(strings = listOf(LOCATION_API_HOST))


```

</details>


__
