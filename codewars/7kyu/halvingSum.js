/* Description 
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

// My solution
function halvingSum(n) {
    let sum = 0;
    for (let i = n; i >= 1; i = Math.floor(i/2)){
      sum += i;
    }
    return sum;
  }

