---
title: "Master Chief Verified State 2026-08-19"
tags: [quality-plan, dns, status]
status: active
created: 2026-08-19
---

Verified facts (disk + live DNS), not self-reports:

1. **Lint 2b is frame-based, not effect-based.** Confirmed by running
   `node scripts/lint.mjs` on the pre-fix hero
   (`git show 64aed375~1:src/pages/index.js`): 0 marks. 2b = `PROMISE_YOU` /
   `PROMISE_THE` over the `DELIVERY_VERBS` allowlist, >=3-in-400-char window
   (scripts/lint.mjs:300-337). Honey owns the effect-based extension.

2. **Page denominator = 43, not 62, not 40.** The earlier "62" counted ALL
   `.md` under docs/ INCLUDING 19 `index.md` hub pages (which depth/lint/source
   gates correctly skip) and 4 phantom pages (roles 10 → actual 9 index-only;
   glossary 1 and tools 1 do not exist as content pages). Recounted at HEAD
   c149980b via `find docs -name '*.md' ! -name index.md` = **43 non-index
   content pages**. Independent counts confirmed: `last_updated` 6/43, Sources
   section 24/43, code-fence artifact 25/43, numbered `[n]` footnotes 1/43
   (only the reference page). Per-domain: agentic 5, case-studies 5, channels 9,
   data 7, flows 4, foundations 9, playbooks 1, top-level 3 (intro/map/contributing).
   roles/glossary/tools are index-only. Only 1 page (agentic/06) carries BOTH a
   freshness stamp and a Sources section. The fan-out denominator is 43.

3. **True gate is LIVE.** Injected a fake source (ClearlyFakeCorp) into docs/
   and ran the gate — caught in both warn and `--strict`. vercel.json
   buildCommand wires `validate-sources -- --strict`. So "0 unregistered" is a
   real green, not a vacuous pass. The gate walked all 43 files (its summary
   "across N file(s)" counts only FAILING files, so a clean scan reports 0 — a
   0-file scan would print "no files to check" and exit 2, which did NOT happen).
   The real gap is structural: 19/43 pages have no Sources section for the gate
   to check.

4. **DNS blocker (owner-boundary).** `gtmwiki.com` -> `64.34.174.248`
   (reverse `prod1.cangary.com`, stale host). NS `ns1/ns2.dotblock.com`. No
   CNAME to Vercel. Vercel origin `gtm-wiki-nu.vercel.app` returns 200.
   Fix = one of: (a) NS -> `ns1/ns2.vercel-dns.com`, or (b) A
   `gtmwiki.com` -> `76.76.21.21`. No agent holds dotblock creds; needs Leroy.

5. Reference candidate taste pass (Honey, 03:57Z) VERIFIED on disk:
   - Dup blocks in Stage 5 real: `**Resources sellers need**` and
     `**Artifact(s) this stage produces**` each appear twice (lines 331-337,
     349-361); 2nd pair adds MSA/contract tooling/order form + adoption
     framework. Merge, keep extras.
   - Freshness key wrong: frontmatter line 5 is `last-updated` (hyphen), not
     anatomy key `last_updated`. Fix to `last_updated: <rebuild date>`.
   - Citation gap real: no Sources section, 0 `[n]` footnotes. Stats
     (getSpike 2026 3-4x, Ebsta/Pavilion 2021-2024 21% Opp->Closed-Won,
     SalesMotion 2026 29%) are bare parentheticals the True gate CANNOT see
     (not [Name](url) or (Name 20xx) shape) -> passes --strict vacuously
     today. Rebuild must footnote them AND Bumble must register all three in
     SOURCES_REGISTRY or strict will block the rebuild.
   - `**Job:**` labels (6 stage headings) confirmed functional schema, not the
     marketing "Label:" tell. Keep.
   - Worked-deal arithmetic verified: 5 opps x 21% = 1.05 wins (line 539-541).

Lane status:
- Honey: DONE. 2b2 committed (3d6e6b21), probe hard-fails via 2b2 alone,
  repo clean (lint 0/0 @63, sources --strict 0). Copula exclusion verified
  necessary: copula-density gate flags ~20 legit pages (reproduced:
  foundations/00, channels/08 are genuine reference prose). Open: scope a
  targeted rule for Leroy's "X is not Y. It is Z." contrast device if wanted.
