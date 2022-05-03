// Inspired by https://www.youtube.com/watch?v=KKRlhyasaTA&feature=youtu.be

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let currentWidth = window.innerWidth;
let currentHeight = window.innerHeight;


canvas.width = currentWidth;
canvas.height = currentHeight;


window.addEventListener('resize', function(event) {
    currentWidth = window.innerWidth;
    currentHeight = window.innerHeight;
    canvas.width = currentWidth
    canvas.height = currentHeight;
    maxColumns = currentWidth / fontSize;
    maxRows = currentHeight / fontSize;
}, true);

let charArr = [
  "অ",
  "আ",
  "ই",
  "ঈ",
  "উ",
  "ঊ",
  "ঋ",
  "এ",
  "ঐ",
  "ও",
  "ঔ",
  "ক",
  "খ",
  "গ",
  "ঘ",
  "ঙ",
  "চ",
  "ছ",
  "জ",
  "ঝ",
  "ঞ",
  "ট",
  "ঠ",
  "ড",
  "ঢ",
  "ণ",
  "ত",
  "থ",
  "দ",
  "ধ",
  "ন",
  "প",
  "ফ",
  "ব",
  "ভ",
  "ম",
  "য",
  "র",
  "ল",
  "শ",
  "ষ",
  "স",
  "হ",
  "ড়",
  "ঢ়",
  "য়",
  "ৎ",
  "১",
  "২",
  "৩",
  "৪",
  "৫",
  "৬",
  "৭",
  "৮",
  "৯",
  "০"];

let maxCharCount = 80;
let fallingCharArr = [];
let fontSize = 15;
let maxColumns = currentWidth / fontSize;


let frames = 0;

class FallingChar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.value =
      charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
    this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;

    ctx.fillStyle = "rgba(0,255,0)";
    ctx.font = fontSize + "px sans-serif";
    ctx.fillText(this.value, this.x, this.y);
    this.y += this.speed;

    if (this.y > currentHeight) {
      this.y = (Math.random() * currentHeight) / 2 - 50;
      this.x = Math.floor(Math.random() * maxColumns) * fontSize;
      this.speed = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
    }
  }
}

let update = () => {
  if (fallingCharArr.length < maxCharCount) {
    let fallingChar = new FallingChar(
      Math.floor(Math.random() * maxColumns) * fontSize,
      (Math.random() * currentHeight) / 2 - 50
    );
    fallingCharArr.push(fallingChar);
  }
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, currentWidth, currentHeight);
  for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
    fallingCharArr[i].draw(ctx);
  }

  requestAnimationFrame(update);
  frames++;
};

update();