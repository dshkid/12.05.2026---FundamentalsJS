function minerTask(input) {
  let resourceQtys = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let qty = Number(input[i + 1]);

    if (resource in resourceQtys) {
      resourceQtys[resource] += qty;
    } else {
      resourceQtys[resource] = qty;
    }
  }

  let entries = Object.entries(resourceQtys);

  for (let [resource, qty] of entries) {
    console.log(`${resource} -> ${qty}`);
  }
}

minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);