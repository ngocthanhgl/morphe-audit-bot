# Morphe patches audit

Scans 4x daily (`0 0,6,12,18 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json. v7: every critical/high goes through the LLM judge; bans only on LLM confirmation.

## :octagonal_sign: Blacklisted — permanently untrusted

Once the LLM confirms a malicious finding the target stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`. Deterministic findings without confirmation never ban.

No blacklisted targets.

## :warning: Critical findings

No critical findings in this window.

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-16 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-16/morphe-patches-run02-OK.md |
| bearinmind | 2026-10-16 | de89b20 | OK | 0 | 0 | 0 | reports/2026-10-16/bearinmind-run02-OK.md |
| d0nj | 2026-10-16 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-16/d0nj-run02-OK.md |
| piko | 2026-10-16 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-16/piko-run02-OK.md |
| piko-ig-lite | 2026-10-16 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-16/piko-ig-lite-run02-OK.md |
| piko-newx | 2026-10-16 | 7ec0863 | OK | 0 | 0 | 0 | reports/2026-10-16/piko-newx-run02-OK.md |
| gboard | 2026-10-16 | 976b749 | OK | 0 | 0 | 0 | reports/2026-10-16/gboard-run02-OK.md |
| hush-messenger | 2026-10-16 | cd26578 | OK | 0 | 0 | 0 | reports/2026-10-16/hush-messenger-run02-OK.md |
| hush-facebook | 2026-10-16 | 526eaa7 | OK | 0 | 0 | 0 | reports/2026-10-16/hush-facebook-run02-OK.md |
| zeldris | 2026-10-16 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-16/zeldris-run02-OK.md |
| adobo | 2026-10-16 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-16/adobo-run02-OK.md |
| doom | 2026-10-16 | 36e5420 | OK | 0 | 0 | 0 | reports/2026-10-16/doom-run02-OK.md |
| 0x0day-0wl-morphe-patches | 2026-10-16 | 54db5c9 | OK | 0 | 0 | 0 | reports/2026-10-16/0x0day-0wl-morphe-patches-run02-OK.md |
| 0xtalos-365score-patches | 2026-10-16 | a0075fc | OK | 0 | 0 | 0 | reports/2026-10-16/0xtalos-365score-patches-run02-OK.md |
| abhis1n-morphe-patches | 2026-10-16 | f098a1d | OK | 0 | 0 | 0 | reports/2026-10-16/abhis1n-morphe-patches-run02-OK.md |
| adderalladmiral-psychonaut-journal-patches | 2026-10-16 | 4c4ddab | OK | 0 | 0 | 0 | reports/2026-10-16/adderalladmiral-psychonaut-journal-patches-run02-OK.md |
| adish08-morphe-patches | 2026-10-16 | 2617247 | OK | 0 | 0 | 0 | reports/2026-10-16/adish08-morphe-patches-run02-OK.md |
| ajstrick81-morphe-androidtv-patches | 2026-10-16 | 5eb5de0 | OK | 0 | 0 | 0 | reports/2026-10-16/ajstrick81-morphe-androidtv-patches-run02-OK.md |
| ak800i-mixplorer-patches-for-morphe | 2026-10-16 | 685a2fb | OK | 0 | 0 | 0 | reports/2026-10-16/ak800i-mixplorer-patches-for-morphe-run02-OK.md |
| akash-sriram-morphe-google-photos | 2026-10-16 | 0f05515 | OK | 0 | 0 | 0 | reports/2026-10-16/akash-sriram-morphe-google-photos-run02-OK.md |
| akshayykadam-pixel-camera | 2026-10-16 | 131c293 | OK | 0 | 0 | 0 | reports/2026-10-16/akshayykadam-pixel-camera-run02-OK.md |
| akshayykadam-pixelboard | 2026-10-16 | f57f606 | OK | 0 | 0 | 0 | reports/2026-10-16/akshayykadam-pixelboard-run02-OK.md |
| alalloush-xperia-1v-camera-patches | 2026-10-16 | 68b9788 | OK | 0 | 0 | 0 | reports/2026-10-16/alalloush-xperia-1v-camera-patches-run02-OK.md |
| alan7383-sofatime-patches | 2026-10-16 | c84f3a1 | OK | 0 | 0 | 0 | reports/2026-10-16/alan7383-sofatime-patches-run02-OK.md |
| alastor-kaneki-morphe-patches | 2026-10-16 | b99843d | OK | 0 | 0 | 0 | reports/2026-10-16/alastor-kaneki-morphe-patches-run02-OK.md |
| alexnaga-android-patches | 2026-10-16 | ccfc3c2 | OK | 0 | 0 | 0 | reports/2026-10-16/alexnaga-android-patches-run02-OK.md |
| almewty-my-morphe-patches | 2026-10-16 | 8511a65 | OK | 0 | 0 | 0 | reports/2026-10-16/almewty-my-morphe-patches-run02-OK.md |
| ameenalasady-ameen-morphe | 2026-10-16 | 61894ac | OK | 0 | 0 | 0 | reports/2026-10-16/ameenalasady-ameen-morphe-run02-OK.md |
| amitaisela-travian-morphe-patches | 2026-10-16 | c0359a9 | OK | 0 | 0 | 0 | reports/2026-10-16/amitaisela-travian-morphe-patches-run02-OK.md |
| amplerevanced-revanced-patches | 2026-10-16 | 30930ba | OK | 0 | 0 | 0 | reports/2026-10-16/amplerevanced-revanced-patches-run02-OK.md |
| andersonlucasg3-petalmaps-nonhuawei | 2026-10-16 | 5e95f36 | OK | 0 | 0 | 0 | reports/2026-10-16/andersonlucasg3-petalmaps-nonhuawei-run02-OK.md |
| andrewliang25-morphe-patches | 2026-10-16 | c447144 | OK | 0 | 0 | 0 | reports/2026-10-16/andrewliang25-morphe-patches-run02-OK.md |
| andronedev-morphe-patches | 2026-10-16 | e2ca1d5 | OK | 0 | 0 | 0 | reports/2026-10-16/andronedev-morphe-patches-run02-OK.md |
| ang3lo-azevedo-morphe-patches | 2026-10-16 | 7f1e793 | OK | 0 | 0 | 0 | reports/2026-10-16/ang3lo-azevedo-morphe-patches-run02-OK.md |
| angeldark92-steamlink-patches | 2026-10-16 | 9334cba | OK | 0 | 0 | 0 | reports/2026-10-16/angeldark92-steamlink-patches-run02-OK.md |
| anxyis-anxy-patches | 2026-10-16 | 17f4a8f | OK | 0 | 0 | 0 | reports/2026-10-16/anxyis-anxy-patches-run02-OK.md |
| arandomhooman-hoomans-morphe-patches | 2026-10-16 | 0182778 | OK | 0 | 0 | 0 | reports/2026-10-16/arandomhooman-hoomans-morphe-patches-run02-OK.md |
| arsylk-arsylk-patches | 2026-10-16 | 28d66b8 | OK | 0 | 0 | 0 | reports/2026-10-16/arsylk-arsylk-patches-run02-OK.md |
| azukisensei-aniskip-stremio | 2026-10-16 | 5da4bc3 | OK | 0 | 0 | 0 | reports/2026-10-16/azukisensei-aniskip-stremio-run02-OK.md |
| bakwudo-uyu | 2026-10-16 | a35ca59 | OK | 0 | 0 | 0 | reports/2026-10-16/bakwudo-uyu-run02-OK.md |
| bdgerszewski-morphe-patches-ihealth | 2026-10-16 | 4fc1f1d | OK | 0 | 0 | 0 | reports/2026-10-16/bdgerszewski-morphe-patches-ihealth-run02-OK.md |
| benzophury-oraimo-health-morphe-patches | 2026-10-16 | 8cf03c8 | OK | 0 | 0 | 0 | reports/2026-10-16/benzophury-oraimo-health-morphe-patches-run02-OK.md |
| bholeykabhakt-android-patches-xtra | 2026-10-16 | edbcbfb | OK | 0 | 0 | 0 | reports/2026-10-16/bholeykabhakt-android-patches-xtra-run02-OK.md |
| bigyank-morphe-patches-samsung | 2026-10-16 | 47c62f8 | OK | 0 | 0 | 0 | reports/2026-10-16/bigyank-morphe-patches-samsung-run02-OK.md |
| binarymend-morphe-patches | 2026-10-16 | 9f3d71e | OK | 0 | 0 | 0 | reports/2026-10-16/binarymend-morphe-patches-run02-OK.md |
| blazeftl-ftl-patches | 2026-10-16 | 6515470 | WARN | 0 | 0 | 1 | reports/2026-10-16/blazeftl-ftl-patches-run02-WARN-c0h0m1.md |
| blazko381-luna-tv-device-comp-patch-and-no-lag | 2026-10-16 | error | ERROR | 0 | 0 | 0 | reports/2026-10-16/blazko381-luna-tv-device-comp-patch-and-no-lag.md |
| braintropy-braintropy-patches | 2026-10-16 | b7788d2 | OK | 0 | 0 | 0 | reports/2026-10-16/braintropy-braintropy-patches-run02-OK.md |
| brosssh-morphe-patches | 2026-10-16 | de158a4 | OK | 0 | 0 | 0 | reports/2026-10-16/brosssh-morphe-patches-run02-OK.md |
| browzomje-browzomje-patches | 2026-10-16 | 5fa5c61 | OK | 0 | 0 | 0 | reports/2026-10-16/browzomje-browzomje-patches-run02-OK.md |
| bruddaa-bruddas-morphe-patches | 2026-10-16 | f57e95b | OK | 0 | 0 | 0 | reports/2026-10-16/bruddaa-bruddas-morphe-patches-run02-OK.md |
| bufferk-morphe-patches | 2026-10-16 | 5a3241f | OK | 0 | 0 | 0 | reports/2026-10-16/bufferk-morphe-patches-run02-OK.md |
| bugg4-bugg4s-patches | 2026-10-16 | 18e44d0 | OK | 0 | 0 | 0 | reports/2026-10-16/bugg4-bugg4s-patches-run02-OK.md |
| byehi98-okish-morphe-patches | 2026-10-16 | b66d0e3 | OK | 0 | 0 | 0 | reports/2026-10-16/byehi98-okish-morphe-patches-run02-OK.md |
| canh0chua-morphe-patches | 2026-10-16 | 6ec941f | OK | 0 | 0 | 0 | reports/2026-10-16/canh0chua-morphe-patches-run02-OK.md |
| canic-twitch-morphe-patch | 2026-10-16 | d06e2b9 | OK | 0 | 0 | 0 | reports/2026-10-16/canic-twitch-morphe-patch-run02-OK.md |
| casketpizza-morphe-waze-system-tts | 2026-10-16 | 14ad480 | OK | 0 | 0 | 0 | reports/2026-10-16/casketpizza-morphe-waze-system-tts-run02-OK.md |
| catsmoker-anime-witcher-patches | 2026-10-16 | 2cf90b5 | OK | 0 | 0 | 0 | reports/2026-10-16/catsmoker-anime-witcher-patches-run02-OK.md |
| cesbar-zpatches | 2026-10-16 | 883ccfe | OK | 0 | 0 | 0 | reports/2026-10-16/cesbar-zpatches-run02-OK.md |
| ch3thanhs-stylus | 2026-10-16 | 48e7fdf | OK | 0 | 0 | 0 | reports/2026-10-16/ch3thanhs-stylus-run02-OK.md |
| chicco-carone-morphe-patches-chicco | 2026-10-16 | ef21ab6 | OK | 0 | 0 | 0 | reports/2026-10-16/chicco-carone-morphe-patches-chicco-run02-OK.md |
| chikuwadon-nicoid-re-patches | 2026-10-16 | ad99863 | OK | 0 | 0 | 0 | reports/2026-10-16/chikuwadon-nicoid-re-patches-run02-OK.md |
| chukfinley-tidal-patches | 2026-10-16 | 178bc02 | OK | 0 | 0 | 0 | reports/2026-10-16/chukfinley-tidal-patches-run02-OK.md |
| commit-regrets-morphe-youtube-vr-patches | 2026-10-16 | 611e9f4 | OK | 0 | 0 | 0 | reports/2026-10-16/commit-regrets-morphe-youtube-vr-patches-run02-OK.md |
| comoestaisamigos-ck-zombies-morphe-patches | 2026-10-16 | 749ba1e | OK | 0 | 0 | 0 | reports/2026-10-16/comoestaisamigos-ck-zombies-morphe-patches-run02-OK.md |
| csagataj2-morphe-patches | 2026-10-16 | 8a20739 | OK | 0 | 0 | 0 | reports/2026-10-16/csagataj2-morphe-patches-run02-OK.md |
| dan1eltheman1el-morphe-patches | 2026-10-16 | ec310b5 | OK | 0 | 0 | 0 | reports/2026-10-16/dan1eltheman1el-morphe-patches-run02-OK.md |
| dawidd612-dudeks-morphe-patches | 2026-10-16 | 2298baa | WARN | 0 | 0 | 3 | reports/2026-10-16/dawidd612-dudeks-morphe-patches-run02-WARN-c0h0m3.md |
| debakarr-morphe-patches | 2026-10-16 | b3c23c6 | OK | 0 | 0 | 0 | reports/2026-10-16/debakarr-morphe-patches-run02-OK.md |
| dh6k-morphe-patches | 2026-10-16 | 38471b9 | OK | 0 | 0 | 0 | reports/2026-10-16/dh6k-morphe-patches-run02-OK.md |
| digitalpals-johns-morphe-patches | 2026-10-16 | 3576079 | OK | 0 | 0 | 0 | reports/2026-10-16/digitalpals-johns-morphe-patches-run02-OK.md |
| docbt-patched-up | 2026-10-16 | 28afcb4 | OK | 0 | 0 | 0 | reports/2026-10-16/docbt-patched-up-run02-OK.md |
| dowjames-morphe-patches | 2026-10-16 | ea93ea2 | OK | 0 | 0 | 0 | reports/2026-10-16/dowjames-morphe-patches-run02-OK.md |
| drnhzn-supreme-patches | 2026-10-16 | 1123dd8 | OK | 0 | 0 | 0 | reports/2026-10-16/drnhzn-supreme-patches-run02-OK.md |
| drosocode-morphe-patches | 2026-10-16 | c88bf88 | OK | 0 | 0 | 0 | reports/2026-10-16/drosocode-morphe-patches-run02-OK.md |
| dumb-software-t2c-app-patch-morphe | 2026-10-16 | 2dd8d1d | OK | 0 | 0 | 0 | reports/2026-10-16/dumb-software-t2c-app-patch-morphe-run02-OK.md |
| dunecache-oyasumi-patches | 2026-10-16 | f419de5 | OK | 0 | 0 | 0 | reports/2026-10-16/dunecache-oyasumi-patches-run02-OK.md |
| durgesh0505-chiggi_morphe_patches | 2026-10-16 | c303b89 | OK | 0 | 0 | 0 | reports/2026-10-16/durgesh0505-chiggi_morphe_patches-run02-OK.md |
| early.egg3707-ee-morphe-patches | 2026-10-16 | a9deb3a | OK | 0 | 0 | 0 | reports/2026-10-16/early.egg3707-ee-morphe-patches-run02-OK.md |
| educal72-educal-patches | 2026-10-16 | 67ea6da | OK | 0 | 0 | 0 | reports/2026-10-16/educal72-educal-patches-run02-OK.md |
| entree3k-morning-entree-patches | 2026-10-16 | 9e4c200 | OK | 0 | 0 | 0 | reports/2026-10-16/entree3k-morning-entree-patches-run02-OK.md |
| epxec-android-patches | 2026-10-16 | e28b946 | OK | 0 | 0 | 0 | reports/2026-10-16/epxec-android-patches-run02-OK.md |
| error404rt-anixart-patches | 2026-10-16 | 0089e6d | OK | 0 | 0 | 0 | reports/2026-10-16/error404rt-anixart-patches-run02-OK.md |
| ethan-manny-spotify-tv-crossfade | 2026-10-16 | 991592f | OK | 0 | 0 | 0 | reports/2026-10-16/ethan-manny-spotify-tv-crossfade-run02-OK.md |
| ethanm6-letterboxd-stremio-morphe-patch | 2026-10-16 | 0b6b41d | OK | 0 | 0 | 0 | reports/2026-10-16/ethanm6-letterboxd-stremio-morphe-patch-run02-OK.md |
| ez4rk0-morphe-patches | 2026-10-16 | 1e442bd | OK | 0 | 0 | 0 | reports/2026-10-16/ez4rk0-morphe-patches-run02-OK.md |
| forsigh-waze-patches | 2026-10-16 | 85bc4bc | OK | 0 | 0 | 0 | reports/2026-10-16/forsigh-waze-patches-run02-OK.md |
| foxxoowo-foxxo-patches | 2026-10-16 | ada8498 | OK | 0 | 0 | 0 | reports/2026-10-16/foxxoowo-foxxo-patches-run02-OK.md |
| franticg33k-morphe-patches | 2026-10-16 | c0d9f61 | OK | 0 | 0 | 0 | reports/2026-10-16/franticg33k-morphe-patches-run02-OK.md |
| freeman022026-rustore-privacy-patches | 2026-10-16 | 54a810e | OK | 0 | 0 | 0 | reports/2026-10-16/freeman022026-rustore-privacy-patches-run02-OK.md |
| gamer92000-pixelcamera-patches | 2026-10-16 | 8d45074 | OK | 0 | 0 | 0 | reports/2026-10-16/gamer92000-pixelcamera-patches-run02-OK.md |
| ggyasin-ggyasin-morphe-patches | 2026-10-16 | 9294ac5 | OK | 0 | 0 | 0 | reports/2026-10-16/ggyasin-ggyasin-morphe-patches-run02-OK.md |
| giaaaacomo-nifty-patches-selection | 2026-10-16 | 0e0f42f | OK | 0 | 0 | 0 | reports/2026-10-16/giaaaacomo-nifty-patches-selection-run02-OK.md |
| gitgitro-gitro-morphe-patches | 2026-10-16 | 277365d | OK | 0 | 0 | 0 | reports/2026-10-16/gitgitro-gitro-morphe-patches-run02-OK.md |
| goldrift-morphe-patches | 2026-10-16 | 06859aa | OK | 0 | 0 | 0 | reports/2026-10-16/goldrift-morphe-patches-run02-OK.md |
| hajs110208-morphe-patches | 2026-10-16 | db15d53 | OK | 0 | 0 | 0 | reports/2026-10-16/hajs110208-morphe-patches-run02-OK.md |
| hammadhassan94-ary-live | 2026-10-16 | 965e6ec | OK | 0 | 0 | 0 | reports/2026-10-16/hammadhassan94-ary-live-run02-OK.md |
| hashtagbasit-aimal-patches | 2026-10-16 | 2cea794 | OK | 0 | 0 | 0 | reports/2026-10-16/hashtagbasit-aimal-patches-run02-OK.md |
| helllord77-media-patches | 2026-10-16 | 681354c | OK | 0 | 0 | 0 | reports/2026-10-16/helllord77-media-patches-run02-OK.md |
| hellveticastandard-hellveticapatches | 2026-10-16 | 1b605a2 | OK | 0 | 0 | 0 | reports/2026-10-16/hellveticastandard-hellveticapatches-run02-OK.md |
| heval99-heval-morphe-patches | 2026-10-16 | ae0f5f1 | OK | 0 | 0 | 0 | reports/2026-10-16/heval99-heval-morphe-patches-run02-OK.md |
| heyymichii-michii-patches | 2026-10-16 | dbe97ce | OK | 0 | 0 | 0 | reports/2026-10-16/heyymichii-michii-patches-run02-OK.md |
| hhawkinsau-hh-patches | 2026-10-16 | f7d89d1 | OK | 0 | 0 | 0 | reports/2026-10-16/hhawkinsau-hh-patches-run02-OK.md |
| hiosdra-morphe-patches | 2026-10-16 | 8180c40 | OK | 0 | 0 | 0 | reports/2026-10-16/hiosdra-morphe-patches-run02-OK.md |
| homelander11-beetle-patches | 2026-10-16 | 9000692 | OK | 0 | 0 | 0 | reports/2026-10-16/homelander11-beetle-patches-run02-OK.md |
| hoo-dles-morphe-patches | 2026-10-16 | e9c9426 | OK | 0 | 0 | 0 | reports/2026-10-16/hoo-dles-morphe-patches-run02-OK.md |
| hslightsteel-slight-patches | 2026-10-16 | 489a227 | OK | 0 | 0 | 0 | reports/2026-10-16/hslightsteel-slight-patches-run02-OK.md |
| hu-liberator-patches | 2026-10-16 | e113801 | OK | 0 | 0 | 0 | reports/2026-10-16/hu-liberator-patches-run02-OK.md |
| hvq-eksi-morphe | 2026-10-16 | 570abad | OK | 0 | 0 | 0 | reports/2026-10-16/hvq-eksi-morphe-run02-OK.md |
| hxreborn-morphe-patches | 2026-10-16 | 02637c9 | OK | 0 | 0 | 0 | reports/2026-10-16/hxreborn-morphe-patches-run02-OK.md |
| icysymmetra-tiktok-patches-for-morphe | 2026-10-16 | 3c376ba | OK | 0 | 0 | 0 | reports/2026-10-16/icysymmetra-tiktok-patches-for-morphe-run02-OK.md |
| ihatenodejs-aidans-patches | 2026-10-16 | f00a377 | OK | 0 | 0 | 0 | reports/2026-10-16/ihatenodejs-aidans-patches-run02-OK.md |
| ilikeadofai-vocacolle-morphe-patches | 2026-10-16 | c63d574 | OK | 0 | 0 | 0 | reports/2026-10-16/ilikeadofai-vocacolle-morphe-patches-run02-OK.md |
| imnoammm-noams-morphe-patches | 2026-10-16 | 49b62e4 | OK | 0 | 0 | 0 | reports/2026-10-16/imnoammm-noams-morphe-patches-run02-OK.md |
| imxeren-mix-patches | 2026-10-16 | fcff32f | OK | 0 | 0 | 0 | reports/2026-10-16/imxeren-mix-patches-run02-OK.md |
| ispacecase-patchweaver | 2026-10-16 | 0d6517b | OK | 0 | 0 | 0 | reports/2026-10-16/ispacecase-patchweaver-run02-OK.md |
| isuruhg-cricinfo-tweaks | 2026-10-16 | caca596 | OK | 0 | 0 | 0 | reports/2026-10-16/isuruhg-cricinfo-tweaks-run02-OK.md |
| jackblk-morphe-patches | 2026-10-16 | 53318f9 | OK | 0 | 0 | 0 | reports/2026-10-16/jackblk-morphe-patches-run02-OK.md |
| jacksonjones2003-immersive-keyboard-patches | 2026-10-16 | 97e0811 | OK | 0 | 0 | 0 | reports/2026-10-16/jacksonjones2003-immersive-keyboard-patches-run02-OK.md |
| jacksonjones2003-qqmusic-english-patches | 2026-10-16 | 49b7b00 | OK | 0 | 0 | 0 | reports/2026-10-16/jacksonjones2003-qqmusic-english-patches-run02-OK.md |
| jacobplaysgames-crimeradar-morphe-patches | 2026-10-16 | 4668b10 | OK | 0 | 0 | 0 | reports/2026-10-16/jacobplaysgames-crimeradar-morphe-patches-run02-OK.md |
| jaredcat-morphe-patches | 2026-10-16 | b29188a | OK | 0 | 0 | 0 | reports/2026-10-16/jaredcat-morphe-patches-run02-OK.md |
| jaydenluuuu-sys-line-font-patches | 2026-10-16 | 47596f7 | OK | 0 | 0 | 0 | reports/2026-10-16/jaydenluuuu-sys-line-font-patches-run02-OK.md |
| jcapretta-chessable-patches | 2026-10-16 | aa297df | OK | 0 | 0 | 0 | reports/2026-10-16/jcapretta-chessable-patches-run02-OK.md |
| jeff-tek-jeff-patches | 2026-10-16 | e195faf | OK | 0 | 0 | 0 | reports/2026-10-16/jeff-tek-jeff-patches-run02-OK.md |
| jonnyvr1-morph-patches | 2026-10-16 | 9a8c562 | OK | 0 | 0 | 0 | reports/2026-10-16/jonnyvr1-morph-patches-run02-OK.md |
| joristdh-platypatch | 2026-10-16 | 217afb1 | OK | 0 | 0 | 0 | reports/2026-10-16/joristdh-platypatch-run02-OK.md |
| jrddupont-discord-patches | 2026-10-16 | e3b15da | OK | 0 | 0 | 0 | reports/2026-10-16/jrddupont-discord-patches-run02-OK.md |
| jz6-flexboard | 2026-10-16 | ce1c16c | OK | 0 | 0 | 0 | reports/2026-10-16/jz6-flexboard-run02-OK.md |
| k8r8to-kizu-morphe-patches | 2026-10-16 | 78be324 | OK | 0 | 0 | 0 | reports/2026-10-16/k8r8to-kizu-morphe-patches-run02-OK.md |
| kanup4m-morphe-patches | 2026-10-16 | 959edc3 | OK | 0 | 0 | 0 | reports/2026-10-16/kanup4m-morphe-patches-run02-OK.md |
| kecerim24-morphe-patches | 2026-10-16 | d5e0e02 | OK | 0 | 0 | 0 | reports/2026-10-16/kecerim24-morphe-patches-run02-OK.md |
| kero309x-anghamiplus-patches | 2026-10-16 | 67138d7 | OK | 0 | 0 | 0 | reports/2026-10-16/kero309x-anghamiplus-patches-run02-OK.md |
| kim20598-hakim-morphe-patches | 2026-10-16 | ee16906 | OK | 0 | 0 | 0 | reports/2026-10-16/kim20598-hakim-morphe-patches-run02-OK.md |
| kiraio-moe-lain-patches | 2026-10-16 | 2b90e26 | OK | 0 | 0 | 0 | reports/2026-10-16/kiraio-moe-lain-patches-run02-OK.md |
| kmru-nai64extrapatches | 2026-10-16 | cf40997 | OK | 0 | 0 | 0 | reports/2026-10-16/kmru-nai64extrapatches-run02-OK.md |
| kmru-nai64patches | 2026-10-16 | 59c25e6 | OK | 0 | 0 | 0 | reports/2026-10-16/kmru-nai64patches-run02-OK.md |
| kolaron-morphe-patches | 2026-10-16 | e1d60ca | OK | 0 | 0 | 0 | reports/2026-10-16/kolaron-morphe-patches-run02-OK.md |
| kondratjev-morphe-patches | 2026-10-16 | ff34863 | OK | 0 | 0 | 0 | reports/2026-10-16/kondratjev-morphe-patches-run02-OK.md |
| kuchingneko28-ipusnas-patches | 2026-10-16 | 32c1c40 | OK | 0 | 0 | 0 | reports/2026-10-16/kuchingneko28-ipusnas-patches-run02-OK.md |
| kuntal-devrat-diskwala-patches | 2026-10-16 | 86c9e9c | OK | 0 | 0 | 0 | reports/2026-10-16/kuntal-devrat-diskwala-patches-run02-OK.md |
| kveld9-kveld-extra-morphe-patches | 2026-10-16 | 2f4ea3b | SHALLOW | 0 | 0 | 0 | reports/2026-10-16/kveld9-kveld-extra-morphe-patches-run02-OK.md |
| kveld9-kveld-morphe-patches | 2026-10-16 | f40f440 | SHALLOW | 0 | 0 | 0 | reports/2026-10-16/kveld9-kveld-morphe-patches-run02-OK.md |
| lablazer-morphe-patches | 2026-10-16 | 49f9168 | OK | 0 | 0 | 0 | reports/2026-10-16/lablazer-morphe-patches-run02-OK.md |
| lakakareal-lakakashitpatches | 2026-10-16 | 8d24794 | OK | 0 | 0 | 0 | reports/2026-10-16/lakakareal-lakakashitpatches-run02-OK.md |
| lchanc3-morphe-patches | 2026-10-16 | ce02f2f | OK | 0 | 0 | 0 | reports/2026-10-16/lchanc3-morphe-patches-run02-OK.md |
| legendsciber-morphe-patches | 2026-10-16 | 88f7fa0 | OK | 0 | 0 | 0 | reports/2026-10-16/legendsciber-morphe-patches-run02-OK.md |
| limelimes-cbc-patches | 2026-10-16 | 704d39a | OK | 0 | 0 | 0 | reports/2026-10-16/limelimes-cbc-patches-run02-OK.md |
| liongalahad-liongalahad-nuviotv-morphe-patches | 2026-10-16 | 2450623 | OK | 0 | 0 | 0 | reports/2026-10-16/liongalahad-liongalahad-nuviotv-morphe-patches-run02-OK.md |
| liongalahad-liongalahad-stremio-morphe-patches | 2026-10-16 | b207ce5 | OK | 0 | 0 | 0 | reports/2026-10-16/liongalahad-liongalahad-stremio-morphe-patches-run02-OK.md |
| lockhart07-morphe-patches | 2026-10-16 | 3f23440 | OK | 0 | 0 | 0 | reports/2026-10-16/lockhart07-morphe-patches-run02-OK.md |
| logm1lo-logm1lo-patches | 2026-10-16 | 1c31a4b | OK | 0 | 0 | 0 | reports/2026-10-16/logm1lo-logm1lo-patches-run02-OK.md |
| lootdev78-psylos-morphe-patches | 2026-10-16 | 0eac0c5 | OK | 0 | 0 | 0 | reports/2026-10-16/lootdev78-psylos-morphe-patches-run02-OK.md |
| madhu-gowda6-atharv-patches | 2026-10-16 | 79cab40 | OK | 0 | 0 | 0 | reports/2026-10-16/madhu-gowda6-atharv-patches-run02-OK.md |
| mich111discord-mightymichs-patches | 2026-10-16 | 83a736b | OK | 0 | 0 | 0 | reports/2026-10-16/mich111discord-mightymichs-patches-run02-OK.md |
| miguelninja19-miguel-morphe-patches | 2026-10-16 | bc34838 | OK | 0 | 0 | 0 | reports/2026-10-16/miguelninja19-miguel-morphe-patches-run02-OK.md |
| mohamedamrnady-anghami-patches | 2026-10-16 | 38d12c4 | OK | 0 | 0 | 0 | reports/2026-10-16/mohamedamrnady-anghami-patches-run02-OK.md |
| mubelotix-my-morphe-patches | 2026-10-16 | 8b6f75e | OK | 0 | 0 | 0 | reports/2026-10-16/mubelotix-my-morphe-patches-run02-OK.md |
| mvaishak-letterboxd-morphe-patches | 2026-10-16 | b4658ef | OK | 0 | 0 | 0 | reports/2026-10-16/mvaishak-letterboxd-morphe-patches-run02-OK.md |
| mxkrgt-dbtcoach-morphe-patches | 2026-10-16 | 873f289 | OK | 0 | 0 | 0 | reports/2026-10-16/mxkrgt-dbtcoach-morphe-patches-run02-OK.md |
| nagol12344-patch | 2026-10-16 | b88c4e6 | OK | 0 | 0 | 0 | reports/2026-10-16/nagol12344-patch-run02-OK.md |
| nekogryphou-gryphous-morphe-patches | 2026-10-16 | 8f4bc8c | OK | 0 | 0 | 0 | reports/2026-10-16/nekogryphou-gryphous-morphe-patches-run02-OK.md |
| newuser7171-telegram-morphe-patches- | 2026-10-16 | 289893a | OK | 0 | 0 | 0 | reports/2026-10-16/newuser7171-telegram-morphe-patches--run02-OK.md |
| nickcomua-airofit-pro2-morphe-patches | 2026-10-16 | 15bcaf0 | OK | 0 | 0 | 0 | reports/2026-10-16/nickcomua-airofit-pro2-morphe-patches-run02-OK.md |
| ns1207-morphe-patches-template | 2026-10-16 | fa856e5 | OK | 0 | 0 | 0 | reports/2026-10-16/ns1207-morphe-patches-template-run02-OK.md |
| nullwaypoint-morphe-patches | 2026-10-16 | 107730d | OK | 0 | 0 | 0 | reports/2026-10-16/nullwaypoint-morphe-patches-run02-OK.md |
| o0b-morphe-patches | 2026-10-16 | 5859a62 | OK | 0 | 0 | 0 | reports/2026-10-16/o0b-morphe-patches-run02-OK.md |
| okazakee-iptv-morphe-patches | 2026-10-16 | bb2a59b | OK | 0 | 0 | 0 | reports/2026-10-16/okazakee-iptv-morphe-patches-run02-OK.md |
| osirisad-teamsnap-patches | 2026-10-16 | bb52277 | OK | 0 | 0 | 0 | reports/2026-10-16/osirisad-teamsnap-patches-run02-OK.md |
| paresh-maheshwari-paresh-patches | 2026-10-16 | 84b5e5b | OK | 0 | 0 | 0 | reports/2026-10-16/paresh-maheshwari-paresh-patches-run02-OK.md |
| phamleduy04-duy-patches | 2026-10-16 | 9808547 | OK | 0 | 0 | 0 | reports/2026-10-16/phamleduy04-duy-patches-run02-OK.md |
| picarica-my-moprhe-patches | 2026-10-16 | 3ffd631 | OK | 0 | 0 | 0 | reports/2026-10-16/picarica-my-moprhe-patches-run02-OK.md |
| pigfoot-morphe-patches | 2026-10-16 | 12cebdd | OK | 0 | 0 | 0 | reports/2026-10-16/pigfoot-morphe-patches-run02-OK.md |
| pixelpusher247-morphe-patches | 2026-10-16 | 0d6780b | OK | 0 | 0 | 0 | reports/2026-10-16/pixelpusher247-morphe-patches-run02-OK.md |
| plyrs1-morphe-patches | 2026-10-16 | c59af6e | OK | 0 | 0 | 0 | reports/2026-10-16/plyrs1-morphe-patches-run02-OK.md |
| polka-bear-morphe-patches | 2026-10-16 | ec4905f | OK | 0 | 0 | 0 | reports/2026-10-16/polka-bear-morphe-patches-run02-OK.md |
| prathxmop-prathxm-patches | 2026-10-16 | 011e2ae | OK | 0 | 0 | 0 | reports/2026-10-16/prathxmop-prathxm-patches-run02-OK.md |
| pyflat-jr-morphe-patches | 2026-10-16 | c8a381e | OK | 0 | 0 | 0 | reports/2026-10-16/pyflat-jr-morphe-patches-run02-OK.md |
| quantavil-edge-morphe-patches | 2026-10-16 | 6b99b3a | OK | 0 | 0 | 0 | reports/2026-10-16/quantavil-edge-morphe-patches-run02-OK.md |
| r2beeaton-walmart-morphe | 2026-10-16 | 25ea2dd | OK | 0 | 0 | 0 | reports/2026-10-16/r2beeaton-walmart-morphe-run02-OK.md |
| rabehx-rabehx-patches | 2026-10-16 | c3782a0 | OK | 0 | 0 | 0 | reports/2026-10-16/rabehx-rabehx-patches-run02-OK.md |
| rabilrbl-fluffy-patches | 2026-10-16 | a8d2e4d | OK | 0 | 0 | 0 | reports/2026-10-16/rabilrbl-fluffy-patches-run02-OK.md |
| rafag00-morphe-patches | 2026-10-16 | dfd3325 | OK | 0 | 0 | 0 | reports/2026-10-16/rafag00-morphe-patches-run02-OK.md |
| rahaaatul-morphe-patches | 2026-10-16 | be75d70 | OK | 0 | 0 | 0 | reports/2026-10-16/rahaaatul-morphe-patches-run02-OK.md |
| realcyberwash-max-patches | 2026-10-16 | 712bae3 | OK | 0 | 0 | 0 | reports/2026-10-16/realcyberwash-max-patches-run02-OK.md |
| reemx-morphe-me-patches | 2026-10-16 | eaa9e3c | OK | 0 | 0 | 0 | reports/2026-10-16/reemx-morphe-me-patches-run02-OK.md |
| rhubarbshoelaces-morphe-patches | 2026-10-16 | e2a89cc | OK | 0 | 0 | 0 | reports/2026-10-16/rhubarbshoelaces-morphe-patches-run02-OK.md |
| rikodev-morphed-pl | 2026-10-16 | 94f6e07 | OK | 0 | 0 | 0 | reports/2026-10-16/rikodev-morphed-pl-run02-OK.md |
| rikunode-pupil-swipe-disable-patches | 2026-10-16 | 1c30da1 | OK | 0 | 0 | 0 | reports/2026-10-16/rikunode-pupil-swipe-disable-patches-run02-OK.md |
| riky-dev-morphe-patches | 2026-10-16 | 3f96c82 | OK | 0 | 0 | 0 | reports/2026-10-16/riky-dev-morphe-patches-run02-OK.md |
| ripthulhu-morphe-google-patches | 2026-10-16 | d9769cf | OK | 0 | 0 | 0 | reports/2026-10-16/ripthulhu-morphe-google-patches-run02-OK.md |
| rjbiermann-brave-waffle | 2026-10-16 | 3bf055a | OK | 0 | 0 | 0 | reports/2026-10-16/rjbiermann-brave-waffle-run02-OK.md |
| rookieenough-de-vanced | 2026-10-16 | 5cf78f1 | OK | 0 | 0 | 0 | reports/2026-10-16/rookieenough-de-vanced-run02-OK.md |
| roundsalmon4-morphe-patches-template | 2026-10-16 | f8c95c8 | OK | 0 | 0 | 0 | reports/2026-10-16/roundsalmon4-morphe-patches-template-run02-OK.md |
| rushiranpise-ri-vanced-universal-morphe-patches | 2026-10-16 | b7c4702 | OK | 0 | 0 | 0 | reports/2026-10-16/rushiranpise-ri-vanced-universal-morphe-patches-run02-OK.md |
| ryykitty-twitch-patched | 2026-10-16 | 7c667cf | OK | 0 | 0 | 0 | reports/2026-10-16/ryykitty-twitch-patched-run02-OK.md |
| sailhighsea-sailhighsea-patches | 2026-10-16 | 613d92f | OK | 0 | 0 | 0 | reports/2026-10-16/sailhighsea-sailhighsea-patches-run02-OK.md |
| santodan-santodan-patches | 2026-10-16 | 3ab9681 | OK | 0 | 0 | 0 | reports/2026-10-16/santodan-santodan-patches-run02-OK.md |
| sapitosucio-froggomorphepatches | 2026-10-16 | fcada9f | OK | 0 | 0 | 0 | reports/2026-10-16/sapitosucio-froggomorphepatches-run02-OK.md |
| sfehhrths-ekispert-morphe-patches | 2026-10-16 | 0963f07 | OK | 0 | 0 | 0 | reports/2026-10-16/sfehhrths-ekispert-morphe-patches-run02-OK.md |
| shaun-the-sheep-patches-morphe-patches | 2026-10-16 | 46d09a0 | OK | 0 | 0 | 0 | reports/2026-10-16/shaun-the-sheep-patches-morphe-patches-run02-OK.md |
| shini-cell-shini-morphe | 2026-10-16 | 00c4645 | OK | 0 | 0 | 0 | reports/2026-10-16/shini-cell-shini-morphe-run02-OK.md |
| shuhaibnc-morphe-patches | 2026-10-16 | 733369d | OK | 0 | 0 | 0 | reports/2026-10-16/shuhaibnc-morphe-patches-run02-OK.md |
| snowyegret23-morphe-patches | 2026-10-16 | 93a8f4b | OK | 0 | 0 | 0 | reports/2026-10-16/snowyegret23-morphe-patches-run02-OK.md |
| soubryan-pinterest-morphed | 2026-10-16 | a33eb3a | OK | 0 | 0 | 0 | reports/2026-10-16/soubryan-pinterest-morphed-run02-OK.md |
| spookyexe-morphe-patches | 2026-10-16 | 32b7427 | OK | 0 | 0 | 0 | reports/2026-10-16/spookyexe-morphe-patches-run02-OK.md |
| sqzass-patches | 2026-10-16 | bbbafa5 | OK | 0 | 0 | 0 | reports/2026-10-16/sqzass-patches-run02-OK.md |
| subenoeva-roadsync-patches | 2026-10-16 | b66962d | OK | 0 | 0 | 0 | reports/2026-10-16/subenoeva-roadsync-patches-run02-OK.md |
| sudashiii-servus-patches | 2026-10-16 | 43fc980 | OK | 0 | 0 | 0 | reports/2026-10-16/sudashiii-servus-patches-run02-OK.md |
| supperelias2-sbs-morphe-patches | 2026-10-16 | 6c3554a | OK | 0 | 0 | 0 | reports/2026-10-16/supperelias2-sbs-morphe-patches-run02-OK.md |
| supperelias2-sbs-tv-morphe-patches | 2026-10-16 | 405979d | OK | 0 | 0 | 0 | reports/2026-10-16/supperelias2-sbs-tv-morphe-patches-run02-OK.md |
| sushruth-imgur-patches | 2026-10-16 | 9c0f7da | OK | 0 | 0 | 0 | reports/2026-10-16/sushruth-imgur-patches-run02-OK.md |
| sysadmindoc-hushfeed | 2026-10-16 | a7b12a5 | OK | 0 | 0 | 0 | reports/2026-10-16/sysadmindoc-hushfeed-run02-OK.md |
| sysadmindoc-hushgram | 2026-10-16 | 1fa2a0c | OK | 0 | 0 | 0 | reports/2026-10-16/sysadmindoc-hushgram-run02-OK.md |
| sysadmindoc-hushpinterest | 2026-10-16 | 4b62f8c | OK | 0 | 0 | 0 | reports/2026-10-16/sysadmindoc-hushpinterest-run02-OK.md |
| sysadmindoc-hushtelegram | 2026-10-16 | d69bcd6 | OK | 0 | 0 | 0 | reports/2026-10-16/sysadmindoc-hushtelegram-run02-OK.md |
| sysadmindoc-hushthreads | 2026-10-16 | 47dae78 | OK | 0 | 0 | 0 | reports/2026-10-16/sysadmindoc-hushthreads-run02-OK.md |
| sysadmindoc-hushtumblr | 2026-10-16 | af6e864 | OK | 0 | 0 | 0 | reports/2026-10-16/sysadmindoc-hushtumblr-run02-OK.md |
| tachibana-shin-morphe-patches | 2026-10-16 | f4cd950 | OK | 0 | 0 | 0 | reports/2026-10-16/tachibana-shin-morphe-patches-run02-OK.md |
| testiwy268-morphe-patches | 2026-10-16 | 4ddca00 | OK | 0 | 0 | 0 | reports/2026-10-16/testiwy268-morphe-patches-run02-OK.md |
| theabhishekbhujang-morphe-patches | 2026-10-16 | ad34256 | OK | 0 | 0 | 0 | reports/2026-10-16/theabhishekbhujang-morphe-patches-run02-OK.md |
| thegibbonn-morphe-patches-anilili | 2026-10-16 | f7f35ac | OK | 0 | 0 | 0 | reports/2026-10-16/thegibbonn-morphe-patches-anilili-run02-OK.md |
| thewanwan-bestapp | 2026-10-16 | 2f28eda | OK | 0 | 0 | 0 | reports/2026-10-16/thewanwan-bestapp-run02-OK.md |
| tiaruebar1024-tiaruebar-patches | 2026-10-16 | 2bb3747 | OK | 0 | 0 | 0 | reports/2026-10-16/tiaruebar1024-tiaruebar-patches-run02-OK.md |
| timbuckrue-nyt-games-vrr-patch | 2026-10-16 | 1765519 | OK | 0 | 0 | 0 | reports/2026-10-16/timbuckrue-nyt-games-vrr-patch-run02-OK.md |
| torbenstriegel-morphe-patches-custom | 2026-10-16 | a1d1b53 | OK | 0 | 0 | 0 | reports/2026-10-16/torbenstriegel-morphe-patches-custom-run02-OK.md |
| tornillo2-movistar-block-ads-morphe | 2026-10-16 | 92c9a84 | OK | 0 | 0 | 0 | reports/2026-10-16/tornillo2-movistar-block-ads-morphe-run02-OK.md |
| totsiaw-proxma-patches | 2026-10-16 | 1e775f4 | OK | 0 | 0 | 0 | reports/2026-10-16/totsiaw-proxma-patches-run02-OK.md |
| unkybadtouch-plex-morphe-patches | 2026-10-16 | 216d2eb | OK | 0 | 0 | 0 | reports/2026-10-16/unkybadtouch-plex-morphe-patches-run02-OK.md |
| v4n1x-morphe-patches | 2026-10-16 | 40ef3ad | OK | 0 | 0 | 0 | reports/2026-10-16/v4n1x-morphe-patches-run02-OK.md |
| venusisjaded-venus-patches | 2026-10-16 | ff755ab | RED | 0 | 2 | 1 | reports/2026-10-16/venusisjaded-venus-patches-run02-RED-c0h2m1.md |
| vipinvip-railone-patches | 2026-10-16 | a9ccf13 | OK | 0 | 0 | 0 | reports/2026-10-16/vipinvip-railone-patches-run02-OK.md |
| virzak-morphe-patches | 2026-10-16 | e39e88c | OK | 0 | 0 | 0 | reports/2026-10-16/virzak-morphe-patches-run02-OK.md |
| waggbr-wagg13patch_morphe | 2026-10-16 | 9906263 | WARN | 0 | 0 | 1 | reports/2026-10-16/waggbr-wagg13patch_morphe-run02-WARN-c0h0m1.md |
| wchill-patcheddit | 2026-10-16 | 445bcb0 | OK | 0 | 0 | 0 | reports/2026-10-16/wchill-patcheddit-run02-OK.md |
| wzse-aapam-patches | 2026-10-16 | 34b20c0 | OK | 0 | 0 | 0 | reports/2026-10-16/wzse-aapam-patches-run02-OK.md |
| xhehab-xhehab-patches | 2026-10-16 | be2ec1b | OK | 0 | 0 | 0 | reports/2026-10-16/xhehab-xhehab-patches-run02-OK.md |
| xob0t-morphe-patches | 2026-10-16 | e3aba20 | OK | 0 | 0 | 0 | reports/2026-10-16/xob0t-morphe-patches-run02-OK.md |
| xtapped-morphe-patches | 2026-10-16 | 76625a0 | OK | 0 | 0 | 0 | reports/2026-10-16/xtapped-morphe-patches-run02-OK.md |
| xxxr3dxxx-r3d-patchlab | 2026-10-16 | 3cc486c | OK | 0 | 0 | 0 | reports/2026-10-16/xxxr3dxxx-r3d-patchlab-run02-OK.md |
| yann-soliman-morphe-patches | 2026-10-16 | 7252220 | OK | 0 | 0 | 0 | reports/2026-10-16/yann-soliman-morphe-patches-run02-OK.md |
| zanuaimi-unipatches | 2026-10-16 | b4a07bd | OK | 0 | 0 | 0 | reports/2026-10-16/zanuaimi-unipatches-run02-OK.md |

## Review queue (needs human)

LLM-suspect items below the confirmation bar, plus pending items awaiting a usable verdict. Fully automatic: a repeat non-benign verdict for the same target+file across windows auto-bans with no human in the loop, and a benign verdict clears old strikes. `config/pardons.json` is the manual escape hatch.

| date | target | file | verdict | conf | evidence |
|---|---|---|---|---|---|
| 2026-10-16 | venusisjaded-venus-patches | cross-window | pending | 0 | exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com (2026-10-15) with new Clipboard |
| 2026-10-16 | alastor-kaneki-morphe-patches | cross-window | suspicious | 0.2 | extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditGalleryOverlayController.java |
| 2026-10-15 | akash-sriram-morphe-google-photos | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java | suspicious | 0.35 | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java:1-18 |
| 2026-10-15 | akash-sriram-morphe-google-photos | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/ToolkitWebViewDialog.java | pending | 0 | WebView JS bridge with network sink: evaluateJavascript |
| 2026-10-15 | akash-sriram-morphe-google-photos | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java | suspicious | 0.35 | extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java:1-15 |
| 2026-10-15 | alastor-kaneki-morphe-patches | extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditCurrentPost.java | pending | 0 | reflection-hidden behavior with network sink |
| 2026-10-15 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | suspicious | 0.6 | patches/src/main/resources/nicoid/helpers.mpe: static-analysis reason flags reflection-hidden behavior with network sink,patches/src/main/resources/nicoid/helpers.mpe: network-related strings present (Accept-Ranges, Connection, Content-Length, Content-Type, client=, comments, Response, bytes) |
| 2026-10-15 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | pending | 0 | [binary strings] possible DNS exfiltration channel: getByName |
| 2026-10-15 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/method-delta.dex | pending | 0 | [binary strings] sensitive source reaches network sink |


## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret) and optional `LLM_MODEL` / `LLM_FALLBACKS` (repo variables, auto-resolved to a live free model when empty) plus `LLM_MONTHLY_BUDGET_USD` (default 5); without a key the LLM layer is skipped silently.
