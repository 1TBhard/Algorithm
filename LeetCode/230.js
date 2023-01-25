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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	const arr = [];

	// LVR 로 서칭
	const recursive = (curNode) => {
		if (curNode.left) recursive(curNode.left);

		arr.push(curNode.val);

		if (curNode.right) recursive(curNode.right);
	};

	recursive(root);

	return arr[k - 1];
};
