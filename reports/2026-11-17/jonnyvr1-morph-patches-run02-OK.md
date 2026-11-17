# JonnyVR1/morph-patches — 2026-11-17

Commit: 7fbebfad88799986006c2f1323a8c450bd33185d | Status: OK | crit:0 high:0 med:0

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
import java.util.zip.ZipEntry
import java.util.zip.ZipFile
import java.util.zip.ZipOutputStream

    implementation("com.google.guava:guava:33.6.0-jre")
    testImplementation(kotlin("test"))
            // Use Java ZIP API to add patches-list.json at the root of the .mpp (cross-platform)
                // Copy original mpp entries to temp file, adding patches-list.json
                val zos = ZipOutputStream(tempFile.outputStream())
                zos.use {
                    // Copy existing entries from original mpp
                    val zipFile = ZipFile(mppFile)
                    zipFile.use { zf ->
                        val entries = zf.entries()
                        while (entries.hasMoreElements()) {
```

</details>


__
