# MorpheApp/morphe-patches — 2026-10-22

Commit: f3acc10e2691ffc4db29c6a6a651ee61fb54c047 | Status: RED | crit:0 high:3 med:17

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
<summary>[high] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/derive/QuickLRCClient.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.derive;

import androidx.annotation.Nullable;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/GeniusProvider.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/2625
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.requests;

import androidx.annotation.Nullable;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/KuGouProvider.java — new non-allowlisted URL or IP</summary>

```
        JSONArray candidates = searchCandidates(hash, true);
        String sourceUrl = "https://www.kugou.com/song/" + id + ".html";
        Lyrics lyrics = fetchFromCandidate(candidate, sourceUrl, true);
        if (lyrics == null) {
        return FetchResult.of(lyrics, songInfo.title(), songInfo.artist(),
                songInfo.durationSec(), track);
        JSONArray candidates = searchCandidates(hash, false);
                Lyrics lyrics = fetchFromCandidate(candidate, sourceUrl, false);
    /**
     * The candidates a hash search answers with, or null when the search itself failed. Only the
     * single-candidate path reports that, for the reason {@link #fetchFromCandidate} gives.
     */
    @Nullable
    private JSONArray searchCandidates(String hash, boolean logFailure) throws Exception {
        String searchUrl = SEARCH_URL + LyricsRequests.encode(hash);
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LyricsRequests.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.model.LyricsFilterDefaults;
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

    public static String translationLanguage() {
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/RMMProvider.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/2625
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
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/UnisonProvider.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.model.LyricsMerge;
            final JSONObject submitter = data.optJSONObject("submitter");
            final String submitterName = submitter != null
                    ? LyricsRequests.optString(submitter, "displayName")
                    : null;
            return parseLyrics(format, lyrics, videoId, submitterName);
        return "https://unison.boidu.dev/song/" + videoId;
    private Lyrics parseLyrics(String format, String lyrics, String videoId,
                               @Nullable String submitter) {
                return withSubmitter(
                        TTMLParser.ttmlToLyrics(lyrics, name(), sourceUrl(videoId)), submitter);
                return withSubmitter(new Lyrics(result.lines, name(), true,
                        null, null, null,
                        lyrics, "lrc", sourceUrl(videoId)), submitter);
                return withSubmitter(new Lyrics(plain, name(), false,
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/romanizers/CantoneseDictStore.java — new non-allowlisted URL or IP</summary>

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
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
```

</details>

<details>
<summary>[high] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/romanizers/JapaneseDictStore.java — typosquat of allowlisted domain: https://sudachi.s3.ap-northeast-1.amazonaws.com (~morphe), https://sudachi.s3.ap-northeast-1.amazonaws.com (~morphe)</summary>

LLM review: suspicious (0.72, supply-chain): The static analysis flags a possible typosquat of an allowlisted Sudachi S3 domain in JapaneseDictStore.java. The provided excerpt does not show the actual URL or download logic, so the exact offending line cannot be fully verified. The finding indicates a potential supply-chain risk, but it is not confirmed as malicious from this excerpt alone.

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
import java.io.File;
import java.io.IOException;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/romanizers/PinyinDictStore.java — new non-allowlisted URL or IP</summary>

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
import app.morphe.extension.music.patches.lyrics.derive.OpenAIClient;
import app.morphe.extension.music.patches.lyrics.model.LyricsFilterDefaults;
import app.morphe.extension.shared.patches.DownloadMode;
            "YTMusic,-Captions,Apple,LRCLIB,QQ,NetEase,KuGou,Luna,-RMM,-PetitLyrics,-bLyrics,-BiniLyrics,-Unison,-SimpMusic,-AMLL,-LunaBeat,-Lyricify,-Musixmatch,-Spotify,-Deezer,-Genius,";
    public static final BooleanSetting LYRICS_SHOW_SECTION = new BooleanSetting("morphe_music_lyrics_show_section", FALSE, false, parent(LYRICS_ENABLED));
    public static final StringSetting LYRICS_ROMANIZE_LANGUAGE = new StringSetting("morphe_music_lyrics_romanize_language", "DEFAULT", false, parentsAll(parent(LYRICS_ENABLED), parent(LYRICS_SHOW_ROMANIZE_BUTTON)));
    public static final StringSetting LYRICS_TRANSLATION_LANGUAGE = new StringSetting("morphe_music_lyrics_translation_language", "DEFAULT", false, parentsAll(parent(LYRICS_ENABLED), parent(LYRICS_SHOW_TRANSLATE_BUTTON)));
    public static final BooleanSetting LYRICS_USE_AI_TRANSLATION = new BooleanSetting("morphe_music_lyrics_use_ai_translation", FALSE, false, parentsAll(parent(LYRICS_ENABLED), parent(LYRICS_SHOW_TRANSLATE_BUTTON)));
    public static final BooleanSetting LYRICS_USE_AI_ROMANIZATION = new BooleanSetting("morphe_music_lyrics_use_ai_romanization", FALSE, false, parentsAll(parent(LYRICS_ENABLED), parent(LYRICS_SHOW_ROMANIZE_BUTTON)));
    /**
     * Romanizes on the device when the provider, an OpenAI-compatible endpoint and Google
     * Translate have all failed. Off by default: it needs the reading dictionaries, and a user
     * who never hits an online failure should not pay for them.
     */
    public static final BooleanSetting LYRICS_LOCAL_ROMANIZATION = new BooleanSetting("morphe_music_lyrics_local_romanization", FALSE, false, parentsAll(parent(LYRICS_ENABLED), parent(LYRICS_SHOW_ROMANIZE_BUTTON)));
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/settings/preference/LyricsOrderedListPreference.java — new non-allowlisted URL or IP</summary>

