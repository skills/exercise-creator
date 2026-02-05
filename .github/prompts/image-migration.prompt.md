# Image Migration Task: Migrate External Images to Local Repository

## Objective
Migrate all external image references (user-attachments, user-images URLs) to local repository files in `.github/images/` with descriptive filenames and relative links.

## Task Steps

### 1. Find All External Image References

Search `.github/steps/*.md` files for external image URLs:
- `https://github.com/user-attachments/assets/*`
- `https://user-images.githubusercontent.com/*`
- Any other external image hosting URLs

### 2. Create Images Directory

```bash
mkdir -p .github/images
```

### 3. Download and Rename Images

For each external image:

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

### 4. Update Markdown References

Replace each external URL with relative path:

**Find pattern:**
```markdown
src="https://github.com/user-attachments/assets/..."
src="https://user-images.githubusercontent.com/..."
```

**Replace with:**
```markdown
src="../images/descriptive-filename.png"
```

**Important:** Preserve all other attributes (width, alt text, etc.)

### 5. Verify Changes

- [ ] All images downloaded successfully to `.github/images/`
- [ ] All filenames are descriptive (no generic names or UUIDs)
- [ ] All markdown files updated with relative paths
- [ ] Relative paths are correct (`../images/` from `.github/steps/`)
- [ ] No broken image links
- [ ] Zero net new files added (only images in `.github/images/` should be new)

### 6. Update start-exercise reusable workflow version

Update `start-exercise` reusable workflow that is used to `v0.8.0` version which is the first release of `exercise-toolkit` that supports relative links.

**Important:** Only update the `start-exercise` version reference. Do not modify any other references to `exercise-toolkit` elsewhere in the repository.
