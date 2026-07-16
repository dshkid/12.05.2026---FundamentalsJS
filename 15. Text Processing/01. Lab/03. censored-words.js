function censoredWords(text, word) {
  let censoredLength = word.length;

  let replacement = '*'.repeat(censoredLength);

  while (text.includes(word)) {
    text = text.replace(word, replacement);
  }
  console.log(text);
}

censoredWords('A small sentence with some words', 'small');