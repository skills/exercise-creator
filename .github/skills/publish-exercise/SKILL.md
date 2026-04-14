---
name: publish-exercise
description: Publish a GitHub Skills exercise repository safely to GitHub. Use when asked to create the remote repository, prepare repository settings, and publish an exercise after review is complete.
---

# Publish a GitHub Skills exercise

Use this skill when the repository is ready to go live and the task is release-oriented rather than content authoring.

## Primary source in this repository

- Prompt baseline: `.github/prompts/publish-exercise.prompt.md`

## Workflow

1. Check whether the current repository already has a remote.
   - Only consider repositories under `/workspaces/repos/**`.
   - If a remote already exists, do nothing.
2. Determine the likely GitHub owner:
   - authenticated `gh` user
   - environment variables
   - nearby repositories in the same parent folder
3. Ask the user for confirmation before creating the remote repository.
4. Create an empty private repository with the same repository name.
5. Disable Actions on the remote repository before pushing exercise content.
6. Update repository settings before publishing:
   - set `is_template=true`
   - set the description from the exercise README introduction
7. Push the repository to `origin main`.
8. After publishing:
   - enumerate workflows
   - disable all of them so they do not accidentally trigger
   - re-enable Actions while leaving workflows disabled

## Command guidance

Use the workflow and command pattern from `.github/prompts/publish-exercise.prompt.md`, including:

- `gh repo create`
- `gh api` to change Actions permissions
- `gh api` to set repository metadata
- `git push -u origin main`

## Safety requirements

- Do not publish without explicit user confirmation.
- Do not continue if the push fails; surface the failure clearly.
- Assume permissions issues are common and tell the user when a manual publish step is required.
- Leave the remote in a safe post-publish state with workflows disabled.
