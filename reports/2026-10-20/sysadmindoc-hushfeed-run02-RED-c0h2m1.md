# SysAdminDoc/hushfeed — 2026-10-20

Commit: 46d629c17cabb425f89f15e6e38a4ee66ac642cc | Status: RED | crit:0 high:2 med:1

<details>
<summary>[medium] extensions/tiktok/src/main/java/app/morphe/extension/tiktok/download/MediaTransport.java — new non-allowlisted URL or IP</summary>

```
    /**
     * The synthetic answers a fake-IP resolver hands out: 198.18.0.0/15 and fc00::/18, the pools
     * Clash and mihomo (198.18.0.1/16), Xray and sing-box use. Proxy apps that run in fake-IP mode
     * answer every proxied hostname from that pool and map each address back to its hostname when
     * the connection reaches them, so a TikTok CDN host comes back as 198.18.x.x on those phones
     * (#145). Neither pool is a LAN or device address, and TLS still authenticates the hostname.
     */
    static boolean isProxyMappedAddress(InetAddress address) {
        if (address == null) return false;
        byte[] bytes = address.getAddress();
        if (bytes.length == 4) return (bytes[0] & 255) == 198 && (bytes[1] & 0xfe) == 18;
        if (bytes.length == 16) {
            return (bytes[0] & 255) == 0xfc && bytes[1] == 0 && (bytes[2] & 0xc0) == 0;
        }
        return false;
```

</details>

<details>
<summary>[high] extensions/tiktok/stub/src/main/java/com/ss/android/ugc/aweme/feed/model/PhotoModeImageInfo.java — typosquat of allowlisted domain: https://gitlab.com (~github) [llm: benign 0.98 — no ban]</summary>

```
 * Mirror, since GitHub blocks the original: https://gitlab.com/ReVanced/revanced-patches/-/blob/377d4e15016296b45d809697f7f69bce74badd3a/extensions/tiktok/stub/src/main/java/com/ss/android/ugc/aweme/feed/model/PhotoModeImageInfo.java

```

</details>

<details>
<summary>[high] extensions/tiktok/stub/src/main/java/com/ss/android/ugc/aweme/feed/model/PhotoModeTextInfo.java — typosquat of allowlisted domain: https://gitlab.com (~github) [llm: benign 0.99 — no ban]</summary>

```
 * Mirror, since GitHub blocks the original: https://gitlab.com/ReVanced/revanced-patches/-/blob/377d4e15016296b45d809697f7f69bce74badd3a/extensions/tiktok/stub/src/main/java/com/ss/android/ugc/aweme/feed/model/PhotoModeTextInfo.java

```

</details>


__
