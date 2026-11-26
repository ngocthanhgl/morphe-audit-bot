# MorpheApp/morphe-patches — 2026-11-26

Commit: d38d9d841a965953751ef1f733e308bcde46a5a7 | Status: RED | crit:0 high:17 med:10

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/applemusicartwork/AppleMusicCatalog.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/5082
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.applemusicartwork;

import android.util.Base64;

import androidx.annotation.Nullable;

import org.json.JSONArray;
import org.json.JSONException;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/KuwoProvider.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.requests;

import androidx.annotation.Nullable;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayInputStream;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LyricsPlusProvider.java — anonymizer/risky-infra URL: https://lyricsplus.prjktla.workers.dev</summary>

```
import java.io.UnsupportedEncodingException;
import java.util.Locale;
import app.morphe.extension.music.settings.Settings;
public final class LyricsPlusProvider implements LyricsProvider {
    /** The official server first, then the mirrors the official client lists. */
    static final String[] API_HOSTS = {
            "https://lyricsplus.prjktla.my.id",
            "https://lyricsplus.binimum.org",
            "https://lyricsplus.prjktla.workers.dev",
    };

    private static String[] hosts() {
        return LyricsEndpoints.hosts(API_HOSTS, Settings.LYRICS_PLUS_ENDPOINT.get());
    }
        return "LyricsPlus";
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/QQProvider.java — new non-allowlisted URL or IP</summary>

```
import java.util.HashSet;
import java.util.Set;
import app.morphe.extension.shared.Utils;
    private static final String SHU6_URL = "https://shu6.y.qq.com/cgi-bin/musicu.fcg";
    private static final String WEB_SEARCH_URL = "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp";
    /** Asks the two musicu hosts, then the web search, and keeps the first that has results. */
    private static List<JSONObject> searchAll(String keyword, TrackInfo track) {
        for (String url : new String[]{MUSICU_URL, SHU6_URL}) {
            try {
                JSONArray songs = musicuSearch(url, keyword);
                if (songs != null && songs.length() > 0) {
                    return softGateSort(expandGrpTree(songs), track);
                }
            } catch (Exception ex) {
                Logger.printDebug(() -> "QQ search failed: " + url, ex);
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/romanizers/KuromojiDictStore.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.romanizers;

import androidx.annotation.Nullable;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
```

</details>

<details>
<summary>[high] extensions/music/src/main/java/app/morphe/extension/music/patches/sonos/SonosDiscovery.java — sensitive source reaches network sink [llm: benign 0.35 — no ban]</summary>

LLM review: benign (0.35, benign-other): The provided excerpt contains only a copyright/license header and import statements (androidx.annotation.Nullable, org.xmlpull.v1 XmlPullParser/XppFactory). No executable code is present: there is no sensitive source (location, identifiers, credentials, device info) and no network sink (HttpURLConnection, OkHttp, Socket, etc.) in the visible lines, so the static-analysis claim 'sensitive source reaches network sink' cannot be corroborated from this excerpt. XML pull-parser imports are consistent with SSDP/UPnP discovery response parsing, which is normal for a Sonos discovery module. The header comment (PR URL, GPLv3 Section 7 notice) is metadata, not an instruction, and was ignored per policy; no prompt-injection attempt was detected in the diff text. Confidence is low because the actual method bodies were not included; if the full diff shows data gathered from a local source being written to a remote endpoint without user consent, the verdict should be revisited.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4891
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.sonos;

import androidx.annotation.Nullable;

import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;

```

</details>

<details>
<summary>[high] extensions/music/src/main/java/app/morphe/extension/music/patches/sonos/SonosDiscovery.java — possible DNS exfiltration channel: getByName</summary>

LLM review: suspicious (0.5, exfiltration): The provided excerpt contains only package and import declarations; no getByName call or network behavior is visible. Sonos discovery may legitimately use local DNS/mDNS, but the incomplete excerpt prevents confirming whether the flagged getByName usage is benign or an exfiltration channel.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4891
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.sonos;

import androidx.annotation.Nullable;

import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;

```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/sonos/SonosSoapClient.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4891
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.sonos;

import static app.morphe.extension.shared.StringRef.str;

import androidx.annotation.Nullable;

import java.io.IOException;
import java.io.OutputStream;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/settings/preference/LyricsOrderedListPreference.java — new non-allowlisted URL or IP</summary>

```
import android.widget.RadioButton;
import android.widget.RadioGroup;
import app.morphe.extension.music.patches.lyrics.romanizers.RimeDictionaryStore;
            "Apple", "LyricsPlus", "LrcRed", "bLyrics", "Lyricify", "Unison",
            "YTMusic", "LRCLIB", "NetEase", "Luna", "Kuwo", "LunaBeat",
        PROVIDER_LABELS.put("LyricsPlus", "LyricsPlus");
        PROVIDER_URLS.put("Kuwo", "https://www.kuwo.cn/");
        PROVIDER_URLS.put("LyricsPlus", "https://lyricsplus.prjktla.my.id/");
    private static void styleCheckBox(CompoundButton box, int fg) {
        LyricsRimeDictionaryDialog.show(context, () -> {
            if (isRimeProvider(item.id) && !item.enabled && RimeDictionaryStore.isActive()) {
            if (isRimeProvider(item.id) && item.enabled && !RimeDictionaryStore.isActive()) {
        if (!RimeDictionaryStore.isActive()) {
            LyricsRimeDictionaryDialog.show(context, () -> {
                if (turnedOn[0] || !RimeDictionaryStore.isActive()) {
```

</details>

<details>
<summary>[high] extensions/reddit/src/main/java/app/morphe/extension/reddit/patches/DownloadAllFromGalleryPatch.java — sensitive source reaches network sink [llm: benign 0.35 — no ban]</summary>

LLM review: benign (0.35, benign-other): The provided excerpt contains only the GPLv3 copyright header, package declaration, and Android imports (Activity, Application, ContentResolver, etc.). No network sink, sensitive-data access, exfiltration logic, or prompt-injection attempt is visible in the supplied lines, so the static-analysis claim ('sensitive source reaches network sink') cannot be confirmed from the visible code. No malicious behavior is demonstrable; confidence is low because the full diff body was not included for review.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/5193
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.reddit.patches;

import static app.morphe.extension.shared.StringRef.str;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Application;
import android.content.ContentResolver;
```

</details>

<details>
<summary>[info] extensions/shared-youtube/library/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    implementation(libs.hiddenapi)
    implementation(libs.quackjs.java)

```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/settings/preference/WebsiteSignInPreference.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
 * https://github.com/MorpheApp/morphe-patches/pull/5208
import app.morphe.extension.shared.spoof.ClientType;
import app.morphe.extension.shared.spoof.WebViewProfiles;
import app.morphe.extension.shared.spoof.WebsiteSignIn;
 * Sign in of a web client (Mobile Web or Web), in a WebView. Each web client has its own sign in,
 * and the preference shows the sign in of the web client of the settings.
public abstract class WebsiteSignInPreference extends Preference implements Preference.OnPreferenceClickListener {
    public WebsiteSignInPreference(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
    public WebsiteSignInPreference(Context context, AttributeSet attrs, int defStyleAttr) {
    public WebsiteSignInPreference(Context context, AttributeSet attrs) {
    public WebsiteSignInPreference(Context context) {
     * @return If the spoof settings use a web client.
    /**
     * @return The web client whose sign in the preference shows.
     */
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/WebViewProfiles.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.55, exfiltration): The excerpt only shows imports of CookieManager, WebStorage, and WebView; no sensitive-source-to-network-sink data flow or network call is visible. The static-analysis flag is not substantiated by the provided code, so this is not malicious on the available evidence.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/5208
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import android.annotation.SuppressLint;
import android.webkit.CookieManager;
import android.webkit.WebStorage;
import android.webkit.WebView;

import androidx.annotation.Nullable;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/WebViewProfiles.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.4, benign-other): The provided excerpt contains only package/import declarations. WebView, CookieManager, and WebStorage imports are consistent with WebView profile spoofing but do not themselves demonstrate reflection-hidden behavior or a network sink. No offending code is visible, so malicious intent cannot be confirmed; the static-analysis flag remains unverified.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/5208
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import android.annotation.SuppressLint;
import android.webkit.CookieManager;
import android.webkit.WebStorage;
import android.webkit.WebView;

import androidx.annotation.Nullable;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/WebsiteSession.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.55, exfiltration): The provided excerpt contains only package and import declarations; no cookie, storage, or network behavior is visible. The static-analysis flag suggests possible same-app cookie/data access combined with network activity, but the excerpt does not show any offending code. Without the full diff, this cannot be confirmed as malicious and remains suspicious pending review of the complete file.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 * https://github.com/MorpheApp/morphe-patches/pull/5208
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/WebsiteSession.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.5, exfiltration): The provided excerpt contains only package/import declarations and no visible source-to-sink data flow. The static-analysis flag suggests sensitive data may reach a network sink, but the actual offending lines are not present in the excerpt, so malicious intent cannot be confirmed. This warrants suspicious review pending the full diff.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 * https://github.com/MorpheApp/morphe-patches/pull/5208
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/WebsiteSession.java — WebView JS bridge with network sink: addJavascriptInterface,evaluateJavascript [llm: benign 0.3 — no ban]</summary>

LLM review: benign (0.3, benign-other): The provided excerpt contains only the copyright/license header, package declaration, and Android imports (SuppressLint, Activity, Bitmap, Uri, Handler). No implementation is visible: there is no addJavascriptInterface call, no evaluateJavascript invocation, no URL/endpoint construction, and no data-handling logic in the shown lines. The static-analysis flag references sinks that are not present in the visible excerpt, so there is no code behavior here to judge as malicious. The class name (WebsiteSession) and package (spoof) are consistent with a legitimate YouTube session-spoofing helper that uses a WebView bridge, which is a common benign pattern. Confidence is low because the diff is truncated; a full-file review is required to confirm the JS bridge is not exposed to untrusted origins or used to ship data to a remote sink. No prompt-injection content was observed in the excerpt, and no instructions embedded in the diff were followed.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 * https://github.com/MorpheApp/morphe-patches/pull/5208
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/WebsiteSignIn.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.9 — no ban]</summary>

LLM review: benign (0.9, benign-other): The class defines static final URLs for mobile and desktop sign‑in. Both values point to known Google ServiceLogin endpoints, properly URL‑encoded. Adding a second constant for the desktop flow does not introduce new network calls or data exfiltration; it simply mirrors the mobile flow for non‑mobile clients. The 'spoof' directory name refers to mimicking website behavior, not to covert communication. No hidden instructions or unsafe actions are present in the code.

```
 * https://github.com/MorpheApp/morphe-patches/pull/5208
 * Sign in of a web client: Mobile Web, or Web.
 * The user signs in to the website of the client in a WebView, and the cookies stay only in the cookie store
 * of the WebView. Each web client has its own sign in, in its own profile of the WebView
 * (see {@link WebViewProfiles}), since the cookies are of all of youtube.com.
 * They are never saved in the settings, so they are never exported,
public final class WebsiteSignIn {
    public static final String MOBILE_ORIGIN = "https://m.youtube.com";
    private static final String MOBILE_SIGN_IN_URL = "https://accounts.google.com/ServiceLogin"
    /**
     * Signs in to YouTube, and then goes to www.youtube.com.
     */
    private static final String DESKTOP_SIGN_IN_URL = "https://accounts.google.com/ServiceLogin"
            + "?service=youtube&uilel=3&passive=true"
            + "&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252F";
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/WebsiteSignIn.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
 * https://github.com/MorpheApp/morphe-patches/pull/5208
 * Sign in of a web client: Mobile Web, or Web.
 * The user signs in to the website of the client in a WebView, and the cookies stay only in the cookie store
 * of the WebView. Each web client has its own sign in, in its own profile of the WebView
 * (see {@link WebViewProfiles}), since the cookies are of all of youtube.com.
 * They are never saved in the settings, so they are never exported,
public final class WebsiteSignIn {
    public static final String MOBILE_ORIGIN = "https://m.youtube.com";
    private static final String MOBILE_SIGN_IN_URL = "https://accounts.google.com/ServiceLogin"
    /**
     * Signs in to YouTube, and then goes to www.youtube.com.
     */
    private static final String DESKTOP_SIGN_IN_URL = "https://accounts.google.com/ServiceLogin"
            + "?service=youtube&uilel=3&passive=true"
            + "&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252F";
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/requests/StreamingDataRequest.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import app.morphe.extension.shared.spoof.WebsiteSignIn;
import app.morphe.extension.shared.spoof.WebsiteSession;
import app.morphe.extension.shared.spoof.WebsiteStream;
import app.morphe.extension.shared.spoof.SpoofVideoStreamsPatch;
     * @param client   Client the streams are of.
     * @param signedIn If the streams were fetched signed in to the account of the user.
                             ClientType client, boolean signedIn) {
        if (!skipClient(preferredClient)) {
            orderToUse.add(preferredClient);
            // YouTube serves each TV device separately, so another one can still play when the first is cut off.
            if (preferredClient == ClientType.TV_SABR) {
                orderToUse.add(ClientType.TV_SABR_WII_U);
            }
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/settings/preference/about/MorpheCreditsDialog.java — new non-allowlisted URL or IP</summary>

```
import androidx.annotation.Nullable;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
/**
 * Who wrote the patches: everyone who committed to Morphe, for all time or a recent period, over
 * the projects Morphe grew out of.
 */
    /**
     * A project the patches are, or grew out of, credited by a link to the people who wrote it.
     *
     * @param period When the project was worked on.
     * @param owner  GitHub account whose picture the project goes by. Null for a project of
     *               others, which goes by its initial: their logos are not ours to show.
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/settings/preference/about/MorpheSupportersDialog.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.settings.preference.about;

import static app.morphe.extension.shared.StringRef.str;

import android.content.Context;

import androidx.annotation.Nullable;

```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/ghostplay/GhostChannelSearchApi.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/5197
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to Morphe contributions.
 */

package app.morphe.extension.youtube.patches.ghostplay;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
```

</details>

<details>
<summary>[high] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/utils/requests/CaptionTrackRequest.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/5226
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches.utils.requests;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.OutputStream;
```

</details>

<details>
<summary>[high] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/utils/requests/CaptionTrackRequest.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (per-scan review cap reached)

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/5226
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches.utils.requests;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.OutputStream;
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/QQProvider.java: previously seen host https://y.qq.com (2026-11-25) with new HttpURLConnection, openConnection</summary>

LLM review: unreviewed (per-scan review cap reached)

```
(see report of 2026-11-25 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/SimpMusicProvider.java: previously seen host https://lyrics.simpmusic.org (2026-11-25) with new HttpURLConnection, openConnection</summary>

LLM review: unreviewed (per-scan review cap reached)

```
(see report of 2026-11-25 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/morphe/extension/shared/settings/preference/about/LicensesDialog.java: previously seen host https://fsf.org, http://www.apache.org, https://www.unicode.org, https://creativecommons.org (2026-11-25) with new WebView</summary>

LLM review: unreviewed (per-scan review cap reached)

```
(see report of 2026-11-25 for the earlier half)
```

</details>


__
