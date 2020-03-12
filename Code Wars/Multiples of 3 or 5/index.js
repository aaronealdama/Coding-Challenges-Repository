function solution(number) {
  let emptyArr = [];
  let sum = 0;
  for (let i = number - 1; i >= 0; i--) {
    if (i % 5 === 0 || i % 3 === 0) {
      emptyArr.push(i);
    }
  }
  for (let i = 0; i < emptyArr.length; i++) {
    sum += emptyArr[i];
  }
  return sum;
}
