---
applyTo: "**/*.md,**/*.yml"
---

# Learning Psychology for GitHub Skills Exercises

Apply these evidence-based principles when designing, writing, or reviewing any exercise content. They are grounded in cognitive science and instructional design research.

## 1. Cognitive Load Theory (Sweller)

The learner's working memory is limited. Overloading it causes confusion and abandonment.

**Application:**
- Introduce **one concept per step**. Never combine two new ideas in a single theory section.
- Remove extraneous details — if it doesn't serve the learning goal, cut it.
- Use **progressive disclosure**: hide supplementary info in `<details>` blocks.
- Front-load the most important sentence in each paragraph. Learners scan, not read.
- Keep activity instructions to **2 nesting levels maximum**. Deeper nesting signals the activity should be split.

**Checklist:**
- [ ] Does each step introduce only one new concept?
- [ ] Is every sentence necessary for the learning goal?
- [ ] Are supplementary details hidden in expandable blocks?

## 2. Scaffolding (Bruner / Wood)

Provide temporary support structures that are gradually removed as the learner gains competence.

**Application:**
- Step 1 should have the **most explicit instructions** (click here, type this).
- Each subsequent step can be slightly more open-ended.
- By the final step, the learner should be able to perform the task with minimal hand-holding.
- Always tell the learner **where they are** before telling them **what to do** (e.g. "In the repository settings, click **Branches**").
- Use screenshots heavily in early steps, sparingly in later ones.

**Checklist:**
- [ ] Is Step 1 the easiest and most guided?
- [ ] Do later steps reduce guidance progressively?
- [ ] Are context switches (tabs, views) explicitly called out?

## 3. Self-Efficacy (Bandura)

A learner's belief in their ability to succeed is the strongest predictor of persistence.

**Application:**
- **Start with a quick win.** The first activity should succeed within 2–3 minutes.
- **Celebrate each completed step.** Use Mona and the Octocats with encouraging messages.
- **Normalize mistakes.** Troubleshooting blocks should say "This is common" not "If you messed up".
- Use **positive framing**: "You just created your first branch!" not "The branch creation step is done."
- **Avoid jargon walls.** Introduce one term at a time, immediately followed by a plain-language definition.

**Checklist:**
- [ ] Can the learner complete Step 1 in under 3 minutes?
- [ ] Does each step transition celebrate the accomplishment?
- [ ] Are troubleshooting blocks empathetic, not condescending?

## 4. Zone of Proximal Development (Vygotsky)

Learning happens best in the zone between "too easy" (boredom) and "too hard" (frustration).

**Application:**
- Activities should require **effort** — don't just tell learners to click a button. Ask them to think about *what* to type or *where* to navigate.
- Provide **hints, not answers** in troubleshooting blocks. Guide the learner toward discovery.
- Use the "I do, We do, You do" model:
  - Theory = "I do" (explain the concept)
  - First activity = "We do" (very guided)
  - Later activities = "You do" (less guidance)

**Checklist:**
- [ ] Does each activity require the learner to make at least one decision?
- [ ] Do hints guide without giving away the answer?
- [ ] Is there a progression from guided to independent?

## 5. Dual Coding Theory (Paivio)

Information processed through both visual and verbal channels is remembered better.

**Application:**
- Pair every UI instruction with a **screenshot or diagram**.
- Use **code blocks** alongside prose explanations of what the code does.
- Include Mermaid diagrams or `.drawio.svg` files for conceptual flows.
- Annotate screenshots to highlight the relevant UI element.

**Checklist:**
- [ ] Does each step have at least one visual element?
- [ ] Are code examples accompanied by explanations?
- [ ] Are screenshots annotated to show what to look for?

## 6. Feedback Loops (Hattie / Timperley)

Effective feedback answers three questions: Where am I going? How am I doing? Where to next?

**Application:**
- **Grading feedback** should be specific: "We checked for `copilot-instructions.md` and found it ✅" not just "Step passed."
- **Failure feedback** must tell the learner exactly what to fix: "We didn't find the file `copilot-instructions.md`. Make sure you created it in the `.github/` directory."
- Use the results table template to show each check individually.
- After each step, remind the learner what they accomplished and what's coming next.

**Checklist:**
- [ ] Does grading feedback name the specific check that passed/failed?
- [ ] Does failure feedback include a corrective action?
- [ ] Does each step transition mention what's next?

## 7. Motivation Design (Keller's ARCS Model)

**A**ttention → **R**elevance → **C**onfidence → **S**atisfaction

**Application:**
- **Attention**: Open each step with a brief story or real-world scenario. Use a curiosity hook: "Ever wondered how teams keep their code safe?"
- **Relevance**: Explain *why* this skill matters before teaching *how*. Connect to the learner's likely goals.
- **Confidence**: Provide clear success criteria. The learner should always know what "done" looks like.
- **Satisfaction**: End with a visible outcome — a merged PR, a deployed page, a passing check. The learner should feel proud of what they built.

**Checklist:**
- [ ] Does the intro explain why this skill matters?
- [ ] Does the learner know what success looks like before starting?
- [ ] Does the exercise end with a tangible, shareable outcome?

## 8. Spacing and Sequencing

Each step should introduce one concept, practice it, then move on. Revisiting concepts across steps reinforces learning.

**Application:**
- Steps should be **self-contained** — the learner can take a break and resume.
- Reference skills from previous steps naturally: "Remember the branch you created in Step 1? Now you'll commit to it."
- Avoid teaching everything in one step. Spread related concepts across the exercise.

**Checklist:**
- [ ] Can the learner resume at any step without re-reading previous steps?
- [ ] Do later steps reference earlier concepts naturally?

## Quick Reference: Applying Psychology to Exercise Components

| Component | Key Principles | Actions |
|-----------|---------------|----------|
| **Step theory** | Cognitive Load, Dual Coding | One concept, with visuals, linked references |
| **Step activity** | ZPD, Scaffolding | Guided → independent, 2-level max nesting |
| **Troubleshooting** | Self-Efficacy, Feedback | Empathetic tone, specific hints |
| **Grading feedback** | Feedback Loops | Specific checks, corrective actions |
| **Step transitions** | Motivation (ARCS) | Celebrate, preview next step |
| **Step 1 design** | Self-Efficacy, Scaffolding | Quick win, most guided, easy |
| **Review/finish** | Satisfaction, Motivation | Celebrate, recap, next steps |
| **README intro** | Attention, Relevance | Hook, why it matters, clear expectations |
