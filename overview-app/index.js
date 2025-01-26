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

  function promptForGithubToken() {
    return new Promise((resolve) => {
      const token = prompt("Please enter your GitHub token:");
      resolve(token);
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
  const githubToken = await ensureGithubToken();
    // Try using cached data
    const now = Date.now();
    const cache = cacheManager.get("repos");
    if (cache.data && now - cache.timestamp < maxAge) {
      console.debug("fetchRepos: Using cached repo data");
      return cache.data;
    }

    // Update cache and return
    console.log("fetchRepos: Refreshing repo data");
    const response = await fetch("https://api.github.com/orgs/skills/repos");
    const data = await response.json();
    cacheManager.set("repos", data);
    return data;
  }

  function createReposTable(repos) {
    const table = document.createElement("table");
    const headers = ["ID", "Name", "Description", "URL"];
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    repos.forEach((repo) => {
      const tr = document.createElement("tr");
      const idTd = document.createElement("td");
      idTd.textContent = repo.id;
      const nameTd = document.createElement("td");
      nameTd.textContent = repo.name;
      const descriptionTd = document.createElement("td");
      descriptionTd.textContent = repo.description;
      const urlTd = document.createElement("td");
      const urlLink = document.createElement("a");
      urlLink.href = repo.html_url;
      urlLink.textContent = repo.html_url;
      urlTd.appendChild(urlLink);
      tr.appendChild(idTd);
      tr.appendChild(nameTd);
      tr.appendChild(descriptionTd);
      tr.appendChild(urlTd);
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
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
