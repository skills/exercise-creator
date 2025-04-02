# Planning

There are a few perspectives to consider for planning a new Skills Exercise.

- **Learning Content** - The primary subject to be taught and a few important theory points to be shared at each step.
- **Practical Activities** - Hands-on practical work to use the newly learned theory.
- **Storyline Fit** - Each exercise uses the theory and practical work to affect an ongoing [storyline](storylines.md), across exercises. (Like episodes in a TV series or scenes in a movie.)
- **Step Transition** - Actions workflows to transition the learner from the current step to the next step.
- **Step Grading** - Actions workflows to grade each step and provide feedback.
- **Catalog Impact** - Each exercise should feel familiar and add a **_Skill_** in the learner's capabilities (ideally covering all features of GitHub).

Please use the [new exercise issue](new-exercise-issue.example.md) example as a template.

## Skills Exercise Content

Skills exercises are organized to build awareness level **_skill_** of a one (or a few) GitHub related features or products.

- What specific skills does the learner leave the exercise with?

- What will the learner be able to do after completing the exercise?

- Is the topic specific and small enough to fit within 1 hour.

  - Most learners tend to drop off after 30-45 minutes.

  - We've found that it takes learners about four times the length of an expert to complete an exercise.

  - If your exercise needs more steps, consider splitting your learning objective into multiple exercises.

## Skills Exercise Structure

A Skills exercise is communicated to the learner by assigning an **issue** and adding **comments**, similar to a real development workflow. (As of now, just one issue.)

- An exercise is organized into 5 or less steps.
- Each step is a single markdown file.
- Each step builds on the previous step.
- Workflows monitor the learner's activity to provide feedback and grading, and transition to the next content.
- Each step's markdown file and grading/transition workflow is prefixed with a number to keep them in order.
- Step content is stored in the `.github/steps/` folder.
- Grading and transition workflows are stored in the `.github/workflows/` folder.
- For now, please only use one issue. If the lesson seems complex to justify multiple issues, it is probably too long for a 30-60 min tutorial.
  - Note: We have plans to make a multi-issue style exercise, but that likely be opt-in or bonus content.

> [!TIP]
> Make the first step easy so the user can build confidence.

### Exercise Step Structure

Each exercise step is communicated as a comment on the issue, similar to a real person providing guidance and feedback.

- Each step has 2 components: theory and practice
  - The theory builds context by introducing a new idea and sharing the fundamentals.
  - The practice activity is a step-by-step guide interacting with actual GitHub.
- Each step is a single markdown file and pairs with a [grading workflow](#exercise-grading).
- Each step includes a short **very** short story element, justifying the need to do the upcoming practical activity.
- Each step introduces a small amount of theory. The goal is awareness, not teaching.
- Each step includes references to support more learning. They should be naturally integrated, not a list at the end.
- Each step includes 1 to 3 **Activities**.

### Step Activity Structure

After the exercise step and its theory are introduced, the practical activity is provided. This is a step-by-step instructional guide that applies the new learnings in the real world, aka on actual GitHub.

> [!TIP]
> Don't confuse the exercise steps (high level) with the activity steps (detailed). We just don't have better nomenclature yet.

- An activity should only practice one concept. This will help keep it short.
- An activity's steps are numbered to indicate order. This also helps the learner keep their place.
- The activity should stay instructional to keep it clean. Avoid providing theory.
