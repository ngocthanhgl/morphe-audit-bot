# Morphe patches audit

Scans 4x daily (`0 0,6,12,18 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json. v7: every critical/high goes through the LLM judge; bans only on LLM confirmation.

## :octagonal_sign: Blacklisted — permanently untrusted

Once the LLM confirms a malicious finding the target stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`. Deterministic findings without confirmation never ban.

| :octagonal_sign: | target | since | reason | evidence |
|---|---|---|---|---|
| :octagonal_sign: | chikuwadon-nicoid-re-patches (chikuwadon/nicoid-re-patches) | 2026-10-18 | [binary strings] possible keystroke capture with network exfil: TextWatcher | reports/2026-10-18/chikuwadon-nicoid-re-patches-run01-CRIT-c8h6m1.md |

## :warning: Critical findings

| :warning: | target | file | reason | report |
|---|---|---|---|---|
| :warning: | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | [binary strings] possible keystroke capture with network exfil: TextWatcher | reports/2026-10-18/chikuwadon-nicoid-re-patches.md |
| :warning: | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/helpers.mpe (2026-10-15 then 2026-10-18): exfiltration (0.4) | reports/2026-10-18/chikuwadon-nicoid-re-patches.md |
| :warning: | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/helpers.mpe (2026-10-15 then 2026-10-18): exfiltration (0.7) | reports/2026-10-18/chikuwadon-nicoid-re-patches.md |
| :warning: | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | [llm-reviewer xingchen-agi/xing4.0-29b-a4b:free] malicious (0.9, exfiltration): helpers.mpe:10,helpers.mpe:11,helpers.mpe:12,helpers.mpe:13,helpers.mpe:14,helpers.mpe:15,helpers.mpe:16,helpers.mpe:17,helpers.mpe:18,helpers.mpe:19,helpers.mpe:20 | reports/2026-10-18/chikuwadon-nicoid-re-patches.md |
| :warning: | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/helpers.mpe (2026-10-15 then 2026-10-18): exfiltration (0.72) | reports/2026-10-18/chikuwadon-nicoid-re-patches.md |
| :warning: | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | [llm-reviewer xingchen-agi/xing4.0-29b-a4b:free] malicious (0.9, exfiltration): patches/src/main/resources/nicoid/helpers.mpe:3,patches/src/main/resources/nicoid/helpers.mpe:4,patches/src/main/resources/nicoid/helpers.mpe:12,patches/src/main/resources/nicoid/helpers.mpe:13,patches/src/main/resources/nicoid/helpers.mpe:14,patches/src/main/resources/nicoid/helpers.mpe:15,patches/src/main/resources/nicoid/helpers.mpe:16 | reports/2026-10-18/chikuwadon-nicoid-re-patches.md |
| :warning: | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/method-delta.dex | [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/method-delta.dex (2026-10-16 then 2026-10-18): exfiltration (0.65) | reports/2026-10-18/chikuwadon-nicoid-re-patches.md |
| :warning: | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/method-delta.dex | [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for chikuwadon-nicoid-re-patches/patches/src/main/resources/nicoid/method-delta.dex (2026-10-16 then 2026-10-18): exfiltration (0.72) | reports/2026-10-18/chikuwadon-nicoid-re-patches.md |

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-18 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-18/morphe-patches-run01-OK.md |
| bearinmind | 2026-10-18 | de89b20 | OK | 0 | 0 | 0 | reports/2026-10-18/bearinmind-run01-OK.md |
| d0nj | 2026-10-18 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-18/d0nj-run01-OK.md |
| piko | 2026-10-18 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-18/piko-run01-OK.md |
| piko-ig-lite | 2026-10-18 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-18/piko-ig-lite-run01-OK.md |
| piko-newx | 2026-10-18 | eafea93 | OK | 0 | 0 | 0 | reports/2026-10-18/piko-newx-run01-OK.md |
| gboard | 2026-10-18 | 976b749 | OK | 0 | 0 | 0 | reports/2026-10-18/gboard-run01-OK.md |
| hush-messenger | 2026-10-18 | 3398607 | OK | 0 | 0 | 0 | reports/2026-10-18/hush-messenger-run01-OK.md |
| hush-facebook | 2026-10-18 | b1792a6 | OK | 0 | 0 | 0 | reports/2026-10-18/hush-facebook-run01-OK.md |
| zeldris | 2026-10-18 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-18/zeldris-run01-OK.md |
| adobo | 2026-10-18 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-18/adobo-run01-OK.md |
| doom | 2026-10-18 | 36e5420 | OK | 0 | 0 | 0 | reports/2026-10-18/doom-run01-OK.md |
| 0x0day-0wl-morphe-patches | 2026-10-18 | 54db5c9 | OK | 0 | 0 | 0 | reports/2026-10-18/0x0day-0wl-morphe-patches-run01-OK.md |
| 0xtalos-365score-patches | 2026-10-18 | a0075fc | OK | 0 | 0 | 0 | reports/2026-10-18/0xtalos-365score-patches-run01-OK.md |
| abhis1n-morphe-patches | 2026-10-18 | f098a1d | OK | 0 | 0 | 0 | reports/2026-10-18/abhis1n-morphe-patches-run01-OK.md |
| adderalladmiral-psychonaut-journal-patches | 2026-10-18 | 4c4ddab | OK | 0 | 0 | 0 | reports/2026-10-18/adderalladmiral-psychonaut-journal-patches-run01-OK.md |
| adish08-morphe-patches | 2026-10-18 | 2617247 | OK | 0 | 0 | 0 | reports/2026-10-18/adish08-morphe-patches-run01-OK.md |
| ajstrick81-morphe-androidtv-patches | 2026-10-18 | 2c08361 | OK | 0 | 0 | 0 | reports/2026-10-18/ajstrick81-morphe-androidtv-patches-run01-OK.md |
| ak800i-mixplorer-patches-for-morphe | 2026-10-18 | 685a2fb | OK | 0 | 0 | 0 | reports/2026-10-18/ak800i-mixplorer-patches-for-morphe-run01-OK.md |
| akash-sriram-morphe-google-photos | 2026-10-18 | d7238d8 | OK | 0 | 0 | 0 | reports/2026-10-18/akash-sriram-morphe-google-photos-run01-OK.md |
| akshayykadam-pixel-camera | 2026-10-18 | 131c293 | OK | 0 | 0 | 0 | reports/2026-10-18/akshayykadam-pixel-camera-run01-OK.md |
| akshayykadam-pixelboard | 2026-10-18 | 0c3c93a | OK | 0 | 0 | 0 | reports/2026-10-18/akshayykadam-pixelboard-run01-OK.md |
| alalloush-xperia-1v-camera-patches | 2026-10-18 | 68b9788 | OK | 0 | 0 | 0 | reports/2026-10-18/alalloush-xperia-1v-camera-patches-run01-OK.md |
| alan7383-sofatime-patches | 2026-10-18 | 3600284 | OK | 0 | 0 | 0 | reports/2026-10-18/alan7383-sofatime-patches-run01-OK.md |
| alastor-kaneki-morphe-patches | 2026-10-18 | b99843d | OK | 0 | 0 | 0 | reports/2026-10-18/alastor-kaneki-morphe-patches-run01-OK.md |
| alexnaga-android-patches | 2026-10-18 | ccfc3c2 | OK | 0 | 0 | 0 | reports/2026-10-18/alexnaga-android-patches-run01-OK.md |
| almewty-my-morphe-patches | 2026-10-18 | 8511a65 | OK | 0 | 0 | 0 | reports/2026-10-18/almewty-my-morphe-patches-run01-OK.md |
| ameenalasady-ameen-morphe | 2026-10-18 | 61894ac | OK | 0 | 0 | 0 | reports/2026-10-18/ameenalasady-ameen-morphe-run01-OK.md |
| amitaisela-travian-morphe-patches | 2026-10-18 | c0359a9 | OK | 0 | 0 | 0 | reports/2026-10-18/amitaisela-travian-morphe-patches-run01-OK.md |
| amplerevanced-revanced-patches | 2026-10-18 | 30930ba | OK | 0 | 0 | 0 | reports/2026-10-18/amplerevanced-revanced-patches-run01-OK.md |
| andersonlucasg3-petalmaps-nonhuawei | 2026-10-18 | 5e95f36 | OK | 0 | 0 | 0 | reports/2026-10-18/andersonlucasg3-petalmaps-nonhuawei-run01-OK.md |
| andrewliang25-morphe-patches | 2026-10-18 | a35c9ac | OK | 0 | 0 | 0 | reports/2026-10-18/andrewliang25-morphe-patches-run01-OK.md |
| andronedev-morphe-patches | 2026-10-18 | e2ca1d5 | OK | 0 | 0 | 0 | reports/2026-10-18/andronedev-morphe-patches-run01-OK.md |
| ang3lo-azevedo-morphe-patches | 2026-10-18 | 7f1e793 | OK | 0 | 0 | 0 | reports/2026-10-18/ang3lo-azevedo-morphe-patches-run01-OK.md |
| angeldark92-steamlink-patches | 2026-10-18 | cf62d53 | WARN | 0 | 0 | 2 | reports/2026-10-18/angeldark92-steamlink-patches-run01-WARN-c0h0m2.md |
| anxyis-anxy-patches | 2026-10-18 | 17f4a8f | OK | 0 | 0 | 0 | reports/2026-10-18/anxyis-anxy-patches-run01-OK.md |
| arandomhooman-hoomans-morphe-patches | 2026-10-18 | 0182778 | OK | 0 | 0 | 0 | reports/2026-10-18/arandomhooman-hoomans-morphe-patches-run01-OK.md |
| arsylk-arsylk-patches | 2026-10-18 | 28d66b8 | OK | 0 | 0 | 0 | reports/2026-10-18/arsylk-arsylk-patches-run01-OK.md |
| azukisensei-aniskip-stremio | 2026-10-18 | 5da4bc3 | OK | 0 | 0 | 0 | reports/2026-10-18/azukisensei-aniskip-stremio-run01-OK.md |
| bakwudo-uyu | 2026-10-18 | a35ca59 | OK | 0 | 0 | 0 | reports/2026-10-18/bakwudo-uyu-run01-OK.md |
| bdgerszewski-morphe-patches-ihealth | 2026-10-18 | 4fc1f1d | OK | 0 | 0 | 0 | reports/2026-10-18/bdgerszewski-morphe-patches-ihealth-run01-OK.md |
| benzophury-oraimo-health-morphe-patches | 2026-10-18 | 8cf03c8 | OK | 0 | 0 | 0 | reports/2026-10-18/benzophury-oraimo-health-morphe-patches-run01-OK.md |
| bholeykabhakt-android-patches-xtra | 2026-10-18 | edbcbfb | OK | 0 | 0 | 0 | reports/2026-10-18/bholeykabhakt-android-patches-xtra-run01-OK.md |
| bigyank-morphe-patches-samsung | 2026-10-18 | a7b3347 | OK | 0 | 0 | 0 | reports/2026-10-18/bigyank-morphe-patches-samsung-run01-OK.md |
| binarymend-morphe-patches | 2026-10-18 | 9f3d71e | OK | 0 | 0 | 0 | reports/2026-10-18/binarymend-morphe-patches-run01-OK.md |
| blazeftl-ftl-patches | 2026-10-18 | 28ba017 | OK | 0 | 0 | 0 | reports/2026-10-18/blazeftl-ftl-patches-run01-OK.md |
| blazko381-luna-tv-device-comp-patch-and-no-lag | 2026-10-18 | error | ERROR | 0 | 0 | 0 | reports/2026-10-18/blazko381-luna-tv-device-comp-patch-and-no-lag.md |
| braintropy-braintropy-patches | 2026-10-18 | b7788d2 | OK | 0 | 0 | 0 | reports/2026-10-18/braintropy-braintropy-patches-run01-OK.md |
| brosssh-morphe-patches | 2026-10-18 | de158a4 | OK | 0 | 0 | 0 | reports/2026-10-18/brosssh-morphe-patches-run01-OK.md |
| browzomje-browzomje-patches | 2026-10-18 | 5fa5c61 | OK | 0 | 0 | 0 | reports/2026-10-18/browzomje-browzomje-patches-run01-OK.md |
| bruddaa-bruddas-morphe-patches | 2026-10-18 | f57e95b | OK | 0 | 0 | 0 | reports/2026-10-18/bruddaa-bruddas-morphe-patches-run01-OK.md |
| bufferk-morphe-patches | 2026-10-18 | 5a3241f | OK | 0 | 0 | 0 | reports/2026-10-18/bufferk-morphe-patches-run01-OK.md |
| bugg4-bugg4s-patches | 2026-10-18 | 18e44d0 | OK | 0 | 0 | 0 | reports/2026-10-18/bugg4-bugg4s-patches-run01-OK.md |
| byehi98-okish-morphe-patches | 2026-10-18 | 0b35411 | OK | 0 | 0 | 0 | reports/2026-10-18/byehi98-okish-morphe-patches-run01-OK.md |
| canh0chua-morphe-patches | 2026-10-18 | 6ec941f | OK | 0 | 0 | 0 | reports/2026-10-18/canh0chua-morphe-patches-run01-OK.md |
| canic-twitch-morphe-patch | 2026-10-18 | d06e2b9 | OK | 0 | 0 | 0 | reports/2026-10-18/canic-twitch-morphe-patch-run01-OK.md |
| casketpizza-morphe-waze-system-tts | 2026-10-18 | 14ad480 | OK | 0 | 0 | 0 | reports/2026-10-18/casketpizza-morphe-waze-system-tts-run01-OK.md |
| catsmoker-anime-witcher-patches | 2026-10-18 | 2cf90b5 | OK | 0 | 0 | 0 | reports/2026-10-18/catsmoker-anime-witcher-patches-run01-OK.md |
| cesbar-zpatches | 2026-10-18 | 883ccfe | OK | 0 | 0 | 0 | reports/2026-10-18/cesbar-zpatches-run01-OK.md |
| ch3thanhs-stylus | 2026-10-18 | 48e7fdf | OK | 0 | 0 | 0 | reports/2026-10-18/ch3thanhs-stylus-run01-OK.md |
| chicco-carone-morphe-patches-chicco | 2026-10-18 | ef21ab6 | OK | 0 | 0 | 0 | reports/2026-10-18/chicco-carone-morphe-patches-chicco-run01-OK.md |
| chikuwadon-nicoid-re-patches | 2026-10-18 | 3a91ab4 | BANNED | 8 | 6 | 1 | reports/2026-10-18/chikuwadon-nicoid-re-patches-run01-CRIT-c8h6m1.md |
| chukfinley-tidal-patches | 2026-10-18 | 178bc02 | OK | 0 | 0 | 0 | reports/2026-10-18/chukfinley-tidal-patches-run01-OK.md |
| commit-regrets-morphe-youtube-vr-patches | 2026-10-18 | 611e9f4 | OK | 0 | 0 | 0 | reports/2026-10-18/commit-regrets-morphe-youtube-vr-patches-run01-OK.md |
| comoestaisamigos-ck-zombies-morphe-patches | 2026-10-18 | 749ba1e | OK | 0 | 0 | 0 | reports/2026-10-18/comoestaisamigos-ck-zombies-morphe-patches-run01-OK.md |
| csagataj2-morphe-patches | 2026-10-18 | 8a20739 | OK | 0 | 0 | 0 | reports/2026-10-18/csagataj2-morphe-patches-run01-OK.md |
| dan1eltheman1el-morphe-patches | 2026-10-18 | ec310b5 | OK | 0 | 0 | 0 | reports/2026-10-18/dan1eltheman1el-morphe-patches-run01-OK.md |
| dawidd612-dudeks-morphe-patches | 2026-10-18 | 2298baa | OK | 0 | 0 | 0 | reports/2026-10-18/dawidd612-dudeks-morphe-patches-run01-OK.md |
| debakarr-morphe-patches | 2026-10-18 | b3c23c6 | OK | 0 | 0 | 0 | reports/2026-10-18/debakarr-morphe-patches-run01-OK.md |
| dh6k-morphe-patches | 2026-10-18 | 38471b9 | OK | 0 | 0 | 0 | reports/2026-10-18/dh6k-morphe-patches-run01-OK.md |
| digitalpals-johns-morphe-patches | 2026-10-18 | 3576079 | OK | 0 | 0 | 0 | reports/2026-10-18/digitalpals-johns-morphe-patches-run01-OK.md |
| docbt-patched-up | 2026-10-18 | 28afcb4 | OK | 0 | 0 | 0 | reports/2026-10-18/docbt-patched-up-run01-OK.md |
| dowjames-morphe-patches | 2026-10-18 | ea93ea2 | OK | 0 | 0 | 0 | reports/2026-10-18/dowjames-morphe-patches-run01-OK.md |
| drnhzn-supreme-patches | 2026-10-18 | 1123dd8 | OK | 0 | 0 | 0 | reports/2026-10-18/drnhzn-supreme-patches-run01-OK.md |
| drosocode-morphe-patches | 2026-10-18 | c88bf88 | OK | 0 | 0 | 0 | reports/2026-10-18/drosocode-morphe-patches-run01-OK.md |
| dumb-software-t2c-app-patch-morphe | 2026-10-18 | 2dd8d1d | OK | 0 | 0 | 0 | reports/2026-10-18/dumb-software-t2c-app-patch-morphe-run01-OK.md |
| dunecache-oyasumi-patches | 2026-10-18 | f419de5 | OK | 0 | 0 | 0 | reports/2026-10-18/dunecache-oyasumi-patches-run01-OK.md |
| durgesh0505-chiggi_morphe_patches | 2026-10-18 | 5f0bb12 | WARN | 0 | 0 | 5 | reports/2026-10-18/durgesh0505-chiggi_morphe_patches-run01-WARN-c0h0m5.md |
| early.egg3707-ee-morphe-patches | 2026-10-18 | a9deb3a | OK | 0 | 0 | 0 | reports/2026-10-18/early.egg3707-ee-morphe-patches-run01-OK.md |
| educal72-educal-patches | 2026-10-18 | 67ea6da | OK | 0 | 0 | 0 | reports/2026-10-18/educal72-educal-patches-run01-OK.md |
| entree3k-morning-entree-patches | 2026-10-18 | 9e4c200 | OK | 0 | 0 | 0 | reports/2026-10-18/entree3k-morning-entree-patches-run01-OK.md |
| epxec-android-patches | 2026-10-18 | e28b946 | OK | 0 | 0 | 0 | reports/2026-10-18/epxec-android-patches-run01-OK.md |
| error404rt-anixart-patches | 2026-10-18 | 5b9e346 | OK | 0 | 0 | 0 | reports/2026-10-18/error404rt-anixart-patches-run01-OK.md |
| ethan-manny-spotify-tv-crossfade | 2026-10-18 | 991592f | OK | 0 | 0 | 0 | reports/2026-10-18/ethan-manny-spotify-tv-crossfade-run01-OK.md |
| ethanm6-letterboxd-stremio-morphe-patch | 2026-10-18 | f2800e7 | OK | 0 | 0 | 0 | reports/2026-10-18/ethanm6-letterboxd-stremio-morphe-patch-run01-OK.md |
| ez4rk0-morphe-patches | 2026-10-18 | 1e442bd | OK | 0 | 0 | 0 | reports/2026-10-18/ez4rk0-morphe-patches-run01-OK.md |
| forsigh-waze-patches | 2026-10-18 | 7d3429a | OK | 0 | 0 | 0 | reports/2026-10-18/forsigh-waze-patches-run01-OK.md |
| foxxoowo-foxxo-patches | 2026-10-18 | ada8498 | OK | 0 | 0 | 0 | reports/2026-10-18/foxxoowo-foxxo-patches-run01-OK.md |
| franticg33k-morphe-patches | 2026-10-18 | c0d9f61 | OK | 0 | 0 | 0 | reports/2026-10-18/franticg33k-morphe-patches-run01-OK.md |
| freeman022026-rustore-privacy-patches | 2026-10-18 | 54a810e | OK | 0 | 0 | 0 | reports/2026-10-18/freeman022026-rustore-privacy-patches-run01-OK.md |
| gamer92000-pixelcamera-patches | 2026-10-18 | 8d45074 | OK | 0 | 0 | 0 | reports/2026-10-18/gamer92000-pixelcamera-patches-run01-OK.md |
| ggyasin-ggyasin-morphe-patches | 2026-10-18 | 9294ac5 | OK | 0 | 0 | 0 | reports/2026-10-18/ggyasin-ggyasin-morphe-patches-run01-OK.md |
| giaaaacomo-nifty-patches-selection | 2026-10-18 | 0e0f42f | OK | 0 | 0 | 0 | reports/2026-10-18/giaaaacomo-nifty-patches-selection-run01-OK.md |
| gitgitro-gitro-morphe-patches | 2026-10-18 | 277365d | OK | 0 | 0 | 0 | reports/2026-10-18/gitgitro-gitro-morphe-patches-run01-OK.md |
| goldrift-morphe-patches | 2026-10-18 | 06859aa | OK | 0 | 0 | 0 | reports/2026-10-18/goldrift-morphe-patches-run01-OK.md |
| hajs110208-morphe-patches | 2026-10-18 | db15d53 | OK | 0 | 0 | 0 | reports/2026-10-18/hajs110208-morphe-patches-run01-OK.md |
| hammadhassan94-ary-live | 2026-10-18 | 965e6ec | OK | 0 | 0 | 0 | reports/2026-10-18/hammadhassan94-ary-live-run01-OK.md |
| hashtagbasit-aimal-patches | 2026-10-18 | 2cea794 | OK | 0 | 0 | 0 | reports/2026-10-18/hashtagbasit-aimal-patches-run01-OK.md |
| helllord77-media-patches | 2026-10-18 | 681354c | OK | 0 | 0 | 0 | reports/2026-10-18/helllord77-media-patches-run01-OK.md |
| hellveticastandard-hellveticapatches | 2026-10-18 | 1b605a2 | OK | 0 | 0 | 0 | reports/2026-10-18/hellveticastandard-hellveticapatches-run01-OK.md |
| heval99-heval-morphe-patches | 2026-10-18 | f982775 | OK | 0 | 0 | 0 | reports/2026-10-18/heval99-heval-morphe-patches-run01-OK.md |
| heyymichii-michii-patches | 2026-10-18 | 18edc77 | OK | 0 | 0 | 0 | reports/2026-10-18/heyymichii-michii-patches-run01-OK.md |
| hhawkinsau-hh-patches | 2026-10-18 | f7d89d1 | OK | 0 | 0 | 0 | reports/2026-10-18/hhawkinsau-hh-patches-run01-OK.md |
| hiosdra-morphe-patches | 2026-10-18 | 8180c40 | OK | 0 | 0 | 0 | reports/2026-10-18/hiosdra-morphe-patches-run01-OK.md |
| homelander11-beetle-patches | 2026-10-18 | 9000692 | OK | 0 | 0 | 0 | reports/2026-10-18/homelander11-beetle-patches-run01-OK.md |
| hoo-dles-morphe-patches | 2026-10-18 | e9c9426 | OK | 0 | 0 | 0 | reports/2026-10-18/hoo-dles-morphe-patches-run01-OK.md |
| hslightsteel-slight-patches | 2026-10-18 | 489a227 | OK | 0 | 0 | 0 | reports/2026-10-18/hslightsteel-slight-patches-run01-OK.md |
| hu-liberator-patches | 2026-10-18 | 6936b29 | OK | 0 | 0 | 0 | reports/2026-10-18/hu-liberator-patches-run01-OK.md |
| hvq-eksi-morphe | 2026-10-18 | 570abad | OK | 0 | 0 | 0 | reports/2026-10-18/hvq-eksi-morphe-run01-OK.md |
| hxreborn-morphe-patches | 2026-10-18 | f657f5a | OK | 0 | 0 | 0 | reports/2026-10-18/hxreborn-morphe-patches-run01-OK.md |
| icysymmetra-tiktok-patches-for-morphe | 2026-10-18 | 3c376ba | OK | 0 | 0 | 0 | reports/2026-10-18/icysymmetra-tiktok-patches-for-morphe-run01-OK.md |
| ihatenodejs-aidans-patches | 2026-10-18 | 8b39fb6 | RED | 0 | 2 | 4 | reports/2026-10-18/ihatenodejs-aidans-patches-run01-RED-c0h2m4.md |
| ilikeadofai-vocacolle-morphe-patches | 2026-10-18 | c63d574 | OK | 0 | 0 | 0 | reports/2026-10-18/ilikeadofai-vocacolle-morphe-patches-run01-OK.md |
| imnoammm-noams-morphe-patches | 2026-10-18 | 49b62e4 | OK | 0 | 0 | 0 | reports/2026-10-18/imnoammm-noams-morphe-patches-run01-OK.md |
| imxeren-mix-patches | 2026-10-18 | fcff32f | OK | 0 | 0 | 0 | reports/2026-10-18/imxeren-mix-patches-run01-OK.md |
| ispacecase-patchweaver | 2026-10-18 | 0d6517b | OK | 0 | 0 | 0 | reports/2026-10-18/ispacecase-patchweaver-run01-OK.md |
| isuruhg-cricinfo-tweaks | 2026-10-18 | caca596 | OK | 0 | 0 | 0 | reports/2026-10-18/isuruhg-cricinfo-tweaks-run01-OK.md |
| jackblk-morphe-patches | 2026-10-18 | 53318f9 | OK | 0 | 0 | 0 | reports/2026-10-18/jackblk-morphe-patches-run01-OK.md |
| jacksonjones2003-immersive-keyboard-patches | 2026-10-18 | 97e0811 | OK | 0 | 0 | 0 | reports/2026-10-18/jacksonjones2003-immersive-keyboard-patches-run01-OK.md |
| jacksonjones2003-qqmusic-english-patches | 2026-10-18 | 49b7b00 | OK | 0 | 0 | 0 | reports/2026-10-18/jacksonjones2003-qqmusic-english-patches-run01-OK.md |
| jacobplaysgames-crimeradar-morphe-patches | 2026-10-18 | 4668b10 | OK | 0 | 0 | 0 | reports/2026-10-18/jacobplaysgames-crimeradar-morphe-patches-run01-OK.md |
| jaredcat-morphe-patches | 2026-10-18 | b29188a | OK | 0 | 0 | 0 | reports/2026-10-18/jaredcat-morphe-patches-run01-OK.md |
| jaydenluuuu-sys-line-font-patches | 2026-10-18 | 47596f7 | OK | 0 | 0 | 0 | reports/2026-10-18/jaydenluuuu-sys-line-font-patches-run01-OK.md |
| jcapretta-chessable-patches | 2026-10-18 | aa297df | OK | 0 | 0 | 0 | reports/2026-10-18/jcapretta-chessable-patches-run01-OK.md |
| jeff-tek-jeff-patches | 2026-10-18 | e195faf | OK | 0 | 0 | 0 | reports/2026-10-18/jeff-tek-jeff-patches-run01-OK.md |
| jonnyvr1-morph-patches | 2026-10-18 | 9a8c562 | OK | 0 | 0 | 0 | reports/2026-10-18/jonnyvr1-morph-patches-run01-OK.md |
| joristdh-platypatch | 2026-10-18 | 217afb1 | OK | 0 | 0 | 0 | reports/2026-10-18/joristdh-platypatch-run01-OK.md |
| jrddupont-discord-patches | 2026-10-18 | e3b15da | OK | 0 | 0 | 0 | reports/2026-10-18/jrddupont-discord-patches-run01-OK.md |
| jz6-flexboard | 2026-10-18 | ce1c16c | OK | 0 | 0 | 0 | reports/2026-10-18/jz6-flexboard-run01-OK.md |
| k8r8to-kizu-morphe-patches | 2026-10-18 | 78be324 | OK | 0 | 0 | 0 | reports/2026-10-18/k8r8to-kizu-morphe-patches-run01-OK.md |
| kanup4m-morphe-patches | 2026-10-18 | 959edc3 | OK | 0 | 0 | 0 | reports/2026-10-18/kanup4m-morphe-patches-run01-OK.md |
| kecerim24-morphe-patches | 2026-10-18 | d5e0e02 | OK | 0 | 0 | 0 | reports/2026-10-18/kecerim24-morphe-patches-run01-OK.md |
| kero309x-anghamiplus-patches | 2026-10-18 | 67138d7 | OK | 0 | 0 | 0 | reports/2026-10-18/kero309x-anghamiplus-patches-run01-OK.md |
| kim20598-hakim-morphe-patches | 2026-10-18 | ee16906 | OK | 0 | 0 | 0 | reports/2026-10-18/kim20598-hakim-morphe-patches-run01-OK.md |
| kiraio-moe-lain-patches | 2026-10-18 | 2b90e26 | OK | 0 | 0 | 0 | reports/2026-10-18/kiraio-moe-lain-patches-run01-OK.md |
| kmru-nai64extrapatches | 2026-10-18 | cf40997 | OK | 0 | 0 | 0 | reports/2026-10-18/kmru-nai64extrapatches-run01-OK.md |
| kmru-nai64patches | 2026-10-18 | 59c25e6 | OK | 0 | 0 | 0 | reports/2026-10-18/kmru-nai64patches-run01-OK.md |
| kolaron-morphe-patches | 2026-10-18 | e1d60ca | OK | 0 | 0 | 0 | reports/2026-10-18/kolaron-morphe-patches-run01-OK.md |
| kondratjev-morphe-patches | 2026-10-18 | ff34863 | OK | 0 | 0 | 0 | reports/2026-10-18/kondratjev-morphe-patches-run01-OK.md |
| kuchingneko28-ipusnas-patches | 2026-10-18 | 32c1c40 | OK | 0 | 0 | 0 | reports/2026-10-18/kuchingneko28-ipusnas-patches-run01-OK.md |
| kuntal-devrat-diskwala-patches | 2026-10-18 | 86c9e9c | OK | 0 | 0 | 0 | reports/2026-10-18/kuntal-devrat-diskwala-patches-run01-OK.md |
| kveld9-kveld-extra-morphe-patches | 2026-10-18 | 1420a67 | SHALLOW | 0 | 0 | 0 | reports/2026-10-18/kveld9-kveld-extra-morphe-patches-run01-OK.md |
| kveld9-kveld-morphe-patches | 2026-10-18 | f40f440 | SHALLOW | 0 | 0 | 0 | reports/2026-10-18/kveld9-kveld-morphe-patches-run01-OK.md |
| lablazer-morphe-patches | 2026-10-18 | 49f9168 | OK | 0 | 0 | 0 | reports/2026-10-18/lablazer-morphe-patches-run01-OK.md |
| lakakareal-lakakashitpatches | 2026-10-18 | 8d24794 | OK | 0 | 0 | 0 | reports/2026-10-18/lakakareal-lakakashitpatches-run01-OK.md |
| lchanc3-morphe-patches | 2026-10-18 | f420a03 | OK | 0 | 0 | 0 | reports/2026-10-18/lchanc3-morphe-patches-run01-OK.md |
| legendsciber-morphe-patches | 2026-10-18 | 88f7fa0 | OK | 0 | 0 | 0 | reports/2026-10-18/legendsciber-morphe-patches-run01-OK.md |
| limelimes-cbc-patches | 2026-10-18 | 704d39a | OK | 0 | 0 | 0 | reports/2026-10-18/limelimes-cbc-patches-run01-OK.md |
| liongalahad-liongalahad-nuviotv-morphe-patches | 2026-10-18 | 2450623 | OK | 0 | 0 | 0 | reports/2026-10-18/liongalahad-liongalahad-nuviotv-morphe-patches-run01-OK.md |
| liongalahad-liongalahad-stremio-morphe-patches | 2026-10-18 | b207ce5 | OK | 0 | 0 | 0 | reports/2026-10-18/liongalahad-liongalahad-stremio-morphe-patches-run01-OK.md |
| lockhart07-morphe-patches | 2026-10-18 | 3f23440 | OK | 0 | 0 | 0 | reports/2026-10-18/lockhart07-morphe-patches-run01-OK.md |
| logm1lo-logm1lo-patches | 2026-10-18 | 1c31a4b | OK | 0 | 0 | 0 | reports/2026-10-18/logm1lo-logm1lo-patches-run01-OK.md |
| lootdev78-psylos-morphe-patches | 2026-10-18 | 0eac0c5 | OK | 0 | 0 | 0 | reports/2026-10-18/lootdev78-psylos-morphe-patches-run01-OK.md |
| madhu-gowda6-atharv-patches | 2026-10-18 | 79cab40 | OK | 0 | 0 | 0 | reports/2026-10-18/madhu-gowda6-atharv-patches-run01-OK.md |
| mich111discord-mightymichs-patches | 2026-10-18 | 0fc8fe4 | OK | 0 | 0 | 0 | reports/2026-10-18/mich111discord-mightymichs-patches-run01-OK.md |
| miguelninja19-miguel-morphe-patches | 2026-10-18 | bc34838 | OK | 0 | 0 | 0 | reports/2026-10-18/miguelninja19-miguel-morphe-patches-run01-OK.md |
| mohamedamrnady-anghami-patches | 2026-10-18 | 38d12c4 | OK | 0 | 0 | 0 | reports/2026-10-18/mohamedamrnady-anghami-patches-run01-OK.md |
| mubelotix-my-morphe-patches | 2026-10-18 | 8b6f75e | OK | 0 | 0 | 0 | reports/2026-10-18/mubelotix-my-morphe-patches-run01-OK.md |
| mvaishak-letterboxd-morphe-patches | 2026-10-18 | b4658ef | OK | 0 | 0 | 0 | reports/2026-10-18/mvaishak-letterboxd-morphe-patches-run01-OK.md |
| mxkrgt-dbtcoach-morphe-patches | 2026-10-18 | 873f289 | OK | 0 | 0 | 0 | reports/2026-10-18/mxkrgt-dbtcoach-morphe-patches-run01-OK.md |
| nagol12344-patch | 2026-10-18 | b88c4e6 | OK | 0 | 0 | 0 | reports/2026-10-18/nagol12344-patch-run01-OK.md |
| nekogryphou-gryphous-morphe-patches | 2026-10-18 | 4662789 | OK | 0 | 0 | 0 | reports/2026-10-18/nekogryphou-gryphous-morphe-patches-run01-OK.md |
| newuser7171-telegram-morphe-patches- | 2026-10-18 | 289893a | OK | 0 | 0 | 0 | reports/2026-10-18/newuser7171-telegram-morphe-patches--run01-OK.md |
| nickcomua-airofit-pro2-morphe-patches | 2026-10-18 | 15bcaf0 | OK | 0 | 0 | 0 | reports/2026-10-18/nickcomua-airofit-pro2-morphe-patches-run01-OK.md |
| ns1207-morphe-patches-template | 2026-10-18 | fa856e5 | OK | 0 | 0 | 0 | reports/2026-10-18/ns1207-morphe-patches-template-run01-OK.md |
| nullwaypoint-morphe-patches | 2026-10-18 | 107730d | OK | 0 | 0 | 0 | reports/2026-10-18/nullwaypoint-morphe-patches-run01-OK.md |
| o0b-morphe-patches | 2026-10-18 | 5859a62 | OK | 0 | 0 | 0 | reports/2026-10-18/o0b-morphe-patches-run01-OK.md |
| okazakee-iptv-morphe-patches | 2026-10-18 | bb2a59b | OK | 0 | 0 | 0 | reports/2026-10-18/okazakee-iptv-morphe-patches-run01-OK.md |
| osirisad-teamsnap-patches | 2026-10-18 | bb52277 | OK | 0 | 0 | 0 | reports/2026-10-18/osirisad-teamsnap-patches-run01-OK.md |
| paresh-maheshwari-paresh-patches | 2026-10-18 | 84b5e5b | OK | 0 | 0 | 0 | reports/2026-10-18/paresh-maheshwari-paresh-patches-run01-OK.md |
| phamleduy04-duy-patches | 2026-10-18 | 9808547 | OK | 0 | 0 | 0 | reports/2026-10-18/phamleduy04-duy-patches-run01-OK.md |
| picarica-my-moprhe-patches | 2026-10-18 | 3ffd631 | OK | 0 | 0 | 0 | reports/2026-10-18/picarica-my-moprhe-patches-run01-OK.md |
| pigfoot-morphe-patches | 2026-10-18 | 12cebdd | OK | 0 | 0 | 0 | reports/2026-10-18/pigfoot-morphe-patches-run01-OK.md |
| pixelpusher247-morphe-patches | 2026-10-18 | 0d6780b | OK | 0 | 0 | 0 | reports/2026-10-18/pixelpusher247-morphe-patches-run01-OK.md |
| plyrs1-morphe-patches | 2026-10-18 | c59af6e | OK | 0 | 0 | 0 | reports/2026-10-18/plyrs1-morphe-patches-run01-OK.md |
| polka-bear-morphe-patches | 2026-10-18 | ec4905f | OK | 0 | 0 | 0 | reports/2026-10-18/polka-bear-morphe-patches-run01-OK.md |
| prathxmop-prathxm-patches | 2026-10-18 | 011e2ae | OK | 0 | 0 | 0 | reports/2026-10-18/prathxmop-prathxm-patches-run01-OK.md |
| pyflat-jr-morphe-patches | 2026-10-18 | c8a381e | OK | 0 | 0 | 0 | reports/2026-10-18/pyflat-jr-morphe-patches-run01-OK.md |
| quantavil-edge-morphe-patches | 2026-10-18 | 6b99b3a | OK | 0 | 0 | 0 | reports/2026-10-18/quantavil-edge-morphe-patches-run01-OK.md |
| r2beeaton-walmart-morphe | 2026-10-18 | 25ea2dd | OK | 0 | 0 | 0 | reports/2026-10-18/r2beeaton-walmart-morphe-run01-OK.md |
| rabehx-rabehx-patches | 2026-10-18 | c3782a0 | OK | 0 | 0 | 0 | reports/2026-10-18/rabehx-rabehx-patches-run01-OK.md |
| rabilrbl-fluffy-patches | 2026-10-18 | 0661ed8 | OK | 0 | 0 | 0 | reports/2026-10-18/rabilrbl-fluffy-patches-run01-OK.md |
| rafag00-morphe-patches | 2026-10-18 | dfd3325 | OK | 0 | 0 | 0 | reports/2026-10-18/rafag00-morphe-patches-run01-OK.md |
| rahaaatul-morphe-patches | 2026-10-18 | be75d70 | OK | 0 | 0 | 0 | reports/2026-10-18/rahaaatul-morphe-patches-run01-OK.md |
| realcyberwash-max-patches | 2026-10-18 | 712bae3 | OK | 0 | 0 | 0 | reports/2026-10-18/realcyberwash-max-patches-run01-OK.md |
| reemx-morphe-me-patches | 2026-10-18 | eaa9e3c | OK | 0 | 0 | 0 | reports/2026-10-18/reemx-morphe-me-patches-run01-OK.md |
| rhubarbshoelaces-morphe-patches | 2026-10-18 | e2a89cc | OK | 0 | 0 | 0 | reports/2026-10-18/rhubarbshoelaces-morphe-patches-run01-OK.md |
| rikodev-morphed-pl | 2026-10-18 | 94f6e07 | OK | 0 | 0 | 0 | reports/2026-10-18/rikodev-morphed-pl-run01-OK.md |
| rikunode-pupil-swipe-disable-patches | 2026-10-18 | 1c30da1 | OK | 0 | 0 | 0 | reports/2026-10-18/rikunode-pupil-swipe-disable-patches-run01-OK.md |
| riky-dev-morphe-patches | 2026-10-18 | 3f96c82 | OK | 0 | 0 | 0 | reports/2026-10-18/riky-dev-morphe-patches-run01-OK.md |
| ripthulhu-morphe-google-patches | 2026-10-18 | d9769cf | OK | 0 | 0 | 0 | reports/2026-10-18/ripthulhu-morphe-google-patches-run01-OK.md |
| rjbiermann-brave-waffle | 2026-10-18 | 3bf055a | OK | 0 | 0 | 0 | reports/2026-10-18/rjbiermann-brave-waffle-run01-OK.md |
| rookieenough-de-vanced | 2026-10-18 | 5cf78f1 | OK | 0 | 0 | 0 | reports/2026-10-18/rookieenough-de-vanced-run01-OK.md |
| roundsalmon4-morphe-patches-template | 2026-10-18 | f8c95c8 | OK | 0 | 0 | 0 | reports/2026-10-18/roundsalmon4-morphe-patches-template-run01-OK.md |
| rushiranpise-ri-vanced-universal-morphe-patches | 2026-10-18 | b7c4702 | OK | 0 | 0 | 0 | reports/2026-10-18/rushiranpise-ri-vanced-universal-morphe-patches-run01-OK.md |
| ryykitty-twitch-patched | 2026-10-18 | 11d5b95 | OK | 0 | 0 | 0 | reports/2026-10-18/ryykitty-twitch-patched-run01-OK.md |
| sailhighsea-sailhighsea-patches | 2026-10-18 | 613d92f | OK | 0 | 0 | 0 | reports/2026-10-18/sailhighsea-sailhighsea-patches-run01-OK.md |
| santodan-santodan-patches | 2026-10-18 | 3443b75 | OK | 0 | 0 | 0 | reports/2026-10-18/santodan-santodan-patches-run01-OK.md |
| sapitosucio-froggomorphepatches | 2026-10-18 | fcada9f | OK | 0 | 0 | 0 | reports/2026-10-18/sapitosucio-froggomorphepatches-run01-OK.md |
| sfehhrths-ekispert-morphe-patches | 2026-10-18 | 0963f07 | OK | 0 | 0 | 0 | reports/2026-10-18/sfehhrths-ekispert-morphe-patches-run01-OK.md |
| shaun-the-sheep-patches-morphe-patches | 2026-10-18 | 46d09a0 | OK | 0 | 0 | 0 | reports/2026-10-18/shaun-the-sheep-patches-morphe-patches-run01-OK.md |
| shini-cell-shini-morphe | 2026-10-18 | 00c4645 | OK | 0 | 0 | 0 | reports/2026-10-18/shini-cell-shini-morphe-run01-OK.md |
| shuhaibnc-morphe-patches | 2026-10-18 | be74e0b | OK | 0 | 0 | 0 | reports/2026-10-18/shuhaibnc-morphe-patches-run01-OK.md |
| snowyegret23-morphe-patches | 2026-10-18 | 93a8f4b | OK | 0 | 0 | 0 | reports/2026-10-18/snowyegret23-morphe-patches-run01-OK.md |
| soubryan-pinterest-morphed | 2026-10-18 | a33eb3a | OK | 0 | 0 | 0 | reports/2026-10-18/soubryan-pinterest-morphed-run01-OK.md |
| spookyexe-morphe-patches | 2026-10-18 | 32b7427 | OK | 0 | 0 | 0 | reports/2026-10-18/spookyexe-morphe-patches-run01-OK.md |
| sqzass-patches | 2026-10-18 | bbbafa5 | OK | 0 | 0 | 0 | reports/2026-10-18/sqzass-patches-run01-OK.md |
| subenoeva-roadsync-patches | 2026-10-18 | b66962d | OK | 0 | 0 | 0 | reports/2026-10-18/subenoeva-roadsync-patches-run01-OK.md |
| sudashiii-servus-patches | 2026-10-18 | 9e23e94 | OK | 0 | 0 | 0 | reports/2026-10-18/sudashiii-servus-patches-run01-OK.md |
| supperelias2-sbs-morphe-patches | 2026-10-18 | 6c3554a | OK | 0 | 0 | 0 | reports/2026-10-18/supperelias2-sbs-morphe-patches-run01-OK.md |
| supperelias2-sbs-tv-morphe-patches | 2026-10-18 | 405979d | OK | 0 | 0 | 0 | reports/2026-10-18/supperelias2-sbs-tv-morphe-patches-run01-OK.md |
| sushruth-imgur-patches | 2026-10-18 | 9c0f7da | OK | 0 | 0 | 0 | reports/2026-10-18/sushruth-imgur-patches-run01-OK.md |
| sysadmindoc-hushfeed | 2026-10-18 | 6cc7640 | WARN | 0 | 0 | 1 | reports/2026-10-18/sysadmindoc-hushfeed-run01-WARN-c0h0m1.md |
| sysadmindoc-hushgram | 2026-10-18 | 6343e8c | OK | 0 | 0 | 0 | reports/2026-10-18/sysadmindoc-hushgram-run01-OK.md |
| sysadmindoc-hushpinterest | 2026-10-18 | f60c548 | OK | 0 | 0 | 0 | reports/2026-10-18/sysadmindoc-hushpinterest-run01-OK.md |
| sysadmindoc-hushtelegram | 2026-10-18 | 7019a0b | OK | 0 | 0 | 0 | reports/2026-10-18/sysadmindoc-hushtelegram-run01-OK.md |
| sysadmindoc-hushthreads | 2026-10-18 | 40bd85f | OK | 0 | 0 | 0 | reports/2026-10-18/sysadmindoc-hushthreads-run01-OK.md |
| sysadmindoc-hushtumblr | 2026-10-18 | c57c320 | OK | 0 | 0 | 0 | reports/2026-10-18/sysadmindoc-hushtumblr-run01-OK.md |
| tachibana-shin-morphe-patches | 2026-10-18 | f4cd950 | OK | 0 | 0 | 0 | reports/2026-10-18/tachibana-shin-morphe-patches-run01-OK.md |
| testiwy268-morphe-patches | 2026-10-18 | 4ddca00 | OK | 0 | 0 | 0 | reports/2026-10-18/testiwy268-morphe-patches-run01-OK.md |
| theabhishekbhujang-morphe-patches | 2026-10-18 | ad34256 | OK | 0 | 0 | 0 | reports/2026-10-18/theabhishekbhujang-morphe-patches-run01-OK.md |
| thegibbonn-morphe-patches-anilili | 2026-10-18 | f7f35ac | OK | 0 | 0 | 0 | reports/2026-10-18/thegibbonn-morphe-patches-anilili-run01-OK.md |
| thewanwan-bestapp | 2026-10-18 | 2f28eda | OK | 0 | 0 | 0 | reports/2026-10-18/thewanwan-bestapp-run01-OK.md |
| tiaruebar1024-tiaruebar-patches | 2026-10-18 | 2bb3747 | OK | 0 | 0 | 0 | reports/2026-10-18/tiaruebar1024-tiaruebar-patches-run01-OK.md |
| timbuckrue-nyt-games-vrr-patch | 2026-10-18 | 1765519 | OK | 0 | 0 | 0 | reports/2026-10-18/timbuckrue-nyt-games-vrr-patch-run01-OK.md |
| torbenstriegel-morphe-patches-custom | 2026-10-18 | a1d1b53 | OK | 0 | 0 | 0 | reports/2026-10-18/torbenstriegel-morphe-patches-custom-run01-OK.md |
| tornillo2-movistar-block-ads-morphe | 2026-10-18 | 92c9a84 | OK | 0 | 0 | 0 | reports/2026-10-18/tornillo2-movistar-block-ads-morphe-run01-OK.md |
| totsiaw-proxma-patches | 2026-10-18 | 02bd868 | SHALLOW | 0 | 0 | 0 | reports/2026-10-18/totsiaw-proxma-patches-run01-OK.md |
| unkybadtouch-plex-morphe-patches | 2026-10-18 | 216d2eb | OK | 0 | 0 | 0 | reports/2026-10-18/unkybadtouch-plex-morphe-patches-run01-OK.md |
| v4n1x-morphe-patches | 2026-10-18 | 40ef3ad | OK | 0 | 0 | 0 | reports/2026-10-18/v4n1x-morphe-patches-run01-OK.md |
| venusisjaded-venus-patches | 2026-10-18 | 0b01393 | OK | 0 | 0 | 0 | reports/2026-10-18/venusisjaded-venus-patches-run01-OK.md |
| vipinvip-railone-patches | 2026-10-18 | a9ccf13 | OK | 0 | 0 | 0 | reports/2026-10-18/vipinvip-railone-patches-run01-OK.md |
| virzak-morphe-patches | 2026-10-18 | e39e88c | OK | 0 | 0 | 0 | reports/2026-10-18/virzak-morphe-patches-run01-OK.md |
| waggbr-wagg13patch_morphe | 2026-10-18 | 9906263 | OK | 0 | 0 | 0 | reports/2026-10-18/waggbr-wagg13patch_morphe-run01-OK.md |
| wchill-patcheddit | 2026-10-18 | 445bcb0 | OK | 0 | 0 | 0 | reports/2026-10-18/wchill-patcheddit-run01-OK.md |
| wzse-aapam-patches | 2026-10-18 | 34b20c0 | OK | 0 | 0 | 0 | reports/2026-10-18/wzse-aapam-patches-run01-OK.md |
| xhehab-xhehab-patches | 2026-10-18 | be2ec1b | OK | 0 | 0 | 0 | reports/2026-10-18/xhehab-xhehab-patches-run01-OK.md |
| xob0t-morphe-patches | 2026-10-18 | e3aba20 | OK | 0 | 0 | 0 | reports/2026-10-18/xob0t-morphe-patches-run01-OK.md |
| xtapped-morphe-patches | 2026-10-18 | 76625a0 | OK | 0 | 0 | 0 | reports/2026-10-18/xtapped-morphe-patches-run01-OK.md |
| xxxr3dxxx-r3d-patchlab | 2026-10-18 | 3cc486c | OK | 0 | 0 | 0 | reports/2026-10-18/xxxr3dxxx-r3d-patchlab-run01-OK.md |
| yann-soliman-morphe-patches | 2026-10-18 | 7252220 | OK | 0 | 0 | 0 | reports/2026-10-18/yann-soliman-morphe-patches-run01-OK.md |
| zanuaimi-unipatches | 2026-10-18 | b4a07bd | OK | 0 | 0 | 0 | reports/2026-10-18/zanuaimi-unipatches-run01-OK.md |

## Review queue (needs human)

LLM-suspect items below the confirmation bar, plus pending items awaiting a usable verdict. Fully automatic: a repeat non-benign verdict for the same target+file across windows auto-bans with no human in the loop, and a benign verdict clears old strikes. `config/pardons.json` is the manual escape hatch.

| date | target | file | verdict | conf | evidence |
|---|---|---|---|---|---|
| 2026-10-18 | ihatenodejs-aidans-patches | extensions/extension/src/main/java/app/aidan/extension/geocaching/GeocacheEnrichmentBridge.java | suspicious | 0.55 | extensions/extension/src/main/java/app/aidan/extension/geocaching/GeocacheEnrichmentBridge.java:1 |
| 2026-10-17 | hxreborn-morphe-patches | patches/src/main/resources/moviebox/dashhook.dex | pending | 0 | [binary strings] reflection-hidden behavior with network sink |
| 2026-10-17 | heval99-heval-morphe-patches | cross-window | pending | 0 | exfil completed across windows in patches/src/main/kotlin/app/template/patches/shared/Constants.kt: previously seen host http://4.2.31.1 (2026-10-16) with new WebView |
| 2026-10-17 | venusisjaded-venus-patches | cross-window | suspicious | 0.5 | patches/src/main/resources/venus/bootstrap.js |
| 2026-10-17 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | pending | 0 | [binary strings] reflection-hidden behavior with network sink |
| 2026-10-17 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/method-delta.dex | pending | 0 | [binary strings] sensitive source reaches network sink |
| 2026-10-16 | heval99-heval-morphe-patches | cross-window | suspicious | 0.5 | patches/src/main/kotlin/app/template/patches/shared/Constants.kt |
| 2026-10-16 | alastor-kaneki-morphe-patches | cross-window | suspicious | 0.2 | extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditGalleryOverlayController.java |
| 2026-10-16 | venusisjaded-venus-patches | cross-window | pending | 0 | exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com (2026-10-15) with new Clipboard |
| 2026-10-16 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/method-delta.dex | suspicious | 0.6 | patches/src/main/resources/nicoid/method-delta.dex |
| 2026-10-16 | hxreborn-morphe-patches | patches/src/main/resources/moviebox/dashhook.dex | suspicious | 0.65 | patches/src/main/resources/moviebox/dashhook.dex:54C |
| 2026-10-15 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | pending | 0 | [binary strings] possible DNS exfiltration channel: getByName |
| 2026-10-15 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | suspicious | 0.6 | patches/src/main/resources/nicoid/helpers.mpe: static-analysis reason flags reflection-hidden behavior with network sink,patches/src/main/resources/nicoid/helpers.mpe: network-related strings present (Accept-Ranges, Connection, Content-Length, Content-Type, client=, comments, Response, bytes) |
| 2026-10-15 | alastor-kaneki-morphe-patches | extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditCurrentPost.java | pending | 0 | reflection-hidden behavior with network sink |
| 2026-10-15 | akash-sriram-morphe-google-photos | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java | suspicious | 0.35 | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java:1-15 |
| 2026-10-15 | akash-sriram-morphe-google-photos | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java | pending | 0 | WebView JS bridge with network sink: evaluateJavascript |
| 2026-10-15 | akash-sriram-morphe-google-photos | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java | suspicious | 0.35 | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java:1-18 |


## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret) and optional `LLM_MODEL` / `LLM_FALLBACKS` (repo variables, auto-resolved to a live free model when empty) plus `LLM_MONTHLY_BUDGET_USD` (default 5); without a key the LLM layer is skipped silently.
