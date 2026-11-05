# browzomje/browzomje-patches — 2026-11-05

Commit: 9b9e0eb1aa342be0fc0a712d4ff17daf2fe9160d | Status: RED | crit:0 high:1 med:2

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/pinterest/NativeImageDownload.java — new non-allowlisted URL or IP</summary>

```

        String primary = (String) AdDetector.fieldValueBySerializedName(image, "url");
        String url = request[1];
        int width = 0;
        int height = 0;
        // Some overflow paths omit the page URL or pass the cover image. Preserve a
        // distinct explicit URL, for example from visual search on a different slide.
        if (url == null || url.isEmpty() || sameImage(url, primary)) {
            String selected = VisibleCarousel.selectedImage((Context) context, request[0]);
            if (selected != null) {
                url = selected;
                MorpheLog.d(MorpheLog.BOARD, "download uses the visible carousel page");
            } else if (url == null || url.isEmpty()) {
                url = primary;
                Object imageWidth = AdDetector.fieldValueBySerializedName(image, "width");
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/app/template/extension/pinterest/UrlSanitizer.java — sensitive source reaches network sink [llm: benign 0.75 — no ban]</summary>

LLM review: benign (0.75, benign-other): Excerpt shows a URL sanitizer that enumerates auth parameters to strip and validates Pinterest hosts/paths, with safe URI parsing. No network sink, data exfiltration, or malicious behavior is present in the shown code; the static-analysis flag appears to be a false positive on sanitization logic.

```
import java.net.URI;
import java.util.Locale;
    private static final Set<String> AUTH_PARAMS = new HashSet<>(Arrays.asList(
            "signature", "sig", "token", "access_token", "auth", "authorization", "code",
            "id_token", "refresh_token", "state", "oauth_signature", "x-amz-signature", "x-goog-signature"));
    private static final Pattern ANY_URL_PATTERN = Pattern.compile("https?://[^\\s]+", Pattern.CASE_INSENSITIVE);
    private static final Pattern PINTEREST_WEB_HOST = Pattern.compile(
            "(?:[a-z0-9-]+\\.)*pinterest\\.(?:com|co\\.uk|com\\.au|ca|de|es|fr|it|jp)");
    private static final Pattern PIN_IT_PATH = Pattern.compile("/[A-Za-z0-9_-]+/?");
    private static final Pattern SHORTENER_PATH = Pattern.compile("/url_shortener/[A-Za-z0-9_-]+/redirect/?");
    private static final Pattern PIN_PATH_PATTERN = Pattern.compile("(/pin/[0-9]+)(?:/sent)?/?");
    private static URI parse(String url) {
            return URI.create(url);
        } catch (IllegalArgumentException ignored) {
            return null;
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/app/template/extension/pinterest/VisibleCarousel.java — new non-allowlisted URL or IP</summary>

```
package app.browzomje.extension.pinterest;

import android.app.Activity;
import android.content.Context;
import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;

/** Reads the selected page from the carousel on the downloading Pin's screen. */
final class VisibleCarousel {
    private VisibleCarousel() {}

    static String selectedImage(Context context, String pinId) {
        Activity activity = PinterestUtils.activityOf(context);
        if (activity == null) return null;
```

</details>


__
