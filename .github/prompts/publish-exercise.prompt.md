---
agent: agent
description: Publishes a GitHub Skills exercise repository to the current user's GitHub Account.
---

# Publish Exercise

1. Check the current repository for a remote. If it already has one, do nothing.
   
   - Only consider repositories in the `/workspaces/repos/**` folder.

2. Try to determine the current user's GitHub account username.
   
   - GitHub CLI authenticated user
   - Environment variables
   - Other repositories in the parent folder.

3. Ask the user if they would like to publish the current exercise repository to that location.
  
  - If they reject, do nothing and exit.

  - If they confirm, create an empty repository in their account with the same name as the current exercise repository. Add the remote but do not publish the exercise repository yet!

    ```bash
    gh repo create {owner}/{exercise-name} --private
    ```

4. Disable Actions on the repository to prevent any of the exercise workflows from accidentally triggering during publishing.

  ```bash
  gh api -X PUT repos/{owner}/{exercise-name}/actions/permissions -F enabled=false | cat
  ```

5. Before publishing, adjust the following repository settings:

  1. Set the repository as template.

   ```bash
   gh api -X PATCH /repos/{owner}/{exercise-name} -F is_template=true | cat
   ```

  2. Set the repository description to match the exercise description from the top of the README.

   ```bash
   gh api -X PATCH /repos/{owner}/{exercise-name} -f description="{description}" | cat
   ```

6. Publish the exercise repository to the user's account.

   - If you fail to publish it, there is probably a permissions issue. Ask the user to manually publish.

    ```bash
    git push -u origin main
    ```
    - Do not continue until the repository is successfully published, otherwise the next steps do not make sense.

7. After publishing, disable current workflows and reenable Actions.

  1. Check the exercise repository for workflows. Disable all workflows that are found.
  
   ```bash
    gh api -X GET /repos/{owner}/{exercise-name}/actions/workflows | cat
   ```
   
   ```bash
    gh api -X PUT /repos/{owner}/{exercise-name}/actions/workflows/{workflow_id}/disable | cat
   ```

  2. Re-enable Actions on the repository, leaving workflows disabled and untriggered.

     ```bash
    gh api -X PUT repos/{owner}/{exercise-name}/actions/permissions -F enabled=true | cat
    ```