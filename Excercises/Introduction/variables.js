const NAME = 'Victor'
console.log(`Good morning, ${NAME}.`);
console.log(`Good afternoon, ${NAME}.`);
console.log(`Good evening, ${NAME}.`);

let age = 25

console.log(`In 10 years, you will be ${age + 10} years old.`)
console.log(`In 20 years, you will be ${age + 20} years old.`)
console.log(`In 30 years, you will be ${age + 30} years old.`)
console.log(`In 40 years, you will be ${age + 40} years old.`)

{
  let foo = 'bar';
}

// console.log(foo); // Foo is defined in a block so it is out of scope.

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // logs 'bar' because a second variable named 'foo' was initialized in the scope of the block.





