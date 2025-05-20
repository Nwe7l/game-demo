const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Character
const character = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 40,
  color: 'lime',
  speed: 5,
};

// Movement flags
let keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

// Handle keydown/keyup
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() in keys) keys[e.key.toLowerCase()] = true;
});

document.addEventListener('keyup', (e) => {
  if (e.key.toLowerCase() in keys) keys[e.key.toLowerCase()] = false;
});

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw ground/place
  ctx.strokeStyle = 'lime';
  ctx.lineWidth = 5;
  ctx.strokeRect(100, 100, canvas.width - 200, canvas.height - 200);

  // Move character
  if (keys.w) character.y -= character.speed;
  if (keys.s) character.y += character.speed;
  if (keys.a) character.x -= character.speed;
  if (keys.d) character.x += character.speed;

  // Draw character
  ctx.fillStyle = character.color;
  ctx.beginPath();
  ctx.arc(character.x, character.y, character.size, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(gameLoop);
}

gameLoop();
