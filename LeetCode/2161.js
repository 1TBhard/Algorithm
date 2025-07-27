/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
	const front = [];
	const pivotList = [];
	const end = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < pivot) {
			front.push(nums[i]);
		} else if (nums[i] > pivot) {
			end.push(nums[i]);
		} else {
			pivotList.push(nums[i]);
		}
	}

	return [...front, ...pivotList, ...end];
};
