# MorpheApp/morphe-patches — 2026-11-06

Commit: 8fa2c7a1a832498de8f179748998a3ca87e198eb | Status: RED | crit:0 high:4 med:35

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/downloads/PlaylistTracksRequest.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4398
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to Morphe contributions.
 */

package app.morphe.extension.music.patches.downloads;

import android.os.Build;

import androidx.annotation.Nullable;

import org.json.JSONArray;
import org.json.JSONException;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/parsers/TTMLParser.java — new non-allowlisted URL or IP</summary>

```
import app.morphe.extension.music.patches.lyrics.romanizers.KanaRomanizer;
import app.morphe.extension.music.patches.lyrics.romanizers.ScriptDetector;
    private static final String NS_LRC_RED = "http://lrc.red/lyric-ttml-internal";
                                getLyricAttr(p, "timing", "itunes:timing"));
                        divSongPart = getLyricAttr(p, "songPart", "itunes:songPart");
                            divSongPart = getLyricAttr(p, "songPart", "itunes:song-part");
                        final String lineId = getLyricAttr(p, "key", "itunes:key");
                                            prev.romaji(), true, prev.ruby()));
                                            prev.romaji(), true, prev.ruby()));
                                    prev.text(), prev.romaji(), true, prev.ruby()));
                                    prev.text(), prev.romaji(), true, prev.ruby()));
                        first.text().substring(1).trim(), first.romaji(), first.endsWithSpace(), first.ruby()));
                        last.text().trim(), last.romaji(), false, last.ruby()));
                        first.text().substring(1).trim(), first.romaji(), first.endsWithSpace(), first.ruby()));
                        last.text().trim(), last.romaji(), false, last.ruby()));
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LrcRedProvider.java — new non-allowlisted URL or IP</summary>

```
import org.json.JSONException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicLong;
import java.util.regex.Matcher;
import app.morphe.extension.music.patches.lyrics.LyricsManager;
import app.morphe.extension.shared.Utils;
/** Lyrics from lrc.red, whose song document embeds the TTML the song page renders from. */
    public static final String NAME = "LrcRed";
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/ui/DynamicBackgroundView.java — dangerous permission plus network sink in same file</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4208
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.lyrics.ui;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
```

</details>

<details>
<summary>[medium] extensions/music/src/main/java/app/morphe/extension/music/patches/soundproof/data/SoundProofApi.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4451
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.music.patches.soundproof.data;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.OutputStream;
```

</details>

<details>
<summary>[medium] extensions/shared/library/src/main/java/app/morphe/extension/shared/translation/DeepLClient.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/3877
 * https://github.com/MorpheApp/morphe-patches/pull/4313
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.shared.translation;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
```

</details>

<details>
<summary>[high] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/CaptionBlockTranslator.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
/*
 * Copyright 2026 Morphe.
 * https://github.com/MorpheApp/morphe-patches/pull/4213
 *
 * See the included NOTICE file for GPLv3 Section 7 terms that apply to this code.
 */

package app.morphe.extension.youtube.patches;

import androidx.annotation.Nullable;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

```

</details>

<details>
<summary>[high] extensions/youtube/src/main/java/app/morphe/extension/youtube/patches/FeedCardLayoutPatch.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.4, exfiltration): Excerpt shows only imports including HttpURLConnection, AuthUtils and Requester with no visible source-to-sink data flow; insufficient evidence to confirm exfiltration or declare malicious.

```
import com.google.protobuf.InvalidProtocolBufferException;
import java.net.HttpURLConnection;
import java.util.Objects;
import app.morphe.extension.shared.StringRef;
import app.morphe.extension.shared.innertube.utils.AuthUtils;
import app.morphe.extension.shared.requests.Requester;
import app.morphe.extension.youtube.innertube.FeedCardLayoutOuterClass.CardLayoutExperiments;
import app.morphe.extension.youtube.innertube.FeedCardLayoutOuterClass.CollectionPrimaryThumbnail;
import app.morphe.extension.youtube.innertube.FeedCardLayoutOuterClass.CollectionStackColors;
import app.morphe.extension.youtube.innertube.FeedCardLayoutOuterClass.CollectionThumbnailViewModel;
import app.morphe.extension.youtube.innertube.FeedCardLayoutOuterClass.OpenPopupAction;
import app.morphe.extension.youtube.innertube.FeedCardLayoutOuterClass.ThumbnailOverlayBadgeViewModel;
import app.morphe.extension.youtube.innertube.IconOuterClass.Icon;
import app.morphe.extension.youtube.innertube.IconOuterClass.YTIconType;
import app.morphe.extension.youtube.innertube.PlaylistEdit;
```

</details>

