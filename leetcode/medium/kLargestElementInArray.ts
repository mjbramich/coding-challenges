/* Description
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

// My solution

const findKthLargest = (nums: number[], k: number) => {
	// sort nums in descending order
	const sortedArray = nums.sort((a, b) => b - a);

	// adjust for zero based indexing. eg. Want 2nd largest element(5). which is at index 1 in aray. [6,5,4,3,2,1]
	return sortedArray[k - 1];
};
