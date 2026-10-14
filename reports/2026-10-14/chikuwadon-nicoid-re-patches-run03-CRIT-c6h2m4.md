# chikuwadon/nicoid-re-patches — 2026-10-14

Commit: 740d330e81085987c386e9103812404a3e1c7d9e | Status: CRIT | crit:6 high:2 med:4

<details>
<summary>[critical] extensions/extension/src/main/java/e/e/a/AccountLists.java — cross-app private data access with network: Cookies</summary>

```
 public static void show(Object owner,ArrayList<?> original,String video){try{Activity a=(Activity)Review181.field(owner,"b");VideoDetails.initializeCookies(a);Context c=PlaybackSession.dialogContext(a);ArrayList<Map<String,Object>> folders=new ArrayList<>();for(Object row:original){Map<?,?> map=(Map<?,?>)row;Map<String,Object> f=new HashMap<>();f.put("id",map.get("id"));f.put("title",map.get("title"));folders.add(f);}LinearLayout box=PanelUi.column(c);box.setPadding(PanelUi.dp(c,24),PanelUi.dp(c,8),PanelUi.dp(c,24),0);UiDialogs.insetContent(box);Spinner spinner=new Spinner(c);ArrayAdapter<String> choices=new ArrayAdapter<>(c,android.R.layout.simple_spinner_dropdown_item);for(Map<String,Object> f:folders)choices.add(String.valueOf(f.get("title")));spinner.setAdapter(choices);box.addView(spinner);Button create=PanelUi.button(c,tr(c,"フォルダーを作成","Create folder","建立資料夾"));box.addView(create);EditText note=new EditText(c);note.setHint(tr(c,"メモ","Note","備註"));box.addView(note);AlertDialog dialog=new AlertDialog.Builder(c).setTitle(UiStrings.translate("マイリスト登録")).setView(box).setPositiveButton(tr(c,"登録","Add","新增"),null).setNegativeButton(tr(c,"キャンセル","Cancel","取消"),null).create();PlaybackSession.showForm(dialog);create.setOnClickListener(v->create(a,(id,name)->{Map<String,Object> f=new HashMap<>();f.put("id",id);f.put("title",name);folders.add(f);choices.add(name);spinner.setSelection(folders.size()-1);}));dialog.getButton(-1).setOnClickListener(v->{int n=spinner.getSelectedItemPosition();if(n<0||n>=folders.size())return;String id=String.valueOf(folders.get(n).get("id")),description=note.getText().toString();dialog.getButton(-1).setEnabled(false);WORK.execute(()->{boolean ok=false;try{String path="https://nvapi.nicovideo.jp/v1/users/me/mylists/"+Uri.encode(id)+"/items?itemId="+Uri.encode(HistoryRules.id(video))+"&description="+Uri.encode(description);VideoDetails.request(path,"POST",true,new NetworkTask());ok=true;}catch(Exception e){android.util.Log.w("nicoid-mylist","Unable to add mylist video: "+e.getClass().getSimpleName());}boolean success=ok;MAIN.post(()->{if(a.isFinishing())return;if(success)dialog.dismiss();else dialog.getButton(-1).setEnabled(true);Toast.makeText(a,tr(a,success?"登録しました":"登録できませんでした",success?"Added":"Unable to add",success?"已新增":"無法新增"),1).show();});});});}catch(Exception e){android.util.Log.w("nicoid-mylist","Unable to display chooser",e);}}
 static void create(Activity a,Created result){Context c=PlaybackSession.dialogContext(a);LinearLayout form=PanelUi.column(c);UiDialogs.insetContent(form);EditText name=new EditText(c);name.setSingleLine(true);name.setHint(tr(c,"フォルダー名","Folder name","資料夾名稱"));form.addView(name);CheckBox publicList=new CheckBox(c);publicList.setText(tr(c,"公開する","Public","公開"));form.addView(publicList);AlertDialog d=new AlertDialog.Builder(c).setTitle(tr(c,"フォルダーを作成","Create folder","建立資料夾")).setView(form).setPositiveButton(tr(c,"作成","Create","建立"),null).setNegativeButton(tr(c,"キャンセル","Cancel","取消"),null).create();PlaybackSession.showForm(d);d.getButton(-1).setOnClickListener(v->{String title=name.getText().toString().trim();if(title.isEmpty()){name.setError(tr(c,"名前を入力してください","Enter a name","請輸入名稱"));return;}boolean isPublic=publicList.isChecked();d.getButton(-1).setEnabled(false);WORK.execute(()->{String id="";try{JSONObject data=VideoDetails.request("https://nvapi.nicovideo.jp/v1/users/me/mylists?name="+Uri.encode(title)+"&description=&isPublic="+isPublic+"&defaultSortKey=addedAt&defaultSortOrder=desc","POST",true,new NetworkTask()).getJSONObject("data");id=data.optString("mylistId");if(!id.matches("[0-9]+"))throw new java.io.IOException();}catch(Exception e){android.util.Log.w("nicoid-mylist","Unable to create folder: "+e.getClass().getSimpleName());id="";}String created=id;MAIN.post(()->{if(a.isFinishing())return;if(!created.isEmpty()){d.dismiss();result.done(created,title);}else{d.getButton(-1).setEnabled(true);name.setError(tr(c,"作成に失敗しました","Unable to create","建立失敗"));}});});});}

```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/e/e/a/CreatorPage.java — new non-allowlisted URL or IP</summary>

