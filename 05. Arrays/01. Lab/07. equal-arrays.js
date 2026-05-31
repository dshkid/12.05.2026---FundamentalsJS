function equalArrays(firstArray, secondArray) {

  let areEqual = true;
  let sum = 0;
  let diffIndex = -1;

  for (let i = 0; i < firstArray.length; i++) {
    let firstValue = firstArray[i];
    let secondValue = secondArray[i];

    if (firstValue === secondValue) {
      sum += Number(firstValue);
    } else {
      areEqual = false;
      diffIndex = i;
      break;
    }
  }

  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
  }
}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);