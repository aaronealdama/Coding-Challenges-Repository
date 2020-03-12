class User {
  constructor() {
    (this.rank = -8), (this.progress = 0);
  }
  incProgress(num) {
    if (num > 8 || num < -8 || num === 0) {
      throw "not a valid number";
    }
    if (num > this.rank) {
      let count = num - this.rank;
      if (count > 7) {
        count--;
      }
      this.progress += count * count * 10;
    } else if (num < this.rank) {
      let count = this.rank - num;
      if (count === 1) {
        this.progress += 1;
      } else if (count >= 2) {
        this.progress += 0;
      }
    } else if (num === this.rank) {
      this.progress += 3;
    }
    if (this.progress >= 100) {
      const num = Math.floor(this.progress / 100);
      this.rank += num;
      this.progress -= num * 100;
      if (this.rank === 0) {
        this.rank = 1;
      } else if (this.rank === 8) {
        this.rank = 8;
      }
    }
  }
}

module.exports = User;
