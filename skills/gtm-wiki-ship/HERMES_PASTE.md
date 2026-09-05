# Paste this into Hermes

Copy everything below the line into a Hermes chat. That is how the
agent learns the skill with `skill_manage`. The files in this folder
are the same skill, versioned in git.

---

Create a Hermes skill named `gtm-wiki-ship` with skill_manage.

Save it under my user skills so I can invoke it later with
"/gtm-wiki-ship" or "use the gtm-wiki-ship skill".

Repo: github.com/leroyoakley777/GTM-Wiki
Live: https://gtm-wiki-nu.vercel.app
Orders on disk: STANDARDS/HERMES_SHIP.md
Skill source in repo: skills/gtm-wiki-ship/SKILL.md

What the skill does:
1. git fetch && checkout main && pull --ff-only
2. Read STANDARDS/HERMES_SHIP.md and IMPROVEMENT-BACKLOG.md
3. Take the first open backlog item. One page only.
4. Edit. Stamp last_updated. Register new citations.
5. Run:
   node scripts/lint.mjs <page>
   node scripts/lint-comms.mjs <page>
   node scripts/scan-slop.mjs <page>
   node scripts/validate-sources.mjs --strict --file <page>
6. On those green, run npm run ship:gate
7. On exit 0, commit and git push origin main
8. Report the commit SHA. No SHA means not shipped.

Never git commit --no-verify.
Never skip a red gate.
If ship:gate fails on a file I did not touch, stop and report the first error.

If $HOME/.hermes/plans/gtm-wiki/OPERATING_CONTEXT.md is missing, create it
as a pointer to STANDARDS/HERMES_SHIP.md. Then continue.

After you create the skill, confirm the path on disk and run preflight
from the GTM-Wiki clone.
