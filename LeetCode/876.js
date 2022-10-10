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
var middleNode = function (head) {
	let temp = head;
	let length = 0;

	while (temp) {
		temp = temp.next;
		length++;
	}

	for (var i = 0; i < Math.floor(length / 2); i++) {
		head = head.next;
	}

	return head;
};
