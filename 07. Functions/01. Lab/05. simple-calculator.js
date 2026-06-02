function simpleCalculator(firstNumber, secondNumber, operator) {

  let result;

  switch (operator) {
    case 'multiply': result = firstNumber * secondNumber; break;
    case 'divide': result = firstNumber / secondNumber; break;
    case 'add': result = firstNumber + secondNumber; break;
    case 'subtract': result = firstNumber - secondNumber; break;
  }

  console.log(result);
}

simpleCalculator(5, 5, 'multiply');
