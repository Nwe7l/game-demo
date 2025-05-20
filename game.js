
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const sfx = document.getElementById("sfx");
const storyBox = document.getElementById("storyBox");

let lang = "en";
let storyText = {
  en: "She wakes up in a cold, empty room. Something is watching...",
  ar: "استيقظت في غرفة باردة وفارغة. شيء ما يراقبها..."
};

let girl = new Image();
girl.src = "assets/girl.png";

let bg = new Image();
bg.src = "assets/room.png";

let player = { x: 200, y: 200, speed: 2 };

let keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

canvas.addEventListener("click", () => {
  if (player.x > 230 && player.x < 290 && player.y > 100 && player.y < 160) {
    sfx.play();
    storyBox.innerText = lang === "en" ? "A face appeared in the mirror!" : "ظهر وجه في المرآة!";
  }
});

function toggleLang() {
  lang = lang === "en" ? "ar" : "en";
  storyBox.innerText = storyText[lang];
}

function update() {
  if (keys['w']) player.y -= player.speed;
  if (keys['s']) player.y += player.speed;
  if (keys['a']) player.x -= player.speed;
  if (keys['d']) player.x += player.speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(girl, player.x, player.y, 32, 32);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

girl.onload = () => {
  storyBox.innerText = storyText[lang];
  gameLoop();
};
