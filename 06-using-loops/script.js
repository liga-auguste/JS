function oddNumbers(num1, num2) {
  let output = "";
  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      output = output + "," + i;
    }
  }
  output = output.replace(",", "");
  return output;
}

// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

//i % 2 === 0

// ✅ The function has a first parameter for a word which is a string.
// ✅ The function has a second parameter which contains the character to search for which is a string.
// ✅ Check if the second parameter consists of only one character, if not, quit the function.
// The function returns the number of times the character from the second parameter is present in the word.
// The function should be case insensitive.

function charCount(word, letter) {
  if (letter.length > 1) return;
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    if (currentLetter.toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
