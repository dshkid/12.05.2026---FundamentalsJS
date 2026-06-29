function towns(array) {

  for (let townString of array) {
    let [name, latitude, longitude] = townString.split(' | ');
    latitude = Number(latitude);
    longitude = Number(longitude);

    let townObject = {
      town: name,
      latitude: latitude.toFixed(2),
      longitude: longitude.toFixed(2)
    };
    console.log(townObject);
  }
}

towns(['Sofia | 42.696552 | 23.32601',
  'Beijing | 39.913818 | 116.363625']);