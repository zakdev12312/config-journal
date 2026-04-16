# Config Journal — backlog/ fix list

Prioritised improvements from a project review (tooling, consistency, and maintenance). Re-order as you like.

## High priority

- **Fix README “About the Vault” link** — In `README.md` (around line 32), the link is `[About the Vault →](docs/📦%20About%20the%20Vault.md)`. That path encodes a filename with a leading emoji and spaces (`📦 About the Vault.md`), but **no file with that name exists** in `docs/`. The published page is sourced from `docs/about-the-vault.md` (kebab-case, no emoji), which VitePress serves as `/about-the-vault/`. Anyone clicking the README link on GitHub gets a **missing file** in the repo browser. **Fix:** Point the link at the real file, e.g. `docs/about-the-vault.md` (relative from repo root), so the raw README and GitHub’s file view resolve correctly and stay aligned with the site’s canonical slug. ✅
- **Fix Issues URL typo** — In `README.md` (around line 42), the Issues link uses `https://github.com/zakdev12312/config-jornal/issues` — `**config-jornal` is misspelt** (missing the second **u** in “journal”). GitHub will return **404** for that URL because the repository is `config-journal`, not `config-jornal`. **Fix:** Replace the segment with `config-journal` so the link opens the real repo’s Issues tab. Double-check in the browser after editing, since this is easy to regress when copying URLs. ✅
- **Resolve `About Me.md` vs `about-me.md`** — Two different pages exist. The sidebar uses `/about-me` (the kebab-case file). `About Me.md` has no frontmatter and is not listed in the sidebar; it may be dead weight or should be merged/redirected to avoid confusion and duplicate content. ✅

## Medium priority

- **Frontmatter vs `AGENTS.md`** — Project rules require `title` and `editLink: true` on every `docs/` page, but almost no markdown files include them (only a couple mention `editLink`). Either run a bulk pass to add minimal frontmatter site-wide, or update `AGENTS.md` to reflect what you actually enforce. ✅
- **Generator templates** — `new-note.mjs` and `new-review.mjs` omit `editLink: true` (and `new-review.mjs` omits it while `new-game.mjs` includes it). Align all three with the same frontmatter contract. ✅
- `**ignoreDeadLinks: true` in VitePress** — Broken internal links are silently ignored at build time. Consider setting this to `false` (or using a stricter policy) and fixing any reported links so regressions show up in CI. ✅
- `**package.json` `main` field** — `"main": "index.js"` is set but there is no `index.js` at the repo root. Remove the field or add a real entry point if something depends on it. ✅
- **CI Node version story** — Workflow sets `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` but uses `node-version: 20` for the build. Align versions (and the env flag) so local, CI, and Actions behaviour are predictable.
- **Duplicate disclaimer files** — Root-level `DISCLAIMER.md` / `windowsdisclaimer.md` mirror content under `docs/`. Decide a single source of truth (or document why both exist) so edits are not missed.
- `**games.md` vs `game-reviews.md`** — Both look like game hub pages; `game-reviews.md` appears unused in navigation and grep. Merge, delete, or add a sidebar/link entry so there is one obvious entry point.

## Low priority

- **Footer copy** — Theme footer has a stray space: `CC-BY-4.0 license .` — tidy punctuation in `.vitepress/config.mts`.
- `**docs/LICENSE.md` copyright line** — Still says `© zakdev12312 2025` while the site footer uses 2026; refresh when you do annual housekeeping.
- **Filename conventions** — `AGENTS.md` prefers lowercase kebab-case; some movie files use PascalCase (`The-Adam-Project.md`, etc.). Harmless for URLs, but renaming would match stated conventions (only if you accept broken external links risk).
- **Node/tooling pins** — Optional: add `engines` in `package.json` or an `.nvmrc` matching CI so contributors know which Node to use.
- **Dependencies** — Periodically bump `vitepress` (and transitive deps) after checking release notes; no urgent issue noted on current `^1.6.4`.
- `**npm test`** — Script is intentionally `exit 1` per `AGENTS.md`. A one-line comment in `package.json` or README prevents “fix the tests” confusion for new contributors.

