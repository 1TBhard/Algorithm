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
var reverseList = function (head) {
	let beforeList = null;

	let answer = null;
	while (head) {
		answer = new ListNode(head.val);
		answer.next = beforeList;
		beforeList = answer;
		head = head.next;
	}

	return answer;
};
