# Morphe patches audit

Scans 4x daily (`0 0,6,12,18 * * *`). Diff-only since last state. Premium-unlock patterns are ignored by design. Smart rules (v3): critical tier (SMS/OTP theft, notification/accessibility capture, keylogging, dropper, cross-app data theft), deobfuscation, typosquat detection, supply-chain and DNS-exfil rules, cross-window memory via signals.json (45d). Permanent blacklist: one critical finding bans a target forever (blacklist.json). v5 layers: binary forensics, Semgrep taint, OpenRouter LLM reviewer (gated), weekly full-tree scan. v6: test-path exclusion, validated IP hosts, same-file cross-window, human pardons via config/pardons.json. v7: every critical/high goes through the LLM judge; bans only on LLM confirmation.

## :octagonal_sign: Blacklisted — permanently untrusted

Once the LLM confirms a malicious finding the target stays here forever. Clean later pushes never clear it; removal requires a manual pardon in `config/pardons.json`. Deterministic findings without confirmation never ban.

| :octagonal_sign: | target | since | reason | evidence |
|---|---|---|---|---|
| :octagonal_sign: | chikuwadon-nicoid-re-patches (chikuwadon/nicoid-re-patches) | 2026-10-18 | [binary strings] possible keystroke capture with network exfil: TextWatcher | reports/2026-10-18/chikuwadon-nicoid-re-patches-run01-CRIT-c8h6m1.md |
| :octagonal_sign: | venusisjaded-venus-patches (VenusIsJaded/Venus-Patches) | 2026-10-18 | [repeat-offender xingchen-agi/xing4.0-29b-a4b:free] repeat non-benign verdict for venusisjaded-venus-patches/cross-window (2026-10-17 then 2026-10-18): exfiltration (0.72) | reports/2026-10-18/venusisjaded-venus-patches-run04-CRIT-c2h4m0.md |
| :octagonal_sign: | heval99-heval-morphe-patches (heval99/Heval-Morphe-Patches) | 2026-10-19 | [repeat-offender minimax/minimax-m3.1-flash:free] repeat non-benign verdict for heval99-heval-morphe-patches/cross-window (2026-10-16 then 2026-10-19): exfiltration (0.78) | reports/2026-10-19/heval99-heval-morphe-patches-run02-CRIT-c2h3m8.md |

## :warning: Critical findings

| :warning: | target | file | reason | report |
|---|---|---|---|---|
| :warning: | heval99-heval-morphe-patches | cross-window | [repeat-offender minimax/minimax-m3.1-flash:free] repeat non-benign verdict for heval99-heval-morphe-patches/cross-window (2026-10-16 then 2026-10-19): exfiltration (0.78) | reports/2026-10-19/heval99-heval-morphe-patches.md |
| :warning: | heval99-heval-morphe-patches | cross-window | [repeat-offender minimax/minimax-m3.1-flash:free] repeat non-benign verdict for heval99-heval-morphe-patches/cross-window (2026-10-16 then 2026-10-19): exfiltration (0.74) | reports/2026-10-19/heval99-heval-morphe-patches.md |

