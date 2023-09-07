/* Description
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
*/

// My solution

var threeSum = function (nums) {
	let result = [];
	if (nums.length < 3) {
		return [];
	}
	let sortedNums = nums.sort((a, b) => a - b);

	for (let i = 0; i < sortedNums.length; i++) {
		const a = sortedNums[i];

		if (i > 0 && a === sortedNums[i - 1]) continue; // duplicate, so skip it

		// Already have the firstNum, so just need to break it down like in twoSum.to get remaining two numbers
		let [left, right] = [i + 1, sortedNums.length - 1];

		while (left < right) {
			const threeSum = a + sortedNums[left] + sortedNums[right];
			// greater than 0, since array is sorted go down to a lesser value
			if (threeSum > 0) {
				right--;
				// less than 0, since array is sorted go up to find a greater value
			} else if (threeSum < 0) {
				left++;
			} else {
				result.push([a, sortedNums[left], sortedNums[right]]);
				// to find other combinations, increment a pointer
				left++;
				// check to see that new pointer isnt equal to previous
				while (
					sortedNums[left] === sortedNums[left - 1] &&
					left < right
				) {
					left++;
				}
			}
		}
	}

	return result;
};
