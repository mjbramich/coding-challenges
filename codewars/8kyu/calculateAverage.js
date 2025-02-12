/* Description: 
Write a function which calculates the average of the numbers in a given array.
Note: Empty arrays should return 0.
*/

// My solution:
const findAverage = (array) =>
  array.length > 0
    ? array.reduce((acc, cur) => acc + cur, 0) / array.length
    : 0;
