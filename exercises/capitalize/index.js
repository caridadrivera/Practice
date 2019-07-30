// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //create the empty array I will return

  const words = []
  // we need to split the string by spaces because there are spaces
  //between the words and we want to grab the first one
  for (let word of str.split(' ')) {
  // word[0] is the first letter of each split word in the sentence
    console.log( word.slice(1))
    words.push(word[0].toUpperCase() + word.slice(1))
    //user slice(1) to remove the first word of the letter, which will give me
    //the second word of the letter and add it to the first word
  }
  return words.join(' ')
}

module.exports = capitalize;
