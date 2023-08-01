// Q1. Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// numbers.length = 0;
// numbers.splice(0, numbers.length);
// while (numbers.length) {
//  numbers.pop();
//  }


// Q2. What will the following code output?

console.log([1, 2, 3] + [4, 5]); // [1, 2, 3, [4, 5]]

// Correct A: 1,2,34,5
// In JS, + converts the arrays to strings then concates the strings


// Q3. What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // 'goodbye!'

// Correct A: 'hello there'
// In JS Strings are primitive and immutable. JS Creates a copy of the string when assigning to a variable
// In line 2 it is a copy of the string in line 1

// Q4. What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); // Shallow copy
arr2[0].first = 42; // Changes to reference
console.log(arr1); // [ {first: 42 }, {second: "value2" }, 3, 4, 5];


// Q5. The following function unnecessarily uses two return statements to return boolean values. 
// Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

function isColorValid(color) {
  return (color === "blue" || color === "green");
}

const isColorValid2 = color => color === "blue" || color === "green";
const isColorValid3 = color => ["blue", "green"].includes(color);

