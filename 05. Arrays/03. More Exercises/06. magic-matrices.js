function magicMatrices(input) {

  let magicSum = 0;

  for (let col = 0; col < input[0].length; col++) {
    magicSum += input[0][col];
  }
  for (let row = 0; row < input.length; row++) {

    let rowSum = 0;

    for (let col = 0; col < input[row].length; col++) {
      rowSum += input[0][col];
    }

    if (rowSum !== magicSum) {
      console.log('false');
      return;
    }
  }

  for (let col = 0; col < input[0].length; col++) {

    let colSum = 0;

    for (let row = 0; row < input.length; row++) {
      colSum += input[row][col];
    }

    if (colSum !== magicSum) {
      console.log('false');
      return;
    }
  }
  console.log('true');
}

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
); 