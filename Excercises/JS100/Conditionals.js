/* Without looking at your notes or MDN, try to recall all values that count as falsy in JavaScript.
>> False
>> Null
>> 0
>> undefined
>> '', ""
>> NaN
>> -0
>> 0n
*/ 

/* The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0. */

let randomNumber = Math.round(Math.random());
if (randomNumber === 1) {
    console.log("Yes!");
    } else {
        console.log("No.");
    }
}

// Alt. 1 is truthy and 0 is falsy so we can use just 'if'

let randomNumber = Math.round(Math.random());
if (randomNumber) {
    console.log("Yes!");
    } else {
        console.log("No.");
    }
}

// Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

console.log(randomNumber ? 'Yes!' : 'No.')

/* Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather. */

let weather = "rainy"

if (weather === "sunny") {
    console.log("It's a beautiful day!");
} else if (weather === "rainy") {
    console.log("Grab your umbrella.");
} else {
    console.log("Let's stay inside.");
}

/* Take a look at the code below. Without running it, determine what it will log to the console.
If you're not sure, refer to the MDN documentation on switch statements. 
>> 'neigh' 

actual: 
'neigh' 
'tweet tweet' 
'*cricket*' 

Reason: It executes until a break is encountered. 

*/

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.

let weather2 = "rainy"

switch (weather2) {
    case 'sunny':
        console.log("It's a beautiful day!");
        break;
    case 'rainy': 
        console.log("Grab your umbrella.");
        break;
    case 'snow':
        console.log("Grab your jacket!");
        break;
    default:
        console.log("Let's stay inside.");
}

// Predict the output of the following code:
// True

if (false || true) {
    console.log('Yes!');
} else {
    console.log('No...');
}

// Predict the output of the following code:
// False

if (true && false) {
    console.log('Yes!');
} else {
    console.log('No...');
}

// Without running the below code, determine what will be logged to the console.
// $3.99, because of ! before sale in the conditional
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.
// True

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?
// The below works as well, but is less clear 
// Answer: Need the parenthesis because of operator precendence 
// (brakingForce < acceleration && speed > 0) || acceleration > 0

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;