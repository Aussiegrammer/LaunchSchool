// Determine the length of the string "These aren't the droids you're looking for.".

let str = "These aren't the droids you're looking for."
console.log(str.length) // 43

// Take the string 'confetti floating everywhere' and transform it to upper case.

let str2 = "confetti floating everywhere"
console.log(str2.toUpperCase());

// Implement a function repeat that repeats an input string a given number of times,
// as shown in the example below; without using the pre-defined string method String.prototype.repeat().

function repeat(times, string) {
  newstring = ""

  while (times > 0) {
    newstring + string;
    times -= 1;
  }
  return newstring
}
repeat(3, 'ha'); // 'hahaha'

/* Take the following rhyme:

A pirate I was meant to be!
Trim the sails and roam the sea!

How can you assign this string to a single variable, preserving the line break? */

var pirates =
  'A pirate I was meant to be! \n' + 
  'Trim the sails and roam the sea!'

console.log(pirates)

/* Given strings like the following,
// how can you check whether they're equal irrespective of 
whether the characters they contain are upper or lower case? */

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(string1.toLowerCase() == string2.toLowerCase());

// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes("x"));

// Write a function that checks whether a string is empty or not. For example:

function isBlank(str) {
  !str.length
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

// Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

function isBlank2(str) {
  str = str.trim()
  return !str.length
}

isBlank2('mars'); // false
console.log(isBlank2('  '));   // true
isBlank2('');     // true

// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
// Hate the below answer, but it works.. 

string = 'launch school tech & talk'

function upperFirst(string) {
words = string.split(" ")
index = 0
newstring = ""

while (index < words.length) {
    upperword = (words[index][0].toUpperCase() + words[index].slice(1, words[index].length))
    newstring += upperword
    newstring += " "
    index += 1
    }
return newstring.trim();
}

console.log(upperFirst(string))

// Alt. Seems like there's not a great way to answer this anyway.

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'
