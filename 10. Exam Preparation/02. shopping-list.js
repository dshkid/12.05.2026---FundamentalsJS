function shoppingList(array) {
  let groceriesList = array.shift().split('!');

  let command = array.shift();

  while (command !== 'Go Shopping!') {
    let [action, item, newItem] = command.split(' ');

    if (action === 'Urgent') {
      if (!groceriesList.includes(item)) {
        groceriesList.unshift(item);
      }

    } else if (action === 'Unnecessary') {
      let index = groceriesList.indexOf(item);

      if (index !== -1) {
        groceriesList.splice(index, 1);
      }

    } else if (action === 'Correct') {
      let index = groceriesList.indexOf(item);

      if (index !== -1) {
        groceriesList.splice(index, 1, newItem);
      }

    } else if (action === 'Rearrange') {
      let index = groceriesList.indexOf(item);

      if (index !== -1) {
        groceriesList.splice(index, 1);
        groceriesList.push(item);
      }
    }

    command = array.shift();
  }

  console.log(groceriesList.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);