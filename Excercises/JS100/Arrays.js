// Write a function that returns the first element of an input array. For example:

function first(array) {
  return array[0]
}

first(['Earth', 'Moon', 'Mars']); // Earth

console.log(first(['Earth', 'Moon', 'Mars']));

// Write a function that returns the last element of an input array. For example:

function last(array) {
  return array[(array.length - 1)]
}

last(['Earth', 'Moon', 'Mars']); // Mars

console.log(last(['Earth', 'Moon', 'Mars']))

// We are given the following array of energy sources.
// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal')

console.log(energy)

// Split the string alphabet into an array of characters.

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.split(''));

// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let count = 0

for (i = 0; (i < scores.length); i += 1) {
  if (scores[i] >= 100) {
    count += 1
  }
}

console.log(count);


/* We've been given an array of vocabulary words grouped into sub-arrays by meaning. 
This is a two-dimensional array or a nested array.
Write some code that iterates through the sub-arrays and logs each vocabulary word to the console. */

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

for (index = 0; (index < vocabulary.length); index += 1) {
  for (sub = 0; (sub < vocabulary[index].length); sub += 1) {
    console.log(vocabulary[index][sub]);
  }
}

// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// Guess: False, because === is a strict equivalency and these arrays are seperate objects.
// Answer: As above

// Note: This would be true, because its the same object in memory.

let array1 = [2, 6, 4];
let array2 = array1;

console.log(array1 === array2); // true


/* How can you check whether a variable holds a value that is an array? 
For example, imagine you start writing a function and want to check whether its argument is an array: */

function filter(input) {
  console.log(Array.isArray(input));// Is input an array?
}

filter([1, 2, 3])

// The destinations array contains a list of travel destinations.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// Write a function that checks whether or not a particular destination is included within destinations,
// without using the built -in method Array.prototype.includes().

// For example: When checking whether 'Barcelona' is contained in destinations,
// the expected output is true, whereas the expected output for 'Nashville' is false.

function contains(match, array) {
  matchfound = false
  for (let i = 0; i < array.length; i++)
    if (match === array[i]) {
      matchfound = true
      break
    }
  return matchfound
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

// Without breaks

function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}


// We generated parts of a passcode and now want to combine them into a string.
// Write some code that returns a string, with each portion of the passcode separated by a hyphen(-).

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs']; 

console.log(passcode.join('-'));
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'



/* We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until it is empty.
If you log the elements you remove, the expected behavior would look as follows. */

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let groceryLength = groceryList.length
for (let i = 0; i < groceryLength; i++) {
  console.log(groceryList.shift())
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []

// Alt.

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}