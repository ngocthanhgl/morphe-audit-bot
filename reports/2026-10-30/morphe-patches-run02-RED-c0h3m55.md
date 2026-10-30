# MorpheApp/morphe-patches — 2026-10-30

Commit: 0bb704a9a4edb5324f6e607f3fc5a531713c607c | Status: RED | crit:0 high:3 med:55

<details>
<summary>[info] docs/custom-icons/morphe-player-icons-tabler-png.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] docs/custom-icons/morphe-player-icons-tabler.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/derive/AiProviders.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3877
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.derive;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/derive/DeepLClient.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3877
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.derive;

import androidx.annotation.Nullable;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.OutputStream;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/parsers/TTMLParser.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.derive.LyricsRomanizer;
    private static final String NS_COMPOSER = "https://composer.betterlyrics.org/ttml";
    private static final String NS_COMPOSER_LEGACY = "https://composer.boidu.dev/ttml";
    private static final Set<String> COMPOSER_EXCLUDED_KEYS = Set.of(
            "isrc", "songwriter", "songwriters", "ytVideoId", "language"
    );

    private static final String AGENT_TYPE_PERSON = "person";
    private static final String AGENT_TYPE_GROUP = "group";
    private static final String AGENT_TYPE_OTHER = "other";
                        } else if ("meta".equals(local) && isMetaNamespace(p)) {
                            collectMetaCredit(p, amllCredits);
                StringBuilder sb = new StringBuilder("Written by: ");
                    if (i > 0) sb.append(", ");
                        if (pl != null && (!pl.text().trim().isEmpty() || !pl.bgLines().isEmpty())) {
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/AMLLProvider.java — new non-allowlisted URL or IP</summary>

```
    @Nullable
    private static String sourceUrl(JSONObject getData, JSONObject best) {
        String file = firstPath(getData);
        if (file == null) {
            file = firstPath(best);
        }
        if (file == null || file.isEmpty()) {
            return null;
        }
        return "https://amlldb.bikonoo.com/view-lyric.html?file=" + file;
    }

    @Nullable
    private static String firstPath(JSONObject object) {
        for (String key : new String[]{"path", "file", "filename", "filePath"}) {
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/AppleMusicProvider.java — new non-allowlisted URL or IP</summary>

```
    private static String titleFromSong(JSONObject song) {
        JSONObject attributes = song.optJSONObject("attributes");
        return attributes != null ? attributes.optString("name", "") : "";
    }

    private static String artistFromSong(JSONObject song) {
        JSONObject attributes = song.optJSONObject("attributes");
        return attributes != null ? attributes.optString("artistName", "") : "";
    }

    private static long durationFromSong(JSONObject song) {
        JSONObject attributes = song.optJSONObject("attributes");
        if (attributes == null) return 0;
        final long durationMs = attributes.optLong("durationInMillis", 0);
        return durationMs > 0 ? durationMs / 1000 : 0;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/BinimumProvider.java — new non-allowlisted URL or IP</summary>

```
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import app.morphe.extension.music.patches.lyrics.model.Lyrics;
import app.morphe.extension.music.patches.lyrics.model.LyricsLine;
import app.morphe.extension.music.patches.lyrics.model.Word;
import app.morphe.extension.shared.Logger;
import app.morphe.extension.shared.requests.Requester;
    private static final String API_URL = "https://lyricsplus.binimum.org/v2/lyrics/get";
    private static final String LEGACY_BASE_URL = "https://lyrics-api.binimum.org/";

    private static final String BROWSER_USER_AGENT =
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                    + "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/DeezerProvider.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.model.TrackVersion;
import app.morphe.extension.music.patches.lyrics.parsers.LRCParser;
import app.morphe.extension.shared.Utils;
    /** Lookups that succeeded, including tracks without a version. Failed requests are retried. */
    private static final Map<TrackInfo, TrackVersion> versions = Utils.createSizeRestrictedMap(64, true);
    /**
     * The version of the track, from the title_short and title_version fields of Deezer's own
     * search results. The variant is empty when Deezer has no exact match or the track has no
     * version.
     *
     * @param track Untouched metadata, see {@link TrackVersion#query}.
     * @throws IOException If a request fails.
     */
    public static TrackVersion fetchVersion(TrackInfo track) throws Exception {
        synchronized (versions) {
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LrcRedProvider.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3877
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.requests;

import androidx.annotation.Nullable;

import org.json.JSONArray;
import org.json.JSONObject;

import java.net.HttpURLConnection;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LyricifyProvider.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.shared.Logger;
    private static HttpURLConnection openApi(String url) throws IOException {
        final HttpURLConnection conn =
                (HttpURLConnection) new java.net.URL(url).openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("User-Agent", USER_AGENT);
        conn.setRequestProperty("Accept", "application/json");
        conn.setRequestProperty("Accept-Encoding", "gzip");
        conn.setConnectTimeout(5000);
        conn.setReadTimeout(8000);
        return conn;
    }

    @Nullable
    private static Resolved resolveFromCreditsFm(String title, String artist) {
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LyricsRequests.java — new non-allowlisted URL or IP</summary>

```
    public static final String SIMPLIFIED_CHINESE = "zh-Hans";
    /**
     * For the endpoints that turn away an unrecognised client. Providers that answer only
     * to a mobile agent keep one of their own.
     */
    public static final String CHROME_DESKTOP_USER_AGENT =
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                    + "(KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
    /** Open to anyone, in need of no token. */
    public static final String ITUNES_SEARCH_URL = "https://itunes.apple.com/search";
    public static final int SOFT_MIN = 2;
    public static final int VIDEO_ID_TRUST = 10;
    public static final int NEUTRAL = 6;
    private static volatile String decorationRegexSource;
    private static volatile java.util.regex.Pattern decorationPattern;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/NetEaseProvider.java — new non-allowlisted URL or IP</summary>

```
    private static boolean initialized;

    @Override
    public String name() {
        return "NetEase";
    }

    @Override
    public boolean hasCandidates() {
        return true;
    }

    @Nullable
    @Override
    public FetchResult fetch(TrackInfo track) throws Exception {
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/QQProvider.java — new non-allowlisted URL or IP</summary>

```
    private static final Pattern QRC_XML = Pattern.compile(
            "<Lyric_1 LyricType=\"1\" LyricContent=\"([\\s\\S]*?)\"/>");
    private static final Pattern NUMERIC_ENTITY = Pattern.compile("&#(\\d+);");
    private static final Pattern QRC_LINE = Pattern.compile("^\\[(\\d+),(\\d+)](.*)");
    private static final Pattern QRC_WORD = Pattern.compile("\\((\\d+),(\\d+)\\)");
    private static final Pattern QRC_WHOLE_LINE_COMMENT = Pattern.compile("//");

    @Override
    public String name() {
        return "QQ";
    }

    @Override
    public boolean hasCandidates() {
        return true;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/SimpMusicProvider.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.model.LyricsMerge;
    private static String sourceUrl(String videoId) {
        return "https://lyrics.simpmusic.org/#/video/" + videoId;
    }

    private static String sanitizeLrc(String lrc, long[] offsetHolder) {
        String[] rawLines = lrc.split("\\r?\\n");
        StringBuilder sb = new StringBuilder(lrc.length());

        for (String rawLine : rawLines) {
            String trimmed = rawLine.trim();
            if (trimmed.startsWith("[offset:")) {
                int close = trimmed.indexOf(']');
                if (close > 0) {
                    String val = trimmed.substring(8, close).trim();
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/SpotifyProvider.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.parsers.LRCParser;
    private static final long SECRET_REFRESH_INTERVAL_MS = 60 * 60 * 1000;
    private static final int[] FALLBACK_SECRET_DATA = {
            99, 111, 47, 88, 49, 56, 118, 65, 52, 67, 50, 104,
            117, 101, 55, 94, 95, 75, 94, 49, 69, 36, 85, 64, 74, 60
    };
    private static final String FALLBACK_TOTP_VERSION = "19";
    private static HttpURLConnection openSearchConnection(String accessToken,
                                                          @Nullable String clientToken,
                                                          byte[] bodyBytes) throws IOException {
        final HttpURLConnection connection = (HttpURLConnection)
                new java.net.URL(PARTNER_GRAPHQL_URL).openConnection();
        connection.setRequestMethod("POST");
        connection.setConnectTimeout(5000);
        connection.setReadTimeout(8000);
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/UnisonProvider.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.model.LyricsMerge;
    private static String getKeyId() {
        String cached = cachedKeyId;
        if (cached != null) {
            return cached;
        }
        synchronized (UnisonProvider.class) {
            if (cachedKeyId != null) {
                return cachedKeyId;
            }
            cachedKeyId = computeKeyId();
            return cachedKeyId;
        }
    }

```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/romanizers/CldrTransformsStore.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3750
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.romanizers;

import androidx.annotation.Nullable;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/romanizers/RimeDictStore.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3851
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.romanizers;

import androidx.annotation.Nullable;

import java.io.BufferedInputStream;
import java.io.Closeable;
import java.io.File;
import java.io.FileInputStream;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/romanizers/UniDictStore.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3750
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.romanizers;

import androidx.annotation.Nullable;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/settings/Settings.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.derive.AiProviders;
import app.morphe.extension.music.patches.lyrics.model.MiniLyricsFormatter;
import app.morphe.extension.shared.settings.FloatSetting;
            "YTMusic,-Captions,Apple,LRCLIB,QQ,NetEase,KuGou,Luna,-PetitLyrics,-bLyrics,-BiniLyrics,-LrcRed,-Unison,-SimpMusic,-AMLL,-LunaBeat,-Lyricify,-Musixmatch,-Spotify,-Deezer,-RMM,-Genius,";
    /** A comma separated priority list; a leading '-' disables a provider. */
    public static final StringSetting LYRICS_TRANSLATION_PROVIDERS = new StringSetting("morphe_music_lyrics_translation_provider", AiProviders.DEFAULT_TRANSLATION_ORDER, false, parentsAll(parent(LYRICS_ENABLED), parent(LYRICS_SHOW_TRANSLATE_BUTTON)));
    public static final StringSetting LYRICS_TRANSLATION_LANGUAGE = new StringSetting("morphe_music_lyrics_translation_language", "DEFAULT", false, parentsAll(parent(LYRICS_ENABLED), parent(LYRICS_SHOW_TRANSLATE_BUTTON)));

    /** A comma separated priority list; a leading '-' disables a provider. */
    public static final StringSetting LYRICS_ROMANIZATION_PROVIDERS = new StringSetting("morphe_music_lyrics_romanization_provider", AiProviders.DEFAULT_ROMANIZATION_ORDER, false, parentsAll(parent(LYRICS_ENABLED), parent(LYRICS_SHOW_ROMANIZE_BUTTON)));

    /**
     * The dictionaries the user agreed to download, as comma separated {@code ja} and {@code zh}
     * entries. Blank means the romanization language decides, which keeps an upgraded install
     * fetching both the way earlier versions did.
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/settings/preference/LyricsOrderedListPreference.java — new non-allowlisted URL or IP</summary>

```
import android.app.Dialog;
import android.content.res.ColorStateList;
import android.util.Pair;
import android.util.TypedValue;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import androidx.annotation.Nullable;

import app.morphe.extension.music.patches.lyrics.derive.AiProviders;
import app.morphe.extension.music.patches.lyrics.romanizers.RimeDictStore;
import app.morphe.extension.shared.Utils;
import app.morphe.extension.shared.ui.CustomDialog;
 * Settings row that shows providers in priority order, with a switch for each one. Dragging
 * reorders them. The same row serves lyrics sources, translation and romanization providers.
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/settings/preference/LyricsProviderConfigDialog.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.settings.preference;

import static app.morphe.extension.shared.StringRef.str;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/niconicocomments/YouTubeChatSource.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4080
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 * 
 * Niconico-style live/replay comments implementation is adapted from
 * https://github.com/david419kr/niconico-yt-morphe-patches (GPLv3)
 * Feature design is based on david419kr/niconico-yt (MIT License)
 */

package app.morphe.extension.youtube.niconicocomments;

import androidx.annotation.Nullable;

```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/queue/NativePlaylistQueuePatch.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3953
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches.queue;

import static app.morphe.extension.shared.StringRef.str;

import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/videoplayer/ExternalDownloadButton.java — new non-allowlisted URL or IP</summary>

```
import static app.morphe.extension.shared.StringRef.str;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Typeface;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.RippleDrawable;
import android.view.Gravity;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;
import app.morphe.extension.shared.ResourceUtils;
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-af-rZA/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime Woordlys</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime Woordlys benodig ook UniDict: in die Afgeskakelde Woordeboekverskaffer, merk \"Chinese en Kantonese karakters (UniDict)\" en laat dit eers klaar aflaai. Sonder dit lewer 'n lys wat karakters lees geen lees op nie.

Merk die lyste wat Rime Woordlys moet lees, tik dan Stoor om hulle af te laai. 'n Lys wat jy bygevoeg het, word verwyder wanneer jy dit ontmerk.

Elke lys is jou eie woord-na-lees tabel, 'n .dict.yaml met lyne soos:
字 ham
典 din2
Die eerste kolom is die woord, die tweede sy lees; ekstra kolomme en lyne sonder 'n tab word geignoreer."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Geen Rime-woordlys is vir die taal hierbo aangelê nie. Tik hierdie naam om een aan te vink, of kies \'n taal wat \'n lys het</string>
  <string name="morphe_music_lyrics_rime_dict_add">Voeg by</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Voeg \'n Rime-woordlys by</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">\'n .dict.yaml-lêer, of \'n zip wat een bevat, met lyne soos 字 ham en 典 din2. Die lys word opgespoor wanneer jy dit merk en tik Stoor, en sy lisensie is van jou om te kontroleer</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Taalkode</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Twee of drie letters, soos hak of wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ar-rSA/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">قائمة كلمات Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"قائمة كلمات ريم تتطلب أيضاً UniDict: في مزوّد القاموس غير المتصل، حدّد \"محرفي الصينية والكantonese (UniDict)\" ودعّه ينتهي من التحميل أولاً. بدونه، القائمة التي تقرأ المحرفات لن تنتج أي قراءة.

حدّد القوائم التي يجب أن تقرأها قائمة كلمات ريم، ثم اضغط حفظ لتحميلها. تتم إزالة القائمة التي أضفتها عندما تلغي تحديدك لها.

كل قائمة هي جدول خاص بك للكلمة-إلى-القراءة، ملف .dict.yaml مع أسطر مثل:
字 ham
典 din2
العمود الأول هو الكلمة، والثاني قراءتها؛ يتم تجاهل الأعمدة والأسطر الإضافية بدون علامة تبويب."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">لم يتم تحديد أي قائمة كلمات Rime للغة المذكورة أعلاه. انقر على هذا الاسم لتحديد واحد، أو اختر لغة تحتوي على قائمة</string>
  <string name="morphe_music_lyrics_rime_dict_add">إضافة</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">إضافة قائمة كلمات Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">ملف .dict.yaml، أو أرشيف zip يحتوي على واحد، مع أسطر مثل 字 ham و 典 din2. يتم جلب القائمة عندما تحددها وتضغط حفظ، وترخيصها خاص بك لفحصه</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">رمز اللغة</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">اثنان أو ثلاثة أحرف، كما في hak أو wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-bn-rBD/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">রাইম ওয়ার্ডলিস্ট</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"রাইম ওয়ার্ডলিস্টের জন্য UniDict-ও প্রয়োজন: অফলাইন শব্দকোষ প্রদানকারীতে, \"চাইনিজ এবং ক্যান্টোনিজ চরিত্র (UniDict)\" টিক করুন এবং আগে ডাউনলোড শেষ হতে দিন। এটি ছাড়া একটি তালিকা যা অক্ষর পড়ে তা কোনো উচ্চারণ দেয় না।

রাইম ওয়ার্ডলিস্ট যে তালিকাগুলো পড়বে সেগুলো টিক করুন, তারপর সেগুলোর ডাউনলোড করতে Save ট্যাপ করুন। আপনি যে তালিকাটি যোগ করেছেন তা অন্যায় করলে এটি সরিয়ে ফেলা হবে।

প্রতিটি তালিকা হলো আপনার নিজস্ব শব্দ-থেকে-উচ্চারণ টেবিল, একটি .dict.yaml যেখানে এমন লাইন থাকে:
字 ham
典 din2
প্রথম কলামে শব্দটি আছে, দ্বিতীয় কলামে এর উচ্চারণ; বৃহত্তর কলাম এবং ট্যাববিহীন লাইন উপেক্ষা করা হয়।"</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">উপরের ভাষার জন্য কোনো রাইম ওয়ার্ডলিস্ট চেক করা হয়নি। একটি চেক করতে এই নামে ট্যাপ করুন, অথবা একটি তালিকা আছে এমন ভাষা নির্বাচন করুন</string>
  <string name="morphe_music_lyrics_rime_dict_add">যোগ করুন</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">একটি রাইম ওয়ার্ডলিস্ট যোগ করুন</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">একটি .dict.yaml ফাইল, বা একটি সিপি মধ্যে এক ফাইল, যেখানে 字 ham এবং 典 din2 এর মতো লাইন রয়েছে। আপনি এটি টিক করেন এবং Save ট্যাপ করেন তখন তালিকাটি আনা হয়, এবং এর অনুজ্ঞা আপনার কাছে যাচাই করার জন্য</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">ভাষার কোড</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">দুই বা তিন অক্ষরের, হিসেবে hak বা wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-da-rDK/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime Ordlister</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime-ordliste har også brug for UniDict: i den offline ordbogsudbyder skal du bofte \"Kinesiske og kantonesiske tegn (UniDict)\" og lade den være færdig med at hente først. Uden det vil en liste, der aflæser tegn, ikke give nogen aflæsning.

Boft de lister, som Rime-ordlisten skal aflæse, og tryk derefter på Gem for at hente dem. En tilføjede liste fjernes, når du fravælger den.

Hver liste er dit eget ord-til-aflæsning-sæt, en .dict.yaml-fil med linjer som:
字 ham
典 din2
Den første kolonne er ordet, den anden dets aflæsning; ekstra kolonner og linjer uden et tabulator-tegn ignoreres."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Ingen Rime-ordliste er markeret for sproget ovenfor. Tryk på dette navn for at markere en, eller vælg et sprog, der har en liste</string>
  <string name="morphe_music_lyrics_rime_dict_add">Tilføj</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Tilføj en Rime Orddliste</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">En .dict.yaml-fil eller en zip-mappe indeholdende en sådan fil med linjer som 字 ham og 典 din2. Listen hentes, når du bofter den og trykker på Gem, og licensen er din til at kontrollere</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Sprogkode</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">To eller tre bogstaver, som i hak eller wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-de-rDE/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime-Wortliste</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Die Rime-Wortliste benötigt ebenfalls UniDict: Deaktivieren Sie im Offline-Wörterbuch-Anbieter nicht \"Chinesische und Kantonesische Zeichen (UniDict)\" und lassen Sie den Download zuerst abschließen. Ohne sie liefert eine Liste, die Zeichen liest, keine Lesung.

Aktivieren Sie die Listen, die die Rime-Wortliste lesen soll, tippen Sie dann auf Speichern, um sie herunterzuladen. Eine hinzugefügte Liste wird entfernt, wenn Sie sie deaktivieren.

Jede Liste ist Ihre eigene Wort-zu-Lesung-Tabelle, eine .dict.yaml mit Zeilen wie:
字 ham
典 din2
Die erste Spalte ist das Wort, die zweite seine Lesung; zusätzliche Spalten und Zeilen ohne Tabulator werden ignoriert."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Für die obige Sprache ist keine Rime-Wortliste aktiviert. Tippen Sie auf diesen Namen, um eine zu aktivieren, oder wählen Sie eine Sprache mit einer Liste</string>
  <string name="morphe_music_lyrics_rime_dict_add">Hinzufügen</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Eine Rime-Wortliste hinzufügen</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Eine .dict.yaml-Datei oder ein Zip-Archiv mit einer solchen Datei mit Zeilen wie 字 ham und 典 din2. Die Liste wird abgerufen, wenn Sie sie aktivieren und auf Speichern tippen, und ihre Lizenz können Sie selbst prüfen.</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Sprachcode</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Zwei oder drei Buchstaben, z. B. hak oder wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-el-rGR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Λεξιλόγιο Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Η λίστα λέξεων Rime απαιτεί επίσης το UniDict: στον πάροχο Offline Dictionary, επιλέξτε \"Chinese and Cantonese characters (UniDict)\" και αφήστε τον να ολοκληρώσει πρώτα τη λήψη. Χωρίς αυτό, μια λίστα που διαβάζει χαρακτήρες δεν παράγει ανάγνωση.

Επιλέξτε τις λίστες που η λίστα λέξεων Rime πρέπει να διαβάσει, στη συνέχεια πατήστε Αποθήκευση για να τις κατεβάσει. Μια λίστα που προσθέσατε αφαιρείται όταν την αποεπιλέξετε.

Κάθε λίστα είναι ο δικός σας πίνακας λέξης-ανάγνωσης, ένα .dict.yaml με γραμμές όπως:
字 ham
典 din2
Η πρώτη στήλη είναι η λέξη, η δεύτερη η ανάγνωσή της· επιπλέον στήλες και γραμμές χωρίς tab αγνοούνται."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Καμία λίστα λεξιλογίου Rime δεν έχει επιλεγεί για τη γλώσσα παραπάνω. Πιέστε αυτό το όνομα για να επιλέξετε μια, ή επιλέξτε μια γλώσσα που έχει λίστα</string>
  <string name="morphe_music_lyrics_rime_dict_add">Πρόσθεση</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Προσθήκη Λεξιλογίου Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Ένα αρχείο .dict.yaml ή ένα zip που περιέχει ένα, με γραμμές όπως 字 ham και 典 din2. Η λίστα ανακτάται όταν την επιλέξετε και πατήσετε Αποθήκευση, και η άδειά της είναι δική σας για να ελέγξετε</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Κωδικός γλώσσας</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Δύο ή τρία γράμματα, όπως στα hak ή wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-es-rES/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Lista de palabras Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"La lista de palabras Rime también necesita UniDict: en el proveedor del diccionario sin conexión, marca \"Caracteres chinos y cantoneses (UniDict)\" y deja que termine la descarga primero. Sin esto, una lista que lee caracteres no proporciona lectura.

Marca las listas que la lista de palabras Rime debe leer, luego toca Guardar para descargarlas. Una lista que agregaste se elimina cuando desmarcas.

Cada lista es tu propia tabla de palabra-a-lectura, un .dict.yaml con líneas como:
字 ham
典 din2
La primera columna es la palabra, la segunda su lectura; se ignoran columnas adicionales y líneas sin tabulación."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">No hay ninguna lista de palabras Rime marcada para el idioma anterior. Toca este nombre para marcar una, o selecciona un idioma que tenga una lista</string>
  <string name="morphe_music_lyrics_rime_dict_add">Añadir</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Añadir una Lista de palabras Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Un archivo .dict.yaml, o un zip que lo contenga, con líneas como 字 ham y 典 din2. La lista se obtiene cuando la marcas y tocas Guardar, y su licencia es tuya para verificar</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Código del idioma</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Dos o tres letras, como en hak o wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-fi-rFI/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime-sananluettelo</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime-sanaluettelo tarvitsee myös UniDictin: valitse Offline-sanakirjapalvelusta \"Kiinan ja kantonesin merkit (UniDict)\" ja odota latauksen valmistumista. Ilman sitä lista, joka näyttää merkkejä, ei tuota ääntämistä.

Valitse ne Rime-sanaluetelot, joita haluat lukea, ja napauta Tallenna ladataksesi ne. Lista, jonka lisäsit, poistetaan kun sen ruksi poistetaan.

Jokainen lista on oma sana-ääntämistaulukkosi, .dict.yaml-tiedosto kuten:
字 ham
典 din2
Ensimmäinen sarake on sana, toinen sen ääntäminen; ylimääräiset sarakkeet ja rivit ilman välilyöntiä jätetään huomiotta."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Yllä olevaa kieltä varten ei ole valittu yhtään Rime-sanaluetteloa. Napauta tätä nimeä valitaksesi luettelon tai valitse kieli, jolla on luettelo</string>
  <string name="morphe_music_lyrics_rime_dict_add">Lisää</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Lisää Rime-sanaluettelo</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">.dict.yaml-tiedosto tai zip, jossa se on, kuten 字 ham ja 典 din2. Lista haetaan kun sen ruksi asetetaan ja napautetaan Tallentaa, ja sen lisenssi on tarkastettavissa sinulla</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Kielikoodi</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Kaksi tai kolme kirjainta, kuten hak tai wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-fil-rPH/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Talaan ng mga salita sa Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Ang Rime Wordlist ay nangangailangan din ng UniDict: sa Offline Dictionary provider, piliin ang \"Chinese and Cantonese characters (UniDict)\" at hayaan itong matapos mag-download muna. Kung wala ito, isang listahan na nagbabasa ng mga karakter ay hindi magbibigay ng pagbasa.

Piliin ang mga listahan na basahin ng Rime Wordlist, pagkatapos ay i-tap ang Save upang ma-download ang mga ito. Ang listahang idinagdag mo ay tinatanggal kapag ini-uncheck mo ito.

Bawat listahan ay iyong sariling table ng salita-pagbasa, isang .dict.yaml na may mga linya tulad ng:
字 ham
典 din2
Ang unang kolunma ay ang salita, ang pangalawa ay ang pagbasa nito; karagdagang mga kolunma at mga lining walang tab ay kinikilala."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Walang listang word sa Rime ang naka-tick para sa wika sa itaas. I-tap ang pangalang ito upang i-tick ang isa, o pumili ng wika na may listang</string>
  <string name="morphe_music_lyrics_rime_dict_add">Idagdag</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Magdagdag ng listang word sa Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Isang .dict.yaml file, o isang zip na naglalaman nito, na may mga linya tulad ng 字 ham at 典 din2. Ang listahang hinahabol kapag pinili mo ito at i-tap ang Save, at ang lisensya nito ay para sa iyo upang suriin</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Code ng wika</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Dalawa o tatlong letra, gaya ng hak o wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-fr-rFR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_jam_seek_to">Aller à %s ?</string>
  <string name="morphe_music_jam_seek_not_ready">La chanson n\'est pas prête pour la navigation</string>
  <string name="morphe_music_lyrics_rime_dict_title">Rime Wordlist</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"La liste de mots Rime nécessite également UniDict : dans le fournisseur de dictionnaire hors ligne, cochez « Caractères chinois et cantonais (UniDict) » et laissez-le terminer son téléchargement. Sans cela, une liste qui lit des caractères ne fournira aucune lecture.

Cochez les listes que la liste de mots Rime doit lire, puis appuyez sur Enregistrer pour les télécharger. Une liste que vous avez ajoutée est supprimée lorsque vous décochez sa case.

Chaque liste est votre propre table mot-à-lecture, un fichier .dict.yaml avec des lignes comme :
字 ham
典 din2
La première colonne est le mot, la deuxième sa lecture ; les colonnes supplémentaires et les lignes sans tabulation sont ignorées."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Aucune liste de mots Rime n\'est cochée pour la langue ci-dessus. Appuyez sur ce nom pour en cocher une, ou choisissez une langue qui possède une liste</string>
  <string name="morphe_music_lyrics_rime_dict_add">Ajouter</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Ajouter une liste Rime Wordlist</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Un fichier .dict.yaml, ou un zip en contenant un, avec des lignes comme 字 ham et 典 din2. La liste est récupérée lorsque vous cochez sa case et appuyez sur Enregistrer, et sa licence est à vérifier par vos soins</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ga-rIE/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Liosta focal Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Teastaíonn UniDict ó liosta focail Rime freisin: sa sholáthraí dictionary log-offlíne, cuir tic ag \"Carachtair Síneacha agus Chantaise (UniDict)\" agus lig dó deireadh a thabhairt do luchtaigh ar dtús. Gan é, ní thugann liosta léi carachtair aon léamh.

Cuir tic ag na liostaí ba mhaith le liosta Rime a léamh, ansin tapáil Sábháil chun iad a lúchtáil. Baintear liosta a chuir tú leis nuair a bhaineann tú tic uaidh.

Is clár focal go léitheoireacht féin thú gach liosta, .dict.yaml le línte mar:
字 ham
典 din2
Is é an chéad cholún an focal, is é an dara ceann a léitheoireacht; déantar colúin breise agus línte gan tab a neamhaird."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Níl aon liosta focal Rime tictha don teanga thuas. Cliceáil ar an ainm seo chun ceann a thicáil nó roghnaigh teanga a bhfuil liosta aici</string>
  <string name="morphe_music_lyrics_rime_dict_add">Cuir leis</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Cuir Liosta focal Rime leis</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Comhad .dict.yaml, nó zip ag coinneáil amháin, le línte mar 字 ham agus 典 din2. Faightear an liosta nuair a chuireann tú tic air agus tapáil Sábháil, agus is cead duit a sheiceáil a cheadúnas</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Cód teanga</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Dá o litreacha nó trí o litreacha, mar shamla hak nó wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-hi-rIN/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">राइम शब्द सूची</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime Wordlist को UniDict की भी आवश्यकता है: Offline Dictionary provider में, \"Chinese and Cantonese characters (UniDict)\" को टिक करें और पहले यह डाउनलोड होना पूरा होने दें। इसके बिना, वर्ण पढ़ने वाला सूची कोई उच्चारण नहीं देती।

उस सूचियों को टिक करें जिन्हें Rime Wordlist को पढ़ना चाहिए, फिर उन्हें डाउनलोड करने के लिए Save पर टैप करें। आपने जो सूची जोड़ी है वह उसे अनटिक करने पर हटा दी जाती है।

प्रत्येक सूची आपके शब्द-से-उच्चारण तालिका होती है, एक .dict.yaml जिसमें लाइन्स ऐसी होती हैं:
字 ham
典 din2
पहली कॉलम शब्द है, दूसरा उसका उच्चारण; अतिरिक्त कॉलम और एक टैब के बिना लाइन नजरअंदाज कर दिए जाते हैं।"</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">ऊपर दी गई भाषा के लिए कोई राइम शब्द सूची टिक नहीं की गई है। एक को टिक करने के लिए इस नाम पर टैप करें, या ऐसी भाषा चुनें जिसके पास सूची हो</string>
  <string name="morphe_music_lyrics_rime_dict_add">जोड़ें</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">राइम शब्द सूची जोड़ें</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">एक .dict.yaml फाइल, या एक zip जिसमें एक होती है, जिसमें 字 ham और 典 din2 जैसी लाइन्स होती हैं। सूची को उस समय प्राप्त किया जाता है जब आप उसे टिक करते हैं और Save पर टैप करते हैं, और इसकी अनुज्ञप्ति आपके पास जांचने के लिए है</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">भाषा कोड</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">दो या तीन अक्षर, जैसे hak या wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-hr-rHR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime rječnik</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Popis riječi Rime također zahtijeva UniDict: u pružatelju usluge offline rječnika, označite \"Kineska kantonska pisma (UniDict)\" i pričekajte da se završi preuzimanje. Bez toga, popis koji čita pisma neće davati izgovor.

Označite popise koje želite da čita Popis riječi Rime, a zatim dodirnite Spremi za preuzimanje. Popis koji ste dodali uklanja se kada ga isključite.

Svaki popis je vaša vlastita tablica od riječi do izgovora, datoteka .dict.yaml s redakima poput:
字 ham
典 din2
Prva stupac je riječ, druga njen izgovor; dodatni stupci i retci bez kartice se zanemaruju."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Nema odabrane Rime liste za gornji jezik. Dodirnite ime da biste odabrali ili odaberite jezik koji ima listu</string>
  <string name="morphe_music_lyrics_rime_dict_add">Dodaj</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Dodaj Rime rječnik</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Datoteka .dict.yaml ili zip koji sadrži jednu, s redakima poput 字 ham i 典 din2. Popis se preuzima kada ga označite i dodirnete Spremi, a njegova licenca je vaša za provjeru</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Kôd jezika</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Dvije ili tri slova, kao hak ili wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-in-rID/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_crossfade_about_how_summary">"Crossfade menumpangkan akhir satu lagu dengan awal lagu berikutnya, menggunakan durasi dan kurva Anda
  <string name="morphe_music_lyrics_rime_dict_title">Daftar Kata Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Daftar Kata Rime juga membutuhkan UniDict: di Penyedia Kamus Offline, centang \"Karakter Tionghoa dan Kantonis (UniDict)\" dan biarkan selesai mengunduh terlebih dahulu. Tanpanya, daftar yang membaca karakter tidak menghasilkan pembacaan.

Centang daftar yang harus dibaca oleh Daftar Kata Rime, lalu ketuk Simpan untuk mengunduhnya. Daftar yang Anda tambahkan akan dihapus saat Anda menghapusnya.

Setiap daftar adalah tabel kata-ke-pembacaan Anda sendiri, file .dict.yaml dengan baris seperti:
字 ham
典 din2
Kolom pertama adalah kata, kolom kedua adalah bacanya; kolom ekstra dan baris tanpa tab diabaikan."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Tidak ada daftar kata Rime yang dicentang untuk bahasa di atas. Ketuk nama ini untuk mencentangnya, atau pilih bahasa yang memiliki daftar</string>
  <string name="morphe_music_lyrics_rime_dict_add">Tambah</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Tambah Daftar Kata Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">File .dict.yaml, atau zip yang berisi satu file, dengan baris seperti 字 ham dan 典 din2. Daftar diambil saat Anda mencentangnya dan mengetuk Simpan, dan lisensinya milik Anda untuk diperiksa</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Kode Bahasa</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-is-rIS/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime orðalisti</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime orðalisti þarf einnig UniDict: í offline orðabókarveitanda, merktu „Kínverskir og kantónskir stafasnið (UniDict)“ og láttu hlaða niður fyrst. Án þess skilar listi sem les stafir engar leesur.

Merktu listar Rime Wordlist ætti að lesa, smelltu síðan á Vista til að hlaða þeim niður. Listi sem þú bættir við er fjarlægður þegar ómerkir það.

Hver listi er þinn eigin orð-til-leesur tafla, .dict.yaml með línum eins og:
Orð ham
Dæmi din2
Fyrsta dálkurinn er orðið, annað Leesure; auka dálkar og línur án tab er hunsað."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Enginn Rime orðalisti er valinn fyrir tungumálið hér að ofan. Smelltu á þetta nafn til að velja einn, eða veldu tungumál sem hefur lista</string>
  <string name="morphe_music_lyrics_rime_dict_add">Bæta við</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Bæta við Rime Orðalista</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">.dict.yaml skrá, eða zip heldur eina, með línum eins og Orð ham og Dæmi din2. Listann er sóttur þegar þú merkist hann og smelltir á Vista, og leyfið hans er þitt að athuga</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Tungmálakóði</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Tvær eða þrír stafir, eins og hak eða wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-it-rIT/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Elenco parole Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"L'elenco di parole Rime richiede anche UniDict: nel provider del dizionario offline, spunta \"Caratteri cinesi e cantonesi (UniDict)\" e lascia prima completare il download. Senza di esso, un elenco che legge i caratteri non restituisce alcuna lettura.

Seleziona gli elenchi che l'elenco di parole Rime dovrebbe leggere, quindi tocca Salva per scaricarli. Un elenco aggiunto viene rimosso quando lo deselezioni.

Ogni elenco è la tua tabella personale parola-lettura, un file .dict.yaml con righe come:
字 ham
典 din2
La prima colonna è la parola, la seconda la sua lettura; le colonne extra e le righe senza tabulazione vengono ignorate."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Nessun elenco di parole Rime è selezionato per la lingua sopra. Tocca questo nome per selezionarne uno, o scegli una lingua che ha un elenco</string>
  <string name="morphe_music_lyrics_rime_dict_add">Aggiungi</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Aggiungi un elenco di parole Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Un file .dict.yaml, o uno zip che ne contiene uno, con righe come 字 ham e 典 din2. L\'elenco viene recuperato quando lo selezioni e tocchi Salva, e la sua licenza è a tua disposizione per la verifica</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Codice lingua</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Due o tre lettere, come in hak o wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-iw-rIL/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">רשימת מילים של Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"רשימת המילים של Rime דורשת גם את UniDict: בספק המילי המקומי, סמן \"תווים סיניים וקנטונזיים (UniDict)\" והמתן לסיום ההורדה. בלעדיו, רשימה הקוראת תווים לא תספק הגייה.

סמן את הרשימות ש-Rime Wordlist צריך לקרוא, ואז הקש על שמור להורדתן. רשימה שהוספת תוסר כאשר תבטל את הסימון שלה.

כל רשימה היא טבלה משלך למילת-הגייה, קובץ .dict.yaml עם שורות כמו:
字 ham
典 din2
העמודה הראשונה היא המילה, השנייה ההגייה שלה; עמודות נוספות ושורות ללא טאב מוזנחים."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">לא מסומנת אף רשימת מילים של Rime לשפה למעלה. הקש על השם כדי לסמן אחת, או בחר שפה שיש לה רשימה</string>
  <string name="morphe_music_lyrics_rime_dict_add">הוסף</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">הוסף רשימת מילים של Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">קובץ .dict.yaml, או ארכיון zip המחזיק בו, עם שורות כמו 字 ham ו-典 din2. הרשימה נשלפת כאשר מסמנים אותה ולוחצים על שמור, והרישיון שלה בידיך לבדוק</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">קוד שפה</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">שתי או שלוש אותיות, כמו ב-hak או wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ko-rKR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lastfm_love_on_like_summary">YouTube Music에서 트랙에 좋아요를 탭하면 Last.fm에서도 자동으로 좋아요가 표시됩니다 (좋아요를 해제하거나 싫어요를 탭하면 자동으로 좋아요가 해제됩니다)</string>
  <string name="morphe_music_lyrics_rime_dict_title">Rime 단어 목록</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime 단어 목록에도 UniDict가 필요합니다: 오프라인 사전 제공자에서 \"중국어 및 광둥어 문자(UniDict)\"를 선택하고 먼저 다운로드가 완료되도록 하세요. 그렇지 않으면, 문자 읽기 목록은 아무것도 읽지 않습니다.

Rime 단어 목록이 읽어야 할 목록을 선택한 후 저장을 탭하여 다운로드합니다. 추가한 목록은 선택을 해제하면 제거됩니다.

각 목록은 자신만의 단어-읽기 표이며, .dict.yaml 파일은 다음과 같은 줄들로 구성됩니다:
字 ham
典 din2
첫 번째 열은 단어이고 두 번째 열은 해당 읽음입니다; 탭 없는 추가 열과 줄은 무시됩니다."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">위에 선택한 언어에 대해 Rime 단어 목록이 선택되지 않았습니다. 이 이름을 탭하여 목록을 선택하거나 목록이 있는 다른 언어를 선택하세요</string>
  <string name="morphe_music_lyrics_rime_dict_add">추가</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Rime 단어 목록 추가</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">字 ham과 典 din2와 같은 줄이 있는 .dict.yaml 파일이나, 이를 포함하는 zip 파일입니다. 목록을 선택하고 저장을 탭하면 목록이 가져오며, 라이선스는 사용자가 확인할 수 있습니다.</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">언어 코드</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-nb-rNO/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime-ordliste</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime-ordlisten trenger også UniDict: I Offline Dictionary-provideren, merk av \"Kinesiske og kantonesiske tegn (UniDict)\" og la den være ferdig med å laste ned først. Uten det gir en liste som leser tegn ingen utlesning.

Merk av listene Rime-ordlisten skal lese, trykk deretter Lagre for å laste dem ned. En liste du har lagt til, fjernes når du fjerner merket fra den.

Hver liste er ditt eget ord-til-utlestable, en .dict.yaml-fil med linjer slik som:
字 ham
典 din2
Første kolonne er ordet, andre kolonne er utledningen; ekstra kolonner og linjer uten tabulatortegn blir ignorert."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Ingen Rime-ordliste er merket for språket ovenfor. Trykk på navnet for å merke én, eller velg et språk som har en liste</string>
  <string name="morphe_music_lyrics_rime_dict_add">Legg til</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Legg til en Rime-ordliste</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">En .dict.yaml-fil, eller et zip-arkiv som inneholder en slik fil, med linjer slik som 字 ham og 典 din2. Listen hentes når du markerer den og trykker Lagre, og lisensen er din å sjekke</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Språkkode</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">To eller tre bokstaver, som hak eller wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-nl-rNL/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime-woordlijst</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"De Rime-wordlijst heeft ook UniDict nodig: vink in de Offline Dictionary-provider \"Chinese en Kantonese karakters (UniDict)\" aan en laat het eerst klaar downloaden. Zonder dit levert een lijst die karakters uitleest geen uitspraak.

Vink de lijsten aan die de Rime Wordlist moet uitlezen, en tik dan op Opslaan om ze te downloaden. Een lijst die je hebt toegevoegd, wordt verwijderd als je hem uitvinkt.

Elke lijst is jouw eigen tabel van woord naar uitspraak, een .dict.yaml met regels zoals:
字 ham
典 din2
De eerste kolom is het woord, de tweede de uitspraak; extra kolommen en regels zonder tabblad worden genegeerd."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">No Rime word list is ticked for the language above. Tap this name to tick one, or pick a language that has a list</string>
  <string name="morphe_music_lyrics_rime_dict_add">Toevoegen</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Rime-woordlijst toevoegen</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Een .dict.yaml-bestand, of een zip die er één bevat, met regels zoals 字 ham en 典 din2. De lijst wordt opgehaald zodra je hem aanvinkt en op Opslaan tikt, en de licentie kun je zelf controleren</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Taalcode</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Twee of drie letters, bijvoorbeeld hak of wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-pl-rPL/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Lista słów Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Słownik Rime wymaga również UniDict: w usłudze Offline Dictionary zaznacz opcję „Chinese and Cantonese characters (UniDict)” i poczekaj na zakończenie pobierania. Bez tej listy lista zawierająca znaki nie zwraca czytań.

Zaznacz listy, które słownik Rime ma odczytywać, a następnie dotknij zapisz, aby je pobrać. Lista, którą dodałeś, zostanie usunięta po odznaczeniu jej.

Każda lista to twoja własna tabela słów do wyrażeń czytań, plik .dict.yaml z liniami takimi jak:
字 ham
典 din2
Pierwsza kolumna to słowo, druga to jego wyrażenie; dodatkowe kolumny oraz linie bez znaku tabulacji są ignorowane."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Brak zaznaczonej listy słów Rime dla powyższego języka. Dotknij tej nazwy, aby zaznaczyć jedną, lub wybierz język, który posiada listę</string>
  <string name="morphe_music_lyrics_rime_dict_add">Dodaj</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Dodaj listę słów Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Plik .dict.yaml lub archiwum zip zawierający taki plik, z liniami takimi jak 字 ham i 典 din2. Lista jest pobierana po jej zaznaczeniu i kliknięciu zapisz, a licencja jest dostępna do sprawdzenia</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Kod języka</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Dwie lub trzy litery, np. hak lub wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-pt-rBR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Lista de Palavras Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"A lista de palavras do Rime também precisa do UniDict: no provedor de dicionário offline, marque \"Chinese and Cantonese characters (UniDict)\" e espere o download terminar. Sem ele, uma lista que lê caracteres não fornece leitura.

Marque as listas que a lista de palavras do Rime deve ler, toque em Salvar para baixá-las. Uma lista adicionada é removida quando você desmarca.

Cada lista é sua própria tabela de palavra-para-leitura, um .dict.yaml com linhas como:
字 ham
典 din2
A primeira coluna é a palavra, a segunda sua leitura; colunas extras e linhas sem tabulação são ignoradas."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Nenhuma lista de palavras Rime está marcada para o idioma acima. Toque neste nome para marcar uma, ou escolha um idioma que tenha uma lista</string>
  <string name="morphe_music_lyrics_rime_dict_add">Adicionar</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Adicionar uma Lista de Palavras Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Um arquivo .dict.yaml, ou um zip contendo um, com linhas como 字 ham e 典 din2. A lista é buscada quando você a marca e toca em Salvar, e a licença é sua para verificar</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Código do idioma</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Duas ou três letras, como em hak ou wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-pt-rPT/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Lista de Palavras Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"A lista de palavras Rime também precisa do UniDict: no Provedor de Dicionário Offline, marque \"Caracteres chineses e cantoneses (UniDict)\" e aguarde concluir o download primeiro. Sem ele, uma lista que lê caracteres não fornece leitura.

Marque as listas que a lista de palavras Rime deve ler, em seguida toque em Salvar para baixá-las. Uma lista que você adicionou é removida quando você desmarca ela.

Cada lista é sua própria tabela palavra-para-leitura, um .dict.yaml com linhas como:
字 ham
典 din2
A primeira coluna é a palavra, a segunda sua leitura; colunas extras e linhas sem tabulação são ignoradas."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Nenhuma lista de palavras Rime está marcada para o idioma acima. Toque neste nome para marcar uma, ou escolha um idioma que tenha uma lista</string>
  <string name="morphe_music_lyrics_rime_dict_add">Adicionar</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Adicionar uma Lista de Palavras Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Um arquivo .dict.yaml, ou um zip contendo um, com linhas como 字 ham e 典 din2. A lista é buscada quando você marca ela e toca em Salvar, e sua licença é sua para verificar</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Código do idioma</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Duas ou três letras, como em hak ou wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-sk-rSK/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Zoznam slov Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Zoznam slov Rime vyžaduje aj UniDict: v poskytovateľovi offline slovníkov začiarknite \"Čínske a kantonské znaky (UniDict)\" a nechajte ho najprv dokončiť sťahovanie. Bez neho zoznam, ktorý načíta znaky, neposkytne žiadnu výslovnosť.

Začiarknite zoznamy, ktoré by mal Rime Wordlist čítať, potom kliknite na Uložiť a stiahnite ich. Zoznam, ktorý ste pridali, sa odstráni, keď ho odčiarknete.

Každý zoznam je vaša vlastná tabuľka slovo-výslovnosť, .dict.yaml s riadkami ako:
字 ham
典 din2
Prvý stĺpec je slovo, druhý jeho výslovnosť; extra stĺpce a riadky bez tabulátora sú ignorované."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Pre uvedený jazyk nie je začiarknutý žiadny zoznam slov Rime. Klepnutím na tento názov začiarknite jeden alebo vyberte jazyk, ktorý má zoznam</string>
  <string name="morphe_music_lyrics_rime_dict_add">Pridať</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Pridať zoznam slov Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Súbor .dict.yaml alebo zip obsahujúci jeden, s riadkami ako 字 ham a 典 din2. Zoznam sa načíta, keď ho začiarknete a kliknete na Uložiť, a jeho licencia je vaša na skontrolovanie</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Kód jazyka</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Dve až tri písmená, napríklad hak alebo wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-sl-rSI/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Seznam besed Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime Wordlist prav tako potrebuje UniDict: v ponudniku zbirke besed Off-line preverite polje \"Kitajska in kantonska znaka (UniDict)\" in počakajte, da se prenese do konca. Brez tega seznam, ki bere znake, ne bo zagotavljal branja.

Označite sezname, ki naj jih bere Rime Wordlist, nato pa pritisnite Shrani, da jih prenesete. Seznam, ki ga dodate, je odstranjen, če ga odznačite.

Vsak seznam je vaša lastna tabela beseda-na-branje, .dict.yaml z vrsticami, kot so:
字 ham
典 din2
Prvi stolpec je beseda, drugi njen zapis; dodatni stolpci in vrstice brez tabulatorja se prezrejo."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Zgornjemu jeziku ni označen noben seznam besed Rime. Pritisnite to ime, da označite enega, ali izberite jezik, ki ima seznam</string>
  <string name="morphe_music_lyrics_rime_dict_add">Dodaj</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Dodaj seznam besed Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Datoteka .dict.yaml ali zip, ki jo vsebuje, z vrsticami, kot so 字 ham in 典 din2. Seznam se pridobi, ko ga označite in pritisnete Shrani, njegova licenčna pogodba pa je na voljo za preverjanje.</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Koda jezika</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Dve ali tri črke, kot sta hak ali wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-sv-rSE/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Rime-ordlista</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime Wordlist kräver också UniDict: markera \"Kinesiska och kantonesiska tecken (UniDict)\" i offline-ordbokspartiet och låt det vara klart att ladda ner först. Utan det ger en lista som läser in läsföring inget läsförande.

Markera de listor som Rime Wordlist ska läsa in, tryck sedan Spara för att ladda ner dem. En lista du lagt till tas bort när du avmarkerar den.

Varje lista är ditt eget ord-till-läsning-tabell, en .dict.yaml med rader som:
字 ham
典 din2
Den första kolumnen är ordet, den andra dess läsning; extra kolumner och rader utan tabulering ignoreras."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Ingen Rime-ordlista är markerad för språket ovan. Tryck på detta namn för att markera en, eller välj ett språk som har en lista</string>
  <string name="morphe_music_lyrics_rime_dict_add">Lägg till</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Lägg till en Rime-ordlista</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">En .dict.yaml-fil, eller en zip med en sådan innehållande rader som 字 ham och 典 din2. Listan hämtas när du markerar den och trycker Spara, och licensen äger du att kontrollera</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Språkkod</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Två eller tre bokstäver, som t.ex. hak eller wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-th-rTH/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_hide_flyout_menu_components_screen_summary">เลือกส่วนประกอบที่จะแสดงในเมนูแบบเลื่อนออกของเครื่องเล่นและคิว</string>
  <string name="morphe_music_lyrics_rime_dict_title">รายการคำ Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime Wordlist ยังต้องการ UniDict: ในผู้ให้บริการพจนานุกรมแบบออฟไลน์ ให้ติ๊ก \"ตัวอักษรจีนและภาษาแคะ (UniDict)\" และรอให้ดาวน์โหลดเสร็จสิ้นก่อน หากไม่มีรายการนี้ รายการที่อ่านตัวอักษรจะไม่สามารถแปลเสียงได้

ติ๊กเลือกรายการที่ Rime Wordlist ควรอ่าน แล้วแตะบันทึกเพื่อดาวน์โหลด รายการที่คุณเพิ่มจะถูกนำออกเมื่อคุณยกเลิกการติ๊กมัน

แต่ละรายการคือตารางจากคำไปจนถึงการอ่านของคุณเอง ซึ่งเป็นไฟล์ .dict.yaml ที่มีบรรทัดเช่น:
字 ham
典 din2
คอลัมน์แรกคือคำ คอลัมน์ที่สองคือการอ่านของมัน; คอลัมน์เพิ่มเติมและบรรทัดที่ไม่มีแท็บจะถูกมองข้าม"</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">ไม่มีรายการคำ Rime สำหรับภาษาข้างต้นที่ทำเครื่องหมายไว้ แตะชื่อนี้เพื่อทำเครื่องหมายเลือกหนึ่งรายการ หรือเลือกภาษาที่มีรายการ</string>
  <string name="morphe_music_lyrics_rime_dict_add">เพิ่ม</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">เพิ่มรายการคำ Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">ไฟล์ .dict.yaml หรือ zip ที่ครอบไฟล์ดังกล่าว โดยมีบรรทัดเช่น 字 ham และ 典 din2 รายการนี้จะถูกดึงเมื่อบางคนติ๊กเลือกและแตะบันทึก และใบอนุญาตของรายการนี้เป็นสิทธิ์ของคุณที่จะตรวจสอบ</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">รหัสภาษา</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-tr-rTR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_android_auto_last_played">Son çalınan</string>
  <string name="morphe_music_lyrics_rime_dict_title">Rime Kelime Listesi</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Rime Kelime Listesi için de UniDict gerekir: Çevrimdışı Sözlük sağlayıcısında \"Çince ve Kantonca karakterler (UniDict)\" kutucuğunu işaretleyin ve indirmenin bitmesini bekleyin. Bu olmadan, karakterleri okuyan bir liste hiçbir ses vermez.

Rime Kelime Listesi'nin okuması gereken listeleri işaretleyin, sonra onlar için indirmek üzere Kaydet'e dokunun. Eklendiğiniz bir liste, işaretini kaldırdığınızda kaldırılır.

Her liste size özel kelime-okuma tablonuzdur, .dict.yaml dosyasında şu satırlar gibi:
字 ham
典 din2
İlk sütun kelimedir, ikinci sütunun okunuşudur; ek sütunlar ve sekme içermeyen satırlar dikkate alınmaz."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Yukarıdaki dil için seçilmiş hiç Rime kelime listesi yok. Bir tane seçmek için bu isme dokunun veya listesi olan başka bir dil seçin</string>
  <string name="morphe_music_lyrics_rime_dict_add">Ekle</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Rime Kelime Listesi Ekle</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Söz dizimi gibi 字 ham ve 典 din2 satırları içeren bir .dict.yaml dosyası veya bunu içeren bir zip. Liste işaretlediğinizde ve Kaydet\'e tıkladığınızda çekilir ve lisansı sizin kontrolünüze sunulur</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Dil kodu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-uk-rUA/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_external_downloader_menu_title">Використовувати зовнішній завантажувач для меню \"Завантажити\"</string>
  <string name="morphe_external_downloader_menu_summary">Пункт \"Завантажити\" в меню натомість відкриває ваш зовнішній завантажувач</string>
  <string name="morphe_music_lyrics_rime_dict_title">Список слів Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Для Rime Wordlist також потрібен UniDict: у постачальнику офлайн-словника позначте \"Китайські кантонські символи (UniDict)\" і дайте йому завантажитися. Без цього список із розпізнаванням символів не видасть читання.

Позначте списки, які має читати Rime Wordlist, потім натисніть Зберегти для їхнього завантаження. Список, який ви додали, видаляється, коли знімаєте позначку.

Кожен список — це ваша власна таблиця зіставлення слів із читанням, файл .dict.yaml з рядками виду:
字 ham
典 din2
Перший стовпець — це слово, другий — його читання; додаткові стовпці та рядки без табуляції ігноруються."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Для мови вище не позначено жодного списку слів Rime. Натисніть на це ім\'я, щоб позначити один, або оберіть мову, для якої є список</string>
  <string name="morphe_music_lyrics_rime_dict_add">Додати</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Додати список слів Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Файл .dict.yaml або архів zip, що містить один такий файл, з рядками виду 字 ham та 典 din2. Список завантажується, коли ви позначаєте його та натискаєте Зберегти, а вашу ліцензію можна перевірити</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-vi-rVN/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_lyrics_rime_dict_title">Danh sách từ Rime</string>
  <string name="morphe_music_lyrics_rime_dict_empty">"Từ điển Rime cũng cần UniDict: trong nhà cung cấp Từ điển ngoại tuyến, chọn \"Ký tự tiếng Trung và tiếng Quảng Đông (UniDict)\" và để nó hoàn tất việc tải xuống trước. Nếu không có nó, một danh sách chỉ đọc ký tự sẽ không cho kết quả đọc.

Chọn các danh sách mà Từ điển Rime nên đọc, sau đó nhấn Lưu để tải xuống chúng. Một danh sách bạn đã thêm sẽ bị xóa khi bạn bỏ chọn nó.

Mỗi danh sách là bảng từ-nghe của riêng bạn, một tệp .dict.yaml với các dòng như:
字 ham
典 din2
Cột đầu tiên là từ, cột thứ hai là cách đọc; các cột và dòng bổ sung không có tab sẽ bị bỏ qua."</string>
  <string name="morphe_music_lyrics_rime_dict_no_table">Không có danh sách từ Rime nào được chọn cho ngôn ngữ ở trên. Nhấn tên này để chọn một danh sách, hoặc chọn một ngôn ngữ có danh sách</string>
  <string name="morphe_music_lyrics_rime_dict_add">Thêm</string>
  <string name="morphe_music_lyrics_rime_dict_add_title">Thêm Danh sách từ Rime</string>
  <string name="morphe_music_lyrics_rime_dict_add_hint">Tệp .dict.yaml, hoặc một tệp zip chứa nó, với các dòng như 字 ham và 典 din2. Danh sách được lấy khi bạn chọn nó và nhấn Lưu, và giấy phép của nó thuộc quyền kiểm tra của bạn</string>
  <string name="morphe_music_lyrics_rime_dict_field_code">Mã ngôn ngữ</string>
  <string name="morphe_music_lyrics_rime_dict_field_code_hint">Hai hoặc ba chữ cái, như hak hoặc wuu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values/music/strings.xml — new non-allowlisted URL or IP</summary>

```

    <string name="morphe_music_lyrics_rime_dict_title">Rime Wordlist</string>
    <string name="morphe_music_lyrics_rime_dict_empty">"Rime Wordlist also needs UniDict: in the Offline Dictionary provider, tick \"Chinese and Cantonese characters (UniDict)\" and let it finish downloading first. Without it, a list that reads characters yields no reading.

Tick the lists Rime Wordlist should read, then tap Save to download them. A list you added is removed when you untick it.

Each list is your own word-to-reading table, a .dict.yaml with lines like:
字 ham
典 din2
The first column is the word, the second its reading; extra columns and lines without a tab are ignored."</string>
    <string name="morphe_music_lyrics_rime_dict_no_table">No Rime word list is ticked for the language above. Tap this name to tick one, or pick a language that has a list</string>
    <string name="morphe_music_lyrics_rime_dict_add">Add</string>
    <string name="morphe_music_lyrics_rime_dict_add_title">Add a Rime Wordlist</string>
    <string name="morphe_music_lyrics_rime_dict_add_hint">A .dict.yaml file, or a zip holding one, with lines like 字 ham and 典 din2. The list is fetched when you tick it and tap Save, and its licence is yours to check</string>
    <string name="morphe_music_lyrics_rime_dict_field_code">Language code</string>
```

</details>

<details>
<summary>[info] patches/src/main/resources/custom-branding/raw/morphe_startup_animation_glow_1_dark.riv — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/custom-branding/raw/morphe_startup_animation_glow_1_light.riv — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/custom-branding/raw/morphe_startup_animation_glow_1_play_dark.riv — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/custom-branding/raw/morphe_startup_animation_glow_1_play_light.riv — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/custom-branding/raw/morphe_startup_animation_glow_2_dark.riv — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/custom-branding/raw/morphe_startup_animation_glow_2_light.riv — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/custom-branding/raw/morphe_startup_animation_glow_2_play_dark.riv — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/custom-branding/raw/morphe_startup_animation_glow_2_play_light.riv — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/GeniusProvider.java: previously seen host https://genius.com (2026-10-22) with new HttpURLConnection</summary>

LLM review: suspicious (0.4, exfiltration): No actual patch diff or code lines were provided, only a static-analysis summary referencing a prior report and a new HttpURLConnection to https://genius.com in GeniusProvider.java. Without the patched lines, I cannot confirm exfiltration behavior or identify exact offending lines, so the threshold for malicious is not met. The flag warrants manual review.

```
(see report of 2026-10-22 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/KuGouProvider.java: previously seen host https://www.kugou.com (2026-10-22) with new HttpURLConnection, loadUrl, openConnection</summary>

LLM review: suspicious (0.5, exfiltration): The excerpt contains no actual code diff, only a static-analysis reason flagging KuGouProvider.java for new HttpURLConnection/loadUrl/openConnection usage to kugou.com described as cross-window exfil. Without the changed code or exact line numbers, I cannot verify malicious exfiltration versus legitimate lyrics fetching from a known music service. Per the rules, when unsure, choose suspicious rather than malicious.

```
(see report of 2026-10-22 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/UnisonProvider.java: previously seen host https://unison.boidu.dev (2026-10-22) with new openConnection</summary>

LLM review: suspicious (0.6, exfiltration): The static-analysis reason flags potential exfiltration across windows in UnisonProvider.java involving a new openConnection to a previously seen host (https://unison.boidu.dev). However, the provided excerpt contains no actual code diff or line-level changes, so I cannot identify exact offending lines or confirm malicious behavior with confidence >= 0.85. Per policy, when unsure, the verdict is suspicious rather than malicious.

```
(see report of 2026-10-22 for the earlier half)
```

</details>


__
