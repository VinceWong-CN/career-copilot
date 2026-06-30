# 04_Workflow.md

# Career Copilot — Internal Workflow Design

---

## 1. Overview

This document defines how Career Copilot executes internal reasoning.

It describes the **step-by-step execution logic between multiple AI agents**, not user-facing behavior.

The system is designed as a **multi-agent reasoning pipeline**, not a single generation model.

---

## 2. Core Principle

The system follows one core principle:

> Reason before generation.

No output is generated before structured understanding is completed.

---

## 3. End-to-End System Workflow

The full workflow is executed in the following sequence:

---

### Step 1: Input Ingestion

User provides:

- Master Resume (raw experience)
- Job Description (target role)

System does NOT generate output at this stage.

It only stores raw inputs.

---

### Step 2: Candidate Understanding Phase

Agent: Candidate Understanding Agent

Function:
- Parse raw resume
- Extract structured experience
- Normalize roles, projects, responsibilities

Output:
- Structured Experience Graph

---

### Step 3: Job Understanding Phase

Agent: Job Understanding Agent

Function:
- Parse JD
- Extract:
  - required skills
  - implicit expectations
  - seniority signals

Output:
- Job Requirement Graph

---

### Step 4: Skill Mapping Phase

Agent: Skill Mapping Agent

Function:
- Map experience → skills
- Identify transferable skills
- Generate multiple interpretations

Output:
- Skill Graph
- Confidence scores
- Alternative mappings

---

### Step 5: Gap Analysis Phase

Agent: Gap Analysis Agent

Function:
- Compare Skill Graph vs Job Requirement Graph
- Identify mismatches

Output:
- Missing skills
- Weak signals
- Risk areas
- Improvement suggestions

---

### Step 6: Narrative Construction Phase

Agent: Narrative Agent

Function:
- Convert structured reasoning into human-readable output
- Generate:
  - Resume bullet points
  - Career narrative
  - Interview explanations

Constraints:
- No fabrication allowed
- Only language transformation permitted
- Must preserve factual consistency

---

### Step 7: Explanation Layer (Critical Step)

System generates explanation for every transformation:

- Why this skill was inferred
- Why this mapping was chosen
- Why this resume change was made

This ensures transparency and trust.

---

### Step 8: Interview Preparation Phase

System generates:

- Expected interview questions
- Suggested answers based on real experience
- Weak area preparation plan

This is NOT a separate product.
It is the final stage of reasoning.

---

## 4. Agent Communication Model

Each agent communicates via structured data:

```text id="wfcomm"
Agent Output → Structured JSON → Next Agent Input
