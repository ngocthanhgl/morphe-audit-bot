# chikuwadon/nicoid-re-patches — 2026-10-27

Commit: 96e2184e3eea9ed1259b363ca517e650f177bc1d | Status: RED | crit:0 high:1 med:3

<details>
<summary>[medium] patches/src/main/resources/nicoid/method-delta.dex — native binary added/changed — cannot review textually</summary>

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
<summary>[high] porting/revisions/v1.9.9/src/e/e/a/AccountRemoval227.java — same-app stored data/cookies with network — verify same-site: Cookies [llm: benign 0.9 — no ban]</summary>

LLM review: benign (0.9, benign-other): The code removes watch-later/mylist membership items by calling nicovideo's own API (nvapi.nicovideo.jp) using cookies initialized from the app context. The network destination is the same service the client is built for, so cookie+network usage is same-site and expected for authenticated API calls. No exfiltration to third parties, backdoor, spyware, or supply-chain behavior is visible.

```
package e.e.a;
import android.app.*;import android.view.*;import android.widget.*;import android.os.*;import android.net.Uri;import java.util.*;import java.util.concurrent.*;
/** Deletes list membership, never the list itself. Failed rows remain selected. */
public final class AccountRemoval227 {
 static final ExecutorService WORK=Executors.newSingleThreadExecutor();static final Handler MAIN=new Handler(Looper.getMainLooper());static final Set<Object> BUSY=Collections.newSetFromMap(new IdentityHashMap<Object,Boolean>());
 static int kind(Activity a){try{int type=a.getClass().getField("E").getInt(a);return type==9?2:type==5?1:0;}catch(Exception e){return 0;}}
 static boolean skip(Activity a,CharSequence label){int k=kind(a);return k>0&&String.valueOf(label).equals(UiStrings.translate(k==2?"とりあえずマイリスト登録":"マイリスト登録"));}
 static String path(boolean later,String list,Object row)throws Exception{
  String id=ListActions.value(row,later?"videourl":"item_id");if(later)id=HistoryRules.id(id);
  if(later&&!id.matches("(?:sm|nm|so|ss)?[0-9]+")||!later&&(!list.matches("[0-9]+")||!id.matches("[0-9]+")))throw new IllegalArgumentException("Invalid membership identifier");
  return "https://nvapi.nicovideo.jp/v1/users/me/"+(later?"watch-later?watchIds=":"mylists/"+Uri.encode(list)+"/items?itemIds=")+Uri.encode(id);
 }
 public static boolean delete(Object owner,ArrayList<?> chosen){
  final Activity a;final boolean later;final String list;try{a=(Activity)Playback214.get(owner,"o0");int type;try{type=((Number)Playback214.get(owner,"g0")).intValue();}catch(Exception missing){return false;}int k=type==9?2:type==5?1:0;if(k==0)return false;later=k==2;list=String.valueOf(Playback214.get(owner,"d0"));}catch(Exception e){return false;}
  if(!BUSY.add(owner))return true;VideoDetails.initializeCookies(a);final ArrayList<Object> selected=new ArrayList<Object>(chosen);WORK.execute(()->{
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
