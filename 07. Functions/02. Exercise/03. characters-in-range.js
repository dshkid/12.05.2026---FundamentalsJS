function charactersInRange(firstChar, secondChar) {
  let charInBetween = [];

  let asciiFirstChar = firstChar.charCodeAt();
  let asciiSecondChar = secondChar.charCodeAt();

  let minAscii = Math.min(asciiFirstChar, asciiSecondChar);
  let maxAscii = Math.max(asciiFirstChar, asciiSecondChar);

  for (let ascii = minAscii + 1; ascii < maxAscii; ascii++) {
    let currChar = String.fromCharCode(ascii);
    charInBetween.push(currChar);
  }

  console.log(charInBetween.join(' '));
}

charactersInRange('a', 'd');