const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let fullAnswer = '';

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  fullAnswer += `Seems like a cool name, ${answer}. `;
    rl.question(`What's an activity you like doing? `, (answer) => {
        fullAnswer += `${answer} is a cool activity! `;
        rl.question(`What's your favorite meal? `, (answer) => {
            fullAnswer += `${answer} sounds flavorful`;
            console.log(fullAnswer)
            rl.close();
        });
    });
});


