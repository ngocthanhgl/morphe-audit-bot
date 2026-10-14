# chikuwadon/nicoid-re-patches — 2026-10-14

Commit: c9562f760edcce8006c89f31d3aed34142ec4960 | Status: CRIT | crit:4 high:4 med:3

<details>
<summary>[medium] extensions/extension/src/main/java/e/e/a/CacheListing.java — new non-allowlisted URL or IP</summary>

```
  for(File file:files){String name=file.getName();if(!name.matches("(?:sm|so|nm|ss)[0-9]+\\.json"))continue;String id=name.substring(0,name.length()-5);try{JSONObject data=read(file);Object row=Class.forName("e.e.a.x1").getConstructor().newInstance();set(row,"videourl","https://www.nicovideo.jp/watch/"+id);set(row,"videoid",id);set(row,"thumbnail",data.optString("thumbnailUrl",id));set(row,"title",data.optString("videoTitle",data.optString("title",id)));String duration=data.optString("length","0");try{long seconds=Long.parseLong(duration);duration=String.format(Locale.ROOT,"%d:%02d",seconds/60,seconds%60);}catch(NumberFormatException ignored){}set(row,"length",Html.fromHtml(duration));long view=data.optLong("viewCount"),comment=data.optLong("commentCount"),mylist=data.optLong("mylistCount");set(row,"rawplay",(int)Math.min(Integer.MAX_VALUE,view));set(row,"rawres",(int)Math.min(Integer.MAX_VALUE,comment));set(row,"rawmylis",(int)Math.min(Integer.MAX_VALUE,mylist));long verified=CachedPlayback.completedBytes(root,id);long bytes=Math.max(sizes.containsKey(id)?sizes.get(id):0,Math.max(0,verified)),done=verified>0?0:-1;set(row,"cachesize",bytes);set(row,"cached",done);CacheRowInfo display=CacheRowInfo.from(data,bytes,done==0);INFO.put(row,display);set(row,"videoinfo",Html.fromHtml(display.counts+"<br>"+display.transfer));String posted=data.optString("postedAt",data.optString("first_retrieve",""));set(row,"posttime",Html.fromHtml(display.posted));set(row,"postedAt",posted);long postedMillis=0;for(String format:new String[]{"yyyy-MM-dd'T'HH:mm:ssXXX","yyyy/MM/dd HH:mm:ss","yyyy-MM-dd HH:mm:ss"}){try{java.text.SimpleDateFormat f=new java.text.SimpleDateFormat(format,Locale.ROOT);f.setTimeZone(TimeZone.getTimeZone("Asia/Tokyo"));Date date=f.parse(posted);if(date!=null){postedMillis=date.getTime();break;}}catch(Exception ignored){}}set(row,"rawpostedAt",postedMillis);long modified=CachedPlayback.acquiredAt(root,id);set(row,"rawcachedAt",modified);set(row,"cachedAt",Long.toString(modified));set(row,"first_retrieve",Html.fromHtml(data.optString("first_retrieve","")));set(row,"isad",false);set(row,"isselect",false);rows.add(row);}catch(Exception e){android.util.Log.w("nicoid-cache","Unreadable metadata was retained",e);}}

```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/e/e/a/SeriesPlayback.java — new non-allowlisted URL or IP</summary>

