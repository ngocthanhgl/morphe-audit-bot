# MorpheApp/morphe-patches — 2026-11-10

Commit: 44031c561ea048c8f196877f30a49c13bfd6afb6 | Status: RED | crit:0 high:3 med:6

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/parsers/TTMLGenerator.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4439
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.parsers;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/parsers/TTMLParser.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.utils.TextTrim;
    private static final Pattern TIME_SMPTE = Pattern.compile(
            "^(\\d+):(\\d+):(\\d+):(\\d+(?:\\.\\d+)?)$");
    /** The frame rate SMPTE timecode counts in when the document does not state one. */
    private static final int DEFAULT_FRAME_RATE = 30;
    private static final String INDEFINITE = "indefinite";

    private static final String NS_MORPHE = "http://morphe.app/lyrics";
        List<String> morpheCredits = new ArrayList<>();
        String desc = null;
        String morpheSource = null;
        String morpheSourceUrl = null;
                        } else {
                            // Morphe namespace metadata (non-standard)
                            if (NS_MORPHE.equals(p.getNamespace())) {
```

</details>

<details>
<summary>[medium] extensions/reddit/src/main/java/app/morphe/extension/reddit/patches/HighQualityAvatarsPatch.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4477
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.reddit.patches;

import androidx.annotation.Nullable;

import app.morphe.extension.reddit.settings.Settings;
import app.morphe.extension.shared.Logger;

@SuppressWarnings("unused")
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/settings/preference/about/LicensesDialog.java — new non-allowlisted URL or IP</summary>

```
 * Lists the software bundled with the patches or downloaded by them. Picking one opens its notices in
    // Licenses for all software bundled with Morphe MPP Patches, or downloaded by a patch.
            new License("CLDR", List.of(LicenseContent.CLDR_NOTICE, LicenseContent.UNICODE_3)),
            new License("pinyin-pro-data", LicenseContent.PINYIN_PRO_DATA),
            new License("Protocol Buffers", LicenseContent.PROTOCOL_BUFFERS),
            new License("rime-cantonese", LicenseContent.RIME_CANTONESE),
            new License("SudachiDict", List.of(LicenseContent.SUDACHI_NOTICE, LicenseContent.APACHE_2)),
            new License("Unicode Han Database", List.of(LicenseContent.UNIHAN_NOTICE, LicenseContent.UNICODE_3))
    record LicenseContent(String title, String content) {
        static final LicenseContent MORPHE_NOTICE = new LicenseContent("NOTICE", """
                Morphe NOTICE
                
                https://github.com/MorpheApp/morphe-patches
                
                =============
```

</details>

<details>
<summary>[high] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/onthego/OnTheGoSheet.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4511
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches.onthego;

import static app.morphe.extension.shared.StringRef.str;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.res.ColorStateList;
```

</details>

<details>
<summary>[medium] extensions/youtube/src/main/java/app/morphe/extension/youtube/videoplayer/ExternalDownloadButton.java — new non-allowlisted URL or IP</summary>

```
                videoId, context, "https://youtu.be/" + videoId, quickDownloadType)
                && (PlayerType.getCurrent().isNoneOrHidden() || !videoId.equals(VideoInformation.getVideoId()))) {

```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-as-rIN/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_android_auto_last_played">শেষবাৰ বজোৱা</string>
  <string name="morphe_music_jam_enabled_summary">YouTube Music পুনৰ আৰম্ভ হোৱাৰ পিছত Jam সংহতি সক্ৰিয় কৰে</string>
  <string name="morphe_music_jam_controls_title">Jam নিয়ন্ত্ৰণ</string>
  <string name="morphe_music_jam_package_message">এটা সংস্থাপিত কম্প্যানিয়ন প্যাকেজ ব্যৱহাৰ কৰক। পেয়ৰিং কৰিবলৈ আপোনাৰ অনুমোদন আৰু এটা লোকাল কেপাবিলিটি টোকেনৰ প্ৰয়োজন</string>
  <string name="morphe_music_jam_package_saved">প্যাকেজ সংৰক্ষিত হৈছে। সংযোগ কৰিবলৈ Jam Layer ছেট আপ কৰক</string>
  <string name="morphe_music_jam_seek_not_ready">গানটো আগবঢ়াই যাবলৈ সাজু হোৱা নাই</string>
  <string name="morphe_music_jam_queue_changed_gesture">কিউ সলনি হৈছে; অঙ্গভঙ্গিটো পুনৰ চেষ্টা কৰক</string>
  <string name="morphe_music_downloads_play">চলাওক</string>
  <string name="morphe_music_downloads_play_pause">প্লে বা পজ কৰক</string>
  <string name="morphe_music_downloads_previous">পূৰ্বৱৰ্তী</string>
  <string name="morphe_music_downloads_pause">পজ কৰক</string>
  <string name="morphe_music_downloads_shuffle">শ্বাফেল</string>
  <string name="morphe_music_downloads_playlists_hide">প্লেলিষ্টসমূহ লুকুৱাওক ▲</string>
  <string name="morphe_music_app_language_summary_default">ছিষ্টেমৰ ভাষা</string>
  <string name="morphe_music_hide_get_premium_label_title">\'Get Music Premium\' লেবেলটো লুকুৱাওক</string>
```

</details>

<details>
<summary>[high] patches/src/main/resources/addresources/values-ky-rKG/music/strings.xml — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.9 — no ban]</summary>

LLM review: benign (0.9, benign-other): The file is a local Android resource XML defining UI strings for a 'Jam' music feature. The strings are localized translations (Kyrgyz/Russian) and contain no code execution, network calls, or attempts to exfiltrate data. They merely display messages such as 'Jam кайра туташууда...' and download status. Adding new resource entries is a normal build step and does not involve cookies or same-site verification. No prompt-injection or malicious instructions are present.

```
  <string name="morphe_music_jam_update_host_controls">Пауза жана улантуу функцияларын колдонуу үчүн хосттун Jam патчын жаңыртыңыз</string>
  <string name="morphe_music_jam_invalid_invite">Сегиз символдуу кодду киргизиңиз же чакырууну чаптаңыз</string>
  <string name="morphe_music_jam_reconnecting_toast">Jam кайра туташууда; бир аздан кийин кайра аракет кылыңыз</string>
  <string name="morphe_music_jam_unsupported">Jam учурунда колдоого алынбайт</string>
  <string name="morphe_music_jam_reconnecting_host">Хостко кайра туташуу…</string>
  <string name="morphe_music_jam_end_jam">Jam\'ди бүтүрүү</string>
  <string name="morphe_music_jam_leave_jam">Jam\'ден чыгуу</string>
  <string name="morphe_music_jam_start_jam">Jam\'ди баштоо</string>
  <string name="morphe_music_jam_setup_layer">Jam Layer\'ди орнотуу</string>
  <string name="morphe_header_logo_entry_3">Ыңгайлаштырылган</string>
  <string name="morphe_music_downloads_playlists_section">Түзүлгөн плейлисттер (%s)</string>
  <string name="morphe_music_downloads_playlist_added">%s плейлистине кошулду</string>
  <string name="morphe_music_downloads_playlist_name_empty">Плейлисттин аталышы бош болушу мүмкүн эмес</string>
  <string name="morphe_music_downloads_complete">Жүктөө аяктады</string>
  <string name="morphe_music_downloads_playlist_download_complete_with_failures">%1$s жүктөлдү, %2$s жүктөлгөн жок</string>
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/CaptionBlockTranslator.java: previously seen host https://edge.microsoft.com (2026-11-06) with new Location</summary>

LLM review: suspicious (0.75, exfiltration): The diff flags CaptionBlockTranslator.java as performing 'exfil completed across windows' targeting the previously seen host https://edge.microsoft.com. Modifying this class to send data across process boundaries strongly suggests an attempt to exfiltrate user-generated content or metadata, which is a form of data leakage. While the exact line numbers are not provided in the excerpt, the description and referenced host constitute sufficient evidence to label the change as suspicious rather than benign.

```
(see report of 2026-11-06 for the earlier half)
```

</details>


__
