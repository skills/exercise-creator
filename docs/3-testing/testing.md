# Testing

Each learning step has an associated workflow with the same name.

It contains 3 parts that need verified.

1. **Trigger** - Typically when the last step of an activity.
2. **Grading job** - Verifies output the learner created during the activity.
3. **Post next content job** - Shares the markdown file containing the next exercise step content.

The general testing flow will look similar to:

1. Disable all jobs in the workflow except the one to be tested.
1. Simplify the job to be tested.
   1. Override issue url environment variable. Point it to somewhere you can experiment freely.
   1. Disable all job steps.
   1. Enable only the required job steps.
1. Run **nektos/act** to trigger the workflow with a sample payload (passing, typical mistakes, etc.).
1. Review logs and refine.
1. Repeat above for each step in the job.
1. Repeat above for each job in the workflow.
1. Enable everything, except url override, and run the entire workflow with sample payloads.

### Tips

- Only create a grading workflow, if failing would provide useful feedback to correct their mistake.
- Workflows might be ran multiple times. Check for continuity issues, if using the option to edit the last comment.
  - FYI, the option to edit the last comment is relative to the user.

