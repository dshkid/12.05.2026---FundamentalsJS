function pascalCaseSplitter(text) {
  let words = [];
  let currentWord = '';

  for (let char of text) {
    if (char >= 'A' && char <= 'Z') {
      if (currentWord !== '') {
        words.push(currentWord);
      }
      currentWord = char;
    } else {
      currentWord += char;
    }
  }

  words.push(currentWord);
  console.log(words.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');