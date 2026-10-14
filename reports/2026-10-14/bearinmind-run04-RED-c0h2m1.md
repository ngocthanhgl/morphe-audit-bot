# bearinmindcat/morphe-patches — 2026-10-14

Commit: de89b2084387a3e69f259b5ac1c3ddae433eccec | Status: RED | crit:0 high:2 med:1

<details>
<summary>[high] extensions/extension/src/main/java/org/ungoogled/ui/SpeedCameras.java — sensitive source reaches network sink</summary>

```
 * comes from Android's GPS while Maps is open or navigating; until GPS has a fix (indoors, just
 * opened), a fix another app asked for -- Maps' own, too -- or the phone's network location (only when
 * Maps' Location source is Android's, so no other location service is asked) decides where to
 * download and draw -- the alerts wait for GPS. A server that fails or hangs is passed over for a while, and a
 * failed download is tried again by itself: after 30 seconds, then 1, 2, 4 ... up to 30 minutes.
    /**
     * Public Overpass servers, tried in this order (passing over any that failed lately): the main
     * one, then its two machines by name -- the main name sends a request to either, and one of them
     * is often too busy (504) while the other answers -- then VK's and private.coffee's (which
     * overpass.kumi.systems also points at).
     */
            "https://lz4.overpass-api.de/api/interpreter",
            "https://z.overpass-api.de/api/interpreter",
            "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
    /** Per server: until when it is passed over, after a failure (System.currentTimeMillis()). */
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/org/ungoogled/ui/SpeedCameras.java — dangerous permission plus network sink in same file</summary>

```
 * comes from Android's GPS while Maps is open or navigating; until GPS has a fix (indoors, just
 * opened), a fix another app asked for -- Maps' own, too -- or the phone's network location (only when
 * Maps' Location source is Android's, so no other location service is asked) decides where to
 * download and draw -- the alerts wait for GPS. A server that fails or hangs is passed over for a while, and a
 * failed download is tried again by itself: after 30 seconds, then 1, 2, 4 ... up to 30 minutes.
    /**
     * Public Overpass servers, tried in this order (passing over any that failed lately): the main
     * one, then its two machines by name -- the main name sends a request to either, and one of them
     * is often too busy (504) while the other answers -- then VK's and private.coffee's (which
     * overpass.kumi.systems also points at).
     */
            "https://lz4.overpass-api.de/api/interpreter",
            "https://z.overpass-api.de/api/interpreter",
            "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
    /** Per server: until when it is passed over, after a failure (System.currentTimeMillis()). */
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/extension/src/main/java/org/ungoogled/ui/SpeedCameras.java: new host https://lz4.overpass-api.de, https://z.overpass-api.de, https://maps.mail.ru with previously seen Location (2026-10-14)</summary>

```
(see report of 2026-10-14 for the earlier half)
```

</details>


__
