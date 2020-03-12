function flatten(arr) {
  let string = `${arr}`;
  let emptyArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "[" && string[i] !== "]" && string[i] !== ",") {
      emptyArr.push(parseInt(string[i]));
    }
  }
  return emptyArr;
}
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
