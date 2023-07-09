/*Description
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.
*/

// My solution

function sumOfMinimums(arr) {
	let sum = 0;

	// loop over each array
	for (let i = 0; i < arr.length; i++) {
		let min = arr[i][0];
		// loop over items in each subarray
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] < min) {
				min = arr[i][j];
			}
		}
		sum += min;
	}
	return sum;
}

// optimal solution
function sumOfMinimums(arr) {
	return arr.reduce((p, c) => p + Math.min(...c), 0);
}
