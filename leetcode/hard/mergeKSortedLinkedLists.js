/* Description
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
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
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	// turn all lists into an array.
	let result = [];
	for (let i = 0; i < lists.length; i++) {
		while (lists[i]) {
			result.push(lists[i].val);
			lists[i] = lists[i].next;
		}
	}

	// sort created array
	let sortedArr = mergeSort(result);
	let newHead = new ListNode(0);
	let refToHead = newHead;

	// create new List
	while (sortedArr.length) {
		newHead.next = new ListNode(sortedArr.shift());
		newHead = newHead.next;
	}

	return refToHead.next;
};

function mergeSort(arr) {
	// base case
	if (arr.length <= 1) {
		return arr;
	}

	let mid = Math.floor(arr.length / 2);

	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

function merge(left, right) {
	let result = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return [...result, ...left, ...right];
}

// Alternative solution (BETTER)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	if (!lists.length) {
		return null;
	}

	if (lists.length <= 1) {
		return lists[0];
	}

	while (lists.length > 1) {
		let list1 = lists.shift();
		let list2 = lists.shift();

		let newList = merge(list1, list2);
		lists.push(newList);
	}

	return lists[0];
};

function merge(list1, list2) {
	let head = new ListNode(0);
	let tail = head;

	// iterate through lists while not at the end
	while (list1 && list2) {
		if (list1.val <= list2.val) {
			tail.next = list1;
			list1 = list1.next;
		} else {
			tail.next = list2;
			list2 = list2.next;
		}
		tail = tail.next;
	}

	tail.next = list1 || list2; // if one list if longer than the other add it to end of sorted list

	return head.next; // reference to head of the list, skip over the dumy node
}
