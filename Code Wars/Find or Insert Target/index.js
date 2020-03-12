function sortTar(array, target) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return counter;
    } else {
      counter++;
    }
  }
  if (counter === array.length) {
    counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (target < array[i]) {
        return counter;
      } else if (target > array[array.length]) {
        return array.length + 1;
      } else {
        counter++;
      }
    }
  }
  return counter;
}

console.log(sortTar([1, 3, 5, 6], 5));
console.log(sortTar([1, 3, 5, 6], 2));
console.log(sortTar([1, 3, 5, 6], 7));
console.log(sortTar([1, 3, 5, 6], 0));
