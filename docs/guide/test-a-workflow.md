# Test a Workflow

The following testing flow allows you to develop a small section of workflow locally without constantly pushing to GitHub.

1. Disable all jobs in the workflow except the one to be tested.
   - Use the `if: false` option or comment out the lines.
1. Simplify the job to be tested.
   1. Use environment variables to set the repository and issue number. Point it to somewhere you can experiment freely, not your exercise repo.
   1. Disable all job steps.
   1. Enable only the required job steps.
1. Run **nektos/act** to trigger the workflow with a sample payload (passing, typical mistakes, etc.).
1. Review logs and refine.
1. Repeat above for each step in the job.
1. Repeat above for each job in the workflow.
1. Enable everything, except disable workflow, and run the entire workflow with sample payloads

## Running workflows locally

Most grading/transition workflows can be verified locally before testing them in the actual exercise flow.

1. Ensure you are in the Codespace and have [configured nektos/act](configuration/configure-act-for-local-testing.md).
1. Ensure any required environment variables are in the `.actrc.vars` file.
   - This is loaded from exercise manager
   - This will rarely be needed.
1. Ensure any required secrets are in the `.actrc.secrets` file.
   - This prevents the need to save your PAT in each repository (exercise) folder.
1. Ensure your dummy repository and issue are specified in the `.actrc.env` file.
   - This will send all commands to a different repository to avoid spamming the in-development repository (exercise).
1. Create expected workflow payloads for each exercise step. There are several [sample payloads](../reference/workflow-payloads/). Store these in a place you won't accidentally commit.

   <img width="200" src="https://github.com/user-attachments/assets/ff8d58bb-2866-48c0-b880-37f95f9ba566" />

   > Ref: For more info on payloads, see the [Act - event payloads](https://nektosact.com/usage/index.html#events) docs.

1. Create example workflow commands for each exercise step. Store these in a place you won't accidentally commit. Example:

   ```bash
   act push -W .github/workflows/0-start-exercise.yml -e .temp/workflow-payloads/0-start-exercise.json

   act push -W .github/workflows/1-preparing.yml -e .temp/workflow-payloads/1-preparing.json

   act issue_comment -W .github/workflows/2-running-our-extension.yml -e .temp/workflow-payloads/2-running-our-extension.json

   act issue_comment -W .github/workflows/3-connecting-to-github.yml -e .temp/workflow-payloads/3-connecting-to-github.json

   act push -W .github/workflows/4-customizing-our-extension.yml -e .temp/workflow-payloads/4-customizing-our-extension.json

   act pull_request -W .github/workflows/5-merge-our-changes.yml -e .temp/workflow-payloads/5-merge-our-changes.json
   ```

   > Ref: For more info on running workflows locally, see the [Act - run a specific workflow file](https://nektosact.com/usage/index.html#workflows) docs.

> [!TIP]
> If the current [sample payloads](../reference/workflow-payloads/) do not cover your situation, you can get a real example payload by adding a step that prints the full context, then run it on actual github.com.
>
> ```bash
> - name: Show full context and event payload
>   run: echo '${{ toJSON(github) }}'
> ```