```
        if (Ranking190.open(a)) return true;
    public static void following(Activity a) { Following190.attach(a); }
    static void loadFollowingChannels(Activity a,LinearLayout rows,NetworkTask task) {

    static void loadMylists(Activity a,LinearLayout rows,int page) {
                JSONObject data=VideoDetails.request("https://nvapi.nicovideo.jp/v1/users/me/following/mylists?sampleItemCount=0","GET",true,task).optJSONObject("data");
                if(items!=null)for(int n=0;n<items.length();n++){JSONObject item=items.optJSONObject(n);if(item==null)continue;JSONObject nested=item.optJSONObject("mylist");if(nested!=null)item=nested;String id=item.optString("id",item.optString("mylistId",""));if(!id.matches("[0-9]+"))continue;if(item.optString("name",item.optString("title","")).isEmpty()){try{JSONObject list=VideoDetails.request("https://nvapi.nicovideo.jp/v2/mylists/"+id+"?pageSize=1","GET",true,task).getJSONObject("data").getJSONObject("mylist");item.put("name",list.getString("name"));}catch(Exception error){if(task.cancelled())throw error;item.put("name",tr(a,"取得できないマイリスト","Unavailable mylist","無法取得的播放清單"));}}}
                final JSONArray result=items;final boolean next=false;
                        String name=item.optString("name",item.optString("title",""));TextView row=PanelUi.text(a,name,16);row.setGravity(Gravity.START|Gravity.CENTER_VERTICAL);Following190.sizeRow(row);
                        row.setOnClickListener(v->a.startActivity(new Intent(Intent.ACTION_VIEW,Uri.parse("https://www.nicovideo.jp/mylist/"+id)).setClassName(a,"com.sauzask.nicoid.NicoidVideoListActivity").putExtra("type",5).putExtra("name",name)));row.setOnLongClickListener(v->{MylistFollow190.show(a,id);return true;});rows.addView(row);PanelUi.divider(rows);
    private static void channelRow(LinearLayout rows,JSONObject channel){Context c=rows.getContext();LinearLayout row=new LinearLayout(c);row.setGravity(Gravity.CENTER_VERTICAL);Following190.sizeRow(row);android.widget.FrameLayout avatar=new android.widget.FrameLayout(c);android.widget.ImageView icon=new android.widget.ImageView(c);icon.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);TextView placeholder=PanelUi.text(c,"▶",14);avatar.addView(placeholder,new android.widget.FrameLayout.LayoutParams(-1,-1));avatar.addView(icon,new android.widget.FrameLayout.LayoutParams(-1,-1));LinearLayout.LayoutParams image=new LinearLayout.LayoutParams(PanelUi.dp(c,44),PanelUi.dp(c,44));avatar.setBackground(PanelUi.round(c,UiDialogs.surface(c),44));Following190.roundAvatar(avatar);row.addView(avatar,image);TextView name=PanelUi.text(c,channel.optString("name",channel.optString("id")),16);name.setPadding(PanelUi.dp(c,6),0,0,0);name.setGravity(Gravity.CENTER_VERTICAL);row.addView(name,new LinearLayout.LayoutParams(0,-2,1));row.setOnClickListener(v->ChannelPage.launch(c,channel));row.setOnLongClickListener(v->{unfollowChannel(rows,row,channel);return true;});rows.addView(row);PanelUi.divider(rows);ShortImages.load(channel.optString("iconUrl"),icon,placeholder);}

```

