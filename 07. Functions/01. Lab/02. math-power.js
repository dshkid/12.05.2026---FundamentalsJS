function mathPower(number, givenPower) {

  let result = 1;

  for (let i = 0; i < givenPower; i++) {
    result *= number;
  }
  console.log(result);
}

mathPower(3, 4);