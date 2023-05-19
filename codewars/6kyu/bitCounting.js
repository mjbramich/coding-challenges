/* Description

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// My solution 

var countBits = function(n) {
    // convert number to bits/binary
   let binary = []
   let sum = n
   let remainder 
   while(sum > 0){
    
     remainder = sum % 2
     binary.push(remainder)
     sum = Math.floor(sum / 2)
     
   }
   
    // get correct binary order 
    let binaryOrder = binary.reverse()
    
    // count the number of bits in array
    return binaryOrder.reduce((acc, cur) => acc + cur, 0)
  
  };
  
  