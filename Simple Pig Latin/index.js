function pigIt(str) {
  let emptyArr = [];
  let selectedLetter = str[0];
  let counter = 1;
  let wordCounter = 1;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === selectedLetter && counter === wordCounter) {
      if (str[i + 1] === " ") {
        wordCounter++;
        emptyArr.push(selectedLetter);
        selectedLetter = str[i + 2];
        emptyArr.push("ay");
      } else if (!str[i + 1]) {
        emptyArr.push(selectedLetter);
      }
      i++;
      counter++;
    } else if (str[i] === " ") {
      wordCounter++;
      emptyArr.push(selectedLetter);
      selectedLetter = str[i + 1];
      emptyArr.push("ay");
    } else if (i === str.length) {
      emptyArr.push(selectedLetter);
      emptyArr.push("ay");
    }
    emptyArr.push(str[i]);
  }
  let pigLatin = emptyArr.join("");
  return pigLatin;
}
