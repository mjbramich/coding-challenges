/* Description
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/

// My Solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Define the reverseList function with the head of the linked list as a parameter
const reverseList = function (head) {
	// Create variables to keep track of the current and previous nodes
	let current = head; // Initialize the current node to the head of the list
	let prev = null; // Initialize the previous node to null as there is no previous node for the head

	// Iterate through the linked list, Continue until the end of the list is reached (current is null)
	while (current) {
		// Create a temporary variable to hold the next node in the original list
		let nxt = current.next;

		// Reverse the pointer of the current node to pointer of the previous node
		current.next = prev;

		// Update the previous node to the current node for the next iteration
		prev = current;

		// Move to the next node in the original list using the temporary variable
		current = nxt;
	}

	// Return the reversed linked list (now, the original tail is the new head)
	return prev;
};

// es6 way

const reverseListES6 = function (head) {
	// Create variables to keep track of the current and previous nodes
	let current = head; // Initialize the current node to the head of the list
	let prev = null; // Initialize the previous node to null as there is no previous node for the head

	// Iterate through the linked list, Continue until the end of the list is reached (current is null)
	while (current) {
		[current.next, prev, current] = [prev, current, current.next];
	}

	// Return the reversed linked list (now, the original tail is the new head)
	return prev;
};

let head = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: {
					value: 5,
					next: null,
				},
			},
		},
	},
};

// Recursively
var reverseListRecursive = function(head) {
    // Base case: either no head or we reach the end of our list
    if (head == null || head.next == null){
        return head;
    }
    // Recursively go all the way to the end
    let reversedListHead = reverseList(head.next)
    // Insert myself at the beginning of the reversed list
    head.next.next = head;
    head.next = null;
    // End this recursive call and go to the next one
    return reversedListHead;
};
