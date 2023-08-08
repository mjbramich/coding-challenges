/* Description
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

// My solution

var longestConsecutive = function (nums) {
	// input is an unsorted array of nums.
	// return => length of conecutive elements sequence.

	let set = new Set(nums);
	let maxScore = 0;

	for (const num of [...set]) {
		if (set.has(num - 1)) continue; // not the start of a sequence,
        // start of a sequence will not have a number to the left of it

		let [currNum, score] = [num, 1];

		while (set.has(currNum + 1)) {
			currNum++;
			score++;
		}

		maxScore = Math.max(score, maxScore);
	}

	return maxScore;
};

//Similar but using reduce
var longestConsecutive = function (nums) {
	const set = new Set(nums);

	return [...set].reduce((maxScore, num) => {
		if (!set.has(num - 1)) {
			let currNum = num;
			let score = 1;

			while (set.has(currNum + 1)) {
				currNum++;
				score++;
			}

			return Math.max(maxScore, score);
		}
		return maxScore;
	}, 0);
};

// Alternative solution
var longestConsecutive = function (nums) {
	// input is an unsorted array of nums.
	// return => length of conecutive elements sequence.

	if (nums.length < 1) return 0;

	let max = 1;
	let count = 1;
	let sorted = nums.sort((a, b) => a - b);

	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] === sorted[i + 1]) continue;

		if (sorted[i] === sorted[i + 1] - 1) {
			count++;
			max = Math.max(count, max);
		} else {
			count = 1;
		}
	}

	return max;
};
