# Image Migration Task: Migrate External Images to Local Repository

## Objective
Migrate GitHub user-attachments image references to local repository files in `.github/images/` with descriptive filenames and relative links.

## Task Steps

### 1. Find All User-Attachments Image References

Search `.github/steps/*.md` files for user-attachments image URLs:
- `https://github.com/user-attachments/assets/*`

**Important:** Only migrate user-attachments images. Leave other external images (octodex, img.shields.io, etc.) as absolute URLs.

### 2. Create Images Directory

```bash
mkdir -p .github/images
```

### 3. Download and Rename Images

For each user-attachments image:

**Download the image:**
```bash
curl -L "<image-url>" -o ".github/images/<descriptive-name>.png"
```

**Naming convention:**
- Use kebab-case (lowercase with hyphens)
- Name based on content or alt text
- Keep it descriptive and clear
- Preserve original file extension

**Examples:**
- Alt text "search box with 'python' value" → `python-search-box.png`
- Alt text "target branch settings" → `branch-protection-target-settings.png`
- Generic "image" with button context → `new-workflow-button.png`

**Do not download:**
- Octodex images (`octodex.github.com`)
- Badge images (`img.shields.io`)
- Any other external hosted images

### 4. Update Markdown References

Replace user-attachments URLs with relative paths:

**Find pattern:**
```markdown
src="https://github.com/user-attachments/assets/..."
```

**Replace with:**
```markdown
src="../images/descriptive-filename.png"
```

**Important:** 
- Preserve all other attributes (width, alt text, etc.)
- Do not change other external image URLs (octodex, shields.io, etc.) - keep them as absolute references

### 5. Verify Changes

- [ ] All user-attachments images downloaded successfully to `.github/images/`
- [ ] All filenames are descriptive (no generic names or UUIDs)
- [ ] All markdown files updated with relative paths for user-attachments images
- [ ] Relative paths are correct (`../images/` from `.github/steps/`)
- [ ] No broken image links
- [ ] Zero net new files added (only images in `.github/images/` should be new)
- [ ] Other external images (octodex, shields.io, etc.) remain as absolute URLs

### 6. Update start-exercise reusable workflow version

Update `start-exercise` reusable workflow that is used to `v0.8.1` version which is the first release of `exercise-toolkit` that fully supports relative links.

**Important:** Only update the `start-exercise` version reference. Do not modify any other references to `exercise-toolkit` elsewhere in the repository.

### 7. Use explicit ref when posting content in start-exercise workflow

Ensure that the repository is checked out at the main branch during the "Checkout" step in the .github/workflows/0-start-exercise.yml file in the post_next_step_content job
This will ensure the current repository is checked out with the commit that was pushed by the previous start-exercise reusable workflow
