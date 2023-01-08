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

/* ========== easy ========== */
// var sortList = function (head) {
// 	const arr = [];

// 	while (head) {
// 		arr.push(new ListNode(head.val, null));
// 		head = head.next;
// 	}

// 	arr.sort((a, b) => a.val - b.val);

// 	const answer = arr[0] ?? head;

// 	for (let i = 0; i + 1 < arr.length; i++) {
// 		arr[i].next = arr[i + 1];
// 	}

// 	return answer;
// };

/* ========== mrege-sort ========== */
function sortList(head) {
	if (!head || !head.next) return head;

	let fast = head;
	let slow = head;

	while (fast?.next?.next) {
		fast = fast?.next?.next;
		slow = slow.next;
	}

	fast = slow.next;
	slow.next = null;

	const left = sortList(head);
	const right = sortList(fast);

	return mergeAndSort(left, right);
}

const mergeAndSort = (node1, node2) => {
	const start = new ListNode();
	let temp = start;

	while (node1 && node2) {
		if (node1.val > node2.val) {
			temp.next = node2;
			node2 = node2.next;
		} else {
			temp.next = node1;
			node1 = node1.next;
		}

		temp = temp.next;
	}

	if (node1) temp.next = node1;
	if (node2) temp.next = node2;

	return start.next;
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
