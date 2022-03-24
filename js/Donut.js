class Donut {
  constructor(score) {
    this._score = 1000;
    this._level = 1;
    this._numberOfClicks = 0;
    this._multiplierCount = 0;
    this._multiply = false;
    this._multiplierRate = 1 * Math.pow(1.2, this._multiplierCount);
    this._multiplierCost = 100 * Math.pow(1.1, this._multiplierCount);

    this._clickIncrease = 1;
    this._clickMultiplierCount = 0;
    this._clickMultiply = false;
    this._clickMultiplierRate = 1 * Math.pow(1.2, this._clickMultiplierCount);
    this._clickMultiplierCost = 10 * Math.pow(1.1, this._clickMultiplierCount);
  }

  plusOne() {
    this._clickIncrease = this.clickMultiplierRate;

    console.log("Click: " + this._clickIncrease);
    this._score += this._clickIncrease;
    this._numberOfClicks += 1;
    return this._score.toFixed(1);
  }

  clickMultiplier() {
    if (this._score >= 10) {
      this._clickMultiply = true;
    }

    this._clickMultiplierCount += 1;
    console.log("Score: " + this._score);
    console.log("Clicker cost " + this._clickMultiplierCost);

    this._score -= this._clickMultiplierCost;

    this._clickMultiplierCost = this.updateClickMultiplierCost();
    this._clickIncrease = this.clickMultiplierRate;
    console.log("I have click multiplied");
  }

  multiplier() {
    if (this._score >= 100) {
      this._multiply = true;
    }
    this._multiplierCount += 1;
    this._score -= this._multiplierCost;
    this._multiplierCost = this.updateMultiplierCost();

    console.log("I have multiplied");
  }

  updateMultiplierCost() {
    this._multiplierCost = 100 * Math.pow(1.1, this._multiplierCount);
    return this._multiplierCost;
  }

  get clickMultiplierRate() {
    this._clickMultiplierRate = 1 * Math.pow(1.2, this._clickMultiplierCount);
    return this._clickMultiplierRate;
  }

  updateClickMultiplierCost() {
    this._clickMultiplierCost = 10 * Math.pow(1.1, this._clickMultiplierCount);

    return this._clickMultiplierCost;
  }
  multiplyPerSecond() {
    if (this._multiply) {
      this._multiplierRate = 1 * Math.pow(1.2, this._multiplierCount);
      this._score += this._multiplierRate;
    }
    let scoreRounded = this._score.toFixed(1);
    return scoreRounded;
  }
  changeLevel() {
    if (this._score < 10) {
      return (this._level = 1);
    } else if (this.score < 20) {
      return (this._level = 2);
    } else {
      return (this._level = 3);
    }
  }

  get multiplierCount() {
    return this._multiplierCount;
  }

  get clickMultiplierCount() {
    return this._clickMultiplierCount;
  }

  get numberOfClicks() {
    return this._numberOfClicks;
  }
}
export { Donut };
