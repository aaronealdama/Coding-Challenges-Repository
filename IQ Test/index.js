function iqTest(numbers) {
  let numberArr = numbers.split(" ");
  let emptyArr = [];
  let indexCounter = 0;
  let counter = 0;
  for (let i = 0; i < numberArr.length; i++) {
    let number = parseInt(numberArr[i]);
    emptyArr.push(number);
    if (number % 2 === 0) {
      counter++;
    }
  }
  if (counter === numberArr.length - 1) {
    for (let i = 0; i < emptyArr.length; i++) {
      indexCounter++;
      if (emptyArr[i] % 2 !== 0) {
        break;
      }
    }
  } else if (counter === 1) {
    for (let i = 0; i < emptyArr.length; i++) {
      indexCounter++;
      if (emptyArr[i] % 2 === 0) {
        break;
      }
    }
  }
  return indexCounter;
}
