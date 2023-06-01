/* Description
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
*/

// My solution
function findMissingLetter(array){
    // need to return the missing letter in array
    
    let alphabet = Array.from({ length: 26 }, (v, i) => {
      return String.fromCharCode(i + 97);
    })  
    
    const startingIndex = alphabet.indexOf(array[0].toLowerCase())
    
    for(let i = 0; i < array.length; i++){
      const currentLetter = array[i].toLowerCase()
      const missingLetter = alphabet[i + startingIndex]
  
      if(currentLetter !== missingLetter){
        return array[0] === array[0].toUpperCase() ? missingLetter.toUpperCase() : missingLetter
      }
    }
  }