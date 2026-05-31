function reverseInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let reversedIndex = array.length - 1 - i;

    let value = array[i];
    let secondValue = array[reversedIndex];

    array[i] = secondValue;
    array[reversedIndex] = value;
  }

  console.log(array.join(' '));
}

reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);