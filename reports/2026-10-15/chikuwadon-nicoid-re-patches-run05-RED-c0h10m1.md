# chikuwadon/nicoid-re-patches — 2026-10-15

Commit: ad99863185e3eb29d994789539b548275a197a01 | Status: RED | crit:0 high:10 med:1

<details>
<summary>[high] extensions/extension/src/main/java/e/e/a/AccountLists.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.92 — no ban]</summary>

```
 public static void show(Object owner,ArrayList<?> original,String video){try{Activity a=(Activity)Review181.field(owner,"b");VideoDetails.initializeCookies(a);Context c=PlaybackSession.dialogContext(a);ArrayList<Map<String,Object>> folders=new ArrayList<>();for(Object row:original){Map<?,?> map=(Map<?,?>)row;Map<String,Object> f=new HashMap<>();f.put("id",map.get("id"));f.put("title",map.get("title"));folders.add(f);}LinearLayout box=PanelUi.column(c);box.setPadding(PanelUi.dp(c,24),PanelUi.dp(c,8),PanelUi.dp(c,24),0);UiDialogs.insetContent(box);Spinner spinner=new Spinner(c);ArrayAdapter<String> choices=new ArrayAdapter<>(c,android.R.layout.simple_spinner_dropdown_item);for(Map<String,Object> f:folders)choices.add(String.valueOf(f.get("title")));spinner.setAdapter(choices);box.addView(spinner);Button create=PanelUi.button(c,tr(c,"フォルダーを作成","Create folder","建立資料夾"));box.addView(create);EditText note=new EditText(c);note.setHint(tr(c,"メモ","Note","備註"));box.addView(note);AlertDialog dialog=UiDialogs.builder(c).setTitle(UiStrings.translate("マイリスト登録")).setView(box).setPositiveButton(tr(c,"登録","Add","新增"),null).setNegativeButton(tr(c,"キャンセル","Cancel","取消"),null).create();PlaybackSession.showForm(dialog);create.setOnClickListener(v->create(a,(id,name)->{Map<String,Object> f=new HashMap<>();f.put("id",id);f.put("title",name);folders.add(f);choices.add(name);spinner.setSelection(folders.size()-1);}));dialog.getButton(-1).setOnClickListener(v->{int n=spinner.getSelectedItemPosition();if(n<0||n>=folders.size())return;String id=String.valueOf(folders.get(n).get("id")),description=note.getText().toString();dialog.getButton(-1).setEnabled(false);WORK.execute(()->{boolean ok=false;try{String path="https://nvapi.nicovideo.jp/v1/users/me/mylists/"+Uri.encode(id)+"/items?itemId="+Uri.encode(HistoryRules.id(video))+"&description="+Uri.encode(description);VideoDetails.request(path,"POST",true,new NetworkTask());ok=true;}catch(Exception e){android.util.Log.w("nicoid-mylist","Unable to add mylist video: "+e.getClass().getSimpleName());}boolean success=ok;MAIN.post(()->{if(a.isFinishing())return;if(success)dialog.dismiss();else dialog.getButton(-1).setEnabled(true);Toast.makeText(a,tr(a,success?"登録しました":"登録できませんでした",success?"Added":"Unable to add",success?"已新增":"無法新增"),1).show();});});});}catch(Exception e){android.util.Log.w("nicoid-mylist","Unable to display chooser",e);}}
 static void create(Activity a,Created result){Context c=PlaybackSession.dialogContext(a);LinearLayout form=PanelUi.column(c);UiDialogs.insetContent(form);EditText name=new EditText(c);name.setSingleLine(true);name.setHint(tr(c,"フォルダー名","Folder name","資料夾名稱"));form.addView(name);CheckBox publicList=new CheckBox(c);publicList.setText(tr(c,"公開する","Public","公開"));form.addView(publicList);AlertDialog d=UiDialogs.builder(c).setTitle(tr(c,"フォルダーを作成","Create folder","建立資料夾")).setView(form).setPositiveButton(tr(c,"作成","Create","建立"),null).setNegativeButton(tr(c,"キャンセル","Cancel","取消"),null).create();PlaybackSession.showForm(d);d.getButton(-1).setOnClickListener(v->{String title=name.getText().toString().trim();if(title.isEmpty()){name.setError(tr(c,"名前を入力してください","Enter a name","請輸入名稱"));return;}boolean isPublic=publicList.isChecked();d.getButton(-1).setEnabled(false);WORK.execute(()->{String id="";try{JSONObject data=VideoDetails.request("https://nvapi.nicovideo.jp/v1/users/me/mylists?name="+Uri.encode(title)+"&description=&isPublic="+isPublic+"&defaultSortKey=addedAt&defaultSortOrder=desc","POST",true,new NetworkTask()).getJSONObject("data");id=data.optString("mylistId");if(!id.matches("[0-9]+"))throw new java.io.IOException();}catch(Exception e){android.util.Log.w("nicoid-mylist","Unable to create folder: "+e.getClass().getSimpleName());id="";}String created=id;MAIN.post(()->{if(a.isFinishing())return;if(!created.isEmpty()){d.dismiss();result.done(created,title);}else{d.getButton(-1).setEnabled(true);name.setError(tr(c,"作成に失敗しました","Unable to create","建立失敗"));}});});});}

```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/e/e/a/CreatorPage.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.92 — no ban]</summary>

