# Morphe patches audit

Scans 4x daily (`0 0,6,12,18 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json. v7: every critical/high goes through the LLM judge; bans only on LLM confirmation.

## :octagonal_sign: Blacklisted — permanently untrusted

Once the LLM confirms a malicious finding the target stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`. Deterministic findings without confirmation never ban.

No blacklisted targets.

## :warning: Critical findings

No critical findings in this window.

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-17 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-17/morphe-patches-run01-OK.md |
| bearinmind | 2026-10-17 | de89b20 | OK | 0 | 0 | 0 | reports/2026-10-17/bearinmind-run01-OK.md |
| d0nj | 2026-10-17 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-17/d0nj-run01-OK.md |
| piko | 2026-10-17 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-17/piko-run01-OK.md |
| piko-ig-lite | 2026-10-17 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-17/piko-ig-lite-run01-OK.md |
| piko-newx | 2026-10-17 | eafea93 | OK | 0 | 0 | 0 | reports/2026-10-17/piko-newx-run01-OK.md |
| gboard | 2026-10-17 | 976b749 | OK | 0 | 0 | 0 | reports/2026-10-17/gboard-run01-OK.md |
| hush-messenger | 2026-10-17 | cd26578 | OK | 0 | 0 | 0 | reports/2026-10-17/hush-messenger-run01-OK.md |
| hush-facebook | 2026-10-17 | 0808c2e | OK | 0 | 0 | 0 | reports/2026-10-17/hush-facebook-run01-OK.md |
| zeldris | 2026-10-17 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-17/zeldris-run01-OK.md |
| adobo | 2026-10-17 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-17/adobo-run01-OK.md |
| doom | 2026-10-17 | 36e5420 | OK | 0 | 0 | 0 | reports/2026-10-17/doom-run01-OK.md |
| 0x0day-0wl-morphe-patches | 2026-10-17 | 54db5c9 | OK | 0 | 0 | 0 | reports/2026-10-17/0x0day-0wl-morphe-patches-run01-OK.md |
| 0xtalos-365score-patches | 2026-10-17 | a0075fc | OK | 0 | 0 | 0 | reports/2026-10-17/0xtalos-365score-patches-run01-OK.md |
| abhis1n-morphe-patches | 2026-10-17 | f098a1d | OK | 0 | 0 | 0 | reports/2026-10-17/abhis1n-morphe-patches-run01-OK.md |
| adderalladmiral-psychonaut-journal-patches | 2026-10-17 | 4c4ddab | OK | 0 | 0 | 0 | reports/2026-10-17/adderalladmiral-psychonaut-journal-patches-run01-OK.md |
| adish08-morphe-patches | 2026-10-17 | 2617247 | OK | 0 | 0 | 0 | reports/2026-10-17/adish08-morphe-patches-run01-OK.md |
| ajstrick81-morphe-androidtv-patches | 2026-10-17 | 6a0a122 | OK | 0 | 0 | 0 | reports/2026-10-17/ajstrick81-morphe-androidtv-patches-run01-OK.md |
| ak800i-mixplorer-patches-for-morphe | 2026-10-17 | 685a2fb | OK | 0 | 0 | 0 | reports/2026-10-17/ak800i-mixplorer-patches-for-morphe-run01-OK.md |
| akash-sriram-morphe-google-photos | 2026-10-17 | 28a7ff5 | OK | 0 | 0 | 0 | reports/2026-10-17/akash-sriram-morphe-google-photos-run01-OK.md |
| akshayykadam-pixel-camera | 2026-10-17 | 131c293 | OK | 0 | 0 | 0 | reports/2026-10-17/akshayykadam-pixel-camera-run01-OK.md |
| akshayykadam-pixelboard | 2026-10-17 | f57f606 | OK | 0 | 0 | 0 | reports/2026-10-17/akshayykadam-pixelboard-run01-OK.md |
| alalloush-xperia-1v-camera-patches | 2026-10-17 | 68b9788 | OK | 0 | 0 | 0 | reports/2026-10-17/alalloush-xperia-1v-camera-patches-run01-OK.md |
| alan7383-sofatime-patches | 2026-10-17 | 3600284 | OK | 0 | 0 | 0 | reports/2026-10-17/alan7383-sofatime-patches-run01-OK.md |
| alastor-kaneki-morphe-patches | 2026-10-17 | b99843d | OK | 0 | 0 | 0 | reports/2026-10-17/alastor-kaneki-morphe-patches-run01-OK.md |
| alexnaga-android-patches | 2026-10-17 | ccfc3c2 | OK | 0 | 0 | 0 | reports/2026-10-17/alexnaga-android-patches-run01-OK.md |
| almewty-my-morphe-patches | 2026-10-17 | 8511a65 | OK | 0 | 0 | 0 | reports/2026-10-17/almewty-my-morphe-patches-run01-OK.md |
| ameenalasady-ameen-morphe | 2026-10-17 | 61894ac | OK | 0 | 0 | 0 | reports/2026-10-17/ameenalasady-ameen-morphe-run01-OK.md |
| amitaisela-travian-morphe-patches | 2026-10-17 | c0359a9 | OK | 0 | 0 | 0 | reports/2026-10-17/amitaisela-travian-morphe-patches-run01-OK.md |
| amplerevanced-revanced-patches | 2026-10-17 | 30930ba | OK | 0 | 0 | 0 | reports/2026-10-17/amplerevanced-revanced-patches-run01-OK.md |
| andersonlucasg3-petalmaps-nonhuawei | 2026-10-17 | 5e95f36 | OK | 0 | 0 | 0 | reports/2026-10-17/andersonlucasg3-petalmaps-nonhuawei-run01-OK.md |
| andrewliang25-morphe-patches | 2026-10-17 | a35c9ac | OK | 0 | 0 | 0 | reports/2026-10-17/andrewliang25-morphe-patches-run01-OK.md |
| andronedev-morphe-patches | 2026-10-17 | e2ca1d5 | OK | 0 | 0 | 0 | reports/2026-10-17/andronedev-morphe-patches-run01-OK.md |
| ang3lo-azevedo-morphe-patches | 2026-10-17 | 7f1e793 | OK | 0 | 0 | 0 | reports/2026-10-17/ang3lo-azevedo-morphe-patches-run01-OK.md |
| angeldark92-steamlink-patches | 2026-10-17 | 9334cba | OK | 0 | 0 | 0 | reports/2026-10-17/angeldark92-steamlink-patches-run01-OK.md |
| anxyis-anxy-patches | 2026-10-17 | 17f4a8f | OK | 0 | 0 | 0 | reports/2026-10-17/anxyis-anxy-patches-run01-OK.md |
| arandomhooman-hoomans-morphe-patches | 2026-10-17 | 0182778 | OK | 0 | 0 | 0 | reports/2026-10-17/arandomhooman-hoomans-morphe-patches-run01-OK.md |
| arsylk-arsylk-patches | 2026-10-17 | 28d66b8 | OK | 0 | 0 | 0 | reports/2026-10-17/arsylk-arsylk-patches-run01-OK.md |
| azukisensei-aniskip-stremio | 2026-10-17 | 5da4bc3 | OK | 0 | 0 | 0 | reports/2026-10-17/azukisensei-aniskip-stremio-run01-OK.md |
| bakwudo-uyu | 2026-10-17 | a35ca59 | OK | 0 | 0 | 0 | reports/2026-10-17/bakwudo-uyu-run01-OK.md |
| bdgerszewski-morphe-patches-ihealth | 2026-10-17 | 4fc1f1d | OK | 0 | 0 | 0 | reports/2026-10-17/bdgerszewski-morphe-patches-ihealth-run01-OK.md |
| benzophury-oraimo-health-morphe-patches | 2026-10-17 | 8cf03c8 | OK | 0 | 0 | 0 | reports/2026-10-17/benzophury-oraimo-health-morphe-patches-run01-OK.md |
| bholeykabhakt-android-patches-xtra | 2026-10-17 | edbcbfb | OK | 0 | 0 | 0 | reports/2026-10-17/bholeykabhakt-android-patches-xtra-run01-OK.md |
| bigyank-morphe-patches-samsung | 2026-10-17 | 7011ce3 | OK | 0 | 0 | 0 | reports/2026-10-17/bigyank-morphe-patches-samsung-run01-OK.md |
| binarymend-morphe-patches | 2026-10-17 | 9f3d71e | OK | 0 | 0 | 0 | reports/2026-10-17/binarymend-morphe-patches-run01-OK.md |
| blazeftl-ftl-patches | 2026-10-17 | 6515470 | OK | 0 | 0 | 0 | reports/2026-10-17/blazeftl-ftl-patches-run01-OK.md |
| blazko381-luna-tv-device-comp-patch-and-no-lag | 2026-10-17 | error | ERROR | 0 | 0 | 0 | reports/2026-10-17/blazko381-luna-tv-device-comp-patch-and-no-lag.md |
| braintropy-braintropy-patches | 2026-10-17 | b7788d2 | OK | 0 | 0 | 0 | reports/2026-10-17/braintropy-braintropy-patches-run01-OK.md |
| brosssh-morphe-patches | 2026-10-17 | de158a4 | OK | 0 | 0 | 0 | reports/2026-10-17/brosssh-morphe-patches-run01-OK.md |
| browzomje-browzomje-patches | 2026-10-17 | 5fa5c61 | OK | 0 | 0 | 0 | reports/2026-10-17/browzomje-browzomje-patches-run01-OK.md |
| bruddaa-bruddas-morphe-patches | 2026-10-17 | f57e95b | OK | 0 | 0 | 0 | reports/2026-10-17/bruddaa-bruddas-morphe-patches-run01-OK.md |
| bufferk-morphe-patches | 2026-10-17 | 5a3241f | OK | 0 | 0 | 0 | reports/2026-10-17/bufferk-morphe-patches-run01-OK.md |
| bugg4-bugg4s-patches | 2026-10-17 | 18e44d0 | OK | 0 | 0 | 0 | reports/2026-10-17/bugg4-bugg4s-patches-run01-OK.md |
| byehi98-okish-morphe-patches | 2026-10-17 | b66d0e3 | OK | 0 | 0 | 0 | reports/2026-10-17/byehi98-okish-morphe-patches-run01-OK.md |
| canh0chua-morphe-patches | 2026-10-17 | 6ec941f | OK | 0 | 0 | 0 | reports/2026-10-17/canh0chua-morphe-patches-run01-OK.md |
| canic-twitch-morphe-patch | 2026-10-17 | d06e2b9 | OK | 0 | 0 | 0 | reports/2026-10-17/canic-twitch-morphe-patch-run01-OK.md |
| casketpizza-morphe-waze-system-tts | 2026-10-17 | 14ad480 | OK | 0 | 0 | 0 | reports/2026-10-17/casketpizza-morphe-waze-system-tts-run01-OK.md |
| catsmoker-anime-witcher-patches | 2026-10-17 | 2cf90b5 | OK | 0 | 0 | 0 | reports/2026-10-17/catsmoker-anime-witcher-patches-run01-OK.md |
| cesbar-zpatches | 2026-10-17 | 883ccfe | OK | 0 | 0 | 0 | reports/2026-10-17/cesbar-zpatches-run01-OK.md |
| ch3thanhs-stylus | 2026-10-17 | 48e7fdf | OK | 0 | 0 | 0 | reports/2026-10-17/ch3thanhs-stylus-run01-OK.md |
| chicco-carone-morphe-patches-chicco | 2026-10-17 | ef21ab6 | OK | 0 | 0 | 0 | reports/2026-10-17/chicco-carone-morphe-patches-chicco-run01-OK.md |
| chikuwadon-nicoid-re-patches | 2026-10-17 | 7f836e5 | OK | 0 | 0 | 0 | reports/2026-10-17/chikuwadon-nicoid-re-patches-run01-OK.md |
| chukfinley-tidal-patches | 2026-10-17 | 178bc02 | OK | 0 | 0 | 0 | reports/2026-10-17/chukfinley-tidal-patches-run01-OK.md |
| commit-regrets-morphe-youtube-vr-patches | 2026-10-17 | 611e9f4 | OK | 0 | 0 | 0 | reports/2026-10-17/commit-regrets-morphe-youtube-vr-patches-run01-OK.md |
| comoestaisamigos-ck-zombies-morphe-patches | 2026-10-17 | 749ba1e | OK | 0 | 0 | 0 | reports/2026-10-17/comoestaisamigos-ck-zombies-morphe-patches-run01-OK.md |
| csagataj2-morphe-patches | 2026-10-17 | 8a20739 | OK | 0 | 0 | 0 | reports/2026-10-17/csagataj2-morphe-patches-run01-OK.md |
| dan1eltheman1el-morphe-patches | 2026-10-17 | ec310b5 | OK | 0 | 0 | 0 | reports/2026-10-17/dan1eltheman1el-morphe-patches-run01-OK.md |
| dawidd612-dudeks-morphe-patches | 2026-10-17 | 2298baa | OK | 0 | 0 | 0 | reports/2026-10-17/dawidd612-dudeks-morphe-patches-run01-OK.md |
| debakarr-morphe-patches | 2026-10-17 | b3c23c6 | OK | 0 | 0 | 0 | reports/2026-10-17/debakarr-morphe-patches-run01-OK.md |
| dh6k-morphe-patches | 2026-10-17 | 38471b9 | OK | 0 | 0 | 0 | reports/2026-10-17/dh6k-morphe-patches-run01-OK.md |
| digitalpals-johns-morphe-patches | 2026-10-17 | 3576079 | OK | 0 | 0 | 0 | reports/2026-10-17/digitalpals-johns-morphe-patches-run01-OK.md |
| docbt-patched-up | 2026-10-17 | 28afcb4 | OK | 0 | 0 | 0 | reports/2026-10-17/docbt-patched-up-run01-OK.md |
| dowjames-morphe-patches | 2026-10-17 | ea93ea2 | OK | 0 | 0 | 0 | reports/2026-10-17/dowjames-morphe-patches-run01-OK.md |
| drnhzn-supreme-patches | 2026-10-17 | 1123dd8 | OK | 0 | 0 | 0 | reports/2026-10-17/drnhzn-supreme-patches-run01-OK.md |
| drosocode-morphe-patches | 2026-10-17 | c88bf88 | OK | 0 | 0 | 0 | reports/2026-10-17/drosocode-morphe-patches-run01-OK.md |
| dumb-software-t2c-app-patch-morphe | 2026-10-17 | 2dd8d1d | OK | 0 | 0 | 0 | reports/2026-10-17/dumb-software-t2c-app-patch-morphe-run01-OK.md |
| dunecache-oyasumi-patches | 2026-10-17 | f419de5 | OK | 0 | 0 | 0 | reports/2026-10-17/dunecache-oyasumi-patches-run01-OK.md |
| durgesh0505-chiggi_morphe_patches | 2026-10-17 | c303b89 | OK | 0 | 0 | 0 | reports/2026-10-17/durgesh0505-chiggi_morphe_patches-run01-OK.md |
| early.egg3707-ee-morphe-patches | 2026-10-17 | a9deb3a | OK | 0 | 0 | 0 | reports/2026-10-17/early.egg3707-ee-morphe-patches-run01-OK.md |
| educal72-educal-patches | 2026-10-17 | 67ea6da | OK | 0 | 0 | 0 | reports/2026-10-17/educal72-educal-patches-run01-OK.md |
| entree3k-morning-entree-patches | 2026-10-17 | 9e4c200 | OK | 0 | 0 | 0 | reports/2026-10-17/entree3k-morning-entree-patches-run01-OK.md |
| epxec-android-patches | 2026-10-17 | e28b946 | OK | 0 | 0 | 0 | reports/2026-10-17/epxec-android-patches-run01-OK.md |
| error404rt-anixart-patches | 2026-10-17 | 0089e6d | OK | 0 | 0 | 0 | reports/2026-10-17/error404rt-anixart-patches-run01-OK.md |
| ethan-manny-spotify-tv-crossfade | 2026-10-17 | 991592f | OK | 0 | 0 | 0 | reports/2026-10-17/ethan-manny-spotify-tv-crossfade-run01-OK.md |
| ethanm6-letterboxd-stremio-morphe-patch | 2026-10-17 | 0b6b41d | OK | 0 | 0 | 0 | reports/2026-10-17/ethanm6-letterboxd-stremio-morphe-patch-run01-OK.md |
| ez4rk0-morphe-patches | 2026-10-17 | 1e442bd | OK | 0 | 0 | 0 | reports/2026-10-17/ez4rk0-morphe-patches-run01-OK.md |
| forsigh-waze-patches | 2026-10-17 | 7d3429a | OK | 0 | 0 | 0 | reports/2026-10-17/forsigh-waze-patches-run01-OK.md |
| foxxoowo-foxxo-patches | 2026-10-17 | ada8498 | OK | 0 | 0 | 0 | reports/2026-10-17/foxxoowo-foxxo-patches-run01-OK.md |
| franticg33k-morphe-patches | 2026-10-17 | c0d9f61 | OK | 0 | 0 | 0 | reports/2026-10-17/franticg33k-morphe-patches-run01-OK.md |
| freeman022026-rustore-privacy-patches | 2026-10-17 | 54a810e | OK | 0 | 0 | 0 | reports/2026-10-17/freeman022026-rustore-privacy-patches-run01-OK.md |
| gamer92000-pixelcamera-patches | 2026-10-17 | 8d45074 | OK | 0 | 0 | 0 | reports/2026-10-17/gamer92000-pixelcamera-patches-run01-OK.md |
| ggyasin-ggyasin-morphe-patches | 2026-10-17 | 9294ac5 | OK | 0 | 0 | 0 | reports/2026-10-17/ggyasin-ggyasin-morphe-patches-run01-OK.md |
| giaaaacomo-nifty-patches-selection | 2026-10-17 | 0e0f42f | OK | 0 | 0 | 0 | reports/2026-10-17/giaaaacomo-nifty-patches-selection-run01-OK.md |
| gitgitro-gitro-morphe-patches | 2026-10-17 | 277365d | OK | 0 | 0 | 0 | reports/2026-10-17/gitgitro-gitro-morphe-patches-run01-OK.md |
| goldrift-morphe-patches | 2026-10-17 | 06859aa | OK | 0 | 0 | 0 | reports/2026-10-17/goldrift-morphe-patches-run01-OK.md |
| hajs110208-morphe-patches | 2026-10-17 | db15d53 | OK | 0 | 0 | 0 | reports/2026-10-17/hajs110208-morphe-patches-run01-OK.md |
| hammadhassan94-ary-live | 2026-10-17 | 965e6ec | OK | 0 | 0 | 0 | reports/2026-10-17/hammadhassan94-ary-live-run01-OK.md |
| hashtagbasit-aimal-patches | 2026-10-17 | 2cea794 | OK | 0 | 0 | 0 | reports/2026-10-17/hashtagbasit-aimal-patches-run01-OK.md |
| helllord77-media-patches | 2026-10-17 | 681354c | OK | 0 | 0 | 0 | reports/2026-10-17/helllord77-media-patches-run01-OK.md |
| hellveticastandard-hellveticapatches | 2026-10-17 | 1b605a2 | OK | 0 | 0 | 0 | reports/2026-10-17/hellveticastandard-hellveticapatches-run01-OK.md |
| heval99-heval-morphe-patches | 2026-10-17 | 9903919 | OK | 0 | 0 | 0 | reports/2026-10-17/heval99-heval-morphe-patches-run01-OK.md |
| heyymichii-michii-patches | 2026-10-17 | 94c95ee | OK | 0 | 0 | 0 | reports/2026-10-17/heyymichii-michii-patches-run01-OK.md |
| hhawkinsau-hh-patches | 2026-10-17 | f7d89d1 | OK | 0 | 0 | 0 | reports/2026-10-17/hhawkinsau-hh-patches-run01-OK.md |
| hiosdra-morphe-patches | 2026-10-17 | 8180c40 | OK | 0 | 0 | 0 | reports/2026-10-17/hiosdra-morphe-patches-run01-OK.md |
| homelander11-beetle-patches | 2026-10-17 | 9000692 | OK | 0 | 0 | 0 | reports/2026-10-17/homelander11-beetle-patches-run01-OK.md |
| hoo-dles-morphe-patches | 2026-10-17 | e9c9426 | OK | 0 | 0 | 0 | reports/2026-10-17/hoo-dles-morphe-patches-run01-OK.md |
| hslightsteel-slight-patches | 2026-10-17 | 489a227 | OK | 0 | 0 | 0 | reports/2026-10-17/hslightsteel-slight-patches-run01-OK.md |
| hu-liberator-patches | 2026-10-17 | 54bb1f7 | OK | 0 | 0 | 0 | reports/2026-10-17/hu-liberator-patches-run01-OK.md |
| hvq-eksi-morphe | 2026-10-17 | 570abad | OK | 0 | 0 | 0 | reports/2026-10-17/hvq-eksi-morphe-run01-OK.md |
| hxreborn-morphe-patches | 2026-10-17 | 968d2d9 | OK | 0 | 0 | 0 | reports/2026-10-17/hxreborn-morphe-patches-run01-OK.md |
| icysymmetra-tiktok-patches-for-morphe | 2026-10-17 | 3c376ba | OK | 0 | 0 | 0 | reports/2026-10-17/icysymmetra-tiktok-patches-for-morphe-run01-OK.md |
| ihatenodejs-aidans-patches | 2026-10-17 | f00a377 | OK | 0 | 0 | 0 | reports/2026-10-17/ihatenodejs-aidans-patches-run01-OK.md |
| ilikeadofai-vocacolle-morphe-patches | 2026-10-17 | c63d574 | OK | 0 | 0 | 0 | reports/2026-10-17/ilikeadofai-vocacolle-morphe-patches-run01-OK.md |
| imnoammm-noams-morphe-patches | 2026-10-17 | 49b62e4 | OK | 0 | 0 | 0 | reports/2026-10-17/imnoammm-noams-morphe-patches-run01-OK.md |
| imxeren-mix-patches | 2026-10-17 | fcff32f | OK | 0 | 0 | 0 | reports/2026-10-17/imxeren-mix-patches-run01-OK.md |
| ispacecase-patchweaver | 2026-10-17 | 0d6517b | OK | 0 | 0 | 0 | reports/2026-10-17/ispacecase-patchweaver-run01-OK.md |
| isuruhg-cricinfo-tweaks | 2026-10-17 | caca596 | OK | 0 | 0 | 0 | reports/2026-10-17/isuruhg-cricinfo-tweaks-run01-OK.md |
| jackblk-morphe-patches | 2026-10-17 | 53318f9 | OK | 0 | 0 | 0 | reports/2026-10-17/jackblk-morphe-patches-run01-OK.md |
| jacksonjones2003-immersive-keyboard-patches | 2026-10-17 | 97e0811 | OK | 0 | 0 | 0 | reports/2026-10-17/jacksonjones2003-immersive-keyboard-patches-run01-OK.md |
| jacksonjones2003-qqmusic-english-patches | 2026-10-17 | 49b7b00 | OK | 0 | 0 | 0 | reports/2026-10-17/jacksonjones2003-qqmusic-english-patches-run01-OK.md |
| jacobplaysgames-crimeradar-morphe-patches | 2026-10-17 | 4668b10 | OK | 0 | 0 | 0 | reports/2026-10-17/jacobplaysgames-crimeradar-morphe-patches-run01-OK.md |
| jaredcat-morphe-patches | 2026-10-17 | b29188a | OK | 0 | 0 | 0 | reports/2026-10-17/jaredcat-morphe-patches-run01-OK.md |
| jaydenluuuu-sys-line-font-patches | 2026-10-17 | 47596f7 | OK | 0 | 0 | 0 | reports/2026-10-17/jaydenluuuu-sys-line-font-patches-run01-OK.md |
| jcapretta-chessable-patches | 2026-10-17 | aa297df | OK | 0 | 0 | 0 | reports/2026-10-17/jcapretta-chessable-patches-run01-OK.md |
| jeff-tek-jeff-patches | 2026-10-17 | e195faf | OK | 0 | 0 | 0 | reports/2026-10-17/jeff-tek-jeff-patches-run01-OK.md |
| jonnyvr1-morph-patches | 2026-10-17 | 9a8c562 | OK | 0 | 0 | 0 | reports/2026-10-17/jonnyvr1-morph-patches-run01-OK.md |
| joristdh-platypatch | 2026-10-17 | 217afb1 | OK | 0 | 0 | 0 | reports/2026-10-17/joristdh-platypatch-run01-OK.md |
| jrddupont-discord-patches | 2026-10-17 | e3b15da | OK | 0 | 0 | 0 | reports/2026-10-17/jrddupont-discord-patches-run01-OK.md |
| jz6-flexboard | 2026-10-17 | ce1c16c | OK | 0 | 0 | 0 | reports/2026-10-17/jz6-flexboard-run01-OK.md |
| k8r8to-kizu-morphe-patches | 2026-10-17 | 78be324 | OK | 0 | 0 | 0 | reports/2026-10-17/k8r8to-kizu-morphe-patches-run01-OK.md |
| kanup4m-morphe-patches | 2026-10-17 | 959edc3 | OK | 0 | 0 | 0 | reports/2026-10-17/kanup4m-morphe-patches-run01-OK.md |
| kecerim24-morphe-patches | 2026-10-17 | d5e0e02 | OK | 0 | 0 | 0 | reports/2026-10-17/kecerim24-morphe-patches-run01-OK.md |
| kero309x-anghamiplus-patches | 2026-10-17 | 67138d7 | OK | 0 | 0 | 0 | reports/2026-10-17/kero309x-anghamiplus-patches-run01-OK.md |
| kim20598-hakim-morphe-patches | 2026-10-17 | ee16906 | OK | 0 | 0 | 0 | reports/2026-10-17/kim20598-hakim-morphe-patches-run01-OK.md |
| kiraio-moe-lain-patches | 2026-10-17 | 2b90e26 | OK | 0 | 0 | 0 | reports/2026-10-17/kiraio-moe-lain-patches-run01-OK.md |
| kmru-nai64extrapatches | 2026-10-17 | cf40997 | OK | 0 | 0 | 0 | reports/2026-10-17/kmru-nai64extrapatches-run01-OK.md |
| kmru-nai64patches | 2026-10-17 | 59c25e6 | OK | 0 | 0 | 0 | reports/2026-10-17/kmru-nai64patches-run01-OK.md |
| kolaron-morphe-patches | 2026-10-17 | e1d60ca | OK | 0 | 0 | 0 | reports/2026-10-17/kolaron-morphe-patches-run01-OK.md |
| kondratjev-morphe-patches | 2026-10-17 | ff34863 | OK | 0 | 0 | 0 | reports/2026-10-17/kondratjev-morphe-patches-run01-OK.md |
| kuchingneko28-ipusnas-patches | 2026-10-17 | 32c1c40 | OK | 0 | 0 | 0 | reports/2026-10-17/kuchingneko28-ipusnas-patches-run01-OK.md |
| kuntal-devrat-diskwala-patches | 2026-10-17 | 86c9e9c | OK | 0 | 0 | 0 | reports/2026-10-17/kuntal-devrat-diskwala-patches-run01-OK.md |
| kveld9-kveld-extra-morphe-patches | 2026-10-17 | 7799298 | SHALLOW | 0 | 0 | 0 | reports/2026-10-17/kveld9-kveld-extra-morphe-patches-run01-OK.md |
| kveld9-kveld-morphe-patches | 2026-10-17 | f40f440 | SHALLOW | 0 | 0 | 0 | reports/2026-10-17/kveld9-kveld-morphe-patches-run01-OK.md |
| lablazer-morphe-patches | 2026-10-17 | 49f9168 | OK | 0 | 0 | 0 | reports/2026-10-17/lablazer-morphe-patches-run01-OK.md |
| lakakareal-lakakashitpatches | 2026-10-17 | 8d24794 | OK | 0 | 0 | 0 | reports/2026-10-17/lakakareal-lakakashitpatches-run01-OK.md |
| lchanc3-morphe-patches | 2026-10-17 | ce02f2f | OK | 0 | 0 | 0 | reports/2026-10-17/lchanc3-morphe-patches-run01-OK.md |
| legendsciber-morphe-patches | 2026-10-17 | 88f7fa0 | OK | 0 | 0 | 0 | reports/2026-10-17/legendsciber-morphe-patches-run01-OK.md |
| limelimes-cbc-patches | 2026-10-17 | 704d39a | OK | 0 | 0 | 0 | reports/2026-10-17/limelimes-cbc-patches-run01-OK.md |
| liongalahad-liongalahad-nuviotv-morphe-patches | 2026-10-17 | 2450623 | OK | 0 | 0 | 0 | reports/2026-10-17/liongalahad-liongalahad-nuviotv-morphe-patches-run01-OK.md |
| liongalahad-liongalahad-stremio-morphe-patches | 2026-10-17 | b207ce5 | OK | 0 | 0 | 0 | reports/2026-10-17/liongalahad-liongalahad-stremio-morphe-patches-run01-OK.md |
| lockhart07-morphe-patches | 2026-10-17 | 3f23440 | OK | 0 | 0 | 0 | reports/2026-10-17/lockhart07-morphe-patches-run01-OK.md |
| logm1lo-logm1lo-patches | 2026-10-17 | 1c31a4b | OK | 0 | 0 | 0 | reports/2026-10-17/logm1lo-logm1lo-patches-run01-OK.md |
| lootdev78-psylos-morphe-patches | 2026-10-17 | 0eac0c5 | OK | 0 | 0 | 0 | reports/2026-10-17/lootdev78-psylos-morphe-patches-run01-OK.md |
| madhu-gowda6-atharv-patches | 2026-10-17 | 79cab40 | OK | 0 | 0 | 0 | reports/2026-10-17/madhu-gowda6-atharv-patches-run01-OK.md |
| mich111discord-mightymichs-patches | 2026-10-17 | 83a736b | OK | 0 | 0 | 0 | reports/2026-10-17/mich111discord-mightymichs-patches-run01-OK.md |
| miguelninja19-miguel-morphe-patches | 2026-10-17 | bc34838 | OK | 0 | 0 | 0 | reports/2026-10-17/miguelninja19-miguel-morphe-patches-run01-OK.md |
| mohamedamrnady-anghami-patches | 2026-10-17 | 38d12c4 | OK | 0 | 0 | 0 | reports/2026-10-17/mohamedamrnady-anghami-patches-run01-OK.md |
| mubelotix-my-morphe-patches | 2026-10-17 | 8b6f75e | OK | 0 | 0 | 0 | reports/2026-10-17/mubelotix-my-morphe-patches-run01-OK.md |
| mvaishak-letterboxd-morphe-patches | 2026-10-17 | b4658ef | OK | 0 | 0 | 0 | reports/2026-10-17/mvaishak-letterboxd-morphe-patches-run01-OK.md |
| mxkrgt-dbtcoach-morphe-patches | 2026-10-17 | 873f289 | OK | 0 | 0 | 0 | reports/2026-10-17/mxkrgt-dbtcoach-morphe-patches-run01-OK.md |
| nagol12344-patch | 2026-10-17 | b88c4e6 | OK | 0 | 0 | 0 | reports/2026-10-17/nagol12344-patch-run01-OK.md |
| nekogryphou-gryphous-morphe-patches | 2026-10-17 | 4662789 | OK | 0 | 0 | 0 | reports/2026-10-17/nekogryphou-gryphous-morphe-patches-run01-OK.md |
| newuser7171-telegram-morphe-patches- | 2026-10-17 | 289893a | OK | 0 | 0 | 0 | reports/2026-10-17/newuser7171-telegram-morphe-patches--run01-OK.md |
| nickcomua-airofit-pro2-morphe-patches | 2026-10-17 | 15bcaf0 | OK | 0 | 0 | 0 | reports/2026-10-17/nickcomua-airofit-pro2-morphe-patches-run01-OK.md |
| ns1207-morphe-patches-template | 2026-10-17 | fa856e5 | OK | 0 | 0 | 0 | reports/2026-10-17/ns1207-morphe-patches-template-run01-OK.md |
| nullwaypoint-morphe-patches | 2026-10-17 | 107730d | OK | 0 | 0 | 0 | reports/2026-10-17/nullwaypoint-morphe-patches-run01-OK.md |
| o0b-morphe-patches | 2026-10-17 | 5859a62 | OK | 0 | 0 | 0 | reports/2026-10-17/o0b-morphe-patches-run01-OK.md |
| okazakee-iptv-morphe-patches | 2026-10-17 | bb2a59b | OK | 0 | 0 | 0 | reports/2026-10-17/okazakee-iptv-morphe-patches-run01-OK.md |
| osirisad-teamsnap-patches | 2026-10-17 | bb52277 | OK | 0 | 0 | 0 | reports/2026-10-17/osirisad-teamsnap-patches-run01-OK.md |
| paresh-maheshwari-paresh-patches | 2026-10-17 | 84b5e5b | OK | 0 | 0 | 0 | reports/2026-10-17/paresh-maheshwari-paresh-patches-run01-OK.md |
| phamleduy04-duy-patches | 2026-10-17 | 9808547 | OK | 0 | 0 | 0 | reports/2026-10-17/phamleduy04-duy-patches-run01-OK.md |
| picarica-my-moprhe-patches | 2026-10-17 | 3ffd631 | OK | 0 | 0 | 0 | reports/2026-10-17/picarica-my-moprhe-patches-run01-OK.md |
| pigfoot-morphe-patches | 2026-10-17 | 12cebdd | OK | 0 | 0 | 0 | reports/2026-10-17/pigfoot-morphe-patches-run01-OK.md |
| pixelpusher247-morphe-patches | 2026-10-17 | 0d6780b | OK | 0 | 0 | 0 | reports/2026-10-17/pixelpusher247-morphe-patches-run01-OK.md |
| plyrs1-morphe-patches | 2026-10-17 | c59af6e | OK | 0 | 0 | 0 | reports/2026-10-17/plyrs1-morphe-patches-run01-OK.md |
| polka-bear-morphe-patches | 2026-10-17 | ec4905f | OK | 0 | 0 | 0 | reports/2026-10-17/polka-bear-morphe-patches-run01-OK.md |
| prathxmop-prathxm-patches | 2026-10-17 | 011e2ae | OK | 0 | 0 | 0 | reports/2026-10-17/prathxmop-prathxm-patches-run01-OK.md |
| pyflat-jr-morphe-patches | 2026-10-17 | c8a381e | OK | 0 | 0 | 0 | reports/2026-10-17/pyflat-jr-morphe-patches-run01-OK.md |
| quantavil-edge-morphe-patches | 2026-10-17 | 6b99b3a | OK | 0 | 0 | 0 | reports/2026-10-17/quantavil-edge-morphe-patches-run01-OK.md |
| r2beeaton-walmart-morphe | 2026-10-17 | 25ea2dd | OK | 0 | 0 | 0 | reports/2026-10-17/r2beeaton-walmart-morphe-run01-OK.md |
| rabehx-rabehx-patches | 2026-10-17 | c3782a0 | OK | 0 | 0 | 0 | reports/2026-10-17/rabehx-rabehx-patches-run01-OK.md |
| rabilrbl-fluffy-patches | 2026-10-17 | a8d2e4d | OK | 0 | 0 | 0 | reports/2026-10-17/rabilrbl-fluffy-patches-run01-OK.md |
| rafag00-morphe-patches | 2026-10-17 | dfd3325 | OK | 0 | 0 | 0 | reports/2026-10-17/rafag00-morphe-patches-run01-OK.md |
| rahaaatul-morphe-patches | 2026-10-17 | be75d70 | OK | 0 | 0 | 0 | reports/2026-10-17/rahaaatul-morphe-patches-run01-OK.md |
| realcyberwash-max-patches | 2026-10-17 | 712bae3 | OK | 0 | 0 | 0 | reports/2026-10-17/realcyberwash-max-patches-run01-OK.md |
| reemx-morphe-me-patches | 2026-10-17 | eaa9e3c | OK | 0 | 0 | 0 | reports/2026-10-17/reemx-morphe-me-patches-run01-OK.md |
| rhubarbshoelaces-morphe-patches | 2026-10-17 | e2a89cc | OK | 0 | 0 | 0 | reports/2026-10-17/rhubarbshoelaces-morphe-patches-run01-OK.md |
| rikodev-morphed-pl | 2026-10-17 | 94f6e07 | OK | 0 | 0 | 0 | reports/2026-10-17/rikodev-morphed-pl-run01-OK.md |
| rikunode-pupil-swipe-disable-patches | 2026-10-17 | 1c30da1 | OK | 0 | 0 | 0 | reports/2026-10-17/rikunode-pupil-swipe-disable-patches-run01-OK.md |
| riky-dev-morphe-patches | 2026-10-17 | 3f96c82 | OK | 0 | 0 | 0 | reports/2026-10-17/riky-dev-morphe-patches-run01-OK.md |
| ripthulhu-morphe-google-patches | 2026-10-17 | d9769cf | OK | 0 | 0 | 0 | reports/2026-10-17/ripthulhu-morphe-google-patches-run01-OK.md |
| rjbiermann-brave-waffle | 2026-10-17 | 3bf055a | OK | 0 | 0 | 0 | reports/2026-10-17/rjbiermann-brave-waffle-run01-OK.md |
| rookieenough-de-vanced | 2026-10-17 | 5cf78f1 | OK | 0 | 0 | 0 | reports/2026-10-17/rookieenough-de-vanced-run01-OK.md |
| roundsalmon4-morphe-patches-template | 2026-10-17 | f8c95c8 | OK | 0 | 0 | 0 | reports/2026-10-17/roundsalmon4-morphe-patches-template-run01-OK.md |
| rushiranpise-ri-vanced-universal-morphe-patches | 2026-10-17 | b7c4702 | OK | 0 | 0 | 0 | reports/2026-10-17/rushiranpise-ri-vanced-universal-morphe-patches-run01-OK.md |
| ryykitty-twitch-patched | 2026-10-17 | 7c667cf | OK | 0 | 0 | 0 | reports/2026-10-17/ryykitty-twitch-patched-run01-OK.md |
| sailhighsea-sailhighsea-patches | 2026-10-17 | 613d92f | OK | 0 | 0 | 0 | reports/2026-10-17/sailhighsea-sailhighsea-patches-run01-OK.md |
| santodan-santodan-patches | 2026-10-17 | 3443b75 | OK | 0 | 0 | 0 | reports/2026-10-17/santodan-santodan-patches-run01-OK.md |
| sapitosucio-froggomorphepatches | 2026-10-17 | fcada9f | OK | 0 | 0 | 0 | reports/2026-10-17/sapitosucio-froggomorphepatches-run01-OK.md |
| sfehhrths-ekispert-morphe-patches | 2026-10-17 | 0963f07 | OK | 0 | 0 | 0 | reports/2026-10-17/sfehhrths-ekispert-morphe-patches-run01-OK.md |
| shaun-the-sheep-patches-morphe-patches | 2026-10-17 | 46d09a0 | OK | 0 | 0 | 0 | reports/2026-10-17/shaun-the-sheep-patches-morphe-patches-run01-OK.md |
| shini-cell-shini-morphe | 2026-10-17 | 00c4645 | OK | 0 | 0 | 0 | reports/2026-10-17/shini-cell-shini-morphe-run01-OK.md |
| shuhaibnc-morphe-patches | 2026-10-17 | 733369d | OK | 0 | 0 | 0 | reports/2026-10-17/shuhaibnc-morphe-patches-run01-OK.md |
| snowyegret23-morphe-patches | 2026-10-17 | 93a8f4b | OK | 0 | 0 | 0 | reports/2026-10-17/snowyegret23-morphe-patches-run01-OK.md |
| soubryan-pinterest-morphed | 2026-10-17 | a33eb3a | OK | 0 | 0 | 0 | reports/2026-10-17/soubryan-pinterest-morphed-run01-OK.md |
| spookyexe-morphe-patches | 2026-10-17 | 32b7427 | OK | 0 | 0 | 0 | reports/2026-10-17/spookyexe-morphe-patches-run01-OK.md |
| sqzass-patches | 2026-10-17 | bbbafa5 | OK | 0 | 0 | 0 | reports/2026-10-17/sqzass-patches-run01-OK.md |
| subenoeva-roadsync-patches | 2026-10-17 | b66962d | OK | 0 | 0 | 0 | reports/2026-10-17/subenoeva-roadsync-patches-run01-OK.md |
| sudashiii-servus-patches | 2026-10-17 | 9e23e94 | OK | 0 | 0 | 0 | reports/2026-10-17/sudashiii-servus-patches-run01-OK.md |
| supperelias2-sbs-morphe-patches | 2026-10-17 | 6c3554a | OK | 0 | 0 | 0 | reports/2026-10-17/supperelias2-sbs-morphe-patches-run01-OK.md |
| supperelias2-sbs-tv-morphe-patches | 2026-10-17 | 405979d | OK | 0 | 0 | 0 | reports/2026-10-17/supperelias2-sbs-tv-morphe-patches-run01-OK.md |
| sushruth-imgur-patches | 2026-10-17 | 9c0f7da | OK | 0 | 0 | 0 | reports/2026-10-17/sushruth-imgur-patches-run01-OK.md |
| sysadmindoc-hushfeed | 2026-10-17 | 1806544 | OK | 0 | 0 | 0 | reports/2026-10-17/sysadmindoc-hushfeed-run01-OK.md |
| sysadmindoc-hushgram | 2026-10-17 | 961fe77 | OK | 0 | 0 | 0 | reports/2026-10-17/sysadmindoc-hushgram-run01-OK.md |
| sysadmindoc-hushpinterest | 2026-10-17 | 4b62f8c | OK | 0 | 0 | 0 | reports/2026-10-17/sysadmindoc-hushpinterest-run01-OK.md |
| sysadmindoc-hushtelegram | 2026-10-17 | f94a428 | OK | 0 | 0 | 0 | reports/2026-10-17/sysadmindoc-hushtelegram-run01-OK.md |
| sysadmindoc-hushthreads | 2026-10-17 | 144baa2 | OK | 0 | 0 | 0 | reports/2026-10-17/sysadmindoc-hushthreads-run01-OK.md |
| sysadmindoc-hushtumblr | 2026-10-17 | c57c320 | OK | 0 | 0 | 0 | reports/2026-10-17/sysadmindoc-hushtumblr-run01-OK.md |
| tachibana-shin-morphe-patches | 2026-10-17 | f4cd950 | OK | 0 | 0 | 0 | reports/2026-10-17/tachibana-shin-morphe-patches-run01-OK.md |
| testiwy268-morphe-patches | 2026-10-17 | 4ddca00 | OK | 0 | 0 | 0 | reports/2026-10-17/testiwy268-morphe-patches-run01-OK.md |
| theabhishekbhujang-morphe-patches | 2026-10-17 | ad34256 | OK | 0 | 0 | 0 | reports/2026-10-17/theabhishekbhujang-morphe-patches-run01-OK.md |
| thegibbonn-morphe-patches-anilili | 2026-10-17 | f7f35ac | OK | 0 | 0 | 0 | reports/2026-10-17/thegibbonn-morphe-patches-anilili-run01-OK.md |
| thewanwan-bestapp | 2026-10-17 | 2f28eda | OK | 0 | 0 | 0 | reports/2026-10-17/thewanwan-bestapp-run01-OK.md |
| tiaruebar1024-tiaruebar-patches | 2026-10-17 | 2bb3747 | OK | 0 | 0 | 0 | reports/2026-10-17/tiaruebar1024-tiaruebar-patches-run01-OK.md |
| timbuckrue-nyt-games-vrr-patch | 2026-10-17 | 1765519 | OK | 0 | 0 | 0 | reports/2026-10-17/timbuckrue-nyt-games-vrr-patch-run01-OK.md |
| torbenstriegel-morphe-patches-custom | 2026-10-17 | a1d1b53 | OK | 0 | 0 | 0 | reports/2026-10-17/torbenstriegel-morphe-patches-custom-run01-OK.md |
| tornillo2-movistar-block-ads-morphe | 2026-10-17 | 92c9a84 | OK | 0 | 0 | 0 | reports/2026-10-17/tornillo2-movistar-block-ads-morphe-run01-OK.md |
| totsiaw-proxma-patches | 2026-10-17 | d8e6348 | SHALLOW | 0 | 0 | 0 | reports/2026-10-17/totsiaw-proxma-patches-run01-OK.md |
| unkybadtouch-plex-morphe-patches | 2026-10-17 | 216d2eb | OK | 0 | 0 | 0 | reports/2026-10-17/unkybadtouch-plex-morphe-patches-run01-OK.md |
| v4n1x-morphe-patches | 2026-10-17 | 40ef3ad | OK | 0 | 0 | 0 | reports/2026-10-17/v4n1x-morphe-patches-run01-OK.md |
| venusisjaded-venus-patches | 2026-10-17 | 88a54b1 | RED | 0 | 1 | 1 | reports/2026-10-17/venusisjaded-venus-patches-run01-RED-c0h1m1.md |
| vipinvip-railone-patches | 2026-10-17 | a9ccf13 | OK | 0 | 0 | 0 | reports/2026-10-17/vipinvip-railone-patches-run01-OK.md |
| virzak-morphe-patches | 2026-10-17 | e39e88c | OK | 0 | 0 | 0 | reports/2026-10-17/virzak-morphe-patches-run01-OK.md |
| waggbr-wagg13patch_morphe | 2026-10-17 | 9906263 | OK | 0 | 0 | 0 | reports/2026-10-17/waggbr-wagg13patch_morphe-run01-OK.md |
| wchill-patcheddit | 2026-10-17 | 445bcb0 | OK | 0 | 0 | 0 | reports/2026-10-17/wchill-patcheddit-run01-OK.md |
| wzse-aapam-patches | 2026-10-17 | 34b20c0 | OK | 0 | 0 | 0 | reports/2026-10-17/wzse-aapam-patches-run01-OK.md |
| xhehab-xhehab-patches | 2026-10-17 | be2ec1b | OK | 0 | 0 | 0 | reports/2026-10-17/xhehab-xhehab-patches-run01-OK.md |
| xob0t-morphe-patches | 2026-10-17 | e3aba20 | OK | 0 | 0 | 0 | reports/2026-10-17/xob0t-morphe-patches-run01-OK.md |
| xtapped-morphe-patches | 2026-10-17 | 76625a0 | OK | 0 | 0 | 0 | reports/2026-10-17/xtapped-morphe-patches-run01-OK.md |
| xxxr3dxxx-r3d-patchlab | 2026-10-17 | 3cc486c | OK | 0 | 0 | 0 | reports/2026-10-17/xxxr3dxxx-r3d-patchlab-run01-OK.md |
| yann-soliman-morphe-patches | 2026-10-17 | 7252220 | OK | 0 | 0 | 0 | reports/2026-10-17/yann-soliman-morphe-patches-run01-OK.md |
| zanuaimi-unipatches | 2026-10-17 | b4a07bd | OK | 0 | 0 | 0 | reports/2026-10-17/zanuaimi-unipatches-run01-OK.md |

## Review queue (needs human)

LLM-suspect items below the confirmation bar, plus pending items awaiting a usable verdict. Fully automatic: a repeat non-benign verdict for the same target+file across windows auto-bans with no human in the loop, and a benign verdict clears old strikes. `config/pardons.json` is the manual escape hatch.

| date | target | file | verdict | conf | evidence |
|---|---|---|---|---|---|
| 2026-10-17 | venusisjaded-venus-patches | cross-window | suspicious | 0.5 | patches/src/main/resources/venus/bootstrap.js |
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
