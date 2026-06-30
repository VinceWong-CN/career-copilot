# 01_Review.md

# Career Copilot — System Review

## 1. Assumption Check (Key Risks in Vision)

The Vision assumes the following:

### 1.1 Users can accurately provide a Master Resume

Risk:

* Many users have incomplete or outdated resumes
* Experience may be fragmented across roles

Impact:

* Master Resume quality becomes a bottleneck for entire system

---

### 1.2 “Authentic Experience” can be cleanly extracted

Risk:

* Real-world experience is often ambiguous
* Users may struggle to articulate transferable skills

Impact:

* Candidate Understanding Agent becomes critical dependency

---

### 1.3 Transferable Skills mapping is deterministic

Risk:

* Skill mapping is subjective, not rule-based
* Same experience → different interpretations per industry

Impact:

* Requires probabilistic or multi-view mapping system

---

## 2. Product Risks

### 2.1 Over-structure risk

Too many steps:
Master Resume → JD → Mapping → Gap → Language → Resume

Risk:

* User may feel system is too heavy

---

### 2.2 Latency risk

Multi-step pipeline may feel slow compared to "one-click resume tools"

---

### 2.3 Trust risk

If system modifies language too much, users may feel:

> "This no longer sounds like me"

---

## 3. Missing Requirements

### 3.1 No feedback loop defined

We currently do NOT have:

* Interview outcome feedback
* Iteration learning system

This breaks long-term improvement.

---

### 3.2 No uncertainty handling

System assumes clear mapping between:

* experience → skills → job requirements

Reality:

* Uncertainty exists at every step

We need:

* confidence scoring OR explanation layer

---

### 3.3 No user skill calibration mechanism

We do not yet validate:

* actual vs perceived skill level

---

## 4. Architecture Pressure Test

### 4.1 Is this a single-agent or multi-agent system?

Current design implies:
Multi-stage pipeline system

Risk:

* If implemented as single LLM chain → becomes fragile

Conclusion:
We likely need:

> Multi-Agent Architecture

---

### 4.2 Where is the "source of truth"?

Currently unclear:

* Master Resume?
* Skill Graph?
* Job Description mapping?

We need a canonical data model.

---

### 4.3 Is 20% modification constraint realistic?

Risk:

* Hard to measure
* Language changes are subjective

We need:

* semantic diff model OR heuristic proxy

---

## 5. System-Level Insight

Career Copilot is NOT a resume tool.

It is closer to:

> A reasoning system for career representation

Which means:

* It must support uncertainty
* It must support iteration
* It must preserve identity consistency over time

---

## 6. Key Conclusion

The biggest gap is NOT prompting.

It is:

> Lack of a formal career representation model

Before coding, we need to define:

* Career data structure
* Skill ontology
* Experience representation format

