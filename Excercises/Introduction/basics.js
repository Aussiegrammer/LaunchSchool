let number = 4936

let ones = number % 10
ones

number = (number - ones) / 10
tens = number % 10

number = (number - tens) / 10
hundreds = number % 10

number = (number - hundreds) / 10
number



console.log(ones)
console.log(tens)
console.log(hundreds)
console.log(number)

console.log(typeof 'true') // String
console.log(typeof false) // Bool
console.log(typeof 1.5) // Number
console.log(typeof 2) // Number
console.log(typeof undefined) // undefined
console.log(typeof { foo: 'bar'}) // Object

console.log('5' + 10);  // Logs 510 because the 10 is converted into a string. It is COERCED into a string.
                        // Specifically, the + expression on the string operand produces a string result no matter the 2nd operands. 
// Refactor
console.log(Number('5') + 10);

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)

let foo = ['a', 'b', 'c'];
console.log(foo[3]); // undefined

let names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
];

let pets = { asta: 'dog',
             butterscotch: 'cat',
             pudding: 'cat',
            neptune: 'fish',
            darwin: 'lizard',
          };

console.log('foo' === 'Foo') // False, capital letter
console.log(parseInt('3.1415')); // 3?
console.log('12' < '9'); // True, because Javascript does character-by-character comparison. '1' < '9' is true. 
