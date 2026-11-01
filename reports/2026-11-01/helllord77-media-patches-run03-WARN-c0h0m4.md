# HellLord77/media-patches — 2026-11-01

Commit: 8d97be381f4c4ba34e45278d35cd880874f8075a | Status: WARN | crit:0 high:0 med:4

<details>
<summary>[medium] extensions/bongo/src/main/java/app/morphe/extension/bongo/repositories/ContentRepository.kt — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.bongo.repositories

import app.morphe.extension.shared.Utils
import app.morphe.extension.shared.extension.java.util.matches
import com.goebl.david.Webb
import com.google.gson.Gson
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject
import retrofit2.Response

internal class ContentRepository(
    private val systemId: String,
    private val authorization: String?,
    private val acceptLanguage: String,
```

</details>

<details>
<summary>[medium] extensions/hoichoi/src/main/kotlin/app/morphe/extension/hoichoi/repositories/ContentRepository.kt — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.hoichoi.repositories
import java.net.HttpURLConnection
import java.util.Random
internal class ContentRepository(
            Request
                .Builder()
            Uri
                .parse("https://prod-contents-api.hoichoi.dev/contents/api/v1/contents")
            Uri
                .parse("https://prod-api.hoichoi.dev/contents/api/v1/entitlement")
            Request
                .Builder()
            throw NotImplementedError()
    private fun getPageData(
        @Suppress("SameParameterValue") pageId: String,
```

</details>

<details>
<summary>[medium] extensions/iscreen/src/main/kotlin/app/morphe/extension/iscreen/patches/TempUserPatch.kt — new non-allowlisted URL or IP</summary>

```
@file:JvmName("TempUserPatch")

package app.morphe.extension.iscreen.patches

import app.morphe.extension.shared.Logger
import app.morphe.extension.shared.Utils
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONObject

private val authToken by lazy {
    val body =
        JSONObject()
```

</details>

<details>
<summary>[medium] extensions/platform8/src/main/kotlin/app/morphe/extension/platform8/repositories/ContentRepository.kt — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.platform8.repositories

import android.net.Uri
import com.android.volley.Network
import com.android.volley.NetworkResponse
import com.android.volley.toolbox.StringRequest
import org.json.JSONArray
import org.json.JSONObject
import java.net.HttpURLConnection

internal class ContentRepository(
    private val network: Network,
    private val code: String,
    private val catalogue: String?,
    private val authorization: String?,
```

</details>


__
