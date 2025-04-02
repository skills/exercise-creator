# Skills Manager

This is a codespace with guidelines for developing and managing GitHub Skills exercises and supportive tooling. It provides:

- Unified settings for consistent styling (like linting).
- Tools for testing transition and grading workflows.
- Guidelines and recommendations for designing exercise steps.

Please use the below guides to start the codespace and start building! 🤓

## How to Develop Exercises

Before making an exercise, please follow the [Initial Setup guide](docs/initial-setup.md) for instructions on preparing this codespace.

### Planning

Before creating an exercise, please use the [planning guide](docs/1-planning/planning.md) to create an outline. It covers topics like:

- Important Considerations
- Exercise Structure
- [Storylines](docs/1-planning/storylines.md)


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
