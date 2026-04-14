# Exercise Creator

<img src="https://octodex.github.com/images/Professortocat_v2.png" alt="Professortocat" width="150" align="right"/>

This is a codespace with guidelines for developing and managing GitHub Skills exercises and supportive tooling. It provides:

- Unified settings for consistent styling (like linting).
- Tools for testing transition and grading workflows.
- Guidelines and recommendations for designing exercise steps.
- Copilot instructions and prompts to quickly make first drafts.

## Start the Codespace

1. (Optional) For additional permissions options, fork the repository to your account/organization.
   - By default a Codespace only has access to the original repository and your user space.
   - If you need to [edit exercises across multiple accounts/organizations](docs/guide/configuration/work-across-multiple-organizations.md), you will need to change a few settings.

1. Press the below button to start the Codespace. This may take a few minutes.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/skills/exercise-creator/tree/cwb-simplify-docs)

1. Open the [VS Code Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette). Run the following command and select the workspace settings file.

   ```txt
   File: Open workspace from file...
   ```

   ```txt
   /exercise-creator/exercise-creator.code-workspace
   ```

## Make an Exercise

<img src="https://octodex.github.com/images/manufacturetocat.png" alt="Manufacturetocat" width="150" align="right"/>

With the help of GitHub Copilot, making a new exercise from scratch can be very quick. Here is a `hello world` level example. It creates an outline for planning then an actual exercise! 🧑‍🚀

> [!IMPORTANT]
> Copilot is good for bootstrapping and refinement. It will make a decent first draft, but it is your responsibility as a human (with feelings and empathy) to ensure the exercise is enjoyable and meets the needs of your learners.

1. Open the Copilot Chat panel and ensure you are in `Agent` mode.

1. Choose either repo Agent Skills or slash prompts as your entry point.

   - Repo Agent Skills now live in `.github/skills/` and are available to Copilot agent mode and Copilot CLI when you ask naturally for help with outlining, bootstrapping, reviewing, or publishing an exercise.
   - The existing slash prompts in `.github/prompts/` still work and remain a good explicit option.

1. Use the following Copilot prompt to create a draft exercise outline.

   ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)

   ```prompt
   /create-exercise-outline
   Make an exercise to teach the fundamentals of Git and version control.
   Assume no prior version control experience.
   Put it in the `/workspaces/repos/` folder.
   ```

   Or ask naturally, for example: `Create a GitHub Skills exercise outline for teaching Git fundamentals to beginners.`

   > 💡 **Tip:** You can also ask Copilot to save this outline as an issue on a repository. Alternately, Copilot can review notes from an existing issue and restructure it.

1. Manually review and refine the draft exercise outline.

   > 💡 **Note:** This may seem boring, but a few extra minutes here will make the actual draft exercise from Copilot much better.

1. Use the following Copilot prompt to create an actual exercise.

   ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)

   ```prompt
   /bootstrap-exercise-from-outline
   ```

   Or ask naturally: `Bootstrap this exercise repository from the approved outline.`

1. Manually refine the draft exercise to make it production worthy. 🧐

   > 💡 **Tip:** We are working on prompts to help refine the initial draft exercise. If you have ideas, please [open a new feature issue](https://github.com/skills/exercise-creator/issues/new?template=BLANK_ISSUE&title=replace-me:%20prompt%20name&body=replace-me:%20I%20have%20an%20idea%20for%20a%20prompt%20to%20help%20refine%20exercises)! 🧑‍🚀

1. Ask Copilot to review the exercise for common issues.

   ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)

   ```prompt
   /review-exercise
   ```

   Or ask naturally: `Review this GitHub Skills exercise draft for learner flow, workflow correctness, and formatting issues.`

1. Use the following Copilot prompt to publish the exercise to your account.

   ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)

   ```prompt
   /publish-exercise
   ```

   Or ask naturally: `Publish this exercise repository to my GitHub account after checking the remote and repository settings.`

1. Go to the exercise repo and give it a test run! 😎

1. Share it with your friends and coworkers! 🥳 🚀

## Work on an Existing Exercise

The Exercise Creator is structured to handle multiple repositories via a dedicated `repos` folder. We recommend organizing exercises in this space.

1. Get the URL for your existing exercise repository. Example:

   ```
   https://github.com/skills/getting-started-with-github-copilot.git
   ```

1. In the Codespace terminal, navigate to the `/workspaces/repos` folder.

   ```bash
   cd /workspaces/repos/
   ```

1. Clone the exercise.

   ```bash
   git clone https://github.com/skills/getting-started-with-github-copilot.git
   ```

## Deeper Exercise Development

Please see the [Skills docs](/docs/README.md) for the full guidelines on planning, design, testing, and maintenance.

## Contributing

We are very open to contributions and enhancements from the community! 🧑‍🚀

Please feel free to [create an issue](https://github.com/skills/exercise-creator/issues/new?template=BLANK_ISSUE) or submit a pull request.
