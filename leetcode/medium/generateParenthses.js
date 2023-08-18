/* Description
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8

*/

// My solution
var generateParenthesis = function (n) {
	let result = [];
	function getCombos(string, open, close) {
		if (string.length === n * 2) {
			return result.push(string);
		}

		if (open < n) {
			getCombos(string + '(', open + 1, close);
		}

		if (close < open) {
			getCombos(string + ')', open, close + 1);
		}
	}

	getCombos('', 0, 0);

	return result;
};
