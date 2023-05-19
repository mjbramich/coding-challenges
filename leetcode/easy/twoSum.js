/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // function to see when 2 numbers in an array equals target
var twoSum = function(nums, target) {
    //nums = array of numbers, target = integer
    // is grabbing the first number
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(j !== i && nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    // return the index of the 2 numbers. in an array
};
