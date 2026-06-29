function factorialDivision(num1, num2) {


  function factorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  let firstFactorial = factorial(num1);
  let secondFactorial = factorial(num2);

  let result = firstFactorial / secondFactorial;

  console.log(result.toFixed(2));
}

factorialDivision(5, 2);