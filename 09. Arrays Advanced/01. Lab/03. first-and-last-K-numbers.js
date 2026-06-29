function firstAndLastKNumbers(array) {
  let k = array.shift();

  let firstNumbers = array.slice(0, k);
  let lastNumbers = array.slice(array.length - k);

  console.log(firstNumbers.join(' '));
  console.log(lastNumbers.join(' '));
}

firstAndLastKNumbers([2,
  7, 8, 9]);