---
agent: "agent"
description: "Generate a grading workflow job for a specific exercise step."
---

# Generate Grading Workflow

Create or add a `check_step_work` grading job to an existing step workflow.

## Prerequisites

- Identify what the learner creates or modifies in this step's activity.
- Determine what constitutes success (file exists, keyphrase present, branch created, etc.).

## Process

1. **Understand the step.** Read the step content file (`.github/steps/N-*.md`) to understand what the learner is expected to produce.

2. **Design the checks.** Each check should be:
   - **Independent** — don't combine checks. One step per verification.
   - **Specific** — check exactly one thing.
   - **Actionable on failure** — the learner must know exactly what to fix.

3. **Select the grading actions:**

   | What to check | Action |
   |---------------|--------|
   | File exists | `skills/exercise-toolkit/actions/file-exists@v0.8.1` |
   | Keyphrase in file | `skills/action-keyphrase-checker@v1` |
   | File content pattern | Custom `run` step with `grep` |
   | Branch exists | Custom `run` step with `git` |
   | URL is reachable | Custom `run` step with `curl` |
   | Issue was created | Custom `run` step with `gh` CLI |

4. **Generate the grading job** following this pattern:

   ```yaml
   check_step_work:
     name: Check step work
     runs-on: ubuntu-latest
     needs: [find_exercise]
     env:
       ISSUE_REPOSITORY: ${{ github.repository }}
       ISSUE_NUMBER: ${{ needs.find_exercise.outputs.issue-number }}

     steps:
       - name: Checkout
         uses: actions/checkout@v6

       - name: Get response templates
         uses: actions/checkout@v6
         with:
           repository: skills/exercise-toolkit
           path: exercise-toolkit
           ref: v0.8.1

       - name: Find last comment
         id: find-last-comment
         uses: peter-evans/find-comment@v4
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
           file: exercise-toolkit/markdown-templates/step-feedback/checking-work.md
           edit-mode: replace

       # START: Check practical exercise

       # (Insert checks here — each with continue-on-error: true)

       - name: Update comment - step results
         uses: GrantBirki/comment@v2.1.1
         with:
           repository: ${{ env.ISSUE_REPOSITORY }}
           issue-number: ${{ env.ISSUE_NUMBER }}
           comment-id: ${{ steps.find-last-comment.outputs.comment-id }}
           edit-mode: replace
           file: exercise-toolkit/markdown-templates/step-feedback/step-results-table.md
           vars: |
             step_number: N
             results_table:
               - description: "Human-readable check description"
                 passed: ${{ steps.CHECK_ID.outcome == 'success' }}

       # END: Check practical exercise

       - name: Fail job if not all checks passed
         if: contains(steps.*.outcome, 'failure')
         run: exit 1
   ```

5. **Update the workflow** to include `check_step_work` in `post_next_step_content.needs`:
   ```yaml
   post_next_step_content:
     needs: [find_exercise, check_step_work]
   ```

6. **Write result descriptions** that follow feedback psychology:
   - ✅ Success: "Found `copilot-instructions.md` in `.github/` directory"
   - ❌ Failure: Describe what was expected and where to look. The learner should know exactly what to fix.

## Guidelines

- Only add grading if useful feedback can guide the learner to correct a mistake.
- All checks must use `continue-on-error: true`.
- The grading job updates the last comment — it does not create new ones.
- Keep checks independent. Never combine two verifications into one step.
