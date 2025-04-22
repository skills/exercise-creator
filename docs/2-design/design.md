# Design

The following are guidelines and recommendations. Using them will likely make development easier, but it is not required.

Remember:

- The primary goal is to teach a concept.
- The secondary goal is to leave an example for future reference.

## Tools

The [Exercise Toolkit](https://github.com/skills/exercise-toolkit) repository provides reusable workflows and markdown templates.

- [text-variables](https://github.com/skills/action-text-variables) - A GitHub Action that enables loading a template and replacing variables.

## Step Content

If you are unfamiliar, please see the [planning guide](../1-planning/planning.md) for the breakdown of an exercise into steps and activities.

Steps are used to communicate a piece of the exercise. They are fairly short, introducing a concept and providing a way to quickly practice.

It step typically looks like this:

1. A **little bit** of story.
1. **Enough** theory to build feature awareness.
1. A **short** step-by-step activity to apply the new theory.
   - It's ok to have a few activities.

### Tips: Theory Section

- Instead of listing references at the end, change key words into links. Most people instinctively ignore the "references" section.

- When possible, try to follow the [GitHub Docs style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md).

- Sparingly use [Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) so they don't get ignored.

- Each exercise is not just a tutorial, but also an example. New developers might will simply take the exercise, but experienced developers will explore it to see how it works.

- Avoid use of acronymns and short hand. For example, use `repository` instead of `repo`.

- For story content, keep phrasing professional, polite, and inviting.

- Be concise. More content means more to update.

- Avoid including content that will likely change, for example usage quotas and limits.

- Don't copy from GitHub Docs. Instead introduce it and reference the GitHub Docs page. This will also indirectly teach the learner to that the Docs are the best place to search.

### Tips: Activity Section

- Keep it short, sweet, and slightly techincal/challenging. Too simple and they will become board. Too complex and they will give up.

- Keep instruction lists to 2 layers. If more seem needed, that is an indicator the activity probably needs split.

- Each activity should only tackle only 1 item introduced in the theory. It's ok to have a few activities in 1 step.

- Make sure to mention context changes. Examples:

  - Between the web interface and the codespace.
  - Between the exercise issue and the working tab, even though they are in the same repository.

- Describe the location of an object, before clicking it. If the description is more than a few words, shorten it and include an image.

- Lists don't support normal [Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts). Use our [suggested Alert alternatives](formatting.md#alerts) instead.

## Step Grading and Transition

A GitHub Actions workflow is used to monitor the learner's progress for the active step.

When the user triggers the action, it will check for expected outputs and add an issue comment with feedback, typically informing the user they have passed or highlighting a mistake to be fixed. Each learning step has it's own workflow and is structured into 3 jobs:

1. `find_exercise` - Calls a reusable workflow that finds the appropriate issue and returns the issue url for use in the next jobs.
2. `check_step_work` - Verifies the step's results and transitions to next learning step.

   - Loads relevant content for grading the step's activities.
   - Runs 1 or more grading checks to build useful feedback.
     - The unique check is visually indicated by the comment `# START: Check practical exercise` and `# END: Check practical exercise`
     - Boilerplate steps are outside this
   - If the check fails, an issue comment is updated/created to provide useful feedback for trying again.
   - If the check passes, an issue comment is updated/created to provide feedback that they did a good job.

3. `post_next_step_content` - Loads the next step content and creates an issue comment.
   - Disables the current step workflow, so it will never run again.
   - Enables the next step workflow.

> [!CAUTION]
> Do **NOT** create a workflow that triggers on `main` without a `paths` filter.  
> Do **NOT** design the `paths` filter for an **existing** file, only new files.  
> This will cause the workflow to run early, when the exercise is copied to the learner's account.

If it is absolutely necessary to create a workflow triggered on `main` without any filtering, you can avoid the first run by updating the `if` condition to include `github.run_number != 1`

### Grading Types

> [!IMPORTANT]
> Only add a grading steps if useful feedback can be provided to guide the learner to correct the mistake (and retrigger grading).

Below are some ideas for the grading job.

- A file contains 1 (or more) of a key word/phrase.

- Checking validity/content at a provided URL. Examples:

  - A new issue was created (in a different repo).
  - The user started a web service in their codespace.

- Answering a multiple choice question. Examples:
  - Learner checked a box in an issue comment.

### Tips: Grading

- It is ok **NOT** to have a grading job in the workflow. This will mean the lesson will progres regardless of work.Better to be safe than leave a user stuck and confused.

- Existing markdown templates should be used as often as possible. See [Tools](#tools) above. Templates cover the typical sistuations such as:

  - Creating the learning issue
  - Providing temporary status updates
  - Sharing grading results
  - Congratulating when finished

- Ensure the workflows are easy to follow and include references. Many developers will use them as references.

- Use Mona and the ocotcats for responding to the user. The [exercise toolkit](https://github.com/skills/exercise-toolkit) provides premade templates.

- Use friendly, casual, active responses for feedback.
  - How would you interact with your friend or coworker?
  - Use emoji to convey a positive tone.

## Upcoming Releases

Product features are always released in stages, typically with the last step being a public preview.

- A new/updated step can be created in advance. Use a separate transition workflow to allow the learner to try the alternative/bonus content.

- Example:

  - The learner adds an issue comment with a special phrase asking for the preview content. This triggers a separate workflow that adds a comment or additional issue with the special content.

- Consider disabling the grading workflow until general availability.

## Side learnings, bonus content, and easter eggs

- Nothing for now, but we have ideas. 🐣

- If you have ideas, write them down so you don't forget! 🤫
