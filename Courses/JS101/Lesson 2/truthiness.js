console.log(true); //true
console.log(false); //false

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

makeLonger("abc", true); // 'abcabc'
makeLonger('xyz', false); // 'xyz'

function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
}

isDigit("5"); // true
isDigit("a"); // false

if (value === true) {
  console.log("It's true!");
} else if (value === false) {
  console.log("It's false!");
} else {
  console.log("It's not true or false!");
}

let num = 5;

if (num < 10) { // same as `if ((num < 10) === true)
  console.log("small number");
} else {
  console.log("large number");
}

function isSmall(number) {
  return number < 10;
}

let num2 = 15;

if (isSmall(num2)) {
  console.log("small number");
} else {
  console.log("large number");
}
