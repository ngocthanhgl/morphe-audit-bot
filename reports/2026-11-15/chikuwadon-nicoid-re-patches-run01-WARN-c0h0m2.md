# chikuwadon/nicoid-re-patches — 2026-11-15

Commit: fecc994e5119c96332b88151a7b833e16051db47 | Status: WARN | crit:0 high:0 med:2

<details>
<summary>[medium] extensions/extension/src/main/java/e/e/a/ChannelFeed.java — new non-allowlisted URL or IP</summary>

```
  DocumentBuilderFactory factory=DocumentBuilderFactory.newInstance();factory.setNamespaceAware(true);
  // On standard Java, reject DTDs in the XML parser itself. Android's
  // Harmony DocumentBuilderFactory (including API 34) only recognizes
  // namespaces/validation, so its unsupported feature must not prevent
  // ordinary channel RSS feeds from loading. The strict DTD precheck above
  // rejects XML entity declarations before the Android parser sees the input.
  boolean androidHarmony="org.apache.harmony.xml.parsers.DocumentBuilderFactoryImpl"
      .equals(factory.getClass().getName());
  try {
   factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl",true);
  } catch(ParserConfigurationException unsupported) {
   if(!androidHarmony)throw unsupported;
  }
  if(!androidHarmony){
   factory.setFeature("http://xml.org/sax/features/external-general-entities",false);
```

</details>

<details>
<summary>[medium] extensions/extension/src/main/java/e/e/a/DetailData.java — new non-allowlisted URL or IP</summary>

```
 static String target(JSONObject item){String watch=item.optString("watchURL","");if(HistoryRules.watchUrl(watch,true))return watch.replace("http://","https://");String id=item.optString("globalId",item.optString("watchId",item.optString("id","")));if(id.matches("(?:sm|nm|so|ss)[0-9]+")||item.optString("contentKind").equals("video")&&id.matches("[0-9]+"))return "https://www.nicovideo.jp/watch/"+id;return watch.isEmpty()?"https://commons.nicovideo.jp/works/"+id:watch;}

```

</details>


__
