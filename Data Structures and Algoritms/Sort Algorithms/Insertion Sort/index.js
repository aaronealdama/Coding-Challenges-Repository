function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let selected = arr[i];
    for (let j = 0; j < i; j++) {
      let temp = arr[j];
      if (selected < arr[j]) {
        arr[j] = selected;
        selected = temp;
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(
  sort([22, 3, 1, 4, 55, 32, 523, 124, 1245, 45, 32, 12, 7, 128, 2, 345])
);
