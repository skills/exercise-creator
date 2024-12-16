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
