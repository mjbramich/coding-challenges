/* Description
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.
*/

// My solution

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0 || n > 12) {
    throw new RangeError("n must be between 0 and 12");
  }

  for (let i = n - 1; i > 1; i--) {
    n *= i;
  }
  return n;
}

/* using recursion
function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
*/

// Revisited solution
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let res = n;

  for (let i = n; i >= 2; i--) {
    res *= i - 1;
  }

  return res;
}
