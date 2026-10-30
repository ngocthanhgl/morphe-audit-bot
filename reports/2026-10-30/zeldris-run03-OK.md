# zeldrisho/morphe-patches — 2026-10-30

Commit: 8724aa436f116e478b5bc6e62413678cd48dcc23 | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates [llm: benign 0.75 — no ban]</summary>

LLM review: benign (0.75, benign-other): The excerpt shows only standard-library imports (java.nio.ByteBuffer, java.nio.ByteOrder) and a function that parses DEX header fields (magic check, string/type/class counts and offsets). No network access, file exfiltration, reflection, dynamic class loading, or suspicious dependency coordinates are visible in the provided code. The flagged reason mentions a new external dependency, but none appears in this excerpt; the visible behavior is benign DEX structural validation.

```
import java.nio.ByteBuffer
import java.nio.ByteOrder
group = "com.zeldrisho.patches"
// DEX class_defs refer to type_ids, which refer to string_ids. Checking only
// string presence would also accept a missing class referenced by another class.
fun definedDexClasses(dex: ByteArray): Set<String> {
    check(dex.size >= 112 && dex.copyOfRange(0, 4).contentEquals(byteArrayOf(0x64, 0x65, 0x78, 0x0a))) {
        "Embedded extension is not a DEX file"
    }
    val data = ByteBuffer.wrap(dex).order(ByteOrder.LITTLE_ENDIAN)
    val stringCount = data.getInt(0x38)
    val stringOffset = data.getInt(0x3c)
    val typeCount = data.getInt(0x40)
    val typeOffset = data.getInt(0x44)
    val classCount = data.getInt(0x60)
```

</details>


__
