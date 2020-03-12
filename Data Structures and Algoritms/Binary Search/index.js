function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  for (let items in arr) {
    console.log(left, right, middle);
    if (arr[left] === target) {
      return left;
    } else if (arr[right] === target) {
      return right;
    } else if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle;
      middle = Math.floor((left + right) / 2);
    } else if (arr[middle] > target) {
      right = middle;
      middle = Math.floor((left + right) / 2);
    }
  }
  return -1;
}

console.log(
  binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 75)
);
