function extractEmails(text) {

  let pattern = /(^|(?<=\s))([A-Za-z0-9]+([._-][A-Za-z0-9]+)*)@([A-Za-z]+(-[A-Za-z]+)*(\.[A-Za-z]+(-[A-Za-z]+)*)+)/g;

  let matches = text.match(pattern);

  if (matches) {
    for (let email of matches) {
      console.log(email.trim());
    }
  }
}

extractEmails('Please contact us at: support@github.com.');