const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

reader.question("Welcome to the password validator! Please input your password:", function(answer) {
    if (answer.length > 9 && answer.includes('1') === true) {
        console.log(`
         _________                                       ._.
        /   _____/__ __   ___   ___  ____   ______ ______| |
        \\_____ \\ |  |  \\_/___\\/ ___\\/ __ \\ /  ___//  ___/  |
        /       \\   | /\\  \\__\\  \\__\\   __/ \\___ \\ \\___ \\ \\ |
       /_______ /____/  \\___   >___  >___  >____  >____  >__
              \\/             \\/    \\/    \\/     \\/     \\/ \\/
        `)
    } else {
        console.log('Uh oh! You need to strengthen your password by meeting the 10 character requirement as well as adding the number 1.')
    }
  })

