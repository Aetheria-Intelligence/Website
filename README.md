# Aetheria Website

Public website for Aetheria, built with React and Vite.

This build includes the R8 dominance pass:
- runtime-style governed execution sequence
- drop-the-mic homepage statement section
- locked color semantics for proposal, evaluation, allow, deny, and proof
- compressed narrative across canonical pages
- strategic framing and high-consequence trust sections
- refined interaction, spacing, and visual pacing

## Canonical routes

- /
- /how-it-works
- /platform
- /use-cases
- /proof
- /architecture
- /company
- /access

## Search-focused explainers

These routes remain secondary to the main navigation but are included for search discovery and internal linking:

- /ai-execution-control
- /ai-action-governance
- /bounded-ai-systems
- /ai-decision-vs-execution
- /why-ai-needs-enforcement-layers

## Development

```bash
npm install
npm run dev
```

## Quality gates

```bash
npm run lint
npm run typecheck
npm run validate:build
npm run quality
```

`validate:build` performs a production build and checks that the output contains the expected artifacts and sitemap canon.
