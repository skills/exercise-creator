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
CRED_HELPER=/workspaces/exercise-manager/.devcontainer/gitcredential.sh
sudo git config --system credential.helper "$CRED_HELPER"

# Clone useful repositories
sudo chown $USER /workspaces
cd /workspaces
gh repo clone "https://github.com/skills/exercise-toolkit"
gh repo clone "https://github.com/skills/exercise-template"

# Build the Skills runner image for Act
docker build . --file "/workspaces/exercise-manager/.devcontainer/ubuntu-skills.Dockerfile" --tag "ubuntu-skills:latest"

# Add a symbolic link in the user folder to the .actrc file in this repo
# This sets a default Act config across all projects.
ln -s /workspaces/exercise-manager/.actrc $HOME/.actrc

# Generate environment variable files for Act
cd /workspaces/exercise-manager
touch '.actrc.vars'
touch '.actrc.env'
touch '.actrc.secrets'
