/* Description
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

// My solution
var maxSequence = function (arr) {
    if (!arr.length) {
        return 0; // Return 0 for an empty array
    }

    let maxSum = arr[0]; // Initialize maxSum with the first element of the array
    let tempSum = arr[0]; // Initialize tempSum with the first element of the array

    for (let i = 1; i < arr.length; i++) {
        // Start from the second element
        const num = arr[i];

        // Calculate the sum of the current sequence
        tempSum = Math.max(num, tempSum + num);

        // Update maxSum if tempSum is greater
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum > 0 ? maxSum : 0;
};
