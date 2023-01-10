/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	let check = true;

	let iterate = (node1, node2) => {
		if (!node1 && !node2) return;

		if (node1?.val != node2?.val) {
			check = false;
			return;
		}
		iterate(node1?.left, node2?.left);
		iterate(node1?.right, node2?.right);
	};

	iterate(p, q);
	return check;
};
