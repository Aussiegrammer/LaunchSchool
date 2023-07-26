// Q1. Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// Guess: No, it should add a 4th element with 3 undefined in between the 3rd index and 6th.
// A. [ 1, 2, 3, <3 empty items>, 5 ]. Note that they are not undefined, they are 'empty'.

// numbers[4];  // what will this line return?
// undefined


// Q2.  How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//A.

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));


// Q3. Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

Object.keys(ages).includes("Spot"); // False
Object.keys(ages).includes("Lily"); // True

// Alt.

ages.hasOwnProperty('Spot'); // False
ages.hasOwnProperty('Lily'); // True


// Q4. Using the following string, create a new string that contains all 
//     lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newMunstersDescription = munstersDescription.toLowerCase();
newMunstersDescription = newMunstersDescription.replace('the', 'The');
console.log(newMunstersDescription);

// Alt. 

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(munstersDescription);