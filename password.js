const readline = require('readline');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log(`Welcome to the password verification tool!`)

reader.question("What is your proposed password?", function(input){
    if (input.length >= 10){
        console.log(`Your password meets the length requirement`)
    } else {
        console.log(`Your password must be at least 10 characters long. Please try again`)
    }

    reader.close()
  }
