function login(input) {
  let username = input[0];
  let correctPass = username.split('').reverse().join('');
  let incorrectTry = 0;

  for (let i = 1; i < input.length; i++) {
    let password = input[i];

    if (password === correctPass) {
      console.log(`User ${username} logged in.`);
      return;
    } else {
      incorrectTry++;

      if (incorrectTry === 4) {
        console.log(`User ${username} blocked!`);
        return;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);