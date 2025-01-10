## Overview App

The `./overview-app` folder contains a no-install simple web application that provides high level information about the Skills catalog such as available courses, topics they cover, and eventually metrics (later).

Content is manually populated in 2 CSV files:

- `skills-courses.csv` - A list of all Skills courses, tracking info, and important relationships.
- `learning-coverage.csv` - A matrix of the GitHub features covered by the available Skills courses.

> [!IMPORTANT]
> The CSV files are a temporary solution for early development until the structure is stable. They will later be replaced with API calls and source data will come directly from the repositories.

### How to install

This application loads everything dynamically. It does not require any package installs or host. Simply open `index.html` with a modern web browser.

### View the Overview App (in VS Code)

The following instructions are particularly helpful if viewing from a codespace.

1. In VS Code, ensure the **Live Preview** extension is enabled.
1. Use the file explorer to navigate to the `./overview-map` directory.
1. Right click on `./overview-map/index.html` and select **Show Preview**.

   - The web application will open side by side in VS Code.
   - Use the top buttons to switch views.

### Edit the CSV files

The Overview App is intentionally read-only.

It is recommended to edit the CSV files with a spreadsheet tool (like Excel). The Overview App has a settings area where auto-reload can be enabled.
