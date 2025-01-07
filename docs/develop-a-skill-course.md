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

## Common Tasks

### Configure nektos/act

Act is used for running Actions workflows locally, which is is typically useful for testing grading workflows.

1. Open the Skills course project.
1. Update the `.gitignore` to ignore the Act configuration files.

   ```gitignore
   .actrc*
   ```

1. Create the `.actrc` Act config file with the following entries.

   ```bash
   # Load event payload from file
   -e .actrc.event.json

   # Load workflow inputs from file
   --input-file .actrc.inputs

   # Load secrets and environment variables from file
   --var-file .actrc.vars
   --secret-file .actrc.secrets

   # Cache used Actions
   --action-offline-mode

   # Use full runner
   -P ubuntu-latest=catthehacker/ubuntu:full-latest

   # Run as AMD64 if on ARM64
   --container-architecture linux/amd64
   ```

1. Manually pull the runner image.

   - It is large and may take a while to retrieve.
   - The amd64 version is used because learners will likely use the default public runners.

   ```bash
   docker pull --platform linux/amd64 catthehacker/ubuntu:full-latest
   ```

1. Create the `.actrc.vars` environment variables file. Here is an example.

   ```env
   MYVAR=hello world
   ```

1. Create the `.actrc.secrets` secrets file. It will likely only be used for your Personal Access Token (PAT).

```env
GITHUB_TOKEN=(my token)
```

### Run an Actions workflow locally

1. Ensure any required environment variables are in the `.actrc.vars` file.
1. Ensure any required secrets are in the `.actrc.secrets` file.
1. Update the `.actrc.event.json` event payload file to match with the expected Actions workflow trigger. Here are some examples. See reference for more

   ```json
   // Push branch
   {
     "ref": "refs/heads/my-feature"
   }
   ```

   ```json
   // Push tag
   {
     "base_ref": "refs/heads/main",
     "ref": "refs/tags/v1.0.0"
   }
   ```

   ```json
   /// Pull request
   {
     "base_ref": "refs/heads/main",
     "ref": "refs/pull/123/merge"
   }
   ```

   > Ref: https://nektosact.com/usage/index.html#events

   > [!TIP]
   > You can get a real example payload by adding a step to print the full context. Make sure to run it on actual github.com!
   >
   > ```bash
   > - name: Show full context and event payload
   >   run: echo '${{ toJSON(github) }}'
   > ```

1. Run the workflow using Act. See reference for other event types.

   ```bash
    act push -W .github/workflows/step-1-into.yml
   ```

   > Ref: https://nektosact.com/usage/index.html#workflows
