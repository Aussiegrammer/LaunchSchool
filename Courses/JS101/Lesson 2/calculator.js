// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on two numbers
// Print the result to Terminal

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'fr';

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function promptResult(output) {
  let message = messages('result', LANGUAGE) + ' ' + output;
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('greeting');

let number1 = undefined;
let number2 = undefined;
let operation = undefined;

function firstNumber() {
  prompt('firstNumber');
  number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }
}

function secondNumber() {
  prompt('secondNumber');
  number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }
}

function getOperation() {
  prompt('operationQuestion');
  prompt('operationOptions');
  operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('operationInvalid');
    operation = readline.question();
  }
}

function outputResult() {
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
  promptResult(output);
}

let answer = undefined;

do {
  firstNumber();
  secondNumber();
  getOperation();
  outputResult();
  prompt('restartPrompt');
  answer = readline.question();
} while (answer[0].toLowerCase() === 'y');
