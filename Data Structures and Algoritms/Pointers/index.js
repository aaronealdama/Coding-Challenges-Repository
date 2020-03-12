function countUniqueValues(array) {
  let index = 0;
  let index1 = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[index] === array[index1]) {
      index1++;
    } else if (array[index] !== array[index1]) {
      index++;
      array[index] = array[index1];
      index1++;
    }
  }
  return index;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 3, 5, 6, 6, 6, 8, 9]));
