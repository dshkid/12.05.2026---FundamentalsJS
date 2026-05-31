function sumEvenNumbers(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let arrAsNum = Number(array[i]);

    if (arrAsNum % 2 === 0) {
      sum += arrAsNum;
    }
  }
  console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);