/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 반복을 이용
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function (root) {
// 	if (!root) return [];

// 	const answer = [[root.val]];

// 	const appendChildren = (node, arr) => {
// 		if (node.left) arr.push(node.left);
// 		if (node.right) arr.push(node.right);
// 	};

// 	const q = [];

// 	appendChildren(root, q);

// 	let levelCnt = q.length;

// 	while (q.length > 0) {
// 		let temp = [];
// 		for (let i = 0; i < levelCnt; i++) {
// 			let node = q.shift();
// 			temp.push(node.val);
// 			appendChildren(node, q);
// 		}

// 		answer.push(temp);

// 		levelCnt = q.length;
// 	}

// 	return answer;
// };

// 순환 이용
var levelOrder = function (root) {
	const answer = [];

	const traversal = (node, level) => {
		if (!node) return;
		if (!answer[level]) answer[level] = [];
		answer[level].push(node.val);

		traversal(node.left, level + 1);
		traversal(node.right, level + 1);
	};

	traversal(root, 0);

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
		const right = new TreeNode(arr.shift());

		if (left.val !== null) targetNode.left = left;
		if (right.val !== null) targetNode.right = right;

		q.push(left, right);
	}

	return head;
}

const TEST = makeTest([3, 9, 20, null, null, 15, 7]);

console.log(levelOrder(TEST));
