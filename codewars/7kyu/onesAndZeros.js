/* Description 
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

*/

// My solution 
const binaryArrayToNumber = arr => {
    let integer = 0
    let reversed = arr.reverse()
    
    if(reversed[0] === 1){
        integer = 1
        }
    
    for( let i = 1; i < reversed.length; i++){
      if(reversed[i] === 1){
        
      integer += Math.pow(2, i)
      }
    }
    return integer
  };

