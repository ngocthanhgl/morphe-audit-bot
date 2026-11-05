# d0nj/morphe-patches — 2026-11-05

Commit: 72fa98baf815331ebc30cec988ccb01164ef7238 | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/extension/src/main/java/app/d0nj/extension/niagara/MetNorwayWeather.java — new non-allowlisted URL or IP</summary>

```
package app.d0nj.extension.niagara;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
```

</details>

<details>
<summary>[high] cross-window — exfil completed across windows in extensions/extension/src/main/java/app/d0nj/extension/niagara/OpenMeteoWeather.java: previously seen host https://api.open-meteo.com (2026-11-02) with new HttpURLConnection, openConnection [llm: benign 0.65 — no ban]</summary>

LLM review: benign (0.65, benign-other): No diff content was provided showing exfiltration. The only cited destination is https://api.open-meteo.com, a legitimate weather API consistent with the OpenMeteoWeather.java filename and purpose. HttpURLConnection/openConnection alone does not demonstrate sending sensitive data, backdoor, or spyware behavior.

```
(see report of 2026-11-02 for the earlier half)
```

</details>


__
