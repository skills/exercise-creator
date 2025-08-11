## Configure your workspace and project settings

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

## FAQ

- **I prefer to work locally. Will it also work as a Dev Container?**
  Yes. If you are familiar with Dev Containers, simply clone the repository locally and open as usual.

- **What does the Codespace include?**
  - Runtime for Python and Javascript
  - Extensions and settings
