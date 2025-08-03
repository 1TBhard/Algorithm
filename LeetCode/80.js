/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let answer = nums.length;

	const dict = {};

	for (let i = 0; i < nums.length; i++) {
		const curNum = nums[i];
		if ((dict[curNum] | 0) >= 2) {
			answer--;
			nums.splice(i, 1);
			i--;
			continue;
		}

		dict[curNum] = (dict[curNum] | 0) + 1;
	}

	return answer;
};

const params = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(params));
