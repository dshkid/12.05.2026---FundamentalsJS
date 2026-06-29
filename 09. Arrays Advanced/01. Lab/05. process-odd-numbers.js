function processOddNumbers(array) {
  let result = array
    .filter((num, index) => index % 2 === 1)
    .map(num => num * 2)
    .reverse();

  console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);