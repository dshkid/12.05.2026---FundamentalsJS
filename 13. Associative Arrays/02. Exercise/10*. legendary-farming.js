function legendaryFarming(input) {
  let keyMaterialQtys = { motes: 0, fragments: 0, shards: 0 };
  let junkMaterialQtys = {};
  let legendariesMaterials = { motes: 'Dragonwrath', fragments: 'Valanyr', shards: 'Shadowmourne' };

  let infoElements = input.split(' ');

  for (let i = 0; i < infoElements.length; i += 2) {
    let qty = Number(infoElements[i]);
    let material = infoElements[i + 1].toLowerCase();

    if (material in keyMaterialQtys) {
      keyMaterialQtys[material] += qty;

      if (keyMaterialQtys[material] >= 250) {
        console.log(`${legendariesMaterials[material]} obtained!`);
        keyMaterialQtys[material] -= 250;
        break;
      }
    } else {
      if (material in junkMaterialQtys) {
        junkMaterialQtys[material] += qty;
      } else {
        junkMaterialQtys[material] = qty;
      }
    }
  }

  let keyMaterialEntries = Object.entries(keyMaterialQtys).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  let junkMaterialEntries = Object.entries(junkMaterialQtys).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [material, qty] of keyMaterialEntries) {
    console.log(`${material}: ${qty}`);
  }

  for (let [material, qty] of junkMaterialEntries) {
    console.log(`${material}: ${qty}`);
  }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');