| target | scan | commit | status | crit | high | med | report |
|---|---|---|---|---|---|---|---|
| morphe-patches | 2026-10-19 | e546439 | OK | 0 | 0 | 0 | reports/2026-10-19/morphe-patches-run02-OK.md |
| bearinmind | 2026-10-19 | de89b20 | OK | 0 | 0 | 0 | reports/2026-10-19/bearinmind-run02-OK.md |
| d0nj | 2026-10-19 | 04034fd | OK | 0 | 0 | 0 | reports/2026-10-19/d0nj-run02-OK.md |
| piko | 2026-10-19 | a0ed9a5 | OK | 0 | 0 | 0 | reports/2026-10-19/piko-run02-OK.md |
| piko-ig-lite | 2026-10-19 | ca84910 | OK | 0 | 0 | 0 | reports/2026-10-19/piko-ig-lite-run02-OK.md |
| piko-newx | 2026-10-19 | 8f9adff | OK | 0 | 0 | 0 | reports/2026-10-19/piko-newx-run02-OK.md |
| gboard | 2026-10-19 | 976b749 | OK | 0 | 0 | 0 | reports/2026-10-19/gboard-run02-OK.md |
| hush-messenger | 2026-10-19 | 77e6f9f | OK | 0 | 0 | 0 | reports/2026-10-19/hush-messenger-run02-OK.md |
| hush-facebook | 2026-10-19 | 0d33a90 | WARN | 0 | 0 | 1 | reports/2026-10-19/hush-facebook-run02-WARN-c0h0m1.md |
| zeldris | 2026-10-19 | 9418386 | OK | 0 | 0 | 0 | reports/2026-10-19/zeldris-run02-OK.md |
| adobo | 2026-10-19 | fa8da7b | OK | 0 | 0 | 0 | reports/2026-10-19/adobo-run02-OK.md |
| doom | 2026-10-19 | 36e5420 | OK | 0 | 0 | 0 | reports/2026-10-19/doom-run02-OK.md |
| 0x0day-0wl-morphe-patches | 2026-10-19 | 54db5c9 | OK | 0 | 0 | 0 | reports/2026-10-19/0x0day-0wl-morphe-patches-run02-OK.md |
| 0xtalos-365score-patches | 2026-10-19 | 5075e18 | OK | 0 | 0 | 0 | reports/2026-10-19/0xtalos-365score-patches-run02-OK.md |
| abhis1n-morphe-patches | 2026-10-19 | f098a1d | OK | 0 | 0 | 0 | reports/2026-10-19/abhis1n-morphe-patches-run02-OK.md |
| adderalladmiral-psychonaut-journal-patches | 2026-10-19 | 4c4ddab | OK | 0 | 0 | 0 | reports/2026-10-19/adderalladmiral-psychonaut-journal-patches-run02-OK.md |
| adish08-morphe-patches | 2026-10-19 | 2617247 | OK | 0 | 0 | 0 | reports/2026-10-19/adish08-morphe-patches-run02-OK.md |
| ajstrick81-morphe-androidtv-patches | 2026-10-19 | 2c08361 | OK | 0 | 0 | 0 | reports/2026-10-19/ajstrick81-morphe-androidtv-patches-run02-OK.md |
| ak800i-mixplorer-patches-for-morphe | 2026-10-19 | 685a2fb | OK | 0 | 0 | 0 | reports/2026-10-19/ak800i-mixplorer-patches-for-morphe-run02-OK.md |
| akash-sriram-morphe-google-photos | 2026-10-19 | d7238d8 | OK | 0 | 0 | 0 | reports/2026-10-19/akash-sriram-morphe-google-photos-run02-OK.md |
| akshayykadam-pixel-camera | 2026-10-19 | 131c293 | OK | 0 | 0 | 0 | reports/2026-10-19/akshayykadam-pixel-camera-run02-OK.md |
| akshayykadam-pixelboard | 2026-10-19 | 8d1d53d | OK | 0 | 0 | 0 | reports/2026-10-19/akshayykadam-pixelboard-run02-OK.md |
| alalloush-xperia-1v-camera-patches | 2026-10-19 | 68b9788 | OK | 0 | 0 | 0 | reports/2026-10-19/alalloush-xperia-1v-camera-patches-run02-OK.md |
| alan7383-sofatime-patches | 2026-10-19 | e5b403e | OK | 0 | 0 | 0 | reports/2026-10-19/alan7383-sofatime-patches-run02-OK.md |
| alastor-kaneki-morphe-patches | 2026-10-19 | b99843d | OK | 0 | 0 | 0 | reports/2026-10-19/alastor-kaneki-morphe-patches-run02-OK.md |
| alexnaga-android-patches | 2026-10-19 | ccfc3c2 | OK | 0 | 0 | 0 | reports/2026-10-19/alexnaga-android-patches-run02-OK.md |
| almewty-my-morphe-patches | 2026-10-19 | 8511a65 | OK | 0 | 0 | 0 | reports/2026-10-19/almewty-my-morphe-patches-run02-OK.md |
| ameenalasady-ameen-morphe | 2026-10-19 | 61894ac | OK | 0 | 0 | 0 | reports/2026-10-19/ameenalasady-ameen-morphe-run02-OK.md |
| amitaisela-travian-morphe-patches | 2026-10-19 | c0359a9 | OK | 0 | 0 | 0 | reports/2026-10-19/amitaisela-travian-morphe-patches-run02-OK.md |
| amplerevanced-revanced-patches | 2026-10-19 | 30930ba | OK | 0 | 0 | 0 | reports/2026-10-19/amplerevanced-revanced-patches-run02-OK.md |
| andersonlucasg3-petalmaps-nonhuawei | 2026-10-19 | 5e95f36 | OK | 0 | 0 | 0 | reports/2026-10-19/andersonlucasg3-petalmaps-nonhuawei-run02-OK.md |
| andrewliang25-morphe-patches | 2026-10-19 | a35c9ac | OK | 0 | 0 | 0 | reports/2026-10-19/andrewliang25-morphe-patches-run02-OK.md |
| andronedev-morphe-patches | 2026-10-19 | e2ca1d5 | OK | 0 | 0 | 0 | reports/2026-10-19/andronedev-morphe-patches-run02-OK.md |
| ang3lo-azevedo-morphe-patches | 2026-10-19 | 7f1e793 | OK | 0 | 0 | 0 | reports/2026-10-19/ang3lo-azevedo-morphe-patches-run02-OK.md |
| angeldark92-steamlink-patches | 2026-10-19 | 7e4c095 | WARN | 0 | 0 | 2 | reports/2026-10-19/angeldark92-steamlink-patches-run02-WARN-c0h0m2.md |
| anxyis-anxy-patches | 2026-10-19 | 17f4a8f | OK | 0 | 0 | 0 | reports/2026-10-19/anxyis-anxy-patches-run02-OK.md |
| arandomhooman-hoomans-morphe-patches | 2026-10-19 | 0182778 | OK | 0 | 0 | 0 | reports/2026-10-19/arandomhooman-hoomans-morphe-patches-run02-OK.md |
| arsylk-arsylk-patches | 2026-10-19 | 28d66b8 | OK | 0 | 0 | 0 | reports/2026-10-19/arsylk-arsylk-patches-run02-OK.md |
| azukisensei-aniskip-stremio | 2026-10-19 | 5da4bc3 | OK | 0 | 0 | 0 | reports/2026-10-19/azukisensei-aniskip-stremio-run02-OK.md |
| bakwudo-uyu | 2026-10-19 | a35ca59 | OK | 0 | 0 | 0 | reports/2026-10-19/bakwudo-uyu-run02-OK.md |
| bdgerszewski-morphe-patches-ihealth | 2026-10-19 | 4fc1f1d | OK | 0 | 0 | 0 | reports/2026-10-19/bdgerszewski-morphe-patches-ihealth-run02-OK.md |
| benzophury-oraimo-health-morphe-patches | 2026-10-19 | 8cf03c8 | OK | 0 | 0 | 0 | reports/2026-10-19/benzophury-oraimo-health-morphe-patches-run02-OK.md |
| bholeykabhakt-android-patches-xtra | 2026-10-19 | edbcbfb | OK | 0 | 0 | 0 | reports/2026-10-19/bholeykabhakt-android-patches-xtra-run02-OK.md |
| bigyank-morphe-patches-samsung | 2026-10-19 | a7b3347 | OK | 0 | 0 | 0 | reports/2026-10-19/bigyank-morphe-patches-samsung-run02-OK.md |
| binarymend-morphe-patches | 2026-10-19 | 9f3d71e | OK | 0 | 0 | 0 | reports/2026-10-19/binarymend-morphe-patches-run02-OK.md |
| blazeftl-ftl-patches | 2026-10-19 | b3b78c8 | OK | 0 | 0 | 0 | reports/2026-10-19/blazeftl-ftl-patches-run02-OK.md |
| blazko381-luna-tv-device-comp-patch-and-no-lag | 2026-10-19 | error | ERROR | 0 | 0 | 0 | reports/2026-10-19/blazko381-luna-tv-device-comp-patch-and-no-lag.md |
| braintropy-braintropy-patches | 2026-10-19 | b7788d2 | OK | 0 | 0 | 0 | reports/2026-10-19/braintropy-braintropy-patches-run02-OK.md |
| brosssh-morphe-patches | 2026-10-19 | de158a4 | OK | 0 | 0 | 0 | reports/2026-10-19/brosssh-morphe-patches-run02-OK.md |
| browzomje-browzomje-patches | 2026-10-19 | dbf1383 | OK | 0 | 0 | 0 | reports/2026-10-19/browzomje-browzomje-patches-run02-OK.md |
| bruddaa-bruddas-morphe-patches | 2026-10-19 | f57e95b | OK | 0 | 0 | 0 | reports/2026-10-19/bruddaa-bruddas-morphe-patches-run02-OK.md |
| bufferk-morphe-patches | 2026-10-19 | 5a3241f | OK | 0 | 0 | 0 | reports/2026-10-19/bufferk-morphe-patches-run02-OK.md |
| bugg4-bugg4s-patches | 2026-10-19 | 18e44d0 | OK | 0 | 0 | 0 | reports/2026-10-19/bugg4-bugg4s-patches-run02-OK.md |
| byehi98-okish-morphe-patches | 2026-10-19 | a69edfe | OK | 0 | 0 | 0 | reports/2026-10-19/byehi98-okish-morphe-patches-run02-OK.md |
| canh0chua-morphe-patches | 2026-10-19 | 6ec941f | OK | 0 | 0 | 0 | reports/2026-10-19/canh0chua-morphe-patches-run02-OK.md |
| canic-twitch-morphe-patch | 2026-10-19 | d06e2b9 | OK | 0 | 0 | 0 | reports/2026-10-19/canic-twitch-morphe-patch-run02-OK.md |
| casketpizza-morphe-waze-system-tts | 2026-10-19 | 14ad480 | OK | 0 | 0 | 0 | reports/2026-10-19/casketpizza-morphe-waze-system-tts-run02-OK.md |
| catsmoker-anime-witcher-patches | 2026-10-19 | 2cf90b5 | OK | 0 | 0 | 0 | reports/2026-10-19/catsmoker-anime-witcher-patches-run02-OK.md |
| cesbar-zpatches | 2026-10-19 | 883ccfe | OK | 0 | 0 | 0 | reports/2026-10-19/cesbar-zpatches-run02-OK.md |
| ch3thanhs-stylus | 2026-10-19 | 48e7fdf | OK | 0 | 0 | 0 | reports/2026-10-19/ch3thanhs-stylus-run02-OK.md |
| chicco-carone-morphe-patches-chicco | 2026-10-19 | ef21ab6 | OK | 0 | 0 | 0 | reports/2026-10-19/chicco-carone-morphe-patches-chicco-run02-OK.md |
| chikuwadon-nicoid-re-patches | 2026-10-19 | 3a91ab4 | BANNED | 0 | 0 | 0 | reports/2026-10-18/chikuwadon-nicoid-re-patches-run01-CRIT-c8h6m1.md |
| chukfinley-tidal-patches | 2026-10-19 | 178bc02 | OK | 0 | 0 | 0 | reports/2026-10-19/chukfinley-tidal-patches-run02-OK.md |
| commit-regrets-morphe-youtube-vr-patches | 2026-10-19 | 611e9f4 | OK | 0 | 0 | 0 | reports/2026-10-19/commit-regrets-morphe-youtube-vr-patches-run02-OK.md |
| comoestaisamigos-ck-zombies-morphe-patches | 2026-10-19 | 749ba1e | OK | 0 | 0 | 0 | reports/2026-10-19/comoestaisamigos-ck-zombies-morphe-patches-run02-OK.md |
| csagataj2-morphe-patches | 2026-10-19 | 8a20739 | OK | 0 | 0 | 0 | reports/2026-10-19/csagataj2-morphe-patches-run02-OK.md |
| dan1eltheman1el-morphe-patches | 2026-10-19 | ec310b5 | OK | 0 | 0 | 0 | reports/2026-10-19/dan1eltheman1el-morphe-patches-run02-OK.md |
| dawidd612-dudeks-morphe-patches | 2026-10-19 | 2298baa | OK | 0 | 0 | 0 | reports/2026-10-19/dawidd612-dudeks-morphe-patches-run02-OK.md |
| debakarr-morphe-patches | 2026-10-19 | b3c23c6 | OK | 0 | 0 | 0 | reports/2026-10-19/debakarr-morphe-patches-run02-OK.md |
| dh6k-morphe-patches | 2026-10-19 | 38471b9 | OK | 0 | 0 | 0 | reports/2026-10-19/dh6k-morphe-patches-run02-OK.md |
| digitalpals-johns-morphe-patches | 2026-10-19 | 3576079 | OK | 0 | 0 | 0 | reports/2026-10-19/digitalpals-johns-morphe-patches-run02-OK.md |
| docbt-patched-up | 2026-10-19 | 28afcb4 | OK | 0 | 0 | 0 | reports/2026-10-19/docbt-patched-up-run02-OK.md |
| dowjames-morphe-patches | 2026-10-19 | ea93ea2 | OK | 0 | 0 | 0 | reports/2026-10-19/dowjames-morphe-patches-run02-OK.md |
| drnhzn-supreme-patches | 2026-10-19 | 1123dd8 | OK | 0 | 0 | 0 | reports/2026-10-19/drnhzn-supreme-patches-run02-OK.md |
| drosocode-morphe-patches | 2026-10-19 | c88bf88 | OK | 0 | 0 | 0 | reports/2026-10-19/drosocode-morphe-patches-run02-OK.md |
| dumb-software-t2c-app-patch-morphe | 2026-10-19 | 2dd8d1d | OK | 0 | 0 | 0 | reports/2026-10-19/dumb-software-t2c-app-patch-morphe-run02-OK.md |
| dunecache-oyasumi-patches | 2026-10-19 | f419de5 | OK | 0 | 0 | 0 | reports/2026-10-19/dunecache-oyasumi-patches-run02-OK.md |
| durgesh0505-chiggi_morphe_patches | 2026-10-19 | e023809 | OK | 0 | 0 | 0 | reports/2026-10-19/durgesh0505-chiggi_morphe_patches-run02-OK.md |
| early.egg3707-ee-morphe-patches | 2026-10-19 | a9deb3a | OK | 0 | 0 | 0 | reports/2026-10-19/early.egg3707-ee-morphe-patches-run02-OK.md |
| educal72-educal-patches | 2026-10-19 | 67ea6da | OK | 0 | 0 | 0 | reports/2026-10-19/educal72-educal-patches-run02-OK.md |
| entree3k-morning-entree-patches | 2026-10-19 | 9e4c200 | OK | 0 | 0 | 0 | reports/2026-10-19/entree3k-morning-entree-patches-run02-OK.md |
| epxec-android-patches | 2026-10-19 | e28b946 | OK | 0 | 0 | 0 | reports/2026-10-19/epxec-android-patches-run02-OK.md |
| error404rt-anixart-patches | 2026-10-19 | 06abf7b | OK | 0 | 0 | 0 | reports/2026-10-19/error404rt-anixart-patches-run02-OK.md |
| ethan-manny-spotify-tv-crossfade | 2026-10-19 | 991592f | OK | 0 | 0 | 0 | reports/2026-10-19/ethan-manny-spotify-tv-crossfade-run02-OK.md |
| ethanm6-letterboxd-stremio-morphe-patch | 2026-10-19 | f2800e7 | OK | 0 | 0 | 0 | reports/2026-10-19/ethanm6-letterboxd-stremio-morphe-patch-run02-OK.md |
| ez4rk0-morphe-patches | 2026-10-19 | 1e442bd | OK | 0 | 0 | 0 | reports/2026-10-19/ez4rk0-morphe-patches-run02-OK.md |
| forsigh-waze-patches | 2026-10-19 | 7d3429a | OK | 0 | 0 | 0 | reports/2026-10-19/forsigh-waze-patches-run02-OK.md |
| foxxoowo-foxxo-patches | 2026-10-19 | ada8498 | OK | 0 | 0 | 0 | reports/2026-10-19/foxxoowo-foxxo-patches-run02-OK.md |
| franticg33k-morphe-patches | 2026-10-19 | c0d9f61 | OK | 0 | 0 | 0 | reports/2026-10-19/franticg33k-morphe-patches-run02-OK.md |
| freeman022026-rustore-privacy-patches | 2026-10-19 | 54a810e | OK | 0 | 0 | 0 | reports/2026-10-19/freeman022026-rustore-privacy-patches-run02-OK.md |
| gamer92000-pixelcamera-patches | 2026-10-19 | 8d45074 | OK | 0 | 0 | 0 | reports/2026-10-19/gamer92000-pixelcamera-patches-run02-OK.md |
| ggyasin-ggyasin-morphe-patches | 2026-10-19 | 9294ac5 | OK | 0 | 0 | 0 | reports/2026-10-19/ggyasin-ggyasin-morphe-patches-run02-OK.md |
| giaaaacomo-nifty-patches-selection | 2026-10-19 | 0e0f42f | OK | 0 | 0 | 0 | reports/2026-10-19/giaaaacomo-nifty-patches-selection-run02-OK.md |
| gitgitro-gitro-morphe-patches | 2026-10-19 | 277365d | OK | 0 | 0 | 0 | reports/2026-10-19/gitgitro-gitro-morphe-patches-run02-OK.md |
| goldrift-morphe-patches | 2026-10-19 | 06859aa | OK | 0 | 0 | 0 | reports/2026-10-19/goldrift-morphe-patches-run02-OK.md |
| hajs110208-morphe-patches | 2026-10-19 | db15d53 | OK | 0 | 0 | 0 | reports/2026-10-19/hajs110208-morphe-patches-run02-OK.md |
| hammadhassan94-ary-live | 2026-10-19 | 965e6ec | OK | 0 | 0 | 0 | reports/2026-10-19/hammadhassan94-ary-live-run02-OK.md |
| hashtagbasit-aimal-patches | 2026-10-19 | 2cea794 | OK | 0 | 0 | 0 | reports/2026-10-19/hashtagbasit-aimal-patches-run02-OK.md |
| helllord77-media-patches | 2026-10-19 | 681354c | OK | 0 | 0 | 0 | reports/2026-10-19/helllord77-media-patches-run02-OK.md |
| hellveticastandard-hellveticapatches | 2026-10-19 | 1b605a2 | OK | 0 | 0 | 0 | reports/2026-10-19/hellveticastandard-hellveticapatches-run02-OK.md |
| heval99-heval-morphe-patches | 2026-10-19 | a450611 | BANNED | 2 | 3 | 8 | reports/2026-10-19/heval99-heval-morphe-patches-run02-CRIT-c2h3m8.md |
| heyymichii-michii-patches | 2026-10-19 | 18edc77 | OK | 0 | 0 | 0 | reports/2026-10-19/heyymichii-michii-patches-run02-OK.md |
| hhawkinsau-hh-patches | 2026-10-19 | f7d89d1 | OK | 0 | 0 | 0 | reports/2026-10-19/hhawkinsau-hh-patches-run02-OK.md |
| hiosdra-morphe-patches | 2026-10-19 | 8180c40 | OK | 0 | 0 | 0 | reports/2026-10-19/hiosdra-morphe-patches-run02-OK.md |
| homelander11-beetle-patches | 2026-10-19 | 9000692 | OK | 0 | 0 | 0 | reports/2026-10-19/homelander11-beetle-patches-run02-OK.md |
| hoo-dles-morphe-patches | 2026-10-19 | e9c9426 | OK | 0 | 0 | 0 | reports/2026-10-19/hoo-dles-morphe-patches-run02-OK.md |
| hslightsteel-slight-patches | 2026-10-19 | 489a227 | OK | 0 | 0 | 0 | reports/2026-10-19/hslightsteel-slight-patches-run02-OK.md |
| hu-liberator-patches | 2026-10-19 | 6936b29 | OK | 0 | 0 | 0 | reports/2026-10-19/hu-liberator-patches-run02-OK.md |
| hvq-eksi-morphe | 2026-10-19 | 570abad | OK | 0 | 0 | 0 | reports/2026-10-19/hvq-eksi-morphe-run02-OK.md |
| hxreborn-morphe-patches | 2026-10-19 | 4d54bff | OK | 0 | 0 | 0 | reports/2026-10-19/hxreborn-morphe-patches-run02-OK.md |
| icysymmetra-tiktok-patches-for-morphe | 2026-10-19 | 3c376ba | OK | 0 | 0 | 0 | reports/2026-10-19/icysymmetra-tiktok-patches-for-morphe-run02-OK.md |
| ihatenodejs-aidans-patches | 2026-10-19 | 8b39fb6 | OK | 0 | 0 | 0 | reports/2026-10-19/ihatenodejs-aidans-patches-run02-OK.md |
| ilikeadofai-vocacolle-morphe-patches | 2026-10-19 | c63d574 | OK | 0 | 0 | 0 | reports/2026-10-19/ilikeadofai-vocacolle-morphe-patches-run02-OK.md |
| imnoammm-noams-morphe-patches | 2026-10-19 | b73b7a7 | SHALLOW | 0 | 0 | 0 | reports/2026-10-19/imnoammm-noams-morphe-patches-run02-OK.md |
| imxeren-mix-patches | 2026-10-19 | fcff32f | OK | 0 | 0 | 0 | reports/2026-10-19/imxeren-mix-patches-run02-OK.md |
| ispacecase-patchweaver | 2026-10-19 | 0d6517b | OK | 0 | 0 | 0 | reports/2026-10-19/ispacecase-patchweaver-run02-OK.md |
| isuruhg-cricinfo-tweaks | 2026-10-19 | caca596 | OK | 0 | 0 | 0 | reports/2026-10-19/isuruhg-cricinfo-tweaks-run02-OK.md |
| jackblk-morphe-patches | 2026-10-19 | 53318f9 | OK | 0 | 0 | 0 | reports/2026-10-19/jackblk-morphe-patches-run02-OK.md |
| jacksonjones2003-immersive-keyboard-patches | 2026-10-19 | 97e0811 | OK | 0 | 0 | 0 | reports/2026-10-19/jacksonjones2003-immersive-keyboard-patches-run02-OK.md |
| jacksonjones2003-qqmusic-english-patches | 2026-10-19 | 49b7b00 | OK | 0 | 0 | 0 | reports/2026-10-19/jacksonjones2003-qqmusic-english-patches-run02-OK.md |
| jacobplaysgames-crimeradar-morphe-patches | 2026-10-19 | 4668b10 | OK | 0 | 0 | 0 | reports/2026-10-19/jacobplaysgames-crimeradar-morphe-patches-run02-OK.md |
| jaredcat-morphe-patches | 2026-10-19 | b29188a | OK | 0 | 0 | 0 | reports/2026-10-19/jaredcat-morphe-patches-run02-OK.md |
| jaydenluuuu-sys-line-font-patches | 2026-10-19 | 47596f7 | OK | 0 | 0 | 0 | reports/2026-10-19/jaydenluuuu-sys-line-font-patches-run02-OK.md |
| jcapretta-chessable-patches | 2026-10-19 | aa297df | OK | 0 | 0 | 0 | reports/2026-10-19/jcapretta-chessable-patches-run02-OK.md |
| jeff-tek-jeff-patches | 2026-10-19 | e195faf | OK | 0 | 0 | 0 | reports/2026-10-19/jeff-tek-jeff-patches-run02-OK.md |
| jonnyvr1-morph-patches | 2026-10-19 | 9a8c562 | OK | 0 | 0 | 0 | reports/2026-10-19/jonnyvr1-morph-patches-run02-OK.md |
| joristdh-platypatch | 2026-10-19 | 217afb1 | OK | 0 | 0 | 0 | reports/2026-10-19/joristdh-platypatch-run02-OK.md |
| jrddupont-discord-patches | 2026-10-19 | e3b15da | OK | 0 | 0 | 0 | reports/2026-10-19/jrddupont-discord-patches-run02-OK.md |
| jz6-flexboard | 2026-10-19 | ce1c16c | OK | 0 | 0 | 0 | reports/2026-10-19/jz6-flexboard-run02-OK.md |
| k8r8to-kizu-morphe-patches | 2026-10-19 | ee06cf1 | OK | 0 | 0 | 0 | reports/2026-10-19/k8r8to-kizu-morphe-patches-run02-OK.md |
| kanup4m-morphe-patches | 2026-10-19 | 959edc3 | OK | 0 | 0 | 0 | reports/2026-10-19/kanup4m-morphe-patches-run02-OK.md |
| kecerim24-morphe-patches | 2026-10-19 | d5e0e02 | OK | 0 | 0 | 0 | reports/2026-10-19/kecerim24-morphe-patches-run02-OK.md |
| kero309x-anghamiplus-patches | 2026-10-19 | error | ERROR | 0 | 0 | 0 | reports/2026-10-19/kero309x-anghamiplus-patches.md |
| kim20598-hakim-morphe-patches | 2026-10-19 | ee16906 | OK | 0 | 0 | 0 | reports/2026-10-19/kim20598-hakim-morphe-patches-run02-OK.md |
| kiraio-moe-lain-patches | 2026-10-19 | 2b90e26 | OK | 0 | 0 | 0 | reports/2026-10-19/kiraio-moe-lain-patches-run02-OK.md |
| kmru-nai64extrapatches | 2026-10-19 | cf40997 | OK | 0 | 0 | 0 | reports/2026-10-19/kmru-nai64extrapatches-run02-OK.md |
| kmru-nai64patches | 2026-10-19 | 1ce9949 | OK | 0 | 0 | 0 | reports/2026-10-19/kmru-nai64patches-run02-OK.md |
| kolaron-morphe-patches | 2026-10-19 | e1d60ca | OK | 0 | 0 | 0 | reports/2026-10-19/kolaron-morphe-patches-run02-OK.md |
| kondratjev-morphe-patches | 2026-10-19 | ff34863 | OK | 0 | 0 | 0 | reports/2026-10-19/kondratjev-morphe-patches-run02-OK.md |
| kuchingneko28-ipusnas-patches | 2026-10-19 | 32c1c40 | OK | 0 | 0 | 0 | reports/2026-10-19/kuchingneko28-ipusnas-patches-run02-OK.md |
| kuntal-devrat-diskwala-patches | 2026-10-19 | 86c9e9c | OK | 0 | 0 | 0 | reports/2026-10-19/kuntal-devrat-diskwala-patches-run02-OK.md |
| kveld9-kveld-extra-morphe-patches | 2026-10-19 | 5b152f7 | SHALLOW | 0 | 0 | 0 | reports/2026-10-19/kveld9-kveld-extra-morphe-patches-run02-OK.md |
| kveld9-kveld-morphe-patches | 2026-10-19 | f40f440 | SHALLOW | 0 | 0 | 0 | reports/2026-10-19/kveld9-kveld-morphe-patches-run02-OK.md |
| lablazer-morphe-patches | 2026-10-19 | 49f9168 | OK | 0 | 0 | 0 | reports/2026-10-19/lablazer-morphe-patches-run02-OK.md |
| lakakareal-lakakashitpatches | 2026-10-19 | 8d24794 | OK | 0 | 0 | 0 | reports/2026-10-19/lakakareal-lakakashitpatches-run02-OK.md |
| lchanc3-morphe-patches | 2026-10-19 | f420a03 | OK | 0 | 0 | 0 | reports/2026-10-19/lchanc3-morphe-patches-run02-OK.md |
| legendsciber-morphe-patches | 2026-10-19 | 88f7fa0 | OK | 0 | 0 | 0 | reports/2026-10-19/legendsciber-morphe-patches-run02-OK.md |
| limelimes-cbc-patches | 2026-10-19 | 704d39a | OK | 0 | 0 | 0 | reports/2026-10-19/limelimes-cbc-patches-run02-OK.md |
| liongalahad-liongalahad-nuviotv-morphe-patches | 2026-10-19 | 2450623 | OK | 0 | 0 | 0 | reports/2026-10-19/liongalahad-liongalahad-nuviotv-morphe-patches-run02-OK.md |
| liongalahad-liongalahad-stremio-morphe-patches | 2026-10-19 | b207ce5 | OK | 0 | 0 | 0 | reports/2026-10-19/liongalahad-liongalahad-stremio-morphe-patches-run02-OK.md |
| lockhart07-morphe-patches | 2026-10-19 | 3f23440 | OK | 0 | 0 | 0 | reports/2026-10-19/lockhart07-morphe-patches-run02-OK.md |
| logm1lo-logm1lo-patches | 2026-10-19 | 1c31a4b | OK | 0 | 0 | 0 | reports/2026-10-19/logm1lo-logm1lo-patches-run02-OK.md |
| lootdev78-psylos-morphe-patches | 2026-10-19 | 0eac0c5 | OK | 0 | 0 | 0 | reports/2026-10-19/lootdev78-psylos-morphe-patches-run02-OK.md |
| madhu-gowda6-atharv-patches | 2026-10-19 | 79cab40 | OK | 0 | 0 | 0 | reports/2026-10-19/madhu-gowda6-atharv-patches-run02-OK.md |
| mich111discord-mightymichs-patches | 2026-10-19 | 0fc8fe4 | OK | 0 | 0 | 0 | reports/2026-10-19/mich111discord-mightymichs-patches-run02-OK.md |
| miguelninja19-miguel-morphe-patches | 2026-10-19 | bc34838 | OK | 0 | 0 | 0 | reports/2026-10-19/miguelninja19-miguel-morphe-patches-run02-OK.md |
| mohamedamrnady-anghami-patches | 2026-10-19 | 38d12c4 | OK | 0 | 0 | 0 | reports/2026-10-19/mohamedamrnady-anghami-patches-run02-OK.md |
| mubelotix-my-morphe-patches | 2026-10-19 | 8b6f75e | OK | 0 | 0 | 0 | reports/2026-10-19/mubelotix-my-morphe-patches-run02-OK.md |
| mvaishak-letterboxd-morphe-patches | 2026-10-19 | b4658ef | OK | 0 | 0 | 0 | reports/2026-10-19/mvaishak-letterboxd-morphe-patches-run02-OK.md |
| mxkrgt-dbtcoach-morphe-patches | 2026-10-19 | 873f289 | OK | 0 | 0 | 0 | reports/2026-10-19/mxkrgt-dbtcoach-morphe-patches-run02-OK.md |
| nagol12344-patch | 2026-10-19 | b88c4e6 | OK | 0 | 0 | 0 | reports/2026-10-19/nagol12344-patch-run02-OK.md |
| nekogryphou-gryphous-morphe-patches | 2026-10-19 | 4662789 | OK | 0 | 0 | 0 | reports/2026-10-19/nekogryphou-gryphous-morphe-patches-run02-OK.md |
| newuser7171-telegram-morphe-patches- | 2026-10-19 | 289893a | OK | 0 | 0 | 0 | reports/2026-10-19/newuser7171-telegram-morphe-patches--run02-OK.md |
| nickcomua-airofit-pro2-morphe-patches | 2026-10-19 | 15bcaf0 | OK | 0 | 0 | 0 | reports/2026-10-19/nickcomua-airofit-pro2-morphe-patches-run02-OK.md |
| ns1207-morphe-patches-template | 2026-10-19 | fa856e5 | OK | 0 | 0 | 0 | reports/2026-10-19/ns1207-morphe-patches-template-run02-OK.md |
| nullwaypoint-morphe-patches | 2026-10-19 | 107730d | OK | 0 | 0 | 0 | reports/2026-10-19/nullwaypoint-morphe-patches-run02-OK.md |
| o0b-morphe-patches | 2026-10-19 | 5859a62 | OK | 0 | 0 | 0 | reports/2026-10-19/o0b-morphe-patches-run02-OK.md |
| okazakee-iptv-morphe-patches | 2026-10-19 | 8469e66 | OK | 0 | 0 | 0 | reports/2026-10-19/okazakee-iptv-morphe-patches-run02-OK.md |
| osirisad-teamsnap-patches | 2026-10-19 | bb52277 | OK | 0 | 0 | 0 | reports/2026-10-19/osirisad-teamsnap-patches-run02-OK.md |
| paresh-maheshwari-paresh-patches | 2026-10-19 | 84b5e5b | OK | 0 | 0 | 0 | reports/2026-10-19/paresh-maheshwari-paresh-patches-run02-OK.md |
| phamleduy04-duy-patches | 2026-10-19 | 9808547 | OK | 0 | 0 | 0 | reports/2026-10-19/phamleduy04-duy-patches-run02-OK.md |
| picarica-my-moprhe-patches | 2026-10-19 | 3ffd631 | OK | 0 | 0 | 0 | reports/2026-10-19/picarica-my-moprhe-patches-run02-OK.md |
| pigfoot-morphe-patches | 2026-10-19 | 12cebdd | OK | 0 | 0 | 0 | reports/2026-10-19/pigfoot-morphe-patches-run02-OK.md |
| pixelpusher247-morphe-patches | 2026-10-19 | 0d6780b | OK | 0 | 0 | 0 | reports/2026-10-19/pixelpusher247-morphe-patches-run02-OK.md |
| plyrs1-morphe-patches | 2026-10-19 | c59af6e | OK | 0 | 0 | 0 | reports/2026-10-19/plyrs1-morphe-patches-run02-OK.md |
| polka-bear-morphe-patches | 2026-10-19 | ec4905f | OK | 0 | 0 | 0 | reports/2026-10-19/polka-bear-morphe-patches-run02-OK.md |
| prathxmop-prathxm-patches | 2026-10-19 | 011e2ae | OK | 0 | 0 | 0 | reports/2026-10-19/prathxmop-prathxm-patches-run02-OK.md |
| pyflat-jr-morphe-patches | 2026-10-19 | c8a381e | OK | 0 | 0 | 0 | reports/2026-10-19/pyflat-jr-morphe-patches-run02-OK.md |
| quantavil-edge-morphe-patches | 2026-10-19 | 6b99b3a | OK | 0 | 0 | 0 | reports/2026-10-19/quantavil-edge-morphe-patches-run02-OK.md |
| r2beeaton-walmart-morphe | 2026-10-19 | 25ea2dd | OK | 0 | 0 | 0 | reports/2026-10-19/r2beeaton-walmart-morphe-run02-OK.md |
| rabehx-rabehx-patches | 2026-10-19 | c3782a0 | OK | 0 | 0 | 0 | reports/2026-10-19/rabehx-rabehx-patches-run02-OK.md |
| rabilrbl-fluffy-patches | 2026-10-19 | 0661ed8 | OK | 0 | 0 | 0 | reports/2026-10-19/rabilrbl-fluffy-patches-run02-OK.md |
| rafag00-morphe-patches | 2026-10-19 | dfd3325 | OK | 0 | 0 | 0 | reports/2026-10-19/rafag00-morphe-patches-run02-OK.md |
| rahaaatul-morphe-patches | 2026-10-19 | be75d70 | OK | 0 | 0 | 0 | reports/2026-10-19/rahaaatul-morphe-patches-run02-OK.md |
| realcyberwash-max-patches | 2026-10-19 | 712bae3 | OK | 0 | 0 | 0 | reports/2026-10-19/realcyberwash-max-patches-run02-OK.md |
| reemx-morphe-me-patches | 2026-10-19 | eaa9e3c | OK | 0 | 0 | 0 | reports/2026-10-19/reemx-morphe-me-patches-run02-OK.md |
| rhubarbshoelaces-morphe-patches | 2026-10-19 | e2a89cc | OK | 0 | 0 | 0 | reports/2026-10-19/rhubarbshoelaces-morphe-patches-run02-OK.md |
| rikodev-morphed-pl | 2026-10-19 | 94f6e07 | OK | 0 | 0 | 0 | reports/2026-10-19/rikodev-morphed-pl-run02-OK.md |
| rikunode-pupil-swipe-disable-patches | 2026-10-19 | 1c30da1 | OK | 0 | 0 | 0 | reports/2026-10-19/rikunode-pupil-swipe-disable-patches-run02-OK.md |
| riky-dev-morphe-patches | 2026-10-19 | d46efd4 | OK | 0 | 0 | 0 | reports/2026-10-19/riky-dev-morphe-patches-run02-OK.md |
| ripthulhu-morphe-google-patches | 2026-10-19 | d9769cf | OK | 0 | 0 | 0 | reports/2026-10-19/ripthulhu-morphe-google-patches-run02-OK.md |
| rjbiermann-brave-waffle | 2026-10-19 | 3bf055a | OK | 0 | 0 | 0 | reports/2026-10-19/rjbiermann-brave-waffle-run02-OK.md |
| rookieenough-de-vanced | 2026-10-19 | 5cf78f1 | OK | 0 | 0 | 0 | reports/2026-10-19/rookieenough-de-vanced-run02-OK.md |
| roundsalmon4-morphe-patches-template | 2026-10-19 | f8c95c8 | OK | 0 | 0 | 0 | reports/2026-10-19/roundsalmon4-morphe-patches-template-run02-OK.md |
| rushiranpise-ri-vanced-universal-morphe-patches | 2026-10-19 | b7c4702 | OK | 0 | 0 | 0 | reports/2026-10-19/rushiranpise-ri-vanced-universal-morphe-patches-run02-OK.md |
| ryykitty-twitch-patched | 2026-10-19 | 11d5b95 | OK | 0 | 0 | 0 | reports/2026-10-19/ryykitty-twitch-patched-run02-OK.md |
| sailhighsea-sailhighsea-patches | 2026-10-19 | 613d92f | OK | 0 | 0 | 0 | reports/2026-10-19/sailhighsea-sailhighsea-patches-run02-OK.md |
| santodan-santodan-patches | 2026-10-19 | f02159c | OK | 0 | 0 | 0 | reports/2026-10-19/santodan-santodan-patches-run02-OK.md |
| sapitosucio-froggomorphepatches | 2026-10-19 | fcada9f | OK | 0 | 0 | 0 | reports/2026-10-19/sapitosucio-froggomorphepatches-run02-OK.md |
| sfehhrths-ekispert-morphe-patches | 2026-10-19 | 0963f07 | OK | 0 | 0 | 0 | reports/2026-10-19/sfehhrths-ekispert-morphe-patches-run02-OK.md |
| shaun-the-sheep-patches-morphe-patches | 2026-10-19 | 46d09a0 | OK | 0 | 0 | 0 | reports/2026-10-19/shaun-the-sheep-patches-morphe-patches-run02-OK.md |
| shini-cell-shini-morphe | 2026-10-19 | 00c4645 | OK | 0 | 0 | 0 | reports/2026-10-19/shini-cell-shini-morphe-run02-OK.md |
| shuhaibnc-morphe-patches | 2026-10-19 | cf1d30f | OK | 0 | 0 | 0 | reports/2026-10-19/shuhaibnc-morphe-patches-run02-OK.md |
| snowyegret23-morphe-patches | 2026-10-19 | 979235c | OK | 0 | 0 | 0 | reports/2026-10-19/snowyegret23-morphe-patches-run02-OK.md |
| soubryan-pinterest-morphed | 2026-10-19 | a33eb3a | OK | 0 | 0 | 0 | reports/2026-10-19/soubryan-pinterest-morphed-run02-OK.md |
| spookyexe-morphe-patches | 2026-10-19 | 32b7427 | OK | 0 | 0 | 0 | reports/2026-10-19/spookyexe-morphe-patches-run02-OK.md |
| sqzass-patches | 2026-10-19 | bbbafa5 | OK | 0 | 0 | 0 | reports/2026-10-19/sqzass-patches-run02-OK.md |
| subenoeva-roadsync-patches | 2026-10-19 | b66962d | OK | 0 | 0 | 0 | reports/2026-10-19/subenoeva-roadsync-patches-run02-OK.md |
| sudashiii-servus-patches | 2026-10-19 | 9e23e94 | OK | 0 | 0 | 0 | reports/2026-10-19/sudashiii-servus-patches-run02-OK.md |
| supperelias2-sbs-morphe-patches | 2026-10-19 | 6c3554a | OK | 0 | 0 | 0 | reports/2026-10-19/supperelias2-sbs-morphe-patches-run02-OK.md |
| supperelias2-sbs-tv-morphe-patches | 2026-10-19 | 405979d | OK | 0 | 0 | 0 | reports/2026-10-19/supperelias2-sbs-tv-morphe-patches-run02-OK.md |
| sushruth-imgur-patches | 2026-10-19 | 9c0f7da | OK | 0 | 0 | 0 | reports/2026-10-19/sushruth-imgur-patches-run02-OK.md |
| sysadmindoc-hushfeed | 2026-10-19 | a456d38 | RED | 0 | 1 | 0 | reports/2026-10-19/sysadmindoc-hushfeed-run02-RED-c0h1m0.md |
| sysadmindoc-hushgram | 2026-10-19 | fe0c503 | OK | 0 | 0 | 0 | reports/2026-10-19/sysadmindoc-hushgram-run02-OK.md |
| sysadmindoc-hushpinterest | 2026-10-19 | c471a0d | OK | 0 | 0 | 0 | reports/2026-10-19/sysadmindoc-hushpinterest-run02-OK.md |
| sysadmindoc-hushtelegram | 2026-10-19 | 7019a0b | OK | 0 | 0 | 0 | reports/2026-10-19/sysadmindoc-hushtelegram-run02-OK.md |
| sysadmindoc-hushthreads | 2026-10-19 | 1e4d651 | OK | 0 | 0 | 0 | reports/2026-10-19/sysadmindoc-hushthreads-run02-OK.md |
| sysadmindoc-hushtumblr | 2026-10-19 | 92f2881 | OK | 0 | 0 | 0 | reports/2026-10-19/sysadmindoc-hushtumblr-run02-OK.md |
| tachibana-shin-morphe-patches | 2026-10-19 | f4cd950 | OK | 0 | 0 | 0 | reports/2026-10-19/tachibana-shin-morphe-patches-run02-OK.md |
| testiwy268-morphe-patches | 2026-10-19 | 4ddca00 | OK | 0 | 0 | 0 | reports/2026-10-19/testiwy268-morphe-patches-run02-OK.md |
| theabhishekbhujang-morphe-patches | 2026-10-19 | ad34256 | OK | 0 | 0 | 0 | reports/2026-10-19/theabhishekbhujang-morphe-patches-run02-OK.md |
| thegibbonn-morphe-patches-anilili | 2026-10-19 | f7f35ac | OK | 0 | 0 | 0 | reports/2026-10-19/thegibbonn-morphe-patches-anilili-run02-OK.md |
| thewanwan-bestapp | 2026-10-19 | 2f28eda | OK | 0 | 0 | 0 | reports/2026-10-19/thewanwan-bestapp-run02-OK.md |
| tiaruebar1024-tiaruebar-patches | 2026-10-19 | 2bb3747 | OK | 0 | 0 | 0 | reports/2026-10-19/tiaruebar1024-tiaruebar-patches-run02-OK.md |
| timbuckrue-nyt-games-vrr-patch | 2026-10-19 | 1765519 | OK | 0 | 0 | 0 | reports/2026-10-19/timbuckrue-nyt-games-vrr-patch-run02-OK.md |
| torbenstriegel-morphe-patches-custom | 2026-10-19 | a1d1b53 | OK | 0 | 0 | 0 | reports/2026-10-19/torbenstriegel-morphe-patches-custom-run02-OK.md |
| tornillo2-movistar-block-ads-morphe | 2026-10-19 | 92c9a84 | OK | 0 | 0 | 0 | reports/2026-10-19/tornillo2-movistar-block-ads-morphe-run02-OK.md |
| totsiaw-proxma-patches | 2026-10-19 | 02bd868 | SHALLOW | 0 | 0 | 0 | reports/2026-10-19/totsiaw-proxma-patches-run02-OK.md |
| unkybadtouch-plex-morphe-patches | 2026-10-19 | 216d2eb | OK | 0 | 0 | 0 | reports/2026-10-19/unkybadtouch-plex-morphe-patches-run02-OK.md |
| v4n1x-morphe-patches | 2026-10-19 | 40ef3ad | OK | 0 | 0 | 0 | reports/2026-10-19/v4n1x-morphe-patches-run02-OK.md |
| venusisjaded-venus-patches | 2026-10-19 | cde24fd | BANNED | 0 | 0 | 0 | reports/2026-10-18/venusisjaded-venus-patches-run04-CRIT-c2h4m0.md |
| vipinvip-railone-patches | 2026-10-19 | ea245d4 | OK | 0 | 0 | 0 | reports/2026-10-19/vipinvip-railone-patches-run02-OK.md |
| virzak-morphe-patches | 2026-10-19 | e39e88c | OK | 0 | 0 | 0 | reports/2026-10-19/virzak-morphe-patches-run02-OK.md |
| waggbr-wagg13patch_morphe | 2026-10-19 | 9906263 | OK | 0 | 0 | 0 | reports/2026-10-19/waggbr-wagg13patch_morphe-run02-OK.md |
| wchill-patcheddit | 2026-10-19 | 445bcb0 | OK | 0 | 0 | 0 | reports/2026-10-19/wchill-patcheddit-run02-OK.md |
| wzse-aapam-patches | 2026-10-19 | 34b20c0 | OK | 0 | 0 | 0 | reports/2026-10-19/wzse-aapam-patches-run02-OK.md |
| xhehab-xhehab-patches | 2026-10-19 | be2ec1b | OK | 0 | 0 | 0 | reports/2026-10-19/xhehab-xhehab-patches-run02-OK.md |
| xob0t-morphe-patches | 2026-10-19 | 39fa180 | OK | 0 | 0 | 0 | reports/2026-10-19/xob0t-morphe-patches-run02-OK.md |
| xtapped-morphe-patches | 2026-10-19 | 76625a0 | OK | 0 | 0 | 0 | reports/2026-10-19/xtapped-morphe-patches-run02-OK.md |
| xxxr3dxxx-r3d-patchlab | 2026-10-19 | 3cc486c | OK | 0 | 0 | 0 | reports/2026-10-19/xxxr3dxxx-r3d-patchlab-run02-OK.md |
| yann-soliman-morphe-patches | 2026-10-19 | 7252220 | OK | 0 | 0 | 0 | reports/2026-10-19/yann-soliman-morphe-patches-run02-OK.md |
| zanuaimi-unipatches | 2026-10-19 | 3bb7707 | OK | 0 | 0 | 0 | reports/2026-10-19/zanuaimi-unipatches-run02-OK.md |

