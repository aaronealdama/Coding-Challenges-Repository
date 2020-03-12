function factorial(n) {
  function factor(x) {
    if (x === 0) return 1;
    return x * factor(x - 1);
  }
  const num = factor(n);
  return num;
}

console.log(factorial(178));
