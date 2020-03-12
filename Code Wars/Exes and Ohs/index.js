function XO(str) {
  let lowerCase = str.toLowerCase();
  let xs = 0;
  let os = 0;
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] === "o") {
      os++;
    } else if (lowerCase[i] === "x") {
      xs++;
    }
  }
  if (xs === os) {
    return true;
  } else {
    return false;
  }
}
