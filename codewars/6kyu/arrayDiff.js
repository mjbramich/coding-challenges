/* Description
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// My solution
function arrayDiff(a, b) {
  // input is 2 arrays, a = list of values, b = values to remove from array a
  // create a new array with filtered values not present in array b
  let c = a.filter((v) => !b.includes(v));

  return c;
}

// Revisited Solution
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
