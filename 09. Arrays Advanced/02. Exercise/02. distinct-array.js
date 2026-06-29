function distinctArray(array) {
  let uniqueArray = [];

  for (let element of array) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  console.log(uniqueArray.join(' '));
}

distinctArray([1, 2, 3, 4]);