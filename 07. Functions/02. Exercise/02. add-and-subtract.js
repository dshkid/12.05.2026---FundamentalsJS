function addAndSubtract(num1, num2, num3) {
  let sum = (x, y) => x + y;
  let subtract = (x, y) => x - y;

  let tempResult = sum(num1, num2);
  let finalResult = subtract(tempResult, num3);

  console.log(finalResult);
}

addAndSubtract(23, 6, 10);