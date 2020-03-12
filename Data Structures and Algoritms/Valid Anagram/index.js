function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let word1Obj = {};
  let word2Obj = {};
  for (let i = 0; i < word1.length; i++) {
    let letter = word1[i];
    if (!word1Obj[letter]) {
      word1Obj[letter] = 1;
    } else {
      word1Obj[letter] += 1;
    }
  }
  for (let i = 0; i < word2.length; i++) {
    let letter = word2[i];
    if (!word2Obj[letter]) {
      word2Obj[letter] = 1;
    } else {
      word2Obj[letter] += 1;
    }
  }
  for (let key in word1Obj) {
    if (word1Obj[key] !== word2Obj[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
