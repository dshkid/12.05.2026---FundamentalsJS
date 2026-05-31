function magicSum(array, magicNum) {

  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];

      if (firstNum + secondNum === magicNum) {
        console.log(`${firstNum} ${secondNum}`);
        ;
      }
    }
  }
}

magicSum([14, 20, 60, 13, 7, 19, 8],
  27
);