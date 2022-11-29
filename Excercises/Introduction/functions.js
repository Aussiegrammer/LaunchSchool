function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function times(num1, num2) {
  return num1 * num2;
}

let sum = add(20,45);
console.log(sum); // 65

let difference = subtract(80,10);
console.log(difference); // 70

console.log(times(add(20, 45), subtract(80, 10))); // 4550

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // 1 will be printed because in foo() a new bar variable is initialized.

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); // Logs nothing to console because return is above the console.log
                  // Terminates the function early.

// v Function decleration
//           v Function Name
//                         v Function parameters
function multiplyNumbers(num1, num2, num3) { 
  let result = num1 * num2 * num3; // Function Body
  return result; // function return value
}

let product = multiplyNumbers(2, 3, 4);
//                             ^ function arguments

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello'); // Hello, undefined

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718); // 42, 3.1415. 3rd is ignored.
