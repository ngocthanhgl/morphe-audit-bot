# SysAdminDoc/hushfeed — 2026-10-18

Commit: 6cc76400f9007adbb1a4a55e089a16fa2e98bd22 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/tiktok/misc/theme/AccentColorPatch.kt — new non-allowlisted URL or IP</summary>

```
            "Android 11 and older keep TikTok's red. The soft see-through reds stay as they are.",
            // can't take a color the phone picks later, so with the wallpaper choice each one splits into
            // a white layer and a red one the phone tints.
            val pictures = accentIcons(packageMetadata.versionName).map { name ->
                name to drawables.map { it.resolve("$name.png") }.filter { it.isFile }
                    .ifEmpty { throw PatchException(missingAccentIconRefusal(name)) }
            }
            val icons = if (wallpaper) emptyList() else pictures.flatMap { (name, files) ->
                files.map { it to (recolorRedPalette(it.readBytes(), target) ?: throw PatchException(missingAccentIconRefusal(name))) }
            }
            val layers = if (!wallpaper) emptyList() else pictures.flatMap { (name, files) ->
                files.map { Triple(name, it, splitRedPalette(it.readBytes()) ?: throw PatchException(missingAccentIconRefusal(name))) }
            for ((name, picture, split) in layers) {
                val (white, tint) = wallpaperIconLayers(name)
                picture.resolveSibling("$white.png").writeBytes(split.first)
```

</details>


__