## Review queue (needs human)

LLM-suspect items below the confirmation bar, plus pending items awaiting a usable verdict. Fully automatic: a repeat non-benign verdict for the same target+file across windows auto-bans with no human in the loop, and a benign verdict clears old strikes. `config/pardons.json` is the manual escape hatch.

| date | target | file | verdict | conf | evidence |
|---|---|---|---|---|---|
| 2026-10-19 | sysadmindoc-hushfeed | extensions/tiktok/src/main/java/app/morphe/extension/tiktok/font/WebFont.java | suspicious | 0.58 | extensions/tiktok/src/main/java/app/morphe/extension/tiktok/font/WebFont.java:9,extensions/tiktok/src/main/java/app/morphe/extension/tiktok/font/WebFont.java:10,extensions/tiktok/src/main/java/app/morphe/extension/tiktok/font/WebFont.java:12,extensions/tiktok/src/main/java/app/morphe/extension/tiktok/font/WebFont.java:14,extensions/tiktok/src/main/java/app/morphe/extension/tiktok/font/WebFont.java:15 |
| 2026-10-19 | angeldark92-steamlink-patches | patches/src/main/resources/steamlink/androidxr/libgxr_xr_bridge.so | suspicious | 0.82 | patches/src/main/resources/steamlink/androidxr/libgxr__xr__bridge.so:13750724 |
| 2026-10-18 | venusisjaded-venus-patches | patches/src/main/resources/venus/bootstrap.js | suspicious | 0.72 | patches/src/main/resources/venus/bootstrap.js:3-18 |
| 2026-10-18 | sysadmindoc-hushpinterest | extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/actions/CopyImage.java | suspicious | 0.72 | extensions/pinterest/src/main/java/app/hushpinterest/extension/pinterest/actions/CopyImage.java:1-30 |
| 2026-10-18 | hxreborn-morphe-patches | extensions/extension/src/main/java/app/hxreborn/extension/privacynotes/ProUnlock.java | suspicious | 0.72 | extensions/extension/src/main/java/app/hxreborn/extension/privacynotes/ProUnlock.java:14 |
| 2026-10-18 | blazeftl-ftl-patches | .github/assets/fonts/Poppins-BoldItalic.ttf | suspicious | 0.5 | .github/assets/fonts/Poppins-BoldItalic.ttf |
| 2026-10-18 | angeldark92-steamlink-patches | patches/src/main/resources/steamlink/androidxr/libgxr_performance_boost.so | suspicious | 0.35 | patches/src/main/resources/steamlink/androidxr/libgxr_performance_boost.so:binary |
| 2026-10-18 | ihatenodejs-aidans-patches | extensions/extension/src/main/java/app/aidan/extension/geocaching/GeocacheEnrichmentBridge.java | suspicious | 0.55 | extensions/extension/src/main/java/app/aidan/extension/geocaching/GeocacheEnrichmentBridge.java:1 |
| 2026-10-18 | k8r8to-kizu-morphe-patches | extensions/extension/src/main/java/app/morphe/extension/twitch/emotes/EmotePickerImages.java | pending | 0 | typosquat of allowlisted domain: https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic), https://static-cdn.jtvnw.net (~gstatic) |
| 2026-10-18 | k8r8to-kizu-morphe-patches | patches/src/main/kotlin/io/github/bakwudo/uyu/patches/twitch/emotes/NativePickerHooks.kt | suspicious | 0.72 | patches/src/main/kotlin/io/github/bakwudo/uyu/patches/twitch/emotes/NativePickerHooks.kt:1-15 |
| 2026-10-17 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/method-delta.dex | pending | 0 | [binary strings] sensitive source reaches network sink |
| 2026-10-17 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/helpers.mpe | pending | 0 | [binary strings] reflection-hidden behavior with network sink |
| 2026-10-17 | venusisjaded-venus-patches | cross-window | suspicious | 0.5 | patches/src/main/resources/venus/bootstrap.js |
| 2026-10-17 | heval99-heval-morphe-patches | cross-window | pending | 0 | exfil completed across windows in patches/src/main/kotlin/app/template/patches/shared/Constants.kt: previously seen host http://4.2.31.1 (2026-10-16) with new WebView |
| 2026-10-17 | hxreborn-morphe-patches | patches/src/main/resources/moviebox/dashhook.dex | pending | 0 | [binary strings] reflection-hidden behavior with network sink |
| 2026-10-16 | hxreborn-morphe-patches | patches/src/main/resources/moviebox/dashhook.dex | suspicious | 0.65 | patches/src/main/resources/moviebox/dashhook.dex:54C |
| 2026-10-16 | chikuwadon-nicoid-re-patches | patches/src/main/resources/nicoid/method-delta.dex | suspicious | 0.6 | patches/src/main/resources/nicoid/method-delta.dex |
| 2026-10-16 | venusisjaded-venus-patches | cross-window | pending | 0 | exfil completed across windows in patches/src/main/resources/venus/bootstrap.js: previously seen host https://cdn.discordapp.com (2026-10-15) with new Clipboard |
| 2026-10-16 | alastor-kaneki-morphe-patches | cross-window | suspicious | 0.2 | extensions/extension/src/main/java/dev/alastorkaneki/morphe/extension/reddit/RedditGalleryOverlayController.java |
| 2026-10-16 | heval99-heval-morphe-patches | cross-window | suspicious | 0.5 | patches/src/main/kotlin/app/template/patches/shared/Constants.kt |


## Secrets policy

Never paste tokens into chat or code. The workflow needs no token for public repos; if GitHub rate-limits, add an Actions secret named `SCAN_TOKEN` and use it via `secrets.SCAN_TOKEN` only. The LLM reviewer reads `LLM_API_KEY` (OpenRouter key, secret) and optional `LLM_MODEL` / `LLM_FALLBACKS` (repo variables, auto-resolved to a live free model when empty) plus `LLM_MONTHLY_BUDGET_USD` (default 5); without a key the LLM layer is skipped silently.
