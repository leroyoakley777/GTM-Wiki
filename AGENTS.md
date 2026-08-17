# Project: GTM Wiki

Open-source Go-to-Market resource. Purpose: demonstrate Mitch's
expertise, serve as a networking tool, and be genuinely helpful.
Quality bar: the Hermes Bible (hermesbible.com).

## Stack
- Framework: Docusaurus 2 (classic preset)
- Hosting: Vercel (planned, not yet connected)
- Domain: gtmwiki.com (planned)
- GitHub: github.com/opengtm/gtm-wiki (planned, no remote set yet)

## Current State (June 22 2026)
- Scaffold only: 4 doc pages exist
  - docs/intro.md (9 lines)
  - docs/frameworks/00-gtm-strategy-framework.md (31 lines)
  - docs/frameworks/01-gtm-channels-bullseye.md (31 lines)
  - docs/roles/founders/index.md (3 lines — stub)
- No git remote configured
- No Vercel deployment
- Not built or tested locally yet

## Structure
docs/
├── intro.md
├── frameworks/
│   ├── 00-gtm-strategy-framework.md
│   └── 01-gtm-channels-bullseye.md
├── roles/
│   ├── founders/
│   ├── sdrs/
│   ├── aes/
│   ├── revops/
│   └── investors/
└── playbooks/

## Build Commands
- Dev: `npm start`
- Build: `npm run build`
- Deploy: push to main (Vercel auto-deploy, once connected)

## Conventions
- Every page: frontmatter with sidebar_position
- Frameworks numbered (00-, 01-, etc.)
- Roles have index.md per subdirectory
- Cross-reference between pages with relative links
- First-principles approach, not tactic copy-paste

## Known Build Traps (both have broken builds before)
- **NN-prefix / slug stripping.** Docusaurus strips the leading `NN-` from a
  filename when generating the URL. File is `01-outbound.md`, but the URL and
  every cross-link is `/docs/flows/outbound` — never `…/flows/01-outbound.md`.
  Cross-link with the unprefixed slug.
- **Bare `<digit` is parsed as MDX JSX.** Writing `under 15 min` as `<15 min`, or
  `<5%`, in a Docusaurus page fails the build — MDX reads it as a JSX tag. Escape
  it: `&lt;15 min`, `&lt;5%`, or rephrase "under 15 min". Same trap bites any
  `<digit` phrasing.

## Priority
- Connect git remote + GitHub repo
- Deploy to Vercel
- Expand content depth (current pages are thin)
- Make progress visible to Mitch at all times

## Never
- Publish without Mitch reviewing
- Use placeholder content — every page should have real substance
