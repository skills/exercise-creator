# Initial Setup

This project is primarily meant to be started from a Codespace. It includes all the necessary tools to develop and hopefully all settings to support consistent styling.

### 1. Start the Codespace

1. Navigate to the [skills-manager](https://github.com/chriswblake/skills-manager) repository main page.
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

## Work on a Skills course

The following steps clone a Skills course repository into the codespace and add it to the workspace to work in paralle.

1. Ensure the Codespace is open.
1. Open a terminal.
1. Navigate to the `/workspaces` directory.
   ```bash
   cd /workspaces
   ```
1. Clone the desired Skills course.
1. Open the workspace file `/workspaes/skills-manager/skills-manager.code-workspace`.
1. Add an entry for the recently cloned course repository. It will look similar to below.

   ```json
   {
     "path": "/workspaces/my-skills-course/"
   }
   ```

1. Inspect the File Explorer. The repository should now be visable and can be worked on as usual.

## Configure nektos/act

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

# FAQ

- **I prefer to work locally. Will it also work as a Dev Container?**  
  Yes. If you are familiar with Dev Containers, simply clone the repository locally and open as usual.

- **What does the Codespace include?**
  - Runtime for Python and Javascript
  - Extensions and settings
