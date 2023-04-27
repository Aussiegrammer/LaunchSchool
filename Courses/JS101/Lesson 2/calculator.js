// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on two numbers
// Print the result to Terminal

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the Calculator!');

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('Hmm... that doesn\'t look like a valid number.');
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('Hmm... That doesn\'t look like a valid number.');
  number2 = readline.question();
}

console.log(`${number1}, ${number2}`);

prompt('What operation would you like to perform?\n' +
            '1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1': // Add
    output = Number(number1) + Number(number2);
    break;
  case '2': // Subtract
    output = Number(number1) - Number(number2);
    break;
  case '3': // Multiply
    output = Number(number1) * Number(number2);
    break;
  case '4': // Divide
    output = Number(number1) / Number(number2);
    break;
}
console.log (`The result is: ${output}`);

