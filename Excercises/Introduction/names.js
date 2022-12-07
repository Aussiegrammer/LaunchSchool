let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1
}

console.log(upperNames);

let upperNames2 = [];
for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames2.push(upperCaseName);
}

console.log(upperNames2); 

names.forEach(function(name) {
  console.log(name);
});

names.forEach(name => console.log(name));