</details>

<details>
<summary>[critical] extensions/extension/src/main/java/e/e/a/MylistFollow190.java — cross-app private data access with network: Cookies</summary>

```
package e.e.a;

import android.app.*;
import android.view.*;
import android.widget.*;
import org.json.*;
import java.util.concurrent.*;import java.util.ArrayList;

/** Following belongs to the signed-in account, never to a local bookmark. */
public final class MylistFollow190 {
 private static final ExecutorService WORK=Executors.newFixedThreadPool(2);
 private static final android.os.Handler MAIN=new android.os.Handler(android.os.Looper.getMainLooper());
 private MylistFollow190(){}
 static String id(Activity a){android.net.Uri uri=a.getIntent().getData();if(uri==null)return "";String host=uri.getHost(),path=uri.getPath();return host!=null&&(host.equals("nicovideo.jp")||host.endsWith(".nicovideo.jp"))&&path!=null&&path.matches("/mylist/[0-9]+")?uri.getLastPathSegment():"";}
 static String label(Activity a,boolean followed){return followed?PanelUi.tr(a,"マイリストのフォローを解除","Unfollow mylist","取消追蹤播放清單"):PanelUi.tr(a,"マイリストをフォロー","Follow mylist","追蹤播放清單");}
```

</details>

<details>
<summary>[critical] extensions/extension/src/main/java/e/e/a/Nicoad190.java — cross-app private data access with network: Cookies</summary>

```
package e.e.a;

import android.app.*;import android.content.*;import android.graphics.*;import android.net.Uri;import android.os.*;import android.view.*;import android.webkit.*;import android.widget.*;

/** User-initiated Niconi Ads page, using the current account's web session. */
public final class Nicoad190 {
 private Nicoad190(){}
 public static void bind(Object owner,View root){if(root==null)return;root.post(()->{try{
  Bundle data=(Bundle)Review181.field(owner,"i0");if(data==null)return;attach(root,data.getString("videoId",""));
 }catch(Exception ignored){}});}
 static void attach(View root,String id){if(!id.matches("(?:sm|nm|so|ss)[0-9]+") )return;View existing=root.findViewWithTag("nicoid_nicoad");if(existing!=null){existing.setOnClickListener(v->open(root.getContext(),id));return;}
  View like=root.findViewWithTag("nicoid_like");if(like==null||!(like.getParent() instanceof LinearLayout))return;
  LinearLayout parent=(LinearLayout)like.getParent();int index=parent.indexOfChild(like);LinearLayout actions=parent;
  int height=Math.max(PanelUi.dp(root.getContext(),36),like.getLayoutParams().height);
  LinearLayout.LayoutParams likeParams=new LinearLayout.LayoutParams(like.getLayoutParams().width,height);likeParams.gravity=Gravity.CENTER_VERTICAL;like.setLayoutParams(likeParams);if(like instanceof TextView){((TextView)like).setIncludeFontPadding(false);((TextView)like).setGravity(Gravity.CENTER);}
```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/e/e/a/Nicoad190.java — sensitive source reaches network sink</summary>

