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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
	let answer = 0;

	if (!root) return 0;

	const hasSum = (node, sum) => {
		if (node === null) return;

		if (node.val + sum === targetSum) {
			answer++;
		}

		hasSum(node.left, sum + node.val);
		hasSum(node.right, sum + node.val);
	};

	const dfs = (node, sum) => {
		if (node === null) {
			return;
		}

		dfs(node.left, sum + node.val);
		dfs(node.right, sum + node.val);
		hasSum(node, 0);
	};

	dfs(root, 0);

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
		const left = leftVal ? new TreeNode(leftVal) : null;
		targetNode.left = left;

		if (left) q.push(left);

		const rightVal = copyArr?.shift();
		const right = rightVal ? new TreeNode(rightVal) : null;
		targetNode.right = right;
		if (right) q.push(right);
	}

	return head;
}

const ARR = [1, null, 2, null, 3, null, 4, null, 5];

const TEST = makeTest(ARR);
const TARGET_SUM = 3;

console.log(pathSum(TEST, TARGET_SUM));
