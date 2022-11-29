let a = 'a'

// console.log((a % 2) === 0 ? 'even' : 'odd')

if (a % 2 === 0) {
  console.log('even');
} else if (a % 2 === 1) {
  console.log('odd')
} else 
  console.log('Not a number');

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

