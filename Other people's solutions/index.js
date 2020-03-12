function sumMultiples(num) {
  let arr = Array.from({ length: num }, (k, v) => v)
    .filter(val => val % 3 === 0 || val % 5 === 0)
    .reduce((a, b) => a + b);
  console.log(arr);
}

sumMultiples(1000);
