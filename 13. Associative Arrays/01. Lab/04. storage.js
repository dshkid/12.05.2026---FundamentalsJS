function storage(array) {
  let map = new Map();

  for (let data of array) {
    let [item, qty] = data.split(' ');
    qty = Number(qty);

    if (map.has(item)) {
      let existingQty = map.get(item);

      let newQty = existingQty + qty;

      map.set(item, newQty);
    } else {
      map.set(item, qty);
    }
  }

  for (let [key, value] of map.entries()) {
    console.log(`${key} -> ${value}`);
  }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);