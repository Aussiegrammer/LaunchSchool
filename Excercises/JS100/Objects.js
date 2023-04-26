// Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);
console.log(student['courses']);
console.log(student.locker);

// Given the below object jane, write code that retrieves the country in which Jane is located.

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country);

// Below is a simple object representing our dog, Fido. On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object.


let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido['age'] = 10
fido['favorite food'] = 'lasagne'

console.log(fido);

// Add a property to the below object, jill, so that the code on line 13 logs 'Hej, Bobby!' to the console.

let jill = {
  firstName: 'Jill',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  }
};

jill.greet('Bobby'); // Hej, Bobby!

// Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

let ocean = {};
let prefix = 'Indian';

ocen.prefix = 'Pacific';

console.log(ocean); // ?

// We are experimenting with some code to get more comfortable working with objects.
// Run the snippet below and explain why "It's true!" is never output.


let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function () {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}

// Write code that stores all of the vehicle property names in an array called keys.


let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

vehicle['keys'] = Object.keys(vehicle);
console.log(vehicle);

// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.


let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
console.log(nestedPerson);

// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person2 = Object.fromEntries(nestedArray);

console.log(person2);

// Cloning a Person https://launchschool.com/exercises/f8fb215b


function clone(obj) {
    return Object.assign({}, obj);
  }
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false