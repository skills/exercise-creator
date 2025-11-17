---
agent: 'agent'
model: Claude Sonnet 4
description: 'Create a new exercise outline for a GitHub Skills exercise.'
---

Your task is to create a new exercise outline for a GitHub Skills exercise with the information provided by the user. If there is information missing, ask for it.

To create an outline follow these steps:

1. Create a new file using the template from [`.github/ISSUE_TEMPLATE/skill-exercise-outline.md`](../ISSUE_TEMPLATE/skill-exercise-outline.md) as a starting point.

   - The file should follow the `{exercise-name}-outline.md` name format.
   - If they don't specify where to save the file, put it in the `/workspaces/repos/` folder.

1. Search for relevant documentation that can be used in the outline references and theory sections.

1. Fill out the sections in the template with the relevant information.

   - Use the [`outline instructions`](../instructions/outline.instructions.md) file as a guide for how to fill out the sections.

1. Review the complete outline. Verify:

   - Each step builds on previous knowledge.
   - Activities match theory sections.
   - The actions taken in the activity will trigger the selected trigger.