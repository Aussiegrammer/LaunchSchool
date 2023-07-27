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

// Q5. What will the following code output?

console.log(false == '0'); // True, implicit / coercion
console.log(false === '0'); // False, strict / explicit

// Q6. We have most of the Munster family in our ages object:

let ages2 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

let agesCombined = Object.assign(ages2, additionalAges);
console.log(agesCombined);


// Q7. Determine whether the name Dino appears in the strings below -- check each string separately:

let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes("Dino"));
console.log(str4.includes("Dino"));

// Q8. How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);

// Q9. In the previous problem, our first answer added 'Dino' to the array like this:

// flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");
console.log(flintstones);

// Q10. Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let adviceMod = advice.slice(0, advice.indexOf('house'));
console.log(adviceMod);