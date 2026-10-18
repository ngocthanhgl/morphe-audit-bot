# Zanuaimi/UniPatches — 2026-10-18

Commit: 6d1d59e780a25c3fd972b87c426de85709b56141 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/unipatches/compatibility/LegacyAppCompatibilityNetworkSecurity.kt — new non-allowlisted URL or IP</summary>

```
package unipatches.compatibility

import org.w3c.dom.Document
import org.w3c.dom.Element
import java.io.File
import java.io.InputStream
import java.net.IDN
import java.util.Locale
import javax.xml.XMLConstants
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.transform.TransformerFactory
import javax.xml.transform.dom.DOMSource
import javax.xml.transform.stream.StreamResult

private const val NETWORK_SECURITY_CONFIG = "network-security-config"
```

</details>


__
