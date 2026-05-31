function reverseAnArray(n, array) {
  let newArray = [];

  for (let i = 0; i < n; i++) {
    let oldArrayValue = array[i];

    newArray[i] = oldArrayValue;
  }

  newArray.reverse();

  console.log(newArray.join(' '));
}

reverseAnArray(3, [10, 20, 30, 40, 50]);