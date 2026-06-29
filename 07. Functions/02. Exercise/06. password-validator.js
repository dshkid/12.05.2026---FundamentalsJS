function passwordValidator(password) {

  let isValidLength = checkIsValidLength(password);
  let isAlphanumeric = checkIsAlphanumeric(password);
  let hasMinTwoDigits = checkIfItMinTwoDigits(password);

  if (isValidLength && isAlphanumeric && hasMinTwoDigits) {
    console.log('Password is valid');
  }

  function checkIsValidLength(password) {
    if (password.length >= 6 && password.length <= 10) {
      return true;
    } else {
      console.log('Password must be between 6 and 10 characters');
      return false;
    }
  }

  function checkIsAlphanumeric(password) {
    let pattern = /^\w+$/;

    if (pattern.test(password)) {
      return true;
    } else {
      console.log('Password must consist only of letters and digits');
      return false;
    }
  }

  function checkIfItMinTwoDigits(password) {
    let pattern = /\d{2,}/;

    if (pattern.test(password)) {
      return true;
    } else {
      console.log('Password must have at least 2 digits');

      return false;
    }
  }
}

passwordValidator('logIn');