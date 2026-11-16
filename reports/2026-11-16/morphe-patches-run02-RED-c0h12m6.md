# MorpheApp/morphe-patches — 2026-11-16

Commit: 31234a8465683a389bcfba25ad636fd1cd38fd02 | Status: RED | crit:0 high:12 med:6

<details>
<summary>[info] extensions/music/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
@file:Suppress("AvoidDuplicateDependencies")

    implementation(libs.annotation)
    testImplementation(libs.kxml2)

```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/model/MiniLyricsFormatter.java — new non-allowlisted URL or IP</summary>

```
     * <a href="https://www.unicode.org/Public/17.0.0/ucd/EastAsianWidth.txt">EastAsianWidth.txt</a>
            //noinspection SizeReplaceableByIsEmpty
            final String gap = line.text().substring(cursor, start);
            if (hasLetterOrDigit(gap)) {
            if (!units.isEmpty() && spaced && !hasWhitespace(gap)) {

```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/settings/preference/MwebSignInPreference.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.45 — no ban]</summary>

LLM review: benign (0.45, benign-other): The provided excerpt contains only the GPLv3 copyright header, package declaration, and standard Android imports (Dialog, Context, Intent, SuppressLint). No cookie access, network call, WebView setup, or data-handling code is present in the visible portion, so the static-analysis heuristic ('same-app stored data/cookies with network') cannot be confirmed or acted on. No behavioral evidence of exfiltration, backdoor, spyware, or supply-chain compromise exists in the supplied text. Confidence is low because the excerpt is truncated and the actual preference/implementation body was not provided; a full diff review of the cookie/network logic is recommended before final clearance.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.settings.preference;

import static app.morphe.extension.shared.StringRef.str;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/settings/preference/MwebSignInPreference.java — sensitive source reaches network sink [llm: benign 0.3 — no ban]</summary>

LLM review: benign (0.3, benign-other): The provided excerpt contains only the copyright/license header, package declaration, and benign Android imports (Dialog, Context, Intent, SuppressLint, and a project-internal StringRef helper). No actual diff hunks, method bodies, network calls, credential handling, or data-flow paths are visible, so the 'sensitive source reaches network sink' static-analysis claim cannot be corroborated from the shown code. The header text (including the GitHub PR URL) is metadata, not an instruction, and contains no prompt-injection content. With no offending lines present, a malicious verdict is not supportable; the file name (a sign-in preference UI) is consistent with normal settings-screen code. Flagging benign with low confidence due to insufficient excerpt; a full diff would be needed for a definitive assessment.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.settings.preference;

import static app.morphe.extension.shared.StringRef.str;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/MwebSignIn.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.3, exfiltration): The provided excerpt contains only the copyright header, package declaration, and imports (Uri, CookieManager, WebStorage, StringRef). No actual cookie read/write, network call, or same-site scoping logic is visible, so the static-analysis concern (same-app stored cookies combined with network access) cannot be confirmed or refuted from this diff. The imports alone are consistent with a legitimate Mweb sign-in cookie spoofing feature, but because the diff is truncated and the flagged behavior is not shown, I cannot verify same-site handling; treating as low-confidence suspicious rather than benign or malicious.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import static app.morphe.extension.shared.StringRef.str;

import android.net.Uri;
import android.webkit.CookieManager;
import android.webkit.WebStorage;

```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/MwebSignIn.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.35, benign-other): The provided excerpt contains only the copyright header, package declaration, and imports (android.net.Uri, android.webkit.CookieManager, android.webkit.WebStorage, and a StringRef helper). No method bodies, no network call sites, and no data flow from a sensitive source to a sink are visible, so the static-analysis claim that 'sensitive source reaches network sink' cannot be confirmed or refuted from this excerpt. The class name (MwebSignIn) and package (spoof) are consistent with a legitimate YouTube web-sign-in cookie/session spoofing feature, but CookieManager/WebStorage access plus Uri handling could also be abused to exfiltrate session data. Insufficient evidence to declare benign or malicious; the full diff body is required for a definitive verdict.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import static app.morphe.extension.shared.StringRef.str;

import android.net.Uri;
import android.webkit.CookieManager;
import android.webkit.WebStorage;

```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/MwebSiteSession.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.35, benign-other): The provided excerpt contains only the copyright header, package declaration, and Android imports (Activity, Bitmap, Uri, Handler, Looper). No actual code body is visible, so I cannot identify a concrete sensitive source (e.g., identifier, account data) or a network sink (e.g., HttpURLConnection, OkHttp call, WebView loadUrl) at any specific line. The static-analysis flag ('sensitive source reaches network sink') and the file's location in a 'spoof' package (MwebSiteSession) are suggestive of session-spoofing logic that may transmit device/session identifiers, but without the offending lines I cannot meet the malicious threshold (confidence >= 0.85 with exact line evidence). Per the rules, I choose 'suspicious' rather than 'malicious' and request the full diff body for a definitive verdict.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/MwebSiteSession.java — WebView JS bridge with network sink: addJavascriptInterface,evaluateJavascript</summary>

LLM review: suspicious (0.3, benign-other): The provided excerpt contains only the GPLv3 header, package declaration (app.morphe.extension.shared.spoof), and Android imports (Activity, Bitmap, Uri, Handler, Looper). No executable code is visible, so the static-analysis claim of addJavascriptInterface/evaluateJavascript usage cannot be confirmed or refuted from this excerpt, and no sink, URL, or data flow is demonstrable. The header comment includes a PR URL and license text but contains no instructions attempting to influence this review; per policy, comments inside the diff are treated as untrusted data and were ignored. A WebView JavaScript bridge in a 'spoof' package is a legitimate pattern for session-spoofing features, but such bridges are also a classic vector for exposing sensitive Activity/Context methods to web content or for loading remote scripts, so the full diff (especially any @JavascriptInterface methods, WebViewClient.shouldOverrideUrlLoading, URL loading, and any evaluateJavascript calls with dynamic strings) must be reviewed before a verdict. Insufficient evidence for 'malicious'; flagged as suspicious pending the complete diff.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4764
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.spoof;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
```

</details>

<details>
<summary>[high] extensions/shared-youtube/library/src/main/java/app/morphe/extension/shared/spoof/requests/StreamingDataRequest.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.62 — no ban]</summary>

