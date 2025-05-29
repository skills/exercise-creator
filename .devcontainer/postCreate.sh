#!/bin/bash

# Make directories for personal area and holding exercises
mkdir -p /workspaces/personal
mkdir -p /workspaces/exercises

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
CRED_HELPER=/workspaces/skills-manager/.devcontainer/gitcredential.sh
sudo git config --system credential.helper "$CRED_HELPER"

# Clone useful repositories
sudo chown $USER /workspaces
cd /workspaces
gh repo clone "https://github.com/skills/exercise-toolkit"
gh repo clone "https://github.com/skills/exercise-template"
gh repo clone "https://github.com/skills/exercise-step-payloads"

# Build the Skills runner image for Act
docker build . --file "/workspaces/skills-manager/.devcontainer/ubuntu-skills.Dockerfile" --tag "ubuntu-skills:latest"

# Add a symbolic link in the user folder to the .actrc file in this repo
# This sets a default Act config across all projects.
ln -s /workspaces/skills-manager/.actrc $HOME/.actrc
