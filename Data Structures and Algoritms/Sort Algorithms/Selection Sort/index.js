function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let smallestIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        smallestIndex = j;
      }
    }
    arr[smallestIndex] = arr[i];
    arr[i] = smallest;
  }
  return arr;
}

console.log(sort([5, 63, 2, 34, 51, 45, 14, 6, 10]));
