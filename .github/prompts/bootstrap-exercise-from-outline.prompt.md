---
mode: "agent"
model: Claude Sonnet 4
description: "Bootstrap a new exercise from outline"
---

# Bootstrap Exercise from Outline

When you have an exercise outline, follow these steps to bootstrap a repository freshly created from the exercise-template repository:

## 1. Create a new repository

Ignore this step if the user already has a new repository created from the exercise template.

1. **Create a new repository** - Use the CLI to initialize a new local repository based on the exercise template.

   - Create and initialize the new repository in the `/workspaces/repos` folder.
   - Do not keep the Git history from the template.
   - Set the repository name to match the exercise title from the outline.
   - Do not publish it yet. Ask the user after final review.

## 2. Readme Setup

1. **Update README.md** - Replace template content with exercise-specific information from the outline:

   - Title from outline
   - Brief introduction (max 2 sentences)
   - Overview section with learning objectives
   - "What you will build" description
   - Prerequisites list
   - Remove template placeholder text
  
  Keep the original format of the README!

## 3. Step Content files Setup

1. **Create step content files** - Generate `.github/steps/N-step.md` files for each step in the outline if not already present:

   - Create one file per step (1-step.md, 2-step.md, etc.)
   - Add story sections if provided in outline
   - Convert theory content into digestible sections. Include links to references to read more about the topic.
   - Transform activity descriptions into numbered, actionable instructions
   - Follow [`.github/instructions/step-content.instructions.md`](../instructions/step-content.instructions.md) for formatting

1. **Create review content file** - Generate `.github/steps/x-review.md`:
   - Summarize skills learned
   - Include "What's next?" links
   - Follow outline review section

## 4. Step Workflow files Setup

1. **Update start exercise workflow** - Modify `.github/workflows/0-start-exercise.yml`:

   - Update exercise title and intro message placeholders
   - Add any "On Start" automation from outline if present
   - Ensure proper issue creation and workflow state management

1. **Create step workflows** - Generate `.github/workflows/N-step.yml` files:

   - One workflow per step
   - Configure event triggers based on outline transition specifications
   - Add grading checks if specified in outline.
   - Update workflow names and step file references

1. **Configure workflow triggers** - Set appropriate `on:` events:

   - Check the event trigger docs for correct usage: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows.
   - Match outline "Actions Trigger" specifications
   - Add proper `paths:` filters for push events
   - Configure specific event types (e.g., `pull_request: types: [closed]`)

1. **Configure grading checks** - Implement workflow validation:

   - Add `check_step_work` jobs for steps requiring grading
   - Use appropriate actions (file-exists, keyphrase-checker, etc.)
   - Match outline "Grading-Check" specifications
   - Follow grading job pattern from [`.github/instructions/step-workflows.instructions.md`](../instructions/step-workflows.instructions.md)

1. **Update environment variables** - Set proper step file paths:

   - Update `STEP_N_FILE` variables in workflows
   - Ensure workflow names match in enable/disable commands

## 5. Final validation

1. **Validate structure** - Ensure consistency:

   - All workflows reference correct step files
   - Workflow names match step numbers
   - Event triggers align with learning objectives
   - Steps that use markdown templates have all required variables and they are passed correctly.
   - Grading checks match step requirements
   - Last step workflow calls `finish-exercise.yml` instead of enabling next step
   - Intermediate steps do not call `finish-exercise.yml`

1. **Review content flow** - Verify logical progression:

   - Each step builds on previous knowledge
   - Activities match theory sections
   - Transitions make sense for workflow triggers
