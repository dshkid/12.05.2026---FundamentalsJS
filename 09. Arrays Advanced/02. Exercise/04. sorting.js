function sorting(array) {
  array.sort((a, b) => b - a);

  let sortedArray = [];

  while (array.length > 0) {
    let maxNumber = array.shift();
    let minNumber = array.pop();

    sortedArray.push(maxNumber);
    sortedArray.push(minNumber);
  }

  console.log(sortedArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

// 94 1 69 2 63 3 52 18 31 21