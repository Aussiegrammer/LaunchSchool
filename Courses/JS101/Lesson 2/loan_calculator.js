/* let m = p * (j / (1 - Math.pow((1 + j), (-n))));


    m = monthly payment
    p = loan amount
    j = monthly interest rate
    n = loan duration in months
*/

// Ask the user for the total loan amount in dollars
// Ask the user for the interest rate per annum
// >> Convert the per annum interest rate into a monthly percentage
// Ask the user for the loan duration in years
// >> Convert the loan duration into months

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

function getLoanAmount() {
  prompt("Please enter the total loan amount");
  let loanAmount = readline.question();

  while (isInvalidNumber(loanAmount)) {
    prompt('Must enter a positive number');
    loanAmount = readline.question();
  }
  return Number(loanAmount);
}

function getMonthlyInterestRate() {
  prompt("Please enter the interest rate per annum");
  prompt("Example: 5 for 5% or 2.5 for 2.5%");
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    prompt('Must enter a positive number without a % sign');
    interestRate = readline.question();
  }
  let yearlyInterestRate = parseFloat(interestRate) / 100;
  let monthlyInterestRate = yearlyInterestRate / 12;
  return monthlyInterestRate;
}

function getLoanDuration() {
  prompt("Finally, please enter the loan duration in years");
  let loanDurationYears = readline.question();

  while (isInvalidNumber(loanDurationYears)) {
    prompt("Please enter a positive number");
  }
  let loanDurationMonths = loanDurationYears * 12;
  return loanDurationMonths;
}

function calculateMonthlyPayment(loanAmount, interestRate, loanDuration) {
  return loanAmount * (interestRate /
         (1 - Math.pow((1 + monthlyInterest), (-loanDuration))));
}

prompt("Welcome to the loan Calculator!");
console.log('--------------------------------------');

let loanAmount = getLoanAmount();
let monthlyInterestRate = getMonthlyInterestRate();
let loanDurationMonths = getLoanDuration();

let monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyInterestRate, loanDurationMonths);

prompt(`Your weekly interest payment is $${(parseFloat(monthlyPayment) / 4).toFixed(2)}`);
prompt(`Your monthly interest payment is $${(monthlyPayment).toFixed(2)}`);
prompt(`Your total payment is $${(monthlyPayment * loanDurationMonths).toFixed(2)}`);
prompt(`Your total interest paid is $${((monthlyPayment * loanDurationMonths) - loanAmount).toFixed(2)}`);

