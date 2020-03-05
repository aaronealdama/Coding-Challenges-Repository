function deleteNth(arr, n) {
  let counter = 0;

  function forLoop() {
    for (let i = 0; i < arr.length; i++) {
      counter = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          counter++;
          if (counter > n) {
            arr.splice(j, 1);
          }
        }
      }
    }
  }
  forLoop();
  forLoop();

  return arr;
}
