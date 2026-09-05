# GTM Wiki

Open-source go-to-market reference for founders, operators, and builders.
Live site: [gtm-wiki-nu.vercel.app](https://gtm-wiki-nu.vercel.app)

This is a Docusaurus wiki, not a blog. Each page is a definition, a
framework, and a runnable artifact, with named sources.

## Start here

| If you want | Go here |
|---|---|
| Read the wiki | [gtm-wiki-nu.vercel.app](https://gtm-wiki-nu.vercel.app) |
| How pages are organized | [docs/intro.md](docs/intro.md), [docs/map.md](docs/map.md) |
| Quality bar | [STANDARDS/GOLD_SHIP_STANDARD.md](STANDARDS/GOLD_SHIP_STANDARD.md) |
| How to ship a page | [STANDARDS/HERMES_SHIP.md](STANDARDS/HERMES_SHIP.md) |
| Hermes skill | [skills/gtm-wiki-ship/](skills/gtm-wiki-ship/) |

## Local dev

```bash
npm install
npm start
```

## Ship gates

Vercel builds `main` with the same command as:

```bash
npm run ship:gate
```

That runs lint, lint-comms, slop scan, source check, freshness check, then
the Docusaurus build. Exit 0 is the only green.

Useful commands:

```bash
npm run check          # local full gate (includes depth)
npm run lint           # taste + build traps
npm run lint:comms     # voice tokens + passive scent
npm run check:sources -- --strict
npm run build
```

## Repo layout

```
docs/          published pages
src/           site chrome (home, CSS)
scripts/       machine gates
STANDARDS/     quality bar and ship orders (not published)
RESEARCH/      source registry and internal notes
skills/        Hermes skill for shipping the wiki
```

Cross-links use the unprefixed slug. File `docs/flows/01-outbound.md`
is `/docs/flows/outbound`, never `./01-outbound.md`.

## Contribute

Read [docs/contributing.md](docs/contributing.md) before you add a page.
Every numbered stat needs a row in
[RESEARCH/gtm-wiki/SOURCES_REGISTRY.md](RESEARCH/gtm-wiki/SOURCES_REGISTRY.md).

## License

MIT. See [LICENSE](LICENSE).