LLM review: benign (0.62, benign-other): The visible excerpt only shows imports (Uri, Base64/Base64InputStream, InnerTube player-response proto, MwebSignIn/MwebSiteSession/MwebStream) and a call to MwebSiteSession.warmUp() when the first client in clientOrder is a web client, with a comment explaining the website needs time to produce its PoToken. This is consistent with a YouTube 'mweb' session-spoofing module: Base64/Base64InputStream plausibly decode InnerTube protobuf responses, and the session/cookie handling is scoped to the same YouTube web session the extension is impersonating (same-site use). No sink in the excerpt sends stored cookies or data to a third-party host, no dynamic execution, no obfuscated payload, and no instruction-following content is present. The static-analysis flag ('same-app stored data/cookies with network') is a heuristic about cookie-plus-network usage; the excerpt does not show cross-site transmission or exfiltration. Confidence is moderate because the full diff (including the actual cookie attach logic and URL construction) was not provided; if the unshown code attaches the Mweb session cookies to non-YouTube hosts, the verdict should be revisited.

```
import android.net.Uri;
import android.util.Base64;
import android.util.Base64InputStream;

import app.morphe.extension.shared.innertube.PlayerResponseOuterClass.Format;
import app.morphe.extension.shared.spoof.MwebSignIn;
import app.morphe.extension.shared.spoof.MwebSiteSession;
import app.morphe.extension.shared.spoof.MwebStream;
@SuppressWarnings("unused")
        if (clientOrder.length > 0 && clientOrder[0].isWebClient()) {
            // The website takes several seconds to make the PoToken of its first video.
            MwebSiteSession.warmUp();
        }

    /**
```

</details>

<details>
<summary>[info] extensions/youtube/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    implementation(libs.annotation)
    testImplementation(project(":extensions:shared-youtube:library"))

