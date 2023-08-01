/* Description
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

// My solution
var topKFrequent = function (nums, k) {
	// input is an array of numbers (nums), k = integer
	// need to return the k most frequent elements

	// need to find highest values in map
	//add it to array and if k is more find more elements

	let map = new Map();
	let array = [];

	// create a map of the nums and their frequency
	for (const num of nums) {
		if (!map.has(num)) {
			map.set(num, 1);
		} else {
			map.set(num, map.get(num) + 1);
		}
	}

	// get a sorted array of the entries from the map, sort them based on their frequency
	let mapEntries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

	for (let i = 0; i < k; i++) {
		array.push(mapEntries[i][0]);
	}

	return array;
};
