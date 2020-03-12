function duplicateEncode(word) {
  let emptyWord = "";
  let lowercase = word.toLowerCase();
  for (let i = 0; i < lowercase.length; i++) {
    console.log(i);
    let counter = -1;
    for (let j = 0; j < lowercase.length; j++) {
      if (lowercase[i] === lowercase[j]) {
        counter++;
      }
    }

    if (counter > 0) {
      emptyWord += ")";
    } else {
      emptyWord += "(";
    }
  }
  return emptyWord;
}
