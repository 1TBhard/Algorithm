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

// 느린 정답
// var isSymmetric = function (root) {
// 	const arr = new Array(2);

// 	const q = [[root, 1]];
// 	while (q.length > 0) {
// 		let [curNode, idx] = q.shift();

// 		arr[idx] = curNode.val;

// 		if (curNode.left) {
// 			q.push([curNode.left, idx * 2]);
// 		}
// 		if (curNode.right) {
// 			q.push([curNode.right, idx * 2 + 1]);
// 		}
// 	}

// 	for (let depth = 1; 2 ** depth < arr.length; depth++) {
// 		for (let j = 0; j < 2 ** (depth - 1); j++) {
// 			if (arr[2 ** depth + j] !== arr[2 ** (depth + 1) - (j + 1)]) return false;
// 		}
// 	}

// 	return true;
// };

// 더 빠르게
var isSymmetric = function (root) {
	let flag = false;
	const recursive = (leftNode, rightNode) => {
		if (flag) return;

		if (leftNode?.val !== rightNode?.val) {
			flag = true;
			return;
		}

		if (leftNode?.left || rightNode?.right) {
			recursive(leftNode?.left, rightNode?.right);
		}

		if (leftNode?.right || rightNode?.left) {
			recursive(leftNode.right, rightNode.left);
		}
	};

	recursive(root.left, root.right);

	if (flag) return false;

	return true;
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

const DATA = [1, 0];
const ROOT = makeTest(DATA);

console.log(isSymmetric(ROOT));
