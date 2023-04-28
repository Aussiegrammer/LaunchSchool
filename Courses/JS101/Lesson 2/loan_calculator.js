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

prompt("Welcome to the loan Calculator!");


prompt("Please enter the total loan amount");
let loanAmount = Number(readline.question());

prompt("Please enter the interest rate per annum");
let interestRateYearly = parseFloat(readline.question());

prompt("Finally, please enter the loan duration in years");
let loanDurationYears = Number(readline.question());

let interestRateMonthly = interestRateYearly / 12;
let loanDurationMonths = loanDurationYears / 12;

let monthlyPayment = loanAmount * (interestRateMonthly /
    (1 - Math.pow((1 + interestRateMonthly), (-loanDurationMonths))));

prompt(`Your weekly interest payment is ${parseFloat(monthlyPayment) / 4}`);
prompt(`Your monthly interest payment is ${monthlyPayment}`);
prompt(`Your total payment is ${monthlyPayment * loanDurationMonths}`);