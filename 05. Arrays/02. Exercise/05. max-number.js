function maxNumber(array) {

  let topNums = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let isMax = true;

    for (let j = i + 1; j < array.length; j++) {
      let rightNumber = array[j];

      if (rightNumber >= number) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      topNums.push(number);
    }
  }
  console.log(topNums.join(' '));
}

maxNumber([1, 4, 3, 2]);