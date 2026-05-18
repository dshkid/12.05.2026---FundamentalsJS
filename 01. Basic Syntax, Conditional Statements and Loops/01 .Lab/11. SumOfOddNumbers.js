function sumOfOddNumbers(n) {
  let sum = 0;
  let count = 0;
  let currNum = 1;

  while (count < n) {

    console.log(currNum);

    sum += currNum;
    currNum += 2;
    count++;
  }
  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);