/* Description 

Given an array of intergers your solution should find the smallest interger.

For Example:

Given [34,15,88,2] your solution will return 2
Given [34,-345,-1,100] your solution will return -345

You can assume, for the purpose of this kata that the supplied array will not be empty */

//My solution

function findSmallestInt(arr){
    let min = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}