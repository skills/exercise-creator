---
name: create-exercise-outline
description: Create or refine a GitHub Skills exercise outline. Use when asked to plan a new exercise, draft an outline, turn notes into an outline, or improve an existing outline before implementation.
---

# Create a GitHub Skills exercise outline

Use this skill when the user wants a GitHub Skills exercise outline rather than a full exercise implementation.

## Primary sources in this repository

- Prompt baseline: `.github/prompts/create-exercise-outline.prompt.md`
- Outline template: `.github/ISSUE_TEMPLATE/skill-exercise-outline.md`
- Outline rules: `.github/instructions/outline.instructions.md`

## Workflow

1. Clarify missing inputs before drafting if the exercise topic, learner level, repository destination, or scope is ambiguous.
2. Start from `.github/ISSUE_TEMPLATE/skill-exercise-outline.md` instead of inventing a new structure.
3. Create the outline file using the `{exercise-name}-outline.md` naming pattern.
4. If the user does not specify a save location, prefer `/workspaces/repos/`.
5. Fill every required template section with real content and remove all `replace-me` placeholders.
6. If you keep an optional section, remove the `(optional)` marker from the heading. If it is not needed, delete the section entirely.
7. Research official documentation for references and theory support. Prefer:
   - `docs.github.com`
   - `learn.github.com`
   - `github.blog`
   - `github.blog/changelog`
   - `code.visualstudio.com/docs`

## Outline quality bar

Follow `.github/instructions/outline.instructions.md` closely:

- Keep the outline focused on the requested topic only.
- Make the theory awareness-level, not a full tutorial.
- Give each step a clear learning purpose that builds on the previous step.
- Make activities action-oriented and high level.
- Choose transition triggers that actually result from the activity the learner performs.
- Describe grading checks as concrete things the workflow can verify.

## Review before finishing

Before you conclude:

1. Verify each step teaches a distinct concept.
2. Verify theory, references, activity, and transition all align for each step.
3. Verify no `replace-me` text remains.
4. Verify the learner journey is coherent from README through Review.

