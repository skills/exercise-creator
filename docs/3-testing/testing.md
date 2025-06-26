# Testing

Each learning step has an associated workflow with the same name.

It contains 3 parts that need verified.

1. **Trigger** - Typically when the last step of an activity.
2. **Grading job** - Verifies output the learner created during the activity.
3. **Post next content job** - Shares the markdown file containing the next exercise step content.

The general testing flow will look similar to:

1. Disable all jobs in the workflow except the one to be tested.
1. Simplify the job to be tested.
   1. Override issue url environment variable. Point it to somewhere you can experiment freely.
   1. Disable all job steps.
   1. Enable only the required job steps.
1. Run **nektos/act** to trigger the workflow with a sample payload (passing, typical mistakes, etc.).
1. Review logs and refine.
1. Repeat above for each step in the job.
1. Repeat above for each job in the workflow.
1. Enable everything, except url override, and run the entire workflow with sample payloads.

### Tips

- Only create a grading workflow, if failing would provide useful feedback to correct their mistake.
- Workflows might be ran multiple times. Check for continuity issues, if using the option to edit the last comment.
  - FYI, the option to edit the last comment is relative to the user.

## Running workflows locally

Most grading/transition workflows can be verified locally before testing them in the actual exercise flow.

1. Ensure you are in the Codespace and have [configured nektos/act](/docs/initial-setup.md#configure-nektosact).
1. Ensure any required environment variables are in the `.actrc.vars` file.
   - This is loaded from skills manager
   - This will rarely be needed.
1. Ensure any required secrets are in the `.actrc.secrets` file.
   1. This is loaded from skills manager to avoid saving your PAT in several locations.
1. Ensure you have a `.env` file in skills-manager setup filled with environment variables for testing the workflows
   1. Environment variables in the `.env` file will override those used in the actual workflow (e.g `env` blocks). This means you can set your own "spam" issue for testing purposes.
   1. This is loaded from skills manager whenever you run `act` commands.
1. Create expected workflow payloads for each exercise step. There are several [sample payloads](/docs/3-testing/workflow-payload.examples/). Store these in a place you won't accidentally commit.

   <img width="200" alt="image" src="https://github.com/user-attachments/assets/ff8d58bb-2866-48c0-b880-37f95f9ba566" />

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

   > Ref: For more infor on running workflows locally, see the [Act - run a specific workflow file](https://nektosact.com/usage/index.html#workflows) docs.

> [!TIP]
> If the current [sample payloads](/docs/3-testing/workflow-payload.examples/) and aren't enough, you can get a real example payload by adding a step that prints the full context, then run it on actual github.com.
>
> ```bash
> - name: Show full context and event payload
>   run: echo '${{ toJSON(github) }}'
> ```

## User Testing

The only true test is giving the exercise a trial run.

- Try the exercise yourself on actual GitHub, with a dummy account. See what happens, take notes, and fix bugs.
- Once it works for you, knowing how it is supposed to work, try it others.

  - someone familiar with the topic (technical review)
  - someone unfamiliar with the topic (potential learner)
  - outside of GitHub (make sure nothing requires internal permissions)

- How does it look on a smaller screen, for example split screen.

### Beta testers

Beta testers are probably the most important part of making a learning exercise. Different perspectives and backgrounds will bring up mistakes, misinterpertations, and bad assumptions. So, don't skip this!

IMPORANT: Track who is testing on the issue. Have them put their feedback on the issue. If it comes in a different form (like email), transfer it to the issue.

- For contractors and external beta testers, add them directly to the repo. All internal employees already have read access.

- Asking for help in group chats generally doesn't work well. Everyone assumes someone else will help and then noone helps.

- Do not share the link in general chats. You will not know who is accessing it. Instead, collect names and share it with them personally.

- Build personal connection with volunteers before and after the request. Noone likes feeling used. Plus we all like making new friends!

- Be clear that you appreciate them. You can say the generic "thank you", but follow up with specifics. Point out something from their review that you genuinely liked:  a "gotcha" or "Oh wow, how did I miss that" type moment.


