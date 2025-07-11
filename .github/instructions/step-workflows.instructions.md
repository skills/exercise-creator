---
applyTo: "**/.github/workflows/*.yml"
---


# GitHub Skills Exercise Workflows instructions

If something is not covered in the following instructions, or unclear always refer to the reference implementation in the [`exercise-template`](../../../exercise-template) repository.

## Core Workflow Structure

GitHub Skills exercises use a **step-based workflow pattern** where each step (1-5) has its own workflow file. Only one step workflow is active at a time:

- `0-start-exercise.yml`: Initializes exercise, creates issue, disables all step workflows
- `1-step.yml`, `2-step.yml`, etc.: Monitor learner progress and provide feedback
- Final step: Posts review content and calls `finish-exercise.yml`

### Workflow Structure Details

Each learning step has it's own workflow and is required to have the following two or three (if using grading) jobs:

1. `find_exercise` - Calls a reusable workflow that finds the appropriate issue and returns the issue url for use in the next jobs.
1. (optional) `check_step_work` - Verifies the learner's results and provides feedback.
1. `post_next_step_content` - Does several things, with variations for first and last steps:
   - Comments that the previous step is finished (unless it was the first step)
   - Disables the current step workflow, so it will never run again.
   - Enables the next step workflow.
   - Comments with the next step content
   - Comments that Mona is watching for progress (unless it was the last step)

#### Example of a step workflow without grading

```yaml
jobs:
  find_exercise:
    name: Find Exercise Issue
    uses: skills/exercise-toolkit/.github/workflows/find-exercise-issue.yml@v0.7.0

  post_next_step_content:
    name: Post next step content
    needs: [find_exercise]
    # Step commenting and transition logic here
```

The `post_next_step_content` will always run if the workflow was triggered.

See full example of workflow without grading in [`exercise-template/.github/workflows/1-step.yml`](../../../exercise-template/.github/workflows/1-step.yml).

#### Example of a step workflow with grading

```yaml
jobs:
  find_exercise:
    name: Find Exercise Issue
    uses: skills/exercise-toolkit/.github/workflows/find-exercise-issue.yml@v0.7.0

  check_step_work:  # Optional grading job
    name: Check step work
    needs: [find_exercise]
    # Grading logic here

  post_next_step_content:
    name: Post next step content
    needs: [find_exercise, check_step_work]
    # Step commenting and transition logic here
```

When `check_step_work` is used the `post_next_step_content` should always include it in the `needs` list 
```yaml
  post_next_step_content:
    name: Post next step content
    needs: [find_exercise, check_step_work]
```

This ensures that the next step content is posted only after the  grading checks are completed.

See full example of workflow with grading in [`exercise-template/.github/workflows/2-step.yml`](../../../exercise-template/.github/workflows/2-step.yml).

#### Grading Job Pattern

Always follow this pattern for the `check_step_work` grading job.

- This is an optional job. It is only used if checking the results is critical for progress in the next step or if useful feedback is important.
- Runs 1 or more check steps to build useful feedback.
  - The unique check is visually indicated by the comment `# START: Check practical exercise` and `# END: Check practical exercise`
  - Do not combine checks. Keep each independent.
  - All checks should use `continue-on-error: true` flag
- All checks are combined to provide feedback by updating the last issue comment in the form of a table `exercise-toolkit/markdown-templates/step-feedback/step-results-table.md`. This job does not create any net new comments.
  - If the check fails, the comment provides useful feedback for trying again and fails the job
  - If the check passes, the comment to provides feedback that they completed what was asked and passes the job so the workflow continues to the next job - `post_next_step_content`.

See full example of workflow with grading in [`exercise-template/.github/workflows/2-step.yml`](../../../exercise-template/.github/workflows/2-step.yml).

## Integrations

### Markdown Templates

Use the `exercise-toolkit` repository for reusable markdown templates for comments and feedback.

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v4

  - name: Get response templates
    uses: actions/checkout@v4
    with:
      repository: skills/exercise-toolkit
      path: exercise-toolkit
      ref: v0.7.0  # Pin to specific version
```

### Comment Management

Use `GrantBirki/comment` action for all issue comment operations

#### Find and update last comment

```yaml
- name: Find last comment
  id: find-last-comment
  uses: peter-evans/find-comment@v3
  with:
    repository: ${{ env.ISSUE_REPOSITORY }}
    issue-number: ${{ env.ISSUE_NUMBER }}
    direction: last

- name: Update comment - checking work
  uses: GrantBirki/comment@v2.1.1
  with:
    repository: ${{ env.ISSUE_REPOSITORY }}
    issue-number: ${{ env.ISSUE_NUMBER }}
    comment-id: ${{ steps.find-last-comment.outputs.comment-id }}
    edit-mode: replace
    file: exercise-toolkit/markdown-templates/step-feedback/checking-work.md
```

#### Create new comment

```yaml

- name: Create comment - step finished
  uses: GrantBirki/comment@v2.1.1
  with:
    repository: ${{ env.ISSUE_REPOSITORY }}
    issue-number: ${{ env.ISSUE_NUMBER }}
    file: exercise-toolkit/markdown-templates/step-feedback/step-finished-prepare-next-step.md
    vars: |
      next_step_number: N
```

### Workflow State Management

Use `gh` CLI to manage workflow states:

```yaml
- name: Disable current workflow
  run: gh workflow disable "${{github.workflow}}"

- name: Enable next step workflow
  run: gh workflow enable "Step N"
```

## Trigger Patterns

- **Start Exercise**: `push` to `main` branch
- **Steps**: Event-specific (e.g., `push` with `paths`, `pull_request`, `issues`), depending what was asked of the learner to do in that step.
- **Avoid**: `push` to `main` without `paths` filter (triggers on exercise copy)

## File Organization

- Step content: `.github/steps/N-step.md`
- Workflows: `.github/workflows/N-step.yml`
- Review content: `.github/steps/x-review.md`
- Environment variables: `STEP_N_FILE` for next step content
