function oddAndEvenSum(number) {

  let numAsString = String(number);
  let oddSum = 0;
  let evenSum = 0;

  for (let char = 0; char < numAsString.length; char++) {
    let currNum = Number(numAsString[char]);

    if (currNum % 2 === 0) {
      evenSum += currNum;
    } else {
      oddSum += currNum;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);