/* Description: 
    You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. 
    If they are, return true. Else, return false.
    You can assume all values in the array are numbers.
*/

// My soltuion:
function smallEnough(a, limit) {
  // Filter array based on limit, them compare to original
  return a.filter((num) => num <= limit).length === a.length;
}
