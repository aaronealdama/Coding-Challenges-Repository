function duplicateCount(text) {
  let lowerCase = text.toLowerCase();
  let emptyArr = [];
  let uniqueArr = [];
  for (let i = 0; i < lowerCase.length; i++) {
    for (let j = i + 1; j < lowerCase.length; j++) {
      if (lowerCase[i] === lowerCase[j]) {
        emptyArr.push(lowerCase[i]);
      }
    }
  }
  for (let i = 0; i < emptyArr.length; i++) {
    if (uniqueArr.indexOf(emptyArr[i]) === -1) {
      uniqueArr.push(emptyArr[i]);
    }
  }
  let count = uniqueArr.length;
  return count;
  //...
}
