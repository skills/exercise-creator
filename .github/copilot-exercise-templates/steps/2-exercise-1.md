## Step 2: Getting work done with Copilot

In the previous step, we Copilot was able to help us onboard to the project. That alone is a huge time saver, but now let's get some work done!

We recently learned there is a bug where students are registering for the same activities twice. That simply isn't acceptable, so let's get it fixed!
Unfortunately, we were given little information to solve this problem. So, let's enlist Copilot to help find the problem area and get a potential solution made.

But before we do that, let's learn a bit more about Copilot! 🧑‍🚀

### How does Copilot work?

In short, you can think of Copilot like a very focused coworker. To be effective with them, you need to provide them background (context) and clear direction (prompts). Additionally, different people are better at different things because of their unique experiences (models).

- **How do we provide context?:** In our coding environment, Copilot will automatically consider nearby code and open tabs. If you are using chat, you can also explicitly refer to files.

- **What model should we pick?:** For our exercise, it shouldn't matter too much. Experimenting with different models is part of the fun! That's another lesson! 🤖

- **How do I make prompts?:** Being explicit and clear helps Copilot do the best job. But unlike some traditional systems, you can always clarify your direction with followup prompts.

### :keyboard: Activity: Activity 1

Describe the activity and offer any tips or tricks to help the learner be successful. Provide a summary of example Results.

Example of providing example results:
<details>
   <summary>Example Results</summary><br/>

   Copilot is growing every day and may not always produce the same results. If you are unhappy with the suggestions, here is an example of a valid suggestion result we produced during the making of this exercise. You can use it to continue forward.

   ```python
   @app.post("/activities/{activity_name}/signup")
   def signup_for_activity(activity_name: str, email: str):
      """Sign up a student for an activity"""
      # Validate activity exists
      if activity_name not in activities:
         raise HTTPException(status_code=404, detail="Activity not found")

      # Get the activity
      activity = activities[activity_name]

      # Validate student is not already signed up
      if email in activity["participants"]:
        raise HTTPException(status_code=400, detail="Student is already signed up")

      # Add student
      activity["participants"].append(email)
      return {"message": f"Signed up {email} for {activity_name}"}
   ```

   </details>
Example of a Tip:
 > **Tip:** Opening a file from the source control area will show the differences to the original rather than simply opening it.

### :keyboard: Activity: Activity 2

Same as above ...

### :keyboard: Activity: Activity 3

Same as above ...

### :keyboard: Activity: Activity N

Same as above ...
