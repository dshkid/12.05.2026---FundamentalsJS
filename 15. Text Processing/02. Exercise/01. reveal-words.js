function revealWords(firstString, secondString) {
  let wordsToFill = firstString.split(', ');

  for (let word of wordsToFill) {
    let startTemplate = '*'.repeat(word.length);
    secondString = secondString.replace(startTemplate, word);
  }
  console.log(secondString);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');