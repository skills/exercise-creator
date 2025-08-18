---
applyTo: "**/*outline.md"
---

# GitHub Skills exercise outline instructions

These instructions describe the required format, conventions, and structure for creating an outline document for a GitHub Skills exercise.

The outline should provide a concise, clear, high-level overview of the exercise without going into too much detail.

Focus most of the learning on one topic. Other skills will naturally be used, but they should not be the focus.

## Structure of an Outline File

GitHub Skills exercise outline files, follow the structure defined in [`.github/ISSUE_TEMPLATE/skill-exercise-outline.md`](../ISSUE_TEMPLATE/skill-exercise-outline.md).
This template provides the exact markdown format and sections required for consistency across exercises.

If an existing outline does not follow this structure, adjust it to match the template.

### Important Template Guidelines

When using the template:

- **Replace all `replace-me` indicators** with appropriate content specific to your exercise. Do not leave any placeholder text starting with `replace-me` in the final outline.
- **Handle optional elements properly**:
  - If you use an optional section (like "Story Plot" or "On Start"), remove the `(optional)` designation from the heading
  - If you don't need an optional section, remove it entirely from the outline
  - Examples: Use `## Story Plot` instead of `## (optional) Story Plot`, or remove the section completely if unused

## How to fill out the steps

**Story** (optional): Provide scenario or context for the step to help learners understand the practical application.

**Theory**: Provide just enough background knowledge to understand the upcoming activity. Aim for awareness-level concepts, not comprehensive explanations. Make sure to provide real content from the docs, not generic descriptions. It needs to be very clear what is being taught. Graphical elements like lists, tables, and diagrams are good for making it visually appealing.

**References**: Include 1-3 official documentation links that support the concepts introduced in the theory section.

**Activity**: List the high-level tasks the learner will accomplish. Use action-oriented titles that describe the outcome, not detailed instructions. Each activity should have a descriptive title and numbered actionable steps.

**Transition**:

- **Actions Trigger**: Identify which GitHub event will signal that the learner has completed the step.

  - Use the [Transition Triggers](../../docs/reference/transition-triggers.md) guide to find an appropriate trigger for the step.
  - Use the [GitHub Actions Triggers](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) docs to use it correctly.

- **Grading-Check**: Briefly state what specific change or file will be verified for `check_step_work` grading process or `None` if no grading will be used.

```example
## Step 1 - Setting Up Copilot Instructions

### Story

You need to establish consistent coding standards for your students' homework assignments and ensure Copilot follows your teaching patterns.

### Theory

Repository custom instructions allow you to provide Copilot with context about your project standards. By creating a `.github/copilot-instructions.md` file, you can ensure that Copilot's suggestions consistently follow your teaching conventions and help generate assignments that meet your pedagogical goals.

### References

- https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot

### Activity: Setup Development Environment

1. Start the codespace
1. Check required extensions are available
1. Familiarize with code

### Activity: Create Repository Custom Instructions

1. Create Copilot Instructions `.github/copilot-instructions.md`
1. Add general guidelines and coding standards to the instructions file
1. Test the instructions prompting Copilot about a file.

### Transition

<!--
What will be monitored about the user's progress to trigger a GitHub Actions workflow.

The workflow's steps will check the learner's work, such as checking file content, commit history, an active URL, etc. and if all pass, the next learning step will be shared.
-->

- **Actions Trigger:** [`push`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#push)
- **Grading-Check:** Verify `.github/copilot-instructions.md` file exists with [file-exists](https://github.com/skills/exercise-toolkit/tree/main/actions/file-exists) action. Check for a keyphrase with [action-keyphrase-checker](https://github.com/skills/action-keyphrase-checker) action

```

## Sourcing Information

References in steps should only come from official GitHub sources, such as:

- GitHub Documentation (https://docs.github.com)
- GitHub Learn (https://learn.github.com)
- GitHub Blog (https://github.blog)
- GitHub Changelog (https://github.blog/changelog)
- Visual Studio Code Documentation (https://code.visualstudio.com/docs/)
