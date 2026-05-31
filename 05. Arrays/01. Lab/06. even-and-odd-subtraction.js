function evenAndOddSub(array) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    let arrAsNum = Number(array[i]);

    if (arrAsNum % 2 === 0) {
      evenSum += arrAsNum;
    } else {
      oddSum += arrAsNum;
    }
  }
  console.log(evenSum - oddSum);
}

evenAndOddSub([3, 5, 7, 9]);