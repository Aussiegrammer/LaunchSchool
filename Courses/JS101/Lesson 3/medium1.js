// Q1. For this practice problem, write a program that outputs The Flintstones Rock!
// 10 times, with each line indented 1 space to the right of the line above it.

let padding = 0;
let flintstones = 'The Flintstones Rock!';
do {
  console.log(flintstones.padStart((flintstones.length + padding)));
  padding += 1;
} while (padding < 10 );

// Alt.

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flintstones Rock!");
}


// Q2. Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let altMunstersDescription = "";

for (var i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription.charAt(i).match(/[A-Z]/g)) {
    altMunstersDescription += munstersDescription.charAt(i).toLowerCase();
  } else {
    altMunstersDescription += munstersDescription.charAt(i).toUpperCase();
  }
}

console.log(altMunstersDescription);

// alt.

console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));


// Q3. Alan wrote the following function, which was intended to return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? 
// Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle 
// it gracefully instead of raising an exception or going into an infinite loop.

console.log(factors(5));
console.log(factors(0));

// Q4. Alyssa was asked to write an implementation of a rolling buffer.
// You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

// Is there a difference between these implementations, 
// other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

// #1 will mutate the argument represented by 'buffer', which will be an unintended side effect


// Q5. What will the following two lines of code output?

console.log(0.3 + 0.6); // 0.9
console.log(0.3 + 0.6 === 0.9); // 0.3. 0.3 + (0.6 === 0.9), or, 0.3 + false (0)

// A. 0.89999999999999
// A2. false (0.89999999 === 0.9) === false


// Q6. What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // True but it's probably bait
console.log(NaN === NaN); // False

// === Doesn't work to identify NaN. You can use:

console.log(Number.isNaN(nanArray[0])); // True

// Q7. What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer); // Assigns newAnser
console.log(answer - 8); // Uses answer, not newAnswer. answer is integer == immutable
// 34

// Q8. One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

// Yes, this would modify the data as JS Objects are pass by reference. Because demoObject is used as is, it modifies the original munsters object


// Q9. Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, 
// which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.


function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); // rps(rps("paper"), "rock")


// Q10. Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo()); // "no"

