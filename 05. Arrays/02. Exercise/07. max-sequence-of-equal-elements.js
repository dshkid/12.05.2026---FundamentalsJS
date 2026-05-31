function maxSequenceOfEqualElements(numbers) {

  let maxCount = 1;
  let currentCount = 1;
  let bestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] === numbers[i - 1]) {
      currentCount++;

      if (currentCount > maxCount) {
        maxCount = currentCount;
        bestNumber = numbers[i];
      }
    } else {
      currentCount = 1;
    }
  }
  let result = '';

  for (let i = 0; i < maxCount; i++) {
    result += bestNumber + ' ';
  }
  console.log(result.trim());
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);