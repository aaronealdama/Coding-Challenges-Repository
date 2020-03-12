function stringSearch(long, short) {
  let counter = 0;
  let count = 0;
  for (let letters in long) {
    count = 0;
    for (let lett in short) {
      if (short[lett] !== long[letters]) {
        break;
      } else if (short[lett] === long[letters]) {
        letters++;
        count++;
      }
      if (count === short.length) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(stringSearch("asdflksdjfllsdfjlasdksdadspouasdfksd", "ksd"));
