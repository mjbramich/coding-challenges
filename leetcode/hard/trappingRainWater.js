/* Description
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

// My solution
var trap = function (height) {
	// input is an array of integers(positive) representing heights
	//return integer that represnts amount of water that can be held

	if (!height.length) {
		return 0;
	}

	let [left, right] = [0, height.length - 1];
	let leftMax = height[left];
	let rightMax = height[right];
	let rain = 0;

	while (left < right) {
		if (leftMax < rightMax) {
			left += 1;
			leftMax = Math.max(leftMax, height[left]);
			rain += leftMax - height[left];
		} else {
			right -= 1;
			// updating Max before adding, so wont be a negative
			rightMax = Math.max(rightMax, height[right]);
			rain += rightMax - height[right];
		}
	}

	return rain;
};
