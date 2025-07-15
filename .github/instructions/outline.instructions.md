---
applyTo: "**/*outline.md"
---

# GitHub Skills exercise outline instructions

These instructions describe the required format, conventions, and structure for creating an outline document for a GitHub Skills exercise.

The outline should provide a concise, clear, high-level overview of the exercise without going into too much detail.

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

**Theory**: Provide just enough background knowledge to understand the upcoming activity. Aim for awareness-level concepts, not comprehensive explanations.

**References**: Include 1-3 official documentation links that support the concepts introduced in the theory section.

**Activity**: List the high-level tasks the learner will accomplish. Use action-oriented titles that describe the outcome, not detailed instructions.

**Transition**: 
- **Actions Trigger**: Identify which GitHub event will signal that the learner has completed the step (e.g., push, pull_request, page_build, issue_comment).
- **Grading-Check**: Briefly state what specific change or file will be verified for `check_step_work` grading process or `None` if no grading will be used.

```example
## Step 1 - Enabling GitHub Pages

### Story

You are a student looking to host your first website. Your code is on GitHub and you are looking for a way to publish it online and share it with others.

### Theory

GitHub Pages lets you host static websites directly from a GitHub repository. It's a great way to showcase projects, documentation, or personal portfolios without needing a separate hosting service.

### References

- https://docs.github.com/en/pages

### Activity: Enable GitHub Pages

1. Enable GitHub Pages for your repository

### Transition

- **Actions Trigger:** [`page_build`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#page_build)
- **Grading-Check:** None
```


## Sourcing Information

References in steps should only come from official GitHub sources, such as:

- GitHub Documentation (https://docs.github.com)
- GitHub Learn (https://learn.github.com)
- GitHub Blog (https://github.blog)
- GitHub Changelog (https://github.blog/changelog)
- Visual Studio Code Documentation (https://code.visualstudio.com/docs/)

