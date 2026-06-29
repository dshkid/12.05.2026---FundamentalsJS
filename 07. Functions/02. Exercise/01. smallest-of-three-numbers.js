function findTheSmallestNumber(num1, num2, num3) {
  let smallestNumber = Number.MAX_SAFE_INTEGER;

  if (num1 < smallestNumber) {
    smallestNumber = num1;
  }
  if (num2 < smallestNumber) {
    smallestNumber = num2;
  }
  if (num3 < smallestNumber) {
    smallestNumber = num3;
  }
  console.log(smallestNumber);
}

findTheSmallestNumber(600, 342, 123);