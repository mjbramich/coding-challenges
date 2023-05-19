/* Description
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// My solution
function digitize(n) {
    return  n = 0 ? [n] :  n = n.toString()
                                .split('')
                                .map(value => parseInt(value))
                                .reverse()
   }