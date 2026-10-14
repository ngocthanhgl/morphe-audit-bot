# HellLord77/media-patches — 2026-10-14

Commit: 681354c20d19fe6c5f4b0d2f59d5322da12914a4 | Status: WARN | crit:0 high:0 med:4

<details>
<summary>[medium] extensions/bongo/src/main/java/app/morphe/extension/bongo/repos/ContentRepo.java — new non-allowlisted URL or IP</summary>

```

import java.util.List;

import app.morphe.extension.bongo.util.JSONUtil;
import app.morphe.extension.shared.Logger;
import app.morphe.extension.shared.Utils;

    private static final Webb WEBB = Webb.create();
    private static final Gson GSON = new Gson();

    @Nullable
    public static <T> T getContentDetails(
            @NotNull String bongoId,
            @NotNull String authorization,
            @NotNull String acceptLanguage,
```

</details>

<details>
<summary>[medium] extensions/hoichoi/src/main/kotlin/app/morphe/extension/hoichoi/repos/ContentRepo.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.shared.extension.org.json.objects
import java.util.Random
import org.json.JSONArray
internal class ContentRepo(
    private val chain: Interceptor.Chain,
    private val contentId: String,
    private val action: String?,
    private val language: String?,
    private val token: String?,
) {
    private val anonymousToken: String by lazy {
        val request =
            Request.Builder()
                .url("https://prod-api.hoichoi.dev/core/api/v1/users/anonymous-token")
                .build()
```

</details>

<details>
<summary>[medium] extensions/iscreen/src/main/java/app/morphe/extension/iscreen/patches/TempUserPatch.java — new non-allowlisted URL or IP</summary>

```
import com.google.gson.Gson;
import com.playoffstudio.modelmodule.LoginResponse;

import org.jetbrains.annotations.NotNull;

import java.io.IOException;

    @NotNull
    public static String getRefreshToken(@NotNull com.rockstreamer.iscreen.util.PreferenceUtil self) {
        return getRefreshToken(self::getRefreshToken, self::setRefreshToken);
    }
    @NotNull
    public static String getRefreshToken(
            @NotNull com.rockstreamer.iscreentv.utils.PreferenceUtil self) {
        return getRefreshToken(self::getRefreshToken, self::setRefreshToken);
```

</details>

<details>
<summary>[info] extensions/platform8/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
dependencies {
    compileOnly(project(":extensions:platform8:stub"))
    compileOnly(project(":extensions:shared:library"))
}

```

</details>

<details>
<summary>[medium] extensions/platform8/src/main/kotlin/app/morphe/extension/platform8/repos/ContentRepo.kt — new non-allowlisted URL or IP</summary>

```
package app.morphe.extension.platform8.repos

import android.net.Uri
import app.morphe.extension.shared.extension.org.json.objects
import com.android.volley.DefaultRetryPolicy
import com.android.volley.Network
import com.android.volley.NetworkResponse
import com.android.volley.toolbox.StringRequest
import org.json.JSONArray
import org.json.JSONObject

internal class ContentRepo(
    private val network: Network,
    private val code: String,
    private val catalogue: String?,
```

</details>

<details>
<summary>[info] extensions/platform8/stub/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
dependencies {
    api(libs.volley)
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
