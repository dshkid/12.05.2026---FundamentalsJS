function multiplicationTable(number) {
  for (let multi = 1; multi <= 10; multi++) {
    console.log(`${number} X ${multi} = ${number * multi}`);
  }
}

multiplicationTable(5);