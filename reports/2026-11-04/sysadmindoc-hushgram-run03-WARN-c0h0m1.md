# SysAdminDoc/HushGram — 2026-11-04

Commit: 781164bbc3f17b23e78ae75c4885e24fdf751191 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] extensions/instagram/src/main/java/app/hushgram/extension/instagram/download/PostMetadata.java — new non-allowlisted URL or IP</summary>

```
import android.media.MediaScannerConnection;
 * Writes where a saved photo or video came from into the file itself: the account that posted it,
 * when the post went up and a link to the post. A JPEG gets them in the EXIF a gallery or exiftool
 * reads, never over the picture, and an MP4 video in its item list through {@link VideoMetadata}.
 * Nothing else is touched, and only after the save has already published the file, so a failure
 * here never costs the save: it already succeeded and this is best effort on top.
 * <p>The link is the post's web address, built from the post's id the same way Instagram builds a
 * whole ecosystem uses, checked here against known id/shortcode pairs in the test. It's the parent
 * post's id ({@link PostDetails#shortcode}), never the saved file's own: a carousel page links its
 * post, and a story, which has no post page, gets no link.
    /**
     * The web address of the post the save came from, or null when the save doesn't know its post:
     * a story, a profile picture, or a route that never named one.
     */
        if (details == null || !details.hasShortcode()) return null;
```

</details>

<details>
<summary>[info] extensions/instagram/src/test/resources/app/hushgram/extension/instagram/download/video-metadata-first.mp4 — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] extensions/instagram/src/test/resources/app/hushgram/extension/instagram/download/video-metadata-fragmented.mp4 — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] extensions/instagram/src/test/resources/app/hushgram/extension/instagram/download/video-metadata-last.mp4 — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>


__
