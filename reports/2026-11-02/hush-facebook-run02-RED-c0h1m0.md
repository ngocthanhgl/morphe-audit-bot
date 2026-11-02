# SysAdminDoc/HushFacebook — 2026-11-02

Commit: fbab132792123964eb8950ced9998e7f9ff95f28 | Status: RED | crit:0 high:1 med:0

<details>
<summary>[high] extensions/facebook/src/main/java/app/morphe/extension/facebook/feed/GoogleTranslate.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.6, benign-other): The code opens an HttpURLConnection to Google Translate and spoofs a browser User-Agent ("Mozilla/5.0") because Google serves Android/Dalvik a 429 unusual-traffic page. It also disables redirect following to detect the limit page. This is consistent with a translation feature, but the combination of third-party network access, User-Agent spoofing to evade rate limiting/anti-bot controls, and the static-analysis flag (sensitive source reaches network sink) makes the behavior suspicious. There is not enough evidence to confirm exfiltration, backdoor, or supply-chain compromise, so it is not classified as malicious.

```
        Limited(String detail) {
            super("Google Translate asked for fewer requests, " + detail);
    /**
     * The User-Agent Google is asked with. Google sends Android's own, Dalvik/2.1.0, to its
     * unusual-traffic page, which answers 429, so every request failed as if limited. A plain
     * browser name gets the translation.
     */
    static final String USER_AGENT = "Mozilla/5.0";

    /** The request for a translation to [target], not yet sent. A redirect isn't followed: it's the limit page. */
    static HttpURLConnection request(String target) throws IOException {
        connection.setInstanceFollowRedirects(false);
        connection.setConnectTimeout(CONNECT_MILLIS);
        connection.setReadTimeout(READ_MILLIS);
        connection.setRequestMethod("POST");
```

</details>


__
