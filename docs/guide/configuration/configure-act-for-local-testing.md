# Configure Act for Local testing

[nektos/act](https://github.com/nektos/act) is used for running Actions workflows locally, which is is typically useful for testing grading workflows.

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

1. To provide repository variables to your workflow, update or create the `.actrc.vars` file.

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
