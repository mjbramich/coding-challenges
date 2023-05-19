/* Description 
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Examples.
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// My solution 

// Uses the typeof to check each item in the array is a number, then filters the array to return a new array of only the numbers
const filter_list = (l) => l.filter(item =>  typeof item === 'number')

