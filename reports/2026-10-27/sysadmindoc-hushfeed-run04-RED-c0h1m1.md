# SysAdminDoc/hushfeed — 2026-10-27

Commit: d6bdc5bfbbc8faa2f4a299ce7f5eb0c91b73d1f5 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/DownloadDetails.java — new non-allowlisted URL or IP</summary>

```
import java.util.List;
        this(aweme, json, false);
    }

    /** {@code photo} links a photo post the way TikTok's web does, under /photo/ rather than /video/. */
    DownloadDetails(Object aweme, boolean json, boolean photo) {
                : "https://www.tiktok.com/@" + Uri.encode(handle) + (photo ? "/photo/" : "/video/")
                        + Uri.encode(id), 4096);
        return text(null, null);
    }

    /**
     * With {@code requested} set, a photo post's file: the photos the save asked for and the ones
     * that landed, numbered from 1 like the photos' own names.
     */
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/MediaTransport.java: previously seen host http://198.18.0.0, http://198.18.0.1 (2026-10-27) with new HttpURLConnection</summary>

LLM review: suspicious (0.62, exfiltration): The flagged file references a previously-seen exfiltration pattern (hosts 198.18.0.0/1.1) and introduces a new HttpURLConnection call, consistent with a continuation of data-channel exfiltration. However, the evidence is indirect — it cites prior report history rather than direct code evidence of the new connection — so confidence is below the 0.85 threshold for a malicious verdict. The behavior is suspicious and warrants deeper static analysis of the new HttpURLConnection usage, but without direct code evidence of the offending lines, 'suspicious' is the appropriate verdict.

```
(see report of 2026-10-27 for the earlier half)
```

</details>


__
