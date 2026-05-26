function rightPlace(string, char, checkString) {
  let result = string.replace('_', char);

  if (result === checkString) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}

rightPlace('Str_ng', 'i', 'String');