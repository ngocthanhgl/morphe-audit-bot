# SysAdminDoc/hushfeed — 2026-11-11

Commit: 7898077156eeb6c79d66ebe426b36260088bff5e | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/MediaTransport.java — new non-allowlisted URL or IP</summary>

```
     * The synthetic answers a fake-IP resolver hands out: 198.18.0.0/15, the pool Clash and mihomo
     * (198.18.0.1/16), Xray and sing-box use, and unique-local fc00::/7 for IPv6. Proxy apps that
     * run in fake-IP mode answer every proxied hostname from their pool and map each address back
     * to its hostname when the connection reaches them, so a TikTok CDN host comes back as
     * 198.18.x.x on those phones (#145). Xray and sing-box take fc00::/18, but mihomo has no
     * default IPv6 pool and its documented one is fdfe:dcba:9876::1/64, so with IPv6 on every save
     * failed (#387). Only HTTPS is opened, and TLS still authenticates the hostname.
        if (bytes.length == 16) return (bytes[0] & 0xfe) == 0xfc;
    /**
     * The special block a refused address sits in, so a diagnostic report says why a save was
     * refused without carrying the address itself (#387).
     */
    static String blockOf(InetAddress address) {
        byte[] bytes = address.getAddress();
        if (bytes.length == 4) {
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/MediaTransport.java: new host http://198.18.0.0, http://198.18.0.1 with previously seen HttpURLConnection (2026-11-11)</summary>

LLM review: suspicious (0.3, exfiltration): No diff content was supplied: the excerpt is only a cross-reference to an earlier report, so the actual code behavior cannot be inspected. The sole signal is a static-analysis flag for new hosts 198.18.0.0 and 198.18.0.1 used with HttpURLConnection. Both addresses fall in 198.18.0.0/15, the range reserved by RFC 2544 for network-device benchmarking, which is not a routable public destination and is commonly used for local or test endpoints; that weakens the exfiltration hypothesis. HttpURLConnection in a TikTok media-download transport class is also consistent with the file's stated purpose. Because the offending lines cannot be identified and no malicious behavior can be confirmed, a malicious verdict is not supportable; the missing code and the unexplained cross-window data flow keep this at suspicious rather than benign.

```
(see report of 2026-11-11 for the earlier half)
```

</details>


__
