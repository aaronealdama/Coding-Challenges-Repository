var countChange = function(money, coins) {
  let counter = 0;
  let tracker = coins.length - 1;
  function change(target, arr) {
    let sum = 0;
    if (arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum === target) counter++;
    }
    sum = 0;
    while (sum < target) {
      sum += arr[tracker];
      if (sum === target) {
        counter++;
      }
    }
    sum = 0;
    while (sum < target) {
      if (!arr[tracker - 1]) break;
      sum += arr[tracker - 1];
      if (sum === target) counter++;
      sum += arr[tracker];
      if (sum === target) counter++;
    }
    if (tracker > 0) {
      tracker--;
    }
    arr.splice(arr.length - 1, 1);
    return change(target, arr);
  }
  change(money, coins);
  return counter;
};

console.log(countChange(4, [1, 2]));
console.log(countChange(10, [5, 2, 3]));
