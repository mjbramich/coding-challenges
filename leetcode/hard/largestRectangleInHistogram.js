/* Description
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.


Example 2:
Input: heights = [2,4]
Output: 4
 

Constraints:
1 <= heights.length <= 105
0 <= heights[i] <= 104
*/

// My solution
var largestRectangleArea = function (heights) {
	let maxArea = 0;
	let stack = [];

	// loop over bars in histogram
	for (let i = 0; i < heights.length; i++) {
		// index and height of each bar
		let start = i;
		let height = heights[i];

		// when the bar is smaller than what we have on the stack we pop it and evaulate it maxArea
		while (stack.length && stack[stack.length - 1][0] > height) {
			const [height, index] = stack.pop();

			maxArea = Math.max(maxArea, height * (i - index)); // i - index is the width 
			//put in the stack the earliest point, from there this height could start.
			start = index;
		}
		stack.push([height, start]);
	}

	// compute values that were able to extended to end of histogram (values still in the stack)
	for (let [height, index] of stack) {
		maxArea = Math.max(maxArea, height * (heights.length - index));
	}

	return maxArea;
};
