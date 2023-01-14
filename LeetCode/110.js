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
 * @return {boolean}
 */
var isBalanced = function (root) {
	let flag = false;

	const recursive = (node) => {
		if (flag || !node) return 0;

		const rightHeight = recursive(node?.right) + 1;
		const leftHeight = recursive(node?.left) + 1;

		if (Math.abs(rightHeight - leftHeight) >= 2) {
			flag = true;
			return 0;
		}

		return Math.max(rightHeight, leftHeight);
	};

	recursive(root);

	if (flag) return false;
	else return true;
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
		const right = new TreeNode(arr.shift());

		if (left.val !== null) targetNode.left = left;
		if (right.val !== null) targetNode.right = right;

		q.push(left, right);
	}

	return head;
}

const TEST = makeTest([1, 2, 2, 3, 3, null, null, 4, 4]);

console.log(isBalanced(TEST));
