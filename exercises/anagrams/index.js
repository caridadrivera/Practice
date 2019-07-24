// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //anagrams have the same number of characters
// I WANT TO BUILD A HELPER FUNCTION INSTEAD OF WRITING TWO SEPARATE CHARACTER MAPS
const charMapA = charMap(stringA);
const charMapB = charMap(stringB);

//first I want to check to make sure that the keys inside of my character objects are the same lengths
if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
  return false
}

// if the characters are not the same
for (let char in charMapA) {
  if charMapA[char] !== charMapB[char] {
    return false
  }
}
// if both cases above do not checkout, then it must be an anagram
return true

}


function charMap(str) {
  const charMap = {}
  //we are using the replace mathod to account for the spaces and !
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
}




//   console.log(stringA)
// //build character map for both strings
// const charMapA = {}
// for (let char of stringA) {
// // if I have not seen that character before, I want to assign it the number 1, if I have seen it before, I want the value of that key to increase
//   if (charMap[char]) {
//     charMap[char] ++
//   } else {
//     charMap[char] = 1
//   }
// }
//
// const charMapB = {}
// for (let char of stringB) {
// // if I have not seen that character before, I want to assign it the number 1, if I have seen it before, I want the value of that key to increase
//   if (charMapB[char]) {
//     charMapB[char] ++
//   } else {
//     charMapB[char] = 1
//   }
// }
// // Compare the characters and number of characters
// charMapA === charMapB ? true : false
//   console.log("element", strA);

module.exports = anagrams;
