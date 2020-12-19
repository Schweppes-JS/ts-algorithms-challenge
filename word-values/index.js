// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!


// Solution №1
const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
const alfabetValue = {};

for (let i = 0; i < alfabet.length; i++) {
  alfabetValue[alfabet[i]] = i + 1;
}

function wordValue(arr) {
  let totalValue = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].split('').length; j++) {
      if (arr[i].split('')[j] === ' ') {
        continue;
      }
      else {
        sum = sum + alfabetValue[arr[i].split('')[j]];
      }
    }
    sum = sum * (i + 1);
    totalValue.push(sum);
  }
  return totalValue;
}

// Test №1
console.log(wordValue(["codewars", "abc", "xyz"]));
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]));


// Solution №2
const lettersValue = a =>
  a.map((value, index) => value.replace(' ', '')
    .split('')
    .map(lettet => lettet.charCodeAt() - 96)
    .reduce((accumulator, currentValue) => (accumulator + currentValue), 0) * (index + 1));

// Test №2
console.log(lettersValue(["codew ars", "abc", "xyz"]));
console.log(lettersValue(["abc abc", "abc abc", "abc", "abc"]));
