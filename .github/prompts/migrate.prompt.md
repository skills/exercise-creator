Your goal is to migrate the learning flow of an existing GitHub Skills exercise with minimal modifications to the content.

- The existing exercise uses github actions workflows to replace the readme content.
- The new learning flow uses github actions to create an issue and share exercise steps as issue comments.

### Migrations steps

1. If not already provided, ask for the folder containing the existing exercise to be migrated.

2. Do not make modifications yet. Review the following guidelines.

   - The [overview guide](/workspaces/skills-manager/README.md) provides an outline of what a Skills exercise is and references to other materials.
   - The [planning guide](/workspaces/skills-manager/docs/1-planning/planning.md) provides an outline of how exercises are structured.
   - The [design guide](/workspaces/skills-manager/docs/2-design/design.md) explains design of the learning steps and activities.
   - The [testing guide](/workspaces/skills-manager/docs/3-testing/testing.md) explains how to test the transition/grading workflows.
   - The [exercise toolkit](/workspaces/exercise-toolkit/) provides reusable workflows and templates.

3. Review an existing exercise repository that follows the current learning flow.

   - The [getting-started-with-github-copilot](https://github.com/skills/getting-started-with-github-copilot) exercise is a good reference.

4. Review the existing course content to determine required updates.

   - The exercise introduction is in the `<the-existing-exercise>/README.md` file.
   - The learning steps and activities are in the `<the-existing-exercise>/.github/steps/` folder. Reminder: Each numbered `.md` file represents one step in the exercise.
   - The transition workflows are in the `<the-existing-exercise>/.github/workflows/` folder. Reminder: Each numbered `yaml` file provides the transition from that learning step to the next learning step.

5. Having reviewed the above, now provide an outline of actions to perform the migration.Ask for confirmation before proceeding.
