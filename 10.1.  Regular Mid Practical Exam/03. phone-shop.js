function phoneShop(array) {

  let phoneList = array.shift().split(', ');

  let commands = array.shift();

  while (commands !== 'End') {

    let [command, phone] = commands.split(' - ');

    if (command === 'Add') {
      if (!phoneList.includes(phone)) {
        phoneList.push(phone);
      }

    } else if (command === 'Remove') {
      if (phoneList.includes(phone)) {
        let index = phoneList.indexOf(phone);
        phoneList.splice(index, 1);
      }

    } else if (command === 'Bonus phone') {
      let [oldPhone, newPhone] = phone.split(':')

      if (phoneList.includes(oldPhone)) {
        let index = phoneList.indexOf(oldPhone);
        phoneList.splice(index + 1, 0, newPhone);
      }

    } else if (command === 'Last') {
      if (phoneList.includes(phone)) {
        let index = phoneList.indexOf(phone);
        phoneList.splice(index, 1);
        phoneList.push(phone);
      }
    }
    commands = array.shift();
  }
  console.log(phoneList.join(', '));
}

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End"])
  ;