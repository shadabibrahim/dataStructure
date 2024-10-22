// Question 1. Check Palindrome number

// A palindrome number is a number that remains the same when its digits are reversed.
// For example, 121, 12321 are palindrome numbers.

// Write a function to check if a given number is a palindrome or not.


// Here is the stepwise algorithm in a concise format:

// 1. Convert number to string: numStr = num.toString()
// 2. Split string into array of digits: splitStr = numStr.split("")
// 3. Reverse array of digits: reverseStr = splitStr.reverse()
// 4. Join reversed array into string: joinStr = reverseStr.join("")
// 5. Compare original number with reversed number: return num < 0 ? false : num === Number(joinStr)

// step wise solution
function isPalindrome(num) {
  let numStr = num.toString();
  console.log(numStr);
  let splitStr = numStr.split("");
  console.log(splitStr);
  let reverseStr = splitStr.reverse();
  console.log(reverseStr);
  let joinStr = reverseStr.join("");
  console.log(joinStr);
  return num < 0 ? false : num === Number(joinStr);
}

let x = 12321;
let result = isPalindrome(x);
console.log(result);

//  one line solution

function isPalindromeOneLine(num) {
  return num < 0
    ? false
    : num === Number(num.toString().split("").reverse().join(""));
}

let y = 121;
let resultNew = isPalindromeOneLine(y);
console.log(resultNew);

