
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const sfx = document.getElementById("sfx");
const message = document.getElementById("message");

let player = { x: 240, y: 240, size: 32, speed: 2 };
let keys = {};
let step = 0;
let steps = [
  "You are not alone...",
  "Something is watching you.",
  "RUN!"
];

let bg = new Image();
bg.src = "assets/bg.png";
let char = new Image();
char.src = "assets/char.png";

document.addEventListener("keydown", e => {
  keys[e.key.toLowerCase()] = true;
  if (e.key === " ") {
    if (step < steps.length) {
      message.innerText = steps[step];
      step++;
      if (step === steps.length) {
        sfx.play();
      }
    }
  }
});
document.addEventListener("keyup", e => {
  keys[e.key.toLowerCase()] = false;
});

function update() {
  if (keys['w']) player.y -= player.speed;
  if (keys['s']) player.y += player.speed;
  if (keys['a']) player.x -= player.speed;
  if (keys['d']) player.x += player.speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(char, player.x, player.y, player.size, player.size);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

char.onload = () => {
  message.innerText = steps[0];
  step = 1;
  loop();
};
