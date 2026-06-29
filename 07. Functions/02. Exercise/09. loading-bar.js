function loadingBar(number) {
  let bar = '[';
  let percentCount = number / 10;
  let dotCount = 10 - percentCount;

  bar += '%'.repeat(percentCount);
  bar += '.'.repeat(dotCount);
  bar += ']';

  if (number === 100) {
    console.log('100% Complete!');
    console.log(bar);
  } else {
    console.log(`${number}% ${bar}`);
    console.log('Still loading...');
  }
}

loadingBar(100);