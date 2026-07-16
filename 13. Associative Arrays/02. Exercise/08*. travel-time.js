function travelTime(input) {
  let countries = {};

  for (let line of input) {

    let [country, town, cost] = line.split(' > ');
    cost = Number(cost);

    if (!countries[country]) {
      countries[country] = {};
    }

    if (countries[country][town] === undefined ||
      cost < countries[country][town]) {
      countries[country][town] = cost;
    }
  }

  let sortedCountries = Object.keys(countries).sort((a, b) => a.localeCompare(b));

  for (let country of sortedCountries) {

    let towns = Object.entries(countries[country]);

    towns.sort((a, b) => a[1] - b[1]);

    let output = `${country} -> `;

    for (let [town, cost] of towns) {
      output += `${town} -> ${cost} `;
    }

    console.log(output.trim());
  }
}

travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);