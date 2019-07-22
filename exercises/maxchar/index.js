// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //I want to iterate over the str (can turn itinto array or use built in es6 for loop)
  // I want to set a obj in the loop. if you've neever seen the char before, assign the value of 1,
  // if during the loop the char has been seen before, add a ++ and return the obj(for(let char in charMap[]))
  // console.log(str)
  const charMap = {}
  let max = 0
  let maxChar = ''
  // I set up my object where I will create my character map where the key is the word and the value is the number that appears
  // const stringArr = str.split('')
  for (let char of str) {
  //if the character already exists, we will add an entery to characterMap(if you have already seen this character)
    if (charMap[char]) {
      charMap[char] ++
    } else {
      charMap[char] = 1
    }
  //if it doesnt exits, we will assign the number one in order to increase the number when it appears again
  }


  //after building the character map, I want to iterate over my object (for in es6 for loop)
  for(let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }

  }
   return maxChar
  // console.log(maxChar)
}

module.exports = maxChar;
