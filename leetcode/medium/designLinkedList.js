/* Description
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:
Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
*/

// My solution

// create ListNode
class ListNode {
	constructor(value, next = null) {
		(this.value = value), (this.next = next);
	}
}

// Init LinkedList
class MyLinkedList {
	constructor() {
		this.head = null;
	}

	get(index) {
		if (index < 0 || !this.head) {
			return -1;
		}

		let curr = this.head;
		let i = 0;

		while (i <= index && curr) {
			if (index === i) {
				return curr.value;
			}
			curr = curr.next;
			i++;
		}

		return -1;
	}

	addAtHead(val) {
		// no head so make head new listnode
		if (!this.head) {
			this.head = new ListNode(val);
			return;
		}

		let newNode = new ListNode(val);
		// point newNode.next to current head
		newNode.next = this.head;
		//update head to be newNode
		this.head = newNode;
	}

	addAtTail(val) {
		// no nodes in list
		if (!this.head) {
			this.head = new ListNode(val);
			return;
		}

		// If nodes in list

		let cur = this.head;
		// iterate over list till end
		while (cur.next !== null) {
			cur = cur.next;
		}

		cur.next = new ListNode(val);
	}

	addAtIndex(index, val) {
		if (index < 0) {
			return;
		}

		if (index === 0) {
			let newNode = new ListNode(val);
			newNode.next = this.head;
			this.head = newNode;
			return;
		}

		let prev = null;
		let cur = this.head;
		let i = 0;

		while (i < index && cur) {
			prev = cur;
			cur = cur.next;
			i++;
		}

		// If index is greater than the length, dont insert
		if (index > i) {
			return;
		}

		let newNode = new ListNode(val);
		prev.next = newNode;
		newNode.next = cur;
	}

	deleteAtIndex(index) {
		// index not valid
		if (index < 0 || !this.head) {
			return -1;
		}

		// skip over current head
		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		let i = 0;
		let previous = null;
		let current = this.head;

		while (current !== null && i < index) {
			previous = current;
			current = current.next;
			i++;
		}

		if (current !== null) {
			previous.next = current.next;
			return;
		}

		return;
	}
}