```
package e.e.a;

import android.app.*;import android.content.*;import android.graphics.*;import android.net.Uri;import android.os.*;import android.view.*;import android.webkit.*;import android.widget.*;

/** User-initiated Niconi Ads page, using the current account's web session. */
public final class Nicoad190 {
 private Nicoad190(){}
 public static void bind(Object owner,View root){if(root==null)return;root.post(()->{try{
  Bundle data=(Bundle)Review181.field(owner,"i0");if(data==null)return;attach(root,data.getString("videoId",""));
 }catch(Exception ignored){}});}
 static void attach(View root,String id){if(!id.matches("(?:sm|nm|so|ss)[0-9]+") )return;View existing=root.findViewWithTag("nicoid_nicoad");if(existing!=null){existing.setOnClickListener(v->open(root.getContext(),id));return;}
  View like=root.findViewWithTag("nicoid_like");if(like==null||!(like.getParent() instanceof LinearLayout))return;
  LinearLayout parent=(LinearLayout)like.getParent();int index=parent.indexOfChild(like);LinearLayout actions=parent;
  int height=Math.max(PanelUi.dp(root.getContext(),36),like.getLayoutParams().height);
  LinearLayout.LayoutParams likeParams=new LinearLayout.LayoutParams(like.getLayoutParams().width,height);likeParams.gravity=Gravity.CENTER_VERTICAL;like.setLayoutParams(likeParams);if(like instanceof TextView){((TextView)like).setIncludeFontPadding(false);((TextView)like).setGravity(Gravity.CENTER);}
```

</details>

<details>
<summary>[critical] extensions/extension/src/main/java/e/e/a/Ranking190.java — cross-app private data access with network: Cookies</summary>

