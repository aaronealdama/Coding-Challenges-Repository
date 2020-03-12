function isPalindrome(str) {
  let emptyStr = "";
  function helper(input) {
    if (input === "") return;
    let end = input.slice(input.length - 1);
    emptyStr += end;
    return helper(input.slice(0, input.length - 1));
  }
  helper(str);
  return str === emptyStr;
}

console.log(isPalindrome("racecar"));
