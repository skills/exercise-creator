# Formatting

## Images

- Image files **must** use absolute URLs. Relative links will break when the markdown content is copied and pasted as an issue comment.
- Use the online file/markdown editor on GitHub to paste images and get urls.

  - This will upload the image from your clipboard and insert a markdown image (absolute url) into the text editor. Simply copy that to your active work.
  - You do not need to save the editor session for the image to remain alive.
  - The image will have the same privacy as the repository. As such, private images will not appear in VS Code's preview (even if you are logged in).

- Animated images (GIFs) are deliberately blocked on GitHub. As useful as they are for demonstrations, they are unfortunately not an option.

- Images, by default, display at max available resolution or the size of the window. Either reduce the size of the image or use an HTML tag to specify the size. Example:

  ```html
  <img src="myimage.png" width="300px"
  ```

- Consider reducing image sizes to speed up load times.

### Diagrams

- Do **NOT** use an external tool to create a diagram and then insert as an image. These require tracking the source document, which is often lost.
- Store the image as an editable `.svg` file or use mermaid syntax.

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

## Copilot Prompts

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