```
import android.preference.PreferenceManager;
    private static final Map<Activity,Object> CHANGES=new WeakHashMap<>();
    static boolean shuffled(Context c,String series){return PreferenceManager.getDefaultSharedPreferences(c).getBoolean("series_shuffle_"+series,false);}
    static boolean enabled(Context c,String series){return PreferenceManager.getDefaultSharedPreferences(c).getBoolean("series_continuous_"+series,false);}
    static Activity activity(Context c){for(int n=0;n<12&&c instanceof ContextWrapper&&!(c instanceof Activity);n++){Context next=((ContextWrapper)c).getBaseContext();if(next==null||next==c)break;c=next;}return c instanceof Activity?(Activity)c:null;}
    static void toggle(Context context,String series,boolean enabled){
        PreferenceManager.getDefaultSharedPreferences(context).edit().putBoolean("series_continuous_"+series,enabled).apply();
        Activity a=activity(context);if(a==null)return;
        Object fragment;String current;
        try{fragment=Review181.field(a,"v");current=HistoryRules.id(String.valueOf(Review181.field(fragment,"b0")));fragment.getClass().getField("C1");}catch(Exception unavailable){return;}
        Object token=new Object();synchronized(CHANGES){CHANGES.put(a,token);}
        if(!enabled){bind(fragment,null,0);return;}
        NetworkTask task=new NetworkTask();task.start(WORK,()->{try{
            ArrayList<JSONObject> videos=fetch(a,series,task);if(shuffled(context,series))Collections.shuffle(videos);ArrayList<Object> rows=rows(videos);int index=-1;
            for(int n=0;n<videos.size();n++)if(current.equals(HistoryRules.id(DetailData.target(videos.get(n))))){index=n;break;}
```

</details>

<details>
<summary>[critical] extensions/extension/src/main/java/e/e/a/VideoDetails.java — cross-app private data access with network: Cookies</summary>

