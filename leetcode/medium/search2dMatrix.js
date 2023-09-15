/* Description
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

// My solution
var searchMatrix = function (matrix, target) {
	let [rows, cols] = [matrix.length, matrix[0].length];
	let [top, bot] = [0, rows - 1];

	// search rows
	while (top <= bot) {
		let row = Math.floor((top + bot) / 2);
		if (target > matrix[row][cols - 1]) {
			top = row + 1;
		} else if (target < matrix[row][0]) {
			bot = row - 1;
		} else {
			// if previous condition not met, target might be in current row.
			break;
		}
	}

	if (!(top <= bot)) {
		return false;
	}

	let row = Math.floor((top + bot) / 2);
	let [l, r] = [0, cols - 1];
	while (l <= r) {
		let m = Math.floor((l + r) / 2);
		if (target > matrix[row][m]) {
			l = m + 1;
		} else if (target < matrix[row][m]) {
			r = m - 1;
		} else if (target == matrix[row][m]) {
			return true;
		}
	}
	return false;
};
