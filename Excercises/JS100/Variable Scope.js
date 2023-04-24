// What will the following code log to the console and why? Don't run it until you have tried to answer.
console.log(greeting);
var greeting = 'Hello world!';

// Guess: Error: greeting not initialized. 
// Answer: 'undefined'
// Declared variables are hoisted (initialzied witht he value of undefined at the start of the scope)



// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);
let greeting = 'Hello world!';

// Guess: Same as above
// Answer: Error: Cannot access before initializing
// 'let' variables are not accessible before they are declared



// What will the following code log to the console and why? Don't run it until you have tried to answer.
if (true) {
  let myValue = 20;
}

console.log(myValue);

// Guess: ReferenceError: cannot access before initializing. 'let' is locally scoped in the if{} block. 
// Answer: ReferenceError: myValue is not defined at all. 


// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// Guess: 1 
// >> true is truthy, so it will run. a is within the scope of the function, and accessible.
// Answer: 1

// What will the following code log to the console and why? Don't run it until you have tried to answer.


function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// Guess: 1, then it will error saying a cannot be defined as it already has been declared. 
// Answer: ReferenceError, cannot access 'a' before initialization
// https://launchschool.com/exercises/8bd04112 Temporal Dead Zone
// Note that the variable a defined on line 6 shadows the variable a defined on line 2.

// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// Guess: false
// the variable b defined in line 75 is isolated to the block and does not affect the earlier scoped 'b' variable
// Answer: false
// As above, the b in line 75 is not accessible to any outer scope.


// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// Guess: ReferenceError, as there is no defined 'a' variable within the function block and it also is not passed in
// Answer: 1
// 'a' is declared at the top, and is accessible, even in the body of myFunction

// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// Guess: 2
// The function calls / requests for a variable to be passed into it, and we pass 'b', or '2' into it.
// Answer: 2
// Variable shadowing example again. 

// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// Guess: Errors out for trying to reassign a constant variable.
// Answer: TypeError: Assignment to constant variable.

// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// Guess: 'Jane Doe' 
// Even though its a constant, you can change the paramaters within the array
// Answer: { firstName: 'Jane', lastName: 'Doe' }
// Const cannot be REASSIGNED but they are not IMMUTABLE.

