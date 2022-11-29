/*
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);
*/

/*
function getName() {
  let firstName = rlSync.question("What's your first name?\n");
  let lastName = rlSync.question("What's your last name?\n");
  return `${firstName} ${lastName}`
}

console.log(`Hello ${getName()}!`);
*/

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

