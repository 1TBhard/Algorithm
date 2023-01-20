/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	const makeTree = (start, end) => {
		if (start > end) {
			return null;
		}
		const midIdx = Math.floor((start + end) / 2);

		const newNode = new TreeNode(nums[midIdx]);
		newNode.right = makeTree(midIdx + 1, end);
		newNode.left = makeTree(start, midIdx - 1);

		return newNode;
	};

	const answer = makeTree(0, nums.length - 1);

	return answer;
};

class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left ?? null;
		this.right = right ?? null;
	}
}

const TEST = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(TEST));
