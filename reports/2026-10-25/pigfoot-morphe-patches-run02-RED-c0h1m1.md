# pigfoot/morphe-patches — 2026-10-25

Commit: 9394272f2e65d2c4ff6422684ab9b388ef129f1d | Status: RED | crit:0 high:1 med:1

<details>
<summary>[medium] extensions/camscanner/src/main/java/app/pigfoot/camscanner/LoginApiPolicy.java — new non-allowlisted URL or IP</summary>

```
package app.pigfoot.camscanner;

/** Stateless compatibility policy. Never records diagnostics or changes a service host. */
public final class LoginApiPolicy {
    private LoginApiPolicy() {}
    public static String refreshLoginApis(String cached) {
        if (cached == null || cached.isEmpty() || cached.length() > 32768) return cached;
        try {
            Class<?> json = Class.forName("org.json.JSONObject");
            Object object = json.getConstructor(String.class).newInstance(cached);
            Object uapi = json.getMethod("opt", String.class).invoke(object, "UAPI");
            Object ret = json.getMethod("opt", String.class).invoke(object, "ret");
            Object err = json.getMethod("opt", String.class).invoke(object, "err");
            boolean knownError = ((Number) json.getMethod("length").invoke(object)).intValue() == 2 &&
                    err instanceof String && ret instanceof Number &&
```

</details>

<details>
<summary>[high] patches/src/main/kotlin/app/pigfoot/patches/camscanner/CamScannerLotteryInitGuard.kt — WebView JS bridge with network sink: evaluateJavascript</summary>

LLM review: suspicious (0.7, exfiltration): The flagged file references a WebView client class and an internal guard for a lottery initialization method. Static analysis flags a WebView JS bridge with a network sink via evaluateJavascript. The excerpt does not show the actual evaluateJavascript call or network request, so the potential data-exfiltration sink is not fully visible. The behavior is suspicious but not conclusively malicious from this fragment alone.

```
package app.pigfoot.patches.camscanner

import app.morphe.patcher.extensions.InstructionExtensions.addInstructions
import app.morphe.patcher.util.proxy.mutableTypes.MutableMethod
import com.android.tools.smali.dexlib2.AccessFlags
import com.android.tools.smali.dexlib2.iface.Method

internal const val LOTTERY_WEB_CLIENT = "Lcom/intsig/webview/WebViewFragment\$IsWebViewClient;"
internal const val LOTTERY_WEB_CLIENT_PIN = "424a01b5ab60296ce8794c67b559992f6c76545b0a19fe0e19d2061e94341fcb"

internal fun requireLotteryInitMethod(method: Method) {
    require(method.definingClass == LOTTERY_WEB_CLIENT && method.name == "onPageFinished" &&
        method.parameterTypes.map { it.toString() } == listOf("Landroid/webkit/WebView;", "Ljava/lang/String;") &&
        method.returnType == "V" && !AccessFlags.STATIC.isSet(method.accessFlags) && method.implementation?.registerCount == 11) {
        "Unsupported lottery initialization page-finished method"
```

</details>


__
