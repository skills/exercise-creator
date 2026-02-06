#!/bin/bash

# Build the Skills runner image for Act
docker build . --file "/workspaces/exercise-creator/.devcontainer/ubuntu-skills.Dockerfile" --tag "ubuntu-skills:latest"

# Make repos directory
mkdir -p /workspaces/repos

# Add a symbolic link in the user folder to the .actrc file in this repo
# This sets a default Act config across all projects.
ln -s /workspaces/exercise-creator/.actrc $HOME/.actrc

# Generate environment variable files for Act
cd /workspaces/exercise-creator
touch '.actrc.vars'
touch '.actrc.env'
touch '.actrc.secrets'
