/* Description
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

// My solution
function solution(str) {
    const resultArr = [];

    for (let i = 0; i < str.length; i += 2) {
        if (str.length % 2 && i + 1 === str.length) {
            resultArr.push(str.substr(i, 1) + '_');
        } else {
            resultArr.push(str.substr(i, 2));
        }
    }

    return resultArr;
}