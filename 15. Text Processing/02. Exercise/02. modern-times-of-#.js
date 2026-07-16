function modernTimesOfHashTag(string) {
  let text = string.split(' ');
  let hashWords = text.filter(word => word.startsWith('#') && word.length > 1);

  for (let word of hashWords) {
    let strippedWord = word.substring(1);
    let pattern = /^[A-Za-z]+$/;

    if (pattern.test(strippedWord)) {
      console.log(strippedWord);
    }
  }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');