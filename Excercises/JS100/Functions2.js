// How can we alter the function definition of greet so that the parameter greeting is assigned a 
// default value of 'Hello' when no argument is passed to the function invocation?

function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

// Change the function greet from the previous exercise, so that it takes two arguments:
// a greeting with 'Hello' as default value, and a recipient with 'world' as default value.The behavior should then be as follows:

function greet2(greeting = 'Hello', recipient = 'World') {
  console.log(`${greeting} ${recipient}!`);
}

greet2();                                // logs: Hello, world!
greet2('Salutations');                   // logs: Salutations, world!
greet2('Good morning', 'Launch School'); // logs: Good morning, Launch School!


// Now we are going to outsource the greeting and recipient to functions.Change the function greet from the previous exercise,
// so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet3() {
  console.log(`${greeting()}, ${recipient()}!`)
}

greet3();

// Calculate BMI https://launchschool.com/exercises/09ca3491

function calculateBMI(height, weight) {
  heightInMeters = height / 100
  return (weight / heightInMeters ** 2).toFixed(2);
}

console.log(calculateBMI(180, 80)); 

// Calculate Cat Age https://launchschool.com/exercises/9ac4af84

function catAge(years) {
  age = 0
  while (years > 0) {
    if (years === 1) age += 15
    if (years === 2) age += 9
    if (years >= 3) age += 4
    years -= 1
  }
  console.log(age)
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

// Alt. using switch statement

function catAge2(humanYears) {
  switch (humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24
    default:
      return 24 + (humanYears - 2) * 4;
  }
}


// Remove Last Char
// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.


function removeLastChar(string) {
  console.log(string.slice(0, string.length - 1))
}


removeLastChar('ciao!');
removeLastChar('hello');

// Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

const template = 'I VERB NOUN.';

let sentence(verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

// The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = () => ({
  level: 1,
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);



