function palindromeIntegers(array) {

  for (let num of array) {
    let isPalindrome = checkIsPalindrome(num);
    console.log(isPalindrome);
  }

  function checkIsPalindrome(num) {
    let numAsString = String(num);
    let reversedNumAsString = numAsString.split('').reverse().join('');

    return numAsString === reversedNumAsString;
  }
}

palindromeIntegers([123, 323, 421, 121]);