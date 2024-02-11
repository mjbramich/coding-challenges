/* description
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.

The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.
*/

// My solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
	// loop over linkedList
	let list = [];

	// get length of list
	while (head) {
		list.push(head.val);
		head = head.next;
	}

	// Perform insertion sort on array
	for (let i = 1; i < list.length; i++) {
		let j = i - 1; // point to previous pointer

		while (j >= 0 && list[j] > list[j + 1]) {
			let temp = list[j + 1];
			list[j + 1] = list[j];
			list[j] = temp;
			j--;
		}
	}
	// Create new List with sorted values
	let sortedHead = new ListNode(list.shift());
	// pointer to start of head
	let start = sortedHead;
	// Add remaining values to new List
	while (list.length > 0) {
		sortedHead.next = new ListNode(list.shift());
		sortedHead = sortedHead.next;
	}

	return start;
};
