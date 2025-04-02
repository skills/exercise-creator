# Design

The following are guidelines and recommendations. Using them will likely make development easier, but it is not required.

Remember:

- The primary goal is to teach a concept.
- The secondary goal is to leave an example for future reference.

## Tools

The [Exercise Toolkit](https://github.com/skills/exercise-toolkit) repository provides reusable workflows and markdown templates.

- [text-variables](https://github.com/skills/action-text-variables) - A GitHub Action that enables loading a template and replacing variables.


## Step Content

If you are unfamiliar, please see the [planning guide](../1-planning/planning.md) for the breakdown of an exercise into steps and activities.

Steps are used to communicate a piece of the exercise. They are fairly short, introducing a concept and providing a way to quickly practice.

It step typically looks like this:

1. A **little bit** of story.
1. **Enough** theory to build feature awareness.
1. A **short** step-by-step activity to apply the new theory.
   - It's ok to have a few activities.

### Tips: Theory Section

- Instead of listing references at the end, change key words into links. Most people instinctively ignore the "references" section.

- When possible, try to follow the [GitHub Docs style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md).

- Sparingly use [Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) so they don't get ignored.

- Each exercise is not just a tutorial, but also an example. New developers might will simply take the exercise, but experienced developers will explore it to see how it works.

- Avoid use of acronymns and short hand. For example, use `repository` instead of `repo`.

- For story content, keep phrasing professional, polite, and inviting.

### Tips: Activity Section

- Keep it short, sweet, and slightly techincal/challenging. Too simple and they will become board. Too complex and they will give up.

- Keep instruction lists to 2 layers. If more seem needed, that is an indicator the activity probably needs split.

- Each activity should only tackle only 1 item introduced in the theory. It's ok to have a few activities in 1 step.

- Make sure to mention context changes. Examples:

  - Between the web interface and the codespace.
  - Between the exercise issue and the working tab, even though they are in the same repository.

- Describe the location of an object, before clicking it. If the description is more than a few words, shorten it and include an image.

- Lists don't support normal [Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts). Use our [suggested Alert alternatives](formatting.md#alerts) instead.

