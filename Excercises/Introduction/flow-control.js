false || (true && false); // False
true || (1 + 2); // True
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // False
(1 + 2) && true; // True
(32 * 4) >= 129; // False
false !== !true; // False
true === 4; // False
false === (847 === '847'); // True
false === (847 == '847'); // False
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// True

// return foo() ? 'bar' : qux();
/* 
if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/ 
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); // This will log 'Not Empty' because the array exists which is truthy

function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string
  }
}

console.log(capsLong('Christian Fisk'));
console.log(capsLong('Gwen'));

function numberRange(number) {
  if ((number >= 0) && (number <= 50)) {
    console.log(`${number} is between 0 and 50.`);
  } else if ((number >= 51) && (number <= 100)) {
    console.log(`${number} is between 51 and 100.`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100.`);
  } else if (number < 0) {
    console.log(`${number} is less than 0.`);
  } else {
    console.log(`${number} is not a number.`);
  }
}

numberRange(25);
numberRange(50);
numberRange(51);
numberRange(105);
numberRange(-5);
numberRange('number');

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

