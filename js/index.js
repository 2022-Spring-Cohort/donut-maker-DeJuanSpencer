import { Donut } from "/js/Donut.js";

const donut = new Donut();
console.log(donut);
let clickValue = donut.clickMultiplierRate;

const head = document.querySelector("head");

const fredEl = document.createElement("li");
fredEl.innerHTML = "<a href = '#'> Fred the Baker </a>";

const cookieClickerReferenceEl = document.createElement("li");
cookieClickerReferenceEl.innerHTML = "<a href = '#'> Cookie Clicker </a>";

const contactInformationEl = document.createElement("li");
contactInformationEl.innerHTML = "<a href = '#'> My contact information </a>";

const menuOptions = document.createElement("ul");
menuOptions.classList.add("navigationList");

const navigationButton = document.createElement("button");
navigationButton.classList.add("navigationButton");
navigationButton.innerText = "Menu";

const navigationEL = document.createElement("nav");
navigationEL.classList.add("navigation");

const body = document.querySelector("body");
const titleEl = document.createElement("title");

titleEl.innerText = "This shows how many points you have";
const headerEl = document.createElement("header");
headerEl.classList.add("navigation");
headerEl.innerHTML =
  " <h1 onclick='CollapseExpandAllUtil.collapseExpandAll'>Tribute to <a href= 'https://orteil.dashnet.org/cookieclicker/' target = 'blank'> Cookie Clicker </a></h1>";

menuOptions.appendChild(fredEl);
menuOptions.appendChild(cookieClickerReferenceEl);
menuOptions.appendChild(contactInformationEl);
headerEl.appendChild(menuOptions);

const container = document.createElement("div");
container.classList.add("container");
const donutContainer = document.createElement("section");
donutContainer.classList.add("donut-container");
const newDonutContainer = document.createElement("section");
let nextMultiplier = document.createElement("div");
nextMultiplier.classList.add("next-multiplier");
let nextMultiplierCost = 100 + Math.pow(1.1, donut.multiplierCount);

const clickMultiplier = document.createElement("button");
clickMultiplier.innerText = "Bang For Your Click";
clickMultiplier.classList.add("clickMultiplierButton");

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

const clickValueEl = document.createElement("div");
clickValueEl.classList.add("clickValueEl");
clickValueEl.innerText = clickValue;
const clickEl = document.createElement("div");
clickEl.classList.add("clickEl");
clickEl.appendChild(donutButton);
clickEl.appendChild(clickValueEl);
const tools = document.createElement("section");
tools.classList.add("tools");

donutContainer.appendChild(clickEl);
showPoints.innerText = "Score: " + donut._score;

autoClickers.appendChild(multiplier);
autoClickers.appendChild(clickMultiplier);

display.appendChild(autoClickers);
display.appendChild(showPoints);
display.appendChild(nextMultiplier);

display.classList.add("display");
container.appendChild(display);
container.appendChild(donutContainer);
body.appendChild(container);
body.appendChild(headerEl);
head.appendChild(titleEl);

const numberOfClicks = document.createElement("div");
numberOfClicks.classList.add("clicksEl");
numberOfClicks.innerHTML =
  "This is how many clicks you have: " + donut.numberOfClicks;

const numberOfAutoEl = document.createElement("div");
numberOfAutoEl.classList.add("autoEl");
numberOfAutoEl.innerHTML =
  "This is how many autoclicks you have: " + donut.clickMultiplierCount;

const numberOfMultiplierEl = document.createElement("div");
numberOfMultiplierEl.classList.add("multiplierEl");
numberOfMultiplierEl.innerHTML =
  "This is how many multipliers you have: " + donut.multiplierCount;

const clicksLeft = document.createElement("div");
clicksLeft.classList.add("clicksLeft");

display.appendChild(clicksLeft);

const multiplierClicksLeft = document.createElement("div");
clicksLeft.classList.add("multiplierClicksLeft");
display.appendChild(multiplierClicksLeft);

function updateStats() {
  clickValueEl.innerText = donut.clickValue;
  showPoints.innerText = "Score:" + donut.score;
  numberOfClicks.innerText =
    "This is how many clicks you have: " + donut.numberOfClicks;
  numberOfAutoEl.innerText =
    "This is how many autoclicks you have: " + donut.multiplierCount;
  numberOfMultiplierEl.innerText =
    "This is how many multipliers you have: " + donut.clickMultiplierCount;

  showClicksLeft();
}

function showClicksLeft() {
  const multiplierCost = donut.multiplierCost;
  const clickMultiplierCost = donut.clickMultiplierCost;
  const score = donut.score;
  let clickDifference = clickMultiplierCost - score;
  let multiplierDifference = multiplierCost - score;

  if (clickDifference > 0) {
    clicksLeft.innerText =
      "Clicks left for next click multiplier: " + clickDifference;
  }
  if (multiplerDifference > 0) {
    multiplierClicksLeft.innerText =
      "Clicks left for next autoclicker: " + multiplierDifference;
  }
}

const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
resetButton.innerText = "Reset";

display.appendChild(resetButton);
display.appendChild(numberOfClicks);

display.appendChild(numberOfMultiplierEl);
display.appendChild(numberOfAutoEl);

donutButton.addEventListener("click", () => {
  let score = donut.plusOne();
  let soundEffect = new Audio("adf.wav");
  updateStats();
});

multiplier.addEventListener("click", () => {
  if (donut._score >= donut._multiplierCost) {
    donut.multiplier();
    let score = donut._score.toFixed(1);

    // console.log("Multiplier Count: " + donut._multiplierCount);
    // console.log("Multiplier Rate: " + donut._multiplierRate);
    // console.log("Multiplier Cost: " + donut._multiplierCost);
    updateStats();
  }
});

clickMultiplier.addEventListener("click", () => {
  if (donut._score >= donut._clickMultiplierCost) {
    donut.clickMultiplier();
    let score = donut._score.toFixed(1);

    updateStats();
    // console.log("Multiplier Count: " + donut._multiplierCount);
    // console.log("Multiplier Rate: " + donut._multiplierRate);
    // console.log("Multiplier Cost: " + donut._multiplierCost);
  }
});

setInterval(() => {
  if (donut._multiply) {
    donut.plusOne();
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
    updateStats();
  }
}, 1000);

resetButton.addEventListener("click", () => {
  const reply = prompt(
    "You are about to reset your progress. Are you sure? Type 'RESET' to reset your progress."
  );
  if (reply === "RESET") {
    location.reload();
  }
});
