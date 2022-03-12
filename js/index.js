import { Donut } from "/js/Donut.js";

const donut = new Donut();
console.log(donut);

const head = document.querySelector("head");
const titleEl = document.createElement("title");
titleEl.innerHTML = "This shows how many points you have";
const headerEl = document.createElement("header");
headerEl.innerHTML =
  " <h1>Tribute to <a href= 'https://orteil.dashnet.org/cookieclicker/'> Cookie Clicker </a></h1>";
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
const donutContainer = document.createElement("section");
donutContainer.classList.add("donut-container");
const newDonutContainer = document.createElement("section");
let nextMultiplier = document.createElement("div");
nextMultiplier.classList.add("next-multiplier");
let nextMultiplierCost = 100 + Math.pow(1.1, donut.multiplierCount);

let nextDifference = nextMultiplierCost - donut.score;

let multiplier = document.createElement("button");
multiplier.classList.add("multiplier");
multiplier.innerText = "multiplier";

const autoClickers = document.createElement("div");
autoClickers.classList.add("auto-clickers");
newDonutContainer.classList.add("new-donut-container");
const showPoints = document.createElement("div");
showPoints.classList.add("showPoints");

const display = document.createElement("section");

const donutButton = document.createElement("button");
donutButton.classList.add("donut-button");
donutButton.innerHTML = "<img class = 'donut-picture' src=pictures/donut.png>";
const tools = document.createElement("section");
tools.classList.add("tools");

donutContainer.appendChild(donutButton);
showPoints.innerText = "Score: " + donut._score;

autoClickers.appendChild(multiplier);

display.appendChild(autoClickers);
display.appendChild(showPoints);
display.appendChild(nextMultiplier);

display.classList.add("display");
container.appendChild(display);
container.appendChild(donutContainer);
body.appendChild(container);
body.appendChild(headerEl);
head.appendChild(titleEl);

donutButton.addEventListener("click", () => {
  let score = donut.plusOne();
  let soundEffect = new Audio("adf.wav");

  showPoints.innerText = "Score: " + score;
});

multiplier.addEventListener("click", () => {
  if (donut._score >= donut._multiplierCost) {
    donut.multiplier();
    showPoints.innerText = "Score:" + donut._score;
    // console.log("Multiplier Count: " + donut._multiplierCount);
    // console.log("Multiplier Rate: " + donut._multiplierRate);
    // console.log("Multiplier Cost: " + donut._multiplierCost);
  }
});

setInterval(() => {
  if (donut._multiply) {
    donut.multiplyPerSecond();
    let currentScore = donut._score;
    showPoints.innerText = "Score: " + currentScore.toFixed(1);
    let difference = Math.round(donut._multiplierCost - donut._score);
    if (difference > 1) {
      nextMultiplier.innerText =
        " Your next multiplier is " + difference + " points away!";
    } else if (difference == 1) {
      nextMultiplier.innerText = " Your next multiplier is one point away!";
    } else if (difference == 0) {
      nextMultiplier.innerText = "Click that multiply button!";
    }
  }
}, 1000);
