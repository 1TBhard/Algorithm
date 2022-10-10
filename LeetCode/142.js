// 플로이드 순환 알고리즘 문제

// solution
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	let tuttle = head;
	let rabbit = head;

	while (tuttle !== null) {
		tuttle = tuttle?.next;
		rabbit = rabbit?.next?.next;

		if (tuttle === rabbit) {
			let paddle = head;
			while (paddle !== tuttle) {
				paddle = paddle.next;
				tuttle = tuttle.next;
			}

			return paddle;
		}
	}

	return null;
};

/* ============================================================ */
/**
 * Definition for singly-linked list.
 */
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

	var cycNode = head;
	for (let j = 0; j < cycPos; j++) {
		cycNode = cycNode.next;
	}

	temp.next = cycNode;

	return head;
}

const testCase = makeNodeList([3, 2, 0, -4], 1);

console.log(detectCycle(testCase));
