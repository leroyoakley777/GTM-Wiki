# Contributing

The live contribution standard is [docs/contributing.md](docs/contributing.md).
Read that first. This file is the short repo version.

## Bar

A page ships only when `npm run ship:gate` exits 0.

- Every numbered stat has a source and a date
- That source is registered in `RESEARCH/gtm-wiki/SOURCES_REGISTRY.md`
- Voice clears `scripts/lint.mjs` and `scripts/lint-comms.mjs`
- Links use the unprefixed slug
- Frontmatter includes `status`, `tags`, and `last_updated`

Do not put team notes in `docs/`. Those live in `STANDARDS/` or `RESEARCH/`.

## Workflow

1. Fork or branch from `main`
2. Edit one page
3. Run `npm run ship:gate`
4. Open a pull request with the gate result

Questions: open a GitHub issue.
