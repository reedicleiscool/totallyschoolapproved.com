/unblocked-games
  ├── index.html
  ├── style.css
  └── script.js
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Unblocked Games Hub</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>🎮 Unblocked Games Hub</h1>
  <div class="header-buttons">
    <button onclick="openTab('games')">Games</button>
    <button onclick="openTab('favorites')">Favorites</button>
    <button onclick="openTab('control')">Control Panel</button>
  </div>
</header>

<main>

  <!-- GAMES TAB -->
  <section id="games" class="tab active">
    <div class="game-grid" id="gameGrid"></div>
  </section>

  <!-- FAVORITES TAB -->
  <section id="favorites" class="tab">
    <h2>⭐ Your Favorites</h2>
    <div class="game-grid" id="favoritesGrid"></div>
  </section>

  <!-- CONTROL PANEL -->
  <section id="control" class="tab">
    <h2>⚙️ Control Panel</h2>

    <div class="control-group">
      <label>Theme:</label>
      <select onchange="changeTheme(this.value)">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="neon">Neon</option>
        <option value="retro">Retro</option>
      </select>
    </div>

    <div class="control-group">
      <label>
        <input type="checkbox" id="animationsToggle" checked onchange="toggleAnimations()">
        Enable Animations
      </label>
    </div>

    <div class="control-group">
      <button onclick="resetSettings()">Reset All Settings</button>
    </div>

  </section>

</main>

<script src="script.js"></script>
</body>
</html>
:root {
  --bg: #f4f4f4;
  --text: #111;
  --card: #fff;
  --accent: #4CAF50;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: 0.3s;
}

header {
  padding: 15px;
  background: var(--accent);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-buttons button {
  margin-left: 10px;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background: white;
  color: black;
  border-radius: 6px;
}

.tab {
  display: none;
  padding: 20px;
}

.tab.active {
  display: block;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

.game-card {
  background: var(--card);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.2s;
}

.game-card:hover {
  transform: scale(1.05);
}

button.play-btn {
  margin-top: 5px;
  background: var(--accent);
  color: white;
  border: none;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
}

/* DARK THEME */
.dark {
  --bg: #121212;
  --text: #f4f4f4;
  --card: #1f1f1f;
  --accent: #bb86fc;
}

/* NEON THEME */
.neon {
  --bg: #000;
  --text: #39ff14;
  --card: #111;
  --accent: #ff00ff;
}

/* RETRO THEME */
.retro {
  --bg: #fdf6e3;
  --text: #073642;
  --card: #eee8d5;
  --accent: #b58900;
}
const games = [
  { name: "Slope", url: "https://example.com/slope" },
  { name: "Run 3", url: "https://example.com/run3" },
  { name: "1v1.LOL", url: "https://example.com/1v1lol" },
  { name: "Tetris", url: "https://example.com/tetris" }
];

function loadGames() {
  const grid = document.getElementById("gameGrid");
  grid.innerHTML = "";

  games.forEach(game => {
    const card = createGameCard(game);
    grid.appendChild(card);
  });

  loadFavorites();
}

function createGameCard(game) {
  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <h3>${game.name}</h3>
    <button class="play-btn" onclick="window.open('${game.url}', '_blank')">Play</button>
    <button onclick="addFavorite('${game.name}')">⭐</button>
  `;

  return card;
}

function addFavorite(name) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(name)) {
    favorites.push(name);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadFavorites();
  }
}

function loadFavorites() {
  const grid = document.getElementById("favoritesGrid");
  grid.innerHTML = "";
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.forEach(name => {
    const game = games.find(g => g.name === name);
    if (game) {
      grid.appendChild(createGameCard(game));
    }
  });
}

function openTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

function changeTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

function toggleAnimations() {
  const enabled = document.getElementById("animationsToggle").checked;
  document.body.style.transition = enabled ? "0.3s" : "none";
  localStorage.setItem("animations", enabled);
}

function resetSettings() {
  localStorage.clear();
  location.reload();
}

window.onload = function() {
  loadGames();
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.body.className = savedTheme;
};
