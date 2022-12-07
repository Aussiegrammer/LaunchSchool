function factorial(num) {
  let sum = 1
  while (num > 0) {
    sum *= num
    num -= 1
  }
  return sum
}

// Alt.

function factorial(number) {
  If (n === 1) {
    return 1;
  }
  return n * factorial (n - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

// recursive

