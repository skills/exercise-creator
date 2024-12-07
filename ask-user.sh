#!/bin/bash
# ...existing code...
# chmod +x /workspaces/skills-manager/ask-user.sh

if zenity --question --text="Do you want to download all Skill repositories?"; then
    # ...existing code to download repositories...
    echo "hello world"
else
  echo "Skipping download of Skill repositories."
fi

# ...existing code...
