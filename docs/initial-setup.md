# Initial Setup

This project is primarily meant to be started from a Codespace. It includes all the necessary tools to develop and hopefully all settings to support consistent styling.

### 1. Start the Codespace

1. Navigate to the [skills-manager](https://github.com/skills/skills-manager) repository main page.
1. Above the files list, on the top right, expand the green button to show development options.
1. Choose the **Codespaces** tab and select **Create Codespace on main**.
1. Wait for the Codespace to be created.
   - After started, if no credentials are found, it will ask to login to GitHub.
   - After login, skills-related skills will be added to the workspace.

### 2. Verify Setup

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

### 3. Open the workspace

The workspace allows opening multiple skills-related projects simultaneously.

1. Ensure the Codespace is open.
1. In the top menu, select **File** > **Open Workspace from File...**.
1. Select the file `/workspaces/skills-manager/skills-manager.code-workspace`.
   - The VS Code window will reload.
   - Check the file explorer. Additional projects have been opened.

# Common Tasks

## Work on a Skills exercise

The following steps clone a Skills exercise repository into the codespace and add it to the workspace to work in paralle.

1. Ensure the Codespace is open.
1. Open a terminal.
1. Navigate to the `/workspaces` directory.
   ```bash
   cd /workspaces
   ```
1. Clone the desired Skills exercise.
1. Open the workspace file `/workspaces/skills-manager/skills-manager.code-workspace`.
1. Add an entry for the recently cloned exercise repository. It will look similar to below.

   ```json
   {
     "path": "/workspaces/my-skills-exercise/"
   }
   ```

1. Inspect the File Explorer. The repository should now be visable and can be worked on as usual.

> [!NOTE]
> The `skills-manager.code-workspace` file has been excluded from Git tracking. Feel free to customize it for your personal development flow!

## Configure nektos/act

Act is used for running Actions workflows locally, which is is typically useful for testing grading workflows.
A default configuration is loaded from the `.actrc` file, which provides:

- Sets the runner actor to your username.
- Enables caching of actions.
- Default loads environment variables and secrets, if the files are available.
- Uses a modified runner image to include additional tools matching GitHub runners.
- Specifies to run in amd64 mode instead of arm64, if needed.

1. To provide a Personal Access Token (PAT), update or create the `/.actrc.secrets` file.

   ```env
   GITHUB_TOKEN=gph_*******
   ```

1. To provide environment variables to your worklow, update or create the `/.actrc.vars` file.

   ```env
   MYVAR=hello world
   ```

1. If you need to provide a particular event payload, use the `act -e push-payload.json` flag. See `/docs/3-testing/workflow-payload.examples` folder for examples.

## Configure the GitHub MCP Server

A GitHub MCP server is already installed, but it must be provided a GitHub Personal Access Token before it can be used.

1. Expand the VS Code terminal window.

1. Run the following command to get a GitHub Personal Access Token (PAT).

   ```bash
   gh auth token
   ```

1. Open the `.vscode/mcp.json` file.

1. In the list of servers, find `github` and look for and click the inline **Start** button.

1. VS Code will prompt for the token.

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
  - Developer can freely make changes without accidentally committing.
  - Git tracking is disabled on this file when the codespace is created.
  - Example: Develop new default settings for the codespace.
  - Example: Cloning additional repos and adding to the workspace.
- **Project settings**
  - Location: `<repo>/.vscode/settings.json`
  - Onlyl apply to the related repository folder.
  - Setting for a specific project.
  - Example: Configure linting or testing
