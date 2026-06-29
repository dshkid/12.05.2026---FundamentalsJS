function nXnMatrix(num) {
  let result = '';
  let finalResult = '';
  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      result += `${num} `;
    }
    console.log(result);
    result = '';
  }
}

nXnMatrix(7);

