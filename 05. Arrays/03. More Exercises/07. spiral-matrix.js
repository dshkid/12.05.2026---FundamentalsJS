function spiralMatrix(rows, cols) {

  let matrix = [];

  for (let row = 0; row < rows; row++) {
    matrix[row] = [];
  }

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  let number = 1;

  while (top <= bottom && left <= right) {

    for (let col = left; col <= right; col++) {
      matrix[top][col] = number++;
    }
    top++;

    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = number++;
    }
    right--;

    if (top <= bottom) {

      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = number++;
      }
      bottom--;
    }
    if (left <= right) {

      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = number++;
      }
      left++;
    }
  }
  for (let row = 0; row < rows; row++) {
    console.log(matrix[row].join(' '));
  }
}

spiralMatrix(5, 5)