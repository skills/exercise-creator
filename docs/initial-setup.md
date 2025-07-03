# Initial Setup

This project is primarily meant to be started from a Codespace. It includes all the necessary tools to develop and hopefully all settings to support consistent styling.

### 1. Set a Personal Access Token

Unlike normal codespaces, this Codespace is primarily intended to modify other repositories (exercises).
As such, permissions are a bit tricky. To account for this, you must set a Codespace secret in your account that applies to this repository.

1. Create a [Personal Access Token (PAT)](https://github.com/settings/tokens) with the required permissions for accessing any exercise repositories you need.

1. Navigate to the [Codespace Settings](https://github.com/settings/codespaces) for your user account.

1. Under the **Secrets** area, create a new secret.
   - Name: `GH_TOKEN`.
   - Value: (The token created above)
   - Repository Access: `skills/skills-manager`

### 2. Start the Codespace

1. Navigate to the [skills-manager](https://github.com/skills/skills-manager) repository main page.
1. Above the files list, on the top right, expand the green button to show development options.
1. Choose the **Codespaces** tab and select **Create Codespace on main**.
1. Wait for the Codespace to be created.
   - The Codespace token will automatically be applied to the environment.
   - This may take a while. A post creation script will modify clone useful repositories and prepare a runner image for testing exercises locally.

### 3. Verify Setup

Ensure all extensions and tools are ready.

1. In VS Code's left navigation, open the extensions tab.
1. Ensure all extensions in the "Dev Containter @ ..." list are enabled.
1. In VS Code, open a terminal.
1. Verify version info is available for the following tools.

   ```bash
   gh --version
   ```

   ```bash
   npm --version
   ```

   ```bash
   docker --version
   ```

   ```bash
   act --version
   ```

### 4. Open the workspace

The workspace allows opening multiple skills-related projects simultaneously.

1. Ensure the Codespace is open.
1. In the top menu, select **File** > **Open Workspace from File...**.
1. Select the file `/workspaces/skills-manager/skills-manager.code-workspace`.
   - The VS Code window will reload.
   - Check the file explorer. Additional projects have been opened.
   - The `personal` area is for containing any files you would like to keep without version control. It is persistent if you rebuild the workspace.
   - The `exercises` area is where you can clone exercises for working on then.

# Common Tasks

## Work on a Skills exercise

The following steps clone a Skills exercise repository into the codespace and add it to the workspace to work in paralle.

1. Ensure the Codespace is open.
1. Open a terminal.
1. Navigate to the `/workspaces/exercises` directory.
1. Clone the desired Skills exercise.

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

1. To provide environment variables to your worklow, update or create the `.actrc.env` file. 

   > This simulates setting the environment variables of the Actions runner.

   ```env
   ISSUE_NUMBER=123
   ISSUE_REPOSITORY=your-personal-handle/spam-repository
   ISSUE_URL=
   ```

1. If you need to provide a particular event payload, use the `act -e push-payload.json` flag. See `/docs/3-testing/workflow-payload.examples` folder for examples.

   > This simulates the payload provided to the workflow from a [GitHub Actions trigger](https://docs.github.com/en/actions/reference/events-that-trigger-workflows).

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
  - Location: `skills-manager.code-workspace`
  - Workspace directory structure
  - Adjustable linting settings
  - Adjustable spell check settings
- **Project settings**
  - Location: `<repo>/.vscode/settings.json`
  - Only apply to the related repository folder.
  - Setting for a specific project.
  - Example: Configure linting or testing
