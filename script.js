const games = [
  { name: "Slope", url: "https://example.com/slope" },
  { name: "Run 3", url: "https://example.com/run3" },
  { name: "1v1.LOL", url: "https://example.com/1v1lol" },
  { name: "Tetris", url: "https://example.com/tetris" },
  { name: "Chrome Dino", url: "https://example.com/dino" },
  { name: "Flappy Bird", url: "https://example.com/flappy" },
  { name: "2048", url: "https://example.com/2048" },
  { name: "Pac-Man", url: "https://example.com/pacman" },
  { name: "Snake", url: "https://example.com/snake" },
  { name: "Geometry Dash", url: "https://example.com/geom-dash" },
  { name: "Agar.io", url: "https://example.com/agar" },
  { name: "Wordle", url: "https://example.com/wordle" },
  { name: "Slither.io", url: "https://example.com/slither" },
  { name: "Diep.io", url: "https://example.com/diep" },
  { name: "Sugar Sugar", url: "https://example.com/sugar-sugar" },
  { name: "Cut the Rope", url: "https://example.com/cut-rope" },
  { name: "Angry Birds", url: "https://example.com/angry-birds" },
  { name: "Doodle Jump", url: "https://example.com/doodle-jump" },
  { name: "Temple Run", url: "https://example.com/temple-run" },
  { name: "Subway Surfers", url: "https://example.com/subway-surfers" },
  { name: "Candy Crush", url: "https://example.com/candy-crush" },
  { name: "Threes!", url: "https://example.com/threes" },
  { name: "Riddle School", url: "https://example.com/riddle-school" },
  { name: "Papa's Pizzeria", url: "https://example.com/papas-pizzeria" },
  { name: "Papa's Tacos", url: "https://example.com/papas-tacos" },
  { name: "Papa's Sushiria", url: "https://example.com/papas-sushiria" },
  { name: "Hotel Transylvania", url: "https://example.com/hotel-transylvania" },
  { name: "Plants vs Zombies", url: "https://example.com/pvz" },
  { name: "Bloons TD", url: "https://example.com/bloons" },
  { name: "Tower Defense Simulator", url: "https://example.com/td-sim" },
  { name: "Chess.com", url: "https://example.com/chess" },
  { name: "Checkers", url: "https://example.com/checkers" },
  { name: "Connect 4", url: "https://example.com/connect4" },
  { name: "Tic Tac Toe", url: "https://example.com/tictactoe" },
  { name: "Minesweeper", url: "https://example.com/minesweeper" },
  { name: "Hangman", url: "https://example.com/hangman" },
  { name: "Memory Game", url: "https://example.com/memory" },
  { name: "Simon Says", url: "https://example.com/simon" },
  { name: "Whack a Mole", url: "https://example.com/mole" },
  { name: "Pong", url: "https://example.com/pong" },
  { name: "Space Invaders", url: "https://example.com/space-invaders" },
  { name: "Asteroids", url: "https://example.com/asteroids" },
  { name: "Galaga", url: "https://example.com/galaga" },
  { name: "Centipede", url: "https://example.com/centipede" },
  { name: "Donkey Kong", url: "https://example.com/donkey-kong" },
  { name: "Mario", url: "https://example.com/mario" },
  { name: "Sonic", url: "https://example.com/sonic" },
  { name: "Minecraft Classic", url: "https://example.com/minecraft-classic" },
  { name: "Roblox", url: "https://example.com/roblox" },
  { name: "Fortnite", url: "https://example.com/fortnite" },
  { name: "Among Us", url: "https://example.com/among-us" },
  { name: "Skribbl.io", url: "https://example.com/skribbl" },
  { name: "Gartic Phone", url: "https://example.com/gartic" },
  { name: "Jackbox Party Packs", url: "https://example.com/jackbox" },
  { name: "Google Solitaire", url: "https://example.com/solitaire" },
  { name: "FreeCell", url: "https://example.com/freecell" },
  { name: "Spider Solitaire", url: "https://example.com/spider" },
  { name: "Klondike Solitaire", url: "https://example.com/klondike" },
  { name: "Candy Matching", url: "https://example.com/candy-match" },
  { name: "Match 3", url: "https://example.com/match3" },
  { name: "Bejeweled", url: "https://example.com/bejeweled" },
  { name: "Jewel Quest", url: "https://example.com/jewel-quest" },
  { name: "Bubble Shooter", url: "https://example.com/bubble-shooter" },
  { name: "Bubble Trouble", url: "https://example.com/bubble-trouble" },
  { name: "Zuma", url: "https://example.com/zuma" },
  { name: "Luxor", url: "https://example.com/luxor" },
  { name: "Peglin", url: "https://example.com/peglin" },
  { name: "Ball Road Jump", url: "https://example.com/ball-road" },
  { name: "Circle Ninja", url: "https://example.com/circle-ninja" },
  { name: "Tap Tap Revenge", url: "https://example.com/tap-tap" },
  { name: "Osu!", url: "https://example.com/osu" },
  { name: "Friday Night Funkin", url: "https://example.com/fnf" },
  { name: "Just Dance", url: "https://example.com/just-dance" },
  { name: "Rhythm Master", url: "https://example.com/rhythm" },
  { name: "Piano Tiles", url: "https://example.com/piano-tiles" },
  { name: "Flappy 2048", url: "https://example.com/flappy-2048" },
  { name: "Swing Copters", url: "https://example.com/swing" },
  { name: "Crossy Road", url: "https://example.com/crossy-road" },
  { name: "Endless Runner", url: "https://example.com/endless" },
  { name: "Jump Around", url: "https://example.com/jump" },
  { name: "Dumb Ways to Die", url: "https://example.com/dumb-ways" },
  { name: "Getting Over It", url: "https://example.com/getting-over" },
  { name: "Happy Wheels", url: "https://example.com/happy-wheels" },
  { name: "QWOP", url: "https://example.com/qwop" },
  { name: "Kick the Buddy", url: "https://example.com/kick-buddy" },
  { name: "Finger Master", url: "https://example.com/finger-master" },
  { name: "Slap Kings", url: "https://example.com/slap-kings" },
  { name: "Hot Dog Bush", url: "https://example.com/hot-dog" },
  { name: "Cooking Mama", url: "https://example.com/cooking-mama" },
  { name: "Toca Kitchen", url: "https://example.com/toca-kitchen" },
  { name: "My Friend Pedro", url: "https://example.com/pedro" },
  { name: "Bullet Hell", url: "https://example.com/bullet-hell" },
  { name: "Nuclear Throne", url: "https://example.com/nuclear" },
  { name: "Enter the Gungeon", url: "https://example.com/enter-gun" },
  { name: "Binding of Isaac", url: "https://example.com/isaac" },
  { name: "Hollow Knight", url: "https://example.com/hollow-knight" },
  { name: "Dark Souls", url: "https://example.com/dark-souls" },
  { name: "Elden Ring", url: "https://example.com/elden-ring" },
  { name: "Stardew Valley", url: "https://example.com/stardew" },
  { name: "Animal Crossing", url: "https://example.com/animal-crossing" },
  { name: "The Sims", url: "https://example.com/sims" },
  { name: "Valorant", url: "https://example.com/valorant" },
  { name: "CS:GO", url: "https://example.com/csgo" },
  { name: "Dota 2", url: "https://example.com/dota2" },
  { name: "League of Legends", url: "https://example.com/lol" },
  { name: "Overwatch", url: "https://example.com/overwatch" },
  { name: "Team Fortress 2", url: "https://example.com/tf2" },
  { name: "Apex Legends", url: "https://example.com/apex" },
  { name: "Warzone", url: "https://example.com/warzone" },
  { name: "PUBG", url: "https://example.com/pubg" },
  { name: "Rocket League", url: "https://example.com/rocket-league" },
  { name: "Fall Guys", url: "https://example.com/fall-guys" },
  { name: "Brawl Stars", url: "https://example.com/brawl-stars" },
  { name: "Clash Royale", url: "https://example.com/clash-royale" },
  { name: "Clash of Clans", url: "https://example.com/clash-of-clans" },
  { name: "Words with Friends", url: "https://example.com/words-friends" },
  { name: "QuizUp", url: "https://example.com/quizup" },
  { name: "Trivia Crack", url: "https://example.com/trivia-crack" },
  { name: "Sporcle", url: "https://example.com/sporcle" },
  { name: "Kahoot", url: "https://example.com/kahoot" },
  { name: "Quizizz", url: "https://example.com/quizizz" },
  { name: "Incredibox", url: "https://example.com/incredibox" },
  { name: "Drawly", url: "https://example.com/drawly" },
  { name: "Autodraw", url: "https://example.com/autodraw" },
  { name: "DrawPhone", url: "https://example.com/drawphone" },
  { name: "Head Soccer", url: "https://example.com/head-soccer" },
  { name: "Football Legends", url: "https://example.com/football-legends" },
  { name: "Basketball Legends", url: "https://example.com/basketball-legends" },
  { name: "Tennis Masters", url: "https://example.com/tennis-masters" },
  { name: "Golf Masters", url: "https://example.com/golf-masters" },
  { name: "Cricket Star", url: "https://example.com/cricket-star" },
  { name: "Baseball Legends", url: "https://example.com/baseball-legends" },
  { name: "Cooking Battle", url: "https://example.com/cooking-battle" },
  { name: "Raft Wars", url: "https://example.com/raft-wars" },
  { name: "Multiplayer Chess", url: "https://example.com/mp-chess" },
  { name: "Multiplayer Checkers", url: "https://example.com/mp-checkers" },
  { name: "Multiplayer Poker", url: "https://example.com/mp-poker" },
  { name: "Multiplayer Blackjack", url: "https://example.com/mp-blackjack" },
  { name: "Multiplayer Rummy", url: "https://example.com/mp-rummy" },
  { name: "Tank Trouble", url: "https://example.com/tank-trouble" },
  { name: "King of Fighters", url: "https://example.com/king-fighters" },
  { name: "Fighting Grounds", url: "https://example.com/fighting-grounds" },
  { name: "Super Smash Bros", url: "https://example.com/smash-bros" },
  { name: "Mortal Kombat", url: "https://example.com/mortal-kombat" },
  { name: "Street Fighter", url: "https://example.com/street-fighter" },
  { name: "Dragon Ball Z", url: "https://example.com/dbz" },
  { name: "Family Feud Online", url: "https://example.com/family-feud" },
  { name: "Wheel of Fortune Online", url: "https://example.com/wheel-fortune" },
  { name: "Jeopardy Online", url: "https://example.com/jeopardy" },
  { name: "Pictionary Party", url: "https://example.com/pictionary" },
  { name: "Codenames Online", url: "https://example.com/codenames" },
  { name: "Betrayal Arena", url: "https://example.com/betrayal" },
  { name: "Decrypto", url: "https://example.com/decrypto" },
  { name: "Community Tag", url: "https://example.com/community-tag" }
];

function loadGames() {
  const grid = document.getElementById("gameGrid");
  if (!grid) {
    console.error("gameGrid element not found");
    return;
  }
  grid.innerHTML = "";

  console.log("Loading " + games.length + " games...");
  games.forEach(game => {
    const card = createGameCard(game);
    grid.appendChild(card);
  });

  console.log("Games loaded successfully");
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
  console.log("Page loaded - loading games...");
  loadGames();
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.body.className = savedTheme;
};

// Fallback in case onload doesn't trigger
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadGames);
} else {
  loadGames();
}
