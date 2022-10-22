function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

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
var isValidBST = function (root) {
	let answer = true;
	const travalsal = (node, max, min) => {
		if (!answer || !node) return;

		if (min !== null && node.val <= min) {
			answer = false;
			return;
		}

		if (max !== null && node.val >= max) {
			answer = false;
			return;
		}

		if (node.left) travalsal(node.left, node.val, min);
		if (node.right) travalsal(node.right, max, node.val);
	};

	travalsal(root, null, null);

	return answer;
};

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

const TEST = makeTest([0, null, 1]);

console.log(isValidBST(TEST));
