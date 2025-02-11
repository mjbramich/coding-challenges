/* Description:
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
The order of the sequence has to stay the same.

Examples:
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

// My solution
const distinct = (a) => a.filter((num, i) => a.indexOf(num) === i);

// More efficient way is to just use a Set
