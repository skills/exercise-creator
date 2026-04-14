---
name: bootstrap-exercise-from-outline
description: Bootstrap a GitHub Skills exercise repository from an approved outline. Use when asked to turn an outline into a working exercise with README, step content, workflows, and review content.
---

# Bootstrap a GitHub Skills exercise from an outline

Use this skill when the user already has an outline and wants the actual repository content created or updated.

## Primary sources in this repository

- Prompt baseline: `.github/prompts/bootstrap-exercise-from-outline.prompt.md`
- Step content rules: `.github/instructions/step-content.instructions.md`
- Workflow rules: `.github/instructions/step-workflows.instructions.md`
- Outline rules: `.github/instructions/outline.instructions.md`
- Step formatting reference: `docs/reference/step-formatting.md`

## Workflow

1. Read the approved outline first and treat it as the source of truth.
2. If the repository does not yet exist and the user wants one created from the template:
   - create it under `/workspaces/repos/`
   - base it on the exercise template
   - do not keep the template git history
   - do not publish until the exercise has been reviewed
3. Update `README.md` using the outline's title, introduction, overview, build outcome, and prerequisites while preserving the existing README structure.
4. Create or update `.github/steps/N-step.md` files:
   - one file per step
   - concise theory
   - actionable numbered activities
   - troubleshooting details blocks
   - optional story content only when the outline includes it
5. Create or update `.github/steps/x-review.md` from the outline's review section.
6. Create or update `.github/workflows/0-start-exercise.yml` and `.github/workflows/N-step.yml` files to match the outline's transition design.

## Required standards

### Step content

Follow `.github/instructions/step-content.instructions.md`:

- Start each activity with `### ⌨️ Activity: <title>`.
- Use ordered lists for learner actions.
- Keep each step self-contained.
- Use Nunjucks variables only when workflow data must be injected.
- Store images in `.github/images` and reference them relatively.

### Workflows

Follow `.github/instructions/step-workflows.instructions.md`:

- Keep workflow names simple: `Step 0`, `Step 1`, and so on.
- Each learning step must include `find_exercise` and `post_next_step_content`.
- Add `check_step_work` only when grading feedback is valuable or necessary.
- If `check_step_work` exists, include it in `post_next_step_content.needs`.
- Disable the current workflow and enable the next one during step transitions.
- The final step should post review content and call `finish-exercise.yml` instead of enabling another step.

## Validation checklist

Before you conclude:

1. Verify every workflow points to the correct step file.
2. Verify triggers match the learner actions described in the outline.
3. Verify grading checks are concrete, independent, and useful.
4. Verify the learning flow feels progressive and coherent.
5. Verify the README, step files, workflows, and review file tell the same story.

