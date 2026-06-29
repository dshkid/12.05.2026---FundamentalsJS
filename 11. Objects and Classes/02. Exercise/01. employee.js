function employee(array) {

  for (let employeeName of array) {
    let personalNumber = employeeName.length;

    let employeeObject = {
      name: employeeName,
      personalNumber: personalNumber
    };

    console.log(`Name: ${employeeObject.name} -- Personal Number: ${employeeObject.personalNumber}`);
  }
}

employee(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);