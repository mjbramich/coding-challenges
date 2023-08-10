/* Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

// My solution

var MinStack = function() {
    this.stack = []
    this.minimum = []


};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
this.stack.push(val)
let min = this.minimum.length ? Math.min(val, this.minimum[this.minimum.length -1]) : val
this.minimum.push(min)

};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
if(this.stack.length === 0) return 

this.stack.pop()
this.minimum.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
if(this.stack.length === 0) return null
return this.stack[this.stack.length-1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
if(this.stack.length === 0) return null
return this.minimum[this.minimum.length - 1]
};
