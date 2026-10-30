# chikuwadon/nicoid-re-patches — 2026-10-30

Commit: 0921538e8d5aa5d9c9f0fc684a2cd32b4e07b0cf | Status: CRIT | crit:1 high:2 med:6

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
<summary>[info] porting/helpers-1.9.12.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] porting/revisions/v1.9.12-dev.8/src/e/e/a/AccountRemoval227.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.85 — no ban]</summary>

LLM review: benign (0.85, benign-other): The excerpt only builds same-site API URLs to nvapi.nicovideo.jp for removing watch-later/mylist membership items. It validates numeric identifiers, URI-encodes path parameters, and caches item IDs in a WeakHashMap. No exfiltration, backdoor, cross-site cookie leakage, or supply-chain behavior is visible in this code.

```
package e.e.a;
import android.app.*;import android.view.*;import android.widget.*;import android.os.*;import android.net.Uri;import java.util.*;import java.util.concurrent.*;
/** Deletes list membership, never the list itself. Failed rows remain selected. */
public final class AccountRemoval227 {
 static final ExecutorService WORK=Executors.newSingleThreadExecutor();static final Handler MAIN=new Handler(Looper.getMainLooper());static final Set<Object> BUSY=Collections.newSetFromMap(new IdentityHashMap<Object,Boolean>());
 static final Map<Object,String> MEMBER_IDS=Collections.synchronizedMap(new WeakHashMap<Object,String>());
 public static void capture(Object row,org.json.JSONObject membership){String id=membership.optString("itemId","");if(id.matches("[0-9]+"))MEMBER_IDS.put(row,id);}
 static String membershipId(Object row){String id=MEMBER_IDS.get(row);return id!=null?id:ListActions.value(row,"item_id");}
 static String error(Exception e){String m=e.getMessage();return m!=null&&m.matches("HTTP [0-9]{3}( [A-Z][A-Z0-9_]{1,47}(/[A-Z][A-Z0-9_]{1,47})?)?")?m:e.getClass().getSimpleName();}
 static int kind(Activity a){try{int type=a.getClass().getField("E").getInt(a);return type==9?2:type==5?1:0;}catch(Exception e){return 0;}}
 static boolean skip(Activity a,CharSequence label){int k=kind(a);return k>0&&String.valueOf(label).equals(UiStrings.translate(k==2?"とりあえずマイリスト登録":"マイリスト登録"));}
 static String path(boolean later,String list,Object row)throws Exception{
  String id=membershipId(row);
  if(!id.matches("[0-9]+")||!later&&!list.matches("[0-9]+"))throw new IllegalArgumentException("Invalid membership identifier");
  return "https://nvapi.nicovideo.jp/v1/users/me/"+(later?"watch-later?itemIds=":"mylists/"+Uri.encode(list)+"/items?itemIds=")+Uri.encode(id);
```

</details>

