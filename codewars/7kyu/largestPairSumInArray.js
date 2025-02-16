/* Description: 
Given a sequence of numbers, find the largest pair sum in the sequence.

For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer. 
*/

// My Solution:
function largestPairSum(numbers) {
  const num1 = Math.max(...numbers);
  const num2 = Math.max(
    ...numbers.filter((num, i, a) => i !== a.indexOf(num1))
  );

  return num1 + num2;
}
