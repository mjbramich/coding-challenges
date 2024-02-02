/* Description
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 
Example 1:
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False

*/

// My Solution

// Can only use the functions of a queue to implement this.

// FIFO
// Adding to queue, same as a stack, add it to the end
// Removing from queue is different to stack, have to remove from start
var MyStack = function () {
	this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	// Add to end of queue
	this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
	// Queue only supports removing from start (FIFO)

	// iterate through queue, till we get to final element
	for (let i = 0; i < this.queue.length - 1; i++) {
		// remove start of queue
		let removed = this.queue.shift();

		// add element back in queue,
		this.queue.push(removed);
	}

	// Element which is at end of original queue. (Top of stack)
	return this.queue.shift();
};

/**
 * @return {number}
 */

MyStack.prototype.top = function () {
	// Iterate through queue until we reach final element
	for (let i = 0; i < this.queue.length - 1; i++) {
		// remove el from front of queue then add it to back
		let removed = this.queue.shift();
		this.queue.push(removed);
	}
	// At final element
	let top = this.queue.shift();
	// Add back to end
	this.queue.push(top);

	return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return this.queue.length < 1;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
