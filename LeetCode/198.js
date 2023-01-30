/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length < 3) {
		return nums.length !== 0 ? Math.max.apply(null, nums) : 0;
	}

	let arr = nums.slice(0, 3);
	arr[2] = arr[0] + arr[2];

	for (let i = 3; i < nums.length; i++) {
		let nextNum = Math.max(nums[i] + arr[i - 2], nums[i] + arr[i - 3]);
		arr.push(nextNum);
	}

	return Math.max(arr[arr.length - 1], arr[arr.length - 2]);
};

const NUMS = [0];
console.log(rob(NUMS));
