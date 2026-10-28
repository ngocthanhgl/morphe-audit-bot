# chikuwadon/nicoid-re-patches — 2026-10-28

Commit: 660e8452b8fe36b6c5ab97d69362db677a9ef0aa | Status: RED | crit:0 high:5 med:10

<details>
<summary>[info] patches/src/main/resources/nicoid/helpers.mpe — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] patches/src/main/resources/nicoid/resources.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] porting/helpers-v1.9.3.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[medium] porting/revisions/v1.9.10-dev.1/src/e/e/a/BackgroundEntry233.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import android.app.*;import android.content.*;import android.net.Uri;
public final class BackgroundEntry233 {
 static Activity activity(Context c){for(int n=0;n<8&&c!=null;n++){if(c instanceof Activity)return (Activity)c;if(c instanceof Service||!(c instanceof ContextWrapper))return null;Context next=((ContextWrapper)c).getBaseContext();if(next==c)return null;c=next;}return null;}public static boolean start(Context c,Intent input){Activity a=activity(c);if(a==null||!input.getBooleanExtra("isBackgroundPlay",false))return false;if(a.isFinishing()||a.isDestroyed()||PlaybackTransfer221.retaining(a)||MiniSession225.retaining(a))return false;try{if(PlaybackBar221.player(a))return MiniSession225.minimize(Playback214.get(a,"v"));String url=input.getStringExtra("url");if(url==null||url.isEmpty())return false;if(!url.startsWith("http"))url="https://www.nicovideo.jp/watch/"+url;Intent target=new Intent(Intent.ACTION_VIEW,Uri.parse(url)).setClassName(a,"com.sauzask.nicoid.NicoidVideoActivity");if(input.getExtras()!=null)target.putExtras(input.getExtras());target.removeExtra("isBackgroundPlay");target.putExtra("nicoid_start_minimized",true);a.startActivity(target);return true;}catch(Exception e){android.util.Log.w("nicoid-mini","Cannot open background player",e);return false;}}
 public static void prepared(Object owner){try{Activity a=(Activity)Playback214.get(owner,"A1");if(!a.getIntent().getBooleanExtra("nicoid_start_minimized",false))return;a.getIntent().removeExtra("nicoid_start_minimized");a.getWindow().getDecorView().post(()->{if(!MiniSession225.minimize(owner))android.util.Log.w("nicoid-mini","Requested mini-player could not attach; normal player retained");});}catch(Exception e){android.util.Log.w("nicoid-mini","Cannot finish background entry",e);}}
}

```

</details>

<details>
<summary>[high] porting/revisions/v1.9.10-dev.1/src/e/e/a/FollowFeed.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: unreviewed (reviewer returned no usable verdict)

```
package e.e.a;

import android.app.Activity;
import android.content.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.net.Uri;
import android.os.*;
import android.view.*;
import android.widget.*;
import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;
import org.json.*;
```

</details>

<details>
<summary>[high] porting/revisions/v1.9.10-dev.2/src/e/e/a/FollowFeed.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.35, exfiltration): The provided diff excerpt only shows the package declaration and imports, including java.net and org.json, without any cookie or network behavior. The static-analysis note about same-app stored data/cookies with network and same-site verification cannot be fully assessed from this fragment. No malicious behavior is confirmed.

```
package e.e.a;

import android.app.Activity;
import android.content.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.net.Uri;
import android.os.*;
import android.view.*;
import android.widget.*;
import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;
import org.json.*;
```

</details>

<details>
<summary>[high] porting/revisions/v1.9.10-dev.3/src/e/e/a/FollowFeed.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.72, exfiltration): The file imports java.net.* and android.content.*, which are consistent with network access and data handling. However, the excerpt provided contains only imports and no actual code, so no concrete evidence of cookie/data exfiltration can be confirmed. The static-analysis flag is raised due to the presence of networking imports in a same-app context, warranting further review but not sufficient for a malicious verdict at this confidence level.

```
package e.e.a;

import android.app.Activity;
import android.content.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.net.Uri;
import android.os.*;
import android.view.*;
import android.widget.*;
import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;
import org.json.*;
```

</details>

<details>
<summary>[high] porting/revisions/v1.9.10-dev.4/src/e/e/a/FollowFeed.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

LLM review: suspicious (0.72, exfiltration): The file imports java.net.* and android.content.* but the excerpt shown is only package and imports — no network call, cookie handling, or data exfiltration logic is visible in the provided snippet. The 'same-app stored data/cookies with network' flag is a static-analysis heuristic that cannot be confirmed from imports alone. Without actual code lines performing HTTP requests, cookie reads, or cross-site data transmission, this remains suspicious rather than malicious.

```
package e.e.a;

