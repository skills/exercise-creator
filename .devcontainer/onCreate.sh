#!/bin/bash
# This will run 

# Build the Skills runner image for Act
docker build . --file "/workspaces/exercise-manager/.devcontainer/ubuntu-skills.Dockerfile" --tag "ubuntu-skills:latest"

# Make repos directory
mkdir -p /workspaces/repos

# Add a symbolic link in the user folder to the .actrc file in this repo
# This sets a default Act config across all projects.
ln -s /workspaces/exercise-manager/.actrc $HOME/.actrc

# Generate environment variable files for Act
cd /workspaces/exercise-manager
touch '.actrc.vars'
touch '.actrc.env'
touch '.actrc.secrets'
