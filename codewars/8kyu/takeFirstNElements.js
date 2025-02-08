/* Description:
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
If you need help, here's a reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

// My solution
function take(arr, n) {
  const newArr = [];

  const end = Math.min(n, arr.length);

  for (let i = 0; i < end; i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}
