function companyUsers(input) {
  let companies = {};

  for (let line of input) {

    let [company, employee] = line.split(' -> ');

    if (!companies[company]) {
      companies[company] = [];
    }

    if (!companies[company].includes(employee)) {
      companies[company].push(employee);
    }
  }

  let sortedCompanies = [];

  for (let company in companies) {
    sortedCompanies.push(company);
  }

  sortedCompanies.sort();

  for (let company of sortedCompanies) {

    console.log(company);

    for (let employee of companies[company]) {
      console.log(`-- ${employee}`);
    }
  }
}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);