```
package e.e.a;

import android.app.*;import android.content.*;import android.net.Uri;import android.os.*;import android.view.*;import android.widget.*;import org.json.*;import java.util.*;

/** Native ranking customization, retained on this device. */
public final class Ranking190 {
 private static final Map<Activity,String> SNAPSHOTS=new WeakHashMap<>();
 private Ranking190(){}
 static String snapshot(Context c){return prefs(c).getString("ranking_genres_v190","[]")+prefs(c).getString("ranking_presets_v190","[]");}
 public static void resume(Activity a){if(!snapshot(a).equals(SNAPSHOTS.get(a)))populate(a);}
 public static void startupSettings(android.preference.Preference preference){if(!(preference instanceof android.preference.ListPreference))return;try{android.preference.ListPreference p=(android.preference.ListPreference)preference;ArrayList<CharSequence> entries=new ArrayList<>(),values=new ArrayList<>();CharSequence[] base=p.getEntryValues(),labels=p.getEntries();for(int i=0;base!=null&&i<base.length;i++)if(!base[i].toString().startsWith("custom-")){values.add(base[i]);entries.add(labels[i]);}JSONArray presets=stored(p.getContext(),"ranking_presets_v190");for(int i=0;i<presets.length();i++){JSONObject preset=presets.optJSONObject(i);if(preset!=null&&!preset.optString("id").isEmpty()){values.add("custom-"+preset.getString("id"));entries.add(preset.optString("name")+" / "+UiStrings.translate("ランキング"));}}p.setEntryValues(values.toArray(new CharSequence[0]));p.setEntries(entries.toArray(new CharSequence[0]));if(p.getValue()!=null&&!values.contains(p.getValue())&&p.getValue().startsWith("custom-"))p.setValue("home");}catch(Exception e){android.util.Log.w("nicoid-ranking","Unable to configure startup choices",e);}}
 public static Intent startupIntent(Context c,String key){if(key==null||!key.startsWith("custom-"))return null;JSONArray presets=stored(c,"ranking_presets_v190");for(int i=0;i<presets.length();i++){JSONObject p=presets.optJSONObject(i);if(p!=null&&key.equals("custom-"+p.optString("id"))){String term="24h";try{term=String.valueOf(Class.forName("e.e.a.RankingPeriod").getMethod("savedTerm",Context.class).invoke(null,c));}catch(Exception ignored){}return new Intent(Intent.ACTION_VIEW,Uri.parse("https://www.nicovideo.jp/ranking/genre/"+key+"?term="+Uri.encode(term))).setClassName(c,"com.sauzask.nicoid.NicoidVideoListActivity").putExtra("type",6).putExtra("name",p.optString("name")).putExtra("subtitle",UiStrings.translate("ランキング"));}}return null;}
 static String tr(Context c,String j,String e,String z){return PanelUi.tr(c,j,e,z);}
 static SharedPreferences prefs(Context c){return android.preference.PreferenceManager.getDefaultSharedPreferences(c);}
 static JSONArray stored(Context c,String key){try{return new JSONArray(prefs(c).getString(key,"[]"));}catch(Exception e){return new JSONArray();}}
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/e/e/a/RankingFetch190.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;

import org.json.*;import java.util.*;

/** Merge official genre rankings in rank order, then apply exact tag conditions. */
final class RankingFetch190 {
 static final ThreadLocal<JSONObject> PAGE=new ThreadLocal<>();
 private static final java.util.concurrent.ExecutorService TAG_WORK=java.util.concurrent.Executors.newFixedThreadPool(4);
 private static final LinkedHashMap<String,TagEntry> TAGS=new LinkedHashMap<String,TagEntry>(64,.75f,true){protected boolean removeEldestEntry(Map.Entry<String,TagEntry> e){return size()>128;}};
 static final class TagEntry {long time;JSONArray tags;TagEntry(JSONArray tags){this.tags=tags;time=System.currentTimeMillis();}}
 static ArrayList<JSONObject> load(JSONObject preset,String term,NetworkTask task)throws Exception{RankingRules190.validate(preset);JSONArray genres=preset.getJSONArray("genres"),rules=preset.getJSONArray("rules");LinkedHashMap<String,JSONObject> unique=new LinkedHashMap<>();HashMap<String,Integer> ranks=new HashMap<>();int genreOrder=0;
  for(int g=0;g<genres.length();g++){String key=genres.getString(g);Set<String> pageIds=new HashSet<>();int offset=0;for(;;){if(task.cancelled())throw new java.io.InterruptedIOException();JSONObject data=VideoDetails.request("https://nvapi.nicovideo.jp/v1/ranking/teiban/"+key+"?term="+term+"&pageSize=100&page="+(offset/100+1),"GET",false,task).getJSONObject("data");JSONArray items=data.getJSONArray("items");int added=0;for(int i=0;i<items.length();i++){JSONObject item=items.optJSONObject(i);if(item==null)continue;JSONObject video=item.optJSONObject("content");if(video==null)video=item;String id=video.optString("id",item.optString("watchId",""));if(!id.matches("(?:sm|nm|so|ss)[0-9]+"))continue;video.put("id",id);if(pageIds.add(id))added++;int rank=(offset+i)*genres.length()+genreOrder;if(!unique.containsKey(id)||rank<ranks.get(id)){unique.put(id,video);ranks.put(id,rank);}}
   offset+=100;if(items.length()==0||offset>=1000||!data.optBoolean("hasNext",false))break;if(added==0)throw new java.io.IOException("Repeated ranking page");}
   genreOrder++;
  }
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/e/e/a/RankingPages190.java — new non-allowlisted URL or IP</summary>

```
package e.e.a;
import android.content.*;import android.net.Uri;import android.os.Handler;import org.json.*;import java.util.*;
/** Feed the existing video-list adapter and paging callback for both ranking kinds. */
public final class RankingPages190 {
 private static final Map<Object,ArrayList<JSONObject>> CUSTOM=Collections.synchronizedMap(new WeakHashMap<Object,ArrayList<JSONObject>>());
 static int offset(Object loader)throws Exception{java.lang.reflect.Field page=loader.getClass().getField("j");int n=page.getInt(loader);if(n<1){n=1;page.setInt(loader,n);}return RankingCatalog190.offset(n);}
 public static void install(Object fragment){try{Object loader=Review181.field(fragment,"c0");String url=String.valueOf(Review181.field(loader,"a"));if(isRanking(url)){fragment.getClass().getField("i0").setInt(fragment,100);if(url.contains("/custom-")){loader.getClass().getField("g").setInt(loader,6);fragment.getClass().getField("h0").setInt(fragment,6);Object adapter=Review181.field(fragment,"p0");adapter.getClass().getField("e").setInt(adapter,6);}}}catch(Exception e){record("Ranking pagination binding failed: "+e.getClass().getSimpleName());}}
 public static boolean isRanking(String url){return url.startsWith("http://www.nicovideo.jp/ranking/")||url.startsWith("https://www.nicovideo.jp/ranking/")||url.startsWith("https://sp.nicovideo.jp/api/ranking/");}
 static void record(String message){try{Class.forName("e.e.a.ModernDebug").getMethod("record",String.class).invoke(null,message);}catch(Exception ignored){}}

