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
 * @return {TreeNode}
 */
var invertTree = function (root) {
	const queue = [root];

	while (queue.length > 0) {
		const cur = queue.shift();

		if (!cur) continue;

		const temp = cur.left;
		cur.left = cur.right;
		cur.right = temp;

		if (cur.left) queue.push(cur.left);
		if (cur.right) queue.push(cur.right);
	}

	return root;
};
