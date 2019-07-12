// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const str = "fishhsif"

function palindrome(str) {
  // console.log(str)
  const reversedStr = str.split('').reverse().join('')
  if (str === reversedStr) {
    return true
  } else {
    return false
  }
  // return reversedStr
}

module.exports = palindrome;
