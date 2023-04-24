// Add some code inside of the for loop below that logs the current value of i to the console on each iteration. Before you run the code: What sequence of numbers do you expect to be logged?

for (let i = 0; i <= 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8, 10
}
 
// The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.

for (let i = 10; i >= 1; i -= 1) {
    console.log(i);
}
console.log("Launch!");

// Alt

for (let i = 10; i >=0; i -= 1) {
    if (i === 0) {
        console.log('Launch!');
    } else {
        console.log(i);
    }
}

// Write a loop that logs greeting three times.

let greeting = 'Aloha!';

for (let i = 0; i < 3; i += 1) {
    console.log(greeting);
}

// Alt

let greeting = 'Aloha!';
let count = 1;

while (count <= 3) {
    console.log(greeting);
    count += 1;
}

// Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.

for (let i = 1; i <= 100; i += 1) {
    console.log(i * 2);
}

// Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
    console.log(array[index]);
    index += 1;
}

/* Take a moment to read the MDN documentation on the continue statement.
Then write a for loop that loops over the elements of the array cities and 
logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console. */

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index++) {
    if (cities[index] === null) {
        continue
    }
    console.log(cities[index]);
}

// The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.
// >> No condition to compare against and stop it
for (let i = 0; i <= 0 ; i += 1) {
  console.log("and on");
}

// Alt

for (let i = 0; ; i += 1) {
    console.log("and on");
    break;
}

// Write a while loop that logs all odd natural numbers between 1 and 40.

index = 1

while (index <= 40) {
    if (index % 2 === 0) {
        index += 1
        continue
    }
    console.log(index);
    index += 1
}

// Alt

let num = 1;

while (num < 40) {
  console.log(num);
  num += 2;
}


// Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let index = 0; index < fish.length; index += 1) {
    console.log(fish[index]);
    if (fish[index] === 'Nemo') {
        break
    }
}

// What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.
// >> While evaluates before executing, do...While executes after, meaning it runs at least once. 
let counter = 0;

while (counter > 0) {
    console.log('Woooot!');
    counter -= 1;
}

let counter = 0;

do {
    console.log('Woooot!');
    counter -= 1;
} while (counter > 0); 

