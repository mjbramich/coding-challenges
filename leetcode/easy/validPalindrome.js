/* Description
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

// My solution

var isPalindrome = function (s) {
	const alphaNumerals = [...'abcdefghijklmnopqrstuvwxyz0123456789'];
	let result = '';
	s = s.toLowerCase();
	for (let char of s) {
		if (alphaNumerals.includes(char)) {
			result += char;
		}
	}

	return result === result.split('').reverse().join('');
};

function validPalindrome(s) {
	const isAlpha = (c) =>
		(c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') ||
		(c >= '0' && c <= '9');

	let [l, r] = [0, s.length - 1];

	while (l < r) {
		while (l < r && !isAlpha(s[l])) {
			l += 1;
		}

		while (r > l && !isAlpha(s)[r]) {
			r -= 1;
		}

		if (s[l].toLowerCase() !== s[r].toLowerCase()) {
			return false;
		}

		[l, r] = [l + 1, r - 1];
	}

	return true;
}

function isAlphaNumeric(char) {
	const code = char.charCodeAt(0);
	return (
		(code >= 48 && code <= 57) ||
		(code >= 65 && code <= 90) ||
		(code >= 97 && code <= 122)
	);
}
