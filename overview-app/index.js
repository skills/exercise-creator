document.addEventListener("DOMContentLoaded", async () => {
  const skillsCoursesTable = document.getElementById("skills-courses-table");
  const learningCoverageTable = document.getElementById("learning-coverage-table");
  const reposTable = document.getElementById("repos-table");
  const fontSizeSelector = document.getElementById("font-size");
  const refreshRateSelector = document.getElementById("refresh-rate");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const settingsButton = document.getElementById("settings-button");
  const settingsMenu = document.getElementById("settings-menu");
  const authStatusLabel = document.getElementById("auth-status");
  let refreshInterval;

  const cacheManager = {
    get(key) {
      return {
        data: JSON.parse(localStorage.getItem(`${key}Data`)) || null,
        timestamp: parseInt(localStorage.getItem(`${key}Timestamp`), 10) || null,
      };
    },
    set(key, data) {
      const now = Date.now();
      localStorage.setItem(`${key}Data`, JSON.stringify(data));
      localStorage.setItem(`${key}Timestamp`, now.toString());
    },
  };

  async function fetchCSV(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  }

  async function csvToJson(csv) {
    return new Promise((resolve, reject) => {
      Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results.data),
        error: (error) => reject(error),
      });
    });
  }

  function createTableFromJson(json) {
    const table = document.createElement("table");
    const headers = Object.keys(json[0]);
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    json.forEach((row) => {
      const tr = document.createElement("tr");
      headers.forEach((header, index) => {
        const td = document.createElement("td");
        if (row[header] === "x") {
          const checkMark = document.createElement("span");
          checkMark.classList.add("check-mark");
          td.appendChild(checkMark);
        } else if (row[header] === "m") {
          const mentionedIcon = document.createElement("span");
          mentionedIcon.classList.add("mentioned-icon");
          td.appendChild(mentionedIcon);
        } else {
          td.textContent = row[header];
          if (td.textContent.includes("H:")) {
            td.textContent = td.textContent.replace("H:", "");
          }
        }
        // Center single value cells
        if (row[header].length == 1) {
          td.classList.add("single-value");
        }
        tr.appendChild(td);
      });
      if (row[headers[0]].includes("H:")) {
        tr.classList.add("row-header");
      }
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
  }

  async function promptForGithubToken() {
    return new Promise((resolve) => {
      const dialog = document.getElementById("github-token-dialog");
      const input = document.getElementById("github-token-input");

      dialog.showModal();

      dialog.addEventListener("close", () => {
        resolve(input.value);
      });
    });
  }

  async function ensureGithubToken() {
    let token = localStorage.getItem("githubToken");
    if (!token) {
      token = await promptForGithubToken();
      if (token) {
        localStorage.setItem("githubToken", token);
      }
    }
    return token;
  }

  async function loadOctokit() {
    const module = await import("https://cdn.skypack.dev/@octokit/rest");
    return module.Octokit;
  }

  const githubToken = await ensureGithubToken();
  const Octokit = await loadOctokit();
  const octokit = new Octokit({
    auth: githubToken,
  });

  async function fetchRepos(maxAge = 24 * 60 * 60 * 1000) {
    // Try using cached data
    const now = Date.now();
    const cache = cacheManager.get("repos");
    if (cache.data && now - cache.timestamp < maxAge) {
      console.debug("fetchRepos: Using cached repo data");
      return cache.data;
    }

    // Update cache and return
    console.log("fetchRepos: Refreshing repo data");
    const { data } = await octokit.repos.listForOrg({
      org: "skills",
    });

    // Filter repos with the topic "skills-course"
    const filteredRepos = data.filter((repo) => repo.topics.includes("skills-course"));

    // Cache and return
    cacheManager.set("repos", filteredRepos);
    return filteredRepos;
  }

  async function fetchRepoTraffic(repoName, maxAge = 24 * 60 * 60 * 1000) {
    // Try using cached data
    const now = Date.now();
    const cache = cacheManager.get(`repoTraffic_${repoName}`);
    if (cache.data && now - cache.timestamp < maxAge) {
      console.debug(`fetchRepoTraffic: Using cached traffic data for ${repoName}`);
      return cache.data;
    }

    // Update cache and return
    console.log(`fetchRepoTraffic: Refreshing traffic data for ${repoName}`);
    const { data } = await octokit.repos.getViews({
      owner: "skills",
      repo: repoName,
    });
    cacheManager.set(`repoTraffic_${repoName}`, data);
    return data;
  }

  async function fetchRepoViewsOverTime(repoName, maxAge = 24 * 60 * 60 * 1000) {
    // Try using cached data
    const now = Date.now();
    const cache = cacheManager.get(`repoViewsOverTime_${repoName}`);
    if (cache.data && now - cache.timestamp < maxAge) {
      console.debug(`fetchRepoViewsOverTime: Using cached views data for ${repoName}`);
      return cache.data;
    }

    // Update cache and return
    console.log(`fetchRepoViewsOverTime: Refreshing views data for ${repoName}`);
    const { data } = await octokit.repos.getViews({
      owner: "skills",
      repo: repoName,
      per: "day",
    });
    cacheManager.set(`repoViewsOverTime_${repoName}`, data.views);
    return data.views;
  }

  function createReposTable(repos) {
    const table = document.createElement("table");
    const headers = ["ID", "Name", "Description", "URL", "Views", "Unique Visitors"];
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Sort repositories by name
    repos.sort((a, b) => a.name.localeCompare(b.name));

    repos.forEach(async (repo) => {
      const tr = document.createElement("tr");
      const idTd = document.createElement("td");
      idTd.textContent = repo.id;
      const nameTd = document.createElement("td");
      nameTd.textContent = repo.name;
      const descriptionTd = document.createElement("td");
      descriptionTd.textContent = repo.description;
      const urlTd = document.createElement("td");
      const urlLink = document.createElement("a");
      urlLink.target = "_blank";
      urlLink.href = repo.html_url;
      urlLink.textContent = repo.html_url;
      urlTd.appendChild(urlLink);
      const trafficData = await fetchRepoTraffic(repo.name);
      const viewsTd = document.createElement("td");
      viewsTd.textContent = trafficData.count;
      const uniquesTd = document.createElement("td");
      uniquesTd.textContent = trafficData.uniques;
      tr.appendChild(idTd);
      tr.appendChild(nameTd);
      tr.appendChild(descriptionTd);
      tr.appendChild(urlTd);
      tr.appendChild(viewsTd);
      tr.appendChild(uniquesTd);
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
  }

  async function createTotalViewChart(repos) {
    const ctx = document.getElementById("repos-total-views").getContext("2d");
    const repoNames = repos.map((repo) => repo.name);
    const repoViews = await Promise.all(
      repos.map((repo) => fetchRepoTraffic(repo.name).then((data) => data.count))
    );
    const repoUniques = await Promise.all(
      repos.map((repo) => fetchRepoTraffic(repo.name).then((data) => data.uniques))
    );

    const sortedData = repoNames
      .map((name, index) => ({ name, views: repoViews[index], uniques: repoUniques[index] }))
      .sort((a, b) => b.views - a.views);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: sortedData.map((item) => item.name),
        datasets: [
          {
            label: "Views",
            data: sortedData.map((item) => item.views),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Uniques",
            data: sortedData.map((item) => item.uniques),
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  async function createViewsVsTimeChart(repos) {
    const ctx = document.getElementById("repos-views-vs-time").getContext("2d");
    const labels = Array.from({ length: 14 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toLocaleDateString();
    }).reverse();

    const datasets = await Promise.all(
      repos.map(async (repo) => {
        const views = await fetchRepoViewsOverTime(repo.name);
        const data = labels.map((label) => {
          const view = views.find((v) => new Date(v.timestamp).toLocaleDateString() === label);
          return view ? view.count : 0;
        });
        return {
          label: repo.name,
          data,
          totalViews: data.reduce((sum, count) => sum + count, 0),
          fill: false,
          borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 1)`,
          tension: 0.1,
        };
      })
    );

    datasets.sort((a, b) => b.totalViews - a.totalViews);

    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets,
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "right",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  async function createViewsPieChart(repos) {
    const ctx = document.getElementById("views-pie-chart").getContext("2d");
    const repoNames = repos.map((repo) => repo.name);
    const repoViews = await Promise.all(
      repos.map((repo) => fetchRepoTraffic(repo.name).then((data) => data.count))
    );

    const sortedData = repoNames
      .map((name, index) => ({ name, views: repoViews[index] }))
      .sort((a, b) => b.views - a.views);

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: sortedData.map((item) => item.name),
        datasets: [
          {
            label: "Views",
            data: sortedData.map((item) => item.views),
            backgroundColor: sortedData.map(
              () =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, ${Math.floor(Math.random() * 255)}, 0.2)`
            ),
            borderColor: sortedData.map(
              () =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, ${Math.floor(Math.random() * 255)}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.raw;
                const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                const percentage = ((value / total) * 100).toFixed(2);
                return `${label}: ${value} (${percentage}%)`;
              },
            },
          },
          datalabels: {
            display: true,
            color: "white",
            formatter: (value, context) => {
              const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
              const percentage = ((value / total) * 100).toFixed(2);
              return `hello: ${percentage}%`;
            },
          },
        },
      },
    });
  }

  async function createUniqueViewersPieChart(repos) {
    const ctx = document.getElementById("uniques-pie-chart").getContext("2d");
    const repoNames = repos.map((repo) => repo.name);
    const repoUniques = await Promise.all(
      repos.map((repo) => fetchRepoTraffic(repo.name).then((data) => data.uniques))
    );

    const sortedData = repoNames
      .map((name, index) => ({ name, uniques: repoUniques[index] }))
      .sort((a, b) => b.uniques - a.uniques);

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: sortedData.map((item) => item.name),
        datasets: [
          {
            label: "Uniques",
            data: sortedData.map((item) => item.uniques),
            backgroundColor: sortedData.map(
              () =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, ${Math.floor(Math.random() * 255)}, 0.2)`
            ),
            borderColor: sortedData.map(
              () =>
                `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                  Math.random() * 255
                )}, ${Math.floor(Math.random() * 255)}, 1)`
            ),
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.raw;
                const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                const percentage = ((value / total) * 100).toFixed(2);
                return `${label}: ${value} (${percentage}%)`;
              },
            },
          },
          datalabels: {
            display: true,
            color: "white",
            formatter: (value, context) => {
              const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
              const percentage = ((value / total) * 100).toFixed(2);
              return `${percentage}%`;
            },
          },
        },
      },
    });
  }

  async function displayTotalCombinedViews(repos) {
    const repoViews = await Promise.all(
      repos.map((repo) => fetchRepoTraffic(repo.name).then((data) => data.count))
    );
    const totalViews = repoViews.reduce((acc, views) => acc + views, 0);
    document.getElementById("total-combined-views-label").textContent = totalViews.toLocaleString();
  }

  async function displayTotalUniqueViewers(repos) {
    const repoUniques = await Promise.all(
      repos.map((repo) => fetchRepoTraffic(repo.name).then((data) => data.uniques))
    );
    const totalUniques = repoUniques.reduce((acc, uniques) => acc + uniques, 0);
    document.getElementById("total-unique-viewers-label").textContent =
      totalUniques.toLocaleString();
  }

  function addRowAndColumnHoverEffect(table) {
    const cells = table.querySelectorAll("td, th");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        const index = cell.cellIndex;
        const row = cell.parentElement;
        table
          .querySelectorAll(`td:nth-child(${index + 1}), th:nth-child(${index + 1})`)
          .forEach((colCell) => {
            colCell.classList.add("hover");
          });
        row.classList.add("hover");
      });
      cell.addEventListener("mouseout", () => {
        const index = cell.cellIndex;
        const row = cell.parentElement;
        table
          .querySelectorAll(`td:nth-child(${index + 1}), th:nth-child(${index + 1})`)
          .forEach((colCell) => {
            colCell.classList.remove("hover");
          });
        row.classList.remove("hover");
      });
    });
  }

  async function loadTables() {
    // Fetch CSV files
    const skillsCoursesCSV = await fetchCSV("skills-courses.csv");
    const learningCoverageCSV = await fetchCSV("learning-coverage.csv");

    const skillsCoursesJson = await csvToJson(skillsCoursesCSV);
    const learningCoverageJson = await csvToJson(learningCoverageCSV);

    // Clear old content
    const oldSkillsCoursesTable = skillsCoursesTable.querySelector("table");
    if (oldSkillsCoursesTable) {
      skillsCoursesTable.removeChild(oldSkillsCoursesTable);
    }
    const oldLearningCoverageTable = learningCoverageTable.querySelector("table");
    if (oldLearningCoverageTable) {
      learningCoverageTable.removeChild(oldLearningCoverageTable);
    }

    // Load new content
    skillsCoursesTable.appendChild(createTableFromJson(skillsCoursesJson));
    learningCoverageTable.appendChild(createTableFromJson(learningCoverageJson));

    addRowAndColumnHoverEffect(skillsCoursesTable.querySelector("table"));
    addRowAndColumnHoverEffect(learningCoverageTable.querySelector("table"));
  }

  const repos = await fetchRepos();
  await createTotalViewChart(repos);
  await createViewsVsTimeChart(repos);
  await createViewsPieChart(repos);
  await createUniqueViewersPieChart(repos);
  await displayTotalCombinedViews(repos);
  await displayTotalUniqueViewers(repos);
  reposTable.appendChild(createReposTable(repos));
  addRowAndColumnHoverEffect(reposTable.querySelector("table"));

  function setupTabs() {
    const tabs = document.querySelectorAll(".tab");
    const tabContainers = document.querySelectorAll(".tab-container");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tabContainers.forEach((tc) => tc.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.getAttribute("data-target")).classList.add("active");
        localStorage.setItem("activeTab", tab.getAttribute("data-target"));
      });
    });

    const activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
      tabs.forEach((t) => t.classList.remove("active"));
      tabContainers.forEach((tc) => tc.classList.remove("active"));
      document.querySelector(`.tab[data-target="${activeTab}"]`).classList.add("active");
      document.getElementById(activeTab).classList.add("active");
    } else {
      tabs[0].classList.add("active");
      tabContainers[0].classList.add("active");
    }
  }

  function setupFontSizeSelector() {
    fontSizeSelector.addEventListener("change", (event) => {
      const fontSize = event.target.value;
      document.body.style.fontSize = `${fontSize}px`;
      localStorage.setItem("fontSize", fontSize);
    });
  }

  function applyInitialFontSize() {
    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
      document.body.style.fontSize = `${savedFontSize}px`;
      fontSizeSelector.value = savedFontSize;
    } else {
      document.body.style.fontSize = `${fontSizeSelector.value}px`;
    }
  }

  function setupRefreshRateSelector() {
    refreshRateSelector.addEventListener("change", (event) => {
      const refreshRate = parseInt(event.target.value, 10);
      localStorage.setItem("refreshRate", refreshRate);
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
      if (refreshRate > 0) {
        refreshInterval = setInterval(async () => {
          await loadTables();
        }, refreshRate);
      }
    });
  }

  function applyInitialRefreshRate() {
    const savedRefreshRate = localStorage.getItem("refreshRate");
    if (savedRefreshRate) {
      refreshRateSelector.value = savedRefreshRate;
      if (parseInt(savedRefreshRate, 10) > 0) {
        refreshInterval = setInterval(async () => {
          await loadTables();
        }, parseInt(savedRefreshRate, 10));
      }
    }
  }

  function setupDarkModeToggle() {
    darkModeToggle.addEventListener("change", (event) => {
      const isDarkMode = event.target.checked;
      if (isDarkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      localStorage.setItem("darkMode", isDarkMode);
    });
  }

  function applyInitialDarkMode() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    darkModeToggle.checked = isDarkMode;
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }

  async function fetchGithubRateLimit() {
    const { data } = await octokit.rateLimit.get();
    return data.rate.remaining;
  }

  async function displayGithubRateLimit() {
    const remainingQuota = await fetchGithubRateLimit();
    const rateLimitLabel = document.getElementById("rate-limit-status");
    rateLimitLabel.textContent = `Remaining Quota: ${remainingQuota}`;
  }

  function setupSettingsMenu() {
    settingsButton.addEventListener("click", async () => {
      settingsMenu.classList.toggle("show");
      await displayGithubRateLimit();
    });

    window.addEventListener("click", (event) => {
      if (!event.target.closest(".menu")) {
        if (settingsMenu.classList.contains("show")) {
          settingsMenu.classList.remove("show");
        }
      }
    });
  }

  async function checkGithubAuthorization(token) {
    try {
      const Octokit = await loadOctokit();
      const octokit = new Octokit({ auth: token });
      await octokit.request("GET /user");
      return true;
    } catch (error) {
      return false;
    }
  }

  function displayAuthorizationStatus(isAuthorized) {
    if (isAuthorized) {
      authStatusLabel.textContent = "Authorized";
      authStatusLabel.classList.add("success");
      authStatusLabel.classList.remove("error");
    } else {
      authStatusLabel.textContent = "Invalid Token";
      authStatusLabel.classList.add("error");
      authStatusLabel.classList.remove("success");
    }
  }

  function applyInitialGithubToken() {
    const savedToken = localStorage.getItem("githubToken");
    if (savedToken) {
      checkGithubAuthorization(savedToken).then(displayAuthorizationStatus);
    }
  }

  setupTabs();
  setupFontSizeSelector();
  applyInitialFontSize();
  setupRefreshRateSelector();
  applyInitialRefreshRate();
  setupDarkModeToggle();
  applyInitialDarkMode();
  setupSettingsMenu();
  applyInitialGithubToken();
  await loadTables(); // Load CSV files on initial page load
});
