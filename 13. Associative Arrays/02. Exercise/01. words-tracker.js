function wordsTracker(array) {
  let targetWords = array.shift().split(' ');
  let wordOccurrences = {};

  for (let targetWord of targetWords) {
    wordOccurrences[targetWord] = 0;
  }

  for (let textWord of array) {
    if (textWord in wordOccurrences) {
      wordOccurrences[textWord]++;
    }
  }
  let entries = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);

  for (let [word, occurrences] of entries) {
    console.log(`${word} - ${occurrences}`);
  }
}

wordsTracker(['this sentence',
  'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);