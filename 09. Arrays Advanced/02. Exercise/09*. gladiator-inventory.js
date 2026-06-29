function gladiatorInventory(inventory) {

  let equipments = inventory.shift().split(' ');

  for (let commands of inventory) {
    let tokens = commands.split(' ');
    let action = tokens.shift();

    if (action === 'Buy') {
      let equipment = tokens.shift();

      if (!equipments.includes(equipment)) {
        equipments.push(equipment);
      }

    } else if (action === 'Trash') {
      let equipment = tokens.shift();

      if (equipments.includes(equipment)) {
        let index = equipments.indexOf(equipment);
        equipments.splice(index, 1);
      }

    } else if (action === 'Repair') {
      let equipment = tokens.shift();

      if (equipments.includes(equipment)) {
        let index = equipments.indexOf(equipment);
        equipments.splice(index, 1);
        equipments.push(equipment);
      }

    } else if (action === 'Upgrade') {
      let [equipment, upgradeMaterial] = tokens[0].split('-');

      if (equipments.includes(equipment)) {
        let index = equipments.indexOf(equipment);
        let commandToBeAdded = `${equipment}:${upgradeMaterial}`;
        equipments.splice(index + 1, 0, commandToBeAdded);
      }
    }
  }
  console.log(equipments.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
  'Buy Bag',
  'Trash Shield',
  'Repair Spear',
  'Upgrade SWORD-Steel']);

// SWORD SWORD:Steel Bag Spear