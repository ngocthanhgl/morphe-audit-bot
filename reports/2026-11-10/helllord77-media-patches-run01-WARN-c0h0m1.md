# HellLord77/media-patches — 2026-11-10

Commit: 8d59a3b237e3dff2bfbdd5abbc46d3c26fc680a0 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] extensions/addatimes/src/main/kotlin/app/morphe/extension/addatimes/repositories/ContentRepository.kt — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.addatimes.repositories

import app.morphe.extension.shared.extension.org.json.objects
import okhttp3.Interceptor
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.Request
import okhttp3.Response
import okhttp3.ResponseBody.Companion.toResponseBody
import org.json.JSONArray
import org.json.JSONObject
import java.net.HttpURLConnection

internal class ContentRepository(
    private val chain: Interceptor.Chain,
    private val id: String,
```

</details>

<details>
<summary>[info] extensions/addatimes/stub/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
dependencies {
    api(libs.okhttp)
}

plugins {
    alias(libs.plugins.android.library)
}

android {
    namespace = "app.morphe.extension"
    compileSdk = 36

    defaultConfig {
        minSdk = 24
    }
```

</details>


__
