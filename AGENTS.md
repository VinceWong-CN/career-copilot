# AGENTS.md
# 长期开发规范（基本不变）
# Career Copilot AI Development Guide

This document defines the long-term development rules for all AI coding agents (Codex, Claude Code, Cursor, etc.).

These rules apply to every development task unless explicitly overridden by the Product Owner.

---

# 1. Development Principles

Always follow these principles:

- MVP First
- Workflow First
- Single Responsibility
- Keep It Simple
- Reuse Before Creating
- Documentation First

Never over-engineer.

Every feature should solve a real user problem.

---

# 2. Product Architecture Principles

Career Copilot is a workflow product, not a navigation product.

The user journey is:

Landing

↓

Master Resume

↓

Job Description

↓

Generate (Match Analysis)

↓

Result

↓

Resume (Tailored Resume)

Each page must have a single responsibility.

Avoid using page navigation to represent workflow.

Guide users through page transitions and action buttons instead.

---

# 3. Route Convention

Current routes:

/                     → Landing

/master-resume        → Master Resume Upload

/job                  → Job Description Input

/generate             → AI Match Analysis

/result               → Match Analysis Result

/resume               → Tailored Resume

Do not overload existing pages with multiple business responsibilities.

When adding new capabilities, prefer creating a new route.

---

# 4. Documentation Rules

Before starting any coding task, read:

1. AGENTS.md
2. docs/PROJECT_STATE.md
3. sprint/sprint.md
4. Current Task document
5. Related product documents (if needed)

After reading, always output an Implementation Plan.

Wait for Product Owner approval before coding.

---

## Documentation Responsibilities

PROJECT_STATE.md

Current project status.

Single source of truth.

sprint.md

Current sprint planning.

Task documents

Feature specifications.

Completed Task documents are frozen.

Do not append polish work to completed Tasks.

CHANGELOG.md

Completed user-visible changes only.

BUG_LOG.md

All bugs.

LESSONS_LEARNED.md

Reusable engineering knowledge.

DECISION_LOG.md

Architecture decisions.

---

# 5. Task vs Sprint

Task

Represents one new product capability.

Once completed:

Task documents are frozen.

Sprint

Represents:

- Product Polish
- UX Improvement
- Bug Fixes
- Release Preparation

Do not create a new Task for product polish.

---

# 6. Development Workflow

Every task must follow this process:

1. Read documentation
2. Output Implementation Plan
3. Wait for Product Owner approval
4. Start coding
5. Complete Self Review
6. Update documentation
7. Execute build
8. Execute local testing
9. Deliver handoff
10. Wait for Product Review

Never skip any step.

---

# 7. Definition of Done

Coding is NOT considered complete until all conditions are met.

Must satisfy ALL:

- Scope matches Task
- Self Review completed
- Documentation updated
- pnpm build passes (zero errors, zero warnings)
- pnpm dev runs successfully
- Manual verification completed
- Browser Console has no runtime errors
- Network requests succeed
- Product Owner can access the page

Otherwise the Task is NOT complete.

---

# 8. Development Completion Checklist

Every completed task must provide:

## Modified Files

List every modified file.

## Root Cause

If bugs were fixed.

## Manual Verification

How the Product Owner should verify.

## Technical Debt

If none, explicitly write:

None.

## Recommended Commit Message

Provide one commit message.

---

# 9. Local Verification

After every coding task:

Run:

pnpm build

Must pass with:

- Zero errors
- Zero warnings

Then run:

pnpm dev

Manually verify:

- UI
- Routing
- Browser Console
- Network
- Acceptance Criteria

Always report:

Testing URL

Example:

http://localhost:3000

If another port is used, report the actual port.

Also provide:

Recommended test pages.

Recommended verification checklist.

---

# 10. Self Review

Before requesting Product Review, verify:

- Scope is correct
- No feature creep
- Naming is consistent
- Documentation updated
- No unnecessary code
- No duplicated logic
- UI matches Acceptance Criteria

Generate:

Recommended Commit Message.

---

# 11. Git Rules

Never execute:

git commit

or

git push

without explicit Product Owner approval.

Always wait for Product Review.

---

# 12. Never

Never:

- Skip documentation reading
- Skip Sprint updates
- Skip PROJECT_STATE updates
- Skip Self Review
- Skip build verification
- Skip local verification
- Modify frozen Task documents
- Expand MVP scope
- Introduce unapproved technologies
- Make assumptions about unclear requirements

If requirements are unclear:

Ask first.

Do not guess.

If an idea is outside the current scope:

Record it in Backlog.

Do not implement it.

---

# 13. Priority

Always follow:

Working Software

>

User Experience

>

Code Quality

>

Architecture

>

Future Expansion

Deliver value before optimization.

---

# 14. Developer Handoff

Every completed task must include:

- Testing URL
- Recommended test pages
- Manual verification checklist
- Modified files
- Technical Debt
- Recommended Commit Message

The Product Owner should be able to verify the task without reading the code.