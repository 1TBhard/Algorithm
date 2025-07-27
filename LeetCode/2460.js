/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			nums[i] = nums[i] * 2;
			nums[i + 1] = 0;
		}
	}

	const filteredNums = nums.filter((num) => !!num);

	return [...filteredNums, ...Array(nums.length - filteredNums.length).fill(0)];
};