```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/dearrow/DeArrowBrandingRequest.java — new non-allowlisted URL or IP</summary>

```
@SuppressWarnings("unused")
    static final String API_URL = "https://sponsor.ajay.app";
         * @param videoId       The video id of this title.
         * @param originalTitle The original title, or null if not needed, or it failed to fetch.
        public String titleFor(String videoId, @Nullable String originalTitle) {
            fetchedTitles.put(title, videoId);
     * DeArrow title -> video id, of the DeArrow titles that were fetched.
     * Titles replaced before they are laid out are only known by their text.
    private static final Map<String, String> fetchedTitles =
            Collections.synchronizedMap(Utils.createSizeRestrictedMap(1000));
     * @return The video id of the DeArrow title, or null if the title is not a DeArrow title that was fetched.
    @Nullable
    public static String getVideoIdOfTitle(String title) {
        return fetchedTitles.get(title);
    }
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/dearrow/DeArrowVoteDialog.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4840
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches.dearrow;

import static app.morphe.extension.shared.StringRef.str;

import android.app.Dialog;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/settings/preference/DeArrowAccountPreferenceCategory.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4840
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.settings.preference;

import static app.morphe.extension.shared.StringRef.str;

import android.content.Context;
import android.preference.Preference;
import android.preference.PreferenceCategory;
import android.text.Html;
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/settings/preference/DeArrowGuidelinesPreference.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4840
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.settings.preference;

import android.content.Context;
import android.util.AttributeSet;

import app.morphe.extension.shared.settings.preference.URLLinkPreference;

/**
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/sponsorblock/preferences/SponsorBlockCreateSegmentSwitchPreference.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.shared.settings.BooleanSetting;
import app.morphe.extension.youtube.settings.preference.GuidelinesSwitchPreference;
 * Shows the SponsorBlock submission guidelines popup the first time creating new segments is turned on.
@SuppressWarnings("unused")
public class SponsorBlockCreateSegmentSwitchPreference extends GuidelinesSwitchPreference {
    @Override
    protected BooleanSetting getSeenGuidelinesSetting() {
        return Settings.SB_SEEN_GUIDELINES;
    @Override
    protected String getGuidelinesUrl() {
        return "https://wiki.sponsor.ajay.app/w/Guidelines";
    @Override
    protected String getPopupStringPrefix() {
        return "morphe_sb_guidelines_popup";

```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LyricifyProvider.java: previously seen host https://api.credits.fm (2026-11-10) with new HttpURLConnection, openConnection</summary>

LLM review: suspicious (0.55, exfiltration): The static-analysis note indicates a network connection to a previously observed host in a lyrics provider, which could be legitimate API traffic or could be part of an exfiltration flow. No actual diff lines or payload handling are provided, so malicious intent cannot be confirmed with high confidence.

```
(see report of 2026-11-10 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/SpotifyProvider.java: previously seen host https://open.spotify.com (2026-11-10) with new HttpURLConnection, openConnection</summary>

LLM review: suspicious (0.25, benign-other): No actual patch diff or source code was provided in this message. The only content is scanner metadata plus an excerpt that instructs me to consult a prior report ('see report of 2026-11-10 for the earlier half') which I do not have and cannot verify. That is an untrusted reference attempting to supply the 'evidence' for me, and the claimed exfiltration behavior (host https://open.spotify.com, HttpURLConnection/openConnection) cannot be confirmed or denied without the code. Per policy I do not fabricate findings, do not treat the excerpt's claims as instructions, and cannot issue a malicious verdict without exact offending lines. The correct action is to request the real diff for SpotifyProvider.java (and the referenced earlier half) before any verdict can be grounded in observable code behavior.

```
(see report of 2026-11-10 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/UnisonProvider.java: previously seen host https://unison.boidu.dev (2026-11-10) with new HttpURLConnection, openConnection</summary>

LLM review: suspicious (0.2, exfiltration): No actual patch diff or code excerpt was provided in this review request; the only content is a static-analysis summary that defers to a prior report (2026-11-10) which is not available here. The claimed behavior (network calls to https://unison.boidu.dev via HttpURLConnection/openConnection in UnisonProvider.java) cannot be verified against any source lines, so no exact offending lines can be cited and a malicious verdict is not supportable. The claim is taken at face value as unverified, hence suspicious with low confidence. Action required: re-submit with the full diff for both windows so the URL construction, connection handling, and any data written to the output stream can be inspected before a definitive verdict.

```
(see report of 2026-11-10 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/shared/library/src/main/java/app/morphe/extension/shared/settings/preference/about/LicensesDialog.java: previously seen host https://fsf.org, http://www.apache.org, https://www.unicode.org, https://creativecommons.org (2026-11-10) with new WebView</summary>

LLM review: suspicious (0.35, exfiltration): The provided excerpt contains no actual patch code, only a static-analysis claim that a 'new WebView' in LicensesDialog.java completed cross-window exfiltration to fsf.org, www.apache.org, www.unicode.org, and creativecommons.org. Those hosts are all legitimate open-source/license documentation domains, which is exactly what a LicensesDialog would reference, so the flagged pattern is consistent with benign license-link display as well as with WebView-based data leakage. Without the diff body (URL construction, JavaScript interface, shouldOverrideUrlLoading, any query parameters or clipboard/cookie access), I cannot confirm or refute exfiltration. Per policy, uncertainty resolves to suspicious rather than malicious, and no exact offending line can be cited because none was provided.

```
(see report of 2026-11-10 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/CaptionBlockTranslator.java: previously seen host https://edge.microsoft.com (2026-11-10) with new openConnection</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
(see report of 2026-11-10 for the earlier half)
```

</details>


__
