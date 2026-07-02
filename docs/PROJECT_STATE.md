# Career Copilot

## Current Stage

V1 Polish

---

## Current Sprint

Sprint 1

---

## Goal

Build the first usable Career Copilot.

---

## Product Boundary

Input

- Master Resume
- Job Description

Output

- Match Assessment
- Tailored Resume
- Interview Package

---

## Tech Stack

Next.js

TypeScript

Tailwind

shadcn/ui

Vercel

---

## Current Task

V1 Polish

---

## Completed

✅ Task001 — Project Setup
✅ Task002 — Master Resume Upload + Resume Parsing
✅ Task003 — JD Input（OCR Deferred）
✅ Task004 — Match Analysis + Result UI
✅ Task005 — Resume Tailoring

---

## Current Focus

Improve MVP quality before V1 Release.

### Goals

- Improve Resume Markdown rendering
- Remove Markdown code fences from AI output
- Improve Resume Preview layout
- Improve Copy UX
- Remove Header navigation
- Simplify Information Architecture (Workflow First)
- Keep existing functionality unchanged

---

## Deferred

- OCR Recovery
- Resume Editor
- Resume Export

---

## Architecture Convention

### Workflow First

Career Copilot is a workflow product, not a navigation product.

The user journey is:

Landing → Master Resume → Job → Generate (Match Analysis) → Result → Resume (Tailored Resume)

Each page has a single responsibility.

Avoid using top navigation such as:
- Resume
- Job
- Result

The workflow should be guided by page transitions and action buttons instead of navigation menus.

---

## Rules

Do not introduce features outside MVP.

Keep implementation simple.

Prioritize working software over perfect architecture.
