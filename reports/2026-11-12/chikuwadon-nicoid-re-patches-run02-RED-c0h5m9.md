# chikuwadon/nicoid-re-patches — 2026-11-12

Commit: 95e53523588764e39a8f2985fab1425cf8feb964 | Status: RED | crit:0 high:5 med:9

<details>
<summary>[info] patches/src/main/resources/nicoid/helpers.mpe — binary asset added/changed — cannot review textually</summary>

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
<summary>[medium] porting/revisions/v2.0.0-dev.1/java/e/e/a/NicoliveActivity.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.*;import android.content.*;import android.content.pm.ActivityInfo;import android.content.res.Configuration;import android.graphics.Color;import android.net.Uri;import android.os.*;import android.preference.PreferenceManager;import android.text.TextUtils;import android.view.*;import android.view.inputmethod.InputMethodManager;import android.widget.*;import java.time.Instant;import java.time.LocalDate;import java.time.format.DateTimeFormatter;import java.util.*;import org.json.*;

/** Native live hub and viewer. Video-only screens retain their existing model and engine. */
public class NicoliveActivity extends Activity implements NicoliveService.Observer {
 NicoliveBrowser browser;NicoliveService service;boolean bound,watching,fullscreen,info,atBottom=true,loading,resumeLoad;int loadToken,hubTab,category,newComments,feedPosition,feedOffset;long observedCount;String requested="",query="",draft="",pendingDraft="";NicoliveData.Program renderedProgram;long renderedViews=Long.MIN_VALUE,renderedComments=Long.MIN_VALUE;LinearLayout root,header,body,viewerPane,details,tabs,composer;TextView heading,status,title,owner,stats,information;ListView feed,chat;Button latest,login;EditText input,searchInput;CheckBox anonymous;ImageButton send;NicolivePlayerFrame playerFrame;FeedAdapter feedAdapter;ChatAdapter chatAdapter;final ArrayList<NicoliveData.Program> programs=new ArrayList<NicoliveData.Program>();final ArrayList<NicoliveData.Chat> comments=new ArrayList<NicoliveData.Chat>();
 final NicoliveListGestures listGestures=new NicoliveListGestures();
 LinearLayout categoryTabs,nowPlayingBar;
 static final int TIMETABLE=3;
 private static final int RANKING=4;
 private static final int RESERVATIONS=5;
 private static final int FOLLOWING=1;
 private static final DateTimeFormatter PROGRAM_TIME=DateTimeFormatter.ofPattern("M/d HH:mm",Locale.JAPAN);
 private static final DateTimeFormatter TIMETABLE_TIME=DateTimeFormatter.ofPattern("HH:mm");
```

</details>

<details>
<summary>[high] porting/revisions/v2.0.0-dev.1/java/e/e/a/NicoliveArtwork.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.55, exfiltration): The excerpt shows a network-oriented artwork fetch class and an isTrusted check that only visibly rejects null or oversized strings; the rest of the validation and the actual network sink are not shown. Because static analysis reports sensitive source reaching a network sink and the code could allow an untrusted URL or host to influence a request, this warrants review, but there is insufficient evidence to label it malicious.

```
package e.e.a;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import java.io.*;
import java.net.*;
import java.util.*;

/** Small bounded artwork fetch for Android media controls. Never requests arbitrary hosts. */
final class NicoliveArtwork {
 private static final int LIMIT=2*1024*1024;
 private NicoliveArtwork(){}
 static boolean isTrusted(String raw){
  if(raw==null||raw.length()>2048)return false;
  try {
```

</details>

<details>
<summary>[high] porting/revisions/v2.0.0-dev.1/java/e/e/a/NicoliveBrowser.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.9 — no ban]</summary>

LLM review: benign (0.9, benign-other): The flagged code is a browser/networking component for the Nicolive (NicoNico Live) app. The cookie() method simply retrieves session cookies from the app's own SessionCookies194 store for authenticating with the Nicolive service — this is standard browser behavior. The HttpURLConnection usage, thread pools, image LRU cache, and feed HTML caching are all consistent with a legitimate in-app browser implementation. There is no evidence of cookies being sent to third-party endpoints, no hidden exfiltration channels, no obfuscated payloads, and no supply-chain indicators. The static-analysis flag (same-app stored data/cookies with network) is a false positive: reading session cookies to make authenticated requests to the same service is expected browser functionality, not a security concern.

```
package e.e.a;
import android.content.*;import android.graphics.*;import android.os.*;import android.util.LruCache;import android.widget.*;import java.io.*;import java.net.*;import java.util.*;import java.util.concurrent.*;

class NicoliveBrowser {
 final ThreadPoolExecutor work=new ThreadPoolExecutor(1,1,0,TimeUnit.MILLISECONDS,new ArrayBlockingQueue<Runnable>(1),new ThreadPoolExecutor.DiscardOldestPolicy());final ExecutorService imageWork=new ThreadPoolExecutor(2,2,0,TimeUnit.MILLISECONDS,new ArrayBlockingQueue<Runnable>(32),new ThreadPoolExecutor.AbortPolicy());final Handler main=new Handler(Looper.getMainLooper());final Set<HttpURLConnection> requests=Collections.synchronizedSet(new HashSet<HttpURLConnection>());volatile boolean closed,imagesPaused;volatile HttpURLConnection feedConnection;
 // Reservation writes must survive feed cancellation and are serialized.
 final ExecutorService reservationWork=new ThreadPoolExecutor(1,1,0,TimeUnit.MILLISECONDS,
   new ArrayBlockingQueue<Runnable>(8),new ThreadPoolExecutor.AbortPolicy());
 volatile int generation,imageGeneration;Future<?> loading;
 static final class Feed {final String html;final long at=System.currentTimeMillis();Feed(String s){html=s;}}
 final LinkedHashMap<String,Feed> feeds=new LinkedHashMap<String,Feed>();
 final HashMap<String,ArrayList<java.lang.ref.WeakReference<ImageView>>> pending=new HashMap<String,ArrayList<java.lang.ref.WeakReference<ImageView>>>();
 static final LruCache<String,Bitmap> images=new LruCache<String,Bitmap>(8*1024*1024){protected int sizeOf(String key,Bitmap value){return value.getByteCount();}};
 interface Result {void done(String html);void error();}
 static String cookie(Context c){try{return SessionCookies194.cookie(c,null);}catch(Exception e){return "";}}
```

</details>

<details>
<summary>[high] porting/revisions/v2.0.0-dev.1/java/e/e/a/NicoliveBrowser.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.45, exfiltration): The flagged taint flow is cookie retrieval (SessionCookies194.cookie) potentially reaching an HttpURLConnection sink (feedConnection/requests). However, the excerpt only shows the cookie getter and the connection-tracking fields; it does NOT show the actual network write, the destination URL, or any encoding/obfuscation of the cookie value. Retrieving session cookies and attaching them to HTTP requests is expected, normal behavior for an in-app browser component (this class is clearly a NicoNico live-stream web/feed viewer with image caching and feed caching). No suspicious endpoints, no data bundling, no obfuscation, and no prompt-injection-style comments are present in the visible code. Because the actual sink destination cannot be verified from this partial excerpt, I cannot confirm either benign exfiltration-to-legitimate-site or malicious exfiltration. Per the uncertainty rule, I classify as suspicious rather than malicious; malicious would require seeing the cookie value written to an unexpected/attacker-controlled host, which is not present in the provided lines.

```
package e.e.a;
import android.content.*;import android.graphics.*;import android.os.*;import android.util.LruCache;import android.widget.*;import java.io.*;import java.net.*;import java.util.*;import java.util.concurrent.*;

class NicoliveBrowser {
 final ThreadPoolExecutor work=new ThreadPoolExecutor(1,1,0,TimeUnit.MILLISECONDS,new ArrayBlockingQueue<Runnable>(1),new ThreadPoolExecutor.DiscardOldestPolicy());final ExecutorService imageWork=new ThreadPoolExecutor(2,2,0,TimeUnit.MILLISECONDS,new ArrayBlockingQueue<Runnable>(32),new ThreadPoolExecutor.AbortPolicy());final Handler main=new Handler(Looper.getMainLooper());final Set<HttpURLConnection> requests=Collections.synchronizedSet(new HashSet<HttpURLConnection>());volatile boolean closed,imagesPaused;volatile HttpURLConnection feedConnection;
 // Reservation writes must survive feed cancellation and are serialized.
 final ExecutorService reservationWork=new ThreadPoolExecutor(1,1,0,TimeUnit.MILLISECONDS,
   new ArrayBlockingQueue<Runnable>(8),new ThreadPoolExecutor.AbortPolicy());
 volatile int generation,imageGeneration;Future<?> loading;
 static final class Feed {final String html;final long at=System.currentTimeMillis();Feed(String s){html=s;}}
 final LinkedHashMap<String,Feed> feeds=new LinkedHashMap<String,Feed>();
 final HashMap<String,ArrayList<java.lang.ref.WeakReference<ImageView>>> pending=new HashMap<String,ArrayList<java.lang.ref.WeakReference<ImageView>>>();
 static final LruCache<String,Bitmap> images=new LruCache<String,Bitmap>(8*1024*1024){protected int sizeOf(String key,Bitmap value){return value.getByteCount();}};
 interface Result {void done(String html);void error();}
 static String cookie(Context c){try{return SessionCookies194.cookie(c,null);}catch(Exception e){return "";}}
```

</details>

<details>
<summary>[medium] porting/revisions/v2.0.0-dev.1/java/e/e/a/NicoliveCatalog.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.LinkedHashMap;
import java.util.Iterator;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

```

</details>

<details>
<summary>[medium] porting/revisions/v2.0.0-dev.1/java/e/e/a/NicoliveData.java — decimal-encoded IP literal with network context: 4294967295, 4294967295, 4294919236, 4294934704, 4294942784, 4294967104, 4284534880, 4284538333, 4284518655, 4289757439, 4280295456, 4294967295, 4291572531, 4291587990, 4291592752, 4292730160, 4282429504, 4282432443, 4282413260, 4287652044, 4280295456, 4278190080</summary>

```
package e.e.a;

import java.io.*;
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.regex.*;
import org.json.*;

/** Service data is kept independent of the video watch/series model. */
public final class NicoliveData {
 public static final String UA="Mozilla/5.0";
 static final Pattern ID=Pattern.compile("lv[0-9]{1,15}");
 public static String id(String input){
  if(input==null)return null;String s=input.trim();if(ID.matcher(s).matches())return s;
```

</details>

<details>
<summary>[high] porting/revisions/v2.0.0-dev.1/java/e/e/a/NicoliveService.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.62 — no ban]</summary>

LLM review: benign (0.62, benign-other): The flagged file is a media playback Service for a NicoNico live-streaming client built on ExoPlayer/Media3. The static-analysis flag concerns the 'mediaCookies' JSONArray field being used with network requests. In the visible excerpt, this field is only declared as a class member; the surrounding context (HlsMediaSource, activeStreamUri, qualities, program/session management) indicates the cookies are intended to authenticate HLS stream requests to the streaming provider's own servers, i.e. same-site usage. No code in the excerpt sends these cookies to a third-party or unexpected endpoint, and there is no obfuscation, dynamic code loading, or hidden channel. The excerpt shows only field declarations and does not include the actual network call sites, so full verification of every cookie sink is not possible from this snippet alone. Based on the visible behavior and the legitimate streaming-auth context, this appears benign, though confidence is limited by the partial view.

```
package e.e.a;

import android.app.*;import android.content.*;import android.graphics.Color;import android.media.session.*;import android.media.MediaMetadata;import android.net.Uri;import android.os.*;import android.preference.PreferenceManager;import android.text.TextUtils;import android.view.*;import android.widget.*;
import androidx.media3.common.*;import androidx.media3.datasource.*;import androidx.media3.exoplayer.*;import androidx.media3.exoplayer.hls.HlsMediaSource;import java.io.*;import java.net.URI;import java.util.*;import java.util.concurrent.*;import android.graphics.Bitmap;import org.json.*;

/** One process-local owner across the activity, popup and audio background modes. */
public class NicoliveService extends android.app.Service {
 public interface Observer {void changed();void posted(boolean success,String message);}
 public static volatile NicoliveService active;
 public class LocalBinder extends Binder {public NicoliveService service(){return NicoliveService.this;}}
 final Handler main=new Handler(Looper.getMainLooper());final Set<Observer> observers=Collections.newSetFromMap(new WeakHashMap<Observer,Boolean>());
 final ArrayDeque<NicoliveData.Chat> history=new ArrayDeque<NicoliveData.Chat>();final ArrayDeque<NicoliveData.Chat> incoming=new ArrayDeque<NicoliveData.Chat>();
 final PriorityQueue<NicoliveData.Chat> scheduled=new PriorityQueue<NicoliveData.Chat>(32,new Comparator<NicoliveData.Chat>(){public int compare(NicoliveData.Chat a,NicoliveData.Chat b){return Long.compare(a.vpos,b.vpos);}});
 final Timeline.Window window=new Timeline.Window();ExoPlayer player;NicoliveSession session;NicoliveNg ng;NicoliveData.Program program;
 String id="",status="",selected="abr";List<String> qualities=new ArrayList<String>();volatile JSONArray mediaCookies=new JSONArray();String activeStreamUri="",activeStreamQuality="";volatile int serial;volatile boolean stopped;boolean commentsConnected,commentVisible=true,audioOnly,terminal,userPaused,cryptoRecoveryPending;HlsKeyRefreshingPlaylistParser keyParser;int cryptoRecoveryCount;long cryptoRecoveryStart;float aspect=16f/9;long pausedAt,deliveredCount;
```

</details>

<details>
<summary>[high] porting/revisions/v2.0.0-dev.1/java/e/e/a/NicoliveSession.java — sensitive source reaches network sink [llm: benign 0.6 — no ban]</summary>

LLM review: benign (0.6, benign-other): The static-analysis flag 'sensitive source reaches network sink' is triggered by the accountCookie field (line 15) combined with the OkHttpClient (line 16). However, the visible excerpt shows only the class declaration and field initializers for a Nicolive (Niconico live-streaming) session client. Sending an account cookie over OkHttp to the streaming service is the intended, legitimate purpose of an authenticated API client, not exfiltration. There is no visible network sink code, no hardcoded third-party/attacker endpoint, and no data-flow evidence in the excerpt showing the cookie being sent anywhere other than the service it authenticates against. This matches a common false-positive pattern for auth material used as designed. I cannot fully verify the sink destination because the method bodies are not included in the excerpt, so confidence is moderate rather than high; if the full method bodies revealed the cookie posted to an unexpected external host, this assessment would change.

```
package e.e.a;

import java.io.*;import java.net.*;import java.nio.charset.StandardCharsets;import java.util.*;import java.util.concurrent.*;
import okhttp3.*;import org.json.*;

/** Owns exactly one watch socket and bounded streaming comment reader. No UI or media player. */
public final class NicoliveSession implements Closeable {
 public interface Listener {
  void program(NicoliveData.Program p);void stream(JSONObject stream);void status(String text,boolean terminal);
  void comment(NicoliveData.Chat chat);void commentState(boolean connected);void posted(boolean success,String text);
 }
 final Listener listener;final String id,accountCookie;
 final OkHttpClient client;final ExecutorService workers=Executors.newFixedThreadPool(3);final ScheduledExecutorService timers=Executors.newSingleThreadScheduledExecutor();
 final Set<Call> calls=Collections.synchronizedSet(new HashSet<Call>());
 final LinkedHashMap<String,Boolean> seen=new LinkedHashMap<String,Boolean>();
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible keystroke capture with network exfil: TextWatcher</summary>

```
"q-gq"
"n-Is"
"[-^y"
"Z0Rt"
"[-~k"
"f+Wi"
"[-zo"
"h0sh"
"i0 h"
"l-Is"
"Q.Ms"
"B0Ms"
"R.Gh"
"R.Vh"
"j0[h"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: shared_prefs,Cookies</summary>

```
"q-gq"
"n-Is"
"[-^y"
"Z0Rt"
"[-~k"
"f+Wi"
"[-zo"
"h0sh"
"i0 h"
"l-Is"
"Q.Ms"
"B0Ms"
"R.Gh"
"R.Vh"
"j0[h"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] sensitive source reaches network sink</summary>

```
"q-gq"
"n-Is"
"[-^y"
"Z0Rt"
"[-~k"
"f+Wi"
"[-zo"
"h0sh"
"i0 h"
"l-Is"
"Q.Ms"
"B0Ms"
"R.Gh"
"R.Vh"
"j0[h"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] dangerous permission plus network sink in same file</summary>

```
"q-gq"
"n-Is"
"[-^y"
"Z0Rt"
"[-~k"
"f+Wi"
"[-zo"
"h0sh"
"i0 h"
"l-Is"
"Q.Ms"
"B0Ms"
"R.Gh"
"R.Vh"
"j0[h"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] possible DNS exfiltration channel: getByName,getAllByName</summary>

```
"q-gq"
"n-Is"
"[-^y"
"Z0Rt"
"[-~k"
"f+Wi"
"[-zo"
"h0sh"
"i0 h"
"l-Is"
"Q.Ms"
"B0Ms"
"R.Gh"
"R.Vh"
"j0[h"
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/helpers.mpe — [binary strings, unverified] reflection-hidden behavior with network sink</summary>

```
"q-gq"
"n-Is"
"[-^y"
"Z0Rt"
"[-~k"
"f+Wi"
"[-zo"
"h0sh"
"i0 h"
"l-Is"
"Q.Ms"
"B0Ms"
"R.Gh"
"R.Vh"
"j0[h"
```

</details>


__
