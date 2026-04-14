# Make with an Outline

The most important part of any new exercise is making a good plan. Every minute invested here will save hours on development and fixes to the exercise.

You can create a new exercise outline by simply asking Copilot. The more details and resources you can provide, the better the outline.

This repository now includes a repo Agent Skill for outline creation in `.github/skills/create-exercise-outline/`, so you can either ask naturally or use the older slash prompt.

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
>
> ```prompt
> /create-exercise-outline
> Make an exercise to teach the fundamentals of Git and version control.
> Assume no prior version control experience.
> ```

You can also ask naturally, for example:

```text
Create a GitHub Skills exercise outline for teaching Git fundamentals to beginners.
```

## Outline Considerations

There are a few perspectives to consider for planning a new Skills Exercise.

- **Primary Skill** - The main focus of the exercise. The clear new subject of knowledge the learner will gain.

- **Learning Content** - The important theory points required to achieve teaching the primary skill.

- **Practical Activities** - Hands-on practical work to use the newly learned theory.

- **Step Transition** - Actions workflows to transition the learner from the current
  step to the next step.

- **Step Grading** - Actions workflows to grade each step and provide feedback.

### Extended Considerations

The following are secondary but won't drastically hurt the exercise if not considered.

- **Storyline Fit** - Each exercise uses the theory and practical work to progress a storyline, providing continuity across exercises. (Like episodes in a TV series or scenes in a movie.)

- **Catalog Impact** - Each exercise should seem to make sense when viewed in the entire catalog. Would it be alone in its own category? Is it too specific>