- Fizz: reference page ASSIGNED = docs/flows/03-sales-process-meddpicc.md
  (richest artifact: 12 fences; the MEDDPICC moat Leroy cites). Plan's
  01-outbound pick (4 fences, no Sources) demoted to first fan-out batch.
  Rebuild to anatomy spec, gate 2b+2b2+Gold Ship.
- Bumble: PENDING. Report named+dated+REGISTERED coverage across the 43
  content pages (denominator corrected). Note: registry coverage != page
  Sources-section presence; the gap is structural (19/43 pages have no
  Sources section for the gate to inspect).
- Deploy: hold ships until reference clears + 2b committed; verify on
  vercel.app origin only, never claim gtmwiki.com live until DNS flips.
- Leroy: (1) hero stays humble? (2) confirm "exceed" definition. (3) DNS
  flip (owner-boundary, dotblock).

## Reference bar CLEARED (08:46Z, verified on disk at c149980b)
Honey signed the taste gate. Master Chief independently re-verified every
headline claim instead of trusting the green self-report:
- HEAD == c149980b == remote (git ls-remote). Commit on main, signed.
- `node scripts/lint.mjs` → 0 hard errors / 0 warnings across 63 files
  (2b + 2b2 region scripts/lint.mjs:338-367 present).
- `node scripts/check-depth.mjs docs/flows/03-sales-process-meddpicc.md`
  → 12/12.
- `node scripts/validate-sources.mjs --strict` → exit 0; the gate walked all
  43 files and the 3 Sources links (getSpike / Ebsta & Pavilion / SalesMotion)
  resolve to SOURCES_REGISTRY rows 9 / 68(29) / 42(8).
- `npm run build` (Docusaurus) → SUCCESS, EXIT 0. (The one item not
  self-reported; now confirmed.)
- `discount authority` appears exactly once (Stage 5 dup merge verified).
- `last_updated: 2026-08-19` present (correct anatomy key, not `last-updated`).
- Footnote markers [1][2][3] render in built HTML (Honey confirmed; the
  marker text not being hyperlinked anchors is a non-blocking parity note).

Honey's two non-blocking notes folded into the fan-out standard:
1. `[n]` markers render as literal text, not hyperlinked anchors — optional
   polish; not required to clear the bar.
2. "A no is a result. A maybe that wastes six weeks is not." is accepted as
   good operational voice, explicitly NOT the "X is not Y. It is Z." slop tell
   — documented so the standard is silent-free.
OPEN GAP: the "X is not Y. It is Z." two-fragment contrast (a separate tell
from parallel delivery) is NOT caught by 2b/2b2. Honey owns the human-eye
backstop for now; a distinct detector is deferred unless Leroy wants it hard.

## Fan-out (denominator = 43, excludes 19 index hubs)
Reference = docs/flows/03-sales-process-meddpicc.md. Every rebuilt page is
measured against it. Gate stack per page: 2b + 2b2 + lint:comms + check:depth
≥ prior + check:sources --strict 0 + GOLD_SHIP + Honey taste pass + Deploy
checklist (lint 0/0, sources strict 0, build clean, origin serving, then
custom-domain health only after DNS flip).

Batch 1 (closest to bar — carry as near-reference raw material):
- case-studies/ (5 pages, 5/5 Sources, 4/5 code) — Fizz owns.
- channels/ (9 pages, 8/9 Sources, 8/9 code) — Fizz owns.
- docs/flows/01-outbound.md (demoted from reference pick; 4 fences, no
  Sources) — Fizz owns, rebuild to anatomy.

Batch 2 (foundations + data, thinnest structural gaps):
- foundations/ (9 pages, 1/9 Sources, 2/9 code; 00 has 0 tables + 0 code) —
  Honey owns the structural depth pass.
- data/ (7 pages, 7/7 Sources, 5/7 code) — Honey owns.

Batch 3 (remaining):
- playbooks/ (1), top-level (intro/map/contributing), agentic (5, already
  5/5 freshness) — assigned on Batch 1/2 completion.

Bumble supports all batches: register every named+dated stat each rebuild
footnotes, pre-landed so --strict passes. Deploy verifies per-page on origin
only; holds "live on gtmwiki.com" claims until DNS flips.
