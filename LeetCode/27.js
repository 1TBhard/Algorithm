/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let answer = nums.length;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			answer--;
			nums.splice(i, 1);
			i--;
		}
	}

	return answer;
};

removeElement([3, 2, 2, 3], 3);