<details>
<summary>[medium] porting/revisions/v1.9.12-dev.8/src/e/e/a/PopupReturn244.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import android.app.*;import android.content.*;import android.net.Uri;import android.os.*;import android.view.*;import java.lang.reflect.*;
/** Hand over the existing VideoView before native loading; never set a second media URI. */
public final class PopupReturn244 {
 static final java.util.Set<Object> RETAINED_LOADERS=java.util.Collections.newSetFromMap(new java.util.WeakHashMap<Object,Boolean>());
 public static boolean retainedLoader(Object loader){return RETAINED_LOADERS.contains(loader);}
 static final String TOKEN="nicoid_popup_return_244";static Pending pending;static long serial;static final Handler MAIN=new Handler(Looper.getMainLooper());
 static final class Pending{Service service;View video,empty;Object model,owner,loader,loaderListener;Activity target;ViewGroup normalParent;ViewGroup.LayoutParams normalParams;int normalIndex;float speed;long token;boolean playing,adopted,finishing,metadataDelivered;Runnable timeout;MiniSession225.SurfaceKeeper keeper;Pending(Service s)throws Exception{service=s;video=(View)Playback214.get(s,"e");model=s.getClass().getField("k0").get(null);playing=Boolean.TRUE.equals(MiniSession225.call(video,"isPlaying",new Class<?>[0]));speed=((Number)MiniSession225.call(video,"getPlaybackSpeed",new Class<?>[0])).floatValue();}}
 public static boolean start(Service service){if(pending!=null)return false;try{Pending p=new Pending(service);if(p.video==null||((Number)MiniSession225.call(p.video,"getDuration",new Class<?>[0])).longValue()<=0)return false;p.token=++serial;pending=p;Class.forName("com.sauzask.nicoid.NicoidVideoFragment").getField("V1").set(null,p.model);String id=HistoryRules.id(String.valueOf(Playback214.get(service,"f")));if(id==null||!id.matches("(?:sm|nm|so|ss)?[0-9]+"))throw new IllegalArgumentException("Invalid retained video identifier");Intent i=new Intent(Intent.ACTION_VIEW,Uri.parse("https://www.nicovideo.jp/watch/"+id)).setClassName(service,"com.sauzask.nicoid.NicoidVideoActivity").addFlags(Intent.FLAG_ACTIVITY_NEW_TASK|Intent.FLAG_ACTIVITY_NO_ANIMATION|Intent.FLAG_ACTIVITY_NO_USER_ACTION).putExtra("intentselect",true).putExtra("nicoid_portrait_restore",true).putExtra(TOKEN,p.token);Object info=service.getClass().getField("s0").get(null);Object loader=Playback214.get(service,"z");if(loader!=null&&Playback214.get(loader,"m") instanceof Bundle)info=new Bundle((Bundle)Playback214.get(loader,"m"));if(info instanceof Bundle)i.putExtra("infodata",(Bundle)info);service.startActivity(i);p.timeout=()->cancel(p);MAIN.postDelayed(p.timeout,30000);return true;}catch(Exception e){if(pending!=null)cancel(pending);android.util.Log.w("nicoid-mini","Cannot return retained popup",e);return false;}}
 static boolean matches(Activity a){return pending!=null&&a!=null&&a.getIntent().getLongExtra(TOKEN,-1)==pending.token;}
 public static boolean retaining(Context c,Intent i){return c instanceof Activity&&matches((Activity)c)&&i!=null&&i.getComponent()!=null&&i.getComponent().getClassName().equals("com.sauzask.nicoid.NicoidPopupViewService");}
 public static Object keep(Object fallback){return pending==null?fallback:pending.model;}
 public static boolean reuseLoader(Object owner){Pending p=pending;if(p==null)return false;try{Activity a=(Activity)Playback214.get(owner,"A1");if(!matches(a)||!HistoryRules.same(String.valueOf(Playback214.get(owner,"b0")),String.valueOf(Playback214.get(p.service,"f"))))return false;Object loader=Playback214.get(p.service,"z");if(loader==null)throw new IllegalStateException("Retained metadata loader unavailable");p.loader=loader;RETAINED_LOADERS.add(loader);p.loaderListener=Playback214.get(loader,"k");MultiTabs227.set(loader,"k",owner);MultiTabs227.set(owner,"h1",loader);ModernDebug.record("Reused prepared popup metadata without starting a second HLS session");return true;}catch(Exception e){android.util.Log.w("nicoid-mini","Cannot reuse retained metadata",e);return false;}}
 static void deliverMetadata(Pending p,Object owner)throws Exception{if(p.metadataDelivered||p.loader==null)return;Object value=Playback214.get(p.loader,"m");if(!(value instanceof Bundle)||((Bundle)value).isEmpty())throw new IllegalStateException("Retained metadata is unavailable");Bundle data=new Bundle((Bundle)value);owner.getClass().getMethod("a",Bundle.class).invoke(owner,data);p.metadataDelivered=true;ModernDebug.record("Retained metadata delivered to normal information panels");}
 public static void created(Object owner){Pending p=pending;if(p==null)return;try{Activity a=(Activity)Playback214.get(owner,"A1");if(matches(a)){p.target=a;deliverMetadata(p,owner);if(!p.adopted)owner.getClass().getMethod("b",String.class).invoke(owner,new Object[]{null});}}catch(Exception e){android.util.Log.w("nicoid-mini","Retained popup view initialization failed",e);cancel(p);}}
```

</details>

<details>
<summary>[medium] porting/revisions/v1.9.12-dev.8/src/e/e/a/RankingPages190.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import android.content.*;import android.net.Uri;import android.os.Handler;import org.json.*;import java.util.*;
/** Feed the existing video-list adapter and paging callback for both ranking kinds. */
public final class RankingPages190 {
 static int offset(Object loader)throws Exception{java.lang.reflect.Field page=loader.getClass().getField("j");int n=page.getInt(loader);if(n<1){n=1;page.setInt(loader,n);}return RankingCatalog190.offset(n);}
 public static void install(Object fragment){if(fragment==null)return;try{Object loader=Review181.field(fragment,"c0");if(loader==null)return;String url=String.valueOf(Review181.field(loader,"a"));if(isRanking(url)){fragment.getClass().getField("i0").setInt(fragment,100);if(url.contains("/custom-")){loader.getClass().getField("g").setInt(loader,6);fragment.getClass().getField("h0").setInt(fragment,6);Object adapter=Review181.field(fragment,"p0");adapter.getClass().getField("e").setInt(adapter,6);}}}catch(Exception e){record("Ranking pagination binding failed: "+e.getClass().getSimpleName());}}
 public static boolean isRanking(String url){return url!=null&&(url.startsWith("http://www.nicovideo.jp/ranking/")||url.startsWith("https://www.nicovideo.jp/ranking/")||url.startsWith("https://sp.nicovideo.jp/api/ranking/"));}
 static void record(String message){try{Class.forName("e.e.a.ModernDebug").getMethod("record",String.class).invoke(null,message);}catch(Exception ignored){}}

 public static String url(Object loader)throws Exception{Uri uri=Uri.parse(String.valueOf(Review181.field(loader,"a")));String key=uri.getLastPathSegment(),term=uri.getQueryParameter("term");if(term==null)term="24h";if(!RankingRules190.known(key)){String[] old={"all","game","anime","music_sound","dance","animal","nature","cooking","traveling_outdoor","vehicle","sports","society_politics_news","technology_craft","commentary_lecture","entertainment","radio","other"};String[] keys={"e9uj2uks","4eet3ca4","zc49b03a","wq76qdin","6yuf530c","ne72lua2","24aa8fkw","lq8d5918","k1libcse","3d8zlls9","4w3p65pf","lzicx0y6","n46kcz9u","v6wdx6p5","8kjl94d9","oxzi6bje","ramuboyn"};for(int i=0;i<old.length;i++)if(old[i].equals(key)){key=keys[i];break;}}return "https://nvapi.nicovideo.jp/v1/ranking/teiban/"+key+"?term="+Uri.encode(term)+"&pageSize=100&page="+(offset(loader)/100+1);}
 public static void loaded(Object loader,ArrayList<?> rows)throws Exception{loader.getClass().getField("f").setInt(loader,rows.size());record("Ranking page="+(offset(loader)/100+1)+" rows="+rows.size());JSONObject data=RankingFetch190.PAGE.get();boolean next=data!=null&&data.optBoolean("hasNext",false);RankingFetch190.PAGE.remove();loader.getClass().getField("i").setInt(loader,next&&offset(loader)<900&&rows.size()>0?rows.size():0);}
 public static String rank(Object loader,int index)throws Exception{return Integer.toString(offset(loader)+index+1);}
 static void set(Object o,String name,Object value)throws Exception{o.getClass().getField(name).set(o,value);}
 public static boolean custom(Object loader){return RankingPager196.custom(loader);}
}
```

</details>

<details>
<summary>[critical] porting/revisions/v1.9.12-dev.8/src/e/e/a/SearchSuggestions.java — possible keystroke capture with network exfil: TextWatcher</summary>

LLM review: suspicious (0.5, spyware): The excerpt shows only import declarations, including TextWatcher and HttpURLConnection. These are commonly used for legitimate search suggestion functionality and network requests. No TextWatcher callback implementation or exfiltration logic is visible in the provided snippet, so there is insufficient evidence to classify the code as malicious. The flagged combination warrants further review of the full file, but imports alone do not confirm keystroke capture or network exfiltration.

```
package e.e.a;

import android.content.Context;
import android.graphics.drawable.GradientDrawable;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.view.ViewGroup;
import android.widget.*;
import java.io.*;
import java.lang.ref.WeakReference;
import java.net.HttpURLConnection;
```

</details>

<details>
<summary>[high] porting/revisions/v1.9.12-dev.8/src/e/e/a/SearchSuggestions.java — sensitive source reaches network sink [llm: benign 0.65 — no ban]</summary>

LLM review: benign (0.65, benign-other): The provided excerpt contains only a package declaration and import statements (android.widget.*, java.io.*, java.net.HttpURLConnection, etc.). No method bodies, sensitive sources, data flows, or network sink invocations are visible. Importing networking or I/O classes is common in legitimate Android code and does not by itself indicate exfiltration, backdoor, spyware, or supply-chain compromise. There is insufficient evidence in the shown code to classify as malicious or suspicious.

```
package e.e.a;

import android.content.Context;
import android.graphics.drawable.GradientDrawable;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.view.ViewGroup;
import android.widget.*;
import java.io.*;
import java.lang.ref.WeakReference;
import java.net.HttpURLConnection;
```

</details>

<details>
<summary>[medium] porting/revisions/v1.9.12-dev.8/src/e/e/a/WatchLater245.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import java.net.*;import java.io.*;import org.json.*;
/** Fixed-origin watch-later write with bounded, non-sensitive API error diagnostics. */
public final class WatchLater245 {
 static final String PREFIX="https://nvapi.nicovideo.jp/v1/users/me/watch-later?itemIds=";
 static String code(JSONObject result){JSONObject meta=result.optJSONObject("meta"),data=result.optJSONObject("data");String code=meta==null?"":meta.optString("errorCode",meta.optString("code",""));if(!code.matches("[A-Z][A-Z0-9_]{1,47}"))code="";String detail=data==null?"":data.optString("errorDetail","");if(detail.matches("[A-Z][A-Z0-9_]{1,47}"))code+=code.isEmpty()?detail:"/"+detail;return code;}
 static String failure(int status,byte[] bytes){String detail="";try{detail=code(new JSONObject(new String(bytes,"UTF-8")));}catch(Exception ignored){}return "HTTP "+status+(detail.isEmpty()?"":" "+detail);}
 static byte[] read(InputStream input)throws IOException{if(input==null)return new byte[0];try(InputStream in=input;ByteArrayOutputStream out=new ByteArrayOutputStream()){byte[] buf=new byte[2048];int n;while((n=in.read(buf))!=-1){if(out.size()+n>65536)throw new IOException("Oversized API response");out.write(buf,0,n);}return out.toByteArray();}}
 static void remove(String path)throws Exception{if(!path.startsWith(PREFIX)||!path.substring(PREFIX.length()).matches("[0-9]+"))throw new IllegalArgumentException("Invalid membership identifier");HttpURLConnection connection=(HttpURLConnection)new URL(path).openConnection();try{connection.setRequestMethod("DELETE");connection.setInstanceFollowRedirects(false);connection.setConnectTimeout(10000);connection.setReadTimeout(10000);WatchRequestHeaders.apply(connection,path);connection.setRequestProperty("X-Frontend-Id","6");connection.setRequestProperty("X-Frontend-Version","0");connection.setRequestProperty("X-Request-With","https://www.nicovideo.jp");connection.setRequestProperty("Origin","https://www.nicovideo.jp");connection.setRequestProperty("Accept","application/json");connection.setRequestProperty("Cookie",VideoDetails.cookie());int status=connection.getResponseCode();if(status<200||status>=300)throw new IOException(failure(status,read(connection.getErrorStream())));byte[] bytes=read(connection.getInputStream());if(bytes.length>0){JSONObject result=new JSONObject(new String(bytes,"UTF-8"));JSONObject meta=result.optJSONObject("meta");if(meta!=null&&meta.optInt("status",200)>=300)throw new IOException(failure(meta.optInt("status",400),bytes));}}finally{connection.disconnect();}}
}

```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — [binary strings, unverified] same-app stored data/cookies with network — verify same-site: Cookies</summary>

```
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
"C\"js-initial-watch-data\" data-api-data=\"([^\"]+?)\" data-environment=\""
```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — [binary strings, unverified] sensitive source reaches network sink</summary>

```
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
"C\"js-initial-watch-data\" data-api-data=\"([^\"]+?)\" data-environment=\""
```

</details>


__
