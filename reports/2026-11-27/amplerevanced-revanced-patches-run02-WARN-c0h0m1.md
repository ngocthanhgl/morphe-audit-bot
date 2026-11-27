# AmpleReVanced/revanced-patches — 2026-11-27

Commit: 681755cd88abd13de9a58cd12214aa23635ecea7 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] .github/scripts/issue-triage/triage.js — new non-allowlisted URL or IP</summary>

```
// AI issue triage using the OpenRouter API. Setup: https://github.com/MorpheApp/morphe-patches-template#-ai-issue-triage
//
// - New issues get a title that matches the body.
// - Issues without enough information to act on are closed, with a comment that asks for the details.
// - An edit or comment of the author after that gets the issue checked again, which can reopen it.
//   This happens at most MAX_RECHECKS times.
//
// The issue text is written by anyone, so the AI reply is treated as untrusted.
// Every field is validated, and comments are built only from the fixed text in this file.

// Tried in order, until one returns a usable reply.
// The repository variable OPENROUTER_MODEL replaces this list. Separate multiple models with commas.
const DEFAULT_MODELS = [
  'google/gemma-4-26b-a4b-it:free',
  'google/gemma-4-31b-it:free',
```

</details>

<details>
<summary>[info] patches/build.gradle.kts — new external dependency added — verify coordinates</summary>

```
    implementation(libs.morphe.patches.library) {
        // The patcher-provided classpath supplies the matching Smali revision.
        exclude(group = "com.github.MorpheApp.smali")
    }

```

</details>


__
