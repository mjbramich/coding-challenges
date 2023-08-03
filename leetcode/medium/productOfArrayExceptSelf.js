/* Description
Product of Array Except Self
Medium
19K
1.1K
Companies
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

// My solution
function productExceptSelf(nums) {
	const result = [];

	// These variables will keep track of the product of elements that come before and after the current element, respectively.
	let prefix = 1;
	let postfix = 1;

	// first pass, left to right
	for (let i = 0; i < nums.length; i++) {
		result[i] = prefix;
		prefix *= nums[i];
	}

	// second pass, right to left
	for (let i = nums.length - 2; i >= 0; i--) {
		postfix *= nums[i + 1];
		result[i] *= postfix;
	}

	return result;
}
