# SysAdminDoc/HushTelegram — 2026-11-24

Commit: 0f34195e138913f6b9d7dde1fe8726e0e6e2c06b | Status: RED | crit:0 high:1 med:1

<details>
<summary>[high] extensions/shared/library/src/main/java/app/hushtelegram/extension/shared/L10nTranslations.java — sensitive source reaches network sink</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
    static final String[] LANGUAGES = {"bg", "de", "es", "in", "it", "pt-rbr", "tr", "zh-hans"};
            case "it":
                return buildIt();
        Map<String, String> table = new HashMap<>(3242);
        fillBg27(table);
        table.put("Add Send photo to the link preview menu",
                "\u0414\u043e\u0431\u0430\u0432\u044f\u043d\u0435 \u043d\u0430 \u0418\u0437\u043f\u0440\u0430\u0442\u0438 \u0441\u043d\u0438\u043c\u043a\u0430 \u0432 \u043c\u0435\u043d\u044e\u0442\u043e \u043d\u0430 \u043f\u0440\u0435\u0433\u043b\u0435\u0434\u0430 \u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430");
        table.put("Add an emoji or a few letters after Telegram's name at the top of the chat list. It stays on this phone, and your Premium emoji status is left alone.",
                "\u0414\u043e\u0431\u0430\u0432\u0435\u0442\u0435 \u0435\u043c\u043e\u0434\u0436\u0438 \u0438\u043b\u0438 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0431\u0443\u043a\u0432\u0438 \u0441\u043b\u0435\u0434 \u0438\u043c\u0435\u0442\u043e \u043d\u0430 Telegram \u043d\u0430\u0439-\u0433\u043e\u0440\u0435 \u0432 \u0441\u043f\u0438\u0441\u044a\u043a\u0430 \u0441 \u0447\u0430\u0442\u043e\u0432\u0435. \u041e\u0441\u0442\u0430\u0432\u0430 \u0441\u0430\u043c\u043e \u043d\u0430 \u0442\u043e\u0437\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d, \u0430 \u0435\u043c\u043e\u0434\u0436\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u044a\u0442 \u0432\u0438 \u0432 Premium \u043d\u0435 \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u044f.");
        table.put("Also allow screenshots of view-once and timed media",
                "\u0420\u0430\u0437\u0440\u0435\u0448\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u0435\u043a\u0440\u0430\u043d\u043d\u0438 \u0441\u043d\u0438\u043c\u043a\u0438 \u0438 \u043d\u0430 \u043c\u0435\u0434\u0438\u044f \u0437\u0430 \u0435\u0434\u043d\u043e\u043a\u0440\u0430\u0442\u043d\u043e \u0433\u043b\u0435\u0434\u0430\u043d\u0435 \u0438 \u0441\u044a\u0441 \u0441\u0430\u043c\u043e\u0443\u043d\u0438\u0449\u043e\u0436\u0435\u043d\u0438\u0435");
    }

    private static void fillBg3(Map<String, String> table) {
        table.put("Always show translate bar",
```

</details>

<details>
<summary>[medium] extensions/telegram/src/main/java/app/hushtelegram/extension/telegram/misc/VideoStreamServer.java — new non-allowlisted URL or IP</summary>

```
/*
 * Copyright 2026 HushTelegram contributors
 * https://github.com/SysAdminDoc/HushTelegram
 */
package app.hushtelegram.extension.telegram.misc;

import java.io.EOFException;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.RandomAccessFile;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
```

</details>


__
