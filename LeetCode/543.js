/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
	let answer = 0;

	const recursive = (node) => {
		if (!node) return -1;

		const rightMax = recursive(node?.right) + 1;
		const leftMax = recursive(node?.left) + 1;

		answer = Math.max(answer, rightMax + leftMax);

		return Math.max(leftMax, rightMax);
	};

	recursive(root);

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

	while (q.length > 0) {
		const targetNode = q.shift();

		if (targetNode.val === null || arr?.length < 1) continue;

		const left = new TreeNode(arr.shift());
		if (left.val !== null) targetNode.left = left;
		q.push(left);

		if (arr.length > 1) {
			const right = new TreeNode(arr.shift());
			if (right.val !== null) targetNode.right = right;
			q.push(right);
		}
	}

	return head;
}

const TEST = makeTest([4, 2, null, 1, 3]);

console.log(diameterOfBinaryTree(TEST));
