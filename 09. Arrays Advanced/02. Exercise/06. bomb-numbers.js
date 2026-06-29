function bombNumbers(array, bombInfo) {
  let bomb = bombInfo[0];
  let power = bombInfo[1];

  while (array.includes(bomb)) {
    let index = array.indexOf(bomb);

    let startIndex = Math.max(0, index - power);

    let removedElements = power * 2 + 1 - (startIndex - (index - power));

    array.splice(startIndex, removedElements);
  }

  let sum = 0;

  for (let num of array) {
    sum += num;
  }
  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
  [4, 2]);

// 12