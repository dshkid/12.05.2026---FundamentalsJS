function stringSubstring(searchedWord, text) {
  text = text.toLowerCase();
  let textWords = text.split(' ');

  if (textWords.includes(searchedWord)) {
    console.log(searchedWord);
  } else {
    console.log(`${searchedWord} not found!`);
  }
}

stringSubstring('javascript', 'JavaScript is the best programming language');