# Exercise Manager

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
- Storyline Continuity

If applying significant changes to an existing exercise, please use a forking process. This will allow testing the exercise from the default branch like normal.

### Design

While creating an exercise, please use the [design recommendations](docs/2-design/design.md) to provide a familiar learning experience between exercises. In covers topics like:

- Markdown Recommendations
- Using the [Exercise Toolkit](https://github.com/skills/exercise-toolkit)

### Testing

After an exercise has learning theory, activities, and workflows, it will need to be tested. Please follow the [testing](/docs/3-testing/testing.md) guide. It covers topics like:

- Running transition workflows locally
- Verifying grading workflows locally
- Example event payloads
- User testing

### Publishing and Maintenance

When an exercise is finished and ready to be published, please use the [publish checklist](docs/4-publishing/checklist.md) for **before**, **during**, and **after** checks. It covers topics like:

- Maintenance
- Repository settings
- Discussions
- End of life

## Contributing

We are very open to contributions and enhancements from the community! 🧑‍🚀

Please feel free to create an issue or submit a pull request. More details will come later.

## The Future

Right now, exercises are created manually. A previous exercise is typically used as the starting point for a new exercise. However, we hope to eventually shift to a Copilot-centeric approach. This is an outline of our current thinking.

![New Exercise Flowchart](docs/new-exercise-flowchart.drawio.svg)

1. Critical GitHub features are added to a learning coverage map.
2. Existing Skills exercise are reviewed and the learning coverage map is updated.
3. Copilot is prompted to analyze the learning coverage map and suggest an exercise outline.
4. The Exercise Developer revises the outline, either directly or with additional prompts to Copilot.
5. Copilot is prompted to produce a draft exercise using the new outline and existing exercise guidelines, templates, etc.
6. The Exercise Developer revises the exercise, either directly or with additional prompts to Copilot.
7. The new skill is finished and added to the catalog.
8. After some usage, feedback is used to update the existing exercise(s) and guidelines.
