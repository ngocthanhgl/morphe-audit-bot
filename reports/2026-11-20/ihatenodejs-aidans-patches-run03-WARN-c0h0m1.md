# ihatenodejs/aidans-patches — 2026-11-20

Commit: 50db65c9137e96b27f8239e1c3ce1cfe76eaa3aa | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] scripts/sync-fizz-version.ts — new non-allowlisted URL or IP</summary>

```
interface FizzVersion {
}
function normalizeVersionCode(
  value: number | string | null | undefined,
): string | null {
  return value != null && String(value).trim() !== ''
    ? String(value).trim()
    : null;
}
async function fetchStatusFizzVersion(): Promise<FizzVersion> {
    versionCode: normalizeVersionCode(fizzRecord.playVersionCode),
async function fetchLatestFizzVersion(): Promise<FizzVersion> {
  const versionUrl =
    process.env.WORKER_VERSION_URL ||
    'https://worker.patch.p0ntus.com/api/version/com.ashtoncofer.Buzz';
```

</details>


__