```
    private static void unfollowChannel(LinearLayout rows,View row,JSONObject channel){Context c=rows.getContext();Activity a=c instanceof Activity?(Activity)c:null;android.app.AlertDialog d=UiDialogs.builder(PlaybackSession.dialogContext(c)).setMessage(channel.optString("name")+"\n"+tr(c,"フォローを解除しますか？","Unfollow this channel?","取消追蹤此頻道？")).setPositiveButton(tr(c,"フォロー解除","Unfollow","取消追蹤"),(x,w)->{row.setEnabled(false);NetworkTask task=new NetworkTask();task.start(WORK,()->{boolean ok=false;try{VideoDetails.initializeCookies(c);ModernPosting.jsonPost("https://public-api.ch.nicovideo.jp/v1/user/follow",new JSONObject().put("channelId",Long.parseLong(channel.optString("id").replaceFirst("^ch",""))).put("mode","delete"),task);ok=true;}catch(Exception e){android.util.Log.w("nicoid-creator","Unable to unfollow channel: "+e.getClass().getSimpleName());}boolean success=ok;MAIN.post(()->{if(a!=null&&a.isFinishing())return;if(success){int n=rows.indexOfChild(row);if(n>=0){if(n+1<rows.getChildCount()&&rows.getChildAt(n+1).getLayoutParams().height<=PanelUi.dp(c,2))rows.removeViewAt(n+1);rows.removeView(row);}}else{row.setEnabled(true);Toast.makeText(c,tr(c,"フォロー解除に失敗しました","Unable to unfollow","取消追蹤失敗"),1).show();}});});}).setNegativeButton(tr(c,"キャンセル","Cancel","取消"),null).create();PlaybackSession.showDialog(d);}

```

</details>

<details>
<summary>[high] extensions/extension/src/main/java/e/e/a/ModernPosting.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.92 — no ban]</summary>

```
 public static void later(Object owner,String video){try{Activity a=(Activity)get(owner,"b");VideoDetails.initializeCookies(a);String id=HistoryRules.id(video);AlertDialog d=UiDialogs.builder(PlaybackSession.dialogContext(a)).setTitle(UiStrings.translate("とりあえずマイリスト登録")).setMessage(id).setPositiveButton(tr(a,"登録","Add","新增"),(x,w)->{if(!VideoDetails.cookie().contains("user_session=")){message(a,tr(a,"ログインが必要です","Sign in required","請先登入"));return;}synchronized(BUSY){if(!BUSY.add(owner))return;}WORK.execute(()->{boolean ok=false;try{VideoDetails.request("https://nvapi.nicovideo.jp/v1/users/me/watch-later?watchId="+UriEncode(id),"POST",true,new NetworkTask());ok=true;}catch(Exception e){android.util.Log.w("nicoid-list","Watch-later submission failed: "+e.getClass().getSimpleName());}finally{synchronized(BUSY){BUSY.remove(owner);}}boolean success=ok;MAIN.post(()->message(a,tr(a,success?"登録しました":"登録できませんでした",success?"Added":"Unable to add",success?"已新增":"無法新增")));});}).setNegativeButton(tr(a,"キャンセル","Cancel","取消"),null).create();PlaybackSession.showDialog(d);}catch(Exception e){android.util.Log.w("nicoid-list","Unable to prepare watch-later dialog",e);}}

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
<summary>[info] patches/src/main/resources/nicoid/resources.zip — binary asset added/changed — cannot review textually</summary>

```
(binary diff)
```

</details>

<details>
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] possible keystroke capture with network exfil: TextWatcher [llm: benign 0.6 — no ban]</summary>

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
<summary>[high] patches/src/main/resources/nicoid/helpers.mpe — [binary strings] same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.7 — no ban]</summary>

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
<summary>[high] patches/src/main/resources/nicoid/method-delta.dex — [binary strings] same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.72 — no ban]</summary>

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
