/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
	const answer = [];

	if (!root) return [];

	let q = [root];
	while (q.length) {
		let nextQ = [];

		answer.push(q[0]?.val);
		while (q.length) {
			const curNode = q.shift();

			if (curNode.right) {
				nextQ.push(curNode.right);
			}

			if (curNode.left) {
				nextQ.push(curNode.left);
			}
		}

		q = nextQ;
	}

	return answer;
};

class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left ?? null;
		this.right = right ?? null;
	}
}

function makeTest(arr) {
	const head = new TreeNode(arr.shift());

	let q = [head];
	const copyArr = [...arr];

	while (copyArr.length > 0) {
		const targetNode = q.shift();

		const leftVal = copyArr?.shift();
		const left = leftVal !== undefined ? new TreeNode(leftVal) : null;
		targetNode.left = left;

		q.push(left);

		const rightVal = copyArr?.shift();
		const right = rightVal ? new TreeNode(rightVal) : null;
		targetNode.right = right;
		q.push(right);
	}

	return head;
}

const TEST = [];

const ROOT = makeTest(TEST);

console.log(rightSideView(ROOT));
