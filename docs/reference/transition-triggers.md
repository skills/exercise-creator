# Transition Triggers

This is a list of common situations and a recommended GitHub Actions trigger. Feel free to be creative though. These are just ideas.

> [!NOTE]
> Please see the [GitHub Actions Triggers](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) docs for all options.

| Situation                                                                           | Trigger               |
| ----------------------------------------------------------------------------------- | --------------------- |
| The learner created or updated a file.                                              | `push`                |
| The learner is submitting changes for review.                                       | `pull_request`        |
| The learner published a package.                                                    | `registry_package`    |
| The learner built a GitHub Pages site.                                              | `page_build`          |
| The learner created or updated an issue.                                            | `issues`              |
| After the codespaces starts, the `postCreateCommand` sends an API call.             | `repository_dispatch` |
| A script can send an API call when finished.                                        | `repository_dispatch` |
| The learner provided the url of the web application running in their codespace.     | `issue_comment`       |
| The learner provided the url of a publicly available resource like a repo or issue. | `issue_comment`       |
| The learner is providing an answer to a question to be checked.                     | `issue_comment`       |
| There are no other natural options.                                                 | `issue_comment`       |
| The learner has created discussions on the repo.                                    | `discussion`          |
| The learner made a new workflow and ran it.                                         | `workflow_run`        |
| The learner created a new release.                                                  | `release`             |