```
 public static void bind(Object f,View root){if(root==null)return;PlayerTheme.information(root);try{initializeCookies(root.getContext());Bundle data=(Bundle)f.getClass().getField("i0").get(f);if(data==null)return;String id=data.getString("videoId","");if(!id.matches("(?:sm|nm|so|ss)?[0-9]+"))return;try{JSONObject w=(JSONObject)Class.forName("e.e.a.ModernPlayback").getField("latestWatch").get(null);if(w!=null&&w.optJSONObject("video")!=null&&DetailData.matchesWatch(w,id))capture(w,data);}catch(Exception ignored){}View description=root.findViewById(0x7f08007a);if(description==null||!(description.getParent() instanceof LinearLayout))return;View nativeFollow=root.findViewById(0x7f0801c7);if(nativeFollow!=null){nativeFollow.setVisibility(8);if(nativeFollow.getLayoutParams()!=null)nativeFollow.getLayoutParams().width=0;}View bar=root.findViewById(0x7f0801c8);if(bar instanceof LinearLayout){LinearLayout holder=(LinearLayout)bar;JSONObject metadata=new JSONObject();try{metadata.put("owner",json(data,"details_owner")).put("channel",json(data,"details_channel"));}catch(JSONException ignored){}bindOwner(holder,metadata);bindChannel(root,metadata);if(!data.containsKey("details_owner")&&!data.containsKey("details_channel")&&holder.findViewWithTag("nicoid_owner_loading")==null){View marker=new View(root.getContext());marker.setTag("nicoid_owner_loading");holder.addView(marker,new LinearLayout.LayoutParams(0,0));NetworkTask task=new NetworkTask();scope(root,task);task.start(WORK,()->{try{JSONObject w=watchData(request("https://www.nicovideo.jp/watch/"+id+"?responseType=json","GET",true,task));MAIN.post(()->{if(!task.cancelled()){capture(w,data);bindOwner(holder,w);bindChannel(root,w);}});}catch(Exception ignored){}});}}LinearLayout parent=(LinearLayout)description.getParent();if(parent.findViewWithTag("nicoid_details")!=null)return;LinearLayout box=PanelUi.column(root.getContext());box.setTag("nicoid_details");parent.addView(box);box.addView(text(root.getContext(),tr("シリーズ","Series","系列"),18));LinearLayout series=PanelUi.column(root.getContext());box.addView(series);JSONObject cached=json(data,"details_series");if(cached.optString("id").matches("[0-9]+"))renderSeries(series,cached);else loadSeries(series,id);box.addView(text(root.getContext(),tr("親作品・子作品","Parent and child works","父作品與子作品"),18));for(String k:new String[]{"parents","children"}){LinearLayout group=PanelUi.column(root.getContext());box.addView(group);new TreePage(group,id,k).load();}}catch(Exception ignored){}}
  android.app.AlertDialog dialog=new android.app.AlertDialog.Builder(c).setTitle(tr("動画情報","Video details","影片資訊")).setView(scroll).setPositiveButton(tr("通常再生で開く","Open normal player","開啟一般播放器"),(d,w)->ModernShorts.normalPlayer(activity)).setNegativeButton(tr("閉じる","Close","關閉"),null).create();
 private static void renderSeries(LinearLayout box,JSONObject s){box.addView(text(box.getContext(),s.optString("title"),16));JSONObject videos=s.optJSONObject("video");if(videos!=null)for(String k:new String[]{"prev","next"}){JSONObject row=videos.optJSONObject(k);if(row!=null)videoRow(box,row,k.equals("prev")?tr("前の動画","Previous video","上一部影片"):tr("次の動画","Next video","下一部影片"),()->SeriesPlayback.open(box.getContext(),s.optString("id"),row,SeriesPlayback.enabled(box.getContext(),s.optString("id"))));}new SeriesPage(box,s.optString("id"));}
 static String duration(JSONObject item){long seconds=item.optLong("duration",item.optLong("lengthSeconds",-1));if(seconds<0)return "";return seconds>=3600?String.format(java.util.Locale.ROOT,"%d:%02d:%02d",seconds/3600,seconds/60%60,seconds%60):String.format(java.util.Locale.ROOT,"%d:%02d",seconds/60,seconds%60);}
 static void videoRow(LinearLayout box,JSONObject item,String prefix,Runnable click){Context c=box.getContext();LinearLayout row=new LinearLayout(c);row.setGravity(Gravity.CENTER_VERTICAL);row.setPadding(dp(c,4),dp(c,6),dp(c,4),dp(c,6));FrameLayout image=new FrameLayout(c);ImageView thumb=new ImageView(c);thumb.setScaleType(ImageView.ScaleType.CENTER_CROP);TextView placeholder=text(c,"▶",14);image.addView(placeholder,new FrameLayout.LayoutParams(-1,-1));image.addView(thumb,new FrameLayout.LayoutParams(-1,-1));String duration=duration(item);if(!duration.isEmpty()){TextView time=text(c,duration,12);time.setTag("nicoid_duration");time.setTextColor(0xffffffff);time.setBackgroundColor(0x99000000);time.setPadding(dp(c,2),0,dp(c,2),0);image.addView(time,new FrameLayout.LayoutParams(-2,-2,Gravity.BOTTOM|Gravity.RIGHT));}row.addView(image,new LinearLayout.LayoutParams(dp(c,96),dp(c,54)));LinearLayout labels=PanelUi.column(c);TextView name=text(c,(prefix.isEmpty()?"":prefix+"\n")+item.optString("title",item.optString("globalId","")),14);name.setPadding(dp(c,8),0,dp(c,8),dp(c,2));labels.addView(name);addMetadata(labels,item,12);row.addView(labels,new LinearLayout.LayoutParams(0,-2,1));row.setContentDescription(name.getText()+metadata(item));row.setOnClickListener(v->{if(click!=null)click.run();else open(c,target(item));});box.addView(row);PanelUi.divider(box);ShortImages.load(thumbnail(item),thumb,placeholder);}
 final LinearLayout box,rows;final String id;final Button more,collapse;final CheckBox continuous,random;int page=1,loaded,total=Integer.MAX_VALUE;boolean busy,collapsed;NetworkTask active;
 SeriesPage(LinearLayout b,String i){box=b;id=i;continuous=new CheckBox(b.getContext());continuous.setText(tr("連続再生","Continuous playback","連續播放"));continuous.setTextColor(PanelUi.ink(b.getContext()));continuous.setButtonTintList(android.content.res.ColorStateList.valueOf(UiDialogs.accent(b.getContext())));random=new CheckBox(b.getContext());random.setText(tr("シャッフル再生","Shuffle playback","隨機播放"));PanelUi.tint(random);continuous.setChecked(SeriesPlayback.enabled(b.getContext(),id)&&!SeriesPlayback.shuffled(b.getContext(),id));random.setChecked(SeriesPlayback.shuffled(b.getContext(),id));LinearLayout playback=new LinearLayout(b.getContext());playback.addView(continuous,new LinearLayout.LayoutParams(0,-2,1));playback.addView(random,new LinearLayout.LayoutParams(0,-2,1));box.addView(playback);boolean[] syncing={false};continuous.setOnCheckedChangeListener((button,on)->{if(syncing[0])return;syncing[0]=true;if(on)random.setChecked(false);syncing[0]=false;PreferenceManager.getDefaultSharedPreferences(b.getContext()).edit().putBoolean("series_shuffle_"+id,random.isChecked()).apply();SeriesPlayback.toggle(b.getContext(),id,on||random.isChecked());});random.setOnCheckedChangeListener((button,on)->{if(syncing[0])return;syncing[0]=true;if(on)continuous.setChecked(false);syncing[0]=false;PreferenceManager.getDefaultSharedPreferences(b.getContext()).edit().putBoolean("series_shuffle_"+id,on).apply();SeriesPlayback.toggle(b.getContext(),id,on||continuous.isChecked());});rows=PanelUi.column(b.getContext());box.addView(rows);more=button(b.getContext(),tr("もっと見る","View more","查看更多"));box.addView(more);collapse=button(b.getContext(),tr("折りたたむ","Show less","收合"));collapse.setVisibility(View.GONE);box.addView(collapse);more.setOnClickListener(v->{if(collapsed){collapsed=false;rows.setVisibility(View.VISIBLE);buttons();}else load();});collapse.setOnClickListener(v->{collapsed=true;rows.setVisibility(View.GONE);buttons();});box.addOnAttachStateChangeListener(new View.OnAttachStateChangeListener(){public void onViewDetachedFromWindow(View v){if(active!=null)active.cancel();}public void onViewAttachedToWindow(View v){if(active!=null&&active.cancelled()&&busy){busy=false;load();}}});}
 void load(){if(busy)return;busy=true;more.setEnabled(false);collapse.setEnabled(false);NetworkTask task=new NetworkTask();active=task;task.start(WORK,()->{try{JSONObject d=request("https://nvapi.nicovideo.jp/v1/playlist/series/"+id+"?page="+page+"&pageSize=20","GET",false,task).optJSONObject("data");if(d==null)throw new IOException();JSONArray items=d.optJSONArray("items");int foundTotal=d.optInt("totalCount");MAIN.post(()->{if(task.cancelled())return;busy=false;total=foundTotal;int count=items==null?0:items.length();for(int i=0;i<count;i++){JSONObject row=items.optJSONObject(i);final JSONObject entry=CreatorData.video(row);if(entry!=null)videoRow(rows,entry,"",()->SeriesPlayback.open(box.getContext(),id,entry,continuous.isChecked()||random.isChecked()));}loaded+=count;page++;if(count==0)total=loaded;buttons();});}catch(Exception e){MAIN.post(()->{if(task.cancelled())return;busy=false;more.setEnabled(true);collapse.setEnabled(true);more.setText(tr("再試行","Retry","重試"));});}});}}

```

</details>

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
<summary>[critical] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] possible keystroke capture with network exfil: TextWatcher</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments
 comments. 
 comments; target 
```

</details>

<details>
<summary>[critical] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] cross-app private data access with network: Cookies</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments
 comments. 
 comments; target 
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] sensitive source reaches network sink</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments
 comments. 
 comments; target 
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] possible DNS exfiltration channel: getByName</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments
 comments. 
 comments; target 
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] reflection-hidden behavior with network sink</summary>

```
Last Java crash (retained across restart):
Accept-Ranges: bytes
Connection: close
Content-Length: 
Content-Type: 
  at 
 != 
 %d:%02d
 (100%)
 Response
 bytes
 client=
 comments
 comments. 
 comments; target 
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
