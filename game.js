
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const sfx = document.getElementById("sfx");
const storyBox = document.getElementById("storyBox");

let lang = "en";
let storySteps = {
  en: [
    "She wakes up in a cold, empty room.",
    "A strange sound echoes behind her.",
    "The mirror begins to glow...",
    "She sees... herself? No, something else."
  ],
  ar: [
    "استيقظت في غرفة باردة وفارغة.",
    "صدى صوت غريب خلفها.",
    "بدأت المرآة تتوهج...",
    "ترى نفسها؟ لا، شيء آخر."
  ]
};
let currentStep = 0;

let girl = new Image();
girl.src = "assets/girl.png";

let bg = new Image();
bg.src = "assets/room.png";

let player = { x: 200, y: 200, speed: 2 };

let keys = {};

window.addEventListener("keydown", e => {
  keys[e.key] = true;
  if (e.key === " ") {
    currentStep++;
    if (currentStep < storySteps[lang].length) {
      storyBox.innerText = storySteps[lang][currentStep];
    }
  }
});

window.addEventListener("keyup", e => keys[e.key] = false);

canvas.addEventListener("click", () => {
  if (player.x > 230 && player.x < 290 && player.y > 100 && player.y < 160) {
    sfx.play();
    storyBox.innerText = lang === "en" ? "A face appeared in the mirror!" : "ظهر وجه في المرآة!";
  }
});

function toggleLang() {
  lang = lang === "en" ? "ar" : "en";
  currentStep = 0;
  storyBox.innerText = storySteps[lang][currentStep];
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
  storyBox.innerText = storySteps[lang][currentStep];
  gameLoop();
};
