function passwordGenerator(input) {
  let [str1, str2, str3] = input;
  let concatedStr = str1 + str2;
  let vowels = ['a', 'e', 'o', 'u', 'i'];
  let indexOfStr3 = 0;

  for (let letter of concatedStr) {
    if (vowels.includes(letter)) {
      let replacementLetter = str3[indexOfStr3].toUpperCase();
      concatedStr = concatedStr.replace(letter, replacementLetter);
      indexOfStr3++;

      if (indexOfStr3 >= str3.length) {
        indexOfStr3 = 0;
      }
    }
  }
  console.log(`Your generated password is ${concatedStr.split('').reverse().join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);