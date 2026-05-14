# NYRO Web — Claude Code Instructions

## Behavior
- Never ask for confirmation before making changes
- Never ask clarifying questions — make the best decision and proceed
- Always run npm run dev at the end to verify no errors
- Always run npx tsc --noEmit to verify TypeScript
- If something fails, fix it automatically and retry
- Complete all tasks in a single session without stopping

## Project
- Next.js 16 + TypeScript + Tailwind v4 + Framer Motion
- Brand: NYRO Systems — dark premium tech, Silicon Valley aesthetic
- Colors: bg #070810, accent #4A7EFF, text #EEF0FF
- Fonts: Syne (headings), DM Sans (body), JetBrains Mono (code/labels)

## Code Style
- Always use 'use client' for components with hooks or event handlers
- Prefer CSS variables over hardcoded hex values
- Keep components in src/components/sections/ or src/components/layout/
- Data always goes in src/content/data.ts
