#!/bin/bash

# Stop tracking workspace settings
git update-index --skip-worktree skills-manager.code-workspace

# Login using the GitHub CLI
echo "Logging in to GitHub"
if ! gh auth status &>/dev/null; then
  gh auth login
else
  echo "Found existing credentials"
  gh auth status
fi

# Skills related repositories to be cloned
repositories=(
  "https://github.com/skills/exercise-toolkit",
  "https://github.com/skills/exercise-template"
)

# Clone all the repositories
sudo chown $USER /workspaces
cd /workspaces
for repo in "${repositories[@]}"; do
  echo "Cloning Repository: $repo"
  gh repo clone "$repo"
  echo ""
done

# Build the Skills runner image for Act
docker build . --file "/workspaces/skills-manager/.devcontainer/ubuntu-skills.Dockerfile" --tag "ubuntu-skills:latest"

# Add a symbolic link in the user folder to the .actrc file in this repo
# This means sets a default Act config across all projects.
ln -s /workspaces/skills-manager/.actrc $HOME/.actrc
