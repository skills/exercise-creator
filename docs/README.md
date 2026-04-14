# Skills Exercise Development

The following is a list of guides and references for a deeper understanding of making exercises

## Guides

- [Make an Outline](guide/make-an-outline.md) - Plan the exercise.

  - Create a draft with Copilot that includes all critical information.
  - Include important considerations.
  - Refine early to save time later.

- [Make an Exercise](guide/make-an-exercise.md) - Use the outline to create an actual exercise.

  - Bootstrap a draft exercise with Copilot.
  - Refine to make it approachable and fun.
  - Use formatting tips to avoid typical mistakes.

- [Test a Workflow](guide/test-a-workflow.md) - Verify the technical functionality of the exercise.

  - Running transition workflows locally
  - Verifying grading workflows locally
  - Example event payloads

- [Test an Exercise](guide/test-an-exercise.md) - Verify the exercise is consistent for learners.

  - Verifying instructions
  - Predicting for failure points
  - Getting feedback from testers

## Configuration

- [Testing Settings](guide/configuration/configure-act-for-local-testing.md) - How do I set up local testing?
- [Workspace Settings](guide/configuration/configure-your-workspace.md) - Where should I put a setting?
- [MCP Server Settings](guide/configuration/configure-mcp-servers.md) - How do I enable the GitHub MCP server?
- [Workspace Permissions](guide/configuration/work-across-multiple-organizations.md) - How do I change my codespace permissions to work across multiple organizations.

## Copilot discoverability

This repository supports both **repo Agent Skills** in `.github/skills/` and **slash prompts** in `.github/prompts/`.

- Use **natural language** when you want Copilot to select the right repo skill automatically.
- Use a **slash prompt** when you want to invoke a specific workflow explicitly.

### Available repo Agent Skills

- `create-exercise-outline` - Plan or refine a new GitHub Skills exercise outline.
- `bootstrap-exercise-from-outline` - Turn an approved outline into exercise files and workflows.
- `review-exercise` - Review an exercise draft for learner flow, formatting, and workflow correctness.
- `publish-exercise` - Prepare and publish an exercise repository safely to GitHub.

### Copilot CLI tips

- Use `/skills` to view and toggle loaded skills.
- Use `/skills info` to inspect skill details and location.
- Use `/skills reload` after adding or editing skills in the current session.

## Reference

The following provide the role/purpose of components in a Skills exercise.

- [Exercise](reference/exercise.md) - A GitHub repository with files for teaching a specific Skill.

- [Exercise Step](reference/exercise-step.md) - The theory and practical activity used for teaching 1 step in an exercise.

- [Exercise Step Workflow](reference/exercise-workflow.md) - The GitHub workflow that provides feedback and transitions between steps.
