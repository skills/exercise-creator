## Exercise

A GitHub Skills exercise is a GitHub repository with particular files to provide a learning experience.

The learner copies the exercise to their account and various Actions workflows are used to guide the them.

### What is a typical flow?

1. The learner visits the Skills website and selects an exercise, taking them to the exercise repository.
1. The learner is introduced via the README and presses the **Copy Exercise** button.
1. Upon copying the exercise, a GitHub Actions workflow begins the lessons.
   1. A new issue is created on the repository.
   1. The main readme is updated to provide a link to the new issue.
1. As the learner works on the issue, GitHub Actions workflows automatically check the work and provide the next steps.
1. The learner continues until all steps are finished.
1. A final GitHub Actions workflow closes the issue and updates the README with a congratulations message.

### What content is in an exercise?

An exercise should focus on teaching a single NEW skill.
It will naturally use previously learned skills and strengthen them.
However that should not be a main focus.

The detail level should be appropriate for the level of the exercise. Generally speaking, the more beginner friendly, the more explicit the steps. The more advanced, the more open ended the solutions.

### Architecture

It consists of 3 parts:

- Theory
- Activity
- Workflow - Monitor the learner's activity to provide feedback and grading, Transition to the next content.

- An exercise is organized into 5 or less steps.
- Each step builds on the previous step.
- Each step's markdown file and grading/transition workflow is prefixed with a number to keep them in order.
- Step content is stored in the `.github/steps/` folder.
- Grading and transition workflows are stored in the `.github/workflows/` folder.
- For now, please only use one issue. If the lesson seems complex to justify multiple issues, it is probably too long for a 30-60 min tutorial.
  - Note: We have plans to make a multi-issue style exercise, but that likely be opt-in or bonus content.

> [!TIP]
> Make the first step easy so the user can build confidence.

## Content

Skills exercises are organized to build awareness level **_skill_** of a one (or a few) GitHub related features or products.

- What specific skills does the learner leave the exercise with?

- What will the learner be able to do after completing the exercise?

- Is the topic specific and small enough to fit within 1 hour.

  - Most learners tend to drop off after 30-45 minutes.

  - We've found that it takes learners about four times the length of an expert to complete an exercise.

  - If your exercise needs more steps, consider splitting your learning objective into multiple exercises.

### Sample Code

- If providing sample code, provide a codespace configuration so the learner can try running it.

- The dev container config does not allow setting a port as public. Instead, add this command to the `postCreate.sh` script.

  ```bash
  gh cs ports visibility <PORT_NUMBER>:public -c $CODESPACE_NAME
  ```

## Upcoming Releases

Product features are always released in stages, typically with the last step being a public preview.

- A new/updated step can be created in advance. Use a separate transition workflow to allow the learner to try the alternative/bonus content.

- Example:

  - The learner adds an issue comment with a special phrase asking for the preview content. This triggers a separate workflow that adds a comment or additional issue with the special content.

- Consider disabling the grading workflow until general availability.

## Side learnings, bonus content, and easter eggs

- Nothing for now, but we have ideas. 🐣

- If you have ideas, write them down so you don't forget! 🤫
