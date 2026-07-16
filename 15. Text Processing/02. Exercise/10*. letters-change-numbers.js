function lettersChangeNumbers(input) {
  let words = input.trim().split(/\s+/);

  let total = 0;

  for (let word of words) {
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];

    let number = Number(word.substring(1, word.length - 1));

    let firstPosition;
    let lastPosition;

    if (firstLetter >= 'A' && firstLetter <= 'Z') {

      firstPosition = firstLetter.charCodeAt(0) - 64;
      number /= firstPosition;

    } else {
      firstPosition = firstLetter.charCodeAt(0) - 96;
      number *= firstPosition;
    }

    if (lastLetter >= 'A' && lastLetter <= 'Z') {

      lastPosition = lastLetter.charCodeAt(0) - 64;
      number -= lastPosition;

    } else {
      lastPosition = lastLetter.charCodeAt(0) - 96;
      number += lastPosition;
    }
    total += number;
  }
  console.log(total.toFixed(2));
}

lettersChangeNumbers('A12b s17G');