## Step 2: Work with the Node.js Calculator

_Great job completing Step 1! Now let's use the Copilot CLI to create a Node.js calculator._

### :book: Theory

The command-line interface (CLI) provides a powerful way to interact with applications directly from your terminal. GitHub Copilot CLI extends this capability by allowing you to attach files, including images, to generate code suggestions based on visual references.

When working with Copilot CLI, you can use the `--attach` flag to include images or other files in your prompt. This is particularly useful when you have a visual reference of what you want to build, such as a CLI interface design or application mockup. Copilot can analyze the image and generate appropriate code to match the interface.

Many Node.js applications, including calculators, can be built using this approach - starting with a visual design and using Copilot CLI to generate the implementation code.

### ⌨️ Activity 1: Use the Copilot CLI to Create the Node.js Calculator

Let's use the Copilot CLI with an attached image to create and work on the Node.js calculator.

1. Open your terminal or command prompt.

1. Use the Copilot CLI with the attached image to create the calculator. Run the following command:

   ```bash
   gh copilot suggest --attach node-js-calculator.png "Create a Node.js calculator based on the image"
   ```

1. Review the suggested code from Copilot and implement it in your project.

1. The calculator interface should look similar to this:

   <img alt="Node.js calculator CLI interface showing the command prompt and available operations" src="https://github.com/user-attachments/assets/330a5086-e74e-4c54-bead-91c7a9d93997">

1. Test the calculator by running it with the CLI command.

1. Try performing a basic calculation by entering a command.

1. Experiment with different operations to get familiar with the CLI interface.

1. Commit your changes and push them to your repository.

   Wait about 20 seconds then refresh this page for the next step.

<details>
<summary> <b> 💡 Tip:</b> Troubleshooting Copilot CLI</summary>

If you encounter issues using Copilot CLI:

- Make sure GitHub CLI is installed by running `gh --version`
- Ensure you're authenticated with GitHub CLI by running `gh auth status`
- Verify the image file `node-js-calculator.png` exists in your current directory
- Make sure Node.js is installed on your system by running `node --version`
- Review any error messages carefully - they often point to the specific issue

</details>
