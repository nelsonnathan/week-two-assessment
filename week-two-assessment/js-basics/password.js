const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

reader.question("Welcome to the password validator! Please input your password:", function(answer) {
    if (answer.length > 9 && answer.includes('1') === true) {
        console.log("Success! Your password is strong.")
    } else {
        console.log('Uh oh! You need to strengthen your password by meeting the 10 character requirement as well as adding the number 1.')
    }
  })

