# 02_PRD.md

# Career Copilot — Product Requirements Document (PRD)

---

## 1. Product Definition

Career Copilot is a Career Reasoning System that transforms authentic professional experience into job-specific career narratives through structured multi-agent reasoning.

It is NOT a resume writer or a text generation tool.

Instead of directly rewriting resumes, the system first understands, models, and reasons about career data before producing any output.

The goal is to preserve authenticity while improving clarity, positioning, and interview effectiveness.

---

## 2. System Architecture

Career Copilot is composed of multiple specialized AI agents:

### 2.1 Candidate Understanding Agent
Responsible for interpreting raw user experience and converting it into structured career data.

Input:
- Raw Resume
- User-provided context

Output:
- Structured experience representation
- Extracted roles, projects, responsibilities

---

### 2.2 Job Understanding Agent
Responsible for analyzing Job Descriptions (JD).

Output:
- Required skills
- Hidden expectations
- Seniority signals
- Priority weighting

---

### 2.3 Skill Mapping Agent
Maps user experience to job requirements.

Output:
- Transferable skill graph
- Skill confidence score
- Alternative interpretations of experience

---

### 2.4 Gap Analysis Agent
Compares candidate profile with job requirements.

Output:
- Missing skills
- Weak signals
- Risk areas
- Improvement suggestions

---

### 2.5 Narrative Agent
Generates final career narrative for resume and interview use.

Key constraints:
- Must not fabricate experience
- Must preserve factual accuracy
- Must focus on interview readiness rather than keyword optimization

---

## 3. Core Data Model

The system operates on three core data structures:

### 3.1 Master Resume Object
The single source of truth representing raw user experience.

- Work experience
- Education
- Projects
- Skills (raw, unstructured)

---

### 3.2 Skill Graph
Represents relationships between experience and inferred skills.

Includes:
- Nodes: skills
- Edges: experience → skill mapping
- Confidence score per mapping

---

### 3.3 Job Requirement Graph
Represents structured interpretation of job descriptions.

Includes:
- Must-have skills
- Nice-to-have skills
- Behavioral signals
- Seniority indicators

---

## 4. System Workflow

The system operates as a sequential multi-agent pipeline:

1. Candidate Understanding Agent processes Master Resume
2. Job Understanding Agent processes Job Description
3. Skill Mapping Agent builds transferable skill graph
4. Gap Analysis Agent identifies mismatches and risks
5. Narrative Agent generates interview-ready expression

---

## 5. Design Constraints

The system must strictly follow these constraints:

### 5.1 Authenticity First
No fabrication or exaggeration of user experience is allowed.

---

### 5.2 Master Resume as Source of Truth
All outputs must be traceable back to the Master Resume.

---

### 5.3 Low Modification Cost
Each iteration should modify no more than ~20% of content.

---

### 5.4 Transferable Skills Focus
The system focuses on capability translation, not industry switching.

---

### 5.5 Language Mapping Principle
The system changes expression and framing, not factual content.

---

### 5.6 Interview-Driven Optimization
All resume changes must improve interview performance, not just ATS scores.

---

### 5.7 Explainability Requirement
Every transformation must include reasoning and justification.

---

## 6. System Philosophy

Career Copilot is not a resume optimization tool.

It is a Career Reasoning Engine designed to help users:

- Understand their own experience
- Translate experience into structured skills
- Align career narratives with job requirements
- Prepare for interviews through structured reasoning

---

## 7. Key Insight

The core problem is not resume formatting.

The core problem is:

> Lack of a structured career representation system.

Therefore, the system must first build understanding before generating any output.

---

## 8. Long-Term Direction

Career Copilot will evolve into:

1. Resume Tailoring Agent (current stage)
2. Interview Copilot
3. Career Strategy System
4. Full Career Intelligence Platform

