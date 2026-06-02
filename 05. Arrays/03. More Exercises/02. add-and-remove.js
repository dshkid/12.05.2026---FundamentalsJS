function addAndRemove(array) {
  let result = [];
  let num = 1;
  for (let i = 0; i < array.length; i++) {
    let command = array[i];

    if (command === 'add') {
      result.push(num);
    } else if (command === 'remove') {
      result.pop();
    }
    num++;
  }
  if (result.length === 0) {
    console.log('Empty');
  } else {
    console.log(result.join(' '));
  }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);