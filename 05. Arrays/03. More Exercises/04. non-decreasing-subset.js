function nonDecreasingSubset(numbers) {
  let biggestNum = Number.MIN_SAFE_INTEGER;
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let currNumber = Number(numbers[i]);

    if (currNumber >= biggestNum) {
      biggestNum = currNumber;
      result.push(biggestNum);
    } else {
      continue;
    }
  }
  console.log(result.join(' '));
}

nonDecreasingSubset([20, 3, 2, 15, 6, 1]);