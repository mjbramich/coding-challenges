/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	// Create new list, and assign it to pointer (will be start of list)
	let merged = new ListNode();
	// Create a pointer to use to update list
	let tail = merged;

	// while theres elements in both lists, iterate over it,
	while (list1 && list2) {
		if (list1.val < list2.val) {
			tail.next = list1;
			list1 = list1.next;
		} else {
			tail.next = list2;
			list2 = list2.next;
		}
		// After iteration update pointer
		tail = tail.next;
	}

	// if items still remain in either list, add them to the tail
	if (list1) {
		tail.next = list1;
	} else if (list2) {
		tail.next = list2;
	}

	return merged.next;
};
