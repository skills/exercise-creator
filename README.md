# Skills Manager

This is a codespace and toolkit for developing and managing GitHub Skills exercises and related Actions workflows.
It provides settings and guides for consistent styling, tools to test grading workflows, and tools to manage all exercises as an ecosystem.

Please use the below guides to start the codespace and start building! 🤓

## How to Develop

- [Initial Setup](docs/initial-setup.md) - A step-by-step guide to start developing.
- [Develop a Skills Exercise](docs/develop-a-skill-exercise.md) - Important tasks and guidelines.

### New Exercise Flowchart

![New Exercise Flowchart](docs/new-exercise-flowchart.drawio.svg)

1. Critical GitHub features are added to a learning coverage map.
2. Existing Skills exercise are reviewed and the learning coverage map is updated.
3. Copilot is prompted to analyze the learning coverage map and suggest an exercise outline.
4. The Exercise Developer revises the outline, either directly or with additional prompts to Copilot.
5. Copilot is prompted to produce a draft exercise using the new outline and existing exercise guidelines, templates, etc.
6. The Exercise Developer revises the exercise, either directly or with additional prompts to Copilot.
7. The new skill is finished and added to the catalog.
8. After some usage, feedback is used to update the existing exercise(s) and guidelines.

> [!IMPORTANT]
> The guidelines do not currently include suggestions for automated tests, user acceptance, or other QA requirements.
