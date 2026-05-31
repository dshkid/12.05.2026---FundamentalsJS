function arrayRotation(array, num) {

  for (let currRotation = 1; currRotation <= num; currRotation++) {

    let firstElement = array.shift();
    array.push(firstElement);
  }
  console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);