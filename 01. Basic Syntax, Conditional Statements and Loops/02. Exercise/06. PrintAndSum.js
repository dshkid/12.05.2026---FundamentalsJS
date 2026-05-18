function printAndSum(startNum, endNum) {
  let sum = 0;
  let result = '';
  for (let i = startNum; i <= endNum; i++) {
    sum += i;
    result += `${i} `;
  }
  console.log(result.trim());
  console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);