# MorpheApp/morphe-patches — 2026-11-27

Commit: 10b58e236a6ea07632a94eddf7e866a22336f5e2 | Status: WARN | crit:0 high:0 med:1

<details>
<summary>[medium] .github/scripts/issue-triage/analyze.js — new non-allowlisted URL or IP</summary>

```
// Analyzes a new issue with an AI model through the OpenRouter API, and sets the "decision" output
// to the triage decision as JSON. apply.js validates the decision and makes the changes.
//
// The model can search and read other issues of the repository with the tools below, to find duplicates.
// The issue text is written by anyone, so the model and its reply are treated as untrusted. This job only
// has read access, the tools only read issues of this repository, and apply.js validates every field.
// The prompt and the fields of the decision are in triage-prompt.js.

const { escapeHtml } = require('./common.js');
const { SYSTEM_PROMPT, FLAG_FIELD, MISSING_INFO_KEYS } = require('./triage-prompt.js');

// Tried in order, until one returns a usable decision, such as when a model is not available.
const MODELS = ['google/gemma-4-31b-it', 'google/gemma-4-26b-a4b-it', 'google/gemma-3-27b-it'];

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
```

</details>


__
