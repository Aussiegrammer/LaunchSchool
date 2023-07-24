const readline = require('readline-sync');

function clearScreen() {
  console.clear;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function welcomeMessage() {
  prompt("Welcome to the loan Calculator!");
}
function printLine() {
  prompt('--------------------------------------');
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

function trimSymbols(input) {
  if (input.at(0) === '$') {
    return input.slice(1);

  } else if (input.at(-1) === '%') {
    return input.slice(0, -1);

  } else {
    return input;
  }
}

function getLoanAmount() {
  prompt("Please enter the total loan amount");
  prompt("Enter 100 or $100 for $100.00");
  let loanAmount = readline.question();
  loanAmount = trimSymbols(loanAmount);

  while (isInvalidNumber(loanAmount)) {
    prompt('Must enter a positive number');
    loanAmount = readline.question();
    loanAmount = trimSymbols(loanAmount);
  }
  return Number(loanAmount);
}

function getMonthlyInterestRate() {
  prompt("Please enter the interest rate per annum.");
  prompt("Enter 5 or 5% for 5.0%");
  let interestRate = readline.question();
  interestRate = trimSymbols(interestRate);

  while (isInvalidNumber(interestRate)) {
    prompt('Must enter a positive number');
    interestRate = readline.question();
    interestRate = trimSymbols(interestRate);
  }

  if (interestRate === '0') {
    return 0;
  }

  let yearlyInterestRate = parseFloat(interestRate) / 100;
  let monthlyInterestRate = yearlyInterestRate / 12;
  return monthlyInterestRate;
}

function getLoanDuration() {
  prompt("Finally, please enter the loan duration in years");
  prompt("Enter 1 for 1 year or 1.5 for 18 months.");
  let loanDurationYears = readline.question();

  while (isInvalidNumber(loanDurationYears)) {
    prompt("Please enter a positive number");
  }
  let loanDurationMonths = loanDurationYears * 12;
  return loanDurationMonths;
}

function calculateMonthlyPayment(loanAmount, interestRate, loanDuration) {
  if (interestRate === 0) {
    return loanAmount / loanDuration;
  } else {
    return loanAmount * (interestRate /
         (1 - Math.pow((1 + interestRate), (-loanDuration))));
  }
}

function outputResults(loanAmount, monthlyPayment, loanDurationMonths) {
  prompt(`Your weekly payment is $${(parseFloat(monthlyPayment) / 4).toFixed(2)}`);
  prompt(`Your monthly payment is $${(monthlyPayment).toFixed(2)}`);
  prompt(`Your total payment is $${(monthlyPayment * loanDurationMonths).toFixed(2)}`);
  prompt(`Your total interest paid is $${((monthlyPayment * loanDurationMonths) - loanAmount).toFixed(2)}`);
}

function askToRepeatCalc() {
  prompt('Another calculation?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== ('n' || 'N') &&
    answer[0] !== ('y' || 'Y') &&
    answer.toLowerCase === ('yes' || 'no')) {
    prompt('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  return answer[0];
}

function runCalculator() {
  while (true) {
    printLine();

    let loanAmount = getLoanAmount();
    let monthlyInterestRate = getMonthlyInterestRate();
    let loanDurationMonths = getLoanDuration();

    let monthlyPayment = calculateMonthlyPayment(loanAmount,
      monthlyInterestRate, loanDurationMonths);

    printLine();
    outputResults(loanAmount, monthlyPayment, loanDurationMonths);
    printLine();

    if (askToRepeatCalc() === 'n') break;

    clearScreen();
  }
}

clearScreen();
welcomeMessage();
runCalculator();
