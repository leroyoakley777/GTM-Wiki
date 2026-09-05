#!/usr/bin/env bash
# GTM Wiki ship preflight. Run from the wiki repo root.
set -euo pipefail

fail() { echo "preflight FAIL: $*" >&2; exit 1; }

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || fail "not a git repo"
root="$(git rev-parse --show-toplevel)"
cd "$root"

[[ -f package.json ]] || fail "package.json missing; wrong directory"
[[ -f scripts/lint.mjs ]] || fail "wiki scanners missing"

if ! command -v node >/dev/null 2>&1; then
  fail "node not on PATH (need Node 18+)"
fi

node_major="$(node -p "process.versions.node.split('.')[0]")"
[[ "$node_major" -ge 18 ]] || fail "Node $node_major is too old; need 18+"

if [[ ! -d node_modules ]]; then
  echo "preflight: node_modules missing; running npm install"
  npm install
fi

ctx="$HOME/.hermes/plans/gtm-wiki/OPERATING_CONTEXT.md"
if [[ ! -f "$ctx" ]]; then
  mkdir -p "$(dirname "$ctx")"
  cat > "$ctx" <<EOF
# GTM Wiki operating context

Canonical orders: STANDARDS/HERMES_SHIP.md in the GTM-Wiki repo.
Skill: skills/gtm-wiki-ship/SKILL.md
Ship command: npm run ship:gate
Queue: IMPROVEMENT-BACKLOG.md (first open item)
EOF
  echo "preflight: wrote $ctx"
fi

if [[ ! -f .githooks/pre-commit ]]; then
  fail ".githooks/pre-commit missing"
fi

hooks_path="$(git config --get core.hooksPath || true)"
if [[ "$hooks_path" != ".githooks" ]]; then
  echo "preflight: wiring hooks (npm run setup:hooks)"
  npm run setup:hooks
fi

echo "preflight OK: repo=$root node=$(node -v) ctx=$ctx"
exit 0
