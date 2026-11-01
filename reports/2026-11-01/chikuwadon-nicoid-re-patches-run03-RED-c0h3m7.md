# chikuwadon/nicoid-re-patches — 2026-11-01

Commit: 01f1bdad9ea8adeae4ce468636cdbfaf4b13b21d | Status: RED | crit:0 high:3 med:7

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] porting/helpers-1.10.0.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[info] porting/revisions/v1.10.0/native-baseline.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.0/src/e/e/a/FollowFeed.java — same-app stored data/cookies with network — verify same-site: Cookies</summary>

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
<summary>[high] porting/revisions/v1.10.0/src/e/e/a/Mp4Transfer115.java — sensitive source reaches network sink</summary>

LLM review: suspicious (0.72, exfiltration): The code performs HTTP range requests against a URL resolved via Mp4Playlist115.resolve, which is a network sink. It hardcodes User-Agent, Referer, and Origin headers pointing to www.nicovideo.jp (a third-party video service), suggesting the app is proxying or re-routing traffic through that domain. The presence of cookie handling and redirect-following logic indicates sensitive source data may be sent to an external endpoint under the app's control. This does not match the stated 'finite HLS download and lossless MP4 remux' description, which would not require these third-party headers. The suspicious behavior is consistent with exfiltration of user-controlled data via a network sink.

