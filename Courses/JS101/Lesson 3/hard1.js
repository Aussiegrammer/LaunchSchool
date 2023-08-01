// Q1. Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// First returns the Object { prop1: 'hi there' }
// Second returns null >> returns undefined

// Q2. What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // { first: [1, 2] };

// numArray = object["first"] references the value of the first: key in the object variable 
// Push mutates this value

// Q3. Given the following similar sets of code, what will each code snippet print?

/*
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one
console.log(`two is: ${two}`); // two
console.log(`three is: ${three}`); // three
*/ 

// In the above, the variables are reassigned within the scope of the function and never returned or reassigned outside that scope

/*
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one
console.log(`two is: ${two}`);// two
console.log(`three is: ${three}`);// three
*/

// Same as above, the variables are reassigned within the scope of the function
// The reasignment taken place just points them to the new arrays

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // two
console.log(`two is: ${two}`); // three
console.log(`three is: ${three}`); // one

// In this case, the arguments passed into the function are passed by reference, and refers to the arrays defined in 83/84/85
// The splice method mutates the array referenced


// Q4. IP address method validation

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (!(dotSeparatedWords.length === 4)) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return true;
    }
  }

  return true;
}

