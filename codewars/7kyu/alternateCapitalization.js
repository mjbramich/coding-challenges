/* Descriptions:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
*/

// My solution:
function capitalize(s) {
  const capitlizeEvens = s
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c))
    .join("");
  const capitlizeOdds = s
    .split("")
    .map((c, i) => (i % 2 !== 0 ? c.toUpperCase() : c))
    .join("");

  return [capitlizeEvens, capitlizeOdds];
}
