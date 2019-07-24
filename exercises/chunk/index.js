// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // first I create the empty array I'm returning at the end of the function
  const chuncked = []
// then I iterate overr the array
  for (let element of array) {
    const last = chuncked[chuncked.length - 1]
    if (!last || last.length === size) {
      chuncked.push([element])
    } else {
      last.push(element)
    }
  }
  return chuncked
}





















// function chunk(array, size) {
//   //we are taking one big array and splitting it into small subarrays
//   // console.log(array,"im an array")
//   // console.log(size, "I'm the size")
//   // this is the array that holds all the different chuncks of data from the original array
//   const chuncked = [] ;
//
//   for(let element of array) {
//     // get the last elemet inside of the chuncked array
//     const last = chuncked[chuncked.length - 1]
//     console.log("im last", last)
//     console.log("im a size", size, chuncked)
//     if (!last || last.length === size) {
//   //divide the array into many subarrays, where each subarray is of length size
//       chuncked.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//   return chuncked
// }

module.exports = chunk;
