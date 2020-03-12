function narcissistic(value) {
  const numStr = `${value}`;
  const array = numStr.split("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i]) ** array.length;
  }
  return sum === value;
}

console.log(narcissistic(153));
