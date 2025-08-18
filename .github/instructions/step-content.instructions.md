---
applyTo: "**/.github/steps/*.md"
---

# Step Content File Instructions

This following instructions describe the required format, conventions, and structure for step content files (`.github/steps/*.md`) used in GitHub Skills exercises.

## File Location and Naming

- Step files are located in `.github/steps/` within the exercise repository.
- Each step is a separate Markdown file, typically named `1-step.md`, `2-step.md`, etc.

## Structure of a Step File

When creating a new step file, always start off by copying the template from [`exercise-template/.github/steps/1-step.md`](../../../exercise-template/.github/steps/1-step.md) - all steps should follow the same structure and conventions to ensure consistency across the exercises.

Each step file typically consists of two main components:

1. **Theory**: Introduces the concept, provides background, and sets context for the activity.
2. **Activity**: Presents the hands-on task(s) the learner must complete. There can be multiple activities per step, each with its own title and instructions. Each step includes 1 to 3 **Activities**, each with its own title and instructions.


### Theory

Each step introduces a small amount of theory. The goal is awareness, not teaching.

The theory builds context by introducing a new idea and sharing the fundamentals.

Keep theory sections brief and relevant to the activities that will follow.

Avoid unnecessary jargon or assumptions about prior knowledge beyond the prerequisites.

### Activities

Activities are hands-on practical work to use the newly learned theory.

Writing instructions:

- Activities start with a `### ⌨️ Activity: <title>` header.
- Write clear, concise, and actionable steps. Each instruction should be easy to follow and focused on a single action.
- Use ordered lists for activity steps to guide the learner through the process.
- Use present tense and direct language (e.g., "Create a new branch", "Open the file").
- Provide troubleshooting tips in a collapsible `<details>` block after each activity.
- Each file should be self-contained and not require external context.
- If multiple activities are present, repeat the activity section format for each.
- If a screenshot would better explain the content, add a placeholder html tag like `<img alt="(description)" src="(link)">` for the author.

Example:

```md
### ⌨️ Activity: Create your homepage

1. Browse to the `index.md` file in the `main` branch.
1. In the upper right corner, open the file editor.
1. Type the content you want on your homepage. You can use Markdown formatting on this page.
1. (optional) You can also modify `title:` or leave it as it is.
1. Commit your changes to the `main` branch.
1. As you commit your changes Mona will prepare the next step in this exercise!
```
