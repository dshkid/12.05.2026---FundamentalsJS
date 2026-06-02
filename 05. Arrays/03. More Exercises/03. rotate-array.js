function rotateArray(array) {

  let rotationCount = Number(array.pop());

  for (let i = 0; i < rotationCount; i++) {

    let currElement = array.pop();
    array.unshift(currElement);
  }
  console.log(array.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);