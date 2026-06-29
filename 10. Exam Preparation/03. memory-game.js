function memoryGame(array) {
  let elements = array.shift().split(' ');

  let command = array.shift();

  let movesCount = 0;

  while (command !== 'end') {
    let [index1, index2] = command.split(' ').map(Number);
    movesCount++;

    if (index1 === index2 || index1 < 0 || index2 < 0 || index1 >= elements.length || index2 >= elements.length) {
      console.log('Invalid input! Adding additional elements to the board');
      let newElement = `-${movesCount}a`;
      let midIndex = elements.length / 2;

      elements.splice(midIndex, 0, newElement, newElement);
    } else {
      let firstElement = elements[index1];
      let secondElement = elements[index2];

      if (firstElement === secondElement) {
        console.log(`Congrats! You have found matching elements - ${firstElement}!`);
        let minIndex = Math.min(index1, index2);
        let maxIndex = Math.max(index1, index2)

        elements.splice(maxIndex, 1);
        elements.splice(minIndex, 1);

        if (elements.length === 0) {
          console.log(`You have won in ${movesCount} turns!`);
          return;
        }

      } else {
        console.log('Try again!');

      }
    }
    command = array.shift();
  }

  console.log('Sorry you lose :(');
  console.log(elements.join(' '));
}

memoryGame([
  "a 2 4 a 2 4",
  "0 3",
  "0 2",
  "0 1",
  "0 1",
  "end"
]
);