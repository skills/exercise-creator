### Exercise Step

Each exercise step is communicated as a comment on the issue, similar to a real person providing guidance and feedback.

Steps are used to communicate a piece of the exercise. They are fairly short, introducing a concept and providing a way to quickly practice.

It typically looks like this:

1. A **little bit** of story.
1. **Enough** theory to build feature awareness.
1. A **short** step-by-step activity to apply the new theory.
   - It's ok to have a few activities.

### Theory Section

- Instead of listing references at the end, change key words into links. Most people instinctively ignore the "references" section.

- When possible, try to follow the [GitHub Docs style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md).

- Sparingly use [Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) so they don't get ignored.

- Each exercise is not just a tutorial, but also an example. New developers might will simply take the exercise, but experienced developers will explore it to see how it works.

- Avoid use of acronymns and short hand. For example, use `repository` instead of `repo`.

- Keep phrasing professional, polite, and inviting.

- Be concise. More content means more to update.

- Avoid including content that will likely change, for example usage quotas and limits.

- Don't copy from GitHub Docs. Instead introduce it and reference the GitHub Docs page. This will also indirectly teach the learner to that the Docs are the best place to search.

### Activity Section

- Keep it short, sweet, and slightly techincal/challenging. Too simple and they will become board. Too complex and they will give up.

- Keep instruction lists to 2 layers. If more seem needed, that is an indicator the activity probably needs split.

- Each activity should only tackle only 1 item introduced in the theory. It's ok to have a few activities in 1 step.

- Make sure to mention context changes. Examples:

  - Between the web interface and the codespace.
  - Between the exercise issue and the working tab, even though they are in the same repository.

- Describe the location of an object, before clicking it. If the description is more than a few words, shorten it and include an image.

- Lists don't support normal [Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts). Use our [suggested Alert alternatives](formatting.md#alerts) instead.

## Notes

- Each step is a single markdown file.
- Each step has 2 components: theory and practice
  - The theory builds context by introducing a new idea and sharing the fundamentals.
  - The practice activity is a step-by-step guide interacting with actual GitHub.
- Each step is a single markdown file and pairs with a [grading workflow](#exercise-grading).
- Each step includes a **very** short story element, justifying the need to do the upcoming practical activity.
- Each step introduces a small amount of theory. The goal is awareness, not teaching.
- Each step includes references to support more learning. They should be naturally integrated, not a list at the end.
- Each step includes 1 to 3 **Activities**.
