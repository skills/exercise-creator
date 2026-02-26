---
applyTo: "**/.github/steps/*.md,**/.github/ISSUE_TEMPLATE/*.md"
---

# Formatting Guidelines for Exercise Content

These formatting conventions ensure consistent, accessible, and visually appealing exercise content across all GitHub Skills exercises.

## Text Formatting

- Use **bold** for names of UI elements the learner must interact with: `Click the **Settings** tab.`
- Put values, branch names, and file names in backticks: `my-first-branch`, `README.md`.
- Use code blocks for commands, copy/paste values, and code examples.
- Use sentence case for headings.
- Keep 1 blank line between ordered list items for consistent spacing.

## Inline Alerts (inside ordered lists)

Normal GitHub Alert syntax (`> [!NOTE]`) breaks inside indented lists. Use these alternatives:

> 🪧 **Note:** Something extra you might want to know.

> 💡 **Tip:** This will help you with xyz.

> ❕ **Important:** This should be heavily considered.

> ⚠️ **Warning:** Be careful about this.

> ❗ **Caution:** Be really careful about this.

> ⏳ **Wait:** The following will take a moment.

> ✨ **Bonus:** Try doing this. It might be fun!

> 🧪 **Try this:** Something to experiment with.

Standard GitHub Alerts (`> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!CAUTION]`) work **outside** ordered lists and should be used sparingly.

## Images

- Store all images in `.github/images/` with relative paths: `../images/filename.png`.
- Use HTML for size control with descriptive alt text:
  ```html
  <img width="300" alt="target branch settings" src="../images/branch-protection.png" />
  ```
- Reduce image sizes for faster loading.
- Annotate screenshots to highlight the relevant UI element.

## Diagrams

- Do NOT use external tools to create diagrams as images.
- Use editable `.drawio.svg` files or Mermaid syntax.

## Long-Form Tips

```html
<details>
<summary> <b> 💡 Tip:</b> Short description</summary><br/>

Additional information.

<img width="200" src="https://octodex.github.com/images/puddle_jumper_octodex.jpg"/>

</details>
```

## Troubleshooting Blocks

Every activity must end with a collapsible troubleshooting section:

```html
<details>
<summary>Having trouble? 🤷</summary><br/>

- Common issue and how to fix it
- Another common issue

</details>
```

## Skills Exercise Link Badges

Link to other exercises using color-coded badges:

```markdown
<!-- Copilot (purple) -->
[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=8250df)](URL)

<!-- Git/Repo (green) -->
[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=1f883d)](URL)

<!-- Security (red) -->
[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=cf222e)](URL)

<!-- Actions (blue) -->
[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=0969da)](URL)

<!-- Generic (gray) -->
[![Skills](https://img.shields.io/badge/Skills-Exercise_Name_→-text?style=flat&logo=github&labelColor=1f2328&color=f6f8fa)](URL)
```

## Copilot Prompt Formatting

When exercises teach Copilot interactions:

```markdown
> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github-copilot)
>
> ```prompt
> Your prompt here
> ```
```

## Terminal Command Formatting

```markdown
> [![Static Badge](https://img.shields.io/badge/Terminal-text?style=flat&logo=gnometerminal&labelColor=1f2328&color=eee)](URL)
>
> ```bash
> git --version
> ```
```
