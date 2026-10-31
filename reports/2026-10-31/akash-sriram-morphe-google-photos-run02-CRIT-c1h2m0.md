# Akash-Sriram/morphe-google-photos — 2026-10-31

Commit: 74833e5a9090b49c4d3a726c9be973e430268dd0 | Status: CRIT | crit:1 high:2 med:0

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java — sensitive source reaches network sink [llm: benign 0.9 — no ban]</summary>

LLM review: benign (0.9, benign-other): The excerpt shows standard image-loading logic: reflection to locate Glide-style asFile() and conditional construction of a RemoteMediaModel for http/https URLs. This is consistent with legitimate remote media handling in a photos extension, not exfiltration or a backdoor. No sensitive source is being sent to a malicious network sink.

```
import java.io.IOException;
            // 1. Find as(Class) method or asFile()
            if (fileReqBuilder == null) {
                try {
                    Method asFileMethod = requestManager.getClass().getMethod("asFile");
                    fileReqBuilder = asFileMethod.invoke(requestManager);
                } catch (Throwable ignored) {}
            }

            // 2. Build RemoteMediaModel if http/https
            Object model = null;
            if (urlStr.startsWith("http://") || urlStr.startsWith("https://")) {
                String[][] modelPairs = ToolkitMappings.REMOTE_MEDIA_MODEL_PAIRS;
                for (String[] pair : modelPairs) {
                    try {
```

</details>

<details>
<summary>[high] extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java — reflection-hidden behavior with network sink [llm: benign 0.72 — no ban]</summary>

LLM review: benign (0.72, benign-other): The excerpt shows reflection used to invoke asFile() on a RequestManager and an http/https URL check to build a RemoteMediaModel. In a Google Photos extension library, this is consistent with legitimate remote image loading / compatibility shims (e.g., Glide RequestManager) rather than exfiltration, backdoor, or spyware behavior. Exceptions are swallowed, which is sloppy but not inherently malicious. No evidence of data exfiltration, command execution, hidden credentials, or attacker-controlled network sinks.

```
import java.io.IOException;
            // 1. Find as(Class) method or asFile()
            if (fileReqBuilder == null) {
                try {
                    Method asFileMethod = requestManager.getClass().getMethod("asFile");
                    fileReqBuilder = asFileMethod.invoke(requestManager);
                } catch (Throwable ignored) {}
            }

            // 2. Build RemoteMediaModel if http/https
            Object model = null;
            if (urlStr.startsWith("http://") || urlStr.startsWith("https://")) {
                String[][] modelPairs = ToolkitMappings.REMOTE_MEDIA_MODEL_PAIRS;
                for (String[] pair : modelPairs) {
                    try {
```

</details>

<details>
<summary>[critical] cross-window — theft primitive completed across windows in extensions/shared/library/src/main/java/app/morphe/extension/shared/patches/toolkit/NativeToolkitDialog.java: previously seen TextWatcher (2026-10-30) with new network use</summary>

LLM review: suspicious (0.72, exfiltration): The diff introduces a new TextWatcher in NativeToolkitDialog.java that was not present in the prior snapshot, and the static-analysis report explicitly flags it as a 'theft primitive completed across windows.' The presence of a network-capable TextWatcher in a multi-window dialog context is consistent with exfiltration behavior (data exfiltration across windows), but the evidence is circumstantial — no direct network call or payload is shown in the excerpt. Given the explicit 'previously seen' framing and the theft-primitive label, this warrants a suspicious verdict rather than a definitive malicious one, as the code pattern alone does not meet the 0.85 confidence threshold for a malicious verdict without seeing the actual network call site.

```
(see report of 2026-10-30 for the earlier half)
```

</details>


__
