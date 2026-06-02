function printNthElement(array) {

  let theStep = Number(array[array.length - 1]);
  let result = '';

  for (let i = 0; i < array.length - 1; i += theStep) {
    let elements = array[i];

    result += `${elements} `;
  }
  console.log(result.trim());
}

printNthElement(['dsa', 'asd', 'test', 'test', '2']);