function anagrams(word, words) {
  let anagramArr = [];
  let answerArr = [];
  function wordMeasurer(input) {
    let emptyArr = [];
    for (let i = 0; i < input.length; i++) {
      if (emptyArr.indexOf(input[i]) === -1) {
        emptyArr.push(input[i]);
      }
    }
    return emptyArr.join("");
  }
  let firstWord = wordMeasurer(word);
  for (let i = 0; i < words.length; i++) {
    let wordItem = wordMeasurer(words[i]);
    if (wordItem.length === firstWord.length) {
      let counter = 0;
      for (let i = 0; i < wordItem.length; i++) {
        for (let j = 0; j < wordItem.length; j++) {
          if (wordItem[i] === firstWord[j]) {
            counter++;
          }
        }
      }
      if (counter === firstWord.length) {
        anagramArr.push(words[i]);
      }
    }
  }
  for (let i = 0; i < anagramArr.length; i++) {
    if (anagramArr[i].length === word.length) {
      answerArr.push(anagramArr[i]);
    }
  }
  return answerArr;
}
