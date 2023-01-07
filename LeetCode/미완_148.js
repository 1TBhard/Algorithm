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
var sortList = function (head) {
	let cur = head?.next;
	let prev = head;

	if (prev && cur && cur.val < prev.val) {
		let temp = cur.next;
		cur.next = prev;
		prev.next = temp;
	}

	while (cur) {
		if (prev && cur.val < prev.val) {
			let temp = head;
			while (temp?.next && temp?.next.val < cur.val) {
				temp = temp.next;
			}
			prev.next = cur.next;

			let tempNext = temp.next;
			temp.next = cur;
			cur.next = tempNext;
		}

		prev = cur;
		cur = cur.next;
	}

	return head;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

// testCase maker
function makeNodeList(arr) {
	const head = new ListNode(arr[0]);
	let temp = head;

	for (let i = 1; i < arr.length; i++) {
		const newNode = new ListNode(arr[i]);
		temp.next = newNode;
		temp = newNode;
	}

	return head;
}

const testCase = makeNodeList([4, 2, 1, 3]);

console.log(sortList(testCase));
