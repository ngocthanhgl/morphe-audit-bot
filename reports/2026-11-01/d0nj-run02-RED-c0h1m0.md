# d0nj/morphe-patches — 2026-11-01

Commit: 1aa146bb0c335cef8bf6cee87ad486de56d8e07f | Status: RED | crit:0 high:1 med:0

<details>
<summary>[high] extensions/extension/src/main/java/app/d0nj/extension/niagara/OpenMeteoWeather.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.35, benign-other): The excerpt shows only import declarations. It combines reflection (java.lang.reflect.Field) with network sinks (java.net.HttpURLConnection, java.net.URL), which matches the static-analysis flag, but no actual reflective field access or network call is visible. Without method bodies, malicious behavior cannot be confirmed; this may be a legitimate weather extension. Manual review of the full file is required.

```
package app.d0nj.extension.niagara;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
```

</details>


__
