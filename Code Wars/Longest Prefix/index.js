function longestPre(array) {
  let emptyStr = "";
  let counter = 0;
  function shortestWord(arr) {
    let shortest = arr[0].length;
    for (let words in arr) {
      if (arr[words].length < shortest) {
        shortest = arr[words];
      }
    }
    return shortest;
  }
  const word = shortestWord(array);
  function prefix(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      let selected = arr[0][counter];
      if (arr[i][counter] === selected) {
        count++;
      }
      if (count === arr.length) {
        emptyStr += selected;
        counter++;
      }
    }
  }
  for (let i = 0; i < word.length; i++) {
    prefix(array);
  }
  return emptyStr;
}

console.log(longestPre(["flower", "flow", "flight"]));
console.log(longestPre(["dog", "racecar", "car"]));
