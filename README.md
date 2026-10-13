# Morphe patches audit

Scans 4x daily (`0 0,6,12,18 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json. v7: every critical/high goes through the LLM judge; bans only on LLM confirmation.

## :octagonal_sign: Blacklisted — permanently untrusted

Once the LLM confirms a malicious finding the target stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`. Deterministic findings without confirmation never ban.

No blacklisted targets.

## :warning: Critical findings

| :warning: | target | file | reason | report |
|---|---|---|---|---|
| :warning: | sysadmindoc-hushpinterest | extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/actions/PinTransfer.java | cross-app private data access with network: Cookies | reports/2026-10-13/sysadmindoc-hushpinterest.md |

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-13 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-13/morphe-patches-run07-OK.md |
| bearinmind | 2026-10-13 | b00bf2c | RED | 0 | 1 | 0 | reports/2026-10-13/bearinmind-run07-RED-c0h1m0.md |
| d0nj | 2026-10-13 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-13/d0nj-run07-OK.md |
| piko | 2026-10-13 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-13/piko-run07-OK.md |
| piko-ig-lite | 2026-10-13 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-13/piko-ig-lite-run07-OK.md |
| piko-newx | 2026-10-13 | 6c3b0b8 | OK | 0 | 0 | 0 | reports/2026-10-13/piko-newx-run07-OK.md |
| gboard | 2026-10-13 | 6f8064a | OK | 0 | 0 | 0 | reports/2026-10-13/gboard-run07-OK.md |
| hush-messenger | 2026-10-13 | ee7bae7 | OK | 0 | 0 | 0 | reports/2026-10-13/hush-messenger-run07-OK.md |
| hush-facebook | 2026-10-13 | bc40ddf | OK | 0 | 0 | 0 | reports/2026-10-13/hush-facebook-run07-OK.md |
| zeldris | 2026-10-13 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-13/zeldris-run07-OK.md |
| adobo | 2026-10-13 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-13/adobo-run07-OK.md |
| doom | 2026-10-13 | e3bb3af | OK | 0 | 0 | 0 | reports/2026-10-13/doom-run07-OK.md |
| 0x0day-0wl-morphe-patches | 2026-10-13 | 54db5c9 | OK | 0 | 0 | 0 | reports/2026-10-13/0x0day-0wl-morphe-patches-run05-OK.md |
| 0xtalos-365score-patches | 2026-10-13 | a0075fc | OK | 0 | 0 | 0 | reports/2026-10-13/0xtalos-365score-patches-run05-OK.md |
| abhis1n-morphe-patches | 2026-10-13 | f098a1d | OK | 0 | 0 | 0 | reports/2026-10-13/abhis1n-morphe-patches-run05-OK.md |
| adderalladmiral-psychonaut-journal-patches | 2026-10-13 | 4c4ddab | OK | 0 | 0 | 0 | reports/2026-10-13/adderalladmiral-psychonaut-journal-patches-run05-OK.md |
| adish08-morphe-patches | 2026-10-13 | 2617247 | OK | 0 | 0 | 0 | reports/2026-10-13/adish08-morphe-patches-run05-OK.md |
| ajstrick81-morphe-androidtv-patches | 2026-10-13 | 9053d9a | OK | 0 | 0 | 0 | reports/2026-10-13/ajstrick81-morphe-androidtv-patches-run05-OK.md |
| ak800i-mixplorer-patches-for-morphe | 2026-10-13 | 685a2fb | OK | 0 | 0 | 0 | reports/2026-10-13/ak800i-mixplorer-patches-for-morphe-run05-OK.md |
| akash-sriram-morphe-google-photos | 2026-10-13 | 79eb97d | OK | 0 | 0 | 0 | reports/2026-10-13/akash-sriram-morphe-google-photos-run05-OK.md |
| akshayykadam-pixel-camera | 2026-10-13 | f721f61 | OK | 0 | 0 | 0 | reports/2026-10-13/akshayykadam-pixel-camera-run05-OK.md |
| akshayykadam-pixelboard | 2026-10-13 | f47bd92 | OK | 0 | 0 | 0 | reports/2026-10-13/akshayykadam-pixelboard-run05-OK.md |
| alalloush-xperia-1v-camera-patches | 2026-10-13 | 68b9788 | OK | 0 | 0 | 0 | reports/2026-10-13/alalloush-xperia-1v-camera-patches-run05-OK.md |
| alan7383-sofatime-patches | 2026-10-13 | 09c1830 | OK | 0 | 0 | 0 | reports/2026-10-13/alan7383-sofatime-patches-run05-OK.md |
| alastor-kaneki-morphe-patches | 2026-10-13 | fb52a3e | OK | 0 | 0 | 0 | reports/2026-10-13/alastor-kaneki-morphe-patches-run05-OK.md |
| alexnaga-android-patches | 2026-10-13 | ccfc3c2 | OK | 0 | 0 | 0 | reports/2026-10-13/alexnaga-android-patches-run05-OK.md |
| almewty-my-morphe-patches | 2026-10-13 | 8511a65 | OK | 0 | 0 | 0 | reports/2026-10-13/almewty-my-morphe-patches-run05-OK.md |
| ameenalasady-ameen-morphe | 2026-10-13 | 61894ac | OK | 0 | 0 | 0 | reports/2026-10-13/ameenalasady-ameen-morphe-run05-OK.md |
| amitaisela-travian-morphe-patches | 2026-10-13 | c0359a9 | OK | 0 | 0 | 0 | reports/2026-10-13/amitaisela-travian-morphe-patches-run05-OK.md |
| amplerevanced-revanced-patches | 2026-10-13 | 30930ba | OK | 0 | 0 | 0 | reports/2026-10-13/amplerevanced-revanced-patches-run05-OK.md |
| andersonlucasg3-petalmaps-nonhuawei | 2026-10-13 | 5e95f36 | OK | 0 | 0 | 0 | reports/2026-10-13/andersonlucasg3-petalmaps-nonhuawei-run05-OK.md |
| andrewliang25-morphe-patches | 2026-10-13 | 7dc8865 | OK | 0 | 0 | 0 | reports/2026-10-13/andrewliang25-morphe-patches-run05-OK.md |
| andronedev-morphe-patches | 2026-10-13 | e2ca1d5 | OK | 0 | 0 | 0 | reports/2026-10-13/andronedev-morphe-patches-run05-OK.md |
| ang3lo-azevedo-morphe-patches | 2026-10-13 | 7f1e793 | OK | 0 | 0 | 0 | reports/2026-10-13/ang3lo-azevedo-morphe-patches-run05-OK.md |
| angeldark92-steamlink-patches | 2026-10-13 | d26dac8 | OK | 0 | 0 | 0 | reports/2026-10-13/angeldark92-steamlink-patches-run05-OK.md |
| anxyis-anxy-patches | 2026-10-13 | 17f4a8f | OK | 0 | 0 | 0 | reports/2026-10-13/anxyis-anxy-patches-run05-OK.md |
| arandomhooman-hoomans-morphe-patches | 2026-10-13 | 0182778 | OK | 0 | 0 | 0 | reports/2026-10-13/arandomhooman-hoomans-morphe-patches-run05-OK.md |
| arsylk-arsylk-patches | 2026-10-13 | 28d66b8 | OK | 0 | 0 | 0 | reports/2026-10-13/arsylk-arsylk-patches-run05-OK.md |
| azukisensei-aniskip-stremio | 2026-10-13 | 5da4bc3 | OK | 0 | 0 | 0 | reports/2026-10-13/azukisensei-aniskip-stremio-run05-OK.md |
| bakwudo-uyu | 2026-10-13 | a35ca59 | OK | 0 | 0 | 0 | reports/2026-10-13/bakwudo-uyu-run05-OK.md |
| bdgerszewski-morphe-patches-ihealth | 2026-10-13 | 4fc1f1d | OK | 0 | 0 | 0 | reports/2026-10-13/bdgerszewski-morphe-patches-ihealth-run05-OK.md |
| benzophury-oraimo-health-morphe-patches | 2026-10-13 | 8cf03c8 | OK | 0 | 0 | 0 | reports/2026-10-13/benzophury-oraimo-health-morphe-patches-run05-OK.md |
| bholeykabhakt-android-patches-xtra | 2026-10-13 | edbcbfb | OK | 0 | 0 | 0 | reports/2026-10-13/bholeykabhakt-android-patches-xtra-run05-OK.md |
| bigyank-morphe-patches-samsung | 2026-10-13 | 0ab56d4 | OK | 0 | 0 | 0 | reports/2026-10-13/bigyank-morphe-patches-samsung-run05-OK.md |
| binarymend-morphe-patches | 2026-10-13 | 9f3d71e | OK | 0 | 0 | 0 | reports/2026-10-13/binarymend-morphe-patches-run05-OK.md |
| blazeftl-ftl-patches | 2026-10-13 | 1fd42d1 | OK | 0 | 0 | 0 | reports/2026-10-13/blazeftl-ftl-patches-run05-OK.md |
| blazko381-luna-tv-device-comp-patch-and-no-lag | 2026-10-13 | bf1f243 | OK | 0 | 0 | 0 | reports/2026-10-13/blazko381-luna-tv-device-comp-patch-and-no-lag-run05-OK.md |
| braintropy-braintropy-patches | 2026-10-13 | b7788d2 | OK | 0 | 0 | 0 | reports/2026-10-13/braintropy-braintropy-patches-run05-OK.md |
| brosssh-morphe-patches | 2026-10-13 | de158a4 | OK | 0 | 0 | 0 | reports/2026-10-13/brosssh-morphe-patches-run05-OK.md |
| browzomje-browzomje-patches | 2026-10-13 | 5fa5c61 | OK | 0 | 0 | 0 | reports/2026-10-13/browzomje-browzomje-patches-run05-OK.md |
| bruddaa-bruddas-morphe-patches | 2026-10-13 | f57e95b | OK | 0 | 0 | 0 | reports/2026-10-13/bruddaa-bruddas-morphe-patches-run05-OK.md |
| bufferk-morphe-patches | 2026-10-13 | 5a3241f | OK | 0 | 0 | 0 | reports/2026-10-13/bufferk-morphe-patches-run05-OK.md |
| bugg4-bugg4s-patches | 2026-10-13 | 18e44d0 | OK | 0 | 0 | 0 | reports/2026-10-13/bugg4-bugg4s-patches-run05-OK.md |
| byehi98-okish-morphe-patches | 2026-10-13 | c28d657 | OK | 0 | 0 | 0 | reports/2026-10-13/byehi98-okish-morphe-patches-run05-OK.md |
| canh0chua-morphe-patches | 2026-10-13 | 6ec941f | OK | 0 | 0 | 0 | reports/2026-10-13/canh0chua-morphe-patches-run05-OK.md |
| canic-twitch-morphe-patch | 2026-10-13 | d06e2b9 | OK | 0 | 0 | 0 | reports/2026-10-13/canic-twitch-morphe-patch-run05-OK.md |
| casketpizza-morphe-waze-system-tts | 2026-10-13 | 14ad480 | OK | 0 | 0 | 0 | reports/2026-10-13/casketpizza-morphe-waze-system-tts-run05-OK.md |
| catsmoker-anime-witcher-patches | 2026-10-13 | 2cf90b5 | OK | 0 | 0 | 0 | reports/2026-10-13/catsmoker-anime-witcher-patches-run05-OK.md |
| cesbar-zpatches | 2026-10-13 | 883ccfe | OK | 0 | 0 | 0 | reports/2026-10-13/cesbar-zpatches-run05-OK.md |
| ch3thanhs-stylus | 2026-10-13 | 48e7fdf | OK | 0 | 0 | 0 | reports/2026-10-13/ch3thanhs-stylus-run05-OK.md |
| chicco-carone-morphe-patches-chicco | 2026-10-13 | ef21ab6 | OK | 0 | 0 | 0 | reports/2026-10-13/chicco-carone-morphe-patches-chicco-run05-OK.md |
| chikuwadon-nicoid-re-patches | 2026-10-13 | 8ed46a1 | OK | 0 | 0 | 0 | reports/2026-10-13/chikuwadon-nicoid-re-patches-run05-OK.md |
| chukfinley-tidal-patches | 2026-10-13 | 178bc02 | OK | 0 | 0 | 0 | reports/2026-10-13/chukfinley-tidal-patches-run05-OK.md |
| commit-regrets-morphe-youtube-vr-patches | 2026-10-13 | c800cad | OK | 0 | 0 | 0 | reports/2026-10-13/commit-regrets-morphe-youtube-vr-patches-run05-OK.md |
| comoestaisamigos-ck-zombies-morphe-patches | 2026-10-13 | 749ba1e | OK | 0 | 0 | 0 | reports/2026-10-13/comoestaisamigos-ck-zombies-morphe-patches-run05-OK.md |
| csagataj2-morphe-patches | 2026-10-13 | 8a20739 | OK | 0 | 0 | 0 | reports/2026-10-13/csagataj2-morphe-patches-run05-OK.md |
| dan1eltheman1el-morphe-patches | 2026-10-13 | ec310b5 | OK | 0 | 0 | 0 | reports/2026-10-13/dan1eltheman1el-morphe-patches-run05-OK.md |
| dawidd612-dudeks-morphe-patches | 2026-10-13 | dd217b5 | OK | 0 | 0 | 0 | reports/2026-10-13/dawidd612-dudeks-morphe-patches-run05-OK.md |
| debakarr-morphe-patches | 2026-10-13 | b3c23c6 | OK | 0 | 0 | 0 | reports/2026-10-13/debakarr-morphe-patches-run05-OK.md |
| dh6k-morphe-patches | 2026-10-13 | 38471b9 | OK | 0 | 0 | 0 | reports/2026-10-13/dh6k-morphe-patches-run05-OK.md |
| digitalpals-johns-morphe-patches | 2026-10-13 | 3576079 | OK | 0 | 0 | 0 | reports/2026-10-13/digitalpals-johns-morphe-patches-run05-OK.md |
| docbt-patched-up | 2026-10-13 | 28afcb4 | OK | 0 | 0 | 0 | reports/2026-10-13/docbt-patched-up-run05-OK.md |
| dowjames-morphe-patches | 2026-10-13 | ea93ea2 | OK | 0 | 0 | 0 | reports/2026-10-13/dowjames-morphe-patches-run05-OK.md |
| drnhzn-supreme-patches | 2026-10-13 | 1123dd8 | OK | 0 | 0 | 0 | reports/2026-10-13/drnhzn-supreme-patches-run05-OK.md |
| drosocode-morphe-patches | 2026-10-13 | c88bf88 | OK | 0 | 0 | 0 | reports/2026-10-13/drosocode-morphe-patches-run05-OK.md |
| dumb-software-t2c-app-patch-morphe | 2026-10-13 | 2dd8d1d | OK | 0 | 0 | 0 | reports/2026-10-13/dumb-software-t2c-app-patch-morphe-run05-OK.md |
| dunecache-oyasumi-patches | 2026-10-13 | f419de5 | OK | 0 | 0 | 0 | reports/2026-10-13/dunecache-oyasumi-patches-run05-OK.md |
| durgesh0505-chiggi_morphe_patches | 2026-10-13 | c303b89 | OK | 0 | 0 | 0 | reports/2026-10-13/durgesh0505-chiggi_morphe_patches-run05-OK.md |
| early.egg3707-ee-morphe-patches | 2026-10-13 | a9deb3a | OK | 0 | 0 | 0 | reports/2026-10-13/early.egg3707-ee-morphe-patches-run05-OK.md |
| educal72-educal-patches | 2026-10-13 | 67ea6da | OK | 0 | 0 | 0 | reports/2026-10-13/educal72-educal-patches-run05-OK.md |
| entree3k-morning-entree-patches | 2026-10-13 | 9e4c200 | OK | 0 | 0 | 0 | reports/2026-10-13/entree3k-morning-entree-patches-run05-OK.md |
| epxec-android-patches | 2026-10-13 | e28b946 | OK | 0 | 0 | 0 | reports/2026-10-13/epxec-android-patches-run05-OK.md |
| error404rt-anixart-patches | 2026-10-13 | 0089e6d | OK | 0 | 0 | 0 | reports/2026-10-13/error404rt-anixart-patches-run05-OK.md |
| ethan-manny-spotify-tv-crossfade | 2026-10-13 | 991592f | OK | 0 | 0 | 0 | reports/2026-10-13/ethan-manny-spotify-tv-crossfade-run05-OK.md |
| ethanm6-letterboxd-stremio-morphe-patch | 2026-10-13 | 0b6b41d | OK | 0 | 0 | 0 | reports/2026-10-13/ethanm6-letterboxd-stremio-morphe-patch-run05-OK.md |
| ez4rk0-morphe-patches | 2026-10-13 | 1e442bd | OK | 0 | 0 | 0 | reports/2026-10-13/ez4rk0-morphe-patches-run05-OK.md |
| forsigh-waze-patches | 2026-10-13 | 4b41548 | WARN | 0 | 0 | 1 | reports/2026-10-13/forsigh-waze-patches-run05-WARN-c0h0m1.md |
| foxxoowo-foxxo-patches | 2026-10-13 | ada8498 | OK | 0 | 0 | 0 | reports/2026-10-13/foxxoowo-foxxo-patches-run05-OK.md |
| franticg33k-morphe-patches | 2026-10-13 | ebfe877 | OK | 0 | 0 | 0 | reports/2026-10-13/franticg33k-morphe-patches-run05-OK.md |
| freeman022026-rustore-privacy-patches | 2026-10-13 | 54a810e | OK | 0 | 0 | 0 | reports/2026-10-13/freeman022026-rustore-privacy-patches-run05-OK.md |
| gamer92000-pixelcamera-patches | 2026-10-13 | 8d45074 | OK | 0 | 0 | 0 | reports/2026-10-13/gamer92000-pixelcamera-patches-run05-OK.md |
| ggyasin-ggyasin-morphe-patches | 2026-10-13 | 9294ac5 | OK | 0 | 0 | 0 | reports/2026-10-13/ggyasin-ggyasin-morphe-patches-run05-OK.md |
| giaaaacomo-nifty-patches-selection | 2026-10-13 | 0e0f42f | OK | 0 | 0 | 0 | reports/2026-10-13/giaaaacomo-nifty-patches-selection-run05-OK.md |
| gitgitro-gitro-morphe-patches | 2026-10-13 | 277365d | OK | 0 | 0 | 0 | reports/2026-10-13/gitgitro-gitro-morphe-patches-run05-OK.md |
| goldrift-morphe-patches | 2026-10-13 | 06859aa | OK | 0 | 0 | 0 | reports/2026-10-13/goldrift-morphe-patches-run05-OK.md |
| hajs110208-morphe-patches | 2026-10-13 | 8bc4b6e | OK | 0 | 0 | 0 | reports/2026-10-13/hajs110208-morphe-patches-run05-OK.md |
| hammadhassan94-ary-live | 2026-10-13 | 965e6ec | OK | 0 | 0 | 0 | reports/2026-10-13/hammadhassan94-ary-live-run05-OK.md |
| hashtagbasit-aimal-patches | 2026-10-13 | 2cea794 | OK | 0 | 0 | 0 | reports/2026-10-13/hashtagbasit-aimal-patches-run05-OK.md |
| helllord77-media-patches | 2026-10-13 | aa06c88 | OK | 0 | 0 | 0 | reports/2026-10-13/helllord77-media-patches-run05-OK.md |
| hellveticastandard-hellveticapatches | 2026-10-13 | 1b605a2 | OK | 0 | 0 | 0 | reports/2026-10-13/hellveticastandard-hellveticapatches-run05-OK.md |
| heval99-heval-morphe-patches | 2026-10-13 | 5766589 | OK | 0 | 0 | 0 | reports/2026-10-13/heval99-heval-morphe-patches-run05-OK.md |
| heyymichii-michii-patches | 2026-10-13 | dbe97ce | OK | 0 | 0 | 0 | reports/2026-10-13/heyymichii-michii-patches-run05-OK.md |
| hhawkinsau-hh-patches | 2026-10-13 | f7d89d1 | OK | 0 | 0 | 0 | reports/2026-10-13/hhawkinsau-hh-patches-run05-OK.md |
| hiosdra-morphe-patches | 2026-10-13 | 8180c40 | OK | 0 | 0 | 0 | reports/2026-10-13/hiosdra-morphe-patches-run05-OK.md |
| homelander11-beetle-patches | 2026-10-13 | 9000692 | OK | 0 | 0 | 0 | reports/2026-10-13/homelander11-beetle-patches-run05-OK.md |
| hoo-dles-morphe-patches | 2026-10-13 | e9c9426 | OK | 0 | 0 | 0 | reports/2026-10-13/hoo-dles-morphe-patches-run05-OK.md |
| hslightsteel-slight-patches | 2026-10-13 | 489a227 | OK | 0 | 0 | 0 | reports/2026-10-13/hslightsteel-slight-patches-run05-OK.md |
| hu-liberator-patches | 2026-10-13 | e113801 | OK | 0 | 0 | 0 | reports/2026-10-13/hu-liberator-patches-run05-OK.md |
| hvq-eksi-morphe | 2026-10-13 | 570abad | OK | 0 | 0 | 0 | reports/2026-10-13/hvq-eksi-morphe-run05-OK.md |
| hxreborn-morphe-patches | 2026-10-13 | ee7031d | OK | 0 | 0 | 0 | reports/2026-10-13/hxreborn-morphe-patches-run05-OK.md |
| icysymmetra-tiktok-patches-for-morphe | 2026-10-13 | ad4f3be | OK | 0 | 0 | 0 | reports/2026-10-13/icysymmetra-tiktok-patches-for-morphe-run05-OK.md |
| ihatenodejs-aidans-patches | 2026-10-13 | f00a377 | OK | 0 | 0 | 0 | reports/2026-10-13/ihatenodejs-aidans-patches-run05-OK.md |
| ilikeadofai-vocacolle-morphe-patches | 2026-10-13 | c63d574 | OK | 0 | 0 | 0 | reports/2026-10-13/ilikeadofai-vocacolle-morphe-patches-run05-OK.md |
| imnoammm-noams-morphe-patches | 2026-10-13 | f1fa022 | OK | 0 | 0 | 0 | reports/2026-10-13/imnoammm-noams-morphe-patches-run05-OK.md |
| imxeren-mix-patches | 2026-10-13 | fcff32f | OK | 0 | 0 | 0 | reports/2026-10-13/imxeren-mix-patches-run05-OK.md |
| ispacecase-patchweaver | 2026-10-13 | 0d6517b | OK | 0 | 0 | 0 | reports/2026-10-13/ispacecase-patchweaver-run05-OK.md |
| isuruhg-cricinfo-tweaks | 2026-10-13 | caca596 | OK | 0 | 0 | 0 | reports/2026-10-13/isuruhg-cricinfo-tweaks-run05-OK.md |
| jackblk-morphe-patches | 2026-10-13 | 53318f9 | OK | 0 | 0 | 0 | reports/2026-10-13/jackblk-morphe-patches-run05-OK.md |
| jacksonjones2003-immersive-keyboard-patches | 2026-10-13 | 7531995 | OK | 0 | 0 | 0 | reports/2026-10-13/jacksonjones2003-immersive-keyboard-patches-run05-OK.md |
| jacksonjones2003-qqmusic-english-patches | 2026-10-13 | 49b7b00 | OK | 0 | 0 | 0 | reports/2026-10-13/jacksonjones2003-qqmusic-english-patches-run05-OK.md |
| jacobplaysgames-crimeradar-morphe-patches | 2026-10-13 | 4668b10 | OK | 0 | 0 | 0 | reports/2026-10-13/jacobplaysgames-crimeradar-morphe-patches-run05-OK.md |
| jaredcat-morphe-patches | 2026-10-13 | b29188a | OK | 0 | 0 | 0 | reports/2026-10-13/jaredcat-morphe-patches-run05-OK.md |
| jaydenluuuu-sys-line-font-patches | 2026-10-13 | 47596f7 | OK | 0 | 0 | 0 | reports/2026-10-13/jaydenluuuu-sys-line-font-patches-run05-OK.md |
| jcapretta-chessable-patches | 2026-10-13 | aa297df | OK | 0 | 0 | 0 | reports/2026-10-13/jcapretta-chessable-patches-run05-OK.md |
| jeff-tek-jeff-patches | 2026-10-13 | e195faf | OK | 0 | 0 | 0 | reports/2026-10-13/jeff-tek-jeff-patches-run05-OK.md |
| jonnyvr1-morph-patches | 2026-10-13 | 9a8c562 | OK | 0 | 0 | 0 | reports/2026-10-13/jonnyvr1-morph-patches-run05-OK.md |
| joristdh-platypatch | 2026-10-13 | 217afb1 | OK | 0 | 0 | 0 | reports/2026-10-13/joristdh-platypatch-run05-OK.md |
| jrddupont-discord-patches | 2026-10-13 | e3b15da | OK | 0 | 0 | 0 | reports/2026-10-13/jrddupont-discord-patches-run05-OK.md |
| jz6-flexboard | 2026-10-13 | ce1c16c | OK | 0 | 0 | 0 | reports/2026-10-13/jz6-flexboard-run05-OK.md |
| k8r8to-kizu-morphe-patches | 2026-10-13 | 78be324 | OK | 0 | 0 | 0 | reports/2026-10-13/k8r8to-kizu-morphe-patches-run05-OK.md |
| kanup4m-morphe-patches | 2026-10-13 | 959edc3 | OK | 0 | 0 | 0 | reports/2026-10-13/kanup4m-morphe-patches-run05-OK.md |
| kecerim24-morphe-patches | 2026-10-13 | d5e0e02 | OK | 0 | 0 | 0 | reports/2026-10-13/kecerim24-morphe-patches-run05-OK.md |
| kero309x-anghamiplus-patches | 2026-10-13 | 67138d7 | OK | 0 | 0 | 0 | reports/2026-10-13/kero309x-anghamiplus-patches-run05-OK.md |
| kim20598-hakim-morphe-patches | 2026-10-13 | ee16906 | OK | 0 | 0 | 0 | reports/2026-10-13/kim20598-hakim-morphe-patches-run05-OK.md |
| kiraio-moe-lain-patches | 2026-10-13 | 2b90e26 | OK | 0 | 0 | 0 | reports/2026-10-13/kiraio-moe-lain-patches-run05-OK.md |
| kmru-nai64extrapatches | 2026-10-13 | cf40997 | OK | 0 | 0 | 0 | reports/2026-10-13/kmru-nai64extrapatches-run05-OK.md |
| kmru-nai64patches | 2026-10-13 | 59c25e6 | OK | 0 | 0 | 0 | reports/2026-10-13/kmru-nai64patches-run05-OK.md |
| kolaron-morphe-patches | 2026-10-13 | e1d60ca | OK | 0 | 0 | 0 | reports/2026-10-13/kolaron-morphe-patches-run05-OK.md |
| kondratjev-morphe-patches | 2026-10-13 | ff34863 | OK | 0 | 0 | 0 | reports/2026-10-13/kondratjev-morphe-patches-run05-OK.md |
| kuchingneko28-ipusnas-patches | 2026-10-13 | 32c1c40 | OK | 0 | 0 | 0 | reports/2026-10-13/kuchingneko28-ipusnas-patches-run05-OK.md |
| kuntal-devrat-diskwala-patches | 2026-10-13 | 86c9e9c | OK | 0 | 0 | 0 | reports/2026-10-13/kuntal-devrat-diskwala-patches-run05-OK.md |
| kveld9-kveld-extra-morphe-patches | 2026-10-13 | 846f4b8 | SHALLOW | 0 | 0 | 0 | reports/2026-10-13/kveld9-kveld-extra-morphe-patches-run05-OK.md |
| kveld9-kveld-morphe-patches | 2026-10-13 | 9cbf2a8 | SHALLOW | 0 | 0 | 0 | reports/2026-10-13/kveld9-kveld-morphe-patches-run05-OK.md |
| lablazer-morphe-patches | 2026-10-13 | 49f9168 | OK | 0 | 0 | 0 | reports/2026-10-13/lablazer-morphe-patches-run05-OK.md |
| lakakareal-lakakashitpatches | 2026-10-13 | 8d24794 | OK | 0 | 0 | 0 | reports/2026-10-13/lakakareal-lakakashitpatches-run05-OK.md |
| lchanc3-morphe-patches | 2026-10-13 | ce02f2f | OK | 0 | 0 | 0 | reports/2026-10-13/lchanc3-morphe-patches-run05-OK.md |
| legendsciber-morphe-patches | 2026-10-13 | a95b85f | OK | 0 | 0 | 0 | reports/2026-10-13/legendsciber-morphe-patches-run05-OK.md |
| limelimes-cbc-patches | 2026-10-13 | 704d39a | OK | 0 | 0 | 0 | reports/2026-10-13/limelimes-cbc-patches-run05-OK.md |
| liongalahad-liongalahad-nuviotv-morphe-patches | 2026-10-13 | 2450623 | OK | 0 | 0 | 0 | reports/2026-10-13/liongalahad-liongalahad-nuviotv-morphe-patches-run05-OK.md |
| liongalahad-liongalahad-stremio-morphe-patches | 2026-10-13 | b207ce5 | OK | 0 | 0 | 0 | reports/2026-10-13/liongalahad-liongalahad-stremio-morphe-patches-run05-OK.md |
| lockhart07-morphe-patches | 2026-10-13 | 3f23440 | OK | 0 | 0 | 0 | reports/2026-10-13/lockhart07-morphe-patches-run05-OK.md |
| logm1lo-logm1lo-patches | 2026-10-13 | 1c31a4b | OK | 0 | 0 | 0 | reports/2026-10-13/logm1lo-logm1lo-patches-run05-OK.md |
| lootdev78-psylos-morphe-patches | 2026-10-13 | 0eac0c5 | OK | 0 | 0 | 0 | reports/2026-10-13/lootdev78-psylos-morphe-patches-run05-OK.md |
| madhu-gowda6-atharv-patches | 2026-10-13 | 79cab40 | OK | 0 | 0 | 0 | reports/2026-10-13/madhu-gowda6-atharv-patches-run05-OK.md |
| mich111discord-mightymichs-patches | 2026-10-13 | 1a33404 | OK | 0 | 0 | 0 | reports/2026-10-13/mich111discord-mightymichs-patches-run05-OK.md |
| miguelninja19-miguel-morphe-patches | 2026-10-13 | bc34838 | OK | 0 | 0 | 0 | reports/2026-10-13/miguelninja19-miguel-morphe-patches-run05-OK.md |
| mohamedamrnady-anghami-patches | 2026-10-13 | 38d12c4 | OK | 0 | 0 | 0 | reports/2026-10-13/mohamedamrnady-anghami-patches-run05-OK.md |
| mubelotix-my-morphe-patches | 2026-10-13 | 8b6f75e | OK | 0 | 0 | 0 | reports/2026-10-13/mubelotix-my-morphe-patches-run05-OK.md |
| mvaishak-letterboxd-morphe-patches | 2026-10-13 | b4658ef | OK | 0 | 0 | 0 | reports/2026-10-13/mvaishak-letterboxd-morphe-patches-run05-OK.md |
| mxkrgt-dbtcoach-morphe-patches | 2026-10-13 | 873f289 | OK | 0 | 0 | 0 | reports/2026-10-13/mxkrgt-dbtcoach-morphe-patches-run05-OK.md |
| nagol12344-patch | 2026-10-13 | b88c4e6 | OK | 0 | 0 | 0 | reports/2026-10-13/nagol12344-patch-run05-OK.md |
| nekogryphou-gryphous-morphe-patches | 2026-10-13 | 8f4bc8c | OK | 0 | 0 | 0 | reports/2026-10-13/nekogryphou-gryphous-morphe-patches-run05-OK.md |
| newuser7171-telegram-morphe-patches- | 2026-10-13 | 289893a | OK | 0 | 0 | 0 | reports/2026-10-13/newuser7171-telegram-morphe-patches--run05-OK.md |
| nickcomua-airofit-pro2-morphe-patches | 2026-10-13 | 15bcaf0 | OK | 0 | 0 | 0 | reports/2026-10-13/nickcomua-airofit-pro2-morphe-patches-run05-OK.md |
| ns1207-morphe-patches-template | 2026-10-13 | fa856e5 | OK | 0 | 0 | 0 | reports/2026-10-13/ns1207-morphe-patches-template-run05-OK.md |
| nullwaypoint-morphe-patches | 2026-10-13 | 107730d | OK | 0 | 0 | 0 | reports/2026-10-13/nullwaypoint-morphe-patches-run05-OK.md |
| o0b-morphe-patches | 2026-10-13 | 5859a62 | OK | 0 | 0 | 0 | reports/2026-10-13/o0b-morphe-patches-run05-OK.md |
| okazakee-iptv-morphe-patches | 2026-10-13 | bb2a59b | OK | 0 | 0 | 0 | reports/2026-10-13/okazakee-iptv-morphe-patches-run05-OK.md |
| osirisad-teamsnap-patches | 2026-10-13 | bb52277 | OK | 0 | 0 | 0 | reports/2026-10-13/osirisad-teamsnap-patches-run05-OK.md |
| paresh-maheshwari-paresh-patches | 2026-10-13 | 84b5e5b | OK | 0 | 0 | 0 | reports/2026-10-13/paresh-maheshwari-paresh-patches-run05-OK.md |
| phamleduy04-duy-patches | 2026-10-13 | 9808547 | OK | 0 | 0 | 0 | reports/2026-10-13/phamleduy04-duy-patches-run05-OK.md |
| picarica-my-moprhe-patches | 2026-10-13 | 3ffd631 | OK | 0 | 0 | 0 | reports/2026-10-13/picarica-my-moprhe-patches-run05-OK.md |
| pigfoot-morphe-patches | 2026-10-13 | 12cebdd | OK | 0 | 0 | 0 | reports/2026-10-13/pigfoot-morphe-patches-run05-OK.md |
| pixelpusher247-morphe-patches | 2026-10-13 | 0d6780b | OK | 0 | 0 | 0 | reports/2026-10-13/pixelpusher247-morphe-patches-run05-OK.md |
| plyrs1-morphe-patches | 2026-10-13 | c59af6e | OK | 0 | 0 | 0 | reports/2026-10-13/plyrs1-morphe-patches-run05-OK.md |
| polka-bear-morphe-patches | 2026-10-13 | ec4905f | OK | 0 | 0 | 0 | reports/2026-10-13/polka-bear-morphe-patches-run05-OK.md |
| prathxmop-prathxm-patches | 2026-10-13 | 011e2ae | OK | 0 | 0 | 0 | reports/2026-10-13/prathxmop-prathxm-patches-run05-OK.md |
| pyflat-jr-morphe-patches | 2026-10-13 | c8a381e | OK | 0 | 0 | 0 | reports/2026-10-13/pyflat-jr-morphe-patches-run05-OK.md |
| quantavil-edge-morphe-patches | 2026-10-13 | 6b99b3a | OK | 0 | 0 | 0 | reports/2026-10-13/quantavil-edge-morphe-patches-run05-OK.md |
| r2beeaton-walmart-morphe | 2026-10-13 | 780973f | OK | 0 | 0 | 0 | reports/2026-10-13/r2beeaton-walmart-morphe-run05-OK.md |
| rabehx-rabehx-patches | 2026-10-13 | c3782a0 | OK | 0 | 0 | 0 | reports/2026-10-13/rabehx-rabehx-patches-run05-OK.md |
| rabilrbl-fluffy-patches | 2026-10-13 | a8d2e4d | OK | 0 | 0 | 0 | reports/2026-10-13/rabilrbl-fluffy-patches-run05-OK.md |
| rafag00-morphe-patches | 2026-10-13 | dfd3325 | OK | 0 | 0 | 0 | reports/2026-10-13/rafag00-morphe-patches-run05-OK.md |
| rahaaatul-morphe-patches | 2026-10-13 | be75d70 | WARN | 0 | 0 | 1 | reports/2026-10-13/rahaaatul-morphe-patches-run05-WARN-c0h0m1.md |
| realcyberwash-max-patches | 2026-10-13 | 712bae3 | OK | 0 | 0 | 0 | reports/2026-10-13/realcyberwash-max-patches-run05-OK.md |
| reemx-morphe-me-patches | 2026-10-13 | eaa9e3c | OK | 0 | 0 | 0 | reports/2026-10-13/reemx-morphe-me-patches-run05-OK.md |
| rhubarbshoelaces-morphe-patches | 2026-10-13 | e2a89cc | OK | 0 | 0 | 0 | reports/2026-10-13/rhubarbshoelaces-morphe-patches-run05-OK.md |
| rikodev-morphed-pl | 2026-10-13 | da0fd7f | OK | 0 | 0 | 0 | reports/2026-10-13/rikodev-morphed-pl-run05-OK.md |
| rikunode-pupil-swipe-disable-patches | 2026-10-13 | b8cce10 | OK | 0 | 0 | 0 | reports/2026-10-13/rikunode-pupil-swipe-disable-patches-run05-OK.md |
| riky-dev-morphe-patches | 2026-10-13 | 7f10b38 | OK | 0 | 0 | 0 | reports/2026-10-13/riky-dev-morphe-patches-run05-OK.md |
| ripthulhu-morphe-google-patches | 2026-10-13 | d9769cf | OK | 0 | 0 | 0 | reports/2026-10-13/ripthulhu-morphe-google-patches-run05-OK.md |
| rjbiermann-brave-waffle | 2026-10-13 | 396e947 | OK | 0 | 0 | 0 | reports/2026-10-13/rjbiermann-brave-waffle-run05-OK.md |
| rookieenough-de-vanced | 2026-10-13 | 5cf78f1 | OK | 0 | 0 | 0 | reports/2026-10-13/rookieenough-de-vanced-run05-OK.md |
| roundsalmon4-morphe-patches-template | 2026-10-13 | f8c95c8 | OK | 0 | 0 | 0 | reports/2026-10-13/roundsalmon4-morphe-patches-template-run05-OK.md |
| rushiranpise-ri-vanced-universal-morphe-patches | 2026-10-13 | b7c4702 | OK | 0 | 0 | 0 | reports/2026-10-13/rushiranpise-ri-vanced-universal-morphe-patches-run05-OK.md |
| ryykitty-twitch-patched | 2026-10-13 | 795e86e | OK | 0 | 0 | 0 | reports/2026-10-13/ryykitty-twitch-patched-run05-OK.md |
| sailhighsea-sailhighsea-patches | 2026-10-13 | 613d92f | OK | 0 | 0 | 0 | reports/2026-10-13/sailhighsea-sailhighsea-patches-run05-OK.md |
| santodan-santodan-patches | 2026-10-13 | 3f81c54 | OK | 0 | 0 | 0 | reports/2026-10-13/santodan-santodan-patches-run05-OK.md |
| sapitosucio-froggomorphepatches | 2026-10-13 | fcada9f | OK | 0 | 0 | 0 | reports/2026-10-13/sapitosucio-froggomorphepatches-run05-OK.md |
| sfehhrths-ekispert-morphe-patches | 2026-10-13 | 05f3157 | OK | 0 | 0 | 0 | reports/2026-10-13/sfehhrths-ekispert-morphe-patches-run05-OK.md |
| shaun-the-sheep-patches-morphe-patches | 2026-10-13 | 46d09a0 | OK | 0 | 0 | 0 | reports/2026-10-13/shaun-the-sheep-patches-morphe-patches-run05-OK.md |
| shini-cell-shini-morphe | 2026-10-13 | 00c4645 | OK | 0 | 0 | 0 | reports/2026-10-13/shini-cell-shini-morphe-run05-OK.md |
| shuhaibnc-morphe-patches | 2026-10-13 | 00a38dd | OK | 0 | 0 | 0 | reports/2026-10-13/shuhaibnc-morphe-patches-run05-OK.md |
| snowyegret23-morphe-patches | 2026-10-13 | d723cb7 | OK | 0 | 0 | 0 | reports/2026-10-13/snowyegret23-morphe-patches-run05-OK.md |
| soubryan-pinterest-morphed | 2026-10-13 | a33eb3a | OK | 0 | 0 | 0 | reports/2026-10-13/soubryan-pinterest-morphed-run05-OK.md |
| spookyexe-morphe-patches | 2026-10-13 | 32b7427 | OK | 0 | 0 | 0 | reports/2026-10-13/spookyexe-morphe-patches-run05-OK.md |
| sqzass-patches | 2026-10-13 | 88f1434 | OK | 0 | 0 | 0 | reports/2026-10-13/sqzass-patches-run05-OK.md |
| subenoeva-roadsync-patches | 2026-10-13 | b66962d | OK | 0 | 0 | 0 | reports/2026-10-13/subenoeva-roadsync-patches-run05-OK.md |
| sudashiii-servus-patches | 2026-10-13 | c824519 | OK | 0 | 0 | 0 | reports/2026-10-13/sudashiii-servus-patches-run05-OK.md |
| supperelias2-sbs-morphe-patches | 2026-10-13 | 6c3554a | OK | 0 | 0 | 0 | reports/2026-10-13/supperelias2-sbs-morphe-patches-run05-OK.md |
| supperelias2-sbs-tv-morphe-patches | 2026-10-13 | 405979d | OK | 0 | 0 | 0 | reports/2026-10-13/supperelias2-sbs-tv-morphe-patches-run05-OK.md |
| sushruth-imgur-patches | 2026-10-13 | 9c0f7da | OK | 0 | 0 | 0 | reports/2026-10-13/sushruth-imgur-patches-run05-OK.md |
| sysadmindoc-hushfeed | 2026-10-13 | 1d2449d | WARN | 0 | 0 | 1 | reports/2026-10-13/sysadmindoc-hushfeed-run05-WARN-c0h0m1.md |
| sysadmindoc-hushgram | 2026-10-13 | b3c9ef1 | OK | 0 | 0 | 0 | reports/2026-10-13/sysadmindoc-hushgram-run05-OK.md |
| sysadmindoc-hushpinterest | 2026-10-13 | 5537ab2 | CRIT | 1 | 0 | 0 | reports/2026-10-13/sysadmindoc-hushpinterest-run05-CRIT-c1h0m0.md |
| sysadmindoc-hushtelegram | 2026-10-13 | e4df3ad | OK | 0 | 0 | 0 | reports/2026-10-13/sysadmindoc-hushtelegram-run05-OK.md |
| sysadmindoc-hushthreads | 2026-10-13 | 6e51a22 | OK | 0 | 0 | 0 | reports/2026-10-13/sysadmindoc-hushthreads-run05-OK.md |
| sysadmindoc-hushtumblr | 2026-10-13 | efd3787 | WARN | 0 | 0 | 2 | reports/2026-10-13/sysadmindoc-hushtumblr-run05-WARN-c0h0m2.md |
| tachibana-shin-morphe-patches | 2026-10-13 | f4cd950 | OK | 0 | 0 | 0 | reports/2026-10-13/tachibana-shin-morphe-patches-run05-OK.md |
| testiwy268-morphe-patches | 2026-10-13 | 4ddca00 | OK | 0 | 0 | 0 | reports/2026-10-13/testiwy268-morphe-patches-run05-OK.md |
| theabhishekbhujang-morphe-patches | 2026-10-13 | ad34256 | OK | 0 | 0 | 0 | reports/2026-10-13/theabhishekbhujang-morphe-patches-run05-OK.md |
| thegibbonn-morphe-patches-anilili | 2026-10-13 | f7f35ac | OK | 0 | 0 | 0 | reports/2026-10-13/thegibbonn-morphe-patches-anilili-run05-OK.md |
| thewanwan-bestapp | 2026-10-13 | 2f28eda | OK | 0 | 0 | 0 | reports/2026-10-13/thewanwan-bestapp-run05-OK.md |
| tiaruebar1024-tiaruebar-patches | 2026-10-13 | 2bb3747 | OK | 0 | 0 | 0 | reports/2026-10-13/tiaruebar1024-tiaruebar-patches-run05-OK.md |
| timbuckrue-nyt-games-vrr-patch | 2026-10-13 | 1765519 | OK | 0 | 0 | 0 | reports/2026-10-13/timbuckrue-nyt-games-vrr-patch-run05-OK.md |
| torbenstriegel-morphe-patches-custom | 2026-10-13 | a1d1b53 | OK | 0 | 0 | 0 | reports/2026-10-13/torbenstriegel-morphe-patches-custom-run05-OK.md |
| tornillo2-movistar-block-ads-morphe | 2026-10-13 | 92c9a84 | OK | 0 | 0 | 0 | reports/2026-10-13/tornillo2-movistar-block-ads-morphe-run05-OK.md |
| totsiaw-proxma-patches | 2026-10-13 | 097a107 | OK | 0 | 0 | 0 | reports/2026-10-13/totsiaw-proxma-patches-run05-OK.md |
| unkybadtouch-plex-morphe-patches | 2026-10-13 | 216d2eb | OK | 0 | 0 | 0 | reports/2026-10-13/unkybadtouch-plex-morphe-patches-run05-OK.md |
| v4n1x-morphe-patches | 2026-10-13 | 40ef3ad | OK | 0 | 0 | 0 | reports/2026-10-13/v4n1x-morphe-patches-run05-OK.md |
| venusisjaded-venus-patches | 2026-10-13 | 5da1ffc | OK | 0 | 0 | 0 | reports/2026-10-13/venusisjaded-venus-patches-run05-OK.md |
| vipinvip-railone-patches | 2026-10-13 | a9ccf13 | OK | 0 | 0 | 0 | reports/2026-10-13/vipinvip-railone-patches-run05-OK.md |
| virzak-morphe-patches | 2026-10-13 | e39e88c | OK | 0 | 0 | 0 | reports/2026-10-13/virzak-morphe-patches-run05-OK.md |
| waggbr-wagg13patch_morphe | 2026-10-13 | 01ef4a7 | OK | 0 | 0 | 0 | reports/2026-10-13/waggbr-wagg13patch_morphe-run05-OK.md |
| wchill-patcheddit | 2026-10-13 | 445bcb0 | OK | 0 | 0 | 0 | reports/2026-10-13/wchill-patcheddit-run05-OK.md |
| wzse-aapam-patches | 2026-10-13 | 34b20c0 | OK | 0 | 0 | 0 | reports/2026-10-13/wzse-aapam-patches-run05-OK.md |
| xhehab-xhehab-patches | 2026-10-13 | be2ec1b | OK | 0 | 0 | 0 | reports/2026-10-13/xhehab-xhehab-patches-run05-OK.md |
| xob0t-morphe-patches | 2026-10-13 | 0f0fd23 | OK | 0 | 0 | 0 | reports/2026-10-13/xob0t-morphe-patches-run05-OK.md |
| xtapped-morphe-patches | 2026-10-13 | 76625a0 | OK | 0 | 0 | 0 | reports/2026-10-13/xtapped-morphe-patches-run05-OK.md |
| xxxr3dxxx-r3d-patchlab | 2026-10-13 | 3cc486c | OK | 0 | 0 | 0 | reports/2026-10-13/xxxr3dxxx-r3d-patchlab-run05-OK.md |
| yann-soliman-morphe-patches | 2026-10-13 | 7252220 | OK | 0 | 0 | 0 | reports/2026-10-13/yann-soliman-morphe-patches-run05-OK.md |
| zanuaimi-unipatches | 2026-10-13 | fb2c33c | OK | 0 | 0 | 0 | reports/2026-10-13/zanuaimi-unipatches-run05-OK.md |

## Review queue (needs human)

LLM-suspect items below the confirmation bar, plus pending items awaiting a usable verdict — no ban until the judge confirms. Confirm in code, then ban by editing `blacklist.json` or dismiss by deleting the entry from `review-queue.json`.

| date | target | file | verdict | conf | evidence |
|---|---|---|---|---|---|
| 2026-10-13 | sysadmindoc-hushpinterest | extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/actions/PinTransfer.java | pending | 0 | cross-app private data access with network: Cookies |
| 2026-10-13 | bearinmind | extensions/extension/src/main/java/org/ungoogled/ui/Steer.java | pending | 0 | sensitive source reaches network sink |
| 2026-10-13 | commit-regrets-morphe-youtube-vr-patches | gradle/wrapper/gradle-wrapper.jar | pending | 0 | native binary added/changed — cannot review textually |


## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret), `LLM_MODEL` / `LLM_FALLBACKS` (repo variables) and `LLM_MONTHLY_BUDGET_USD` (default 5) from the environment; without them the LLM layer is skipped silently.