import android.app.Activity;
import android.content.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.net.Uri;
import android.os.*;
import android.view.*;
import android.widget.*;
import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;
import org.json.*;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.9.10-dev.5/src/e/e/a/DirectBootstrap238.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import android.app.*;import android.content.*;import android.graphics.Color;import android.graphics.drawable.ColorDrawable;import android.net.Uri;import android.os.*;import android.view.*;import java.lang.ref.WeakReference;
/** Initialize the normal player directly in retained mini presentation; never transfer/reload on expand. */
public final class DirectBootstrap238 {
 static final String TOKEN="nicoid_retained_start_token";static final Handler MAIN=new Handler(Looper.getMainLooper());static Pending pending;static long sequence;static Application app;
 static final class Pending {final long token;final WeakReference<Activity> destination;Activity source;final Runnable timeout=()->cancel(this,true);Pending(long t,Activity a){token=t;destination=new WeakReference<>(a);}}
 static String id(Intent input){String value=input.getStringExtra("url");if(value==null&&input.getData()!=null)value=input.getData().toString();if(value==null)return null;if(value.contains("/"))value=Uri.parse(value).getLastPathSegment();return value!=null&&value.matches("(?:sm|nm|so|ss)?[0-9]+")?value:null;}
 public static boolean start(Activity a,Intent input){String id=id(input);if(id==null)return false;try{if(pending!=null)cancel(pending,true);if(DirectBackground235.active!=null)DirectBackground235.active.close(true);MiniSession225.closeCurrent();MiniSession225.track(a);track(a.getApplication());Pending p=new Pending(++sequence,a);pending=p;Intent i=new Intent(input).setClassName(a,"com.sauzask.nicoid.NicoidVideoActivity").setAction(Intent.ACTION_VIEW).setData(Uri.parse("https://www.nicovideo.jp/watch/"+id)).putExtra("url",id).putExtra("intentselect",true).putExtra(TOKEN,p.token);i.removeExtra("isBackgroundPlay");i.removeExtra("nicoid_playback_transfer");i.setFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION|Intent.FLAG_ACTIVITY_NO_USER_ACTION);a.startActivity(i);a.overridePendingTransition(0,0);MAIN.postDelayed(p.timeout,30000);ModernDebug.record("Direct background entry uses retained normal player");return true;}catch(Exception e){if(pending!=null)cancel(pending,true);MiniSession225.log("Cannot initialize retained background player",e);return false;}}
 static void track(Application next){if(app==next)return;if(app!=null)app.unregisterActivityLifecycleCallbacks(LIFECYCLE);app=next;app.registerActivityLifecycleCallbacks(LIFECYCLE);}
 static boolean matches(Activity a,Pending p){return p!=null&&a.getIntent()!=null&&a.getIntent().getLongExtra(TOKEN,-1)==p.token;}
 /** Called before any native Activity UI initialization or first draw. */
 public static void prepare(Activity a){Pending p=pending;if(!matches(a,p))return;p.source=a;a.setVisible(false);Window w=a.getWindow();WindowManager.LayoutParams lp=w.getAttributes();lp.alpha=0;lp.dimAmount=0;w.setAttributes(lp);w.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));w.setWindowAnimations(0);ModernDebug.record("Retained background window hidden before creation");}
 public static void created(Object owner){Pending p=pending;if(p==null)return;try{Activity source=(Activity)Playback214.get(owner,"A1");if(!matches(source,p))return;Activity destination=p.destination.get();if(destination==null||destination.isFinishing()||destination.isDestroyed()){cancel(p,true);return;}if(!MiniSession225.beginMinimized(owner,destination)){cancel(p,true);return;}pending=null;MAIN.removeCallbacks(p.timeout);source.getIntent().removeExtra(TOKEN);ModernDebug.record("Prepared retained mini host without playback transfer");}catch(Exception e){MiniSession225.log("Cannot retain direct background session",e);cancel(p,true);}}
 static void cancel(Pending p,boolean finish){if(pending!=p)return;pending=null;MAIN.removeCallbacks(p.timeout);if(p.source!=null){reveal(p.source);if(finish&&!p.source.isFinishing()&&!p.source.isDestroyed())p.source.finish();}}
 static void reveal(Activity a){WindowManager.LayoutParams lp=a.getWindow().getAttributes();lp.alpha=1;a.getWindow().setAttributes(lp);a.setVisible(true);}
```

</details>

<details>
<summary>[high] porting/revisions/v1.9.10-dev.5/src/e/e/a/FollowFeed.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.2 — no ban]</summary>

LLM review: benign (0.2, benign-other): The provided excerpt contains only package, import, and class declaration lines with no executable code. There is no evidence of data exfiltration, backdoor logic, or network access. The static-analysis flag is based on a generic heuristic (same-app stored data/cookies with network) that cannot be validated from this snippet alone. Without the actual method bodies, a definitive verdict cannot be reached; per the rules, when unsure, choose 'suspicious' only if there is concrete evidence, which is absent here.

```
package e.e.a;

import android.app.Activity;
import android.content.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.net.Uri;
import android.os.*;
import android.view.*;
import android.widget.*;
import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;
import org.json.*;
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible keystroke capture with network exfil: TextWatcher</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (100%)"
" (API "
" @chikuwadon"
" Response"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (100%)"
" (API "
" @chikuwadon"
" Response"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (100%)"
" (API "
" @chikuwadon"
" Response"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible DNS exfiltration channel: getByName</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (100%)"
" (API "
" @chikuwadon"
" Response"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] reflection-hidden behavior with network sink</summary>

```
"Last Java crash (retained across restart):"
"Accept-Ranges: bytes"
"Connection: close"
"Access-Control-Allow-Origin: *"
"Cache-Control: no-store"
"Content-Length: "
"Content-Type: "
"  ID: "
"  at "
" != "
" %d:%02d"
" (100%)"
" (API "
" @chikuwadon"
" Response"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
")U1`7V"
"  IP"
" #nicoid #"
" + URL"
" / vv.isPlaying()"
" / vv.pause();"
" / vv.start();"
" HTTP/1.1"
" [no signature]"
" [signed]"
" bytes="
"& http://flapi.nicovideo.jp/api/getflv/"
" https://nico.ms/"
" mode:"
" orientation:"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — [binary strings, unverified] sensitive source reaches network sink</summary>

```
")U1`7V"
"  IP"
" #nicoid #"
" + URL"
" / vv.isPlaying()"
" / vv.pause();"
" / vv.start();"
" HTTP/1.1"
" [no signature]"
" [signed]"
" bytes="
"& http://flapi.nicovideo.jp/api/getflv/"
" https://nico.ms/"
" mode:"
" orientation:"
```

</details>


__
