function reverse(str) {
  let emptyStr = "";
  function helper(input) {
    if (input === "") return;
    let end = input.slice(input.length - 1);
    emptyStr += end;
    return helper(input.slice(0, input.length - 1));
  }
  helper(str);
  return emptyStr;
}

console.log(reverse("awesome"));
console.log(reverse("yessir"));
