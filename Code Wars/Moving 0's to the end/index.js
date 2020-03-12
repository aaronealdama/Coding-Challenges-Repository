var moveZeros = function(arr) {
  let emptyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      emptyArr.push(arr[i]);
      arr.splice(i, 1);
      i = 0;
    }
  }
  for (let i = 0; i < emptyArr.length; i++) {
    arr.push(emptyArr[0]);
  }
  return arr;
};

console.log(moveZeros([1, 2, 4, 0, 7, 8, 9, 0, 3, 2, 4, 0, 6]));