 public static String url(Object loader)throws Exception{Uri uri=Uri.parse(String.valueOf(Review181.field(loader,"a")));String key=uri.getLastPathSegment(),term=uri.getQueryParameter("term");if(term==null)term="24h";if(!RankingRules190.known(key)){String[] old={"all","game","anime","music_sound","dance","animal","nature","cooking","traveling_outdoor","vehicle","sports","society_politics_news","technology_craft","commentary_lecture","entertainment","radio","other"};String[] keys={"e9uj2uks","4eet3ca4","zc49b03a","wq76qdin","6yuf530c","ne72lua2","24aa8fkw","lq8d5918","k1libcse","3d8zlls9","4w3p65pf","lzicx0y6","n46kcz9u","v6wdx6p5","8kjl94d9","oxzi6bje","ramuboyn"};for(int i=0;i<old.length;i++)if(old[i].equals(key)){key=keys[i];break;}}return "https://nvapi.nicovideo.jp/v1/ranking/teiban/"+key+"?term="+Uri.encode(term)+"&pageSize=100&page="+(offset(loader)/100+1);}
 public static void loaded(Object loader,ArrayList<?> rows)throws Exception{loader.getClass().getField("f").setInt(loader,rows.size());record("Ranking page="+(offset(loader)/100+1)+" rows="+rows.size());JSONObject data=RankingFetch190.PAGE.get();boolean next=data!=null&&data.optBoolean("hasNext",false);RankingFetch190.PAGE.remove();loader.getClass().getField("i").setInt(loader,next&&offset(loader)<900&&rows.size()>0?rows.size():0);}
 public static String rank(Object loader,int index)throws Exception{return Integer.toString(offset(loader)+index+1);}
 static void set(Object o,String name,Object value)throws Exception{o.getClass().getField(name).set(o,value);}
 public static boolean custom(Object loader){try{Uri uri=Uri.parse(String.valueOf(Review181.field(loader,"a")));String key=uri.getLastPathSegment();if(key==null||!key.startsWith("custom-"))return false;Context c=(Context)Review181.field(loader,"p");JSONArray presets=Ranking190.stored(c,"ranking_presets_v190");JSONObject preset=null;for(int i=0;i<presets.length();i++){JSONObject p=presets.optJSONObject(i);if(p!=null&&key.equals("custom-"+p.optString("id")))preset=p;}if(preset==null)throw new IllegalStateException("Missing ranking preset");int start=offset(loader);ArrayList<JSONObject> videos=CUSTOM.get(loader);if(start==0||videos==null){String term=uri.getQueryParameter("term");videos=RankingFetch190.load(preset,term==null?"24h":term,new NetworkTask());CUSTOM.put(loader,videos);}ArrayList<Object> rows=new ArrayList<>();Class<?> model=Class.forName("e.e.a.x1"),format=Class.forName("e.e.a.ModernRanking");for(int i=start;i<Math.min(Math.min(videos.size(),1000),start+100);i++){JSONObject v=videos.get(i),count=v.optJSONObject("count");if(count==null)count=new JSONObject();Object row=model.newInstance();set(row,"a","https://www.nicovideo.jp/watch/"+v.getString("id"));set(row,"b",v.getString("id"));set(row,"h",v.optString("title"));set(row,"y",ContentFilter.owner(v));set(row,"c",DetailData.thumbnail(v));set(row,"g",Integer.toString(i+1));set(row,"p",count.optLong("view"));set(row,"q",count.optLong("comment"));set(row,"m",count.optInt("mylist"));int seconds=v.optInt("duration");set(row,"d",android.text.Html.fromHtml(String.format(java.util.Locale.ROOT,"%d:%02d",seconds/60,seconds%60)));set(row,"f",format.getMethod("formatJst",String.class).invoke(null,v.optString("registeredAt")));set(row,"e",format.getMethod("countInfo",JSONObject.class).invoke(null,count));rows.add(row);}loaded(loader,rows);loader.getClass().getField("i").setInt(loader,start+rows.size()>=videos.size()||start>=900?0:Math.max(1,rows.size()));Runnable result=(Runnable)Class.forName("e.e.a.e0$i").getConstructor(loader.getClass(),ArrayList.class,int.class).newInstance(loader,rows,0);((Handler)Review181.field(loader,"l")).post(result);return true;}catch(Exception e){try{((Handler)Review181.field(loader,"l")).post((Runnable)Class.forName("e.e.a.e0$c").getConstructor(loader.getClass()).newInstance(loader));}catch(Exception ignored){}record("Custom ranking failed: "+e.getClass().getSimpleName());android.util.Log.w("nicoid-ranking","Unable to load custom ranking",e);return true;}}
```

</details>

<details>
<summary>[critical] extensions/extension/src/main/java/e/e/a/VideoDetails.java — cross-app private data access with network: Cookies</summary>

```
 public static void bind(Object f,View root){if(root==null)return;PlayerTheme.information(root);Nicoad190.bind(f,root);try{initializeCookies(root.getContext());Bundle data=(Bundle)f.getClass().getField("i0").get(f);if(data==null)return;String id=data.getString("videoId","");if(!id.matches("(?:sm|nm|so|ss)?[0-9]+"))return;try{JSONObject w=(JSONObject)Class.forName("e.e.a.ModernPlayback").getField("latestWatch").get(null);if(w!=null&&w.optJSONObject("video")!=null&&DetailData.matchesWatch(w,id))capture(w,data);}catch(Exception ignored){}View description=root.findViewById(0x7f08007a);if(description==null||!(description.getParent() instanceof LinearLayout))return;View nativeFollow=root.findViewById(0x7f0801c7);if(nativeFollow!=null){nativeFollow.setVisibility(8);if(nativeFollow.getLayoutParams()!=null)nativeFollow.getLayoutParams().width=0;}View bar=root.findViewById(0x7f0801c8);if(bar instanceof LinearLayout){LinearLayout holder=(LinearLayout)bar;JSONObject metadata=new JSONObject();try{metadata.put("owner",json(data,"details_owner")).put("channel",json(data,"details_channel"));}catch(JSONException ignored){}bindOwner(holder,metadata);bindChannel(root,metadata);if(!data.containsKey("details_owner")&&!data.containsKey("details_channel")&&holder.findViewWithTag("nicoid_owner_loading")==null){View marker=new View(root.getContext());marker.setTag("nicoid_owner_loading");holder.addView(marker,new LinearLayout.LayoutParams(0,0));NetworkTask task=new NetworkTask();scope(root,task);task.start(WORK,()->{try{JSONObject w=watchData(request("https://www.nicovideo.jp/watch/"+id+"?responseType=json","GET",true,task));MAIN.post(()->{if(!task.cancelled()){capture(w,data);bindOwner(holder,w);bindChannel(root,w);}});}catch(Exception ignored){}});}}LinearLayout parent=(LinearLayout)description.getParent();if(parent.findViewWithTag("nicoid_details")!=null)return;LinearLayout box=PanelUi.column(root.getContext());box.setTag("nicoid_details");parent.addView(box);box.addView(text(root.getContext(),tr("シリーズ","Series","系列"),18));LinearLayout series=PanelUi.column(root.getContext());box.addView(series);JSONObject cached=json(data,"details_series");if(cached.optString("id").matches("[0-9]+"))renderSeries(series,cached);else loadSeries(series,id);box.addView(text(root.getContext(),tr("親作品・子作品","Parent and child works","父作品與子作品"),18));for(String k:new String[]{"parents","children"}){LinearLayout group=PanelUi.column(root.getContext());box.addView(group);new TreePage(group,id,k).load();}}catch(Exception ignored){}}
  Context c=PlaybackSession.dialogContext(activity);LinearLayout box=PanelUi.column(c);UiDialogs.insetContent(box);ScrollView scroll=new ScrollView(c);scroll.addView(box);
 private static void addLike(LinearLayout box,JSONObject watch){try{JSONObject video=watch.getJSONObject("video");Bundle data=new Bundle();data.putString("videoId",video.getString("id"));JSONObject count=video.optJSONObject("count");data.putString("likeCount",Long.toString(count==null?0:count.optLong("like")));Class<?> extras=Class.forName("e.e.a.VideoExtras");extras.getMethod("capture",JSONObject.class,Bundle.class).invoke(null,watch,data);LikeIcon like=new LikeIcon(box.getContext(),data);like.setTag("nicoid_like");like.setContentDescription(tr("いいね","Like","喜歡"));java.lang.reflect.Method toggle=extras.getDeclaredMethod("toggle",Button.class,Bundle.class,View.class,String.class);toggle.setAccessible(true);like.setOnClickListener(v->{try{toggle.invoke(null,like,data,box,video.getString("id"));}catch(Exception error){android.util.Log.w("nicoid-like","Unable to change like",error);}});LinearLayout.LayoutParams lp=new LinearLayout.LayoutParams(dp(box.getContext(),48),dp(box.getContext(),48));lp.setMargins(dp(box.getContext(),8),0,0,0);box.addView(like,lp);Nicoad190.attach(box,video.getString("id"));box.getViewTreeObserver().addOnPreDrawListener(()->{like.state();return true;});}catch(Exception error){android.util.Log.w("nicoid-like","Unable to prepare details like",error);}}
 static void videoRow(LinearLayout box,JSONObject item,String prefix){videoRow(box,item,prefix,null);}

```

</details>

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — native binary added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/method-delta.dex — [binary strings] cross-app private data access with network: Cookies</summary>

```
  IP
 #nicoid #
 + URL
 / vv.isPlaying()
 / vv.pause();
 / vv.start();
 HTTP/1.1
 [no signature]
 [signed]
 bytes=
& http://flapi.nicovideo.jp/api/getflv/
 https://nico.ms/
 mode:
 orientation:
C"js-initial-watch-data" data-api-data="([^"]+?)" data-environment="
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/method-delta.dex — [binary strings] sensitive source reaches network sink</summary>

```
  IP
 #nicoid #
 + URL
 / vv.isPlaying()
 / vv.pause();
 / vv.start();
 HTTP/1.1
 [no signature]
 [signed]
 bytes=
& http://flapi.nicovideo.jp/api/getflv/
 https://nico.ms/
 mode:
 orientation:
C"js-initial-watch-data" data-api-data="([^"]+?)" data-environment="
```

</details>


__
