---
agent: "agent"
description: "Improve existing step content using learning psychology and formatting best practices."
---

# Improve Step Content

Analyze and improve existing step content files (`.github/steps/*.md`) for better learning outcomes.

## Process

1. **Read the step file** and identify the step number and its role in the exercise sequence.

2. **Evaluate against psychology principles:**

   **Cognitive Load:**
   - Does the step introduce more than one concept? → Split or simplify.
   - Is there extraneous information? → Remove or move to a `<details>` block.
   - Is the key sentence front-loaded in each paragraph? → Reorder.

   **Scaffolding:**
   - Is the guidance level appropriate for this step's position?
   - Step 1 should be very explicit. Later steps should be more open-ended.
   - Are context switches (tabs, views) explicitly called out?

   **Self-Efficacy:**
   - Does the intro celebrate the previous step's completion? → Add if missing.
   - Are troubleshooting blocks empathetic? → Rewrite condescending language.
   - Is Step 1 completable in under 3 minutes? → Simplify if needed.

   **Dual Coding:**
   - Is there at least one visual element? → Add image placeholder or diagram.
   - Are code examples accompanied by explanations? → Add context.

   **Feedback (for review section):**
   - Does the recap list specific accomplishments? → Add concrete items.

   **Motivation (ARCS):**
   - Does the story/intro explain *why* this matters? → Add relevance.
   - Does the learner know what success looks like? → Add clear criteria.

3. **Check formatting:**
   - Activity headers use `### ⌨️ Activity:` format.
   - Ordered list numbering isn't broken by images or alerts.
   - Inline alerts use the emoji alternatives (not `> [!NOTE]` inside lists).
   - Images use relative paths from `.github/images/` with size attributes.
   - Nunjucks variables are properly escaped when showing Actions syntax.

4. **Apply improvements** and explain each change with the psychology principle behind it.

## Output

For each improvement made, briefly note:
- **What changed**: The specific edit.
- **Why**: The psychology principle or formatting rule that motivated it.
