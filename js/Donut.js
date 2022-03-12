class Donut {
  constructor(score) {
    this._score = 1000;
    this._level = 1;
    this._multiplierCount = 0;
    this._multiply = false;
    this._multiplierRate = 1 * Math.pow(1.2, this._multiplierCount);
    this._multiplierCost = 100 * Math.pow(1.1, this._multiplierCount);
  }

  plusOne() {
    this._score += 1;
    return this._score.toFixed(1);
  }

  multiplier() {
    if (this._score >= 100) {
      this._multiply = true;
    }
    this._score -= this._multiplierCost;
    this._multiplierCost = this.updateMultiplierCost();
    console.log("I have multiplied");
  }

  updateMultiplierCost() {
    this._multiplierCount += 1;
    this._multiplierCost = 100 * Math.pow(1.1, this._multiplierCount);

    return this._multiplierCost;
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
}
export { Donut };
