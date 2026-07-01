# 03_UserFlow.md

# Career Copilot — User Flow Design

---

## 1. Overview

This document defines how users interact with Career Copilot from start to finish.

The focus is not UI screens, but the **cognitive and system flow** between user intent and system reasoning.

---

## 2. Core User Journey

The user journey follows a structured reasoning pipeline:

1. Input career data (Master Resume)
2. Input target Job Description (JD)
3. System analyzes both inputs
4. System maps skills and experience
5. System identifies gaps
6. System generates narrative output
7. System prepares interview guidance

---

## 3. Step-by-Step User Flow

---

### Step 1: Provide Master Resume

User provides raw career data including:

- Work experience
- Projects
- Education
- Skills (unstructured)

System Role:
- Candidate Understanding Agent processes input
- Converts raw data into structured experience model

---

### Step 2: Provide Job Description

User inputs target job description.

System Role:
- Job Understanding Agent extracts:
  - Required skills
  - Hidden expectations
  - Seniority signals

---

### Step 3: Skill Mapping Phase

System maps user experience to job requirements.

System outputs:
- Transferable skill graph
- Confidence scores
- Alternative interpretations of experience

---

### Step 4: Gap Analysis Phase

System compares:

- Candidate skills
vs
- Job requirements

Outputs:
- Missing skills
- Weak signals
- Risk areas

---

### Step 5: Narrative Generation Phase

System transforms structured insights into:

- Resume bullet points
- Career narratives
- Interview-ready explanations

Key constraint:
- No fabrication allowed
- Only language transformation

---

### Step 6: Interview Preparation Output

System generates:

- Potential interview questions
- Suggested answers based on real experience
- Weak area preparation suggestions

This is NOT a separate product module.
It is the final stage of Resume Tailoring.

---

## 4. System vs User Alignment

| User Thinks | System Does |
|-------------|------------|
| “I upload resume” | Candidate Understanding Agent |
| “I upload JD” | Job Understanding Agent |
| “Match me” | Skill Mapping Agent |
| “Improve me” | Gap Analysis Agent |
| “Rewrite resume” | Narrative Agent |

---

## 5. Key Design Principle

The system must remain **transparent in reasoning**.

Users should always understand:

- Why a change is made
- What skill is inferred
- Why a gap exists

---

## 6. Core Insight

Career Copilot is not a tool that "generates resumes".

It is a system that:

> translates career data → structured understanding → interview-ready expression

---

## 7. Future Extension

This user flow is designed to evolve into:

- Interview Copilot (real-time Q&A assistant)
- Career Strategy System (long-term planning)
- Skill Evolution Tracking System
---

