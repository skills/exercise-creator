---
name: review-exercise
description: Review a GitHub Skills exercise for format, clarity, learner flow, and workflow correctness. Use when asked to review an exercise draft, inspect step content, or find issues before publishing.
---

# Review a GitHub Skills exercise

Use this skill when the task is evaluation rather than initial authoring.

## Primary sources in this repository

- Prompt baseline: `.github/prompts/review-exercise.prompt.md`
- Step content rules: `.github/instructions/step-content.instructions.md`
- Workflow rules: `.github/instructions/step-workflows.instructions.md`
- Step formatting reference: `docs/reference/step-formatting.md`

## Review workflow

1. Review the exercise as both an editor and a learner.
2. Check the README, step content files, workflows, and review file for internal consistency.
3. Prefer concrete issues over general advice. Focus on defects, ambiguity, broken flow, and mismatches between what is taught and what is checked.

## What to review

### General

- Confirm links work.
- Confirm referenced images load correctly.
- Note confusing wording, typos, or missing context.

### README

- The introduction should be brief and should not teach new material.
- The start exercise button or URL should be correct.
- The overview should match what the learning steps actually teach.
- Prerequisites should be relevant and not inflated.

### Step content

- Theory sections should be short and digestible.
- Activity numbering should remain intact even around images, callouts, or details blocks.
- Activities should be actionable and unambiguous.
- Steps should not assume hidden setup the learner never performed.

### Workflows

- Variables passed to markdown templates must match the template usage.
- Step transitions must match the designed flow.
- Triggers should align with the learner action that is supposed to advance the step.
- Grading jobs should provide useful retry guidance rather than opaque failures.

### Review file

- The review summary should match what was actually taught.
- "What's next?" links should be relevant.

## Final learner-perspective pass

Simulate the learner journey one step at a time:

1. Note any place where the learner would reasonably get stuck.
2. Note anything illogical, underspecified, or easy to misinterpret.
3. Call out gaps that would cause a learner to give up.

