/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
	let answer = -1;
	let left = 0;
	const allSum = nums.reduce((acc, cur) => acc + cur, 0);

	for (let i = 0; i < nums.length; i++) {
		let tempRight = 0;

		if (i === 0) {
			left = 0;
		} else {
			left += nums[i - 1];
		}

		tempRight = allSum - (left + nums[i]);

		if (tempRight === left) return i;
	}

	return answer;
};

console.log(pivotIndex([-1, -1, 0, 0, -1, -1]));
