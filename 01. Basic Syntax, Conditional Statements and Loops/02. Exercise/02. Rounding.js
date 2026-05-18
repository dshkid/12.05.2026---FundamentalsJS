function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let roundedNum = num.toFixed(precision);
  let result = parseFloat(roundedNum);

  console.log(result);
}

rounding(10.5, 3);