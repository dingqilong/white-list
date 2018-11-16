////// INSTRUCTIONS /////
// ADD YOUR SOLUTIONS HERE
// COMMENT YOUR SOLUTION OUT BEFORE YOU MAKE A PULL REQUEST
// ADD "SOLUTION BY [YOUR NAME]"

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes() {}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {
// SOLUTION BY Smollet777
// filtering out and sorting all "humans"
// const humans = a.filter(v => v !== -1).sort((a, b) => a - b)
// put sorted "humans" back
// return a.map(v => v !== -1? humans.shift() : -1)
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  const start = 'a'.charCodeAt()
  const end = 'z'.charCodeAt()

  // Generate the Valid Letters according to the test
  let validLetters = [];
  for (i = start; i <= end; i++) {
    validLetters.push(String.fromCharCode(i))
  }

  // arrayfy the given parameter letters
  const letters = str.split('');
  // initialize an empty array of the missing letters
  let missing = [];

  // traverse through the validLetters
  validLetters.forEach(letter => {
    // if a valid letter is not in the item,
    // push it to the `missing` variable
    if (!letters.includes(letter)) {
      missing.push(letter);
    }
  });

  // Checks if missing filled, else return undefined
  return missing.length ? missing : undefined;
}

const letters = 'abcdefghijkmnoprstuvwxyz'
console.log('Missing: ' + missingLetters(letters)) // `Missing: l, q`;


// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
f both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  // CONTRIBUTED SOLUTION
  // for(let i = 1; i <= 100; i++) {
  //   let printNum=true;
  //    if(i % 3 === 0)
  //      console.log('Fizz');
  //    if(i % 5 === 0)
  //      console.log('Buzz');
  //   // if divisable by 3 then i%3 is zero,
  //   // if divisable by 5 then i%5 is zero,
  //   // if divisable by 3 or 5 then i%3*i%5 is zero then don't print
  //    printNum=((i%3*i%5)!==0);
  //   if(printNum) {
  //      console.log(i);
  //   }
  // }
  // CONTRIBUTED SOLUTION
  // for(var i = 1; i <= 100; i++) {
  //   let output = '';
  //   if(i % 3 === 0) {
  //     output += 'fizz';
  //   }
  //   if(i % 5 === 0) {
  //     output += 'buzz';
  //   }
  //   console.log(output || i);
  // }
  // CONTRIBUTED SOLUTION
  // BY Ankita Patil
  // for (let i = 1; i <= 100; i++) {
  //   let output = '';
  //   if (i % 3 === 0) {
  //     output += 'Fizz';
  //   }
  //   if (i % 5 === 0) {
  //     output += 'Buzz';
  //   }
  //   if (output === '') {
  //     output = i;
  //   }
  //   console.log(output);
  // }
}

// Call Function
const output = reverseString('hello');

console.log(output);
=======
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // CONTRIBUTED SOLUTION
  // let arr = [...str];
  // let newArr = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  // return newArr.join("");
  // CONTRIBUTED SOLUTION
  // BY Ankita Patil
  // return str.split("").reduce((reversedString, character) => character + reversedString, "");
  // CONTRIBUTED SOLUTION
  // BY James Robinson
  // if (str.length === 1) {
  //   return str[0];
  // } else {
  //   return reverseString(str.slice(1)) + str[0];
  // }
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // CONTRIBUTED SOLUTION
  //     let isPali = true;
  //     let caseStr = str.toLowerCase()
  //     let arr = caseStr.split('')
  //     for(let i = 0; i < arr.length; i++){
  //         if(arr[i] !== arr[arr.length -1 -i]){
  //             isPali = false;
  //             break;
  //         }
  //     }
  //     return isPali
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // CONTRIBUTED SOLUTION
  // Here is my version of the algorithm.
  // I put the string into an array and I sort it.
  // Then I loop through the array keeping track of the count for each character.
  // I keep track of the "current character" and the "max character" with objects.
  // const sortedStr = str.split('').sort();
  // const maxChar = {char: '', count: 0};
  // const currentChar = {char: '', count: 0};
  // sortedStr.forEach(char => {
  //   if(currentChar.char === char){
  //     currentChar.count++;
  //   } else {
  //     if(maxChar.count < currentChar.count){
  //       maxChar.char = currentChar.char;
  //       maxChar.count = currentChar.count;
  //     }
  //     currentChar.char = char;
  //     currentChar.count = 0;
  //   }
  // });
  // return maxChar.char;
  // CONTRIBUTED SOLUTION
  // BY Romain Guilloteau
  // let letters = {};
  // str
  //   .toLowerCase()
  //   .split('')
  //   .forEach(l => (letters[l] = letters[l] + 1 || 1));
  // const sortedLetters = Object.entries(letters)
  //   .sort((a, b) => a[1] - b[1])
  //   .map(a => a[0]);
  // return sortedLetters[sortedLetters.length - 1];
  // BY Bedirhan Dincer
  // const charMap = {};
  // str
  //   .split('')
  //   .forEach(char => (charMap[char] = charMap[char] ? charMap[char] + 1 : 1));
  // return Math.max(...Object.keys(charMap).map(char => charMap[char]));
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  // CONTRIBUTED SOLUTION
  // for(let i = 1; i <= 100; i++) {
  //   let printNum=true;
  //    if(i % 3 === 0)
  //      console.log('Fizz');
  //    if(i % 5 === 0)
  //      console.log('Buzz');
  //   // if divisable by 3 then i%3 is zero,
  //   // if divisable by 5 then i%5 is zero,
  //   // if divisable by 3 or 5 then i%3*i%5 is zero then don't print
  //    printNum=((i%3*i%5)!==0);
  //   if(printNum) {
  //      console.log(i);
  //   }
  // }
  // CONTRIBUTED SOLUTION
  // for(var i = 1; i <= 100; i++) {
  //   let output = '';
  //   if(i % 3 === 0) {
  //     output += 'fizz';
  //   }
  //   if(i % 5 === 0) {
  //     output += 'buzz';
  //   }
  //   console.log(output || i);
  // }
  // CONTRIBUTED SOLUTION
  // BY Ankita Patil
  // for (let i = 1; i <= 100; i++) {
  //   let output = '';
  //   if (i % 3 === 0) {
  //     output += 'Fizz';
  //   }
  //   if (i % 5 === 0) {
  //     output += 'Buzz';
  //   }
  //   if (output === '') {
  //     output = i;
  //   }
  //   console.log(output);
  // }
  // CONTRIBUTED SOLUTION
  // BY Romain Guilloteau
  // for (let i = 1; i <= 100; i++) {
  //   console.log([
  //     (i % 3 === 0 ? 'Fizz' : ''),
  //     (i % 5 === 0 ? 'Buzz' : ''),
  //   ].join('') || i);
  // }
  
  // CONTRIBUTED SOLUTION
  // By Ashish S
  // for (let i = 1; i < 101; i++) {
  //   let a = i % 3 ? (i % 5 ? i : 'Buzz') : i % 5 ? 'Fizz' : 'FizzBuzz';
  //   console.log(a);
  // }
}

// Call Function
const output = reverseString('hello');

console.log(output);
>>>>>>> e8090fea1d9fe2c208a8f8ce4cc46be9f287b108
