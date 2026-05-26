function amazingNumbers(num) {
  let numAsString = num.toString();

  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
  }
  if (sum.toString().includes('9')) {
    console.log(`${numAsString} Amazing? True`);
  } else {
    console.log(`${numAsString} Amazing? False`);
  }
}

amazingNumbers(1233);
amazingNumbers(999);