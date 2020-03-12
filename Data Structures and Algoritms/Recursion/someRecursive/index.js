const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback) {
  let bool = false;
  function helper(input) {
    if (callback(input[input.length - 1]) === true) {
      bool = true;
    } else if (input.length === 1) {
      return;
    } else if (bool === true) {
      return;
    }
    console.log(input);
    return helper(input.slice(0, input.length - 1));
  }
  helper(arr);
  return bool;
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], val => val > 10));
