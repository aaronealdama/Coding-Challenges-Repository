function fib(num) {
  let startArr = [1, 1];
  let counter = 2;
  function fibHelper(arr) {
    if (counter === num) return;
    counter++;
    arr.splice(arr.length + 1, 0, arr[arr.length - 1] + arr[arr.length - 2]);
  }
  while (counter !== num) {
    fibHelper(startArr);
  }
  return startArr[counter - 1];
}

console.log(fib(12));
