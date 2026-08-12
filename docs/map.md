---
sidebar_position: 2
title: The Map
---

# The Map — one image, the whole wiki

**Frameworks don't change. Execution does.** Here's the entire wiki as a
single tree — the way to see how everything connects before you read
anything.

<svg viewBox="0 0 960 720" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" style={{ width: "100%", height: "auto", background: "#F7F6F2", borderRadius: 8, border: "1px solid #E2E1DC" }}>
  <defs>
    <linearGradient id="rootGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#0000F2"/>
      <stop offset="100%" stopColor="#4D6BFE"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#8E8E99"/>
    </marker>
  </defs>

  <!-- Root -->
  <rect x="300" y="24" width="360" height="64" rx="10" fill="url(#rootGrad)"/>
  <text x="480" y="52" text-anchor="middle" fill="#fff" font-size="19" font-weight="700">Open GTM Wiki</text>
  <text x="480" y="72" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-size="12">Foundations don't change. Execution does.</text>

  <!-- Spine -->
  <line x1="480" y1="88" x2="480" y2="132" stroke="#8E8E99" stroke-width="1.5"/>
  <line x1="170" y1="132" x2="790" y2="132" stroke="#8E8E99" stroke-width="1.5"/>
  <line x1="170" y1="132" x2="170" y2="148" stroke="#8E8E99" stroke-width="1.5"/>
  <line x1="460" y1="132" x2="460" y2="148" stroke="#8E8E99" stroke-width="1.5"/>
  <line x1="680" y1="132" x2="680" y2="148" stroke="#8E8E99" stroke-width="1.5"/>
  <line x1="790" y1="132" x2="790" y2="148" stroke="#8E8E99" stroke-width="1.5"/>

  <!-- Branch 1: Frameworks -->
  <g>
    <rect x="70" y="148" width="200" height="52" rx="8" fill="#fff" stroke="#E2E1DC"/>
    <text x="170" y="170" text-anchor="middle" fill="#1A1A1E" font-size="14" font-weight="600">Core Frameworks</text>
    <text x="170" y="188" text-anchor="middle" fill="#8E8E99" font-size="11">how to think</text>
    <line x1="170" y1="200" x2="170" y2="222" stroke="#8E8E99" stroke-width="1.5"/>
    <rect x="70" y="222" width="200" height="44" rx="7" fill="#fff" stroke="#E2E1DC"/>
    <text x="170" y="241" text-anchor="middle" fill="#1A1A1E" font-size="12">00 — GTM Strategy</text>
    <text x="170" y="257" text-anchor="middle" fill="#8E8E99" font-size="10">the universal operating system</text>
    <line x1="170" y1="266" x2="170" y2="280" stroke="#8E8E99" stroke-width="1.5"/>
    <rect x="70" y="280" width="200" height="44" rx="7" fill="#fff" stroke="#E2E1DC"/>
    <text x="170" y="299" text-anchor="middle" fill="#1A1A1E" font-size="12">01 — Channels Bullseye</text>
    <text x="170" y="315" text-anchor="middle" fill="#8E8E99" font-size="10">find the one channel</text>
  </g>

  <!-- Branch 2: Playbooks -->
  <g>
    <rect x="360" y="148" width="200" height="52" rx="8" fill="#fff" stroke="#E2E1DC"/>
    <text x="460" y="170" text-anchor="middle" fill="#1A1A1E" font-size="14" font-weight="600">Playbooks</text>
    <text x="460" y="188" text-anchor="middle" fill="#8E8E99" font-size="11">what to do</text>
    <line x1="460" y1="200" x2="460" y2="222" stroke="#8E8E99" stroke-width="1.5"/>
    <rect x="360" y="222" width="200" height="44" rx="7" fill="#fff" stroke="#E2E1DC"/>
    <text x="460" y="241" text-anchor="middle" fill="#1A1A1E" font-size="12">Outbound from Zero</text>
    <text x="460" y="257" text-anchor="middle" fill="#8E8E99" font-size="10">list → signal → sequence → handoff</text>
    <line x1="460" y1="266" x2="460" y2="280" stroke="#8E8E99" stroke-width="1.5"/>
    <rect x="360" y="280" width="200" height="44" rx="7" fill="#fff" stroke="#E2E1DC" stroke-dasharray="4 3"/>
    <text x="460" y="299" text-anchor="middle" fill="#8E8E99" font-size="12">PLG → Enterprise</text>
    <text x="460" y="315" text-anchor="middle" fill="#C9C8C2" font-size="10">coming soon</text>
  </g>

  <!-- Branch 3: Agentic GTM (highlighted) -->
  <g>
    <rect x="580" y="148" width="200" height="52" rx="8" fill="#4D6BFE" stroke="#4D6BFE"/>
    <text x="680" y="170" text-anchor="middle" fill="#fff" font-size="14" font-weight="600">Agentic GTM</text>
    <text x="680" y="188" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="11">execute with agents</text>
    <line x1="680" y1="200" x2="680" y2="222" stroke="#4D6BFE" stroke-width="1.5"/>
    <rect x="580" y="222" width="200" height="44" rx="7" fill="#F0EEFF" stroke="#4D6BFE"/>
    <text x="680" y="241" text-anchor="middle" fill="#1A1A1E" font-size="12">The Agentic Stack</text>
    <text x="680" y="257" text-anchor="middle" fill="#8E8E99" font-size="10">data → research → compose → orchestrate → triage</text>
    <line x1="680" y1="266" x2="680" y2="280" stroke="#4D6BFE" stroke-width="1.5"/>
    <rect x="580" y="280" width="200" height="44" rx="7" fill="#F0EEFF" stroke="#4D6BFE"/>
    <text x="680" y="299" text-anchor="middle" fill="#1A1A1E" font-size="12">Agentic Outbound</text>
    <text x="680" y="315" text-anchor="middle" fill="#8E8E99" font-size="10">same gates, faster loops</text>
    <line x1="680" y1="324" x2="680" y2="338" stroke="#4D6BFE" stroke-width="1.5"/>
    <rect x="580" y="338" width="200" height="44" rx="7" fill="#F0EEFF" stroke="#4D6BFE"/>
    <text x="680" y="357" text-anchor="middle" fill="#1A1A1E" font-size="12">Guardrails &amp; Measurement</text>
    <text x="680" y="373" text-anchor="middle" fill="#8E8E99" font-size="10">where it breaks, the metrics</text>
  </g>

  <!-- Branch 4: Roles -->
  <g>
    <rect x="740" y="148" width="180" height="52" rx="8" fill="#fff" stroke="#E2E1DC"/>
    <text x="830" y="170" text-anchor="middle" fill="#1A1A1E" font-size="14" font-weight="600">Roles</text>
    <text x="830" y="188" text-anchor="middle" fill="#8E8E99" font-size="11">who does it</text>
    <line x1="830" y1="200" x2="830" y2="222" stroke="#8E8E99" stroke-width="1.5"/>
    <rect x="740" y="222" width="180" height="44" rx="7" fill="#fff" stroke="#E2E1DC"/>
    <text x="830" y="241" text-anchor="middle" fill="#1A1A1E" font-size="12">Founders</text>
    <text x="830" y="257" text-anchor="middle" fill="#8E8E99" font-size="10">the first revenue problem</text>
    <line x1="830" y1="266" x2="830" y2="280" stroke="#8E8E99" stroke-width="1.5"/>
    <rect x="740" y="280" width="180" height="44" rx="7" fill="#fff" stroke="#E2E1DC"/>
    <text x="830" y="299" text-anchor="middle" fill="#1A1A1E" font-size="12">Head of Platforms</text>
    <text x="830" y="315" text-anchor="middle" fill="#8E8E99" font-size="10">revenue through partners</text>
  </g>

  <!-- Footer strip -->
  <rect x="70" y="420" width="820" height="44" rx="8" fill="#fff" stroke="#E2E1DC"/>
  <text x="480" y="438" text-anchor="middle" fill="#5A5A66" font-size="12">Read in this order:</text>
  <text x="480" y="454" text-anchor="middle" fill="#8E8E99" font-size="11">strategy first → one playbook → run it with a harness → step into the role</text>
</svg>

## How to use this wiki

1. **New to GTM?** Start at [Core Frameworks](./foundations/00-gtm-strategy-framework.md) — the strategy comes first, everything else hangs off it.
2. **Have a specific motion to run?** Go to [Playbooks](./playbooks/index.md) and execute the one that matches your situation.
3. **Scaling what already works?** Read the [Agentic GTM](./agentic/index.md) section — same foundations, harness on top.
4. **Hiring or stepping into a role?** Read the [Roles](./roles/head-of-platforms/index.md) guides.

The map is the whole wiki at a glance. Bookmark it.
