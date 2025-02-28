# This dockerfile is to support running grading workflows locally within the codespaces.
# It adds tools that are in the GitHub runner but not in the default image from Nektos/Act.
# Why not use the full image? It is 65gb so too big for a Codespace!
# 
# To build this image: run the following command:
# docker build . --file "/workspaces/skills-manager/.devcontainer/ubuntu-skills.Dockerfile" --tag "ubuntu-skills:latest"

FROM catthehacker/ubuntu:act-latest

# Install GitHub CLI
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg && \
    sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null && \
    sudo apt-get update && \
    sudo apt-get install gh -y
