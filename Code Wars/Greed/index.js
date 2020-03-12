function score(dice) {
  let obj = {};
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (!obj[dice[i]]) {
      obj[dice[i]] = 1;
    } else {
      obj[dice[i]] += 1;
    }
  }
  for (let i = 0; i <= 6; i++) {
    if (obj[i] >= 3 && i === 1) {
      sum += 1000;
      if (obj[i] > 3) {
        sum += (obj[i] - 3) * 100;
      }
    } else if (obj[i] >= 3 && i === 2) {
      sum += 200;
    } else if (obj[i] >= 3 && i === 3) {
      sum += 300;
    } else if (obj[i] >= 3 && i === 4) {
      sum += 400;
    } else if (obj[i] >= 3 && i === 5) {
      sum += 500;
      if (obj[i] > 3) {
        sum += (obj[i] - 3) * 50;
      }
    } else if (obj[i] >= 3 && i === 6) {
      sum += 600;
    } else if (obj[i] >= 1 && i === 1) {
      sum += obj[1] * 100;
    } else if (obj[i] >= 1 && i === 5) {
      sum += obj[5] * 50;
    }
  }
  return sum;
}

console.log(score([3, 3, 3, 3, 3]));
