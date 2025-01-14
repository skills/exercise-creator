# Develop a Skills Course

There are a few roles related to Skills Course development.

- **Content Development** - The core learning content organized into 3-5 learning steps. One markdown file per step.
- **Scoring Development** - Actions workflows to grade each step and provide feedback.
- **Skills Catalog Development** - A holistic view of all Skills Courses. Provide templates, reusable workflows, storylines, and toolkits so the catalog feels cohesive, maintainable, and inviting.

## Tools

- [overview app](../overview-app/README.md) - A no-install simple web application that lists all Skills courses and the topics they cover.
- [text-variables](https://github.com/skills/action-text-variables) - A GitHub Action that enables loading a template and replacing variables.
- [response-templates](https://github.com/skills/response-templates) - A GitHub repository with premade markdown templates for creating issues, commenting on issues, and modifying markdown files.
- [nektos/act](https://nektosact.com/usage/index.html) - Command line tool to run Actions workflows locally.

## Course Planning

Please use the issue template for a guide and checklist to creating a new Skills course. It will provide links back to these docs.

<a id="copy-course" href="https://github.com/skills/skills-manager/issues/new?template=new-skills-course.md&title=New+Course%3A+%28set+title%29">
      <img src="https://img.shields.io/badge/👩‍🚀_Create_New_Course-008000" height="25pt"/>
   </a>

### Selecting a New Course

Skills courses are organized to build awareness level **_skill_** of a one (or a few) GitHub related features or products.

- What specific skills does the learner leave the course with?
- What will the learner be able to do after completing the course?
- Is the topic specific and small enough to fit within 1 hour.
  - Most learners tend to drop off after 30-45 minutes.
  - We've found that it takes learners about four times the length of an expert to complete a course.
  - If your course needs more steps, consider splitting your learning objective into multiple courses.

### Course Organization and Flow

Courses are communicated to the learner using an Issue and comments, similar to a real development workflow.

- Courses are organized into 5 or less steps.
- Each step is a single markdown file.
- Each step builds on the previous step.
- Each step's markdown file and grading workflow is prefixed with a number to keep them in order.
- All courses files are stored in the `.github/steps/` folder.
- Workflows monitor the learner's actions, triggering grading and sharing next steps.

> [!TIP]
> Make the first step easy so the user can build confidence.

### Step Content

Steps are used to communicate a piece of the lesson. They are fairly short, introducing a concept and providing a way to quickly practice.

- Each step is a single markdown file and pairs with a [grading workflow](#course-grading).
- Each step has 2 components: theory and practice
  - The theory builds context by introducing a new idea and sharing the fundamentals.
  - The practice activity is a step-by-step guide interacting with actual GitHub.
- Include references for learning more. Typically to somewhere in [GitHub Docs](https://docs.github.com).
- Consider using [Alert Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) to highlight tips and warnings for typical troubleshooting.
- Image files should use absolute URLs. Relative links will break when the markdown content is copied and pasted as an issue comment.
- Animated images (GIFs) are deliberately blocked on GitHub.
- Try to keep formatting consistent between steps.
- When possible, try to follow the [GitHub Docs style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md).

> [!TIP]
> You can paste an image from your clipboard to any text editor on GitHub and get an absolute URL. GitHub will upload the content then insert a link in the text editor.

### Storyline and Personality

Courses are meant to build on one another and increasingly enable the learner. They are also not meant to be boring learning materials! Use the storyline, GitHub's history/characters, and your imagination to make it interesting.

- Each course should use one of the chosen storylines.
- If a course builds on the work of a previous course, provide that previous work as the starting point.
- Use Mona and the ocotcats for responding to the user.
- Use a combination of professional, polite, inviting tone for learning content and friendly, casual, active responses for feedback.
  - How would you interact with your friend or coworker?
  - Use emoji to convey a positive tone.
- Avoid use of acronymns and short hand. For example, use `repository` instead of `repo`.

### Course Grading

A GitHub Actions workflow is used to monitor the learner's progress for an active step.
When the user triggers the action, it will check the related artifacts and add an issue comment with feedback, typically informing the user they have passed or highlighting a mistake to be fixed.

- Each learning step has it's own grading workflow.
- After grading passes, the next step's learning content is shared.
- Each workflow disables itself after finishing and enables the next step's workflow.
- Existing markdown templates should be used as often as possible. See [Tools](#tools) above. Templates cover the typical sistuations such as:
  - Creating the learning issue
  - Providing temporary status updates
  - Sharing grading results
  - Congratulating when finished
- All grading workflows are stored in the course's `.github/workflows/` folder.
- Ensure the workflows are easy to follow and include references. Many developers will use them as references.

### Maintainability

GitHub Skills courses are not version safe. As such they will become out of date as GitHub evolves. Here are recommendations to consider.

- Be concise. More content means more to update.
- Avoid including content that will likely change, for example usage quotas and limits.
- Don't copy from GitHub Docs. Instead introduce it and reference GitHub Docs page. This will also teach the learn to use Docs for future questions.

## Testing a Course

### Proofreading

- Verify tenses are consistent.
- Verify tones are consistent.
- Verify spelling and grammar.
- Verify acronymns are spelled out or removed.

### Verify the grading workflows

Most grading workflows can be verified locally before testing them in the actual course flow.

1. Ensure you are in the Codespace and have [configured nektos/act](#configure-nektosact).
1. Ensure any required environment variables are in the `.actrc.vars` file.
1. Ensure any required secrets are in the `.actrc.secrets` file.
1. Update the `.actrc.event.json` event payload file to match with the expected grading workflow's trigger. Here are some examples. See reference for more.

   ```json
   // Push branch
   {
     "ref": "refs/heads/my-feature"
   }
   ```

   ```json
   // Push tag
   {
     "base_ref": "refs/heads/main",
     "ref": "refs/tags/v1.0.0"
   }
   ```

   ```json
   /// Pull request
   {
     "base_ref": "refs/heads/main",
     "ref": "refs/pull/123/merge"
   }
   ```

   > Ref: [Act - event payloads](https://nektosact.com/usage/index.html#events) - information

   > [!TIP]
   > You can get a real example payload by adding a step to print the full context. Make sure to run it on actual github.com!
   >
   > ```bash
   > - name: Show full context and event payload
   >   run: echo '${{ toJSON(github) }}'
   > ```

1. Run the workflow using Act. See reference for other event types.

   ```bash
    act push -W .github/workflows/step-1-into.yml
   ```

   > Ref: [Act - run a specific workflow file](https://nektosact.com/usage/index.html#workflows)

### Acceptance Testing

The only true test is giving the course an actual try.

- Try the course yourself on actual GitHub. See what happens, take notes, and fix bugs.
- Once it works for you, knowing how it is supposed to work, try it others.

  - someone familiar with the topic (technical review)
  - someone unfamiliar with the topic (potential learner)
  - outside of GitHub (make sure nothing requires internal permissions)

- Check in our your course regularly for any reported issues or out-of-date information.

- Keep everything you need in the one course repository.
- If a course must be private during development, create an organization for your courses, make your courses private, and invite the specific users that need these courses to your organization.
