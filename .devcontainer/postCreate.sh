#!/bin/bash

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
  "https://github.com/chriswblake/action-text-variables"
  "https://github.com/chriswblake/skills-response-templates"
)

# Clone all the repositories
sudo chown $USER /workspaces
cd /workspaces
for repo in "${repositories[@]}"; do
  echo "Cloning Repository: $repo"
  gh repo clone "$repo"
  echo ""
done
