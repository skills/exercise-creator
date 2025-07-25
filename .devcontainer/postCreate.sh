#!/bin/bash

# Login using the GitHub CLI
echo "Logging in to GitHub"
if ! gh auth status &>/dev/null; then
  gh auth login
else
  echo "Found existing credentials"
  gh auth status
fi

# Configure Git and VS Code to prefer GH_TOKEN
echo "Set Git and VS Code credential helper to prefer GH_TOKEN"
CRED_HELPER=/workspaces/exercise-manager/.devcontainer/gitcredential.sh
sudo git config --system credential.helper "$CRED_HELPER"

# Clone useful repositories
sudo chown $USER /workspaces
cd /workspaces
gh repo clone "https://github.com/skills/exercise-toolkit"
gh repo clone "https://github.com/skills/exercise-template"


# Ensure current branch is up to date
git pull