# Design Checklist

The following are **recommended** items to verify during the final design phases.

A separate [publish checklist](/docs/4-publishing/checklist.md) is available for handling logistics during release.

> [!TIP]
> When a new exercise issue is created, add these checklists areas to the issue as comments.

## Repository Settings

- [ ] Add `skills-course` to the [repository topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics).

### General

- [ ] Verify desired repository name
- [ ] Set as a template

#### Features

- [ ] Disable Wikis
- [ ] Disable Discussions
- [ ] Disable Projects

#### Pull Requests

- [ ] Only allow Squash merging
- [ ] Enable automatically delete head branches

### Collaborators and teams

- [ ] In **Direct Access** set the DRI as an admin (probably you).
- [ ] Verify **Organization access** includes the appropriate team.

### Rules

- [ ] Add a Branch Ruleset
  - Target branches: `default branch`, `main`
  - Require linear history: enabled
  - Require pull request before merging
- [ ] Add a Push Ruleset
  - Enable restrict file extensions.
    - Disable images: `png, jpg, jpeg, gif, svg, webp`
    - Others: `env, bin, exe`
  - Enable restrict file sizes (5MB).

<!--
### Codespaces

If the exercise uses a codespace, enable a prebuild configuration.

- [ ] Branch: `main`
- [ ] Prebuild Triggers: `configuration change`

TODO: This might not make sense if the prebuild is not available after copying the exercise.
-->

### Advanced Security

- [ ] Disable Dependabot (for now).
- [ ] Disable Copilot Autofix (for now).

## Actions (Tab)

- [ ] Disable all workflows.

## Repository Files

### Logistics

- [ ] Add a `.gitignore` file with at least operating system generated files.
  - [Windows](https://github.com/github/gitignore/blob/main/Global/Windows.gitignore)
  - [MacOS](https://github.com/github/gitignore/blob/main/Global/macOS.gitignore)
  - [Linux](https://github.com/github/gitignore/blob/main/Global/Linux.gitignore)
- [ ] Add [LICENSE](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) file.
- [ ] Verify `README.md` file is updated.
  - [ ] Footer contains correct [Discussions](https://github.com/orgs/skills/discussions) page.
  - [ ] Footer contains copyright notice.
  - [ ] Footer contains link to the license.
  - [ ] Footer contains link to code of conduct.
  - [ ] Prerequisites set. They should be minimal.

### Exercise files

- [ ] All learnings steps are in `.github/steps/`
- [ ] All grading and transitoin workflows are in `.github/workflows`
- [ ] If the exercise builds on another, the starting example files align.

## Quality Checks

- [ ] All sample files have intuitive code comments.
- [ ] Final workflow posts review
- [ ] Final workflow adds celebration message to readme.
- [ ] Feedback workflows provide useful feedback for common user mistakes.
- [ ] Verify tense is consistent.
- [ ] Verify tone is consistent.
- [ ] Verify acronymns are spelled out or explained.
- [ ] Check for typos and grammar.

### Story

- [ ] Exercise story elements agree with existing storyline.
- [ ] New story elements are documented on the [storylines](/docs/1-planning/storylines.md) page.
- [ ] Step feedback (issue comments) use casual, polite, active, and inspiring language.

### Beta Testers (internal)

| Name | Handle | Link Shared | Feedback Provided |
| ---- | ------ | ----------- | ----------------- |
| TBD  | -      | 1-Jan       | -                 |
| TBD  | -      | 1-Jan       | -                 |
| TBD  | -      | 1-Jan       | -                 |

Legend:
👀 - Feedback seen
🚀 - Feedback implemented

### Beta Testers (external)

| Name | Handle | Link Shared | Feedback Provided |
| ---- | ------ | ----------- | ----------------- |
| TBD  | -      | 1-Jan       | -                 |
| TBD  | -      | 1-Jan       | -                 |
| TBD  | -      | 1-Jan       | -                 |

- [ ] No access issues
- [ ] Features are available
- [ ] Screenshots are accurate

<!--
## Later

- [ ] Set CODEOWNERS.YAML
  - [ ] Appropriate Technical SME for review.
  - [ ] A team member as DRI.
- [ ] Set custom properties
  - [ ] Primary product features taught.
  - [ ] Other features mentioned.

-->
