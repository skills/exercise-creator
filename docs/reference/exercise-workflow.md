# Exercise Step Workflow

Each learning step has an associated workflow with the same name.

It contains 3 parts that need verified.

1. **Trigger** - Typically when the last step of an activity.
2. **Grading job** - Verifies output the learner created during the activity.
3. **Post next content job** - Shares the markdown file containing the next exercise step content.

## Overview

A GitHub Actions workflow is used to monitor the learner's progress for the active step.

When the user triggers the action, it will check for expected outputs and add an issue comment with feedback, typically informing the user they have passed or highlighting a mistake to be fixed. Each learning step has it's own workflow and is structured into 2 or 3 jobs:

1. `find_exercise` - Calls a reusable workflow that finds the appropriate issue and returns the issue url for use in the next jobs.

1. (optional) `check_step_work` - Verifies the step's results and transitions to next learning step.

   - This is an optional job. It is only used if checking the results is critical for progress in the next step or if useful feedback is important.
   - Loads relevant content for grading the step's activities.
   - Runs 1 or more grading checks to build useful feedback.
     - The unique check is visually indicated by the comment `# START: Check practical exercise` and `# END: Check practical exercise`
     - Boilerplate steps are outside this.
     - Do not combine checks. Keep each independent.
     - All checks should use `continue-on-error: true`
   - All checks are combined to provide feedback by updating the last issue comment, typically as a table. This job does not create any net new comments.
     - If the check fails, the comment provides useful feedback for trying again and fails the job
     - If the check passes, the comment to provides feedback that they completed what was asked and passes the job so the workflow continues to the next job - `post_next_step_content`.

1. `post_next_step_content` - Loads the next step content and creates an issue comment.

   - Comments that the previous step is finished (unless it was the first step)
   - Disables the current step workflow, so it will never run again.
   - Enables the next step workflow.
   - Comments with the next step content
   - Comments that Mona is watching for progress (unless it was the last step)

1. `finish_exercise` - Calls a reusable workflow that congratulates the learner and closes the issue.

> [!CAUTION]
> Do **NOT** create a workflow that triggers on `main` without a `paths` filter.
> Do **NOT** design the `paths` filter for an **existing** file, only new files.
> This will cause the workflow to run early, when the exercise is copied to the learner's account.

If it is absolutely necessary to create a workflow triggered on `main` without any filtering, you can avoid the first run by updating the `if` condition to include `github.run_number != 1`

## Tips

- Only create a grading workflow, if failing would provide useful feedback to correct their mistake.
- Workflows might be ran multiple times. Check for continuity issues, if using the option to edit the last comment.
  - FYI, the option to edit the last comment is relative to the user.

### Grading Types

> [!IMPORTANT]
> Only add a grading steps if useful feedback can be provided to guide the learner to correct the mistake (and retrigger grading).

Below are some ideas for the grading job.

- A file contains 1 (or more) of a key word/phrase. For that purpose use [skills/action-keyphrase-checker](https://github.com/skills/action-keyphrase-checker)
- A file or set of files was created. For that purpose use [file-exists](https://github.com/skills/exercise-toolkit/tree/main/actions/file-exists) action

- Checking validity/content at a provided URL. Examples:

  - A new issue was created (in a different repo).
  - The user started a web service in their codespace.

- Answering a multiple choice question. Examples:
  - Learner checked a box in an issue comment.

### Tips: Grading

- It is ok **NOT** to have a grading job in the workflow. This will mean the lesson will progress regardless of work. Better to be safe than leave a user stuck and confused.

- Existing markdown templates should be used as often as possible. See [Tools](#tools) above. Templates cover the typical situations such as:

  - Creating the learning issue
  - Providing temporary status updates
  - Sharing grading results
  - Congratulating when finished

- Ensure the workflows are easy to follow and include references. Many developers will use them as references.

- Use Mona and the octocats for responding to the user. The [exercise toolkit](https://github.com/skills/exercise-toolkit) provides pre-made templates.

- Use friendly, casual, active responses for feedback.
  - How would you interact with your friend or coworker?
  - Use emoji to convey a positive tone.
