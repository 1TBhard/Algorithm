/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const realK = k % nums.length;

	const answer = [
		...nums.slice(nums.length - realK, nums.length),
		...nums.slice(0, nums.length - realK),
	];

	for (let i = 0; i < nums.length; i++) {
		nums[i] = answer[i];
	}
};
