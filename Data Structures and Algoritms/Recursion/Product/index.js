function productOfArray(arr) {
  if (arr.length === 0) return 1;
  let sum = arr[0];
  return sum * productOfArray(arr.slice(1, arr.length));
}

console.log(productOfArray([1, 2, 3, 10]));
console.log(productOfArray([1, 2, 3, 4, 5, 6, 7]));
