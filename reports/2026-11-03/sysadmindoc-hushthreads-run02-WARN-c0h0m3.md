# SysAdminDoc/HushThreads — 2026-11-03

Commit: 05c770989a53dd37364ac5aa32324231df1f166e | Status: WARN | crit:0 high:0 med:3

<details>
<summary>[medium] patches/src/main/kotlin/app/morphe/patches/threads/misc/resignedtrust/RestoreTrustPatch.kt — new non-allowlisted URL or IP</summary>

```
import app.morphe.patcher.patch.BytecodePatchContext
import app.morphe.patches.threads.misc.settings.EXTENSION_ROOT
import com.android.tools.smali.dexlib2.iface.Method
private const val PATCH = "Restore screens on re-signed builds"

        val tiles = shareTiles()
        tiles.lambdas.forEach { mutableTile(it).openRefusedShareTiles(tiles.launcher) }
/** The share actions and the link the tiles for Instagram, Facebook and WhatsApp start their apps with. */
internal val SHARE_TILE_ACTIONS = listOf(
    "com.instagram.share.ADD_TO_FEED",
    "com.instagram.share.ADD_TO_REEL_THREAD",
    "com.facebook.reels.SHARE_TO_REEL",
    "https://wa.me/status",
)

```

</details>

<details>
<summary>[medium] scripts/BadDexFixture.java — new non-allowlisted URL or IP</summary>

```
    private static final String LOGO_NOTE = "com.instagram.barcelona.feed.ui.MainFeedScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous> (MainFeedScreen.kt:2845)";
    /** 454's default bit, too wide for and-int/lit16. */
    private static final int PINNED_DEFAULT = 0x8000;
    /** 454's overload: no play flag of its own, it pins PostVideo's to false and forwards the mask. */
    private static final ImmutableMethodReference PINNED_VIDEO = method(FEATURE_VIDEO, "pinned", "V", OBJECT, "I", "I", "Z");

    /**
     * Disable video autoplay on 454's shape: PostVideo and-s its default mask with a constant 0x8000,
     * and an overload pins its play flag to false and forwards the rest. The single post and the
     * carousel still call PostVideo with their own flag. The trend preview and the ad card call the
     * overload with the bit set, the Instagram post with it clear, and the viewer with it set, each
     * behind a branch aimed at its call. When [hooked], the trend preview and the ad card ask about
     * the default's 1 in their mask's v3, the branch landing on the question, and hand the overload
     * the mask with the bit on yes and without it on no. Faults: the trend preview's hook missing, the ad
     * card's masks swapped, the ad card asking about its mask with no choice after, the Instagram
```

</details>

<details>
<summary>[medium] scripts/DexDiff.java — new non-allowlisted URL or IP</summary>

```
    /** The share actions and the link the tiles for Instagram, Facebook and WhatsApp start their apps with. */
    private static final List<String> SHARE_TILE_ACTIONS = List.of("com.instagram.share.ADD_TO_FEED",
            "com.instagram.share.ADD_TO_REEL_THREAD", "com.facebook.reels.SHARE_TO_REEL", "https://wa.me/status");
    private static final String MESSENGER = "com.facebook.orca";
        // 454 added a Function0 ahead of the Function3, so the merge takes nine parameters.
                && m.getReturnType().equals("Ljava/lang/Object;") && m.getParameterTypes().size() == 9
                && m.getParameterTypes().get(6).equals("Lkotlin/jvm/functions/Function0;")
        // A literal answer's hook goes in without labels: a branch onto its return carries some other
        // answer (454's notifications provider jumps there with its database) and must skip the hook.
        Map<Method, Map<Integer, FeatureBlock>> literals = new LinkedHashMap<>();
                    int register = ((OneRegisterInstruction) body.get(k)).getRegisterA();
                    FeatureInsert hook = (now, at) -> {
                        featureCall(now, at, ENDPOINT, register, register);
                        return 2;
                    };
```

</details>


__
