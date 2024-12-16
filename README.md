# Skills Manager

This is a toolkit for developing and managing GitHub Skills.

### Definitions
- **Skill** - a short learning tutorial for teaching a specific concept. 1 per repo.
- **Action** - A reusable workflow component used across multiple skills. 1 per repo.

## How to Use

- Clone skills into the `skills` directory.
- Clone actions into the `actions` directory.
- Tag all Skill repos with a `skills-course` topic label.


## How to Develop an Action

- Create a new repo in the `actions` directory.
- Add entry to the vs code settings.json file.
- Add entry to the .github/settings.yml file.

- Add your PAT to the `.secrets` file.
- Verify your Action using unit tests.
- Select and run your action from the Debugger tab.

## Skills to Certs relationship

| Skill | Certification |
|-------|---------------|
| [Skill 1]() | [Certification A]() |
| [Skill 2]() | [Certification B]() |
| [Skill 3]() | [Certification C]() |


---
# TO DO
- Workflow that automatically applies same settings accross Skill repos
- Workflow that automatically applies same settings accross Action repos


# ACT

Add this to the `.actrc` file if your action is more advance. Note: It is very big. Try to avoid
```
-P ubuntu-latest=catthehacker/ubuntu:full-latest
```

# Manager React Application

The `manager` folder contains a React application that displays a list of all repositories in the "skills" GitHub organization. The application uses the GitHub API to fetch repository data and displays the following information for each repository:

- Repository ID
- Repository name
- URL
- Star count
- Last modified date
- Topics

The application is styled using the Primer design package.

## How to Run the Application

1. Navigate to the `manager` folder:
   ```sh
   cd manager
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to see the application in action.

## Additional Data

The `manager` folder also contains a `mapping.json` file with additional data about each repository. The file includes the following information for each repository:

- `ms_learn`
- `learning_objective`
- `github_features`
