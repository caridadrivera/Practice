// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //we can reverse numbers just as we would reverse strings by converting an int to a string
  const reversedInt = n.toString().split('').reverse().join('')
  if (n < 0) {
    return parseInt(reversedInt) * -1;
    //if negative I want to turn it positive, if postitive, just have it reversed
  }
  return parseInt(reversedInt);

  // console.log(n)
   // console.log(stringNum);
}

module.exports = reverseInt;
