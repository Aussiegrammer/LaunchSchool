// Q1. Given a string, return a new string that replaces
// every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));

// Q2. The Array.prototype.reverse method reverses the order of elements in an array, 
// and Array.prototype.sort can rearrange the elements in a variety of ways, including
// descending. Both of these methods mutate the original array as shown below.
//  Write two distinct ways of reversing the array without mutating the original array.
//Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
let numbersReversed = numbers.slice().reverse();
console.log(numbersReversed);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbersReversed = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbersReversed);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Note: toReversed is the perfect solution for this, but does not exist in the current version of Node, need to up to date first.



// Q3. Given a number and an array, determine whether the number is included in the array.

let numbers2 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers2.includes(number1));
console.log(numbers2.includes(number2));


// Q4. Starting with the string: show two different
// ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";

let famousWords2 = "Four score and " + famousWords;
let famousWords3 = "Four score and ".concat(famousWords);

console.log(famousWords2);
console.log(famousWords3);


// Q5. Given an array of numbers [1, 2, 3, 4, 5], mutate the array by 
// removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(2, 1);

console.log(numbers3);


// Q6. Nested Arrays

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flintstones2 = [];
flintstones2 = flintstones2.concat(...flintstones);
let flintstones3 = [].concat(...flintstones);
let flintstones4 = [];
flintstones.forEach(element => {
  flintstones4 = flintstones4.concat(element);
});

console.log(flintstones2);
console.log(flintstones3);
console.log(flintstones4);
console.log(flintstones.flat());



// Q7. Create an array from this object that contains only two elements: Barney's name and Barney's number:

let flintstones5 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

for (const [key, value] of Object.entries(flintstones5)) {
  if (key === 'Barney') {
    let foundBarney = [key, value];
    console.log(foundBarney);
  }
}

// Alt.

console.log(Object.entries(flintstones5).filter(pair => pair[0] === "Barney").shift());


// Q8. How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers4 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers4));
console.log(Array.isArray(table));


// Q9. Back in the stone age (before CSS), we used spaces to align things on the screen. 
// If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";
const TABLE_LENGTH = 40;
/*
let paddedTitle = title.padStart((((TABLE_LENGTH - title.length) / 2) + title.length), " ");
console.log((TABLE_LENGTH - title.length) / 2);
console.log((((TABLE_LENGTH - title.length) / 2) + title.length));
console.log(paddedTitle);
console.log(paddedTitle.length);
*/

let padding = Math.floor((TABLE_LENGTH - title.length) / 2);
console.log(title.padStart(padding + title.length));



// Q10. Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(letter => letter === 't').length);
console.log(statement2.split('').filter(letter => letter === 't').length);


