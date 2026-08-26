# Deploy Readiness Checklist

The GTM Wiki auto-deploys to Vercel on every push to `main` (domain: gtm-wiki-nu.vercel.app).  
Deploy readiness means **all quality gates pass** on the commit intended for push.

## ✅ Pre‑Push Quality Gates (Hard)

| Gate | Status | Required? | Notes |
|------|--------|-----------|-------|
| Lint (scripts/lint.mjs) | PASS | **YES** | 0 hard errors, 0 warnings across 84 files |
| Source True Gate (validate-sources.mjs --strict) | PASS | **YES** | 0 unregistered citations |
| Depth Gate (check-depth.mjs) | WARN‑only | NO (warn‑only) | Missing slots reported; not blocking |
| Scan‑Slop (scan-slop.mjs) | WARN‑only | NO (warn‑only) | 224 candidates; improving recommended |
| Build (npm run build) | PASS | **YES** | Must succeed before Vercel builds |
| Rendered‑Eye Check (manual) | PASS | **YES** | No overflow/clipping, SVG measured |
| Cross‑link Integrity (manual) | PASS | **YES** | No orphan pages, no broken links |

## 🔐 Owner‑Yes Hard Gate

- **Public push to `main`** requires explicit **OWNER‑YES** (Leroy Oakley) after all hard gates pass.  
  This is a **HARD** gate: no push without owner approval.

## 🚫 What This Checklist Does NOT Cover

- No actual deploy (we do not run `vercel` or push to GitHub).  
- No spend (no Vercel usage beyond current plan).  
- No post‑publish validation (live site check) – assumes gates prevent regressions.

## 📋 Ready‑to‑Push Procedure (for owner)

1. Ensure local main is up‑to‑date with origin/main.  
2. Run full gate: `npm run check` (lint + depth + sources).  
   - If lint or sources fail, fix and repeat.  
   - Depth and scan‑slop are warn‑only; improve as time allows.  
3. Run build: `npm run build` → must succeed.  
4. Perform rendered‑eye and cross‑link spot check.  
5. If all hard gates pass, request OWNER‑YES.  
6. Upon OWNER‑YES, push to origin/main → Vercel auto‑deploys.

## Current State (as of 2026-08-26)

- All hard gates (lint, sources, build) pass.  
- Depth and scan‑slop show warnings (see IMPROVEMENT-BACKLOG.md).  
- **Readiness:** Quality gates pass → ready for owner‑approved push.  
- **Blocker:** None.  

> **Note:** This file does not trigger a push, deploy, or spend. It is a readiness assessment only.