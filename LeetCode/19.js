/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let prevNode = null;
	let curNode = head;
	let nodeNum = 1;

	while (curNode.next) {
		curNode = curNode.next;
		nodeNum++;
	}

	curNode = head;
	for (let i = 0; i < nodeNum - n; i++) {
		prevNode = curNode;
		curNode = curNode.next;
	}
	if (prevNode) {
		prevNode.next = curNode.next;
	} else {
		// 노드가 1개일 때
		head = head.next;
	}

	return head;
};

const TEST = makeNodeList([1]);
removeNthFromEnd(TEST, 1);

// ===============================
function ListNode(val) {
	this.val = val;
	this.next = null;
}

// testCase maker
function makeNodeList(arr, cycPos) {
	const head = new ListNode(arr[0]);
	let temp = head;

	for (let i = 1; i < arr.length; i++) {
		const newNode = new ListNode(arr[i]);
		temp.next = newNode;
		temp = newNode;
	}

	return head;
}