```
package e.e.a;
import android.content.*;import android.media.*;import android.net.Uri;import java.io.*;import java.net.*;import java.nio.*;import java.util.*;import javax.crypto.*;import javax.crypto.spec.*;import org.json.*;
/** Authenticated finite HLS download and lossless MP4 remux. No playback state is used. */
final class Mp4Transfer115 {
 final DownloadJobs115.Job job;final Context context;final File folder;String cookie;final Map<String,byte[]> keys=new HashMap<>();volatile HttpURLConnection connection;
 Mp4Transfer115(Context c,DownloadJobs115.Job j){context=c;job=j;folder=new File(c.getCacheDir(),"mp4-"+j.token);}
 void check()throws IOException{if(job.cancelled||job.paused||Thread.currentThread().isInterrupted())throw new InterruptedIOException();}
 HttpURLConnection open(URL url,long length,long offset)throws Exception{
  for(int attempt=0;attempt<6;attempt++){check();Mp4Playlist115.resolve(url,url.toString());HttpURLConnection c=(HttpURLConnection)url.openConnection();connection=c;
   try{c.setInstanceFollowRedirects(false);c.setConnectTimeout(12000);c.setReadTimeout(20000);c.setRequestProperty("User-Agent","Mozilla/5.0 (Linux; Android) AppleWebKit/537.36 Chrome/120.0 Mobile Safari/537.36");c.setRequestProperty("Referer","https://www.nicovideo.jp/");c.setRequestProperty("Origin","https://www.nicovideo.jp");String scoped=SecurityPolicy240.cookie(url.toString(),cookie,null);if(!scoped.isEmpty())c.setRequestProperty("Cookie",scoped);if(length>0)c.setRequestProperty("Range","bytes="+offset+"-"+(offset+length-1));int status=c.getResponseCode();if(status==301||status==302||status==303||status==307||status==308){String next=c.getHeaderField("Location");if(next==null)throw new IOException("配信先を取得できません");url=Mp4Playlist115.resolve(url,next);c.disconnect();connection=null;continue;}if(status<200||status>=300||length>0&&status!=206)throw new IOException("動画取得に失敗しました (HTTP "+status+")");if(length>0){String wanted="bytes "+offset+"-"+(offset+length-1)+"/",actual=c.getHeaderField("Content-Range");if(actual==null||!actual.startsWith(wanted))throw new IOException("配信範囲が一致しません");}return c;
   }catch(Exception e){c.disconnect();connection=null;throw e;}
  }throw new IOException("配信先の転送が多すぎます");
 }
 byte[] small(URL url,int limit)throws Exception{HttpURLConnection c=open(url,-1,0);try(InputStream in=c.getInputStream();ByteArrayOutputStream out=new ByteArrayOutputStream()){byte[] b=new byte[8192];int n;while((n=in.read(b))!=-1){check();if(out.size()+n>limit)throw new IOException("配信情報が大きすぎます");out.write(b,0,n);}return out.toByteArray();}finally{c.disconnect();connection=null;}}
 String text(URL u)throws Exception{return new String(small(u,4*1024*1024),"UTF-8");}
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.0/src/e/e/a/PopupReturn244.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import android.app.*;import android.content.*;import android.net.Uri;import android.os.*;import android.view.*;import java.lang.reflect.*;
/** Hand over the existing VideoView before native loading; never set a second media URI. */
public final class PopupReturn244 {
 static final java.util.Set<Object> RETAINED_LOADERS=java.util.Collections.newSetFromMap(new java.util.WeakHashMap<Object,Boolean>());
 public static boolean retainedLoader(Object loader){return RETAINED_LOADERS.contains(loader);}
 static final String TOKEN="nicoid_popup_return_244";static Pending pending;static long serial;static final Handler MAIN=new Handler(Looper.getMainLooper());
 static final class Pending{Service service;View video,empty;Object model,owner,loader,loaderListener;Activity target;ViewGroup normalParent;ViewGroup.LayoutParams normalParams;int normalIndex;float speed;long token;boolean playing,adopted,finishing,metadataDelivered;Runnable timeout;MiniSession225.SurfaceKeeper keeper;Pending(Service s)throws Exception{service=s;video=(View)Playback214.get(s,"e");model=s.getClass().getField("k0").get(null);playing=Boolean.TRUE.equals(MiniSession225.call(video,"isPlaying",new Class<?>[0]));speed=1f;try{speed=((Number)MiniSession225.call(video,"getPlaybackSpeed",new Class<?>[0])).floatValue();}catch(Exception ignored){}if(Float.isNaN(speed)||Float.isInfinite(speed)||speed<=0)speed=1f;}}
 public static boolean restore(Object service){return service instanceof Service&&start((Service)service);}
 public static boolean start(Service service){if(pending!=null)return pending.service==service;try{Pending p=new Pending(service);if(p.video==null||((Number)MiniSession225.call(p.video,"getDuration",new Class<?>[0])).longValue()<=0)return false;p.token=++serial;pending=p;Class.forName("com.sauzask.nicoid.NicoidVideoFragment").getField("V1").set(null,p.model);String id=HistoryRules.id(String.valueOf(Playback214.get(service,"f")));if(id==null||!id.matches("(?:sm|nm|so|ss)?[0-9]+"))throw new IllegalArgumentException("Invalid retained video identifier");Intent i=new Intent(Intent.ACTION_VIEW,Uri.parse("https://www.nicovideo.jp/watch/"+id)).setClassName(service,"com.sauzask.nicoid.NicoidVideoActivity").addFlags(Intent.FLAG_ACTIVITY_NEW_TASK|Intent.FLAG_ACTIVITY_NO_ANIMATION|Intent.FLAG_ACTIVITY_NO_USER_ACTION).putExtra("intentselect",true).putExtra("nicoid_portrait_restore",true).putExtra(TOKEN,p.token);Object info=service.getClass().getField("s0").get(null);Object loader=Playback214.get(service,"z");if(loader!=null&&Playback214.get(loader,"m") instanceof Bundle)info=new Bundle((Bundle)Playback214.get(loader,"m"));if(info instanceof Bundle)i.putExtra("infodata",(Bundle)info);try{Object rows=Playback214.get(service,"O");if(rows instanceof java.util.ArrayList&&!((java.util.ArrayList<?>)rows).isEmpty()){int position=((Number)Playback214.get(service,"P")).intValue();Class.forName("e.e.a.v0").getMethod("a",Intent.class,java.util.ArrayList.class,int.class,boolean.class).invoke(null,i,rows,position,false);i.putExtra("playlistposition",position).putExtra("isContinuousPlay",service.getClass().getField("j0").getBoolean(null));}}catch(Exception e){android.util.Log.w("nicoid-mini","Cannot preserve native return queue",e);}TabPlayback110.transfer(service,i,true);PlaybackNavigation114.launch(service,i);p.timeout=()->cancel(p);MAIN.postDelayed(p.timeout,30000);return true;}catch(Exception e){if(pending!=null)cancel(pending);android.util.Log.w("nicoid-mini","Cannot return retained popup",e);return false;}}
 static boolean matches(Activity a){return pending!=null&&a!=null&&a.getIntent().getLongExtra(TOKEN,-1)==pending.token;}
 public static boolean retaining(Context c,Intent i){return c instanceof Activity&&matches((Activity)c)&&i!=null&&i.getComponent()!=null&&i.getComponent().getClassName().equals("com.sauzask.nicoid.NicoidPopupViewService");}
 public static Object keep(Object fallback){return pending==null?fallback:pending.model;}
 public static boolean reuseLoader(Object owner){Pending p=pending;if(p==null)return false;try{Activity a=(Activity)Playback214.get(owner,"A1");if(!matches(a)||!HistoryRules.same(String.valueOf(Playback214.get(owner,"b0")),String.valueOf(Playback214.get(p.service,"f"))))return false;Object loader=Playback214.get(p.service,"z");if(loader==null)throw new IllegalStateException("Retained metadata loader unavailable");p.loader=loader;RETAINED_LOADERS.add(loader);p.loaderListener=Playback214.get(loader,"k");MultiTabs227.set(loader,"k",owner);MultiTabs227.set(owner,"h1",loader);ModernDebug.record("Reused prepared popup metadata without starting a second HLS session");return true;}catch(Exception e){android.util.Log.w("nicoid-mini","Cannot reuse retained metadata",e);return false;}}
 static void deliverMetadata(Pending p,Object owner)throws Exception{if(p.metadataDelivered||p.loader==null)return;Object value=Playback214.get(p.loader,"m");if(!(value instanceof Bundle)||((Bundle)value).isEmpty())throw new IllegalStateException("Retained metadata is unavailable");Bundle data=new Bundle((Bundle)value);owner.getClass().getMethod("a",Bundle.class).invoke(owner,data);p.metadataDelivered=true;ModernDebug.record("Retained metadata delivered to normal information panels");}
```

