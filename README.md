# Morphe patches audit

Scans 4x daily (`0 0,6,12,18 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json. v7: every critical/high goes through the LLM judge; bans only on LLM confirmation.

## :octagonal_sign: Blacklisted — permanently untrusted

Once the LLM confirms a malicious finding the target stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`. Deterministic findings without confirmation never ban.

No blacklisted targets.

## :warning: Critical findings

No critical findings in this window.

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-14 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-14/morphe-patches-run04-OK.md |
| bearinmind | 2026-10-14 | de89b20 | RED | 0 | 2 | 1 | reports/2026-10-14/bearinmind-run04-RED-c0h2m1.md |
| d0nj | 2026-10-14 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-14/d0nj-run04-OK.md |
| piko | 2026-10-14 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-14/piko-run04-OK.md |
| piko-ig-lite | 2026-10-14 | b3f4a9d | OK | 0 | 0 | 0 | reports/2026-10-14/piko-ig-lite-run04-OK.md |
| piko-newx | 2026-10-14 | 6c3b0b8 | OK | 0 | 0 | 0 | reports/2026-10-14/piko-newx-run04-OK.md |
| gboard | 2026-10-14 | 6f8064a | OK | 0 | 0 | 0 | reports/2026-10-14/gboard-run04-OK.md |
| hush-messenger | 2026-10-14 | d89260c | OK | 0 | 0 | 0 | reports/2026-10-14/hush-messenger-run04-OK.md |
| hush-facebook | 2026-10-14 | 6f18f79 | OK | 0 | 0 | 0 | reports/2026-10-14/hush-facebook-run04-OK.md |
| zeldris | 2026-10-14 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-14/zeldris-run04-OK.md |
| adobo | 2026-10-14 | a42ace2 | OK | 0 | 0 | 0 | reports/2026-10-14/adobo-run04-OK.md |
| doom | 2026-10-14 | 36e5420 | WARN | 0 | 0 | 1 | reports/2026-10-14/doom-run04-WARN-c0h0m1.md |
| 0x0day-0wl-morphe-patches | 2026-10-14 | 54db5c9 | OK | 0 | 0 | 0 | reports/2026-10-14/0x0day-0wl-morphe-patches-run04-OK.md |
| 0xtalos-365score-patches | 2026-10-14 | a0075fc | OK | 0 | 0 | 0 | reports/2026-10-14/0xtalos-365score-patches-run04-OK.md |
| abhis1n-morphe-patches | 2026-10-14 | f098a1d | OK | 0 | 0 | 0 | reports/2026-10-14/abhis1n-morphe-patches-run04-OK.md |
| adderalladmiral-psychonaut-journal-patches | 2026-10-14 | 4c4ddab | OK | 0 | 0 | 0 | reports/2026-10-14/adderalladmiral-psychonaut-journal-patches-run04-OK.md |
| adish08-morphe-patches | 2026-10-14 | 2617247 | OK | 0 | 0 | 0 | reports/2026-10-14/adish08-morphe-patches-run04-OK.md |
| ajstrick81-morphe-androidtv-patches | 2026-10-14 | 9053d9a | OK | 0 | 0 | 0 | reports/2026-10-14/ajstrick81-morphe-androidtv-patches-run04-OK.md |
| ak800i-mixplorer-patches-for-morphe | 2026-10-14 | 685a2fb | OK | 0 | 0 | 0 | reports/2026-10-14/ak800i-mixplorer-patches-for-morphe-run04-OK.md |
| akash-sriram-morphe-google-photos | 2026-10-14 | 79eb97d | OK | 0 | 0 | 0 | reports/2026-10-14/akash-sriram-morphe-google-photos-run04-OK.md |
| akshayykadam-pixel-camera | 2026-10-14 | f721f61 | OK | 0 | 0 | 0 | reports/2026-10-14/akshayykadam-pixel-camera-run04-OK.md |
| akshayykadam-pixelboard | 2026-10-14 | 8a3377c | OK | 0 | 0 | 0 | reports/2026-10-14/akshayykadam-pixelboard-run04-OK.md |
| alalloush-xperia-1v-camera-patches | 2026-10-14 | 68b9788 | OK | 0 | 0 | 0 | reports/2026-10-14/alalloush-xperia-1v-camera-patches-run04-OK.md |
| alan7383-sofatime-patches | 2026-10-14 | 09c1830 | OK | 0 | 0 | 0 | reports/2026-10-14/alan7383-sofatime-patches-run04-OK.md |
| alastor-kaneki-morphe-patches | 2026-10-14 | fb52a3e | OK | 0 | 0 | 0 | reports/2026-10-14/alastor-kaneki-morphe-patches-run04-OK.md |
| alexnaga-android-patches | 2026-10-14 | ccfc3c2 | OK | 0 | 0 | 0 | reports/2026-10-14/alexnaga-android-patches-run04-OK.md |
| almewty-my-morphe-patches | 2026-10-14 | 8511a65 | OK | 0 | 0 | 0 | reports/2026-10-14/almewty-my-morphe-patches-run04-OK.md |
| ameenalasady-ameen-morphe | 2026-10-14 | 61894ac | OK | 0 | 0 | 0 | reports/2026-10-14/ameenalasady-ameen-morphe-run04-OK.md |
| amitaisela-travian-morphe-patches | 2026-10-14 | c0359a9 | OK | 0 | 0 | 0 | reports/2026-10-14/amitaisela-travian-morphe-patches-run04-OK.md |
| amplerevanced-revanced-patches | 2026-10-14 | 30930ba | OK | 0 | 0 | 0 | reports/2026-10-14/amplerevanced-revanced-patches-run04-OK.md |
| andersonlucasg3-petalmaps-nonhuawei | 2026-10-14 | 5e95f36 | OK | 0 | 0 | 0 | reports/2026-10-14/andersonlucasg3-petalmaps-nonhuawei-run04-OK.md |
| andrewliang25-morphe-patches | 2026-10-14 | b8b5e3d | OK | 0 | 0 | 0 | reports/2026-10-14/andrewliang25-morphe-patches-run04-OK.md |
| andronedev-morphe-patches | 2026-10-14 | e2ca1d5 | OK | 0 | 0 | 0 | reports/2026-10-14/andronedev-morphe-patches-run04-OK.md |
| ang3lo-azevedo-morphe-patches | 2026-10-14 | 7f1e793 | OK | 0 | 0 | 0 | reports/2026-10-14/ang3lo-azevedo-morphe-patches-run04-OK.md |
| angeldark92-steamlink-patches | 2026-10-14 | 69debad | WARN | 0 | 0 | 17 | reports/2026-10-14/angeldark92-steamlink-patches-run04-WARN-c0h0m17.md |
| anxyis-anxy-patches | 2026-10-14 | 17f4a8f | OK | 0 | 0 | 0 | reports/2026-10-14/anxyis-anxy-patches-run04-OK.md |
| arandomhooman-hoomans-morphe-patches | 2026-10-14 | 0182778 | OK | 0 | 0 | 0 | reports/2026-10-14/arandomhooman-hoomans-morphe-patches-run04-OK.md |
| arsylk-arsylk-patches | 2026-10-14 | 28d66b8 | OK | 0 | 0 | 0 | reports/2026-10-14/arsylk-arsylk-patches-run04-OK.md |
| azukisensei-aniskip-stremio | 2026-10-14 | 5da4bc3 | OK | 0 | 0 | 0 | reports/2026-10-14/azukisensei-aniskip-stremio-run04-OK.md |
| bakwudo-uyu | 2026-10-14 | a35ca59 | OK | 0 | 0 | 0 | reports/2026-10-14/bakwudo-uyu-run04-OK.md |
| bdgerszewski-morphe-patches-ihealth | 2026-10-14 | 4fc1f1d | OK | 0 | 0 | 0 | reports/2026-10-14/bdgerszewski-morphe-patches-ihealth-run04-OK.md |
| benzophury-oraimo-health-morphe-patches | 2026-10-14 | 8cf03c8 | OK | 0 | 0 | 0 | reports/2026-10-14/benzophury-oraimo-health-morphe-patches-run04-OK.md |
| bholeykabhakt-android-patches-xtra | 2026-10-14 | edbcbfb | OK | 0 | 0 | 0 | reports/2026-10-14/bholeykabhakt-android-patches-xtra-run04-OK.md |
| bigyank-morphe-patches-samsung | 2026-10-14 | 47aed08 | OK | 0 | 0 | 0 | reports/2026-10-14/bigyank-morphe-patches-samsung-run04-OK.md |
| binarymend-morphe-patches | 2026-10-14 | 9f3d71e | OK | 0 | 0 | 0 | reports/2026-10-14/binarymend-morphe-patches-run04-OK.md |
| blazeftl-ftl-patches | 2026-10-14 | c0ee608 | OK | 0 | 0 | 0 | reports/2026-10-14/blazeftl-ftl-patches-run04-OK.md |
| blazko381-luna-tv-device-comp-patch-and-no-lag | 2026-10-14 | error | ERROR | 0 | 0 | 0 | reports/2026-10-14/blazko381-luna-tv-device-comp-patch-and-no-lag.md |
| braintropy-braintropy-patches | 2026-10-14 | b7788d2 | OK | 0 | 0 | 0 | reports/2026-10-14/braintropy-braintropy-patches-run04-OK.md |
| brosssh-morphe-patches | 2026-10-14 | de158a4 | OK | 0 | 0 | 0 | reports/2026-10-14/brosssh-morphe-patches-run04-OK.md |
| browzomje-browzomje-patches | 2026-10-14 | 5fa5c61 | OK | 0 | 0 | 0 | reports/2026-10-14/browzomje-browzomje-patches-run04-OK.md |
| bruddaa-bruddas-morphe-patches | 2026-10-14 | f57e95b | OK | 0 | 0 | 0 | reports/2026-10-14/bruddaa-bruddas-morphe-patches-run04-OK.md |
| bufferk-morphe-patches | 2026-10-14 | 5a3241f | OK | 0 | 0 | 0 | reports/2026-10-14/bufferk-morphe-patches-run04-OK.md |
| bugg4-bugg4s-patches | 2026-10-14 | 18e44d0 | OK | 0 | 0 | 0 | reports/2026-10-14/bugg4-bugg4s-patches-run04-OK.md |
| byehi98-okish-morphe-patches | 2026-10-14 | b66d0e3 | OK | 0 | 0 | 0 | reports/2026-10-14/byehi98-okish-morphe-patches-run04-OK.md |
| canh0chua-morphe-patches | 2026-10-14 | 6ec941f | OK | 0 | 0 | 0 | reports/2026-10-14/canh0chua-morphe-patches-run04-OK.md |
| canic-twitch-morphe-patch | 2026-10-14 | d06e2b9 | OK | 0 | 0 | 0 | reports/2026-10-14/canic-twitch-morphe-patch-run04-OK.md |
| casketpizza-morphe-waze-system-tts | 2026-10-14 | 14ad480 | OK | 0 | 0 | 0 | reports/2026-10-14/casketpizza-morphe-waze-system-tts-run04-OK.md |
| catsmoker-anime-witcher-patches | 2026-10-14 | 2cf90b5 | OK | 0 | 0 | 0 | reports/2026-10-14/catsmoker-anime-witcher-patches-run04-OK.md |
| cesbar-zpatches | 2026-10-14 | 883ccfe | OK | 0 | 0 | 0 | reports/2026-10-14/cesbar-zpatches-run04-OK.md |
| ch3thanhs-stylus | 2026-10-14 | 48e7fdf | OK | 0 | 0 | 0 | reports/2026-10-14/ch3thanhs-stylus-run04-OK.md |
| chicco-carone-morphe-patches-chicco | 2026-10-14 | ef21ab6 | OK | 0 | 0 | 0 | reports/2026-10-14/chicco-carone-morphe-patches-chicco-run04-OK.md |
| chikuwadon-nicoid-re-patches | 2026-10-14 | 740d330 | OK | 0 | 0 | 0 | reports/2026-10-14/chikuwadon-nicoid-re-patches-run04-OK.md |
| chukfinley-tidal-patches | 2026-10-14 | 178bc02 | OK | 0 | 0 | 0 | reports/2026-10-14/chukfinley-tidal-patches-run04-OK.md |
| commit-regrets-morphe-youtube-vr-patches | 2026-10-14 | e538127 | OK | 0 | 0 | 0 | reports/2026-10-14/commit-regrets-morphe-youtube-vr-patches-run04-OK.md |
| comoestaisamigos-ck-zombies-morphe-patches | 2026-10-14 | 749ba1e | OK | 0 | 0 | 0 | reports/2026-10-14/comoestaisamigos-ck-zombies-morphe-patches-run04-OK.md |
| csagataj2-morphe-patches | 2026-10-14 | 8a20739 | OK | 0 | 0 | 0 | reports/2026-10-14/csagataj2-morphe-patches-run04-OK.md |
| dan1eltheman1el-morphe-patches | 2026-10-14 | ec310b5 | OK | 0 | 0 | 0 | reports/2026-10-14/dan1eltheman1el-morphe-patches-run04-OK.md |
| dawidd612-dudeks-morphe-patches | 2026-10-14 | c97cfe7 | OK | 0 | 0 | 0 | reports/2026-10-14/dawidd612-dudeks-morphe-patches-run04-OK.md |
| debakarr-morphe-patches | 2026-10-14 | b3c23c6 | OK | 0 | 0 | 0 | reports/2026-10-14/debakarr-morphe-patches-run04-OK.md |
| dh6k-morphe-patches | 2026-10-14 | 38471b9 | OK | 0 | 0 | 0 | reports/2026-10-14/dh6k-morphe-patches-run04-OK.md |
| digitalpals-johns-morphe-patches | 2026-10-14 | 3576079 | OK | 0 | 0 | 0 | reports/2026-10-14/digitalpals-johns-morphe-patches-run04-OK.md |
| docbt-patched-up | 2026-10-14 | 28afcb4 | OK | 0 | 0 | 0 | reports/2026-10-14/docbt-patched-up-run04-OK.md |
| dowjames-morphe-patches | 2026-10-14 | ea93ea2 | OK | 0 | 0 | 0 | reports/2026-10-14/dowjames-morphe-patches-run04-OK.md |
| drnhzn-supreme-patches | 2026-10-14 | 1123dd8 | OK | 0 | 0 | 0 | reports/2026-10-14/drnhzn-supreme-patches-run04-OK.md |
| drosocode-morphe-patches | 2026-10-14 | c88bf88 | OK | 0 | 0 | 0 | reports/2026-10-14/drosocode-morphe-patches-run04-OK.md |
| dumb-software-t2c-app-patch-morphe | 2026-10-14 | 2dd8d1d | OK | 0 | 0 | 0 | reports/2026-10-14/dumb-software-t2c-app-patch-morphe-run04-OK.md |
| dunecache-oyasumi-patches | 2026-10-14 | f419de5 | OK | 0 | 0 | 0 | reports/2026-10-14/dunecache-oyasumi-patches-run04-OK.md |
| durgesh0505-chiggi_morphe_patches | 2026-10-14 | c303b89 | OK | 0 | 0 | 0 | reports/2026-10-14/durgesh0505-chiggi_morphe_patches-run04-OK.md |
| early.egg3707-ee-morphe-patches | 2026-10-14 | a9deb3a | OK | 0 | 0 | 0 | reports/2026-10-14/early.egg3707-ee-morphe-patches-run04-OK.md |
| educal72-educal-patches | 2026-10-14 | 67ea6da | OK | 0 | 0 | 0 | reports/2026-10-14/educal72-educal-patches-run04-OK.md |
| entree3k-morning-entree-patches | 2026-10-14 | 9e4c200 | OK | 0 | 0 | 0 | reports/2026-10-14/entree3k-morning-entree-patches-run04-OK.md |
| epxec-android-patches | 2026-10-14 | e28b946 | OK | 0 | 0 | 0 | reports/2026-10-14/epxec-android-patches-run04-OK.md |
| error404rt-anixart-patches | 2026-10-14 | 0089e6d | OK | 0 | 0 | 0 | reports/2026-10-14/error404rt-anixart-patches-run04-OK.md |
| ethan-manny-spotify-tv-crossfade | 2026-10-14 | 991592f | OK | 0 | 0 | 0 | reports/2026-10-14/ethan-manny-spotify-tv-crossfade-run04-OK.md |
| ethanm6-letterboxd-stremio-morphe-patch | 2026-10-14 | 0b6b41d | OK | 0 | 0 | 0 | reports/2026-10-14/ethanm6-letterboxd-stremio-morphe-patch-run04-OK.md |
| ez4rk0-morphe-patches | 2026-10-14 | 1e442bd | OK | 0 | 0 | 0 | reports/2026-10-14/ez4rk0-morphe-patches-run04-OK.md |
| forsigh-waze-patches | 2026-10-14 | ef28d79 | OK | 0 | 0 | 0 | reports/2026-10-14/forsigh-waze-patches-run04-OK.md |
| foxxoowo-foxxo-patches | 2026-10-14 | ada8498 | OK | 0 | 0 | 0 | reports/2026-10-14/foxxoowo-foxxo-patches-run04-OK.md |
| franticg33k-morphe-patches | 2026-10-14 | ebfe877 | OK | 0 | 0 | 0 | reports/2026-10-14/franticg33k-morphe-patches-run04-OK.md |
| freeman022026-rustore-privacy-patches | 2026-10-14 | 54a810e | OK | 0 | 0 | 0 | reports/2026-10-14/freeman022026-rustore-privacy-patches-run04-OK.md |
| gamer92000-pixelcamera-patches | 2026-10-14 | 8d45074 | OK | 0 | 0 | 0 | reports/2026-10-14/gamer92000-pixelcamera-patches-run04-OK.md |
| ggyasin-ggyasin-morphe-patches | 2026-10-14 | 9294ac5 | OK | 0 | 0 | 0 | reports/2026-10-14/ggyasin-ggyasin-morphe-patches-run04-OK.md |
| giaaaacomo-nifty-patches-selection | 2026-10-14 | 0e0f42f | OK | 0 | 0 | 0 | reports/2026-10-14/giaaaacomo-nifty-patches-selection-run04-OK.md |
| gitgitro-gitro-morphe-patches | 2026-10-14 | 277365d | OK | 0 | 0 | 0 | reports/2026-10-14/gitgitro-gitro-morphe-patches-run04-OK.md |
| goldrift-morphe-patches | 2026-10-14 | 06859aa | OK | 0 | 0 | 0 | reports/2026-10-14/goldrift-morphe-patches-run04-OK.md |
| hajs110208-morphe-patches | 2026-10-14 | db15d53 | OK | 0 | 0 | 0 | reports/2026-10-14/hajs110208-morphe-patches-run04-OK.md |
| hammadhassan94-ary-live | 2026-10-14 | 965e6ec | OK | 0 | 0 | 0 | reports/2026-10-14/hammadhassan94-ary-live-run04-OK.md |
| hashtagbasit-aimal-patches | 2026-10-14 | 2cea794 | OK | 0 | 0 | 0 | reports/2026-10-14/hashtagbasit-aimal-patches-run04-OK.md |
| helllord77-media-patches | 2026-10-14 | 681354c | WARN | 0 | 0 | 4 | reports/2026-10-14/helllord77-media-patches-run04-WARN-c0h0m4.md |
| hellveticastandard-hellveticapatches | 2026-10-14 | 1b605a2 | OK | 0 | 0 | 0 | reports/2026-10-14/hellveticastandard-hellveticapatches-run04-OK.md |
| heval99-heval-morphe-patches | 2026-10-14 | ae0f5f1 | OK | 0 | 0 | 0 | reports/2026-10-14/heval99-heval-morphe-patches-run04-OK.md |
| heyymichii-michii-patches | 2026-10-14 | dbe97ce | OK | 0 | 0 | 0 | reports/2026-10-14/heyymichii-michii-patches-run04-OK.md |
| hhawkinsau-hh-patches | 2026-10-14 | f7d89d1 | OK | 0 | 0 | 0 | reports/2026-10-14/hhawkinsau-hh-patches-run04-OK.md |
| hiosdra-morphe-patches | 2026-10-14 | 8180c40 | OK | 0 | 0 | 0 | reports/2026-10-14/hiosdra-morphe-patches-run04-OK.md |
| homelander11-beetle-patches | 2026-10-14 | 9000692 | OK | 0 | 0 | 0 | reports/2026-10-14/homelander11-beetle-patches-run04-OK.md |
| hoo-dles-morphe-patches | 2026-10-14 | e9c9426 | OK | 0 | 0 | 0 | reports/2026-10-14/hoo-dles-morphe-patches-run04-OK.md |
| hslightsteel-slight-patches | 2026-10-14 | 489a227 | OK | 0 | 0 | 0 | reports/2026-10-14/hslightsteel-slight-patches-run04-OK.md |
| hu-liberator-patches | 2026-10-14 | e113801 | OK | 0 | 0 | 0 | reports/2026-10-14/hu-liberator-patches-run04-OK.md |
| hvq-eksi-morphe | 2026-10-14 | 570abad | OK | 0 | 0 | 0 | reports/2026-10-14/hvq-eksi-morphe-run04-OK.md |
| hxreborn-morphe-patches | 2026-10-14 | 5ca7225 | WARN | 0 | 0 | 7 | reports/2026-10-14/hxreborn-morphe-patches-run04-WARN-c0h0m7.md |
| icysymmetra-tiktok-patches-for-morphe | 2026-10-14 | ad4f3be | OK | 0 | 0 | 0 | reports/2026-10-14/icysymmetra-tiktok-patches-for-morphe-run04-OK.md |
| ihatenodejs-aidans-patches | 2026-10-14 | f00a377 | OK | 0 | 0 | 0 | reports/2026-10-14/ihatenodejs-aidans-patches-run04-OK.md |
| ilikeadofai-vocacolle-morphe-patches | 2026-10-14 | c63d574 | OK | 0 | 0 | 0 | reports/2026-10-14/ilikeadofai-vocacolle-morphe-patches-run04-OK.md |
| imnoammm-noams-morphe-patches | 2026-10-14 | f1fa022 | OK | 0 | 0 | 0 | reports/2026-10-14/imnoammm-noams-morphe-patches-run04-OK.md |
| imxeren-mix-patches | 2026-10-14 | fcff32f | OK | 0 | 0 | 0 | reports/2026-10-14/imxeren-mix-patches-run04-OK.md |
| ispacecase-patchweaver | 2026-10-14 | 0d6517b | OK | 0 | 0 | 0 | reports/2026-10-14/ispacecase-patchweaver-run04-OK.md |
| isuruhg-cricinfo-tweaks | 2026-10-14 | caca596 | OK | 0 | 0 | 0 | reports/2026-10-14/isuruhg-cricinfo-tweaks-run04-OK.md |
| jackblk-morphe-patches | 2026-10-14 | 53318f9 | OK | 0 | 0 | 0 | reports/2026-10-14/jackblk-morphe-patches-run04-OK.md |
| jacksonjones2003-immersive-keyboard-patches | 2026-10-14 | 97e0811 | OK | 0 | 0 | 0 | reports/2026-10-14/jacksonjones2003-immersive-keyboard-patches-run04-OK.md |
| jacksonjones2003-qqmusic-english-patches | 2026-10-14 | 49b7b00 | OK | 0 | 0 | 0 | reports/2026-10-14/jacksonjones2003-qqmusic-english-patches-run04-OK.md |
| jacobplaysgames-crimeradar-morphe-patches | 2026-10-14 | 4668b10 | OK | 0 | 0 | 0 | reports/2026-10-14/jacobplaysgames-crimeradar-morphe-patches-run04-OK.md |
| jaredcat-morphe-patches | 2026-10-14 | b29188a | OK | 0 | 0 | 0 | reports/2026-10-14/jaredcat-morphe-patches-run04-OK.md |
| jaydenluuuu-sys-line-font-patches | 2026-10-14 | 47596f7 | OK | 0 | 0 | 0 | reports/2026-10-14/jaydenluuuu-sys-line-font-patches-run04-OK.md |
| jcapretta-chessable-patches | 2026-10-14 | aa297df | OK | 0 | 0 | 0 | reports/2026-10-14/jcapretta-chessable-patches-run04-OK.md |
| jeff-tek-jeff-patches | 2026-10-14 | e195faf | OK | 0 | 0 | 0 | reports/2026-10-14/jeff-tek-jeff-patches-run04-OK.md |
| jonnyvr1-morph-patches | 2026-10-14 | 9a8c562 | OK | 0 | 0 | 0 | reports/2026-10-14/jonnyvr1-morph-patches-run04-OK.md |
| joristdh-platypatch | 2026-10-14 | 217afb1 | OK | 0 | 0 | 0 | reports/2026-10-14/joristdh-platypatch-run04-OK.md |
| jrddupont-discord-patches | 2026-10-14 | e3b15da | OK | 0 | 0 | 0 | reports/2026-10-14/jrddupont-discord-patches-run04-OK.md |
| jz6-flexboard | 2026-10-14 | ce1c16c | OK | 0 | 0 | 0 | reports/2026-10-14/jz6-flexboard-run04-OK.md |
| k8r8to-kizu-morphe-patches | 2026-10-14 | 78be324 | OK | 0 | 0 | 0 | reports/2026-10-14/k8r8to-kizu-morphe-patches-run04-OK.md |
| kanup4m-morphe-patches | 2026-10-14 | 959edc3 | OK | 0 | 0 | 0 | reports/2026-10-14/kanup4m-morphe-patches-run04-OK.md |
| kecerim24-morphe-patches | 2026-10-14 | d5e0e02 | OK | 0 | 0 | 0 | reports/2026-10-14/kecerim24-morphe-patches-run04-OK.md |
| kero309x-anghamiplus-patches | 2026-10-14 | 67138d7 | OK | 0 | 0 | 0 | reports/2026-10-14/kero309x-anghamiplus-patches-run04-OK.md |
| kim20598-hakim-morphe-patches | 2026-10-14 | ee16906 | OK | 0 | 0 | 0 | reports/2026-10-14/kim20598-hakim-morphe-patches-run04-OK.md |
| kiraio-moe-lain-patches | 2026-10-14 | 2b90e26 | OK | 0 | 0 | 0 | reports/2026-10-14/kiraio-moe-lain-patches-run04-OK.md |
| kmru-nai64extrapatches | 2026-10-14 | cf40997 | OK | 0 | 0 | 0 | reports/2026-10-14/kmru-nai64extrapatches-run04-OK.md |
| kmru-nai64patches | 2026-10-14 | 59c25e6 | OK | 0 | 0 | 0 | reports/2026-10-14/kmru-nai64patches-run04-OK.md |
| kolaron-morphe-patches | 2026-10-14 | e1d60ca | OK | 0 | 0 | 0 | reports/2026-10-14/kolaron-morphe-patches-run04-OK.md |
| kondratjev-morphe-patches | 2026-10-14 | ff34863 | OK | 0 | 0 | 0 | reports/2026-10-14/kondratjev-morphe-patches-run04-OK.md |
| kuchingneko28-ipusnas-patches | 2026-10-14 | 32c1c40 | OK | 0 | 0 | 0 | reports/2026-10-14/kuchingneko28-ipusnas-patches-run04-OK.md |
| kuntal-devrat-diskwala-patches | 2026-10-14 | 86c9e9c | OK | 0 | 0 | 0 | reports/2026-10-14/kuntal-devrat-diskwala-patches-run04-OK.md |
| kveld9-kveld-extra-morphe-patches | 2026-10-14 | 10714f3 | SHALLOW | 0 | 0 | 0 | reports/2026-10-14/kveld9-kveld-extra-morphe-patches-run04-OK.md |
| kveld9-kveld-morphe-patches | 2026-10-14 | 9cbf2a8 | SHALLOW | 0 | 0 | 0 | reports/2026-10-14/kveld9-kveld-morphe-patches-run04-OK.md |
| lablazer-morphe-patches | 2026-10-14 | 49f9168 | OK | 0 | 0 | 0 | reports/2026-10-14/lablazer-morphe-patches-run04-OK.md |
| lakakareal-lakakashitpatches | 2026-10-14 | 8d24794 | OK | 0 | 0 | 0 | reports/2026-10-14/lakakareal-lakakashitpatches-run04-OK.md |
| lchanc3-morphe-patches | 2026-10-14 | ce02f2f | OK | 0 | 0 | 0 | reports/2026-10-14/lchanc3-morphe-patches-run04-OK.md |
| legendsciber-morphe-patches | 2026-10-14 | 55801ad | OK | 0 | 0 | 0 | reports/2026-10-14/legendsciber-morphe-patches-run04-OK.md |
| limelimes-cbc-patches | 2026-10-14 | 704d39a | OK | 0 | 0 | 0 | reports/2026-10-14/limelimes-cbc-patches-run04-OK.md |
| liongalahad-liongalahad-nuviotv-morphe-patches | 2026-10-14 | 2450623 | OK | 0 | 0 | 0 | reports/2026-10-14/liongalahad-liongalahad-nuviotv-morphe-patches-run04-OK.md |
| liongalahad-liongalahad-stremio-morphe-patches | 2026-10-14 | b207ce5 | OK | 0 | 0 | 0 | reports/2026-10-14/liongalahad-liongalahad-stremio-morphe-patches-run04-OK.md |
| lockhart07-morphe-patches | 2026-10-14 | 3f23440 | OK | 0 | 0 | 0 | reports/2026-10-14/lockhart07-morphe-patches-run04-OK.md |
| logm1lo-logm1lo-patches | 2026-10-14 | 1c31a4b | OK | 0 | 0 | 0 | reports/2026-10-14/logm1lo-logm1lo-patches-run04-OK.md |
| lootdev78-psylos-morphe-patches | 2026-10-14 | 0eac0c5 | OK | 0 | 0 | 0 | reports/2026-10-14/lootdev78-psylos-morphe-patches-run04-OK.md |
| madhu-gowda6-atharv-patches | 2026-10-14 | 79cab40 | OK | 0 | 0 | 0 | reports/2026-10-14/madhu-gowda6-atharv-patches-run04-OK.md |
| mich111discord-mightymichs-patches | 2026-10-14 | 83a736b | OK | 0 | 0 | 0 | reports/2026-10-14/mich111discord-mightymichs-patches-run04-OK.md |
| miguelninja19-miguel-morphe-patches | 2026-10-14 | bc34838 | OK | 0 | 0 | 0 | reports/2026-10-14/miguelninja19-miguel-morphe-patches-run04-OK.md |
| mohamedamrnady-anghami-patches | 2026-10-14 | 38d12c4 | OK | 0 | 0 | 0 | reports/2026-10-14/mohamedamrnady-anghami-patches-run04-OK.md |
| mubelotix-my-morphe-patches | 2026-10-14 | 8b6f75e | OK | 0 | 0 | 0 | reports/2026-10-14/mubelotix-my-morphe-patches-run04-OK.md |
| mvaishak-letterboxd-morphe-patches | 2026-10-14 | b4658ef | OK | 0 | 0 | 0 | reports/2026-10-14/mvaishak-letterboxd-morphe-patches-run04-OK.md |
| mxkrgt-dbtcoach-morphe-patches | 2026-10-14 | 873f289 | OK | 0 | 0 | 0 | reports/2026-10-14/mxkrgt-dbtcoach-morphe-patches-run04-OK.md |
| nagol12344-patch | 2026-10-14 | b88c4e6 | OK | 0 | 0 | 0 | reports/2026-10-14/nagol12344-patch-run04-OK.md |
| nekogryphou-gryphous-morphe-patches | 2026-10-14 | 8f4bc8c | OK | 0 | 0 | 0 | reports/2026-10-14/nekogryphou-gryphous-morphe-patches-run04-OK.md |
| newuser7171-telegram-morphe-patches- | 2026-10-14 | 289893a | OK | 0 | 0 | 0 | reports/2026-10-14/newuser7171-telegram-morphe-patches--run04-OK.md |
| nickcomua-airofit-pro2-morphe-patches | 2026-10-14 | 15bcaf0 | OK | 0 | 0 | 0 | reports/2026-10-14/nickcomua-airofit-pro2-morphe-patches-run04-OK.md |
| ns1207-morphe-patches-template | 2026-10-14 | fa856e5 | OK | 0 | 0 | 0 | reports/2026-10-14/ns1207-morphe-patches-template-run04-OK.md |
| nullwaypoint-morphe-patches | 2026-10-14 | 107730d | OK | 0 | 0 | 0 | reports/2026-10-14/nullwaypoint-morphe-patches-run04-OK.md |
| o0b-morphe-patches | 2026-10-14 | 5859a62 | OK | 0 | 0 | 0 | reports/2026-10-14/o0b-morphe-patches-run04-OK.md |
| okazakee-iptv-morphe-patches | 2026-10-14 | bb2a59b | OK | 0 | 0 | 0 | reports/2026-10-14/okazakee-iptv-morphe-patches-run04-OK.md |
| osirisad-teamsnap-patches | 2026-10-14 | bb52277 | OK | 0 | 0 | 0 | reports/2026-10-14/osirisad-teamsnap-patches-run04-OK.md |
| paresh-maheshwari-paresh-patches | 2026-10-14 | 84b5e5b | OK | 0 | 0 | 0 | reports/2026-10-14/paresh-maheshwari-paresh-patches-run04-OK.md |
| phamleduy04-duy-patches | 2026-10-14 | 9808547 | OK | 0 | 0 | 0 | reports/2026-10-14/phamleduy04-duy-patches-run04-OK.md |
| picarica-my-moprhe-patches | 2026-10-14 | 3ffd631 | OK | 0 | 0 | 0 | reports/2026-10-14/picarica-my-moprhe-patches-run04-OK.md |
| pigfoot-morphe-patches | 2026-10-14 | 12cebdd | OK | 0 | 0 | 0 | reports/2026-10-14/pigfoot-morphe-patches-run04-OK.md |
| pixelpusher247-morphe-patches | 2026-10-14 | 0d6780b | OK | 0 | 0 | 0 | reports/2026-10-14/pixelpusher247-morphe-patches-run04-OK.md |
| plyrs1-morphe-patches | 2026-10-14 | c59af6e | OK | 0 | 0 | 0 | reports/2026-10-14/plyrs1-morphe-patches-run04-OK.md |
| polka-bear-morphe-patches | 2026-10-14 | ec4905f | OK | 0 | 0 | 0 | reports/2026-10-14/polka-bear-morphe-patches-run04-OK.md |
| prathxmop-prathxm-patches | 2026-10-14 | 011e2ae | OK | 0 | 0 | 0 | reports/2026-10-14/prathxmop-prathxm-patches-run04-OK.md |
| pyflat-jr-morphe-patches | 2026-10-14 | c8a381e | OK | 0 | 0 | 0 | reports/2026-10-14/pyflat-jr-morphe-patches-run04-OK.md |
| quantavil-edge-morphe-patches | 2026-10-14 | 6b99b3a | OK | 0 | 0 | 0 | reports/2026-10-14/quantavil-edge-morphe-patches-run04-OK.md |
| r2beeaton-walmart-morphe | 2026-10-14 | 25ea2dd | OK | 0 | 0 | 0 | reports/2026-10-14/r2beeaton-walmart-morphe-run04-OK.md |
| rabehx-rabehx-patches | 2026-10-14 | c3782a0 | OK | 0 | 0 | 0 | reports/2026-10-14/rabehx-rabehx-patches-run04-OK.md |
| rabilrbl-fluffy-patches | 2026-10-14 | a8d2e4d | OK | 0 | 0 | 0 | reports/2026-10-14/rabilrbl-fluffy-patches-run04-OK.md |
| rafag00-morphe-patches | 2026-10-14 | dfd3325 | OK | 0 | 0 | 0 | reports/2026-10-14/rafag00-morphe-patches-run04-OK.md |
| rahaaatul-morphe-patches | 2026-10-14 | be75d70 | OK | 0 | 0 | 0 | reports/2026-10-14/rahaaatul-morphe-patches-run04-OK.md |
| realcyberwash-max-patches | 2026-10-14 | 712bae3 | OK | 0 | 0 | 0 | reports/2026-10-14/realcyberwash-max-patches-run04-OK.md |
| reemx-morphe-me-patches | 2026-10-14 | eaa9e3c | OK | 0 | 0 | 0 | reports/2026-10-14/reemx-morphe-me-patches-run04-OK.md |
| rhubarbshoelaces-morphe-patches | 2026-10-14 | e2a89cc | OK | 0 | 0 | 0 | reports/2026-10-14/rhubarbshoelaces-morphe-patches-run04-OK.md |
| rikodev-morphed-pl | 2026-10-14 | 94f6e07 | OK | 0 | 0 | 0 | reports/2026-10-14/rikodev-morphed-pl-run04-OK.md |
| rikunode-pupil-swipe-disable-patches | 2026-10-14 | b8cce10 | OK | 0 | 0 | 0 | reports/2026-10-14/rikunode-pupil-swipe-disable-patches-run04-OK.md |
| riky-dev-morphe-patches | 2026-10-14 | 3f96c82 | OK | 0 | 0 | 0 | reports/2026-10-14/riky-dev-morphe-patches-run04-OK.md |
| ripthulhu-morphe-google-patches | 2026-10-14 | d9769cf | OK | 0 | 0 | 0 | reports/2026-10-14/ripthulhu-morphe-google-patches-run04-OK.md |
| rjbiermann-brave-waffle | 2026-10-14 | 3bf055a | OK | 0 | 0 | 0 | reports/2026-10-14/rjbiermann-brave-waffle-run04-OK.md |
| rookieenough-de-vanced | 2026-10-14 | 5cf78f1 | OK | 0 | 0 | 0 | reports/2026-10-14/rookieenough-de-vanced-run04-OK.md |
| roundsalmon4-morphe-patches-template | 2026-10-14 | f8c95c8 | OK | 0 | 0 | 0 | reports/2026-10-14/roundsalmon4-morphe-patches-template-run04-OK.md |
| rushiranpise-ri-vanced-universal-morphe-patches | 2026-10-14 | b7c4702 | OK | 0 | 0 | 0 | reports/2026-10-14/rushiranpise-ri-vanced-universal-morphe-patches-run04-OK.md |
| ryykitty-twitch-patched | 2026-10-14 | 795e86e | OK | 0 | 0 | 0 | reports/2026-10-14/ryykitty-twitch-patched-run04-OK.md |
| sailhighsea-sailhighsea-patches | 2026-10-14 | 613d92f | OK | 0 | 0 | 0 | reports/2026-10-14/sailhighsea-sailhighsea-patches-run04-OK.md |
| santodan-santodan-patches | 2026-10-14 | af8fbed | OK | 0 | 0 | 0 | reports/2026-10-14/santodan-santodan-patches-run04-OK.md |
| sapitosucio-froggomorphepatches | 2026-10-14 | fcada9f | OK | 0 | 0 | 0 | reports/2026-10-14/sapitosucio-froggomorphepatches-run04-OK.md |
| sfehhrths-ekispert-morphe-patches | 2026-10-14 | 0963f07 | OK | 0 | 0 | 0 | reports/2026-10-14/sfehhrths-ekispert-morphe-patches-run04-OK.md |
| shaun-the-sheep-patches-morphe-patches | 2026-10-14 | 46d09a0 | OK | 0 | 0 | 0 | reports/2026-10-14/shaun-the-sheep-patches-morphe-patches-run04-OK.md |
| shini-cell-shini-morphe | 2026-10-14 | 00c4645 | OK | 0 | 0 | 0 | reports/2026-10-14/shini-cell-shini-morphe-run04-OK.md |
| shuhaibnc-morphe-patches | 2026-10-14 | 00a38dd | OK | 0 | 0 | 0 | reports/2026-10-14/shuhaibnc-morphe-patches-run04-OK.md |
| snowyegret23-morphe-patches | 2026-10-14 | 0a9ebfc | OK | 0 | 0 | 0 | reports/2026-10-14/snowyegret23-morphe-patches-run04-OK.md |
| soubryan-pinterest-morphed | 2026-10-14 | a33eb3a | OK | 0 | 0 | 0 | reports/2026-10-14/soubryan-pinterest-morphed-run04-OK.md |
| spookyexe-morphe-patches | 2026-10-14 | 32b7427 | OK | 0 | 0 | 0 | reports/2026-10-14/spookyexe-morphe-patches-run04-OK.md |
| sqzass-patches | 2026-10-14 | 88f1434 | OK | 0 | 0 | 0 | reports/2026-10-14/sqzass-patches-run04-OK.md |
| subenoeva-roadsync-patches | 2026-10-14 | b66962d | OK | 0 | 0 | 0 | reports/2026-10-14/subenoeva-roadsync-patches-run04-OK.md |
| sudashiii-servus-patches | 2026-10-14 | 43fc980 | OK | 0 | 0 | 0 | reports/2026-10-14/sudashiii-servus-patches-run04-OK.md |
| supperelias2-sbs-morphe-patches | 2026-10-14 | 6c3554a | OK | 0 | 0 | 0 | reports/2026-10-14/supperelias2-sbs-morphe-patches-run04-OK.md |
| supperelias2-sbs-tv-morphe-patches | 2026-10-14 | 405979d | OK | 0 | 0 | 0 | reports/2026-10-14/supperelias2-sbs-tv-morphe-patches-run04-OK.md |
| sushruth-imgur-patches | 2026-10-14 | 9c0f7da | OK | 0 | 0 | 0 | reports/2026-10-14/sushruth-imgur-patches-run04-OK.md |
| sysadmindoc-hushfeed | 2026-10-14 | 2a99958 | RED | 0 | 2 | 0 | reports/2026-10-14/sysadmindoc-hushfeed-run04-RED-c0h2m0.md |
| sysadmindoc-hushgram | 2026-10-14 | 11e3879 | OK | 0 | 0 | 0 | reports/2026-10-14/sysadmindoc-hushgram-run04-OK.md |
| sysadmindoc-hushpinterest | 2026-10-14 | 4b62f8c | OK | 0 | 0 | 0 | reports/2026-10-14/sysadmindoc-hushpinterest-run04-OK.md |
| sysadmindoc-hushtelegram | 2026-10-14 | 637703c | OK | 0 | 0 | 0 | reports/2026-10-14/sysadmindoc-hushtelegram-run04-OK.md |
| sysadmindoc-hushthreads | 2026-10-14 | 47dae78 | OK | 0 | 0 | 0 | reports/2026-10-14/sysadmindoc-hushthreads-run04-OK.md |
| sysadmindoc-hushtumblr | 2026-10-14 | af6e864 | OK | 0 | 0 | 0 | reports/2026-10-14/sysadmindoc-hushtumblr-run04-OK.md |
| tachibana-shin-morphe-patches | 2026-10-14 | f4cd950 | OK | 0 | 0 | 0 | reports/2026-10-14/tachibana-shin-morphe-patches-run04-OK.md |
| testiwy268-morphe-patches | 2026-10-14 | 4ddca00 | OK | 0 | 0 | 0 | reports/2026-10-14/testiwy268-morphe-patches-run04-OK.md |
| theabhishekbhujang-morphe-patches | 2026-10-14 | ad34256 | OK | 0 | 0 | 0 | reports/2026-10-14/theabhishekbhujang-morphe-patches-run04-OK.md |
| thegibbonn-morphe-patches-anilili | 2026-10-14 | f7f35ac | OK | 0 | 0 | 0 | reports/2026-10-14/thegibbonn-morphe-patches-anilili-run04-OK.md |
| thewanwan-bestapp | 2026-10-14 | 2f28eda | OK | 0 | 0 | 0 | reports/2026-10-14/thewanwan-bestapp-run04-OK.md |
| tiaruebar1024-tiaruebar-patches | 2026-10-14 | 2bb3747 | OK | 0 | 0 | 0 | reports/2026-10-14/tiaruebar1024-tiaruebar-patches-run04-OK.md |
| timbuckrue-nyt-games-vrr-patch | 2026-10-14 | 1765519 | OK | 0 | 0 | 0 | reports/2026-10-14/timbuckrue-nyt-games-vrr-patch-run04-OK.md |
| torbenstriegel-morphe-patches-custom | 2026-10-14 | a1d1b53 | OK | 0 | 0 | 0 | reports/2026-10-14/torbenstriegel-morphe-patches-custom-run04-OK.md |
| tornillo2-movistar-block-ads-morphe | 2026-10-14 | 92c9a84 | OK | 0 | 0 | 0 | reports/2026-10-14/tornillo2-movistar-block-ads-morphe-run04-OK.md |
| totsiaw-proxma-patches | 2026-10-14 | 1e775f4 | OK | 0 | 0 | 0 | reports/2026-10-14/totsiaw-proxma-patches-run04-OK.md |
| unkybadtouch-plex-morphe-patches | 2026-10-14 | 216d2eb | OK | 0 | 0 | 0 | reports/2026-10-14/unkybadtouch-plex-morphe-patches-run04-OK.md |
| v4n1x-morphe-patches | 2026-10-14 | 40ef3ad | OK | 0 | 0 | 0 | reports/2026-10-14/v4n1x-morphe-patches-run04-OK.md |
| venusisjaded-venus-patches | 2026-10-14 | a6d9668 | OK | 0 | 0 | 0 | reports/2026-10-14/venusisjaded-venus-patches-run04-OK.md |
| vipinvip-railone-patches | 2026-10-14 | a9ccf13 | OK | 0 | 0 | 0 | reports/2026-10-14/vipinvip-railone-patches-run04-OK.md |
| virzak-morphe-patches | 2026-10-14 | e39e88c | OK | 0 | 0 | 0 | reports/2026-10-14/virzak-morphe-patches-run04-OK.md |
| waggbr-wagg13patch_morphe | 2026-10-14 | 01ef4a7 | OK | 0 | 0 | 0 | reports/2026-10-14/waggbr-wagg13patch_morphe-run04-OK.md |
| wchill-patcheddit | 2026-10-14 | 445bcb0 | OK | 0 | 0 | 0 | reports/2026-10-14/wchill-patcheddit-run04-OK.md |
| wzse-aapam-patches | 2026-10-14 | 34b20c0 | OK | 0 | 0 | 0 | reports/2026-10-14/wzse-aapam-patches-run04-OK.md |
| xhehab-xhehab-patches | 2026-10-14 | be2ec1b | OK | 0 | 0 | 0 | reports/2026-10-14/xhehab-xhehab-patches-run04-OK.md |
| xob0t-morphe-patches | 2026-10-14 | e3aba20 | OK | 0 | 0 | 0 | reports/2026-10-14/xob0t-morphe-patches-run04-OK.md |
| xtapped-morphe-patches | 2026-10-14 | 76625a0 | OK | 0 | 0 | 0 | reports/2026-10-14/xtapped-morphe-patches-run04-OK.md |
| xxxr3dxxx-r3d-patchlab | 2026-10-14 | 3cc486c | OK | 0 | 0 | 0 | reports/2026-10-14/xxxr3dxxx-r3d-patchlab-run04-OK.md |
| yann-soliman-morphe-patches | 2026-10-14 | 7252220 | OK | 0 | 0 | 0 | reports/2026-10-14/yann-soliman-morphe-patches-run04-OK.md |
| zanuaimi-unipatches | 2026-10-14 | fb2c33c | OK | 0 | 0 | 0 | reports/2026-10-14/zanuaimi-unipatches-run04-OK.md |

## Review queue (needs human)

LLM-suspect items below the confirmation bar, plus pending items awaiting a usable verdict — no ban until the judge confirms. Confirm in code, then ban by editing `blacklist.json` or dismiss by deleting the entry from `review-queue.json`.

| date | target | file | verdict | conf | evidence |
|---|---|---|---|---|---|
| 2026-10-14 | sysadmindoc-hushfeed | tools/verification-probe/src/app/hushfeed/verification/Probe.java | pending | 0 | reflection-hidden behavior with network sink |
| 2026-10-14 | helllord77-media-patches | extensions/bongo/src/main/java/app/morphe/extension/bongo/repos/ContentRepo.java | pending | 0 | new non-allowlisted URL or IP |
| 2026-10-14 | bearinmind | cross-window | pending | 0 | exfil completed across windows in extensions/extension/src/main/java/org/ungoogled/ui/SpeedCameras.java: new host https://lz4.overpass-api.de, https://z.overpass-api.de, https://maps.mail.ru with previously seen Location (2026-10-14) |
| 2026-10-14 | bearinmind | extensions/extension/src/main/java/org/ungoogled/ui/SpeedCameras.java | pending | 0 | sensitive source reaches network sink |
| 2026-10-14 | sysadmindoc-hushthreads | settings.gradle.kts | pending | 0 | new external build URL (supply chain): http://2.0.6.1 |
| 2026-10-14 | sysadmindoc-hushtelegram | extensions/telegram/src/main/java/app/hushtelegram/extension/telegram/misc/MiniAppLocation.java | pending | 0 | sensitive source reaches network sink |
| 2026-10-14 | hxreborn-morphe-patches | extensions/extension/src/main/java/app/hxreborn/extension/lumo/LumoPlus.java | pending | 0 | WebView JS bridge with network sink: evaluateJavascript |
| 2026-10-14 | heval99-heval-morphe-patches | patches/src/main/kotlin/app/template/patches/shared/Constants.kt | pending | 0 | sensitive source reaches network sink |
| 2026-10-14 | byehi98-okish-morphe-patches | extensions/swiftbackup/build.gradle.kts | pending | 0 | new external dependency added — verify coordinates |
| 2026-10-14 | chikuwadon-nicoid-re-patches | extensions/extension/src/main/java/e/e/a/VideoDetails.java | pending | 0 | cross-app private data access with network: Cookies |
| 2026-10-14 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | pending | 0 | [binary strings] reflection-hidden behavior with network sink |
| 2026-10-14 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/method-delta.dex | pending | 0 | [binary strings] sensitive source reaches network sink |
| 2026-10-14 | chikuwadon-nicoid-re-patches | extensions/extension/src/main/java/e/e/a/AccountLists.java | pending | 0 | cross-app private data access with network: Cookies |
| 2026-10-14 | chikuwadon-nicoid-re-patches | extensions/extension/src/main/java/e/e/a/MylistFollow190.java | pending | 0 | cross-app private data access with network: Cookies |
| 2026-10-14 | chikuwadon-nicoid-re-patches | extensions/extension/src/main/java/e/e/a/Nicoad190.java | pending | 0 | sensitive source reaches network sink |
| 2026-10-14 | chikuwadon-nicoid-re-patches | extensions/extension/src/main/java/e/e/a/Ranking190.java | pending | 0 | cross-app private data access with network: Cookies |
| 2026-10-14 | hxreborn-morphe-patches | patches/src/main/resources/moviebox/dashhook.dex | pending | 0 | [binary strings] reflection-hidden behavior with network sink |
| 2026-10-13 | sysadmindoc-hushpinterest | extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/actions/PinTransfer.java | pending | 0 | cross-app private data access with network: Cookies |
| 2026-10-13 | bearinmind | extensions/extension/src/main/java/org/ungoogled/ui/Steer.java | pending | 0 | sensitive source reaches network sink |
| 2026-10-13 | commit-regrets-morphe-youtube-vr-patches | gradle/wrapper/gradle-wrapper.jar | pending | 0 | native binary added/changed — cannot review textually |


## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret), `LLM_MODEL` / `LLM_FALLBACKS` (repo variables) and `LLM_MONTHLY_BUDGET_USD` (default 5) from the environment; without them the LLM layer is skipped silently.
