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

# Clone useful repositories (skip if already there - e.g. on container rebuild)
sudo chown -R $USER:$USER /workspaces
cd /workspaces

if [ -d "exercise-toolkit/.git" ]; then
  echo "exercise-toolkit already cloned"
else
  echo "Cloning exercise-toolkit"
  gh repo clone skills/exercise-toolkit
fi

if [ -d "exercise-template/.git" ]; then
  echo "exercise-template already cloned"
else
  echo "Cloning exercise-template"
  gh repo clone skills/exercise-template
fi