</details>

<details>
<summary>[high] porting/revisions/v1.10.0/src/e/e/a/SearchSnapshot110.java — reflection-hidden behavior with network sink</summary>

LLM review: suspicious (0.72, exfiltration): The class declares a NETWORK lock object and nextRequest field alongside java.net/java.io imports, indicating a network sink. It uses java.lang.reflect.Proxy to create a hidden SharedPreferences implementation that intercepts getAll/edit/get operations, obscuring preference reads/writes. It also stores arbitrary URLs in a WeakHashMap keyed by Context and parses their query parameters into the preference map. This combination of reflection-hidden state, URL ingestion, and network synchronization is consistent with potential exfiltration or C2 behavior, though the actual network payload is not visible in the excerpt, so malicious cannot be confirmed.

```
package e.e.a;
import android.app.*;import android.content.*;import android.net.Uri;import android.view.*;import android.widget.*;import android.text.*;import org.json.*;import java.util.*;import java.lang.reflect.*;import java.net.*;import java.io.*;
/** Only an explicit view-count range selects the daily snapshot index. */
public final class SearchSnapshot110 {
 static final String LOW="nicoidMinViews",HIGH="nicoidMaxViews";static final WeakHashMap<Context,String> EDITS=new WeakHashMap<>();static final WeakHashMap<Context,SharedPreferences> MODELS=new WeakHashMap<>();static SharedPreferences current;static final Object NETWORK=new Object();static long nextRequest;
 static void editing(Context c,String url){EDITS.put(c,url==null?"":url);MODELS.remove(c);}
 static String tr(Context c,String j,String e,String z){return PanelUi.tr(c,j,e,z);}
 static SharedPreferences preferences(Context c){SharedPreferences p=MODELS.get(c);if(p!=null){current=p;return p;}final HashMap<String,Object> map=new HashMap<>(android.preference.PreferenceManager.getDefaultSharedPreferences(c).getAll());String request=EDITS.get(c);if(request==null&&c instanceof Activity)request=((Activity)c).getIntent().getDataString();map.remove(LOW);map.remove(HIGH);
  if(request!=null&&!request.isEmpty()){Uri u=Uri.parse(request);for(String k:new String[]{LOW,HIGH}){String v=u.getQueryParameter(k);if(v!=null)map.put(k,v);}for(String k:new String[]{"from","to","min","max"})map.remove("search_range_"+k);try{for(String[] kv:new String[][]{{"minRegisteredAt","from"},{"maxRegisteredAt","to"}}){String v=u.getQueryParameter(kv[0]);if(v!=null)map.put("search_range_"+kv[1],new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX",Locale.ROOT).parse(v).getTime());}for(String[] kv:new String[][]{{"minDuration","min"},{"maxDuration","max"}}){String v=u.getQueryParameter(kv[0]);if(v!=null)map.put("search_range_"+kv[1],Integer.parseInt(v));}}catch(Exception ignored){}}
  final SharedPreferences[] holder={null};InvocationHandler handler=(o,m,a)->{String n=m.getName();if(n.equals("getAll"))return new HashMap<>(map);if(n.equals("contains"))return map.containsKey(a[0]);if(n.equals("edit")){final Object[] editor={null};editor[0]=java.lang.reflect.Proxy.newProxyInstance(SharedPreferences.Editor.class.getClassLoader(),new Class<?>[]{SharedPreferences.Editor.class},(e,method,args)->{String op=method.getName();if(op.startsWith("put")){map.put((String)args[0],args[1]);return editor[0];}if(op.equals("remove")){map.remove(args[0]);return editor[0];}if(op.equals("clear")){map.clear();return editor[0];}return op.equals("commit")?Boolean.TRUE:null;});return editor[0];}if(n.startsWith("get"))return map.containsKey(a[0])?map.get(a[0]):a[1];if(n.equals("hashCode"))return System.identityHashCode(o);if(n.equals("equals"))return o==a[0];return null;};holder[0]=(SharedPreferences)java.lang.reflect.Proxy.newProxyInstance(SharedPreferences.class.getClassLoader(),new Class<?>[]{SharedPreferences.class},handler);p=holder[0];MODELS.put(c,p);current=p;return p;}
 static void restore(Context c,int[] values){SharedPreferences p=preferences(c);String input=EDITS.get(c);if(input==null)return;Uri u=Uri.parse(input);values[2]=u.getQueryParameter("minRegisteredAt")!=null||u.getQueryParameter("maxRegisteredAt")!=null?8:0;values[3]=u.getQueryParameter("minDuration")!=null||u.getQueryParameter("maxDuration")!=null?8:0;}
 static void sortControl(Context c,View root,SharedPreferences p){View v=root.findViewById(0x7f080188);if(!(v instanceof Spinner))return;Spinner spinner=(Spinner)v;SpinnerAdapter original=spinner.getAdapter();if(original==null)return;int selected=spinner.getSelectedItemPosition();spinner.setAdapter(new android.widget.BaseAdapter(){public int getCount(){return original.getCount();}public Object getItem(int n){return original.getItem(n);}public long getItemId(int n){return original.getItemId(n);}public boolean areAllItemsEnabled(){return false;}public boolean isEnabled(int n){return n!=12||p.getString(LOW,"").isEmpty()&&p.getString(HIGH,"").isEmpty();}public View getView(int n,View convert,ViewGroup parent){return original.getView(n,convert,parent);}public View getDropDownView(int n,View convert,ViewGroup parent){View row=original.getDropDownView(n,convert,parent);row.setEnabled(isEnabled(n));row.setAlpha(isEnabled(n)?1f:.4f);return row;}});spinner.setSelection(selected);}
 static String url(String base){if(current==null)return base;String lo=current.getString(LOW,""),hi=current.getString(HIGH,"");if(lo.isEmpty()&&hi.isEmpty())return base;Uri.Builder b=Uri.parse(base).buildUpon();if(!lo.isEmpty())b.appendQueryParameter(LOW,lo);if(!hi.isEmpty())b.appendQueryParameter(HIGH,hi);return b.build().toString();}
 static long bound(String s){return SearchBounds110.parse(s);}

```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.0/src/e/e/a/SeriesPlayback.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.preference.PreferenceManager;
import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;
import java.util.*;
import java.util.concurrent.*;
import org.json.*;

