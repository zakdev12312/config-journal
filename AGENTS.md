# Agent Guidelines: config-journal

This document outlines the core instructions, constraints, and operational workflows for AI agents working on this repository.

## Project Context
The `config-journal` project is a VitePress documentation site. It acts as a personal collection of digital setup notes, game/movie reviews, and technical guides.

- **Source Location**: `docs/`
- **Standard Language**: British English (opinionated tone).
- **Owner**: zakdev12312

## Command Reference
Use these commands to manage the site and generate content.

| Command | Action | Implementation |
| :--- | :--- | :--- |
| `npm run docs:dev` | Start development server | VitePress Dev |
| `npm run docs:build` | Build static site | VitePress Build |
| `npm run docs:preview` | Preview build locally | VitePress Preview |
| `npm run review` | Create movie review | `node new-review.mjs` |
| `npm run note` | Create general note | `node new-note.mjs` |
| `npm run game` | Create game review | `node new-game.mjs` |
| `npm test` | *Do not run* | (Intentional exit 1) |

## Version Control

Agents interact with git via **CLI commands only** (not the IDE's Source Control panel). The following operations require **explicit user permission** before execution:

- `git commit` — **Never autonomous**
- `git push` — **Never autonomous**

Agents may check status (`git status`, `git log`) without asking, but **must request permission** before creating commits or pushing to remote. The user should be informed of the changes before they are committed and pushed. Additionally the agent should not use the `git add` command without the user's explicit instruction.

## Operational Workflows

### Verification Protocol
1. **Always Verify**: Check all changes before completion. Use `npm run docs:dev` or `npm run docs:build` to ensure no broken links or syntax errors.
2. **Permission First**: Request user permission before executing any state-changing command.

### Error Protocol
If an error occurs:
1. **STOP** immediately.
2. Present the error logs to the user.
3. Ask for permission to **"debug"** or **"stop"**.
4. Do **not** attempt automated fixes without explicit confirmation.

---

## Code & Content Standards

### General Principles
- **Spelling**: Strictly British English (e.g., `-ise` not `-ize`, `colour`, `labour`).
- **Tone**: Maintain a friendly and individualistic personality.

### Markdown Conventions
- **Filenames**: Use `lowercase-kebab-case.md`. No emojis or special characters.
- **Headings**: Use ATX-style (`##`). Exactly one `h1` (#) per file.
- **Structure**: Avoid `h4` and below unless necessary.
- **Links**: Internal links MUST be relative. Link text must be descriptive.
- **Lists**: Use `-` for unordered and `1.` for ordered.

### Frontmatter Requirement
Every file in `docs/` must include a frontmatter block:
```yaml
---
title: Page Title
editLink: true
---
```

### VitePress Specifics
- Use custom containers (`::: info`, `::: tip`) where appropriate.
- **Sidebar**: You MUST update `.vitepress/config.mts` when adding or moving pages.
- **Edit Links**: `editLink: true` is mandatory for all documentation pages.

## Directory Structure
- `docs/`: Markdown source files.
  - `index.md`: Home page.
  - `games/`: Folder for game reviews.
  - `movies/`: Folder for movie reviews.
  - `*.md`: Guides and general notes.
- `.vitepress/`: Core configuration and sidebar settings.
- `package.json`: Scripts and dependencies.

## Deployment & Reference
- **Deployment**: https://zakdev12312.github.io/config-journal/
- **Source Config**: `.vitepress/config.mts`
- **GitHub Edit URL**: `https://github.com/zakdev12312/config-journal/edit/main/docs/`