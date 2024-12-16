import React, { useEffect, useState } from 'react';
import { Box, Text, Link, Label } from '@primer/react';
import './App.css';

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/orgs/skills/repos');
      const data = await response.json();
      setRepos(data);
    };

    fetchRepos();
  }, []);

  return (
    <Box p={3}>
      <Text as="h1" fontSize={4} mb={3}>
        Skills GitHub Repositories
      </Text>
      {repos.map((repo) => (
        <Box key={repo.id} p={3} mb={3} borderWidth={1} borderStyle="solid" borderColor="border.default" borderRadius={2}>
          <Text as="h2" fontSize={3} mb={2}>
            <Link href={repo.html_url}>{repo.name}</Link>
          </Text>
          <Text as="p" mb={1}>
            ID: {repo.id}
          </Text>
          <Text as="p" mb={1}>
            Stars: {repo.stargazers_count}
          </Text>
          <Text as="p" mb={1}>
            Last Modified: {new Date(repo.updated_at).toLocaleDateString()}
          </Text>
          <Box>
            {repo.topics.map((topic) => (
              <Label key={topic} mr={1}>
                {topic}
              </Label>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default App;