/** Build a series-only native queue and respect the configured tap playback mode. */
public final class SeriesPlayback {
```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.0/src/e/e/a/SnapshotOwners110.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import org.json.*;import java.util.*;import java.util.concurrent.*;import java.net.*;import java.io.*;
/** Bounded public metadata enrichment; names are cached across result pages. */
final class SnapshotOwners110 {
 static final ExecutorService WORK=Executors.newFixedThreadPool(4);static final Map<String,String> CACHE=Collections.synchronizedMap(new LinkedHashMap<String,String>(64,.75f,true){protected boolean removeEldestEntry(Map.Entry<String,String> e){return size()>512;}});
 static Map<String,String> names(JSONArray items){LinkedHashSet<String> ids=new LinkedHashSet<>();for(int n=0;n<items.length();n++){JSONObject item=items.optJSONObject(n);String id=item==null?"":item.optString("userId","");if(id.matches("[0-9]+"))ids.add(id);}ArrayList<Future<?>> futures=new ArrayList<>();ArrayList<NetworkTask> tasks=new ArrayList<>();for(String id:ids)if(!CACHE.containsKey(id)){NetworkTask task=new NetworkTask();tasks.add(task);Future<?> f=WORK.submit(()->{HttpURLConnection c=null;try{c=(HttpURLConnection)new URL("https://nvapi.nicovideo.jp/v1/users/"+id).openConnection();if(!task.bind(c))return;c.setConnectTimeout(1500);c.setReadTimeout(1500);c.setRequestProperty("X-Frontend-Id","6");c.setRequestProperty("X-Frontend-Version","0");c.setRequestProperty("User-Agent","nicoidRe/1.10.0");if(c.getResponseCode()!=200)return;StringBuilder b=new StringBuilder();try(Reader r=new InputStreamReader(c.getInputStream(),"UTF-8")){char[] chars=new char[2048];int n;while((n=r.read(chars))!=-1){b.append(chars,0,n);if(b.length()>131072||task.cancelled())return;}}String name=new JSONObject(b.toString()).getJSONObject("data").getJSONObject("user").optString("nickname");if(!name.isEmpty())CACHE.put(id,name);}catch(Exception ignored){}finally{if(c!=null){task.release(c);c.disconnect();}}});futures.add(f);}long deadline=System.nanoTime()+TimeUnit.SECONDS.toNanos(3);for(Future<?> f:futures)try{long left=deadline-System.nanoTime();if(left<=0)break;f.get(left,TimeUnit.NANOSECONDS);}catch(Exception ignored){}for(int n=0;n<futures.size();n++)if(!futures.get(n).isDone()){tasks.get(n).cancel();futures.get(n).cancel(true);}HashMap<String,String> result=new HashMap<>();for(String id:ids)result.put(id,CACHE.getOrDefault(id,"ID: "+id));return result;}
}

```

</details>

<details>
<summary>[medium] porting/revisions/v1.10.0/src/e/e/a/TabPlayback110.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import android.app.*;import android.content.*;import android.preference.PreferenceManager;import android.net.Uri;import android.view.*;import java.util.*;
/** Tab preferences are independent of the immutable order owned by a playback session. */
public final class TabPlayback110 {
 static final String TOKEN="nicoid_tab_queue";static Queue active;static long serial;static final WeakHashMap<Object,Boolean> EXPLICIT=new WeakHashMap<>();static final WeakHashMap<Object,Boolean> REUSE=new WeakHashMap<>();static final WeakHashMap<Object,SavedTabs227.Tab> REQUESTS=new WeakHashMap<>();
 static final class Queue{long token=++serial;String tab;ArrayList<Object> rows;int cursor,mode;Queue(String t,ArrayList<Object> r,int p,int m){tab=t;rows=r;cursor=p;mode=m;}}
 static SharedPreferences prefs(Context c){return PreferenceManager.getDefaultSharedPreferences(c);}
 static int mode(Context c,SavedTabs227.Tab t){if(t.mode>=0)return t.mode;SharedPreferences p=prefs(c);if(!p.contains("tab_playback_default"))p.edit().putInt("tab_playback_default",p.getBoolean("continuous_play",false)?p.getInt("continuous_play_mode",0)==2?2:1:0).apply();return p.getInt("tab_playback_default",0);}
 static void apply(Activity a,String id){if(!MultiTabs227.enabled())return;SavedTabs227.Tab t=MultiTabs227.data().find(id);if(t==null)return;int m=mode(a,t);prefs(a).edit().putBoolean("continuous_play",m!=0).putInt("continuous_play_mode",m==2?2:0).apply();try{Class<?> c=Class.forName("com.sauzask.nicoid.NicoidVideoListActivity");c.getField("I").setBoolean(null,m!=0);c.getField("J").setInt(null,m==2?2:0);}catch(Exception e){android.util.Log.w("nicoid-queue","Cannot synchronize tab mode",e);}}
 public static void changed(Activity a,boolean enabled,boolean shuffle){if(!MultiTabs227.enabled())return;MultiTabs227.Host h=MultiTabs227.HOSTS.get(a);if(h==null)return;SavedTabs227.Tab t=MultiTabs227.data().find(h.currentId);if(t!=null){t.mode=enabled?(shuffle?2:1):0;MultiTabs227.save();}}
 static String label(Context c,int m){return PanelUi.tr(c,m==0?"OFF":m==1?"連続再生":"シャッフル再生",m==0?"OFF":m==1?"Continuous playback":"Shuffle playback",m==0?"OFF":m==1?"連續播放":"隨機播放");}
 static void actions(MultiTabs227.Host h,SavedTabs227.Tab t){ArrayList<String> labels=new ArrayList<>();ArrayList<Runnable> actions=new ArrayList<>();if(t.kind==0){labels.add(PanelUi.tr(h.a,"検索ワードを変更","Edit search","編輯搜尋"));actions.add(()->h.query(t));}int m=mode(h.a,t);for(int n=1;n<=2;n++){final int mode=n;labels.add((m==n?"✓ ":"")+label(h.a,n));actions.add(()->{t.mode=m==mode?0:mode;MultiTabs227.save();if(t.id.equals(h.currentId)){apply(h.a,t.id);h.a.invalidateOptionsMenu();}});}int at=MultiTabs227.data().tabs.indexOf(t);for(int dir:new int[]{-1,1})if(at+dir>=0&&at+dir<MultiTabs227.data().tabs.size()){labels.add(PanelUi.tr(h.a,dir<0?"左に移動":"右に移動",dir<0?"Move left":"Move right",dir<0?"向左移動":"向右移動"));actions.add(()->{int i=MultiTabs227.data().tabs.indexOf(t);if(i>=0&&i+dir>=0&&i+dir<MultiTabs227.data().tabs.size()){Collections.swap(MultiTabs227.data().tabs,i,i+dir);MultiTabs227.save();h.preserveStrip=true;h.bar();}});}labels.add(PanelUi.tr(h.a,"タブを閉じる","Close tab","關閉分頁"));actions.add(()->h.close(t));UiDialogs.show(UiDialogs.builder(PlaybackSession.dialogContext(h.a)).setTitle(t.label).setItems(labels.toArray(new String[0]),(d,n)->actions.get(n).run()).setNegativeButton(android.R.string.cancel,null).create());}
 static Object get(Object o,String f)throws Exception{return Playback214.get(o,f);}static void set(Object o,String f,Object v)throws Exception{MultiTabs227.set(o,f,v);}
 static String id(Object row){return HistoryRules.id(ListActions.value(row,"videourl"));}
 public static void request(Object owner){if(!MultiTabs227.enabled())return;SavedTabs227.Tab tab=MultiTabs227.data().find(MultiTabs227.data().selected);if(tab!=null)REQUESTS.put(owner,tab);}
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
