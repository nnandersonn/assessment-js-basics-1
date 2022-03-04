const readline = require('readline');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log(`Welcome to the password verification tool!`)

reader.question("What is your proposed password?", function(input){
   
    var numberCheck = new RegExp(/\d/)

    if (input.length >= 10 && numberCheck.exec(input) != null){
        console.log(`Your password meets the length and number requirements!\nBeam me up Scotty`)
        console.log(`         ___________________        ____....-----....____
        (________________LL_)   ==============================
            ______\\   \\_______.--'.  \`---..._____...---'
            \`-------..__            \` ,/
                        \`-._ -  -  - |
                            \`-------'
       `)     
    } else if (input.length >= 10){
        console.log(`Your password must include a number. Please try again`)
        console.log(`──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
        `)
    } else {
        console.log(`Your password must be at least 10 characters long. Please try again`)
        console.log(`───▄▄▄
─▄▀░▄░▀▄
─█░█▄▀░█
─█░▀▄▄▀█▄█▄▀
▄▄█▄▄▄▄███▀`)
    }

    reader.close()
});
