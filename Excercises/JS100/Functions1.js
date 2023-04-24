/* Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. 
You may assume that the function arguments will always be numbers. */

function sum(a, b) {
  return a + b;
}

sum(22, 10); // 32

// Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. What is the return value of the function?

function brendanEichQuote() {
  console.log("Always bet on JavaScript");
}

brendanEichQuote();
// logs:
// Always bet on JavaScript.
// Returns: undefined

/* Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: 
the author of the quote and what they said. It then logs the quote to the console, as in the following example. */

function cite(author, quote) {
  console.log(`'${author}' said: "${quote}"`)
}

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

/* Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an exponent of 2
(also known as squaring the number). */

function squaredNumber(num) {
  return num ** 2
}

squaredNumber(3); //9

console.log(squaredNumber(10));

// Determine the output that the following code will log to the console.
// >> It would log 3/1 = 3, etc, but the function isn't invoked in line 55. Need to add parenthesis.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1
    }
}

multiplesOfThree; 

/* Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 
1 if the second string is shorter, and 0 if they're of equal length, as in the following example: */

function compareByLength(str1, str2) {
  if (str1.length > str2.length) {
    return 1
  } else if (str1.length < str2.length) {
    return -1
  } else {
    return 0
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));

// The kind of comparison we implemented here is called three-way comparison and is often used in sorting algorithms to determine 
// the order of the values that are sorted.

// Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

string = 'Captain Ruby'
console.log(string.slice(0,8) + 'JavaScript')

// Alt, simple one. 

'Captain Ruby'.replace('Ruby', 'JavaScript');

// Write a function that takes an ISO 639-1 language code and returns a greeting in that language.

function greet(lang) {
  switch (lang) {
    case 'en':
      return 'Hi!';
      break;
    case 'fr':
      return 'Salut!';
      break;
    case 'pt':
      return 'Olá!';
      break;
    case 'de':
      return 'Hallo!';
      break;
    case 'sv':
      return 'Hej!';
      break;
    case 'af':
      return 'Haai!';
      break;
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

// Note: when using returns, no need to include additional breaks. 
/* 
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}
*/

// Write a function that extracts the language code from a locale. A locale is a combination of a language code,
// a region, and usually also a character set, e.g en_US.UTF-8.

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

// alt:

function extractLanguage2(locale) {
 return locale.split('_')[0];
}

// Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

function extractRegion(locale) {
  return locale.slice(3, 5);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

// Internationalization 2 https://launchschool.com/exercises/5c51e74f



localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'