/* Description
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

//My solution
var isValid = function(s) {

    // check to see if number of characters in str is odd
    if (s.length % 2){
      return false;
    } 
    
    var stack = []; // create an empty stack to store opening brackets
    for (let c of s) { // loop through each character in the string
        if (c === ')' && stack[stack.length -1] === '('){ // check to see if c is a closing bracket and last element in stack matches opening bracket, if match, it removes opening bracket from stack, this simulates closing a pair of brackets/
            stack.pop()
        } else if (c === '}' && stack[stack.length -1] === '{'){
            stack.pop()
        } else if (c === ']' && stack[stack.length -1] === '['){
            stack.pop()
        } else { // if not a closing bracket push it onto stack
            stack.push(c)
        }
        
    }
    // check for brackets left on stack
    return !stack.length
};