<details>
<summary>[info] patches/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/kotlin/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/kotlin/app/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/kotlin/app/morphe/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/kotlin/app/morphe/patches/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/kotlin/app/morphe/patches/youtube/misc/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-am-rET/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">ዘፈኖችን አቀያይር</string>
  <string name="morphe_music_downloads_repeat">ድገም</string>
  <string name="morphe_music_downloads_minimize">አሳንስ</string>
  <string name="morphe_music_downloads_playlists">የመጫወቻ ዝርዝሮች</string>
  <string name="morphe_music_downloads_playlists_section">የተፈጠሩ የመጫወቻ ዝርዝሮች (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">እስካሁን ምንም የአካባቢ መጫወቻ ዝርዝሮች የሉም</string>
  <string name="morphe_music_downloads_playlists_hide">የመጫወቻ ዝርዝሮችን ደብቅ ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ አዲስ የመጫወቻ ዝርዝር</string>
  <string name="morphe_music_downloads_playlist_new_button">አዲስ የመጫወቻ ዝርዝር</string>
  <string name="morphe_music_downloads_playlist_selected">የተመረጡ (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">መጀመሪያ ዘፈኖችን ይምረጡ</string>
  <string name="morphe_music_downloads_playlist_clear_selection">ምርጫውን አጥፋ</string>
  <string name="morphe_music_downloads_playlist_create">የመጫወቻ ዝርዝር ፍጠር</string>
  <string name="morphe_music_downloads_playlist_create_button">ፍጠር</string>
  <string name="morphe_music_downloads_playlist_add">ወደ ዝርዝር አክል</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-as-rIN/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">চাফেল</string>
  <string name="morphe_music_downloads_repeat">পুনৰাবৃত্তি</string>
  <string name="morphe_music_downloads_minimize">মিনিমাইজ কৰক</string>
  <string name="morphe_music_downloads_playlists">প্লেলিষ্টসমূহ</string>
  <string name="morphe_music_downloads_playlists_section">তৈৰী কৰা প্লেলিষ্টসমূহ (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">এতিয়াও কোনো স্থানীয় প্লেলিষ্ট নাই</string>
  <string name="morphe_music_downloads_playlists_hide">প্লেলিষ্টসমূহ লুকুওক ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ নতুন প্লেলিষ্ট</string>
  <string name="morphe_music_downloads_playlist_new_button">নতুন প্লেলিষ্ট</string>
  <string name="morphe_music_downloads_playlist_selected">নিৰ্বাচিত (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">প্ৰথমে গানসমূহ নিৰ্বাচিত কৰক</string>
  <string name="morphe_music_downloads_playlist_clear_selection">নিৰ্বাচন মুছক</string>
  <string name="morphe_music_downloads_playlist_create">প্লেলিষ্ট তৈৰী কৰক</string>
  <string name="morphe_music_downloads_playlist_create_button">তৈৰী কৰক</string>
  <string name="morphe_music_downloads_playlist_add">প্লেলিষ্টলৈ যোগ কৰক</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-az-rAZ/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_playlists">Pleylistlər</string>
  <string name="morphe_music_downloads_playlists_section">Yaradılmış pleylistlər (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Hələ ki yerli pleylist yoxdur</string>
  <string name="morphe_music_downloads_playlists_hide">Pleylistləri gizlət ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Yeni pleylist</string>
  <string name="morphe_music_downloads_playlist_new_button">Yeni pleylist</string>
  <string name="morphe_music_downloads_playlist_selected">Seçilmiş (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Əvvəlcə mahnıları seç</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Seçimi təmizlə</string>
  <string name="morphe_music_downloads_playlist_create">Pleylisti yarat</string>
  <string name="morphe_music_downloads_playlist_create_button">Yarat</string>
  <string name="morphe_music_downloads_playlist_add">Pleylistə əlavə et</string>
  <string name="morphe_music_downloads_playlist_added">%s \'ə əlavə edildi</string>
  <string name="morphe_music_downloads_playlist_name_hint">Pleylist adı</string>
  <string name="morphe_music_downloads_playlist_name_empty">Pleylist adı boş ola bilməz</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-be-rBY/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Перамешаць</string>
  <string name="morphe_music_downloads_repeat">Паўтарыць</string>
  <string name="morphe_music_downloads_minimize">Звесці</string>
  <string name="morphe_music_downloads_playlists">Плэйлісты</string>
  <string name="morphe_music_downloads_playlists_section">Створаныя плэйлісты (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Пакалі лёкальных плэйлістаў няма</string>
  <string name="morphe_music_downloads_playlists_hide">Схаваць плэйлісты ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Новы плэйліст</string>
  <string name="morphe_music_downloads_playlist_new_button">Новы плэйліст</string>
  <string name="morphe_music_downloads_playlist_selected">Выбрана (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Спачатку выберыце песні</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Ачысціць выбар</string>
  <string name="morphe_music_downloads_playlist_create">Стварыць плэйліст</string>
  <string name="morphe_music_downloads_playlist_create_button">Стварыць</string>
  <string name="morphe_music_downloads_playlist_add">Дадаць у плэйліст</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-bs-rBA/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Pomiješaj</string>
  <string name="morphe_music_downloads_repeat">Ponovi</string>
  <string name="morphe_music_downloads_minimize">Smanji</string>
  <string name="morphe_music_downloads_playlists">Playliste</string>
  <string name="morphe_music_downloads_playlists_section">Kreirane playliste (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Još nema lokalnih playlista</string>
  <string name="morphe_music_downloads_playlists_hide">Sakrij playliste ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Nova playlista</string>
  <string name="morphe_music_downloads_playlist_new_button">Nova playlista</string>
  <string name="morphe_music_downloads_playlist_selected">Odabrano (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Prvo odaberite pjesme</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Očisti izbor</string>
  <string name="morphe_music_downloads_playlist_create">Kreiraj playlistu</string>
  <string name="morphe_music_downloads_playlist_create_button">Kreiraj</string>
  <string name="morphe_music_downloads_playlist_add">Dodaj na plejlistu</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ca-rES/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Aleatori</string>
  <string name="morphe_music_downloads_repeat">Repetir</string>
  <string name="morphe_music_downloads_minimize">Minimitzar</string>
  <string name="morphe_music_downloads_playlists">Llistes de reproducció</string>
  <string name="morphe_music_downloads_playlists_section">Llistes de reproducció creades (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Encara no hi ha llistes de reproducció locals</string>
  <string name="morphe_music_downloads_playlists_hide">Amaga llistes de reproducció ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Llista de reproducció nova</string>
  <string name="morphe_music_downloads_playlist_new_button">Llista de reproducció nova</string>
  <string name="morphe_music_downloads_playlist_selected">Seleccionat (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Selecciona cançons primer</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Neteja la selecció</string>
  <string name="morphe_music_downloads_playlist_create">Crea llista de reproducció</string>
  <string name="morphe_music_downloads_playlist_create_button">Crea</string>
  <string name="morphe_music_downloads_playlist_add">Afegeix a la llista de reproducció</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ckb-rIR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">تێکەڵکردن</string>
  <string name="morphe_music_downloads_repeat">دووبارەکردنەوە</string>
  <string name="morphe_music_downloads_minimize">کەمکردنەوە</string>
  <string name="morphe_music_downloads_playlists">لیستەکانی پەخشکردن</string>
  <string name="morphe_music_downloads_playlists_section">لیستەکانی پەخشکردنی دروستکراو (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">هێشتا هیچ لیستی پەخشکردنێکی ناوخۆیی نییە</string>
  <string name="morphe_music_downloads_playlists_hide">شاردنەوەی لیستەکانی پەخشکردن ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ لیستی پەخشکردنی نوێ</string>
  <string name="morphe_music_downloads_playlist_new_button">لیستی پەخشکردنی نوێ</string>
  <string name="morphe_music_downloads_playlist_selected">دیاریکراو (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">پێشتر گۆرانییەکان هەڵبژێرە</string>
  <string name="morphe_music_downloads_playlist_clear_selection">پاککردنەوەی هەڵبژاردنەکان</string>
  <string name="morphe_music_downloads_playlist_create">دروستکردنی لیستی پەخشکردن</string>
  <string name="morphe_music_downloads_playlist_create_button">دروستکردن</string>
  <string name="morphe_music_downloads_playlist_add">زیادکردن بۆ لیستی پەخشکردن</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-et-rEE/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_android_auto_last_played">Viimasena esitatud</string>
  <string name="morphe_music_android_auto_uploaded_songs">Üleslaaditud lood</string>
  <string name="morphe_music_android_auto_uploaded_artists">Üleslaaditud esitajad</string>
  <string name="morphe_music_jam_probe_title">Jam-järjekord jagamine</string>
  <string name="morphe_music_jam_probe_summary">Korralda läheduses toimuv Jam või liitu sellega ning halda selle järjekorda Jam Layeri kaudu</string>
  <string name="morphe_music_jam_enabled_title">Activeeri Jam-järjekorra jagamine</string>
  <string name="morphe_music_jam_enabled_summary">Lubab Jam-integratsiooni pärast YouTube Musicu taaskäivitamist</string>
  <string name="morphe_music_jam_download_summary">Ava Jam Layeri uusim väljalase oma veebilehitsejas</string>
  <string name="morphe_music_jam_controls_title">Jam-kontroliid</string>
  <string name="morphe_music_jam_controls_summary">Korralda läheduses toimuv Jam või liitu sellega ning halda sessiooni</string>
  <string name="morphe_music_jam_companion_package_title">Jam Layer pakk</string>
  <string name="morphe_music_jam_companion_package_summary">Vali installitud kaasrakendus, mida kasutatakse järjekorra jagamiseks läheduses asuvate seadmetega</string>
  <string name="morphe_music_jam_package_message">Kasutage installitud kaasrakendust. Sidumine nõuab teie heakskiitu ja kohalikku õigustetokenit</string>
  <string name="morphe_music_jam_wifi_title">Lülita Wi-Fi sisse?</string>
  <string name="morphe_music_jam_wifi_message">Lülita Wi-Fi sisse ja proovi seejärel uuesti Jam-i alustada või sellega liituda</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-eu-rES/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Nahasi</string>
  <string name="morphe_music_downloads_repeat">Errepikatu</string>
  <string name="morphe_music_downloads_minimize">Txikitu</string>
  <string name="morphe_music_downloads_playlists">Zerrendak</string>
  <string name="morphe_music_downloads_playlists_section">Sortutako zerrendak (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Ez dau zerrenda lokalik oraindik</string>
  <string name="morphe_music_downloads_playlists_hide">Ezkutatu zerrendak ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Zerrenda berria</string>
  <string name="morphe_music_downloads_playlist_new_button">Zerrenda berria</string>
  <string name="morphe_music_downloads_playlist_selected">Hautatuta (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Hautatu lehenik abestak</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Hautaketa garbitu</string>
  <string name="morphe_music_downloads_playlist_create">Sortu zerrenda</string>
  <string name="morphe_music_downloads_playlist_create_button">Sortu</string>
  <string name="morphe_music_downloads_playlist_add">Gehitu zerrendara</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-fr-rFR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Aléatoire</string>
  <string name="morphe_music_downloads_repeat">Répéter</string>
  <string name="morphe_music_downloads_minimize">Réduire</string>
  <string name="morphe_music_downloads_playlists">Playlists</string>
  <string name="morphe_music_downloads_playlists_section">Playlists créées (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Aucune playlist locale pour le moment</string>
  <string name="morphe_music_downloads_playlists_hide">Masquer les playlists ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Nouvelle playlist</string>
  <string name="morphe_music_downloads_playlist_new_button">Nouvelle playlist</string>
  <string name="morphe_music_downloads_playlist_selected">Sélectionnées (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Sélectionnez d\'abord des chansons</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Effacer la sélection</string>
  <string name="morphe_music_downloads_playlist_create">Créer une playlist</string>
  <string name="morphe_music_downloads_playlist_create_button">Créer</string>
  <string name="morphe_music_downloads_playlist_add">Ajouter à la playlist</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ga-rIE/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Meascair</string>
  <string name="morphe_music_downloads_repeat">Athdhéan</string>
  <string name="morphe_music_downloads_minimize">Minimigh</string>
  <string name="morphe_music_downloads_playlists">Seinmliostaí</string>
  <string name="morphe_music_downloads_playlists_section">Seinnliostaí cruthaithe (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Gan seinmliostaí áitiúla go fóill</string>
  <string name="morphe_music_downloads_playlists_hide">Folaigh seinmliostaí ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Seinmliosta nua</string>
  <string name="morphe_music_downloads_playlist_new_button">Seinnliosta nua</string>
  <string name="morphe_music_downloads_playlist_selected">Roghnaithe (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Roghnaigh amhráin ar dtús</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Glan an roghnú</string>
  <string name="morphe_music_downloads_playlist_create">Cruthaigh seinmliosta</string>
  <string name="morphe_music_downloads_playlist_create_button">Cruthaigh</string>
  <string name="morphe_music_downloads_playlist_add">Cuir le seinmliosta</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-gl-rES/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Aleatorio</string>
  <string name="morphe_music_downloads_repeat">Repetir</string>
  <string name="morphe_music_downloads_minimize">Minimizar</string>
  <string name="morphe_music_downloads_playlists">Listas de reprodución</string>
  <string name="morphe_music_downloads_playlists_section">Listas de reprodución creadas (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Aínda non hai listas de reprodución locais</string>
  <string name="morphe_music_downloads_playlists_hide">Agochar listas de reprodución ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Nova lista de reprodución</string>
  <string name="morphe_music_downloads_playlist_new_button">Nova lista de reprodución</string>
  <string name="morphe_music_downloads_playlist_selected">Seleccionado (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Seleccione primeiro as cancións</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Limpar selección</string>
  <string name="morphe_music_downloads_playlist_create">Crear lista de reprodución</string>
  <string name="morphe_music_downloads_playlist_create_button">Crear</string>
  <string name="morphe_music_downloads_playlist_add">Engadir á lista de reprodución</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-hy-rAM/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Խառնել</string>
  <string name="morphe_music_downloads_repeat">Կրկնել</string>
  <string name="morphe_music_downloads_minimize">Փոքրացնել</string>
  <string name="morphe_music_downloads_playlists">Պլեյլիստներ</string>
  <string name="morphe_music_downloads_playlists_section">Ստեղծված плейլիստեր (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Տեղային плейլիստեր դեռ չկան</string>
  <string name="morphe_music_downloads_playlists_hide">Թաքցնել плейլիստերը ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Նոր плейլիստ</string>
  <string name="morphe_music_downloads_playlist_new_button">Նոր плейլիստ</string>
  <string name="morphe_music_downloads_playlist_selected">Ընտրված (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Նախ ընտրեք երգերը</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Հեռացնել ընտրությունը</string>
  <string name="morphe_music_downloads_playlist_create">Ստեղծել плейլիստ</string>
  <string name="morphe_music_downloads_playlist_create_button">Ստեղծել</string>
  <string name="morphe_music_downloads_playlist_add">Ավելացնել նվագացուցակում</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ka-rGE/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">გაურandomელება</string>
  <string name="morphe_music_downloads_repeat">გამეორება</string>
  <string name="morphe_music_downloads_minimize">მინიმუმამდე დაყვანა</string>
  <string name="morphe_music_downloads_playlists">ფლეილისტები</string>
  <string name="morphe_music_downloads_playlists_section">შექმნილი ფლეილისტები (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">ლოკალური ფლეილისტები ჯერ არ არის</string>
  <string name="morphe_music_downloads_playlists_hide">ფლეილისტების დამალვა ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ ახალი ფლეილისტი</string>
  <string name="morphe_music_downloads_playlist_new_button">ახალი ფლეილისტი</string>
  <string name="morphe_music_downloads_playlist_selected">მონიშნულია (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">ჯერ აირჩიეთ სიმღერები</string>
  <string name="morphe_music_downloads_playlist_clear_selection">მონიშვნის გაუქმება</string>
  <string name="morphe_music_downloads_playlist_create">ფლეილისტის შექმნა</string>
  <string name="morphe_music_downloads_playlist_create_button">შექმნა</string>
  <string name="morphe_music_downloads_playlist_add">დაამატეთ პლეილისტში</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-kk-rKZ/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_summary">%1$s трек • %2$s МБ</string>
  <string name="morphe_music_downloads_shuffle">Араластыру</string>
  <string name="morphe_music_downloads_repeat">Қайталау</string>
  <string name="morphe_music_downloads_minimize">Жығу</string>
  <string name="morphe_music_downloads_playlists">Плейлисттер</string>
  <string name="morphe_music_downloads_playlists_section">Жасалған плейлисттер (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Жергілікті плейлисттер әлі жоқ</string>
  <string name="morphe_music_downloads_playlists_hide">Плейлисттерді жасыру ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Жаңа плейлист</string>
  <string name="morphe_music_downloads_playlist_new_button">Жаңа плейлист</string>
  <string name="morphe_music_downloads_playlist_selected">Таңдалған (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Алдымен әндерді таңдаңыз</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Таңдауды тазалау</string>
  <string name="morphe_music_downloads_playlist_create">Плейлист жасау</string>
  <string name="morphe_music_downloads_playlist_create_button">Жасау</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-kmr-rTR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Tevlihev bikin</string>
  <string name="morphe_music_downloads_repeat">Dubare bikin</string>
  <string name="morphe_music_downloads_minimize">Kêm bikin</string>
  <string name="morphe_music_downloads_playlists">Lîsteyên muzîkê</string>
  <string name="morphe_music_downloads_playlists_section">Lîsteyên muzîkê yên hatine çêkirin (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Hîna tu lîsteya muzîkê ya herêmî tune ne</string>
  <string name="morphe_music_downloads_playlists_hide">Lîsteyên muzîkê veşêre ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Lîsteya muzîkê ya nû</string>
  <string name="morphe_music_downloads_playlist_new_button">Lîsteya muzîkê ya nû</string>
  <string name="morphe_music_downloads_playlist_selected">Hatine hilbijartin (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Pêşî stranan hilbijêre</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Hilbijartinê paqij bike</string>
  <string name="morphe_music_downloads_playlist_create">Lîsteya muzîkê çêbike</string>
  <string name="morphe_music_downloads_playlist_create_button">Çêbike</string>
  <string name="morphe_music_downloads_playlist_add">Tê bikirin lîsteya stranan</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ko-rKR/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_android_auto_last_played">최근 재생</string>
  <string name="morphe_music_play_album_songs_summary">뮤직비디오 대신 앨범 오디오 버전만 재생합니다. \'동영상 스트림 속이기\'가 필요합니다</string>
  <string name="morphe_music_downloads_shuffle">셔플</string>
  <string name="morphe_music_downloads_repeat">반복</string>
  <string name="morphe_music_downloads_minimize">최소화</string>
  <string name="morphe_music_downloads_playlists">재생목록</string>
  <string name="morphe_music_downloads_playlists_section">생성된 재생목록 (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">아직 로컬 재생목록이 없습니다</string>
  <string name="morphe_music_downloads_playlists_hide">재생목록 숨기기 ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ 새 재생목록</string>
  <string name="morphe_music_downloads_playlist_new_button">새 재생목록</string>
  <string name="morphe_music_downloads_playlist_selected">선택됨 (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">먼저 노래를 선택하세요</string>
  <string name="morphe_music_downloads_playlist_clear_selection">선택 지우기</string>
  <string name="morphe_music_downloads_playlist_create">재생목록 만들기</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ky-rKG/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Аралаштыруу</string>
  <string name="morphe_music_downloads_repeat">Кайталоо</string>
  <string name="morphe_music_downloads_minimize">Кичирейтүү</string>
  <string name="morphe_music_downloads_playlists">Плейлисттер</string>
  <string name="morphe_music_downloads_playlists_section">Создалган плейлисттер (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Жергиликтүү плейлисттер жок</string>
  <string name="morphe_music_downloads_playlists_hide">Плейлисттерди жашыруу ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Жаңы плейлист</string>
  <string name="morphe_music_downloads_playlist_new_button">Жаңы плейлист</string>
  <string name="morphe_music_downloads_playlist_selected">Тандалган (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Алгач ырларды тандаңыз</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Тандоону тазалоо</string>
  <string name="morphe_music_downloads_playlist_create">Плейлист түзүү</string>
  <string name="morphe_music_downloads_playlist_create_button">Түзүү</string>
  <string name="morphe_music_downloads_playlist_add">Плейлистке кошуу</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-lo-rLA/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">ສຸ່ມ</string>
  <string name="morphe_music_downloads_repeat">ຫຼິ້ນຊ້ຳ</string>
  <string name="morphe_music_downloads_minimize">ຫຍໍ້ໜ້າຈໍ</string>
  <string name="morphe_music_downloads_playlists">ລາຍການເພງ</string>
  <string name="morphe_music_downloads_playlists_section">ລາຍການເພງທີ່ສ້າງຂຶ້ນ (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">ຍັງບໍ່ມີລາຍການເພງໃນເຄື່ອງ</string>
  <string name="morphe_music_downloads_playlists_hide">ເຊື່ອງລາຍການເພງ ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ ລາຍການເພງໃໝ່</string>
  <string name="morphe_music_downloads_playlist_new_button">ລາຍການເພງໃໝ່</string>
  <string name="morphe_music_downloads_playlist_selected">ເລືອກແລ້ວ (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">ກະລຸນາເລືອກເພງກ່ອນ</string>
  <string name="morphe_music_downloads_playlist_clear_selection">ລຶບການເລືອກ</string>
  <string name="morphe_music_downloads_playlist_create">ສ້າງລາຍການເພງ</string>
  <string name="morphe_music_downloads_playlist_create_button">ສ້າງ</string>
  <string name="morphe_music_downloads_playlist_add">ເພີ່ມໃນລາຍການຫຼິ້ນ</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-lv-rLV/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_summary">%1$s trekumi • %2$s MB</string>
  <string name="morphe_music_downloads_shuffle"> Nejaušā secība</string>
  <string name="morphe_music_downloads_repeat">Atkārtot</string>
  <string name="morphe_music_downloads_minimize">Minimizēt</string>
  <string name="morphe_music_downloads_playlists">Atskaņošanas saraksti</string>
  <string name="morphe_music_downloads_playlists_section">Izveidoti atskaņu saraksti (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Vietējie atskaņošanas saraksti vēl nav izveidoti</string>
  <string name="morphe_music_downloads_playlists_hide">Slēpt atskaņošanas sarakstus ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Jauns atskaņošanas saraksts</string>
  <string name="morphe_music_downloads_playlist_new_button">Jauns atskaņošanas saraksts</string>
  <string name="morphe_music_downloads_playlist_selected">Atlasīts (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Vispirms atlasiet dziesmas</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Notīrīt atlasi</string>
  <string name="morphe_music_downloads_playlist_create">Izveidot atskaņošanas sarakstu</string>
  <string name="morphe_music_downloads_playlist_create_button">Izveidot</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-mk-rMK/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Премешај</string>
  <string name="morphe_music_downloads_repeat">Повтори</string>
  <string name="morphe_music_downloads_minimize">Смали</string>
  <string name="morphe_music_downloads_playlists">Плејлисти</string>
  <string name="morphe_music_downloads_playlists_section">Креирани плејлисти (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Уште нема локални плејлисти</string>
  <string name="morphe_music_downloads_playlists_hide">Скриј плејлисти ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Нова плејлиста</string>
  <string name="morphe_music_downloads_playlist_new_button">Нова плејлиста</string>
  <string name="morphe_music_downloads_playlist_selected">Избрани (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Прво изберете песни</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Ичисти избор</string>
  <string name="morphe_music_downloads_playlist_create">Креирај плејлиста</string>
  <string name="morphe_music_downloads_playlist_create_button">Креирај</string>
  <string name="morphe_music_downloads_playlist_add">Додај во плејлиста</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-mr-rIN/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_jam_one_connected">%s व्यक्ती जोडली गेली</string>
  <string name="morphe_music_downloads_shuffle">शफल</string>
  <string name="morphe_music_downloads_repeat">पुनरावृत्ती</string>
  <string name="morphe_music_downloads_minimize">लहान करा</string>
  <string name="morphe_music_downloads_playlists">प्लेलिस्ट</string>
  <string name="morphe_music_downloads_playlists_section">तयार केलेल्या प्लेलिस्ट (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">अद्याप कोणतीही स्थानिक प्लेलिस्ट नाही</string>
  <string name="morphe_music_downloads_playlists_hide">प्लेलिस्ट लपवा ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ नवीन प्लेलिस्ट</string>
  <string name="morphe_music_downloads_playlist_new_button">नवीन प्लेलिस्ट</string>
  <string name="morphe_music_downloads_playlist_selected">निवडलेले (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">प्रथम गाणी निवडा</string>
  <string name="morphe_music_downloads_playlist_clear_selection">निवड रद्द करा</string>
  <string name="morphe_music_downloads_playlist_create">प्लेलिस्ट तयार करा</string>
  <string name="morphe_music_downloads_playlist_create_button">तयार करा</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ms-rMY/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Rawak</string>
  <string name="morphe_music_downloads_repeat">Ulang</string>
  <string name="morphe_music_downloads_minimize">Minimumkan</string>
  <string name="morphe_music_downloads_playlists">Senarai main</string>
  <string name="morphe_music_downloads_playlists_section">Senarai main yang dicipta (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Tiada senarai main tempatan lagi</string>
  <string name="morphe_music_downloads_playlists_hide">Sorokkan senarai main ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Senarai main baharu</string>
  <string name="morphe_music_downloads_playlist_new_button">Senarai main baharu</string>
  <string name="morphe_music_downloads_playlist_selected">Dipilih (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Pilih lagu terlebih dahulu</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Kosongkan pilihan</string>
  <string name="morphe_music_downloads_playlist_create">Cipta senarai main</string>
  <string name="morphe_music_downloads_playlist_create_button">Cipta</string>
  <string name="morphe_music_downloads_playlist_add">Tambah ke senarai main</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-pl-rPL/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Losuj</string>
  <string name="morphe_music_downloads_repeat">Powtórz</string>
  <string name="morphe_music_downloads_minimize">Zminimalizuj</string>
  <string name="morphe_music_downloads_playlists">Playlisty</string>
  <string name="morphe_music_downloads_playlists_section">Utworzone playlisty (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Brak lokalnych playlist</string>
  <string name="morphe_music_downloads_playlists_hide">Ukryj playlisty ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Nowa playlista</string>
  <string name="morphe_music_downloads_playlist_new_button">Nowa playlista</string>
  <string name="morphe_music_downloads_playlist_selected">Zaznaczono (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Najpierw zaznacz utwory</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Wyczyść zaznaczenie</string>
  <string name="morphe_music_downloads_playlist_create">Utwórz playlistę</string>
  <string name="morphe_music_downloads_playlist_create_button">Utwórz</string>
  <string name="morphe_music_downloads_playlist_add">Dodaj do playlisty</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-sw-rKE/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_summary">nyimbo %1$s • %2$s MB</string>
  <string name="morphe_music_downloads_shuffle">Changanya</string>
  <string name="morphe_music_downloads_repeat">Rudia</string>
  <string name="morphe_music_downloads_minimize">Punguza</string>
  <string name="morphe_music_downloads_playlists">Orodha za nyimbo</string>
  <string name="morphe_music_downloads_playlists_section">Orodha za nyimbo zilizoundwa (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Hakuna orodha za nyimbo za hapa bado</string>
  <string name="morphe_music_downloads_playlists_hide">Ficha orodha za nyimbo ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Orodha mpya ya nyimbo</string>
  <string name="morphe_music_downloads_playlist_new_button">Orodha mpya ya nyimbo</string>
  <string name="morphe_music_downloads_playlist_selected">Zimechaguliwa (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Chagua nyimbo kwanza</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Futa uteuzi</string>
  <string name="morphe_music_downloads_playlist_create">Unda orodha ya nyimbo</string>
  <string name="morphe_music_downloads_playlist_create_button">Unda</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-ta-rIN/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_summary">%1$s பாடல்கள் • %2$s MB</string>
  <string name="morphe_music_downloads_shuffle">கலக்கவும்</string>
  <string name="morphe_music_downloads_repeat">திரும்பச் செய்யவும்</string>
  <string name="morphe_music_downloads_minimize">குறைக்கவும்</string>
  <string name="morphe_music_downloads_playlists">பிளேலிஸ்ட்டுகள்</string>
  <string name="morphe_music_downloads_playlists_section">உருவாக்கப்பட்ட பிளேலிஸ்ட்டுகள் (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">உள்ளூர் பிளேலிஸ்ட்டுகள் எதுவும் இல்லை</string>
  <string name="morphe_music_downloads_playlists_hide">பிளேலிஸ்ட்டுகளை மறைக்கவும் ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ புதிய பிளேலிஸ்ட்</string>
  <string name="morphe_music_downloads_playlist_new_button">புதிய பிளேலிஸ்ட்</string>
  <string name="morphe_music_downloads_playlist_selected">தேர்ந்தெடுக்கப்பட்டது (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">முதலில் பாடல்களைத் தேர்ந்தெடுக்கவும்</string>
  <string name="morphe_music_downloads_playlist_clear_selection">தேர்வை நீக்கவும்</string>
  <string name="morphe_music_downloads_playlist_create">பிளேலிஸ்ட்டை உருவாக்கவும்</string>
  <string name="morphe_music_downloads_playlist_create_button">உருவாக்கு</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-uk-rUA/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Перемішати</string>
  <string name="morphe_music_downloads_repeat">Повторити</string>
  <string name="morphe_music_downloads_minimize">Згорнути</string>
  <string name="morphe_music_downloads_playlists">Списки відтворення</string>
  <string name="morphe_music_downloads_playlists_section">Створені списки відтворення (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Локальних списків відтворення ще немає</string>
  <string name="morphe_music_downloads_playlists_hide">Сховати списки відтворення ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Новий список відтворення</string>
  <string name="morphe_music_downloads_playlist_new_button">Новий список відтворення</string>
  <string name="morphe_music_downloads_playlist_selected">Вибрано (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Спочатку виберіть пісні</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Очистити вибір</string>
  <string name="morphe_music_downloads_playlist_create">Створити список відтворення</string>
  <string name="morphe_music_downloads_playlist_create_button">Створити</string>
  <string name="morphe_music_downloads_playlist_add">Додати до списку відтворення</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-uz-rUZ/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_summary">%1$s trek • %2$s MB</string>
  <string name="morphe_music_downloads_shuffle">Tasodifiy</string>
  <string name="morphe_music_downloads_repeat">Takrorlash</string>
  <string name="morphe_music_downloads_minimize">Kichraytirish</string>
  <string name="morphe_music_downloads_playlists">Pleylistlar</string>
  <string name="morphe_music_downloads_playlists_section">Yaratilgan pleylistlar (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Hali mahalliy pleylistlar mavjud emas</string>
  <string name="morphe_music_downloads_playlists_hide">Pleylistlarni yashirish ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Yangi pleylist</string>
  <string name="morphe_music_downloads_playlist_new_button">Yangi pleylist</string>
  <string name="morphe_music_downloads_playlist_selected">Tanlangan (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Avval qo\"shiqlarni tanlang</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Tanlovni tozalash</string>
  <string name="morphe_music_downloads_playlist_create">Pleylist yaratish</string>
  <string name="morphe_music_downloads_playlist_create_button">Yaratish</string>
```

</details>

<details>
<summary>[medium] patches/src/main/resources/addresources/values-zu-rZA/music/strings.xml — new non-allowlisted URL or IP</summary>

```
  <string name="morphe_music_downloads_shuffle">Hlanganisa</string>
  <string name="morphe_music_downloads_repeat">Phinda</string>
  <string name="morphe_music_downloads_minimize">Nciphisa</string>
  <string name="morphe_music_downloads_playlists">Uhlu lwezingoma</string>
  <string name="morphe_music_downloads_playlists_section">Uhlu lwezingoma oludalwe (%s)</string>
  <string name="morphe_music_downloads_playlists_empty">Ayikho uhlu lwezingoma lendawo okwamanje</string>
  <string name="morphe_music_downloads_playlists_hide">Fihla uhlu lwezingoma ▲</string>
  <string name="morphe_music_downloads_playlist_new">+ Uhlu lwezingoma olusha</string>
  <string name="morphe_music_downloads_playlist_new_button">Uhlu lwezingoma olusha</string>
  <string name="morphe_music_downloads_playlist_selected">Kukhethiwe (%s)</string>
  <string name="morphe_music_downloads_playlist_select_first">Khetha izingoma kuqala</string>
  <string name="morphe_music_downloads_playlist_clear_selection">Susa okukhethiwe</string>
  <string name="morphe_music_downloads_playlist_create">Dala uhlu lwezingoma</string>
  <string name="morphe_music_downloads_playlist_create_button">Dala</string>
  <string name="morphe_music_downloads_playlist_add">Yengeza ohlwini lwezingoma</string>
```

</details>

<details>
<summary>[info] patches/src/main/resources/playericons/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/swipecontrols/.DS_Store — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LrcRedProvider.java: new host https://lrc.red with previously seen HttpURLConnection, openConnection (2026-10-30)</summary>

LLM review: suspicious (0.5, exfiltration): No diff content was provided, only a reference to an earlier report and a static-analysis flag for a new host https://lrc.red using HttpURLConnection. Cannot verify what data, if any, is sent to that host versus a legitimate lyrics fetch, so malicious cannot be confirmed; unsure cases must be suspicious.

```
(see report of 2026-10-30 for the earlier half)
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/music/src/main/java/app/morphe/extension/music/patches/lyrics/requests/LrcRedProvider.java: previously seen host https://lrc.red (2026-10-30) with new HttpURLConnection, openConnection</summary>

LLM review: suspicious (0.4, exfiltration): No diff lines provided in excerpt; only reference to prior report and HttpURLConnection to https://lrc.red, which is consistent with legitimate lyrics fetching. Insufficient evidence to confirm exfiltration of sensitive data, so suspicious rather than malicious.

```
(see report of 2026-10-30 for the earlier half)
```

</details>


__
