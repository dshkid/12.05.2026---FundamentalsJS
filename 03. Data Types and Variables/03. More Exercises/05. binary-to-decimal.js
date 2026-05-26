function binaryToDecimal(binaryNumber) {
  let binaryAsString = String(binaryNumber);
  console.log(parseInt(binaryAsString, 2));
}

binaryToDecimal(11110000);