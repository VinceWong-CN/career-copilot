# 06_DataFlow.md

# Career Copilot — Data Flow

---

# 1. Purpose

This document defines how information flows through Career Copilot.

Unlike the workflow, which describes the system's reasoning capabilities, the data flow describes how information is progressively transformed into career assets.

Each stage produces a standardized artifact that becomes the input for the next stage.

The purpose of this document is to ensure that every piece of information is traceable, reusable, and explainable throughout the system.

---

# 2. Design Philosophy

Career Copilot does not repeatedly rewrite resumes.

Instead, it progressively transforms information through multiple reasoning stages.

Each stage creates a new artifact while preserving all previous evidence.

Information should evolve rather than be recreated.

---

# 3. Data Flow Overview

```text
Master Resume
        │
        ▼
Candidate Profile
        │
        ▼
Opportunity Profile
        │
        ▼
Capability Profile
        │
        ▼
Gap Report
        │
        ▼
Target Narrative
        │
        ▼
Tailored Resume
        │
        ▼
Interview Package
```

Each artifact represents a new understanding of the candidate rather than a replacement of previous information.

---

# 4. Input Artifact

## Master Resume

The Master Resume is the primary input to the system.

It represents the candidate's authentic professional history.

The Master Resume is never automatically rewritten.

It serves as the foundation for all future reasoning.

---

# 5. Intermediate Artifacts

## Candidate Profile

Purpose:

Create a structured understanding of the candidate.

Contains:

- Professional experience
- Skills
- Achievements
- Career progression
- Supporting evidence

---

## Opportunity Profile

Purpose:

Represent the target opportunity in a structured format.

Contains:

- Responsibilities
- Required capabilities
- Preferred qualifications
- Industry terminology
- Hiring priorities

---

## Capability Profile

Purpose:

Describe how the candidate's authentic capabilities relate to the opportunity.

Contains:

- Matching capabilities
- Transferable skills
- Supporting evidence
- Confidence of alignment

---

## Gap Report

Purpose:

Identify potential risks before resume generation.

Contains:

- Strong matches
- Weak matches
- Missing capabilities
- Interview risks

Gap Report never recommends fabricating experience.

---

## Target Narrative

Purpose:

Translate authentic experience into language suitable for the target opportunity.

Contains:

- Reframed achievements
- Industry terminology
- Capability-focused storytelling
- Language adjustments

Facts remain unchanged.

---

# 6. Output Artifacts

## Tailored Resume

Purpose:

Generate a resume aligned with the target opportunity while preserving authenticity.

The Tailored Resume is generated from previous artifacts rather than directly rewriting the Master Resume.

---

## Interview Package

Purpose:

Prepare the candidate to explain every statement included in the Tailored Resume.

May include:

- Talking points
- STAR examples
- Potential interview questions
- Risk reminders

Interview preparation is the final artifact of the resume tailoring workflow.

---

# 7. Data Integrity Rules

Every artifact must satisfy the following rules.

## Traceability

Every output must be traceable to previous artifacts.

---

## Evidence Preservation

No evidence should be discarded during reasoning.

---

## Progressive Transformation

Each artifact should enrich previous information rather than replace it.

---

## Explainability

Every artifact should explain how it was produced.

---

## Consistency

All artifacts must remain logically consistent with the Master Resume.

---

# 8. Future Evolution

The current data flow supports resume tailoring.

Future products should reuse the same artifacts whenever possible.

Examples include:

- LinkedIn Profile
- Cover Letter
- Career Strategy
- Personal Branding
- Networking Preparation

New outputs should extend the existing artifact chain rather than introducing parallel data flows.

---

# 9. Key Takeaway

Career Copilot transforms information through a sequence of structured artifacts.

Rather than repeatedly rewriting resumes, the system progressively builds understanding, aligns capabilities, and produces career assets that remain authentic, explainable, and reusable.