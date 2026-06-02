function signCheck(firstNumber, secondNumber, thirdNumber) {

  let negativeNumberCounter = 0;

  if (firstNumber < 0) {
    negativeNumberCounter++;
  }
  if (secondNumber < 0) {
    negativeNumberCounter++;
  }
  if (thirdNumber < 0) {
    negativeNumberCounter++;
  }

  if (negativeNumberCounter % 2 === 0) {
    console.log('Positive');
  } else {
    console.log('Negative');
  }
}

signCheck(-1, -2, -3);