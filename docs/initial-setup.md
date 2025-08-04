# Common Setup Tasks

## Work across multiple organizations

By default a Codespace only has access to the original repository and your user space.

To work across multiple organizations, the Codespace needs a different token with more permissions. You must set a Codespace secret in your account that applies to this repository.

1. Run the following command to clear the existing Codespace token, then use the GitHub CLI to login again using web auth.

   ```bash
   unset GITHUB_TOKEN
   gh auth login
   ```

   > ❕ **Important:** If you stop here, the updated token will only last for the remainder of the terminal session.

1. Use the GitHub CLI to show your token.

   ```bash
   gh auth token
   ```

1. Navigate to the [Codespace Settings](https://github.com/settings/codespaces) for your user account.

1. Under the **Secrets** area, create a new secret.

   - Name: `GH_TOKEN`.
   - Value: (The token created above)
   - Repository Access: `skills/exercise-manager`

1. Restart the Codespace to trigger loading of your secret.

## Configure nektos/act

Act is used for running Actions workflows locally, which is is typically useful for testing grading workflows.
A default configuration is loaded from the `.actrc` file, which provides:

- Sets the runner actor to your username.
- Enables caching of actions.
- Default loads environment variables and secrets, if the files are available.
- Uses a modified runner image to include additional tools matching GitHub runners.
- Specifies to run in amd64 mode instead of arm64, if needed.

1. To provide repository secrets to your workflow, update or create the `.actrc.secrets` file.

   > This simulates [Using secrets in GitHub Actions](https://docs.github.com/en/actions/how-tos/security-for-github-actions/security-guides/using-secrets-in-github-actions).

   - We recommend a fine-grained Personal Access Token (PAT) with access to a **single** private repository to test commands against.

   ```env
   GITHUB_TOKEN=gph_*******
   ```

1. To provide repository variables to your worklow, update or create the `.actrc.vars` file.

   > This simulates [Using variables in GitHub Actions](https://docs.github.com/en/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#creating-configuration-variables-for-a-repository).

   ```env
   MYVAR=hello world
   ```

1. To provide environment variables to your workflow, update or create the `.actrc.env` file.

   > This simulates setting the environment variables of the Actions runner.

   ```env
   ISSUE_NUMBER=123
   ISSUE_REPOSITORY=your-personal-handle/spam-repository
   ISSUE_URL=
   ```

1. If you need to provide a particular event payload, use the `-e <payload-file>.yml` flag.

   > This simulates the payload provided to the workflow from a [GitHub Actions trigger](https://docs.github.com/en/actions/reference/events-that-trigger-workflows).

   - Example: `act -e push-payload.json`
   - See `/docs/3-testing/workflow-payload.examples` folder for examples.

## Start the MCP Servers

A GitHub HTTP based MCP server is already installed, all you need to do is start it

1. `cmd+shift+P` and search for `MCP: List Servers`.

1. Start the `github` server. It will prompt you to log in to GitHub.

1. Switch to the Copilot panel and try a prompt like the below to confirm the MCP tools are ready.

   ```txt
   How many repos are in the `skills` org?
   ```

# FAQ

- **I prefer to work locally. Will it also work as a Dev Container?**
  Yes. If you are familiar with Dev Containers, simply clone the repository locally and open as usual.

- **What does the Codespace include?**
  - Runtime for Python and Javascript
  - Extensions and settings

## Updating workspace and project settings

Workspaces settings are defined in multiple places depending on necessity of change. They are applied in the below.

- **User settings** - Exist outside of the codespace and are ot related to the project.
  - Example: dark/light mode
- **Codespace settings**
  - Location: `.devcontainer/devcontainer.json`
  - Default settings for projects that don't include settings.
  - Modifications won't be affective until container is rebuilt.
  - Example: Providing prettier formatting to Skills exercises.
- **Workspace settings**
  - Location: `exercise-manager.code-workspace`
  - Workspace directory structure
  - Adjustable linting settings
  - Adjustable spell check settings
- **Project settings**
  - Location: `<repo>/.vscode/settings.json`
  - Only apply to the related repository folder.
  - Setting for a specific project.
  - Example: Configure linting or testing
