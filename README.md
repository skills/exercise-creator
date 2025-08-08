# Exercise Manager

This is a codespace with guidelines for developing and managing GitHub Skills exercises and supportive tooling. It provides:

- Unified settings for consistent styling (like linting).
- Tools for testing transition and grading workflows.
- Guidelines and recommendations for designing exercise steps.
- Copilot instructions and prompts to quickly make first drafts.

## Start the Codespace

1. Press the below button to start Codespace. This may take a few minutes.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/skills/exercise-manager/tree/cwb-simplify-docs)

1. Open the VS Code Command Pallette, run the following command, and select the workspace settings file.

   ```txt
   File: Open workspace from file...
   ```

   ```txt
   /exercise-manager/exercise-manager.code-workspace
   ```

> [!TIP]
> If you need to [work across multiple organizations](docs/guide/configuration/work-across-multiple-organizations.md), you will need to change a few settings.

## Make an Exercise

With the help of GitHub Copilot, making a new exercise from scratch can be very quick. Here is a `hello world` level example. It creates an outline for planning then an actual exercise! 🧑‍🚀

> [!IMPORTANT]
> Copilot is good for bootstrapping and refinement. It will make a solid first draft, but it is your responsibility as a human (with feelings and empathy) to ensure the exercise is enjoyable and meets the needs of your learners.

1. Open the Copilot Chat panel and ensure you are in `Agent` mode.

1. Use the following Copilot prompt to create a draft exercise outline.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > /create-exercise-outline
   > Make an exercise to teach the fundamentals of Git and version control.
   > Assume no prior version control experience.
   > ```

   > 💡 **Tip:** You can ask Copilot to save this outline as an issue on a repository. Alternately, Copilot can review notes from an existing issue and restructure it.

1. Review and refine the draft outline.

   > 💡 **Tip:** This may seem boring, but a few extra minutes here will make the draft exercise from Copilot much better.

1. Use the following Copilot prompt to create an actual exercise.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > /bootstrap-exercise-from-outline
   > ```

1. Review and refine the draft exercise. 🧐

   > 💡 **Tip:** We are working on prompts to help with this. If you have ideas, please [open a new feature issue](issues/new?template=BLANK_ISSUE&title=replace-me:%20prompt%20name&body=replace-me:%20I%20have%20an%20idea%20for%20a%20prompt%20to%20help%20refine%20exercises)! 🧑‍🚀

1. Ask Copilot to review the exercise for common issues.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > /review-exercise
   > ```

1. Test it with your friends and coworkers.

1. Publish it and enjoy! 🤓

## Deeper Exercise Development

Please see the [Skills docs](/docs/README.md) for the full guidelines on planning, design, testing, and maintenance.

## Contributing

We are very open to contributions and enhancements from the community! 🧑‍🚀

Please feel free to [create an issue](/issues/new?template=BLANK_ISSUE) or submit a pull request.
