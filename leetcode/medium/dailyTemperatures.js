/* Description
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

*/

var dailyTemperatures = function (temperatures) {
	// need to compare the currenttemperature in array to future temperature and see how many days till a higher temperatur
	// if no future day is higher return 0
	let result = new Array(temperatures.length).fill(0);
	let stack = [];

	// loop over temperatures
	for (let i = 0; i < temperatures.length; i++) {
		// grab current temperature
		const dailyTemp = temperatures[i];
		// only run while there is a temperature on the stack && daily temp is greater than last value on stack
		while (stack.length && dailyTemp > stack[stack.length - 1][0]) {
			// grab the temperature and index from the top of stack
			const [temp, tempI] = stack.pop();
			// update result array with number of days until hotter temp
			result[tempI] = i - tempI;
		}

		// push both temp and its index to the stack
		stack.push([dailyTemp, i]);
	}
	return result;
};
