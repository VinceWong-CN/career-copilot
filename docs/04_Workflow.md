# 04_Workflow.md

# Career Copilot — Reasoning Workflow

---

# 1. Purpose

This document defines how Career Copilot reasons about a candidate's career information to generate authentic, job-specific career assets.

The workflow describes the system's reasoning capabilities rather than implementation details.

It is independent of:

- AI models
- Agents
- Prompts
- Backend architecture

Its purpose is to define **how the system thinks**, not **how the system is implemented**.

---

# 2. Scope

This workflow covers the complete reasoning pipeline from:

**Master Resume**

to

**Interview Preparation**

The workflow applies to all future career products, including:

- Resume Tailoring
- Interview Preparation
- Cover Letter
- LinkedIn Profile
- Career Strategy

---

# 3. Workflow Overview

The Career Copilot reasoning pipeline consists of six capabilities:

```text
Master Resume
        │
        ▼
Understand Candidate
        │
        ▼
Understand Opportunity
        │
        ▼
Identify Matching Capabilities
        │
        ▼
Analyze Gaps
        │
        ▼
Translate Into Target Narrative
        │
        ▼
Prepare Interview
```

Each capability transforms one or more input artifacts into new output artifacts.

---

# 4. Reasoning Pipeline

## Step 1 — Understand Candidate

### Purpose

Build an objective understanding of the candidate based on authentic experience.

### Input

- Master Resume

### Capability

The system extracts:

- Professional experience
- Achievements
- Responsibilities
- Skills
- Career progression
- Evidence of capability

### Output

- Candidate Profile

---

## Step 2 — Understand Opportunity

### Purpose

Understand what the target role is actually looking for.

### Input

- Job Description

### Capability

The system identifies:

- Core responsibilities
- Required capabilities
- Preferred qualifications
- Industry terminology
- Hiring priorities

### Output

- Opportunity Profile

---

## Step 3 — Identify Matching Capabilities

### Purpose

Connect the candidate's authentic experience with the opportunity requirements.

### Input

- Candidate Profile
- Opportunity Profile

### Capability

The system identifies:

- Matching capabilities
- Transferable skills
- Supporting evidence
- Relevant experiences

The goal is capability alignment rather than keyword matching.

### Output

- Capability Profile

---

## Step 4 — Analyze Gaps

### Purpose

Evaluate where the candidate is strong and where potential risks exist.

### Input

- Capability Profile

### Capability

The system evaluates:

- Strong matches
- Weak matches
- Missing capabilities
- Interview risks

The system never fabricates missing experience.

### Output

- Gap Report

---

## Step 5 — Translate Into Target Narrative

### Purpose

Translate authentic experience into language appropriate for the target industry.

### Input

- Candidate Profile
- Opportunity Profile
- Capability Profile
- Gap Report

### Capability

The system:

- Adjusts wording
- Improves clarity
- Highlights relevant achievements
- Maps transferable skills
- Aligns professional language

Facts must never be changed.

### Output

- Target Narrative
- Tailored Resume

---

## Step 6 — Prepare Interview

### Purpose

Ensure the candidate can confidently explain every statement included in the tailored resume.

### Input

- Tailored Resume
- Gap Report

### Capability

Generate:

- Interview talking points
- Behavioral examples
- STAR story suggestions
- Potential interviewer questions
- High-risk question preparation

Interview preparation is considered part of the resume tailoring workflow rather than a separate product.

### Output

- Interview Package

---

# 5. Workflow Rules

The workflow must always follow these rules.

## Authenticity First

Never fabricate experience.

---

## Master Resume Only

All tailored resumes must originate from a single master resume.

---

## Capability Before Language

Capability matching must happen before language optimization.

---

## Language Never Changes Facts

Only expressions may change.

Facts must remain unchanged.

---

## Interview Driven

Every resume modification must improve interview readiness.

---

## Explain Every Change

Every modification should have a clear and explainable reason.

---

## Human Review

The candidate always owns the final decision.

The AI provides recommendations rather than making irreversible changes.

---

# 6. Design Notes

This workflow intentionally describes **capabilities**, not **agents**.

For example:

✔ Understand Candidate

instead of

✘ Candidate Agent

This keeps the workflow independent of future implementation choices.

Whether the system is implemented using:

- a single agent
- multiple agents
- different LLMs
- different backend architectures

the reasoning workflow remains unchanged.

---

# 7. Future Extensions

The reasoning workflow is designed to support additional career assets without changing the reasoning pipeline.

Future outputs may include:

- LinkedIn Profile
- Cover Letter
- Career Strategy
- Portfolio Narrative
- Networking Introduction
- Personal Branding

New products should reuse the existing reasoning workflow rather than introducing a new workflow whenever possible.

---

# 8. Key Takeaway

Career Copilot is not a resume rewriting system.

It is a career reasoning system that transforms authentic professional experience into job-specific career narratives while maintaining factual accuracy and preparing candidates for successful interviews.