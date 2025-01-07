# Initial Setup

This project is primarily meant to be started from a Codespace. It includes all the necessary tools to develop and hopefully all settings to support consistent styling.

1. Navigate to the [skills-manager](https://github.com/chriswblake/skills-manager) repository main page.
1. Above the files list, on the top right, expand the green button to show development options.
1. Choose the **Codespaces** tab and select **Create Codespace on main**.
1. Wait for the Codespace to be created.
1. Use the extensions tab to verify all required extensions are installed and enabled.
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

1. Open the code workspace file.
   1. In VS Code, select **File** then **Open Workspace from File...**.
   1. Select the file `skills-manager.code-workspace`. The window will reload.

## Work on a course

The following steps clone a Skills course repository into the codespace and configure VS Code to enable working on it.

1. In VS Code, open a terminal.
1. Navigate to the `/workspaces/` directory.
1. Clone the desired Skills course.
1. Open the workspace file `/workspaes/skills-manager/skills-manager.code-workspace`.
1. Add an entry for the cloned course repository. It will look similar to below.

   ```json
   {
     "path": "/workspaces/skills-manager/overview-app/"
   }
   ```

1. Inspect the File Explorer. The repository should now be visable and can be worked on as usual.

## FAQ

- **I prefer to work locally. Will it also work as a Dev Container?**  
  Yes. If you are familiar with Dev Containers, simply clone the repository locally and open as usual.

- **What does the Codespace include?**
  - Runtime for Python and Javascript
  - Extensions and settings
