# Develop a Skills Course

There are a few roles related to Skills Course development.

- **Content Development** - The core learning content organized into 3-5 learning steps. One markdown file per step.
- **Scoring Development** - Actions workflows to grade each step and provide feedback.
- **Skills Catalog Development** - A holistic view of all Skills Courses. Provide templates, reusable workflows, storylines, and toolkits so the catalog feels cohesive, maintainable, and inviting.

## Tools

- [text-variables](https://github.com/chriswblake/action-text-variables) - A GitHub Action that enables loading a template and replacing variables.
- [response-templates](https://github.com/chriswblake/response-templates) - A GitHub repository with premade markdown templates for creating issues, commenting on issues, and modifying markdown files.
- [nektos/act](https://nektosact.com/usage/index.html) - Command line tool to run Actions workflows locally.

> [!WARNING]
> The above action and repository are currently hosted under the [chriswblake](https://github.com/chriswblake) GitHub account. They will eventually be migrated to a GitHub owned org.

## Course Content

Skills courses are organized to build awareness level **_skill_** of a one (or a few) GitHub related features or products.

- Courses are organized into 5 or less steps.
- Each step is a single markdown file.
- Each step's file is prefixed with a number to keep them in order.
- All courses files are stored in the `.github/steps/` folder.

### Using images

- Image files should use absolute URLs. Relative links will break when the markdown content is copied and pasted as comment to the learning issuee.
- Animated images (GIFs) are deliberately blocked on GitHub.

> [!TIP]
> You can paste an image from your clipboard to any text editor on GitHub and get an absolute URL. GitHub will upload the content then insert a link in the text editor.

## Course Grading

A GitHub Actions workflow is used to monitor the current steps work.
When the users triggers the action, it will check the related artificats and add an issue comment informing the user they have passed.

- Each learning step has it's own grading workflow.
- After grading passes, the next step's learning content is shared.
- Each workflow disables itself after finishing and enables the next step's workflow.
- Existing markdown templates should be used as often as possible. See [Tools](#tools) above. Templates cover the typical sistuations such as:
  - Creating the learning issue
  - Providing temporary status updates
  - Sharing grading results
  - Congratulating when finished
- All grading workflwos are stored in the course's `.github/workflows/` folder.
