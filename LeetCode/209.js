/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let j = 0;
	let sum = 0;
	let answer = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		while (sum >= target && j < nums.length) {
			answer = Math.min(answer, i - j + 1);
			sum -= nums[j];
			j++;
		}
	}

	return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
};

const nums = [2, 3, 1, 2, 4, 3];
const target = 7;

console.log(minSubArrayLen(target, nums));
