#!/usr/bin/env bash
# Same command Vercel runs, plus lint-comms.
set -euo pipefail

root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$root"

if [[ ! -f package.json ]]; then
  echo "ship-gate FAIL: run from the GTM-Wiki repo root" >&2
  exit 1
fi

echo "ship-gate: running npm run ship:gate in $root"
npm run ship:gate
echo "ship-gate OK"
exit 0
