function orbit(array) {

  let width = Number(array[0]);
  let height = Number(array[1]);
  let x = Number(array[2]);
  let y = Number(array[3]);

  let result = [];

  for (let row = 0; row < height; row++) {
    let rowValues = [];

    for (let col = 0; col < width; col++) {
      let value = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
      rowValues.push(value);
    }

    result.push(rowValues.join(' '));
  }
  console.log(result.join('\n'));
}

orbit([4, 4, 0, 0]);