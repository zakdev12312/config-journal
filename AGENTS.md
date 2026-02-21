# AGENTS.md - Agent Guidelines for config-journal

## Project Overview

This is a VitePress documentation site containing personal notes about digital setup, game reviews, movie reviews, and guides. The content is written in Markdown and served via VitePress.

## Build / Development Commands

```bash
# Start dev server with hot reload
npm run docs:dev

# Preview production build locally
npm run docs:preview
```

**Single Test Command:** No test framework is configured. The `npm test` command exits with an error by design.

**No linting configured** - this is a pure markdown documentation project.

---

## Code Style Guidelines

### General Principles

- Keep content clear, concise, and human-readable
- Use British English spelling
- Write in a friendly, opinionated tone (as the personal blog of zakdev12312)

### Markdown Conventions

1. **File Naming**
   - Use lowercase with hyphens for general files: `game-reviews.md`
   - Use emoji prefixes for special pages: `🤖 Titanfall 2.md`, `🪟 Ideal Windows Install Guide.md`
   - Keep filenames descriptive but reasonably short

2. **Heading Structure**
   - Use ATX-style headings (`#`, `##`, `###`)
   - Only use `h1` once per file (the title)
   - Skip `h4` and below unless necessary

3. **Links**
   - Prefer relative links for internal docs
   - Use descriptive link text (not "click here")

4. **Lists**
   - Use `-` for unordered lists
   - Use `1.` for ordered lists
   - Keep list items parallel in structure

### Frontmatter

All markdown files in `docs/` should include frontmatter:

```yaml
---
title: Page Title
editLink: true
---
```

### VitePress-Specific

- Use VitePress-specific features when helpful: custom containers, code groups, tabs
- Enable `editLink: true` to allow GitHub edits
- Follow the sidebar structure in `.vitepress/config.mts` when adding new pages

### Content Guidelines

1. **Game Reviews** (`docs/games/*.md`)
   - Include: Rating (1-10), platform, playtime, verdict
   - Structure: Hook → Gameplay → Story → Graphics/Audio → Verdict
   - Use spoiler warnings if needed

2. **Movie Reviews** (`docs/movies/*.md`)
   - Include: Rating, year, streaming availability
   - Structure: Quick summary → Review body → Verdict

3. **Guides**
   - Numbered steps for sequential instructions
   - Include prerequisites
   - Keep commands copy-pasteable

### No Code

This project contains no JavaScript/TypeScript source code. All "code" is markdown content.

---

## Git Conventions

- Commit messages: clear, concise, in present tense
- Example: `Add Titanfall 2 review`, `Update Windows install guide`
- Do not commit `.vitepress/dist/` (already gitignored)

---

## File Organization

```
.
├── docs/                    # Markdown content (VitePress srcDir)
│   ├── index.md            # Home page
│   ├── games/              # Individual game reviews
│   ├── movies/             # Movie reviews
│   └── *.md                # Guides and pages
├── .vitepress/
│   ├── config.mts          # VitePress configuration
│   └── dist/               # Built output (do not edit)
├── package.json
└── README.md
```

---

## Important Notes

- This is a personal documentation site, not a library or application
- No CI/CD tests run on PRs
- The site is deployed to GitHub Pages at `https://zakdev12312.github.io/config-journal/`
- Edit links point to `https://github.com/zakdev12312/config-journal/edit/main/docs/`