```
import android.content.Intent;
import android.net.Uri;
            "RMM", "PetitLyrics", "bLyrics", "BiniLyrics", "Unison", "SimpMusic", "AMLL",
            "LunaBeat", "Lyricify", "Apple", "Musixmatch", "Spotify", "Deezer", "Genius");
        PROVIDER_LABELS.put("RMM", "RMM Revival");
        PROVIDER_LABELS.put("Genius", "Genius");
    }

    private static final Map<String, String> PROVIDER_URLS = new HashMap<>();
    static {
        PROVIDER_URLS.put("LRCLIB", "https://lrclib.net/");
        PROVIDER_URLS.put("QQ", "https://y.qq.com/");
        PROVIDER_URLS.put("NetEase", "https://music.163.com/");
        PROVIDER_URLS.put("KuGou", "https://www.kugou.com/");
        PROVIDER_URLS.put("Luna", "https://www.qishui.com/");
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/settings/preference/LyricsTranscribeKeyPreference.java — new non-allowlisted URL or IP</summary>

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
<summary>[high] extensions/reddit/src/main/java/app/morphe/extension/reddit/patches/DownloadLocationPatch.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.6, exfiltration): The static analysis flags sensitive source reaching a network sink in this patch. The excerpt shows Android download-related components such as DownloadManager, ContentResolver, ContentValues, and Uri, but the full data flow is not visible, so the potential behavior cannot be confirmed as benign from the provided diff alone.

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3870
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.reddit.patches;

import static app.morphe.extension.shared.StringRef.str;

import android.app.DownloadManager;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.net.Uri;
```

</details>

<details>
<summary>[medium] extensions/reddit/src/main/java/app/morphe/extension/reddit/patches/RedgifsAudioPatch.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3714
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.reddit.patches;

import android.net.Uri;
import android.util.Base64;

import androidx.annotation.Nullable;

import com.reddit.domain.model.Link;
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/OpenSystemShareSheetPatch.java — new non-allowlisted URL or IP</summary>

```
import android.net.Uri;
import android.util.Base64;

import androidx.annotation.Nullable;
import java.util.List;
import java.util.Set;
import java.util.regex.Pattern;
import app.morphe.extension.youtube.patches.utils.ProtoNode;
    private static final int SHARE_ENDPOINT_ENTITY_FIELD = 1;

    // Share entity fields, from observed values.
    private static final int ENTITY_VIDEO_ID_FIELD = 1;
    private static final int ENTITY_PLAYLIST_ID_FIELD = 2;
    private static final int ENTITY_CHANNEL_ID_FIELD = 3;
    private static final int ENTITY_POST_ID_FIELD = 6;
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/utils/QueueThumbnails.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3582
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches.utils;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.LruCache;

import androidx.annotation.Nullable;

```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/voiceovertranslation/EdgeTtsConfig.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3840
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches.voiceovertranslation;

/** Connection details shared by Edge voice discovery and speech synthesis. */
final class EdgeTtsConfig {
    static final String HOST = "speech.platform.bing.com";
    static final String TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
    static final String SEC_MS_GEC_VERSION = "2-143.0.3650.75";
    static final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/voiceovertranslation/EdgeTtsVoiceRepository.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3840
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches.voiceovertranslation;

import android.content.Context;
import android.content.SharedPreferences;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.IOException;
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/series/ThumbnailLoader.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3114
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.series;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.LruCache;
import android.widget.ImageView;

import androidx.annotation.Nullable;
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-th-rTH/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <!-- misc.androidauto.androidAutoPatch -->
  <string name="morphe_music_android_auto_last_played">เล่นล่าสุด</string>
  <string name="morphe_music_android_auto_subscriptions">การติดตาม</string>
  <string name="morphe_music_android_auto_videos">วิดีโอ</string>
  <string name="morphe_music_android_auto_other_results">ผลลัพธ์อื่นๆ</string>
  <string name="morphe_music_android_auto_uploaded_songs">เพลงที่อัปโหลด</string>
  <string name="morphe_music_android_auto_uploaded_albums">อัลบั้มที่อัปโหลด</string>
  <string name="morphe_music_android_auto_uploaded_artists">ศิลปินที่อัปโหลด</string>
  <string name="morphe_music_jam_invalid_invite">ป้อนรหัสแปดตัวอักษรหรือวางคำเชิญ</string>
  <string name="morphe_music_jam_invite_message">สแกนเพื่อเข้าร่วมและแก้ไขคิวนี้ การจบ Jam จะยกเลิกคำเชิญ</string>
  <string name="morphe_music_jam_one_connected">เชื่อมต่อแล้ว %s คน</string>
  <string name="morphe_music_jam_many_connected">เชื่อมต่อแล้ว %s คน</string>
  <string name="morphe_music_jam_code_expires">ป้อนรหัสนี้บนอุปกรณ์ใกล้เคียง Wi-Fi Aware สามารถใช้งานได้ข้ามเครือข่าย LAN ที่แยกจากกัน หากรองรับ หมดอายุในอีก %s นาที</string>
  <string name="morphe_music_jam_participant_help">โฮสต์จะเปิดเพลง เพิ่ม ย้าย หรือลบเพลงได้โดยตรงในคิวของ YouTube Music</string>
  <string name="morphe_music_jam_joining_help">โปรดวางอุปกรณ์ทั้งสองไว้ใกล้ ๆ กัน คุณสามารถยกเลิกได้ในระหว่างที่เรากำลังหาโฮสต์อยู่</string>
```

</details>


__
