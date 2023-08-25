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
	// input is an array of integers representing a histogram bar, each  bar(integer) has the width of 1 and height of its value
	// Need to try and find the area of the greatres rectangle in the histogram(2 integers sise by side)
	// return a integer which is the greatest area

	// examples
	// heights = [2,1,5,6,2,3] => 10 => (5+6) == greatest rectangle

	let maxArea = 0;
	let stack = [];

	for (let i = 0; i < heights.length; i++) {
		let start = i;
		let height = heights[i];
		while (stack.length && stack[stack.length - 1][0] > height) {
			const [height, index] = stack.pop();
			maxArea = Math.max(maxArea, height * (i - index));
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
