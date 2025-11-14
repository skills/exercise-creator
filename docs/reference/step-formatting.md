# Formatting

## Instructions

- Try to avoid using text placeholders for the user to replace. If possible, use [Nunjucks](https://mozilla.github.io/nunjucks/) variables to dynamically insert during the workflow run.

- Keep 1 blank line between activity steps for consistent spacing since some steps have content between them.

- If a Codespace is introduced in the first step, include an inline button to open it.

- When helping the learner locate something in the interface, describe the general area first and gradually be more specific. Example:

  - Easier: `In the right settings area, near the bottom, click the **Duplicate issue** button.`
  - Harder: `Click the **Duplicate issue** button at the bottom of the right settings area.`

- Use bold formatting to identify names of things to interact with.

  Example: `Click the **New issue** button.`

- Put values in single backticks.

  Example: `123`

- If providing a command or copy/paste value, put it in a code block. Example:

  ```txt
  Text to be copied
  ```

- If placing content between activity steps, ensure it is delimited enough to not cause a break in the ordered list counting. Typically at least `3` spaces.

## Images

- Image files **must** use absolute URLs. Relative links will break when the markdown content is copied and pasted as an issue comment.
- Use the online file/markdown editor on GitHub to paste images and get urls.

  - This will upload the image from your clipboard and insert a markdown image (absolute url) into the text editor. Simply copy that to your active work.
  - You do not need to save the editor session for the image to remain alive.
  - The image will have the same privacy as the repository. As such, private images will not appear in VS Code's preview (even if you are logged in).

- Animated images (GIFs) are deliberately blocked on GitHub. As useful as they are for demonstrations, they are unfortunately not an option.

- Images, by default, display at max available resolution or the size of the window. Either reduce the size of the image or use an HTML tag to specify the size. Example:

  ```html
  <img src="my-image.png" width="300px"
  ```

- Consider reducing image sizes to speed up load times.

## Diagrams

- Do **NOT** use an external tool to create a diagram and then insert as an image. These require tracking the source document, which is often lost.
- Store the image as an editable `.drawio.svg` file or use mermaid syntax.

## Alerts

Unfortunately the normal [Alert syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) does not work when it is indented. As such it cannot be used in listed instructions because it breaks the instruction count and does not visually line up. Here are some alternatives.

> 🪧 **Note:** Something extra you might want to know.

> 💡 **Tip:** This will help you about xyz.

> ❕ **Important:** This should be heavily considered.

> ⚠️ **Warning:** Be careful about this.

> ❗ **Caution:** Be really careful about this.

> ⏳ **Wait:** The following will take a moment.

> ✨ **Bonus:** Try doing this. It might be fun!

> 🧪 **Try this:** Something to experiment with.

## Long Form Tips

If a tip needs to be more than one line or include an image, use the expandable box technique.

   <details>
   <summary> <b> 💡 Tip:</b> Short description</summary><br/>

Additional information to explain the tip.

   <img width="200" src="https://octodex.github.com/images/puddle_jumper_octodex.jpg"/>

   </details>

## Highlighted Links

Below are options to provided prettier links to Skills exercises and references on other sites. Colors come from [Primer](https://primer.style/product/primitives/color/).

### Skills Exercises

#### Generic

[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=f6f8fa)](https://github.com/skills)

[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=social&logo=github)](https://github.com/skills)

#### Copilot Exercises

[![Skills](https://img.shields.io/badge/Skills-Getting_Started_with_GitHub_Copilot_→-text?style=flat&logo=github&labelColor=1f2328&color=8250df)](https://github.com/skills)

[![Skills](https://img.shields.io/badge/Skills-Getting_Started_with_GitHub_Copilot_→-text?style=flat&logo=github&labelColor=1f2328&color=fbefff)](https://github.com/skills)

#### Git/Repo Exercises

[![Skills](https://img.shields.io/badge/Skills-Intro_to_GitHub_→-text?style=flat&logo=github&labelColor=1f2328&color=1f883d)](https://github.com/skills)

[![Skills](https://img.shields.io/badge/Skills-Intro_to_GitHub_→-text?style=flat&logo=github&labelColor=1f2328&color=dafbe1)](https://github.com/skills)

#### Security Exercises

[![Skills](https://img.shields.io/badge/Skills-Intro_to_Secret_Scanning_→-text?style=flat&logo=github&labelColor=1f2328&color=cf222e)](https://github.com/skills)

[![Skills](https://img.shields.io/badge/Skills-Intro_to_Secret_Scanning_→-text?style=flat&logo=github&labelColor=1f2328&color=ffebe9)](https://github.com/skills)

#### Actions Exercises

[![Skills](https://img.shields.io/badge/Skills-Hello_GitHub_Actions_→-text?style=flat&logo=github&labelColor=1f2328&color=0969da)](https://github.com/skills)

[![Skills](https://img.shields.io/badge/Skills-Hello_GitHub_Actions_→-text?style=flat&logo=github&labelColor=1f2328&color=ddf4ff)](https://github.com/skills)

#### Other Exercises - Yellow

[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=9a6700)](https://github.com/skills)

[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=fff8c5)](https://github.com/skills)

#### Other Exercises - Orange

[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=bc4c00)](https://github.com/skills)

[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=fff1e5)](https://github.com/skills)

#### Other Exercises - Pink

[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=bf3989)](https://github.com/skills)

[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=ffeff7)](https://github.com/skills)

## Prompts

Below are some options to make prompts easier to recognize.
The `prompt` markdown indicator is to quickly find prompts. It is not official syntax.

### Simple

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
>
> ```prompt
> Please make a ....
> ```

> ![Static Badge](https://img.shields.io/badge/-Response-text?style=social&logo=github%20copilot)
>
> ```prompt
> I would suggest...
> ```

### Simple with name

> ![Static Badge](https://img.shields.io/badge/Copilot-Prompt-text?style=social&logo=github%20copilot)
>
> ```prompt
> Please make a ....
> ```

> ![Static Badge](https://img.shields.io/badge/Copilot-Response-text?style=social&logo=github%20copilot)
>
> ```prompt
> I would suggest...
> ```

### Colorized

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=flat-square&logo=github%20copilot&labelColor=8250df&color=fbefff)
>
> ```prompt
> hello world
> ```

> ![Static Badge](https://img.shields.io/badge/-Response-text?style=flat-square&logo=github%20copilot&labelColor=0969da&color=ddf4ff)
>
> ```prompt
> hello world
> ```

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=flat&logo=github%20copilot&labelColor=8250df&color=fbefff)
>
> ```prompt
> hello world
> ```

> ![Static Badge](https://img.shields.io/badge/-Response-text?style=flat&logo=github%20copilot&labelColor=0969da&color=ddf4ff)
>
> ```prompt
> hello world
> ```
