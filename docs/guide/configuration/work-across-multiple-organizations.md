# Work across multiple organizations

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
