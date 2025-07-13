---
applyTo: "**/*outline.md"
---

# Outline File Instructions

These instructions describe the required format, conventions, and structure for creating an outline for a GitHub Skills exercise.

## File Location and Naming

- Outline files are typically named `{exercise-name}-outline.md` and placed in the `exercises` directory until published as an issue.
- Each exercise should have a single outline file that provides a high-level structure for the exercise.
- Use the GitHub MCP server to publish the outline as an issue. Ask the user for the repository to create the issue.

## Structure of an Outline File

When creating a new outline file, start by copying the template from `exercise-template/outline.md`. All outlines MUST follow the same structure and conventions to promote consistency across exercises. If an existing outline does not follow the structure, adjust it to match the template.

Each outline file consists of the following main components:

1. **Logistics**: Brief notes for non-content planning like repository URL, business considerations, or other important context.
2. **README (Intro)**: Title, short introduction, overview of learning objectives and steps, description of what will be built, prerequisites, and any startup actions.
3. **Steps**: The topics to be taught, the related hands-on activity, and how the learne's work will be verified.
4. **Review**: Summary of actions taken, skills learned, and what's next (links to docs, recommended exercises, etc.)

### Step Sections

For each step, use the following format:

- **Step Title**: Clearly describe the focus of the step.
- **(Optional) Story**: A short scenario or narrative that sets the context for the learner.
- **Theory**: Key concepts or background relevant to the activities. Keep it brief and focused. The goal is awareness, not deep knowledge.
- **References**: Add links to GitHub documentation or other resources.
- **Activity**: List the hands-on tasks for the learner. Use clear, actionable instructions. Each activity should have a descriptive title and use ordered lists for steps.
- **Transition**: Describe what triggers the next step and any grading or completion criteria.

### Writing Guidelines

- Keep steps independent and related to only clear, concise, and focused on a single action per step.
- Use comments for planning notes and context that should not appear in the final exercise.
- Use "replace-me:" placeholders in the template for all content that should be customized for each exercise.
- Avoid unnecessary jargon or assumptions about prior knowledge beyond the prerequisites.
- Each outline should be self-contained and not require external context.

### Sourcing Information

References in steps should only come from official GitHub sources, such as:

- GitHub Documentation (https://docs.github.com)
- GitHub Learn (https://learn.github.com)
- GitHub Blog (https://github.blog)
- GitHub Changelog (https://github.blog/changelog)

All references should be checked for accuracy and relevance. Use the GitHub MCP server or Fetch tool to check the webpage content.