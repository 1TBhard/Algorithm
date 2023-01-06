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
var oddEvenList = function (head) {
	let odd = head,
		even = head?.next,
		evenHead = even;

	while (even && even.next) {
		odd.next = even?.next;
		odd = odd.next;

		even.next = odd.next;
		even = even.next;
	}

	if (odd && evenHead) {
		odd.next = evenHead;
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

const testCase = makeNodeList([]);

console.log(oddEvenList(testCase));
