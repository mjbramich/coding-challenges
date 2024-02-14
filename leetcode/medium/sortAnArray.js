/* Description
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
*/

// My solution

var sortArray = function (nums) {
	// input is an array of integers
	// Output array sorted is ascending order

	// Using Merge Sort

	// Base Case
	if (nums.length <= 1) {
		return nums;
	}

	let mid = Math.floor(nums.length / 2);

	// Break array down into sub arrays
	let left = sortArray(nums.slice(0, mid));
	let right = sortArray(nums.slice(mid));

	// Returning the array sorted
	return merge(left, right);
};

function merge(left, right) {
	// Hold new sortedArray
	let result = [];

	while (left.length && right.length) {
		// use this comparison so sorting algo will be stable
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	// if one array is longer than the other add it to the sorted array

	return [...result, ...left, ...right];
}
