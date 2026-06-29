function smallestTwoNumbers(array) {
  let sorted = array.sort((a, b) => a - b);

  let firstTwo = sorted.slice(0, 2);

  console.log(firstTwo.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);